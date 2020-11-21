window.addEventListener("load", () => {
  const commands = document.querySelectorAll(
    "article section.commands .command"
  );

  commands.forEach((command) => {
    command.addEventListener("mouseup", (e) => {
      // check if user selected something (example)
      // or if command is already expanded
      if (
        !getSelection().toString() ||
        !e.target.classList.contains("expanded")
      ) {
        ToggleCommand(e.target);
      }
    });
  });

  window.addEventListener("mouseup", (e) => {
    if (!e.target.classList.contains("command")) CloseAll();
  });

  function ToggleCommand(command) {
    let alreadyOpen = false;

    if (command.classList.contains("expanded")) alreadyOpen = true;

    CloseAll();

    // expand command
    if (!alreadyOpen && !command.classList.contains("expanded")) {
      command.classList.add("expanded");
    }
  }

  function CloseAll() {
    // close all commands
    commands.forEach((command) => {
      command.classList.remove("expanded");
    });
  }

  // search bar
  const commandsContainer = document.querySelector("article section.commands");
  const searchInput = document.getElementById("searchInput");
  let typing;

  searchInput.addEventListener("keyup", () => {
    // user is typing
    clearTimeout(typing);

    // hide all commands
    commandsContainer.classList.add("hidden");

    // after time, show results
    typing = setTimeout(() => {
      // search using input
      const filter = searchInput.value.toLowerCase();
      GetInput(filter);

      // show commands
      commandsContainer.classList.remove("hidden");
    }, 500);
  });

  function GetInput(filter) {
    let results = [];

    // for every command
    for (let i = 0; i < commands.length; i++) {
      // get the keyword(s)
      const keyword = commands[i].querySelector(".com");
      txtValue = keyword.textContent || keyword.innerText;
      // if filter is in keyword, show matches
      if (txtValue.toLowerCase().includes(filter)) {
        commands[i].style.display = "";
        results.push(commands[i]);
      } else {
        commands[i].style.display = "none";
      }
    }

    // if there is only one result
    if (results.length == 1) {
      results[0].classList.add("expanded");
    }
    // if there is more then one result
    if (results.length > 1) {
      CloseAll();
    }
  }
});
