document.addEventListener('DOMContentLoaded', () => {
    // Hämtat element
    const userScoreSpan = document.querySelector('#user-score')
    const computerScoreSpan = document.querySelector('#computer-score')
    const resultText = document.querySelector('.result-text')
    const moveId = document.querySelector('.containerMove')

    const rock = document.querySelector('#rock')
    const paper = document.querySelector('#paper')
    const scissor = document.querySelector('#scissor')
    const lizard = document.querySelector('#lizard')
    const spock = document.querySelector('#spock')

    // Resultat ska börja på 0
    let userScore = 0
    let computerScore = 0

    // Funktion om vad som händer om jag förlorar
    const lose = (userChoice, computerChoice) => {
        computerScore++
        computerScoreSpan.textContent = computerScore
        resultText.textContent = `${computerChoice} kör över ${userChoice}. Du förlorade.`
    }

    //Funktion om vad som händer om jag vinner
    const win = (userChoice, computerChoice) => {
        userScore++
        userScoreSpan.textContent = userScore
        resultText.textContent = `${userChoice} kör över ${computerChoice}. Du vann!`
    }

    //Funktion om vad som händer vid lika
    const equal = () => {
        resultText.textContent = `Oavgjort`
    }

    //Funktion om att hämta spelarens namn från startsida
    const setPlayerName = () => {
        const playerName = localStorage.getItem('playerName')
        if (playerName) {
            const gamer1 = document.querySelector('.gamer1')
            gamer1.textContent = playerName
        }
    }

    //Funktion om att hämta tema från startsidan
    const setTheme = () => {
        const selectedTheme = localStorage.getItem('theme')
        document.body.classList.add(selectedTheme)
    }

    // Funktion om spelet
    if (window.location.pathname.includes('play.html')) {
        const game = (userChoice, computerChoice) => {
            if (
                (userChoice === 'Sten' && computerChoice === 'Sten') ||
                (userChoice === 'Sax' && computerChoice === 'Sax') ||
                (userChoice === 'Påse' && computerChoice === 'Påse')
            ) {
                return equal(userChoice, computerChoice)
            } else if (
                (userChoice === 'Sten' && computerChoice === 'Sax') ||
                (userChoice === 'Sax' && computerChoice === 'Påse') ||
                (userChoice === 'Påse' && computerChoice === 'Sten')
            ) {
                return win(userChoice, computerChoice)
            } else {
                lose(userChoice, computerChoice)
            }
        }

        // Funktion om datorns val (sten,sax, påse) som väljs random.
        const getComputerChoice = () => {
            const choices = ['Sten', 'Sax', 'Påse']
            const randomNumber = Math.floor(Math.random() * 3)
            return choices[randomNumber]
        }

        const rockPaperScissor = (id) => {
            if (id === 'rock') {
                return 'Sten'
            } else if (id === 'scissor') {
                return 'Sax'
            } else if (id === 'paper') {
                return 'Påse'
            }
        }

        const handleUserChoice = (event) => {
            const userChoice = rockPaperScissor(event.target.id)
            const computerChoice = getComputerChoice()

            moveId.textContent = ''

            game(userChoice, computerChoice)

            const images = {
                Sten: 'images/rock.png',
                Sax: 'images/scissor.png',
                Påse: 'images/paper.png',
            }

            //Lagt in bild för varje val användaren gör
            const imgUser = document.createElement('img')
            imgUser.src = images[userChoice]
            imgUser.alt = userChoice
            moveId.appendChild(imgUser)
            imgUser.classList.add('player-move')

            //Bild för varje val datorn gör
            const imgComputer = document.createElement('img')
            imgComputer.src = images[computerChoice]
            imgComputer.alt = computerChoice
            moveId.appendChild(imgComputer)
            imgComputer.classList.add('computer-move')
        }

        const allButtons = [rock, paper, scissor]

        allButtons.forEach((button) => {
            button.addEventListener('click', handleUserChoice)
        })

        setPlayerName()
        setTheme()
    }

    //Utmaning
    if (window.location.pathname.includes('gameChallenge.html')) {
        const gameChallenge = (userChoice, computerChoice) => {
            if (
                (userChoice === 'Sten' && computerChoice === 'Sten') ||
                (userChoice === 'Sax' && computerChoice === 'Sax') ||
                (userChoice === 'Påse' && computerChoice === 'Påse') ||
                (userChoice === 'Ödla' && computerChoice === 'Ödla') ||
                (userChoice === 'Spock' && computerChoice === 'Spock')
            ) {
                return equal(userChoice, computerChoice)
            } else if (
                (userChoice === 'Sten' && computerChoice === 'Sax') ||
                (userChoice === 'Sax' && computerChoice === 'Påse') ||
                (userChoice === 'Påse' && computerChoice === 'Sten') ||
                (userChoice === 'Ödla' && computerChoice === 'Påse') ||
                (userChoice === 'Spock' && computerChoice === 'Sax') ||
                (userChoice === 'Spock' && computerChoice === 'Sten') ||
                (userChoice === 'Ödla' && computerChoice === 'Spock') ||
                (userChoice === 'Sten' && computerChoice === 'Ödla') ||
                (userChoice === 'Sax' && computerChoice === 'Ödla') ||
                (userChoice === 'Påse' && computerChoice === 'Spock')
            ) {
                return win(userChoice, computerChoice)
            } else {
                lose(userChoice, computerChoice)
            }
        }

        const getComputerChoiceChallenge = () => {
            const choices = ['Sten', 'Sax', 'Påse', 'Ödla', 'Spock']
            const randomNumber = Math.floor(Math.random() * 5)
            return choices[randomNumber]
        }

        const rockPaperScissorLizardRock = (id) => {
            if (id === 'rock') {
                return 'Sten'
            } else if (id === 'scissor') {
                return 'Sax'
            } else if (id === 'paper') {
                return 'Påse'
            } else if (id === 'lizard') {
                return 'Ödla'
            } else if (id === 'spock') {
                return 'Spock'
            }
        }

        const handleUserChoiceChallenge = (event) => {
            const userChoice = rockPaperScissorLizardRock(event.target.id)
            const computerChoice = getComputerChoiceChallenge()

            moveId.textContent = ''

            gameChallenge(userChoice, computerChoice)

            const images = {
                Sten: 'images/rock2.png',
                Sax: 'images/scissor2.png',
                Påse: 'images/paper2.png',
                Ödla: 'images/lizard.png',
                Spock: 'images/spock.png'
            }

            //Lagt in bild för varje val användaren gör
            const imgUser = document.createElement('img')
            imgUser.src = images[userChoice]
            imgUser.alt = userChoice
            moveId.appendChild(imgUser)
            imgUser.classList.add('player-move')

            //Bild för varje val datorn gör
            const imgComputer = document.createElement('img')
            imgComputer.src = images[computerChoice]
            imgComputer.alt = computerChoice
            moveId.appendChild(imgComputer)
            imgComputer.classList.add('computer-move')
        }

        const allButtonsChallenge = [rock, paper, scissor, lizard, spock]

        allButtonsChallenge.forEach((button) => {
            button.addEventListener('click', handleUserChoiceChallenge)
        })

        setPlayerName()
        setTheme()
    }
})
