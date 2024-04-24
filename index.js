const words = ["Front-end Developer", "Software Developer", "React Developer"];
const span = document.querySelector(".typing-text span");

let index = 0;
let letterIndex = 0;
let direction = 1;

function animateText() {
  span.textContent = words[index].substring(0, letterIndex + 1);
  letterIndex += direction;

  if (letterIndex === words[index].length + 1) {
    direction = -1;
  }

  if (letterIndex === 0) {
    direction = 1;
    index = (index + 1) % words.length;
  }
}

setInterval(animateText, 100);
  function showEmailAlert() {
    // Показать backdrop
    document.getElementById("backdrop").style.display = "block";

    // Показать customAlert
    document.getElementById("customAlert").style.display = "block";
}
function hideCustomAlert() {
    // Скрыть backdrop
    document.getElementById("backdrop").style.display = "none";

    // Скрыть customAlert
    document.getElementById("customAlert").style.display = "none";
}
function hidePhoneCustomAlert() {
    // Скрыть backdrop
    document.getElementById("backdrop").style.display = "none";

    // Скрыть customAlert
    document.getElementById("PhonecustomAlert").style.display = "none";
}
function showPhoneAlert() {
    // Показать backdrop
    document.getElementById("backdrop").style.display = "block";

    // Показать customAlert
    document.getElementById("PhonecustomAlert").style.display = "block";
}
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.click-me');
    
    elements.forEach(function(element) {
      animate(element);
    });
    
    function animate(element) {
      setInterval(function() {
        element.classList.toggle('hide');
      }, 500); // Измените эту задержку по вашему усмотрению
    }
  });


  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });