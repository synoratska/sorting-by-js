document.querySelector("#sort-asc").onclick = function () {
  mySort("data-price");
};
document.querySelector("#sort-desc").onclick = function () {
  mySortDesc("data-price");
};

document.querySelector("#sort-rating").onclick = function () {
  mySortDesc("data-rating");
};

function mySort(sortType) {
  let nav = document.querySelector(".goods-wrap");

  for (let i = 0; i < nav.children.length; i++) {
    for (let k = i; k < nav.children.length; k++) {
      if (
        +nav.children[i].getAttribute(sortType) >
        +nav.children[k].getAttribute(sortType)
      ) {
        let replacedNode = nav.replaceChild(nav.children[k], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

function mySortDesc(sortType) {
  let nav = document.querySelector(".goods-wrap");

  for (let i = 0; i < nav.children.length; i++) {
    for (let k = i; k < nav.children.length; k++) {
      if (
        +nav.children[i].getAttribute(sortType) <
        +nav.children[k].getAttribute(sortType)
      ) {
        let replacedNode = nav.replaceChild(nav.children[k], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
