// DOM Selection

// getElementById() -------------------------------------------------
const judul = document.getElementById('judul');
judul.style.color ='green';
judul.style.backgroundColor ='lightgreen';
judul.innerHTML = 'Judul';

// getElementsByTagName() -------------------------------------------
// -> HTMLCollections
const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightgrey';
// for(let i = 0 ; i < p.length; i++){                 // Karena p diatas masih berbentuk HTMLCollection maka harus diperulang 1 per 1
//     p[i].style.backgroundColor = 'lightgrey';
// }

const h1 = document.getElementsByTagName('h1')[0];    // fungsi [0] untuk merubah HTMLCollection menjadi elements
h1.style.fontStyle = 'italic';

// getElementsByClassName() -----------------------------------------
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini diubah dari javascript';

// querySelector() --------------------------------------------------
// -> element
const p4 = document.querySelector('#b p');
// p4.style.color = 'lightgreen';
// p4.style.fontSize = '25px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

const p2 = document.querySelector('p');
// p2.innerHTML = 'Ini diubah melalui javascript';

// querySelectorAll() -----------------------------------------------
const p3 = document.querySelectorAll('p');
// p3[2].style.backgroundColor = 'lightgrey';

// trik lain --------------------------------------------------------
const sectionB = document.querySelector('section#b');
const p5 = sectionB.getElementsByTagName('p');
p5[0].style.backgroundColor = 'orange';

