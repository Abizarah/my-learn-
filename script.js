const number = document.querySelectorAll('.number button')
const operator = document.querySelectorAll('.operrator button')
const allItem = document.querySelectorAll('button')
const display = document.getElementById('display')

// Mengambil nilai dan mengubah menjadi Angka
function convertNumber(arg) {
    for (i = 0; i < arg.length; i++) {
        arg[i].addEventListener('click', (e) => {
            content = e.target.textContent
            let putValue = document.querySelector('.value')
            let result = document.querySelector('.result')
            // console.log(content)
            putValue.textContent += content
            let buttonText = this.content
            if (buttonText === 'C') {
                putValue.textContent = ''
                result.textContent = '0'
                return

            }
            if (buttonText === 'del') {
                putValue.textContent = putValue.textContent.slice(0, -4)
                return
            }
            if (buttonText = '=') {
                result.textContent = eval(putValue.textContent)
                return
                // putValue.textContent = eval(putValue.textContent)
            }

        })

    }

}
convertNumber(allItem)



