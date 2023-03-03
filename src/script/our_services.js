
const tabsMenuItemLink = 'tabs_menu_item_butt';
const tabsMenu = document.querySelector('.our_services_tabs_menu');
const tabsContent = document.querySelector('.our_services_tabs_content');

tabsMenu.addEventListener('click', changeTabsMenuItemActive);

    function changeTabsMenuItemActive(e) {
      const item = e.target;
      if (
        item.classList.contains(tabsMenuItemLink) &&
        !item.classList.contains(nameCssActive)
      ) {
        clearStateActive(tabsMenu.children);
        setStateActive(item);
        changeTabsContentItemActive(item);
      }
    }

                function changeTabsContentItemActive(item) {
                  const contentItem = getTabsConnectedContent(item);

                  if (contentItem) {
                    clearStateActive(tabsContent.children);
                    setStateActive(contentItem);
                  } else {
                    alert('Помилка');
                  }
                }

                function getTabsConnectedContent(item) {
                  for (let i of tabsContent.children) {
                    if (i.dataset.item === item.dataset.item) {
                         return i;
                    }
                  }
                         return false;
                }
