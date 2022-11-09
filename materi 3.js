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
for(let i = 0 ; i < p.length; i++){                 // Karena p diatas masih berbentuk HTMLCollection maka harus diperulang 1 per 1
    p[i].style.backgroundColor = 'lightgrey';
}

const h1 = document.getElementsByTagName('h1')[0];    // fungsi [0] untuk merubah HTMLCollection menjadi elements
h1.style.fontStyle = 'italic';

// getElementsByClassName() -----------------------------------------
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript';