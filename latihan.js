let body = document.querySelector('body')
let button1 = document.createElement('button')
let button2 = document.createElement('button')
let textBtn1 = document.createTextNode('Change Color!')
let textBtn2 = document.createTextNode('Random Color!')
let slider = document.querySelector('input[name=sMerah]')
button1.appendChild(textBtn1)
button2.appendChild(textBtn2)

body.appendChild(button1)
body.appendChild(button2)


button1.addEventListener('click', () => {
    // body.style.backgroundColor = 'aqua'
    body.classList.toggle('biru-aqua')
})

button2.addEventListener('click', () => {
    setInterval(function () {
        const randomColor = Math.floor(Math.random() * 16777215)
        const ChangeColor = document.querySelector('body').style.backgroundColor = '#' + randomColor
    }, 1000)
})

slider.addEventListener('input', () => {
    let color = slider.value
    document.body.style.backgroundColor = 'rgb(' + color + ',100,100 )'
})

document.body.addEventListener('mousemove', (e) => {
    // posisi mouse
    let sumbuX = Math.round((e.clientX / window.innerWidth) * 255)
    let sumbuY = Math.round((e.clientY / window.innerHeight) * 255)
    document.body.style.backgroundColor = 'rgb(' + sumbuX + ', ' + sumbuY + ', 100)'

})

