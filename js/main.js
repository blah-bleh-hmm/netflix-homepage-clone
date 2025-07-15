const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content-item");

//select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  //add border to the selected tab item
  this.classList.add("tab-border");
  //grab content item from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  console.log(this.id);
  //add show class to the selected content item
    tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContents.forEach((item) => item.classList.remove("show"));
}

tabItems.forEach((item) => item.addEventListener("click", selectItem));
