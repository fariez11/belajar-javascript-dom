// element.innerHTML -----------------------------------------------------
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Fariez Ilham</em>';

// const sectionA  = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>paragraf1</p></div>'; 

// element.style.<CSSPrperties> ------------------------------------------
// judul.style.color = 'lightgreen';
// judul.style.backgroundColor = 'green';

// element.setAttribute() ------------------------------------------------
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name','title');             // ~> tapi jika ada attribute yang lama 
                                                //    maka atribut yang lama bakal ketimpa
// element.getAttribute() ------------------------------------------------
// judul.getAttribute('id')

// element.removeAttribute() ---------------------------------------------
// judul.getAttribute('name')




// element.classList -----------------------------------------------------
const p2 = document.querySelector('.p2');
// .add() ----------------------------------------------------------------
p2.classList.add('biru-muda');
// .remove() -------------------------------------------------------------
p2.classList.remove('biru-muda');
// .toggle() -------------------------------------------------------------
p2.classList.toggle('biru-muda');
// .item() ---------------------------------------------------------------
p2.classList.item(1);
// .contains() -----------------------------------------------------------
p2.classList.contains('satu');               // menanyakan apakah ada nama class ang dicari
// .replace() ------------------------------------------------------------
p2.classList.replace('p2','satu');