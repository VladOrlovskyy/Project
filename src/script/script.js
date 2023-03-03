const nameCssActive = 'active';
const loaderWrapper = document.querySelector('.loader_wrapper');

function clearStateActive(items) {
  [...items].forEach((item) => {
    item.classList.remove(nameCssActive);
  });
}

function setStateActive(item) {
  item.classList.add(nameCssActive);
}

function getStateActive(items) {
  return [...items].find((item) => item.classList.contains(nameCssActive));
}

const scrollBtn = document.querySelector('.pageup');
scrollBtn.addEventListener('click', scrollUp);
window.addEventListener('scroll', handleScroll);

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function handleScroll(e) {
  let positionScroll = window.pageYOffset;
  if (positionScroll > 900) {
    scrollBtn.style.opacity = 1;
  } else {
    scrollBtn.style.opacity = 0;
  }
}

