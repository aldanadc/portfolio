async function findDev() {
  const dev =  await Dev.findOne({
    where: {
      basedIn: "Buenos Aires, Argentina",
      stack: "JavaScript - Node.js - MongoDB - MySQL - Semantic HTML - Responsive CSS",
      tools: ["Sass", "Bootstrap", "Bulma", "GitHub", "NPM", "VS Code", "Postman"],
      languages: "Spanish - English - Portuguese",
      englishLevel: "Proficient - C2",
      seniority: "Trainee. Eager to learn and grow",
      softSkills: "Adaptability, fast-learner, easy-going, team-player",
      randomFact: "Has a cat with an Irish name"
    }
  });

  return dev
}


const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");


const showMenu = () => {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    burger.innerHTML = "&#9776;"
    
  }else {
    menu.classList.add("show-menu");
    menu.style.zIndex = "2";
    burger.innerHTML = "&#10006;";
  }
}

burger.addEventListener("click", () => {

  showMenu();

})


let workOverlay = document.getElementsByClassName("overlay");
workOverlay = Array.from(workOverlay);

workOverlay.forEach(element => {
  element.addEventListener("mouseenter", () => {
    element.previousElementSibling.classList.add("hover");
    element.classList.add("hover");
    element.firstElementChild.style.opacity = "1";
    
  })
})

workOverlay.forEach(element => {
  element.addEventListener("mouseleave", () => {
    element.previousElementSibling.classList.remove("hover");
    element.classList.remove("hover");
    element.firstElementChild.style.opacity = "0";
  })
})


// Wrap every letter in a span
const textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 1})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1500,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 1,
    duration: 1500,
    easing: "easeOutExpo",
    delay: 1000
  });


const dev = document.getElementsByClassName("dev");

setTimeout(function showDev() {
  dev[0].style.opacity = "1";
}, 500)




