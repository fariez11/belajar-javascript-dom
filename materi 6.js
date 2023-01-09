// DOM Manipulation -------------------------------------------------------------
// buat elemen baru 
const pBaru = document.createElement('p')
const teksPBaru = document.createTextNode('Paragraf Baru')
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru)
// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

// node.insertBefore() ----------------------------------------------------------
const liBaru = document.createElement('li')
const tksLiBaru = document.createTextNode('Item Baru')
liBaru.appendChild(tksLiBaru)

const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru,li2)

// parentNode.removeChild() -----------------------------------------------------
const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)

// parentNode.replaceChild() ----------------------------------------------------
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const h2Baru = document.createElement('h2')
const teksH2Baru = document.createTextNode('Judul Baru')
h2Baru.appendChild(teksH2Baru)

sectionB.replaceChild(h2Baru,p4)

pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
h2Baru.style.backgroundColor = 'lightgreen'