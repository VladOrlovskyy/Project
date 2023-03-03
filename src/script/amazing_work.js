const imagesMenuItemLink = 'images_menu_item_butt';
const countItemsContent = [12, 24, 36];
const maxCountPushLoadBtn = 2;


let currentCountPushLoadBtn = 0;
const imagesMenu = document.querySelector('.our_work_images_menu');
const imagesContent = document.querySelector('.our_work_images_content');
const imagesLoadMoreBtn = document.querySelector('.our_work_button');

const all = {
  textForFirstItem: 'All Projects',
  datasetValue: 'all-projects',
};
const graphicDesign = {textForFirstItem: 'Graphic Design',datasetValue: 'graphic-design',path: './img/our_amazing_work/graphic-design/',items: [
    'graphic-design1.jpg',
    'graphic-design2.jpg',
    'graphic-design3.jpg',
    'graphic-design4.jpg',
    'graphic-design5.jpg',
    'graphic-design6.jpg',
    'graphic-design7.jpg',
    'graphic-design8.jpg',
    'graphic-design9.jpg',
    'graphic-design10.jpg',
    'graphic-design11.jpg',
    'graphic-design12.jpg',
  ],
};
const webDesign = {textForFirstItem: 'Web Design',datasetValue: 'web-design',path: './img/our_amazing_work/web-design/',items: [
    'web-design1.jpg',
    'web-design2.jpg',
    'web-design3.jpg',
    'web-design4.jpg',
    'web-design5.jpg',
    'web-design6.jpg',
    'web-design7.jpg',
    'web-design1.jpg',
    'web-design2.jpg',
    'web-design3.jpg',
    'web-design4.jpg',
    'web-design5.jpg',
  ],
};
const landingPages = {textForFirstItem: 'Landing Pages',datasetValue: 'landing-pages',path: './img/our_amazing_work/landing-page/',items: [
    'landing-page1.jpg',
    'landing-page2.jpg',
    'landing-page3.jpg',
    'landing-page4.jpg',
    'landing-page5.jpg',
    'landing-page6.jpg',
    'landing-page7.jpg',
    'landing-page1.jpg',
    'landing-page2.jpg',
    'landing-page3.jpg',
    'landing-page4.jpg',
    'landing-page5.jpg',
  ],
};
const wordpress = {textForFirstItem: 'Wordpress',datasetValue: 'wordpress',path: './img/our_amazing_work/wordpress/',items: [
    'wordpress1.jpg',
    'wordpress2.jpg',
    'wordpress3.jpg',
    'wordpress4.jpg',
    'wordpress5.jpg',
    'wordpress6.jpg',
    'wordpress7.jpg',
    'wordpress8.jpg',
    'wordpress9.jpg',
    'wordpress10.jpg',
    'wordpress1.jpg',
    'wordpress2.jpg',
  ],
};

function handlerImagesMenu(e) {
  const item = e.target;

  if (
    item.classList.contains(imagesMenuItemLink) && !item.classList.contains(nameCssActive)
  ) {
    currentCountPushLoadBtn = 0;
    imagesLoadMoreBtn.classList.remove('disable');
    clearStateActive(imagesMenu.children);
    setStateActive(item);
    changeImagesContent();
  }
}

function handlerLoadMoreBtn() {
  loaderWrapper.classList.add('enable');
  setTimeout(() => {
    loaderWrapper.style.opacity = 1;}, 300);

  setTimeout(() => {
    setTimeout(() => {
      loaderWrapper.classList.remove('enable');}, 1000);
    loaderWrapper.style.opacity = 0;
    currentCountPushLoadBtn++;
    changeImagesContent();

    if (currentCountPushLoadBtn === maxCountPushLoadBtn) {
      imagesLoadMoreBtn.classList.add('disable');
    }
  }, 2500);
}

function changeImagesContent() {
  const imagesMenuItemActive = getStateActive(imagesMenu.children);
  const nameObjItems = getObjNameFromDataset(imagesMenuItemActive);

  if (nameObjItems) {
    let i = 0; let countImage = 0;
    clearImagesContent();

    for (let count = 0;count < countItemsContent[currentCountPushLoadBtn];count++) {
      i = Math.floor(Math.random() * nameObjItems.length);

      imagesContent.insertAdjacentHTML(
        'beforeend',
        imageItemContent(
          nameObjItems[i].textForFirstItem,
          nameObjItems[i].datasetValue,
          nameObjItems[i].path,
          nameObjItems[i].items[countImage]
        )
      );
      countImage = countImage >= nameObjItems[i].items.length - 1 ? 0 : countImage + 1;
    }
  } else {
    alert('Error: not find nameObjItems');
  }
}

function clearImagesContent() {
  imagesContent.innerHTML = '';
}

function imageItemContent(text, datasetValue, path, name) {
  return `
  <div class="images_content_item" data-images-item-link="${datasetValue}">
    <div class="images_content_item_front">
      <div class="images_content_item_img">
        <img src="${path}${name}" alt="${text}" />
      </div>
    </div>

    <div class="images_content_item_back">
      <div class="images_content_item_text">
        <ul class="item_text_circles">
          <li class="button_circle_white">
            <i class="fa_sharp fa_solid fa_link"></i>
          </li>
          <li class="button_circle_green">
            <i class="fa_sharp fa_solid fa-square"></i>
          </li>
        </ul>
        <div class="item_text_title text_green">
          creative design
        </div>
        <div class="item_text_subtitle">${text}</div>
      </div>
    </div>
  </div>
  `;
}

function getObjNameFromDataset(item) {
  let result;

  switch (item.dataset.imagesMenuLink) {
    case 'all-projects':
      result = [graphicDesign, webDesign, landingPages, wordpress];
      break;
    case 'graphic-design':
      result = [graphicDesign];
      break;
    case 'web-design':
      result = [webDesign];
      break;
    case 'landing-pages':
      result = [landingPages];
      break;
    case 'wordpress':
      result = [wordpress];
      break;
    default:
      result = false;
  }
  return result;
}

imagesMenu.addEventListener('click', handlerImagesMenu);
imagesLoadMoreBtn.addEventListener('click', handlerLoadMoreBtn);

changeImagesContent();
