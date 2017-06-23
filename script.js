// ✈️✈️🚀🚀🚀JAVASCRIPT LETS GET IT!!! 🚀🚀🚀✈️✈️


const accordion = document.querySelector('.accordion');
const items     = accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.question');

//Lets figure out what item to click
function toggleAccordion() {
  const thisItem = this.parentNode;
  console.log(this.parentNode);
  thisItem.classList.toggle('open');
}



questions.forEach(question => question.addEventListener('click', toggleAccordion));
