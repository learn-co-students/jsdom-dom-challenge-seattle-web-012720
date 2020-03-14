
function _toConsumableArray(counter){
    if(Array.isArray(counter)){
        for (time = 0, copy = Array(counter.length); time < counter.length; time++)
            copy[time]=counter[time];
            return copy
    }
    return Array.from(counter)
}
var playing =! 0;

function timer() {
        return setInterval(function(){
            var counter = document.getElementById("counter");
            var time = parseInt(counter.innerText);
            counter.innerText = time + 1;
        },
        1e3)
}

var interval = timer();

var minus = document.getElementById("minus");

var plus = document.getElementById("plus");

var heart = document.getElementById("heart");

var pause = document.getElementById("pause");

var commentForm = document.getElementsByTagName("form")[0];

minus.addEventListener("click",function(){
    time = parseInt(counter.innerText);
    counter.innerText = time - 1;
})

plus.addEventListener("click",function(){
    time = parseInt(counter.innerText);
    counter.innerText = time + 1;
})

heart.addEventListener("click",function(){
    var counter = document.getElementById("counter");
    time = parseInt(counter.innerText);
    likeBox = document.querySelector(".likes");
    likes = void 0;
    if ([].concat(_toConsumableArray(likeBox.children)).map(function(counter) { 
        return parseInt(counter.dataset.num)
    })
    .includes(time)) {
        likes = document.querySelector('[data-num="'+time+'"]');
        var numberOfLikes = parseInt(likes.children[0].innerText);
        likes.innerHTML = time+" has been liked <span>"+(numberOfLikes+1)+"</span> times"}
    else (
        likes = document.createElement("li")
    ).setAttribute("data-num",time);
    likes.innerHTML = time+" has been liked <span>1</span> time",
    likeBox.appendChild(likes)
})

pause.addEventListener("click",function(){
    playing ? (playing =! 1,
                clearInterval(interval),
                this.innerText="resume") 
            : (playing =! 0,
                interval = timer(),
                this.innerText = "pause"),
    [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(counter){
        "pause" !== counter.id && (counter.disabled =! playing)
    })
})

commentForm.addEventListener("submit",function(event){
    event.preventDefault();
    const textBox = this.children[0];
    const commentSection = document.querySelector(".comments");
    let comment = document.createElement("p");
    comment.innerText = textBox.value;
    commentSection.appendChild(comment),
    textBox.value = "";
});
