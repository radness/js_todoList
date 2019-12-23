var totalItems = 0;

function updateItemStatus() {
    var chId = this.id.replace('cb_', '');
    var itemText = document.getElementById('item_', chId);

    if(this.checked) {
        itemText.className = 'checkeed';
    } else {
        itemText.className = '';
    }
}

// edit item
function editItem() {
    var newText = prompt("whar should this item be edited to?");
    if(!newText || newText === "" || newText === " ")
        return false;

    this.innerText = newText;
}

// remove item
function removeItem() {
    var listItemId = this.id.replace('li_', '');
    document.getElementById('li_' + listItemId).style.display = "none";
}


// add item
function addNewItem(list, itemText) {
    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var listItem = document.createElement('li');
    listItem.id = 'li_' + id;
    listItem.ondblclick = removeItem;

    var checkBox = document.createElement('input');
    checkBox.type = 'checkBox';
    checkBox.id = 'cb_' + id;
    checkBox.onclick = updateItemStatus;

    var span = document.createElement('span');
    span.id = 'item_' + totalItems;
    span.innerText = itemText;

    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    list.appendChild(listItem);
};

var inputText = document.getElementById('inputText');
inputText.focus();

// 엔터키 입력
inputText.onkeyup = function(event) {
    // Event.which(13) === Enter Key
    if(event.which === 13) {
        var itemText = inputText.value;
        if(!itemText || itemText === "" || itemText === " ")
            return false; // blank 방지
        addNewItem(document.getElementById('todoList'), itemText);
        inputText.focus();
        inputText.select();
    }
};

var checkBox = document.createElement('input');
checkBox.type = 'checkbox';
checkBox.onclick = updateItemStatus;




