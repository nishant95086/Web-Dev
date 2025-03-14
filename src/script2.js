const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "output.css";
document.head.appendChild(link);

const body = document.querySelector('body');

const hading = document.createElement('p');
hading.innerHTML="- FAST REACT PIZZA CO - ";
hading.classList.add('text-5xl', 'text-yellow-500','flex','justify-center','my-10');
body.appendChild(hading);

const cart = document.createElement('img');
cart.src = "https://w7.pngwing.com/pngs/105/113/png-transparent-hamburger-pizza-sandwich-cheese-super-cheese-pizza-food-cheese-truck-thumbnail.png";
cart.classList.add('absolute','w-15','top-5','right-10');
body.appendChild(cart);

const mdiv = document.createElement('div');
mdiv.classList.add('my-15','flex', 'flex-col', 'items-center');
body.appendChild(mdiv);
const line1 = document.createElement('div');
line1.classList.add('w-50','h-[1px]','border-1');
mdiv.appendChild(line1);
const menuh = document.createElement('p');
menuh.innerHTML="OUR MENU";
menuh.classList.add('text-4xl','font-bold','my-3');
mdiv.appendChild(menuh);
const line2 = document.createElement('div');
line2.classList.add('w-50','h-[1px]','border-1');
mdiv.appendChild(line2);

const dic = document.createElement('div');
dic.classList.add('w-2xl','mx-auto');
body.appendChild(dic);
const h = document.createElement('p');
h.innerHTML='Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven all organic, all delicious';
h.classList.add('text-center','text-xl')
dic.appendChild(h);

const pizzs = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizza (4).jpeg",
        soldOut: false,
      },
      {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizza (5).jpeg",
        soldOut: false,
      },
      {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizza (2).jpeg",
        soldOut: false,
      },
      {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizza (1).jpeg",
        soldOut: false,
      },
      {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizza (2).jpeg",
        soldOut: true,
      },
      {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizza (3).jpeg",
        soldOut: false,
      },
      {
        name: "Pizza Detroit",
        ingredients: "Steak, mozarella, ham, and burrata cheese",
        price: 22,
        photoName: "pizza (4).jpeg",
        soldOut: true,
      },
      {
        name: "Pizza Chicago",
        ingredients: "Tomato, Cheesy cheese, and Peperroni",
        price: 14,
        photoName: "pizza (5).jpeg",
        soldOut: false,
      },
];

const pizzabox = document.createElement('div');
pizzabox.classList.add('flex','flex-wrap', 'w-[70%]','mx-[15%]','mt-15');
body.appendChild(pizzabox);
for(let i = 0; i < 9; i++){
    const pbox = document.createElement('div');
    pbox.classList.add('flex','w-96','mx-12','my-5');
    pizzabox.appendChild(pbox);

    const lbox = document.createElement('div');
    lbox.classList.add('flex1','mr-5','ml-10');
    pbox.appendChild(lbox);

    const pimg = document.createElement('img');
    pimg.src = pizzs[i].photoName;
    pimg.classList.add('w-50','h-auto', 'object-cover');
    lbox.appendChild(pimg);

    const rbox = document.createElement('div');
    rbox.classList.add('flex1');
    pbox.appendChild(rbox);

    const name = document.createElement('p');
    name.classList.add('font-bold','telx-20','my-2');
    name.innerHTML = pizzs[i].name;
    rbox.appendChild(name);

    const titel = document.createElement('p');
    titel.classList.add('my-2');
    titel.innerHTML = pizzs[i].ingredients;
    rbox.appendChild(titel);

    const price = document.createElement('p');
    price.classList.add('mb-2','mt-5');
    price.innerHTML = pizzs[i].price;
    rbox.appendChild(price);

    const btn = document.createElement('button');
    btn.classList.add('bg-yellow-500','text-white','rounded','px-2');
    btn.innerText='Add';
    rbox.appendChild(btn);

}