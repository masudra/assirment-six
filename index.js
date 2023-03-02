const aiLinkFun= async () =>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}


const displayData = cards =>{
    const allCards = document.getElementById('card-make');
    
    cards.forEach(card =>{
        const cardCreate = document.createElement('div')
        cardCreate.classList.add('col')
        cardCreate.innerHTML =`
        <div class="card">
                        <img src="${card.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title fw-bold">Features</h5>
                        <h5 class="card-title">${card.features}</h5>
                          <hr>
                         <div class="d-flex justify-content-between">
                        <div> 
                        <h5 class="card-title fw-bold">${card.name}</h5>
                        <p> <i class="fa-solid fa-calendar-days"></i> ${card.published_in}</p>
                        </div>
                        <div class="my-auto">
                        <button class="border border-0 bg-white text-danger">  <i class="fs-1 fa-regular fa-circle-right"></i></i></button></div>
                         </div>
                        </div>
                      </div>

        `;
        allCards.appendChild(cardCreate);
        
        
    });
    
}


aiLinkFun();