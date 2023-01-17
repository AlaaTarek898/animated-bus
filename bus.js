const mood = document.getElementById("mood");
const body = document.querySelector("body");
// mood.addEventListener("click", function () {
//   document.body.style.backgroundImage = "url('./road16.webp')";
//   if ((mood.innerHTML = "morning")) {
//     mood.innerHTML = "evening";
//   } else {
//     mood.innerHTML = "morning";
//   }
//   console.log(mood.innerHTML);
// });

mood.addEventListener("click", function () {
  body.classList.toggle("active");
  if (mood.innerHTML == "morning") {
    mood.innerHTML = "evening";
  } else {
    mood.innerHTML = "morning";
  }
});
