const cards = [
  {
    imageSrc: "./Images/1.png",
    altText: "Fox",
    fName: "Fennec",
    lName: "Fox",
    text: "India",
  },
  {
    imageSrc: "./Images/2.png",
    altText: "Common Brown",
    fName: "Common Brown",
    lName: "Baboon",
    text: "South Africa",
  },
  {
    imageSrc: "./Images/3.png",
    altText: "Whale",
    fName: "Humbac",
    lName: "Whale",
    text: "South Africa",
  },
  {
    imageSrc: "./Images/4.png",
    altText: "Deer",
    fName: "Spotted",
    lName: "Deer",
    text: "Amazon",
  },
];

function createCard(card) {
  return `
        <div class="card">
            <div class="card-image-container">
                <img src="${card.imageSrc}" alt="${card.altText}" class="card-image">
                <div class="card-overlay">
                    <h3 class="card-title">${card.fName}</h3>
                    <h3 class="card-title">${card.lName}</h3>
                    <p class="card-text">${card.text}</p>
                    <a class="link">know more <span><svg fill="blue" height="10px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 476.213 476.213" xml:space="preserve" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon> </g></svg></span></a>
                </div>
            </div>
        </div>
    `;
}

const cardContainer = document.querySelector(".card-container");

cardContainer.innerHTML = cards.map(createCard).join("");
