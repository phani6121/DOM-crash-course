// DOM FULL FORM DOCUMENT OBJECT MODEL
// In the DOM we can use the selectors to take the HTML file and do the changes like add,remove.

// EXAMINE THE DOCUMENT OBJECT


//console.dir(document); In this document have over all page differnt methods and properties attached to the document object and this is like a tree
// console.log(document.domain);
//console.log(document.URL), This is entair page URL
// console.log(document.title);
// document.title = 123 At her to change the title of the document
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);In the document have entair HTML tages are shows.
// console.log(document.all[9]);
// document.all[9].textContent = "hello"; This is not the way of the select the things because of we can add any tag in HTML at 9th position it will chage the that position not change the header
// console.log(document.forms);
// console.log(document.links); There ids no link on this document so it shows empty Array.There

// GETELEMENTBYID by using name of the id
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
//headerTitle.textContent = 'hello';
//headerTitle.innerText = 'hai'; In inner text have the any span tag at the same id page and dom have the no change of the content
// headerTitle.innerHTML = '<h3>Hello</h3>'; In the inner HTML have the h1 in side the h3 no change the h1 the inner dom elemt is h3
// headerTitle.style.borderBottom = 'solid 3px #000';

//GETELEMENTBYCLASSNAME by using name of the class
// var items = document.getElementsByClassName('list-group-items');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// gives error
// items.style.backgroundColor = 'gray';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }
// In case we are change the list of the items in the javaScript we can use the loop for the edit

// GETELEMENTSBYTAGNAME by using Html tag

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// gives error
// items.style.backgroundColor = 'gray';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//QUERYSELECTOR

// var header = document.querySelector('#header-title')
// header.style.borderBottom = 'solid 5px red';

// var input = document.querySelector('input');
// input.value = 'hello world'
//If in document have two inputs it defoult select the first one

// var sudmit = document.querySelector('input[type="sudmit"]');
// input.value = 'hello world'
// sudmit.value = 'SEND';
//If in document have two inputs to wrote the type of the input of the document

// var item = document.querySelector('.list-group-items');
// item.style.color = 'red';
//List of items have the this selector applicable to first one

// var item = document.querySelector('.list-group-items:last-child');
// item.style.color = 'blue';
//This type the last item of the selector

// var item = document.querySelector('.list-group-items:nth-child(2)');
// item.style.color = 'coral';
//This type is the nth of the select the given data

//QUERYSELECTORALL This is the similar like id and class selectors

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'hello';

// var odd = document.querySelectorAll('li:nth-Child(odd)')

// for (var i = 0; i < odd.length; i++) {
//     odd[i].Style.fontWeight = 'bold';
// }

//TRAVERSING THE DOM
// var itemList = document.querySelector('#items');
// parentNode is the applicable from the parent to child
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'red';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement this is also same like parentNode
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'red';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes It is directly applicable to child but in cocument have show text containt.
// console.log(itemList.childNodes)

//children This is same klike childNodes but here there is no text containt
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].textContent = 'hello';

//firstChild It is useless because of the there is a braker like text containt
// console.log(itemList.firstChild);

//firstElementChild this is the useful of the document modification.
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'sriman';
// itemList.firstElementChild.style.backgroundColor = 'lightblue';

// newDiv.style.backgroundColor = 'lightblue';
//lastChild It is useless because of the there is a braker like text containt
// console.log(itemList.lastElementChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello 1';

//nextSibling
// console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// var parentElement = document.querySelector('.sriman');

// Check if the element exists
// if (parentElement) {
//     // Create a new div element
//     var newDiv = document.createElement('div');

//     // Set some properties for the new div
//     newDiv.textContent = 'adaka';

//     // Add the "sriman" class to the new div
//     newDiv.classList.add('phani');
//     newDiv.id = "qwertyu"

//     // Append the new div as a child to the existing div
//     parentElement.appendChild(newDiv);
// }

//createElement
//create a div
// var newDiv = document.createElement('div');

//add class
// newDiv.className = 'hello';

//add id
// newDiv.id = 'hello 1';

//add attr
// newDiv.setAttribute('title', 'hello world');

//create text node
// var newDivText = document.createTextNode('hello world');

//add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')

// console.log(newDiv);

// container.insertBefore(newDiv, h1);

//EVENTS
// var button = document.getElementById('button').addEventListener('click', buttonClick);
//at here call the below function 

// onclick = "buttonClick(1)" This is old way of button clicked function
//function buttonClick(e) {
// console.log('Button Clicked ')
// document.getElementById('header-title').textContent = 'changed';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';

//console.log(e.target); button details 
// console.log(e.target.id); given id detils 
// console.log(e.target.className); given class name 
// console.log(e.target.classList); given class names list 

// var output = document.getElementById('output');
// output.innerHTML = '<h3>' + e.target.id + '</h3>'; This is output gives the id 

// console.log(e.type); this is type of button

// clint is the taken from the whole area 
// console.log(e.clientX);
// console.log(e.clientY);

// offset is taken from only one element 
// console.log(e.offsetX);
// console.log(e.offsetY);

//this is the buttons are alt ctrl shift click are not it shows 
// console.log(e.altKey);
// console.log(e.shiftKey);
// console.log(e.ctrlKey);

//};

var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);


// Those two are applicable for the whole div content 
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

//Those two are applicable for the in side of the data 
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent); 
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent); It is the focus of the input box when we are click in the box
// itemInput.addEventListener('blur', runEvent); It is the blur of the input box when we are click outside of the box

//itemInput.addEventListener('cut', runEvent); It is the to cut the content inside the input to cut
//itemInput.addEventListener('paste', runEvent); It is the to cut the content inside the input to paste

select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent);


function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type);

    // console.log(e.target.value);

    // output.innerHTML = '<h3>mouseX: ' + e.offsetX + ' </h3><h3>moudeY: ' + e.offsetY + '</h3>'

}









