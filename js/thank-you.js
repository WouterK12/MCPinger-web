window.addEventListener("load", async () => {
  // variables
  const webAge = 8;
  const status = await fetch("https://api.mcsrvstat.us/2/play.wouterk12.com", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      res.online
        ? "online!\nThat's awesome!"
        : "offline. 😮\nIt's turned off during the night, so maybe where I live, it's night.";
    })
    .catch((err) => {
      console.log(`Whoops! An error occured!\n${err}`);
      if (err)
        return "... well actually, an error occured, but it's probably online!";
    });
  if (!localStorage.getItem("fact"))
    localStorage.setItem(
      "fact",
      Math.floor(Math.random * Object.keys(facts).length)
    );

  // facts
  const facts = {
    pizza:
      "My favourite food got to be pizza!\nIt probably stays nice because I don't eat it too often.\nThat could be true: a friend of mine ate pizza too frequently. Now, he doesn't like it anymore.\nI wouldn't want that to happen!",
    owl:
      "I like owls.\nIt's not that I have a specific favourite animal, but an owl is just facinating.\nBecause their head is shaped like a dish, they can hear the tiniest mouse under a thick layer of snow from far away!",
    code: `I really like programming!\nMaybe you had discovered that too, but something you didn't know is that I created my first website when I was ${webAge}.\nThat is about ${
      new Date().getFullYear() - 2002 - webAge
    } years ago!\nAnd of course, because I like programming: the number in the previous sentence is accurate and will change by itself. 😁`,
    printer:
      "In high school, I chose 'Computer Science' as an extra class.\n(In Dutch, that's 'Informatica')\nThere, together with a friend of mine, we created a 2D printer out of old CD drives.\nIt could print the name of the teacher with a marker, only one time! That was because there were lot's of loose contacts...\nBut, mr Delft really liked it, so we got a high score!",
    minecraft: `Minecraft is probably the game I played the most.\nIt's sad that there is no overal playtime in Minecraft, but it got to be a lot.\nI created my own server in 2017, which currently is ${status}`,
    game:
      "At the moment of writing, I am really interested in game development.\nI love playing games with a great storyline and environment.\nMaybe games like 'The Walking Dead' and 'Shadow of the Tomb Raider' are some you've heard of. They're definitely worth trying!",
  };

  // index
  let factIndex = parseInt(localStorage.getItem("fact"));
  console.log(factIndex);
  const fact = Object.values(facts)[factIndex];

  const imgContainer = document.querySelector(".logo");
  imgContainer.src = `img/thank-you/${Object.keys(facts)[factIndex]}.jpg`;

  // save next factIndex
  factIndex++;
  if (factIndex >= Object.keys(facts).length) factIndex = 0;
  localStorage.setItem("fact", factIndex);

  const factContainer = document.querySelector(".fact");
  factContainer.innerText = fact;
});
