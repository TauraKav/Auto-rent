// API - application programming interface (back - end, service). 

// Komunikacija tarp front-end ir back end 
// // komunikacija vyksta tokiu formatu: JSON arba XML (paseno)

// HTTP protokolu kreipiamasi į back end, po to gaunam duomenis. (komunikuoja tik duomenys, o ne programavimo kalbos)

// Local Storage - vidinė duombazė. 

localStorage.setItem ('userName', 'TauraK');
const token  = localStorage.getItem ("userName");
console.log (token);
localStorage.removeItem("userName");

// kreipiames i backend per thunder client extention 
// get tipas- gauti duomenis, post- sukurti naujus, put- updatint, delete. 

// fetch- gauti, then- veiksmas yvyks tik tada, kai gausim response (atsakyma). 

fetch ("linkas, is kur gauti duomenis")
.then ((res) => {
    return res.json ();
})
.then ((data) => {
    console.log (data.drinks[0]);
});

// alternatyva then

const getRandomCocktail = async () => {
    const cocktail = await fetch("https://www.ffkgfjhghj.com");
    const cocktailObj = await cocktail.json ();
    console.log("random cocktail", cocktailObj.drinks[0].strCategory);
}
getRandomCocktail ();

fetch ( "http: www,,,v,vv")
.then ((res) => {
    return res.json();
})
.then ((data) => {
console.log (data.drinks[0].strInstruction);

document.getElementById ("wrapper").innerHTML = data.drinks[0].strInstruction;
});

// parametrų pridėjimas

//  mockapi.io (sukurti API)

fetch(
    "https://api.coingecko.com/api/v3/coins/markets?" +
      new URLSearchParams({
        vs_currency: "eur",
        per_page: 20,
      })
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("data", data);
      data.forEach((currency) => {
        const element = document.createElement("div");
        const img = document.createElement("img");
        img.setAttribute("src", currency.image);
  
        img.setAttribute("class", "img");
        element.classList.add("child");
  
        element.innerHTML = currency.symbol;
        document.body.append(element);
  
        element.append(img);
      });
    });
  
  // https://www.coingecko.com/api/documentations/v3

  
//   paimti visus duomenis:

fetch("https://642c45d4d7081590f9369099.mockapi.io/car")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

// paimti viena pagal id:

const id = "2";

fetch("https://642c45d4d7081590f9369099.mockapi.io/car/" + id)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    const element = document.createElement("div");

    element.classList.add("child");

    element.innerHTML = data.car_model;
    element.style.backgroundImage = "url(" + data.photo_url + ")";
    element.style.backgroundSize = "cover";

    document.body.append(element);
  });

// https://www.coingecko.com/api/documentations/v3

const id = "10";
let data;
const fetchAndDisplayData = async () => {
  data = await fetch(
    "https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius/" + id
  ).then((res) => {
    return res.json();
  });

  const element = document.createElement("div");
  element.classList.add("child");
  element.innerHTML = data.destination;
  element.style.backgroundImage = "url(" + data.cityPhoto + ")";
  element.style.backgroundSize = "cover";

  document.body.append(element);
  console.log("data 1", data);
};

console.log("data 2", data);

fetchAndDisplayData();

// https://www.coingecko.com/api/documentations/v3


//  POST

const duomenys = {
    car_model: "Subaru",
    day_price: 73,
    ac: false,
    photo_url:
      "https://www.motortrend.com/uploads/2022/12/2023-Subaru-WRX-front-three-quarter-view-15.jpg?fit=around%7C551:374",
  };
  
  fetch("https://642c45d4d7081590f9369099.mockapi.io/car", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(duomenys),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
  