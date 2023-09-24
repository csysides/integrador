const productsData = [
  {
    id: 1,
    name: "minimaceta",
    price: 2500,
    category: "Macetita",
    cardImg: "./imagenes/MiniMaceta.jpg",
  },
  {
    id: 2,
    name: "macetas",
    price: 3500,
    category: "__macetas",
    cardImg: "./imagenes/Macetas.jpg",
  },
  {
    id: 3,
    name: "portadifusor",
    price: 3000,
    category: "__portadifusor",
    cardImg: "./imagenes/portadifuFlor.jpg",
  },
  {
    id: 4,
    name: "alfombras",
    price: 5000,
    category: "alfombra_piecitos",
    cardImg: "./imagenes/alfombra.jpg",
  },
];

//estas funciones, no me quedaron claras, si en el caso de poca cantidad de cards son necesarias.

const divideProductsInParts = (size) => {
  let productList = [];
  for (let i = 0; i < productsData.length; i += size) {
    productList.push(productsData.slice(i, i + size));
  }
  return productList;
};
const appState = {
  products: divideProductsInParts(6),
  currentProductsIndex: 0,
  productsLimit: divideProductsInParts(6).length,
};
