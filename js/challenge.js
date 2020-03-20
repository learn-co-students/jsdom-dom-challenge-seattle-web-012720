

document.addEventListener("DOMContentLoaded", function(){
    let seconds = setInterval(increment, 1000)
    let isPaused = false;
    let counter = document.getElementById("counter");

    function increment(){
        if (!isPaused){
       counter.textContent = seconds
       seconds += 1 
        }
    }

    increment()

    function decrement(){
        counter.textContent = seconds 
        seconds -=1
    }
    
    let plusButton = document.getElementById("plus")
    plusButton.addEventListener("click", function(){
        if (!isPaused){
        increment()
        }
    })
    
    let minusButton = document.getElementById("minus")
    minusButton.addEventListener("click", function(){
        if (!isPaused){
        decrement()
        }
    })

    let heartButton = document.getElementById("heart")

    let thisWasLiked = [] 

    let countLikes = 0

    heartButton.addEventListener("click", function(){
        let num = counter.textContent; 
        let li = document.createElement("li")

        if(thisWasLiked.includes(num)){
            countLikes +=1
        }else { 
            countLikes = 1
            thisWasLiked.push(num)
             }

        li.textContent = `${num} was liked ${countLikes} times.` 
        document.querySelector("ul").appendChild(li)
    
    })

    let pauseButton = document.getElementById("pause")

    pauseButton.addEventListener("click", function(){
        isPaused = !isPaused
    })

    let submitComment = document.getElementById("comment-form")
    
    
    submitComment.addEventListener("submit", (e) => {
        e.preventDefault();
        let input = event.target.comment.value
        let commentLi = document.createElement("li")
        commentLi.textContent = input 
        let commentList = document.getElementById("list")
        commentList.appendChild(commentLi)

    })


     
})