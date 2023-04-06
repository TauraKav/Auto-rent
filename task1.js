localStorage.setItem ('vardas', 'Taura');
const token  = localStorage.getItem ("vardas");
console.log (token);
localStorage.removeItem("vardas");


const names = ['Laura', 'Tomas', 'Irena', 'Andrius', 'Matas', 'Lukas', 'Greta', 'Liucija'];
console.log (names);

const userName =  (arr) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (arr.includes("Rytis")){
                resolve ("vardas yra");
            } else {
                reject (Error ('Tokio vardo nera'));
            }
        }, 3000);
    });
};

userName(names)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err)); 


        const getCocktail = async () => {
            const cocktail = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
            const cocktailObj = await cocktail.json ();
            cocktailObj.drinks.forEach(cocktail => {
                console.log(cocktail.strDrink);
            });
        }
        
        getCocktail ();
