// Event Handler --------------------------------------------------------------------------------
// const tutup = document.querySelector('.close')
// tutup.addEventListener('click',function(){
//     const card = document.querySelector('.card')
//     card.remove()
//     // card.style.display = 'none'              // ~> jika ingin menghilangkan menggunakan css
// })

// DOM Traversal --------------------------------------------------------------------------------
const tutup = document.querySelectorAll('.close')

// for(let i = 0; i < tutup.length; i++){
//     tutup[i].addEventListener('click',function(e){
//         e.target.parentElement.remove()
//     //    tutup[i].parentElement.style.display = 'none'
    
//         // console.log(e)
//     })
// }

// versi praktisnya 
tutup.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.remove()
    })
})

// contoh lain
const nama = document.querySelector('.nama')
console.log(nama.nextSibling)
console.log(nama.nextElementSibling)
console.log(nama.nextElementSibling.nextElementSibling)
console.log(nama.previousSibling)
console.log(nama.previousElementSibling)
console.log(nama.previousElementSibling.previousElementSibling)
