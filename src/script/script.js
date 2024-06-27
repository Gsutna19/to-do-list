const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
const projectsArray = localStorage.getItem("project") ? JSON.parse(localStorage.getItem("project")) : []

console.log(projectsArray)
console.log(itemsArray)

// Copy logic for each project. Then add items into their respective projects.

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})

function displayItems() {
    let items = ""
    for(let i = 0 ; i < itemsArray.length; i++){
        items += `  <div class="item">
                        <div class="input-controller">
                            <textarea disabled>${itemsArray[i]}</textarea>
                            <div class="edit-controller">
                                <div class="deleteBtn">Delete</div>
                                <div class="editBtn">Edit</div>
                            </div>
                        </div>
                    </div>
                    <div class="update-controller">
                        <button class="saveBtn">Save</button>
                        <button class="cancelBtn">Cancel</button>
                    </div>`
    }
    document.querySelector(".todo-list").innerHTML = items
    activateDeleteListeners()
    activateEditListeners()
    activateSaveListeners()
    activateCancelListeners()
}

function activateDeleteListeners(){
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => { deleteItem(i) })
    })
}

function deleteItem(i) {
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function activateEditListeners(){
    const editBtn = document.querySelectorAll(".editBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eb, i) => {
        eb.addEventListener("click", () => {
            updateController[i].style.display = "block"
            inputs[i].disabled = false
            //trigger change of color for border
            inputs[i].focus()
        })
    })
}

function activateSaveListeners(){
    const saveBtn = document.querySelectorAll(".saveBtn")
    const inputs = document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sb, i) => {
        sb.addEventListener("click", () => {
            updateItem(inputs[i].value, i)
            inputs[i].classList.remove("active")
        })
    })
}

function activateCancelListeners(){
    const cancelBtn = document.querySelectorAll(".cancelBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    cancelBtn.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            updateController[i].style.display = "none"
            inputs[i].value = itemsArray[i]
            inputs[i].disabled = true
            inputs[i].classList.remove("active")
        }) 
    })
}

function updateItem(text, i){
    itemsArray[i] = text
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function displayDate(){
    let date = new Date()
    console.log(date)
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
}

window.onload = function(){
    displayDate()
    displayItems()
}