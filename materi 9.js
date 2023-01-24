// 1. menangkap pilihan computer (membengkitkan biangan random) -----------------------------------------
function getPilihanComputer(){
    const comp = Math.random()
    if(comp < 0.34) return 'gajah'
    if(comp >= 0.34 && comp < 0.67) return 'orang'
    return 'semut'
}
// 2. menentukan rules ----------------------------------------------------------------------------------
function getHasil(comp,player){
    if(player == comp) return 'SERI!';
    if(player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!'              
    if(player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!'
    if(player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!'
}
// 3. menjalankan aksi
// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click',function(){
//     const pilihComputer = getPilihanComputer()
//     const pilihPlayer = pGajah.className
//     const hasil = getHasil(pilihComputer,pilihPlayer)

//     const imgComputer = document.querySelector('.img-computer')
//     imgComputer.setAttribute('src', 'image/' + pilihComputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

// })


// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click',function(){
//     const pilihComputer = getPilihanComputer()
//     const pilihPlayer = pOrang.className
//     const hasil = getHasil(pilihComputer,pilihPlayer)

//     const imgComputer = document.querySelector('.img-computer')
//     imgComputer.setAttribute('src', 'image/' + pilihComputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

// })


// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click',function(){
//     const pilihComputer = getPilihanComputer()
//     const pilihPlayer = pSemut.className
//     const hasil = getHasil(pilihComputer,pilihPlayer)

//     const imgComputer = document.querySelector('.img-computer')
//     imgComputer.setAttribute('src', 'image/' + pilihComputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

// })

// revisi agar aksi bisa dijadikan 1 -------------------------------------------------------------------

// tambah animasi loading untuk pilihan computer

function putar(){
    document.querySelector('.info').innerHTML = 'tunggu...'
    const imgComputer = document.querySelector('.img-computer')
    const img = ['gajah','orang','semut']
    let i = 0;
    const startTime = new Date().getTime()
    setInterval(function(){
        if(new Date().getTime() - startTime > 1000){
            clearInterval
            return
        }
        imgComputer.setAttribute('src','image/' + img[i++] + '.png')
        if(i == img.length ) i = 0
    }, 100)
}


const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){
        const pilihComputer = getPilihanComputer()
        const pilihPlayer = pil.className
        const hasil = getHasil(pilihComputer,pilihPlayer)

        putar()

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-computer')
            imgComputer.setAttribute('src', 'image/' + pilihComputer + '.png')
    
            const info = document.querySelector('.info')
            info.innerHTML = hasil
        },1000)
    })
})