/* const handelCategory = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

};
handelCategory(); */

const handelCategory = async () => {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/ai/tools"
    );
    const data = await response.json();

    const cardData = data.data.tools;
    handelCard(cardData);
  } catch (error) {
    console.log(error);
  }
};

const handelCard = (cardData) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  cardData.forEach((item) => {
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
  const response = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const data = await response.json();
  // console.log(id);
  const singleData = data.data;
  console.log(singleData);
  modalHandler(singleData);
};

const modalHandler = (modal) => {
  console.log(modal.features[1].feature_name)
  const modalDiv = document.getElementById("modal");
  modalDiv.innerHTML = `
  <dialog id="my_modal" class="modal">
 

    <form method="dialog" class="modal-box w-11/12 max-w-5xl">
    <!-- if there is a button, it will close the modal -->
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
<div class="flex justify-center items-center p-8">

    <div class="flex-1 flex justify-center items-center  bg-red-300 min-h-[200px]">
  
    </div>



  <div class="flex-1 flex justify-center items-center bg-blue-400 min-h-[200px]">
     
          <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img src="${modal.image_link[0]}" alt="Shoes" /></figure>
            <div class="card-body">
               <h2 class="card-title">${modal.input_output_examples[0].input}</h2>
               <p>${modal.input_output_examples[0].output}</p>
              
              </div>
                 </div>

  </div>

</div>

     
    </form>
 
   
  </dialog>
  `;
  my_modal.showModal();
};

// sorting
const sortBtn = document.getElementById("sort-btn");
const handleBtn = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/ai/tools"
  );
  const data = await response.json();

  const cardData = data.data.tools;
  const modifiedData = cardData.map((item) => {
    // console.log(item)
    item.date = new Date(item.published_in);
    return item;
  });
  // console.log(modifiedData);
  const sortData = modifiedData.sort((a, b) => b.date - a.date);
  // console.log(sortData);
  handelCard(sortData);
};

handelCategory();
