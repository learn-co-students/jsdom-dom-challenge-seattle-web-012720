document.addEventListener("DOMContentLoaded", function() {

})

function addComment(comment) {
    let ul = document.createElement("ul");
    let newComment = document.createElement("li");
    newComment.textContent = comment;
    document.getElementById("list").appendChild(newComment);
  }

const newYearCountdown = setInterval(function(){
  document.getElementById("counter").innerHTML++;
//   if (counter === 10) {
//     console.log("HAPPY NEW YEAR!!");
//     clearInterval(newYearCountdown);
//   }
}, 1000);

const minus = document.getElementById("minus");
minus.addEventListener("click", function() {
    document.getElementById("counter").innerHTML--
});

const plus = document.getElementById("plus");
plus.addEventListener("click", function() {
    document.getElementById("counter").innerHTML++
});

const form = document.getElementById("comment-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const commentToAdd = event.target["comment"].value;
  if (commentToAdd !== "") {
    addComment(commentToAdd);
  }
  // addFood(document.querySelector("input").value);
  // document.querySelector("input").value = "";
});

document.getElementById("list").appendChild