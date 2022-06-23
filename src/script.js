document.addEventListener('DOMContentLoaded',()=>{
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let playerHeight = document.getElementById('heightOfPlayer')
    let playerWeight = document.getElementById("weightOfPlayer")
    let playerBirthDate = document.getElementById("born")
    let playerFrom = document.getElementById('from')
    let playerDebut = document.getElementById('debut')
    let playerPrevious = document.getElementById('previously')
    let playerNumber = document.getElementById('Num')
    let playerPosition = document.getElementById('position')
    let playerImage = document.getElementById('imageOfPlayer')

    // players
    const curry = document.getElementById('stephenCurry')
    const klay = document.getElementById('klayThompson')
    const iguodala = document.getElementById('andreIguodala')
    const draymond = document.getElementById('draymondGreen')
    const wiggins = document.getElementById('andrewWiggins')



    curry.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Stephen'
        lastName.textContent = 'CURRY'
        playerHeight.textContent = 1.88
        playerWeight.textContent = 84
        playerBirthDate.textContent = '03/14/1988'
        playerFrom.textContent = 'Davidson'
        playerDebut.textContent = 2009
        playerPrevious.textContent = 'GSW 2009 - Date'
        playerNumber.textContent = '#30'
        playerPosition.textContent = 'Point Guard'
        playerImage.src = './assets/images/steph.png'
        playerImage.style.height = '650px'
        playerImage.style.width = '400px'
    })


    klay.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Klay'
        lastName.textContent = 'THOMPSON'
        playerHeight.textContent = 1.98
        playerWeight.textContent = 99.8
        playerBirthDate.textContent = '08/02/1990'
        playerFrom.textContent = 'Los Angeles California'
        playerDebut.textContent = 2011
        playerPrevious.textContent = 'GSW 2009 - Date'
        playerNumber.textContent = '#11'
        playerPosition.textContent = 'Shooting Guard'
        playerImage.src = './assets/images/klay.png'
        playerImage.style.height = '650px'
        playerImage.style.width = '400px'
    })

    iguodala.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Andre'
        lastName.textContent = 'IGUODALA'
        playerHeight.textContent = 1.98
        playerWeight.textContent = 98
        playerBirthDate.textContent = '28/01/1984'
        playerFrom.textContent = 'Springfield USA'
        playerDebut.textContent = 2004
        playerPrevious.textContent = 'Miami Heat'
        playerNumber.textContent = '#9'
        playerPosition.textContent = 'Small Foward'
        playerImage.src = './assets/images/iguodala.png'
        playerImage.style.height = '650px'
        playerImage.style.width = '400px'
    })

    draymond.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Draymond'
        lastName.textContent = 'GREEN'
        playerHeight.textContent = 1.98
        playerWeight.textContent = 104
        playerBirthDate.textContent = '04/03/1990'
        playerFrom.textContent = 'Michigan USA'
        playerDebut.textContent = 2008
        playerPrevious.textContent = 'USA National Team'
        playerNumber.textContent = '#23'
        playerPosition.textContent = 'Power Foward'
        playerImage.src = './assets/images/draymond.png'
        playerImage.style.height = '650px'
        playerImage.style.width = '400px'
    })

    wiggins.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Andrew'
        lastName.textContent = 'Wiggins'
        playerHeight.textContent = 2.01
        playerWeight.textContent = 88
        playerBirthDate.textContent = '23/02/1995'
        playerFrom.textContent = 'Thornhill Canada'
        playerDebut.textContent = 2011
        playerPrevious.textContent = 'Minnesota Timberwolves'
        playerNumber.textContent = '#22'
        playerPosition.textContent = 'Center'
        playerImage.src = './assets/images/wiggins.png'
        playerImage.style.height = '650px'
        playerImage.style.width = '500px'
    })

})