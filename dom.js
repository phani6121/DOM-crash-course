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














