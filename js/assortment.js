const assortmentList = document.querySelector(".assortment__list");

const response = fetch("../json-files/collection.json").then((res) =>
  res.json()
);
console.log(response);
