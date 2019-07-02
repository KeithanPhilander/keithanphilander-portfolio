// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyAQDk0_YSUxrR0JTjk8PHfQIi_b0nbjYBM",
//   authDomain: "portfolio-form-8bfec.firebaseapp.com",
//   databaseURL: "https://portfolio-form-8bfec.firebaseio.com",
//   projectId: "portfolio-form-8bfec",
//   storageBucket: "portfolio-form-8bfec.appspot.com",
//   messagingSenderId: "616704807020",
//   appId: "1:616704807020:web:5be8183a6b60fb3a"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// //Reference messages collection
// let messagesRef = firebase.database().ref("messages");

// // listen for form submit
// document.getElementById("contactForm").addEventListener("submit", submitForm);

// // Submit form
// function submitForm(e) {
//   e.preventDefault();

//   // values
//   let name = getInputVal("name");
//   let company = getInputVal("company");
//   let email = getInputVal("email");
//   let phone = getInputVal("phone");
//   let message = getInputVal("message");

//   //Save message
//   saveMessage(name, company, email, phone, message);

//   //Alert
//   document.querySelector(".alert").style.display = "block";

//   //hide alert after 3 seconds
//   setTimeout(function() {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);
// }

// function getInputVal(id) {
//   return document.getElementById(id).value;
// }

// //Save message to firebase

// function saveMessage(name, company, email, phone, message) {
//   let newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     company: company,
//     email: email,
//     phone: phone,
//     message: message
//   });
// }

// function formReset() {
//   setTimeout(() => {
//     document.getElementById("contactForm").reset();
//   }, 2000);
// }
