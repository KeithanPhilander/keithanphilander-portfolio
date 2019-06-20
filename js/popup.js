let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let popupImg = document.querySelector(".popup__left");
let popupName = document.querySelector(".popup__name");
let popupText = document.querySelector(".popup__text");

const imgSource = [
  "../img/project1.jpg",
  "../img/project2.jpg",
  "../img/project3.jpg",
  "../img/project4.jpg",
  "../img/project5.jpg",
  "../img/project6.jpg"
];

const popupNames = [
  "Project X",
  "Project Y",
  "Project Z",
  "Project A",
  "Project B",
  "Project C"
];

const popupSkills = [
  "HTML, CSS, Javascript",
  "HTML, NodeJS, Sass",
  "HTML, Bootstrap, Jquery",
  "HTML, Bootstrap, NodeJS"
];

const projectDescriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit eget gravida. Elit eget gravida cum sociis natoque.",

  "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Sit amet consectetur adipiscing elit. Orci sagittis eu volutpat odio facilisis mauris sit. Sem viverra aliquet eget sit amet.",

  "el risus commodo viverra maecenas. Auctor neque vitae tempus quam. Vitae et leo duis ut diam quam nulla. Sodales ut etiam sit amet nisl. Sit amet est placerat in egestas.",

  "el risus commodo viverra maecenas. Auctor neque vitae tempus quam. Vitae et leo duis ut diam quam nulla. Sodales ut etiam sit amet nisl. Sit amet est placerat in egestas. ",

  "Habitant morbi tristique senectus et netus et malesuada fames. Faucibus et molestie ac feugiat. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Nec ultrices dui sapien eget mi.",

  "Orci sagittis eu volutpat odio facilisis mauris sit. Sem viverra aliquet eget sit amet. Vel risus commodo viverra maecenas. Auctor neque vitae tempus quam. Vitae et leo duis ut diam quam nulla."
];

btn1.addEventListener("click", () => {
  //add img
  popupImg.style.backgroundImage = `url(${imgSource[0]})`;

  //add heading
  popupName.innerHTML = popupNames[0];

  //add paragraph
  popupText.innerHTML = projectDescriptions[0];
});

btn1.addEventListener("click", () => {
  //add img
  popupImg.style.backgroundImage = `url(${imgSource[0]})`;

  //add heading
  popupName.innerHTML = popupNames[0];

  //add paragraph
  popupText.innerHTML = projectDescriptions[0];
});

btn2.addEventListener("click", () => {
  //add img
  popupImg.style.backgroundImage = `url(${imgSource[1]})`;

  //add heading
  popupName.innerHTML = popupNames[1];

  //add paragraph
  popupText.innerHTML = projectDescriptions[1];
});

btn3.addEventListener("click", () => {
  //add img
  popupImg.style.backgroundImage = `url(${imgSource[2]})`;

  //add heading
  popupName.innerHTML = popupNames[2];

  //add paragraph
  popupText.innerHTML = projectDescriptions[2];
});

btn4.addEventListener("click", () => {
  //add img
  popupImg.style.backgroundImage = `url(${imgSource[3]})`;

  //add heading
  popupName.innerHTML = popupNames[3];

  //add paragraph
  popupText.innerHTML = projectDescriptions[3];
});

btn5.addEventListener("click", () => {
  //add img
  popupImg.style.backgroundImage = `url(${imgSource[4]})`;

  //add heading
  popupName.innerHTML = popupNames[4];

  //add paragraph
  popupText.innerHTML = projectDescriptions[4];
});

btn6.addEventListener("click", () => {
  //add img
  popupImg.style.backgroundImage = `url(${imgSource[5]})`;

  //add heading
  popupName.innerHTML = popupNames[5];

  //add paragraph
  popupText.innerHTML = projectDescriptions[5];
});
