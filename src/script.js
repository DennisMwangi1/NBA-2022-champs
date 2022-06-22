document.addEventListener('DOMContentLoaded',()=>{
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
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