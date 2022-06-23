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
    let curry = document.getElementById('stephenCurry')
    let klay = document.getElementById('klayThompson')



    curry.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Stephen'
        lastName.textContent = 'CURRY'
        console.log('hello');
    })
    klay.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Klay'
        lastName.textContent = 'THOMPSON'
        console.log('hello');
    })

})