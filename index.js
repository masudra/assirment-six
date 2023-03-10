const aiLinkFun= async () =>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools.slice(0,6));
}


const displayData = cards =>{
    const allCards = document.getElementById('card-make');
//  See More Btn 
const showAll = document.getElementById('show-all-btn')
    if(cards.length === 6){
        // cards =cards.slice(0,6);
        showAll.classList.remove('d-none')
    }
    else{
        showAll.classList.add('d-none')
    }
    
    allCards.innerHTML ='';
    cards.forEach(card =>{
        const cardCreate = document.createElement('div')
        cardCreate.classList.add('col')
        cardCreate.innerHTML =`
        <div class="card">
                        <img src="${card.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title fw-bold">Features</h5>
                        <ol>
                        <li>${card.features[0]}</li>
                        <li>${card.features[1]}</li>
                        <li>${card.features[2]?card.features[2]:''}</li>
                        </ol>
                   
                          <hr>
                         <div class="d-flex justify-content-between">
                        <div> 
                        <h5 class="card-title fw-bold">${card.name}</h5>
                        <p> <i class="fa-solid fa-calendar-days"></i> ${card.published_in}</p>
                        </div>
                        <div class="my-auto">
                        <button onclick="modalData('${card.id}')" type="button" class="border border-0 bg-white text-danger" data-bs-toggle="modal" data-bs-target="#cardsModal">
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

aiLinkFun();
// click btn for show all  card 
document.getElementById('btn-show-all').addEventListener('click',function(){
    trogelspiner(true);

    const allCards= async () =>{
        const url =`https://openapi.programming-hero.com/api/ai/tools`;
        const res = await fetch(url);
        const data = await res.json();
        displayData(data.data.tools);
    }
    allCards();
    
   
});


const modalData= async id =>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(id)
    displayModalData(data.data);
}

 const displayModalData = modals =>{
    // console.log(modals);
    // const allmodals = document.getElementById('cardsModalLabel');
    // allmodals.innerText = modals.tool_name;
    const modalBody =document.getElementById('modalInfo');
    modalBody.innerHTML =`
    <div class="d-flex gap-3 mt-2 w-">
    <div class="mybg border border-danger rounded p-3">
     <p>${modals.description}</p>
        <div class=" d-flex justify-content-between gap-2 ">
            <div class="bg-light rounded text-success">
            <h6 class="p-2">${modals?.pricing?.[0]?.plan ?modals.pricing[0].plan:'Free Of Cost'}</h6>
            <h6 class="p-2">${modals?.pricing?.[0]?.price ?modals.pricing[0].price:'Free Of Cost'}</h6>
            </div>

            <div class="bg-light rounded text-warning">
            <h6 class="p-2">${modals?.pricing?.[1]?.plan ?modals.pricing[1].plan:'Free Of Cost'}</h6>
            <h6 class="p-2">${modals?.pricing?.[1]?.price ?modals.pricing[1].price:'Free Of CostS'}</h6>
            </div>
        
            <div class="bg-light rounded text-danger">
            <h6 class="p-2">${modals?.pricing?.[2]?.plan ?modals.pricing[2].plan:'Free Of Cost'}</h6>
            <h6 class="p-2">${modals?.pricing?.[2]?.price ?modals.pricing[2].price:'Free Of Cost'}</h6>
            </div>

        </div>

       
        <div class="d-flex gap-2">
            <div>
                <h1>Features</h1>
                
                <ul>
                    <li>${modals?.features?.[1]?.feature_name ?modals.features[1].feature_name:'No Data Found'}</li>
                    <li>${modals?.features?.[2]?.feature_name ?modals.features[2].feature_name:'No Data Found'}</li>
                    <li>${modals?.features?.[3]?.feature_name ?modals.features[3].feature_name:'No Data Found'}</li>
                
                </ul>

            </div>
            <div>
                <h1>Integration</h1>
                <ul>
                <li>${modals?.integrations?.[0] ? modals.integrations[0] :'No Data Found'}</li>
                  <li>${modals?.integrations?.[1] ? modals.integrations[1] :'No Data Found' }</li>
                  <li>${modals?.integrations?.[2]?modals.integrations[2]:'No Data Found'}</li>
              </ul>
            </div>
        </div>
    </div>

    <div class="border border-secondary rounded p-3">
    <button class=" text-center bg-danger text-light">${modals?.accuracy?.score}Accuracy</button>
         <img class="imgsiz rounded border border-white" src="${modals?.image_link?.[0] ? modals?.image_link?.[0]:''}" alt="">
        <h5 class="text-center mt-5">${modals?.input_output_examples?.[0].input ?modals.input_output_examples[0].input :'No Not Yet!Take a Break!!!'}</h5>
        <h6>${modals?.input_output_examples?.[0].output ? modals.input_output_examples[0].output:'No Not Yet!Take a Break!!!'}</h6>
    </div>

</div>

    `;

        
}
modalData();

