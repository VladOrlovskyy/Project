const carouselItemsFoto = document.querySelector('.carousel_items_photo');
const itemFotoAll = document.querySelectorAll(
  '.carousel_items_photo .item_photo'
);
const sliderItems = document.querySelector('.about_slider_items');
const prevBtn = document.querySelector('.carousel_prev');
const nextBtn = document.querySelector('.carousel_next');

const carouselItemsFotoArray = [];
let indexCarouselFotoActive;
const indexesCarouselFotos = [];
const countAddFotoCarousel = 4;
const valuePxMove = 80;
const valuePxDefault = -160;

function initSlider() {
  for (let i = 0; i < itemFotoAll.length; i++) {
    carouselItemsFotoArray.push(itemFotoAll[i]);
    if (itemFotoAll[i].classList.contains(nameCssActive)) {
      indexCarouselFotoActive = i;
    }
    itemFotoAll[i].remove();
  }
  setIndexesCarouselFotos();
}

function setIndexesCarouselFotos() {
  indexesCarouselFotos.length = 0;
  carouselItemsFoto.innerHTML = '';
  for (
    let i = indexCarouselFotoActive - countAddFotoCarousel;
    i <= indexCarouselFotoActive + countAddFotoCarousel;
    i++
  ) {
    let item;
    if (i < 0) {
      item = carouselItemsFotoArray.length + i;
    }
    if (i >= 0 && i < carouselItemsFotoArray.length) {
      item = i;
    }
    if (i >= carouselItemsFotoArray.length) {
      item = i - carouselItemsFotoArray.length;
    }
    indexesCarouselFotos.push(item);
    carouselItemsFoto.append(carouselItemsFotoArray[item]);
  }
}

function handlerCarouselFoto(e) {
  const element = e.target.closest('.item_foto');
  if (element) {
    if (element.classList.contains(nameCssActive)) {
      return;
    }

    const step =
      indexesCarouselFotos.indexOf(Number(element.dataset.item)) -
      countAddFotoCarousel;

    handlerMoveCarousel(-step, step);
  } else {
    alert('Помилка');
  }
}

function handlerMoveCarousel(count, step) {

  carouselItemsFoto.style.transition = 'all ease 0.3s';
  carouselItemsFoto.style.transform = `translateX(${
    valuePxDefault + valuePxMove * count
  }px)`;
  indexCarouselFotoActive = indexesCarouselFotos[countAddFotoCarousel + step];
  clearStateActive(carouselItemsFotoArray);
  setStateActive(carouselItemsFotoArray[indexCarouselFotoActive]);

  setTimeout(() => {

    carouselItemsFoto.removeAttribute('style');
    setIndexesCarouselFotos();
    setActiveContent(carouselItemsFotoArray[indexCarouselFotoActive]);
  }, 350);
}

function setActiveContent(item) {
  const contentItem = getInfoConnectedContent(item);

  if (contentItem) {
    clearStateActive(sliderItems.children);
    setStateActive(contentItem);
  } else {
    alert('Помилка');
  }
}

function getInfoConnectedContent(item) {
  for (let i of sliderItems.children) {
    if (i.dataset.item === item.dataset.item) {
      return i;
    }
  }
  return false;
}

prevBtn.addEventListener('click', () => handlerMoveCarousel(1, -1));
nextBtn.addEventListener('click', () => handlerMoveCarousel(-1, 1));
carouselItemsFoto.addEventListener('click', handlerCarouselFoto);

initSlider();
