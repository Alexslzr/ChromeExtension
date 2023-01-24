
let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl= document.getElementById('input-el')
const ulEl= document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const leadsLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsLocalStorage) {
    myLeads = leadsLocalStorage
    renderLeads()
}

function renderLeads() {
    let listItems = '';
    for(let i =0; i< myLeads.length;i++){
        listItems+=`<li>
                        <a href='${myLeads[i]}' target=_blank>
                            ${myLeads[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function(){
    myLeads=[];
    localStorage.clear()
    renderLeads()
})

inputBtn.addEventListener("click", function(){   
    myLeads.push(inputEl.value)
    inputEl.value='';
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads();
    console.log(localStorage.getItem("myLeads"));
})

