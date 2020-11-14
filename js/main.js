window.addEventListener("load", () => {
  const commands = document.querySelectorAll(
    "article section.commands .command"
  );

  commands.forEach((command) => {
    command.addEventListener("click", (e) => {
      ToggleExtra(e.target);
    });
  });

  function ToggleExtra(command) {
    // console.log(command);
    let alreadyOpen = false;

    if (command.classList.contains("expanded")) alreadyOpen = true;

    // close all commands
    commands.forEach((command) => {
      command.classList.remove("expanded");
    });

    // open command
    if (!alreadyOpen && !command.classList.contains("expanded")) {
      command.classList.add("expanded");
    }
  }
});
