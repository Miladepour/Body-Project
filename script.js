function setup() {
  const allitems = items();
  makePageForItems(allitems);
}

function makePageForItems(itemsList) {
  const rootElem = document.getElementById("item-container");
  //   console.log(itemsList, typeof itemsList, Array.isArray(itemsList));
  const itemsContainer = document.getElementById("item-container");
  itemsList.forEach((item) => {
    const {
      id,
      category,
      itemDesc,
      userName,
      postCode,
      contactNumber,
      imgUrl,
    } = item;
    let itemElement = document.createElement("article");
    itemElement.innerHTML = `<h3 id="item-title">${itemDesc}</h3>
          <img src="${imgUrl}" alt="" />
          <div>
            <p>Name:<span>${userName}</span></p>
            <p>Post code:<span>${postCode}</span></p>
            <p>Phone Number:<span>${contactNumber}</span></p>
          </div>
          <button>Call Doner</button>`;
    itemsContainer.appendChild(itemElement);
    // console.log(id, category, itemDesc);
  });
}

window.onload = setup;
