//Hämtat element från start.html
const playBtn = document.querySelector('#playBtn')
const inputBox = document.querySelector('#user')
const select = document.querySelector('#theme')
const age = document.querySelector('#age')

// En funktion  som öppnar nytt fönster (play.html)
const letsPlay = (e) => {
    e.preventDefault()
    const name = inputBox.value
    const selectedTheme = select.value
    const selectedAge = age.value

    if (name && selectedTheme && selectedAge) {
        localStorage.setItem('playerName', name)
        localStorage.setItem('theme', selectedTheme)
        localStorage.setItem('age', selectedAge)
        if (parseInt(selectedAge) >= 30) {
            window.open('gameChallenge.html')
        } else {
            window.open('play.html')
        }
    } else {
        alert('Fyll i namn och välj ett tema')
    }
}

// Klickevent som använder click-funktionen om man klickar på 'Lets play'
playBtn.addEventListener('click', letsPlay)

// Gjort så att man kan använda enter-knappen också
inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        letsPlay()
        inputBox.value = ''
    }
})
