// DOM Manipulation -------------------------------------------------------------
// buat elemen baru 
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru)
// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru)

// node.insertBefore() ----------------------------------------------------------
const liBaru = document.createElement('li');
const tksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(tksLiBaru)

