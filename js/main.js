window.addEventListener("load", () => {
  const commands = document.querySelectorAll(
    "article section.commands .command"
  );

  commands.forEach((command) => {
    command.addEventListener("click", (e) => {
      ToggleCommand(e.target);
    });
  });

  window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("command")) CloseAll();
  });

  function ToggleCommand(command) {
    // console.log(command);
    let alreadyOpen = false;

    if (command.classList.contains("expanded")) alreadyOpen = true;

    CloseAll();

    // open command
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
});
