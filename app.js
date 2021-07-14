// Değişkenleri oluşturduk
const addButton = document.querySelector(".addbutton")
const newTask = document.querySelector(".newtask")
const clearButton = document.querySelector(".clearbutton")
const todoList = document.querySelector(".todolist")


// Butonlara addElementListener verdik
addButton.addEventListener("click", addTask);
clearButton.addEventListener("click", clearTask)


// Fonksiyonları oluşturma
function addTask() {
    if (newTask.value == "") {
        alert("Please enter a valid value...")
    } else {
        // item : ekleyeceğimiz taskler
        let item = document.createElement("li");
        item.innerText = newTask.value;
        todoList.appendChild(item)
        
        // Oluşturduğumz tasklerin üstüne çizgi çekme
        item.addEventListener("click", function () {
            item.style.textDecoration = "line-through"
        })
        
        // Taskleri çift tık ile silme
        item.addEventListener("dblclick", function () {
            item.remove()
        })
    }
}



function clearTask() {
    let choice = confirm("Are you sure that you want to clear all tasks 🗑")

    const clearAll = document.querySelectorAll("li");
    for (i = 0; i < clearAll.length; i++){
        clearAll[i].remove();
    } 
}




