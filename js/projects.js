const projectNames = [
  "Project X",
  "Project Y",
  "Project Z",
  "Project A",
  "Project B",
  "Project C"
];

const projectSkills = [
  "HTML, CSS, Javascript",
  "HTML, NodeJS, Sass",
  "HTML, Bootstrap, Jquery",
  "HTML, Bootstrap, NodeJS",
  "HTML, CSS, Javascript",
  "HTML, NodeJS, Sass",
  "HTML, Bootstrap, Jquery"
];

for (let i = 0; i < 6; i++) {
  document.querySelectorAll(".project__name")[i].innerHTML = `${
    projectNames[i]
  }`;

  document.querySelectorAll(".project__skills")[i].innerHTML = `${
    projectSkills[i]
  }`;
}
