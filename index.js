

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
})


inputBtn.addEventListener('click', function() {   
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    
})

function renderLeads(){
    let listItems = ""
    for(let idx=0; idx < myLeads.length; idx++) {
        
        listItems += `<li>
                            <a href='${myLeads[idx]}' target = '_blank'>
                            ${myLeads[idx]}
                            </a>
                      </li>`
    }
    ulEl.innerHTML = listItems
}








