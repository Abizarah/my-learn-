// getElementById --> mengembalikan Element
// const judul = document.getElementById('judul');
// judul.style.color = 'aquamarine'
// judul.style.textAlign = 'center'
// judul.style.backgroundColor = 'gray'






// getElementByTagName -- mengembalikan HtmlCollection dalam bentuk array
// biarpun elementnya hanya satu
// const paragraf = document.getElementsByTagName('p')
// for (i = 0; i <= paragraf.length; i++) {
//     paragraf[i].textContent = `ini text ke ${i}`
//     paragraf[i].style.backgroundColor = 'lightblue'
//     paragraf[i].style.textAlign = 'center'
// }

// const h1 = document.getElementsByTagName('h1')[0]
// h1.style.fontSize = '50px'






// getElementByClassName --> mengembalikan HtmlCollection
// const paraf = document.getElementsByClassName('p1')
// paraf[0].textContent = 'ini paragraf ke satu'






// querySelector() --> mengembalikan Element Html
// ini mempunyai selector yang sama pada CSS
// yang di mana selectornya kita masukan spesifik element yang ada di CSS

// const li3 = document.querySelector('section#b ul li:nth-child(3)');
// li3.style.backgroundColor = 'orange'


// querySelectorAll()--> mengembalikan sebuah NodeList dalam bentuk array juga sama seperti HtmlCollection
// const all = document.querySelectorAll('p')
// all[0].innerHTML = '<div><p>Ini text </p></div>'


// menggunakan classList
// const p3 = document.querySelector('.p3')
// p3.classList.add('container')
// p3.classList.remove('container')
// p3.classList.toggle('container') // mengembalikan nilai true dan false
// p3.classList.toggle('container')


///////////// DOM Manipulation NODE ////////////////
// Buat elemen baru dan text baru
// const kolom = document.createElement('p');
// const tex = document.createTextNode('paragraf baru')
// simpan text ke dalam element yang di buat sebelumnya
// kolom.appendChild(tex)

// Simpan element yang di buat sebelumnya, ke dalam body yand spesifik
// const seccion = document.getElementById('a')
// seccion.appendChild(kolom)




// let libaru = document.createElement('li')
// let textbaru = document.createTextNode('item baru')

// libaru.appendChild(textbaru)

// let tambhkn = document.querySelector('#b ul')
// let li2 = document.querySelector('li:nth-child(2)')

// tambhkn.insertBefore(libaru, li2)

// let sectionA = document.getElementById('a')
// let link = document.getElementsByTagName('a')[0]

// sectionA.removeChild(link)


const everyClk = document.querySelector('section#b p')
everyClk.addEventListener('click', () => {
    let ul = document.querySelector('section#b ul')
    let listbaru = document.createElement('li')
    let listText = document.createTextNode('item baru')
    listbaru.appendChild(listText)

    ul.appendChild(listbaru)
})

