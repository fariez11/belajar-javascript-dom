// latihan ubah warna  ----------------------------------------------------
// const button = document.querySelector('button')

// button.addEventListener('click',function(){
//     document.body.style.backgroundColor = 'lightblue'
// })

// revisi (mennggunakan event handler) ------------------------------------
// const btnUbah = document.getElementById('btnUbahWarna')
// btnUbah.onclick = function() {
//     document.body.style.backgroundColor = 'lightgrey'
// }

// reset ketika diklik 2 kali ---------------------------------------------
const btnUbah = document.getElementById('btnUbahWarna')
btnUbah.onclick = function() {
    document.body.classList.toggle('biru-muda')
}

// tambah tombol baru yang bisa acak warna --------------------------------
const btnBaru = document.createElement('button')
const txtBaru = document.createTextNode('Acak Warna')
btnBaru.appendChild(txtBaru)
btnBaru.setAttribute('type','button')
btnUbah.after(btnBaru)

btnBaru.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

// slider warna -------------------------------------------------------------
const sRed = document.querySelector('input[name=red]')
const sGreen = document.querySelector('input[name=green]')
const sBlue = document.querySelector('input[name=blue]')

sRed.addEventListener('change',function(){
    const r = sRed.value
    const g = sGreen.value
    const b = sBlue.value
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

sGreen.addEventListener('change',function(){
    const r = sRed.value
    const g = sGreen.value
    const b = sBlue.value
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

sBlue.addEventListener('change',function(){
    const r = sRed.value
    const g = sGreen.value
    const b = sBlue.value
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

// ganti warna menggunakan cursor di geser -----------------------------------
document.body.addEventListener('mousemove', function(event){
    // posisi mouse
    // console.log(event.clientY)
    // ukuran browser
    // console.log(window.innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255)
    const yPos = Math.round((event.clientY / window.innerHeight) * 255)
    document.body.style.backgroundColor = 'rgb('+ xPos + ',' + yPos + ', 70)'
    // console.log(xPos)
})




