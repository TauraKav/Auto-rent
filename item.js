const itemId = localStorage.getItem("itemId");

console.log(itemId);

const addElementsToScreen = (data) => {
    const img = document.getElementById("photo");
img.style.backgroundImage = `url(${data.img_url})`;

const title = document.getElementById("car-title");
  title.innerHTML = data.model;

  const color = document.getElementById("car-color");
 color.innerHTML = `Spalva: ${data.color}`;

 const price = document.getElementById("car-price");
 price.innerHTML =`Paros kaina: ${data.price} Eur/ už dieną`;

 const fuelType = document.getElementById("fuel-type");
fuelType.innerHTML =`Kuro tipas: ${data.fuel_type}`;

const parktronics = document.getElementById("parktronics");
parktronics.innerHTML =`Automatinė parkavimo sistema: ${displayParktronics (data.parktronics)}`;

};


fetch("https://642c636c208dfe25472ef79f.mockapi.io/cars/" + itemId)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    addElementsToScreen (data);
  });

  function displayParktronics (value) {
if (value) {
        return  `Yra parktronikai`;
    } else { return `parktronikų nėra`};
  };