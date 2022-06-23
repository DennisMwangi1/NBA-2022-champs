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
    // stats
    let postMPG = document.getElementById('postMPG')
    let postFG = document.getElementById('postFG')
    let post3PT = document.getElementById('post3PT')
    let postFT = document.getElementById('postFT')
    let postPPG = document.getElementById('postPPG')
    let postRPG = document.getElementById('postRPG')
    let postAPG = document.getElementById('postAPG')
    let postBPG = document.getElementById('postBPG')
    let careerMPG = document.getElementById('careerMPG')
    let careerFG = document.getElementById('careerFG')
    let career3PT = document.getElementById('career3PT')
    let careerFT = document.getElementById('careerFT')
    let careerPPG = document.getElementById('careerPPG')
    let careerRPG = document.getElementById('careerRPG')
    let careerAPG = document.getElementById('careerAPG')
    let careerBPG = document.getElementById('careerBPG')
   



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

        fetch("https://nba-players.herokuapp.com/players-stats/curry/stephen")
        .then((res)=>res.json())
        .then((playerData)=>{
            postMPG.textContent =  playerData.minutes_per_game
            postFG.textContent = playerData.field_goal_percentage
            post3PT.textContent =  playerData.three_point_percentage
            postFT .textContent = playerData.free_throw_percentage
            postPPG.textContent =  playerData.points_per_game
            postRPG.textContent =  playerData.rebounds_per_game
            postAPG.textContent =  playerData.assists_per_game
            postBPG.textContent =  playerData.blocks_per_game
        })

        careerMPG.innerText = 33
        careerFG.innerText =  52
        career3PT.innerText = 42
        careerFT.innerText = 93.5
        careerPPG.innerText =  28.2
        careerRPG.innerText = 5.2
        careerAPG.innerText = 7.1
        careerBPG.innerText = 0.1
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

        fetch("https://nba-players.herokuapp.com/players-stats/thompson/klay")
        .then((res)=>res.json())
        .then((playerData)=>{
            postMPG.textContent =  playerData.minutes_per_game
            postFG.textContent = playerData.field_goal_percentage
            post3PT.textContent =  playerData.three_point_percentage
            postFT .textContent = playerData.free_throw_percentage
            postPPG.textContent =  playerData.points_per_game
            postRPG.textContent =  playerData.rebounds_per_game
            postAPG.textContent =  playerData.assists_per_game
            postBPG.textContent =  playerData.blocks_per_game
        })

        careerMPG.innerText = '33:45'
        careerFG.innerText =  50
        career3PT.innerText = 44
        careerFT.innerText = 86
        careerPPG.innerText =  19
        careerRPG.innerText = 4.3
        careerAPG.innerText = 2.2
        careerBPG.innerText = 0.3
        
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

        fetch("https://nba-players.herokuapp.com/players-stats/iguodala/andre")
        .then((res)=>res.json())
        .then((playerData)=>{
            postMPG.textContent =  playerData.minutes_per_game
            postFG.textContent = playerData.field_goal_percentage
            post3PT.textContent =  playerData.three_point_percentage
            postFT .textContent = playerData.free_throw_percentage
            postPPG.textContent =  playerData.points_per_game
            postRPG.textContent =  playerData.rebounds_per_game
            postAPG.textContent =  playerData.assists_per_game
            postBPG.textContent =  playerData.blocks_per_game
        })
        careerMPG.innerText = '25:40'
        careerFG.innerText =  43
        career3PT.innerText = 22
        careerFT.innerText = 62
        careerPPG.innerText =  6.1
        careerRPG.innerText = 3.9
        careerAPG.innerText = 3.3
        careerBPG.innerText = 0.6
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

        fetch("https://nba-players.herokuapp.com/players-stats/green/draymond")
        .then((res)=>res.json())
        .then((playerData)=>{
            postMPG.textContent =  playerData.minutes_per_game
            postFG.textContent = playerData.field_goal_percentage
            post3PT.textContent =  playerData.three_point_percentage
            postFT .textContent = playerData.free_throw_percentage
            postPPG.textContent =  playerData.points_per_game
            postRPG.textContent =  playerData.rebounds_per_game
            postAPG.textContent =  playerData.assists_per_game
            postBPG.textContent =  playerData.blocks_per_game
        })

        careerMPG.innerText = '31:20'
        careerFG.innerText =  45
        career3PT.innerText = 30
        careerFT.innerText = 76
        careerPPG.innerText =  11.3
        careerRPG.innerText = 7.5
        careerAPG.innerText = 7.2
        careerBPG.innerText = 1.5
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

        fetch("https://nba-players.herokuapp.com/players-stats/wiggins/andrew")
        .then((res)=>res.json())
        .then((playerData)=>{
            postMPG.textContent =  playerData.minutes_per_game
            postFG.textContent = playerData.field_goal_percentage
            post3PT.textContent =  playerData.three_point_percentage
            postFT .textContent = playerData.free_throw_percentage
            postPPG.textContent =  playerData.points_per_game
            postRPG.textContent =  playerData.rebounds_per_game
            postAPG.textContent =  playerData.assists_per_game
            postBPG.textContent =  playerData.blocks_per_game
        })

        careerMPG.innerText = 35.1
        careerFG.innerText =  42
        career3PT.innerText = 29.8
        careerFT.innerText = 61.7
        careerPPG.innerText =  16.5
        careerRPG.innerText = 3.9
        careerAPG.innerText = 1.6
        careerBPG.innerText = 0.6
    })


    

})