const HIDDEN_TEXT = "איפה?";
const SHOWN_TEXT = "בהרצל 85א, ירושלים!";

const getElements = () => {
  const elements = Array.from(document.querySelectorAll('[id]'));
  return elements.reduce((list, element) => {
    list[element.id] = element;
	return list;
  }, {});
}

const handleImageClick = (image, text) => () => {
  const isShow = imageWrapper.classList.toggle('hidden');
  text.textContent = isShow ? HIDDEN_TEXT : SHOWN_TEXT;
};

let timer;

const main = () => {
  const { imageWrapper, question, answer } = getElements();
 
  imageWrapper.onclick = () => {
    const isShow = imageWrapper.classList.toggle('hidden');
    question.classList.toggle('hidden');
	answer.classList.toggle('hidden');
  }
};

window.addEventListener("DOMContentLoaded", main);
