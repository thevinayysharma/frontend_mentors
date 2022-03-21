let user_rated;
const btn = document.querySelector(".rating-card__btn");
const ratingCard = document.querySelector(".rating-card");
const thanksgivingCard = document.querySelector(".thanksgiving-card");
const ratingContainer = document.querySelector(".rating-card__score");
const ratings = document.querySelectorAll(".rating-card__score-item");
const finalRated = document.querySelector(".thanksgiving-card__score--num");

ratingContainer.addEventListener("click", function(event) {

    if(event.target.classList.contains("rating-card__score-item")){
        ratings.forEach((item) => {
            item.classList.remove("active");
        });

    if(user_rated === event.target.dataset.rating) {
        event.target.classList.remove("active");
        user_rated= 0;
    }

    else {
        event.target.classList.add("active");
        user_rated = event.target.dataset.rating;
     }
    }
})

function ratingHandler(){
  if(user_rated) {
    ratingCard.classList.add("rating-card__hide");
    thanksgivingCard.style.display = "flex";
    finalRated.textContent= user_rated;
  }
   else {
       alert("Please select a rating before submitting");
  }
}


btn.addEventListener("click", ratingHandler);