document.addEventListener("DOMContentLoaded", () => {
    let seconds = document.getElementById("counter")
    let hash = {};

    let playing = true;
    function startCounter() {
        return setInterval(function() {
            let i = parseInt(seconds.innerText);
            seconds.innerText = i+1
        }, 1000);
    }

    let timer = startCounter()


    const increase = document.getElementById("plus")
    increase.addEventListener("click", function() {
        let i = parseInt(seconds.innerText);
        seconds.innerText = i+1
    })

    const decrease = document.getElementById("minus")
    decrease.addEventListener("click", function() {
        let i = parseInt(seconds.innerText);
        seconds.innerText = i-1;
    })

    function like(second) {
        if (!!hash[second]) {
            hash[second] +=1;
            document.getElementById(second.to_s).innerText = `${second} has been liked ${hash[second]} times`;
        } else {
            newLike = document.createElement('li');
            newLike.setAttribute("id", second.to_s)
            hash[second] =1;
        }
        newLike.textContent = `${second} has been liked ${hash[second]} times`;
        document.querySelector("ul").appendChild(newLike)
    }

    function addComment(comment) {
        let newComment = document.createElement('li');
        newComment.textContent = comment;
        document.getElementById('list').appendChild(newComment);
    }

    const liker = document.getElementById("heart");
    liker.addEventListener("click", function(){
        like(seconds.innerText);
    })

    const pause = document.getElementById("pause");
    
    pause.addEventListener("click", function() {
        buttons = document.querySelectorAll("button")
        if (!!playing) {
            playing= false;
            buttons.forEach(item =>
                item.disabled = true);
            pause.disabled = false;
            clearInterval(timer),
            this.innerText="resume"}
        else {
            playing= true
            buttons.forEach(item =>
                item.disabled = false);
            timer = startCounter();
            this.innerText="pause"
        }
    })


    const commenter = document.getElementById("comment-form")
    commenter.addEventListener("submit", function(event) {
        event.preventDefault();
        let newComment = event.target["comment-input"].value
        addComment(newComment);
        document.querySelector("input").value = ""
    })

})


