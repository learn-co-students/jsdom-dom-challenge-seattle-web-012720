

//start clock
function counter() {
    let time = 0;
    window.setInterval(function() {
        let time = document.getElementById("counter").innerText;
        time = parseInt(time);
        time = time + 1;
        document.getElementById("counter").innerText = time;
    }, 1000)
};

//minus & plus counter
function minus() {
    let counter = document.getElementById("counter").innerText;
    counter = counter - 1;
    document.getElementById("counter").innerText = counter;
}
function plus() {
    let counter = document.getElementById("counter").innerText;
    counter = parseInt(counter) + 1;
    document.getElementById("counter").innerText = counter;
}

//like function
function createLike(number) {
    const likeList = document.getElementsByClassName("likes")
    const thisLike = document.createElement("li")
    thisLike.id = `${number}-likes`;
    thisLike.innerHTML = `The number ${number} has <span id="${number}">1</span> like.`;
    // console.log(thisLike);
    likeList[0].appendChild(thisLike);
}
function addLike(number) {
    const thisLike = document.getElementById(`${number}-likes`)
    const span = document.getElementById(`${number}`);
    let likeNumber = span.innerText;
    let newNumber = parseInt(likeNumber) + 1;
    // console.log(newNumber);
    span.innerText = newNumber;
}

document.addEventListener("DOMContentLoaded", function() {
    counter();
    
    //minus & plus functionality
    const minusButton = document.getElementById("minus");
    minusButton.addEventListener("click", function() {
        minus();
    })
    const plusButton = document.getElementById("plus");
    plusButton.addEventListener("click", function(){
        plus();
    })
    
    // like functionality
    const likeButton = document.getElementById("heart")
    likeButton.addEventListener("click", function(){
        const number = document.getElementById("counter").innerText;
        const check = document.getElementById(`${number}-likes`);
        if(check) {
            addLike(number);
        } else {
            createLike(number);
        }
    })


})

