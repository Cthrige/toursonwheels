// Get the video
var video = document.getElementById("myVideo");

document.getElementById('vid').play();


// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


/* Progess bar */
const body = document.body;
const documentElement = document.documentElement;
const progressBarEl = document.getElementById('progressBar');

const scrollTop = () => Math.max(body.scrollTop, documentElement.scrollTop);
const handleOnScroll = () => {
  const scrollAmount = scrollTop() / (documentElement.scrollHeight - documentElement.clientHeight);
  const scrollPercentage = Math.round(scrollAmount * 100);
  
  progressBarEl.style.width = `${scrollPercentage}%`
};

window.addEventListener('scroll', handleOnScroll);


/* Scroll content - slider ind fra siden */
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


/* Fact generator */
var factPlaceholder = document.getElementById("cat-fact");
var showFact = document.getElementById("show-fact");

/* Facts from this API: https://fact.birb.pw/api/v1/cat */

var CatFacts = ["I de 34 udviklede lande anslås det, at 1 % eller 10.000.000 mennesker har brug for en kørestol",
               "I de 156 udviklingslande anslås det, at mindst 2 % eller 121.800.000 mennesker har brug for en kørestol",
               "Samlet set, af de 7.091.500.000 mennesker i verden, kræver cirka 131.800.000 eller 1,85 % en kørestol",
               "Det anslås, at yderligere 110 millioner mennesker verden over har brug for kørestole, men har dem ikke – 500.000 i udviklede lande og 109,5 millioner i udviklingslande",]

var factNumber;

function randomFact(){
  return CatFacts[factNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*5);
  factPlaceholder.textContent = randomFact();
});


