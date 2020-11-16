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
});
