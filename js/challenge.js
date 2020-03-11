document.addEventListener("DOMContentLoaded", function(){
    const seconds = document.getElementById('counter')
    function secondCounter() {
        if(!paused){
        seconds.innerText = parseInt(seconds.innerText) + 1   
        }         
    }   
    setInterval(secondCounter, 1000)
    const plusButton = document.getElementById('plus')
    const minusButton = document.getElementById('minus')
    const pauseButton = document.getElementById('pause')
    const likeButton = document.getElementById('heart')
    const likes = document.getElementById("likes")
    const commentForm = document.getElementById('comment-form')

        plusButton.addEventListener("click", function(){
            seconds.innerText = parseInt(seconds.innerText) + 1
        })

        minusButton.addEventListener("click", function(){
            seconds.innerText = parseInt(seconds.innerText) - 1
        })

        likeButton.addEventListener("click", function(){
            const likedNumber = seconds.innerText
            if(!textArray.includes(seconds.innerText)){
                numberOfLikes = 1
                textArray.push(seconds.innerText)
                const newLi = document.createElement("li")
                newLi.id = likedNumber
                likes.appendChild(newLi) 
            }else{
                numberOfLikes += 1
            }
            document.getElementById(likedNumber).textContent = likedNumber + " - " + numberOfLikes + " likes"      
        })

    pauseButton.addEventListener("click", function(){
        paused = !paused
        if(paused){
            pauseButton.textContent = "resume"
            plusButton.disabled = true
            minusButton.disabled = true
            likeButton.disabled = true
        }else{
            pauseButton.textContent = "pause"
            plusButton.disabled = false
            minusButton.disabled = false
            likeButton.disabled = false
            seconds.innerText = '0'
        }
    })
    
    commentForm.addEventListener("submit", function(event){
        event.preventDefault();
        const newComment = event.target["comment-input"].value
        const comments = document.getElementById('list')
        const newCommentLi = document.createElement("li")
        newCommentLi.textContent = newComment
        comments.appendChild(newCommentLi)
    })
});
let numberOfLikes = 1
const textArray = []
let paused = false
