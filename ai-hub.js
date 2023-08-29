/* const handelCategory = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

};
handelCategory(); */

const handelCategory = async () => {
  console.log("first");
  const response = await fetch(
    "https://openapi.programming-hero.com/api/ai/tools"
  );
  const data = await response.json();

  const cardData = data.data.tools
  console.log(cardData);

  cardData.forEach(item => {
console.log(item.image);

const cardContainer = document.getElementById("card-container");
const div = document.createElement("div");
div.innerHTML = `
       <div class="card bg-base-100 shadow-xl">
          <figure><img src=${item.image} /></figure>
          <div class="card-body">
            <h2 class="card-title text-4xl">Features</h2>
         <ul><li>${item.features[0]}</li><li>${item.features[1]}</li><li>${item.features[2]}</li></ul>
            <div class="flex justify-between items-center">
            <div>
            <h1 class="text-3xl font-semibold">${item.name} </h1>
            <p>${item.published_in}</p>
           </div>
           <div class="bg-red-100 rounded-full p-4">
           <img class="cursor-pointer" src = "./Frame.png" alt="" />
           </div>
           </div>
          </div>
        </div>
`;
cardContainer.appendChild(div);
});
};







handelCategory();
