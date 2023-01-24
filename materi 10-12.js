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
// tutup.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.remove()
//         e.preventDefault()                      // ~> materi 11
//         e.stopPropagation()                     // untuk menghentikan event bubbling
//     })
// })

// const cards = document.querySelectorAll('.card')
// cards.forEach(function(card){
//     card.addEventListener('click',function(e){
//         alert('ok')
//     })
// })

// method lain (DOM Traversal)  ------------------------------------------------------------------
const nama = document.querySelector('.nama')
console.log(nama.nextSibling)
console.log(nama.nextElementSibling)
console.log(nama.nextElementSibling.nextElementSibling)
console.log(nama.previousSibling)
console.log(nama.previousElementSibling)
console.log(nama.previousElementSibling.previousElementSibling)

// Event Bubling ---------------------------------------------------------------------------------
const container = document.querySelector('.container')

container.addEventListener('click',function(e){                     // \   inti dari fungsi ini adalah jika kita ingin menambahkan
    if(e.target.className == 'close'){                              //  \  card baru tetapi dari editor browser langsung maka,
        e.target.parentElemant.style.display = 'none'               //  /  card yang baru dibuat tadi fungsinya tetap terbaca oleh fungsi ini
        e.preventDefault()                                          // /   alias (card baru bisa tetap terhapus jika tanda x di klik)
    }
}) 

