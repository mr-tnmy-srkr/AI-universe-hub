/* const handelCategory = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

};
handelCategory(); */

const handelCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/ai/tools"
  );
  const data = await response.json();

  const cardData = data.data.tools;
  handelCard(cardData);
};

const handelCard = (cardData) => {
  cardData.forEach((item) => {
    const cardContainer = document.getElementById("card-container");
    const div = document.createElement("div");
    div.innerHTML = `
               <div class="card bg-base-100 shadow-xl">
                  <figure><img src="${item.image}"/></figure>
                  <div class="card-body">
                    <h2 class="card-title text-4xl">Features</h2>
                 <ul><li>1. ${item.features[0]}</li><li>2. ${item.features[1]}</li><li>3. ${item.features[2]}</li></ul>
                 <hr class=" bg-slate-500">
                    <div class="flex justify-between items-center">
                    <div>
                   <h1 class="text-3xl font-semibold">${item.name} </h1>
                  <div class="flex">
                  <img src ="./icon.png"/>
                  <span class="pl-2">${item.published_in}</span>
                   </div>
                   </div>
                   <div onclick = "handelModal('${item.id}')" class="bg-red-100 rounded-full p-4">
                   <img class="cursor-pointer" src = "./Frame.png" alt="" />
                   </div>
                   </div>
                  </div>
                </div>
        `;
    cardContainer.appendChild(div);
  });
};



const handelModal = async (id) => {
const response = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
const data = await response.json();
// console.log(id);
const singleData = data.data;









  const modalDiv = document.getElementById("modal");
  modalDiv.innerHTML = `
  <dialog id="my_modal" class="modal">
  <form method="dialog" class="modal-box w-11/12 max-w-5xl">
  <img src="${singleData.image_link[0]}" alt='no image to show'/>
    <h3 class="font-bold text-lg">${singleData.description}</h3>
    <p class="py-4">Click the button below to close</p>
    <div class="modal-action">
       if there is a button, it will close the modal 
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
  `
  my_modal.showModal()
};

handelCategory();
