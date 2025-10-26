const p1 = document.getElementById("p1");
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    p1.textContent = "Yertugan";
});

const c1 = document.querySelector("#c1");
const p2 = document.querySelector("#p2");
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3");

btn2.addEventListener("click", () =>{
    c1.style.backgroundColor = "pink";
})

btn3.addEventListener("click", () => {
    p2.style.fontSize = "32px";
});


const list = document.getElementById("myList");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");

let itemCount = list ? list.children.length + 1 : 1;


addItemBtn.addEventListener("click", () => {
    if (list) {
        const newItem = document.createElement("li");

        newItem.textContent = `New Item ${itemCount}`;

        list.appendChild(newItem);

        itemCount++;
    } else {
        console.error("Error: List element with ID 'myList' not found.");
    }
});

removeItemBtn.addEventListener("click", () => {
    if (list) {
        if (list.lastElementChild) {
            list.removeChild(list.lastElementChild);
            
        } else {
            console.log("The list is currently empty. Nothing to remove.");
        }
    }
});