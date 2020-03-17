const clock = document.getElementById("counter")
let count = parseInt(clock.innerText)
const numberLikes = document.querySelector(".likes")
const likesHash = {}
let timeCounter = -1
let x = setInterval(incrementTime, 1000)


const commentList = document.getElementById("list")
const commentForm = document.getElementById("comment-form")
const decrement = document.getElementById("minus")
const increment = document.getElementById("plus")
const like = document.getElementById("heart")
const pause = document.getElementById("pause")

decrement.addEventListener("click", () => {
    event.preventDefault()

    count -= 1
    clock.innerText = count
})

increment.addEventListener("click", () => {
    event.preventDefault()

    count += 1
    clock.innerText = count

})

like.addEventListener("click", () => {
    event.preventDefault()
    const num = clock.innerText
    likesHash[`${num}`] = likesHash[`${num}`] || 0
    likesHash[`${num}`] += 1
    // console.log(likesHash[num])

    // if (likesHash[num] === 1) {
    const newLi = document.createElement("li")
    newLi.id = `${num}`
    // newLi.innerText = `${num} has been liked 1 time.`
    // } else {
    //     const oldLi = document.querySelector(`${num}`)
    //     console.log(oldLi)
    //     debugger;
    //     // const oldLi = searchForNumLi(num)
    //     const newLi = document.createElement("li")
    //     newLi.id = `${num}`
        newLi.innerText = `${num} has been liked ${likesHash[num]} times.`
// console.log(newLi)
        // numberLikes.replaceChild(newLi, oldLi)
    // }

    numberLikes.appendChild(newLi)

})

pause.addEventListener("click", () => {
    event.preventDefault()
    timeCounter = timeCounter * -1
    if (timeCounter === 1) {
        window.clearTimeout(x)
    } else {
        x = setInterval(incrementTime, 1000)
    }
})


document.addEventListener("DOMContentLoaded", function() {

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault()
        newP = document.createElement('p')
        newP.innerText = event.target["comment-input"].value
        commentList.appendChild(newP)

    })

    

})





function incrementTime() {
    count += 1
    clock.innerText = count
}