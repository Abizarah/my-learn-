// let card = document.getElementsByClassName('.card')
// let clse = document.querySelector('.close')

// clse.addEventListener('click', () => {
//     card.style.display = 'none'
// })

// let allCard = document.querySelectorAll('.card')

// solusi 1 untuk menghapus
let allBX = document.querySelectorAll('.close')

// for (let i = 0; i <= allBX.length; i++) {
//     allBX[i].addEventListener('click', (e) => {
//         // allBX[i].parentElement.style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//     })
// }


// solusi 2 untuk menghapus menggunakan forEach
allBX.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.parentElement.style.display = 'none'
    })
})