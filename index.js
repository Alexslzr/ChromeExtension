
let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl= document.getElementById('input-el')
const ulEl= document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const leadsLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsLocalStorage) {
    myLeads = leadsLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = '';
    for(let i =0; i< leads.length;i++){
        listItems+=`<li>
                        <a href='${leads[i]}' target=_blank>
                            ${leads[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function(){
    myLeads=[];
    localStorage.clear()
    render(myLeads)
})

inputBtn.addEventListener("click", function(){   
    myLeads.push(inputEl.value)
    inputEl.value='';
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads);
})

