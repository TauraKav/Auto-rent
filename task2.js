const setId = (id) => {
    localStorage.setItem("itemId", id);
  };

  const carsWrapper = document.getElementById("cars-wrapper");
  
  const carsOptionCreation = (car) => {
    console.log(car);
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "car");
    const image = document.createElement("img");
    image.setAttribute("src", car.img_url);
  
    const titleWrapper = document.createElement("div");
    titleWrapper.setAttribute("class", "title-wrapper");
  
    const title = document.createElement("span");
    title.setAttribute("class", "title");
  
    const price = document.createElement("span");
  
    const fuelType = document.createElement("div");
  
  fuelType.innerHTML = `Fuel type: ${car.fuel_type}`;
    fuelType.setAttribute("class", "fuel");
  
    title.innerHTML = car.model;
    price.innerHTML = `${car.price} Eur/per day`;
  
    titleWrapper.append(title);
    titleWrapper.append(price);
  
    wrapper.append(image);
    wrapper.append(titleWrapper);
    wrapper.append(fuelType);
  
   carsWrapper.append(wrapper);


wrapper.addEventListener("click", () => {
setId(car.id);
    window.location.href = "./item.html";
});
  };

  fetch(
    "https://642c636c208dfe25472ef79f.mockapi.io/cars")

    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
  
      data.forEach((car) => {

        carsOptionCreation(car);
      });
    });
  