var list = document.getElementById("list");

function addItems() {
    var todoItem = document.getElementById("todoItem");

    // create li tag here
    var pitem = document.createElement("p");
    var ptext = document.createTextNode(todoItem.value)
    pitem.setAttribute("class", "plist")
    var li = document.createElement("li");
    // var liText = document.createTextNode(todoItem.value);
    li.appendChild(ptext)


    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    editBtn.setAttribute("class", "btn");
    editBtn.setAttribute("onclick", "editItem(this)");
    li.appendChild(editBtn);

    // create del button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    delBtn.setAttribute("class", "btn");
    delBtn.setAttribute("onclick", "delItem(this)");
    li.appendChild(delBtn);

    list.appendChild(li);

    todoItem.value = "";
}

// del all items funtion 
function delAllItems() {
    list.innerHTML = ""
}



// create edit items btn function 
function editItem(d) {
    var val = d.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter the value: ", val);
    d.parentNode.firstChild.nodeValue = editValue;
}

// create delete item function 
function delItem(d) {
    d.parentNode.remove();
}

