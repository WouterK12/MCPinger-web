window.addEventListener("load", () => {
  const commands = document.querySelectorAll(
    "article section.commands .command"
  );

  commands.forEach((command) => {
    command.addEventListener("click", (e) => {
      ToggleExtra(e.target);
    });
  });
});

function ToggleExtra(command) {
  // console.log(command.lastElementChild);

  // close all extra's
  commands.forEach((command) => {
    command.lastElementChild.classList.add("hidden");
  });

  // open command extra
  let extra = command.lastElementChild;
  if (extra.classList.contains("hidden")) {
    // show extra
    extra.classList.remove("hidden");
  } else {
    // hide extra
    extra.classList.add("hidden");
  }
}
