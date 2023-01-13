// Inline HTML Attribute ---------------------------------------------------------------------------------------------
const p3 = document.querySelector('.p3')

function ubahWarna(){
    p3.style.backgroundColor = 'lightblue'
}
// function diatas akan dipanggil di dalam attribute html (onClick)

// Element method ----------------------------------------------------------------------------------------------------
const p2 = document.querySelector('.p2')

function ubahWarna(){
    p2.style.backgroundColor = 'lightblue'
}
p2.onclick = ubahWarna

const p4 = document.querySelector('section#b p')
// p4.addEventListener('dblclick', function(){
// p4.addEventListener('mouseenter', function(){
// p4.addEventListener('mouseleave', function(){
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul')
    const li = document.createElement('li')
    const textLi = document.createTextNode('Item Batu')
    li.appendChild(textLi)
    ul.appendChild(li)
});