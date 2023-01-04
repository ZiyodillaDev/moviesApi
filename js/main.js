let elList = document.querySelector(".list");
let elInput = document.querySelector("input");
let elForm = document.querySelector("form");

let inputVal = elInput.value;

let newArr = [];

const render = (arr, node) => {
  node.innerHTML = [];
  for (i of arr) {
    const newItem = document.createElement("li");
    const newBox = document.createElement("div");
    const newImg = document.createElement("img");
    const newTitle = document.createElement("h4");
    const newYear = document.createElement("p");
    const newType = document.createElement("p");

    newItem.setAttribute("class", "shadow rounded-3 list-unstyled");
    newItem.style.width = "341px";
    newBox.setAttribute("class", "h-100 bg-light  ");
    newImg.setAttribute("src", i.Poster);
    newImg.setAttribute("class", "d-block mx-auto w-100");
    newTitle.setAttribute("class", "text-center text-warning mb-0 mt-3");
    newYear.setAttribute("class", "text-center text-success fs-4 mb-0 mt-3");
    newType.setAttribute("class", "text-center fs-5 text-light");

    newTitle.innerHTML = i.Title;
    newYear.innerHTML = i.Year;
    newType.innerHTML = i.Type;

    node.appendChild(newItem);
    newItem.appendChild(newBox);
    newBox.appendChild(newImg);
    newBox.appendChild(newTitle);
    newBox.appendChild(newYear);
    newBox.appendChild(newType);
  }
};

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  fetch(`https://www.omdbapi.com/?apikey=4027b6ec&s=${elInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        render(data.Search, elList);
      }
    });
  elInput.value = "";
});

