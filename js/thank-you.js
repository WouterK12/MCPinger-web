window.addEventListener("load", async () => {
  // variables
  const webAge = 8;

  // jquery because of cors...
  await $.getJSON("https://api.mcsrvstat.us/2/play.wouterk12.com", (res) => {
    if (res.online) {
      status = "online!\nThat's awesome!";
    } else if (res.online === false) {
      status =
        "offline. 😮\nIt's turned off during the night, so maybe where I live, it's night.";
    }
  }).catch((err) => {
    status = "... well actually, an error occured, but it's probably online!";
  });

  // facts
  const facts = {
    pizza:
      "My favorite food has to be pizza!\nIt probably stays nice because I don't eat it too often.\nThat could be true: a friend of mine ate pizza too often. Now, he doesn't like it anymore.\nI will never let that happen!",
    owl:
      "I like owls.\nIt's not that I have a specific favourite animal, but an owl is just facinating.\nBecause they have saucer-shaped faces, they can hear the tiniest mouse under a thick layer of snow from far away!",
    code: `I really like programming!\nMaybe you had discovered that too, but something you didn't know is that I created my first website when I was ${webAge} years old.\nThat is about ${
      new Date().getFullYear() - 2002 - webAge // 👀
    } years ago!\nAnd of course, because I like programming, the number in the previous sentence is accurate and will change by itself. 😁`,
    printer:
      "In high school, I chose 'Computer Science' as an extra class.\n(In Dutch, that's 'Informatica')\nThere, together with a friend of mine, we created a 2D printer out of old CD drives.\nIt could print the name of the teacher with a marker, only one time! That was because there were lots of loose contacts...\nBut, mr Delft really liked it, so we earned a high grade!",
    minecraft: `Minecraft is probably the game I played the most.\nIt's sad that there is no overall playtime in Minecraft, but it got to be a lot.\nI created my own server in 2017, which currently is ${status}`,
    game:
      "At the moment of writing, I am really interested in game development.\nI love playing games with a great storyline and environment.\nMaybe games like 'The Walking Dead' and 'Shadow of the Tomb Raider' are some you've heard of. They're definitely worth trying!",
  };

  // first time
  if (!localStorage.getItem("fact"))
    localStorage.setItem(
      "fact",
      Math.floor(Math.random * Object.keys(facts).length)
    );

  // index
  let factIndex = parseInt(localStorage.getItem("fact"));
  const fact = Object.values(facts)[factIndex];

  // image
  const imgContainer = document.querySelector(".logo");
  imgContainer.src = `img/thank-you/${Object.keys(facts)[factIndex]}.jpg`;

  // save next factIndex
  factIndex++;
  if (factIndex >= Object.keys(facts).length) factIndex = 0;
  localStorage.setItem("fact", factIndex);

  const factContainer = document.querySelector(".fact");
  factContainer.innerText = fact;
});
