var form = document.getElementById('addForm');
var itemList = document.getElementById('Items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem =document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteBtn = document.createElement('button');
    
    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);
}


//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1){
           item.style.display = 'block';
       }
       else{
               item.style.display = 'none';
           }
    });
}









