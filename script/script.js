const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

console.log(itemsArray) 

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})

function displayItems() {
    let items = ""
    for(let i = 0 ; i < itemsArray.length; i++){
        items += `  <div class="item">
                        <div class="input-controller"></div>
                        <textarea disabled>${itemsArray[i]}</textarea>
                        <div class="edit-controller">
                            <div class="deleteBtn">X</div>
                            <div class="editBtn">Edit</div>
                        </div>
                    </div>
                    <div class="update-controller">
                        <button class="saveBtn">Save</button>
                        <button class="cancelBtn">Cancel</button>
                    </div>`
    }
    document.querySelector(".todo-list").innerHTML = items

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