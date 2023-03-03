const aiLinkFun= async () =>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}


const displayData = cards =>{
    const allCards = document.getElementById('card-make');

    // See More Btn 
    const showAll = document.getElementById('show-all-btn')
    if(cards.length >6){
        cards =cards.slice(0,6);
        showAll.classList.remove('d-none')
    }
    else{
        showAll.classList.add('d-none')
    }

         
    
   cards.forEach(card =>{
        const cardCreate = document.createElement('div')
        cardCreate.classList.add('col')
        cardCreate.innerHTML =`
        <div class="card">
                        <img src="${card.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title fw-bold">Features</h5>
                    <h5 class="card-title">${card.features}}
                   
                          <hr>
                         <div class="d-flex justify-content-between">
                        <div> 
                        <h5 class="card-title fw-bold">${card.name}</h5>
                        <p> <i class="fa-solid fa-calendar-days"></i> ${card.published_in}</p>
                        </div>
                        <div class="my-auto">
                        <button type="button" class="border border-0 bg-white text-danger" data-bs-toggle="modal" data-bs-target="#cardsModal">
                        <i class="fs-1 fa-regular fa-circle-right"></i>
  </button>
                         </div>
                        </div>
                      </div>

        `;
        allCards.appendChild(cardCreate);
        
    });
    trogelspiner(false);

    
}


 //  btn spiner
 const trogelspiner = isLoding =>{
    const lode = document.getElementById('loder');

    if(isLoding == true){
        lode.classList.remove('d-none')
    }
    else{
        lode.classList.add('d-none')
    }
}
// click btn for show all  card 
document.getElementById('btn-show-all').addEventListener('click',function(){
    trogelspiner(true);
    
   
});





aiLinkFun();