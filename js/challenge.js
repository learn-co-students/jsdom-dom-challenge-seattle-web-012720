const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const like = document.getElementById("heart");
const pause = document.getElementById("pause");
const form = document.getElementById("comment-form");

let timer = setInterval(count, 1000);

function count() {
    c = parseInt(counter.innerText);
    c++;
    counter.innerText = c;
}

plus.addEventListener("click", function(e) {
    e.preventDefault();
    count();
})

minus.addEventListener("click", function(e) {
    e.preventDefault();
    c = parseInt(counter.innerText);
    c--;
    counter.innerText = c;
})

const hash = {};

like.addEventListener("click", function(e) {
    e.preventDefault();
    let current = counter.innerText;
    if (hash[current]) {
        hash[current]++;
        document.getElementById(`${current}`).innerText = `${current} has been liked ${hash[current]} times`;
    } else {
        hash[current] = 1;
        let newLike = document.createElement("li");
        newLike.id = current;
        newLike.innerText = `${current} has been liked 1 time`;
        document.querySelector("ul.likes").appendChild(newLike);   
    }
})

pause.addEventListener("click", function(e) {
    e.preventDefault();
    if (pause.innerText == "pause") {
        clearInterval(timer);
        pause.innerText = "resume";
        plus.disabled = true;
        minus.disabled = true;
        like.disabled = true;
    } else {
        timer = setInterval(count, 1000);
        pause.innerText = "pause";
        plus.disabled = false;
        minus.disabled = false;
        like.disabled = false;  
    }   
})

function addComment(comment) {
    let newComment = document.createElement("li");
    newComment.textContent = comment;
    document.getElementById("list").appendChild(newComment)
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let comment = e.target["comment"].value;
    addComment(comment);
    document.querySelector("input").value = "";
})