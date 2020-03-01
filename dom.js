//Examining the document objects

//console.dir(document);
//console.log(document.embeds);
//console.log(document.URL);
//console.log(document.title);
//document.title = "I AM A HERO IN MAKING BY GOD'S GRACE";
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.all);
//console.log(document.all[12]);
//document.all[12].textContent = "I am with you, Says Our LORD";
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//Selectors
// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//let headerTitle = document.getElementById('header-title');
//let header = document.getElementById('main-header');

//console.log(headerTitle);
//headerTitle.textContent = "This is awesome...."
//headerTitle.innerText = "Great ....";
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = "<h3>Hello</h3>";
//header.style.borderBottom = "solid 3px #000";

//GETELEMENTSBYCLASSNAME //

//var items = document.getElementsByClassName("list-group-item");
/*console.log(items);
console.log(items[1]);
console.log(items[1].innerHTML);
items[1].innerHTML = 'I am a Genius';
items[1].style.fontWeight  = 'bold';
items[1].style.backgroundColor  = 'grey';
*/
/*
for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = "green";
}
*/

/*
var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[0]);
console.log(li[0].innerHTML);
li[0].innerHTML = 'I am a Genius';
li[0].style.fontWeight  = 'bold';
li[0].style.backgroundColor  = 'grey';

for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = "green";
}
*/

// QUERYSELECTOR //
/*
var header = document.querySelector('#main-header');
header.style.borderBottom ='solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'green';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'yellow';
*/

// QUERYSELECTORALL //
 
/*
var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'I am a HERO dube';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}
*/

//TRAVERSING THE DOM

var itemList = document.querySelector('#Items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f1f1f1';
//console.log(itemList.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = 'orange';
//console.log(itemList.parentElement.parentElement);

//childNode
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'red';

//firstChild
//console.log(itemList.firstChild);
//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'You can get to me';

//lastChild
//console.log(itemList.lastChild);
//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'I am gone already';

//nextSibling
//console.log(itemList.nextSibling);
//nextElementsibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

//createElement


//create a div
var newDiv = document.createElement('div');
/*
// Add class
newDiv.className = 'hello';

//Add id
newDiv.id = 'hello1';

//Add attr
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('Hello world');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

console.log(newDivText);
*/

// Events //
/*
var button = document.getElementById('button').addEventListener
('click', buttonClick);

function buttonClick(e){   
    //console.log('Button Clicked');
    //document.getElementById('header-title').textContent = 'changed';
    //document.querySelector('#main').style.backgroundColor = 
    //'orange';
    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.id);
    //console.log(e.target.className);
    //console.log(e.target.classList);
    //var output = document.getElementById('output');
    //output.innerHTML = '<h3>'+e.target.id+'</h3>';
    
    //console.log(e.type);

    //console.log(e.clientX);
    //console.log(e.clientY);
    //console.log(e.offsetX);
    //console.log(e.offsetY);

    //console.log(e.altKey);//Hold down the alt key to get true
    //console.log(e.ctrlKey);
    //console.log(e.shiftKey);

}
*/
var button = document.getElementById('button');
var box = document.getElementById('box');


//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);//double click
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);


//box.addEventListener('mouseenter', runEvent)
//box.addEventListener('mouseleave', runEvent)

//box.addEventListener('mouseover', runEvent)
//box.addEventListener('mouseout', runEvent)

//box.addEventListener('mousemove', runEvent)

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');


//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);

//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);

itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('paste', runEvent);

//itemInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);
//select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: ' + e.type);
    //document.body.style.display = 'none';
    
    console.log(e.target.value);
    //document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

    //output.innerHTML = '<h3>MouseX: '+ e.offsetX + '</h3><h3>MouseX: '+ e.offsetY + '</h3>';

    //box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+",40)";
    //document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+",40)";

}





















































