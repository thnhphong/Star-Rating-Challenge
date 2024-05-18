let star = document.querySelectorAll('input')
let showValue = document.querySelector('.thankyou')

for(let i=0; i < star.length; i++){
  star[i].addEventListener('click', () => {
    let rating = star[i].value;
    
    switch (rating) {
    case '0.5':
         showValue.innerHTML = `<div>
            <p class="default">${rating} stars 😡</p>
            <p class="thankyou-text">I'm sorry to hear that you hate it! Your feedback is valuable, and we'll strive to make your experience better.</p>
        </div>`;
        break;
    case '1':
        showValue.innerHTML = `<div>
            <p class="default">${rating} stars 😞</p>
            <p class="thankyou-text">It's disappointing to hear you don't like it. We're here to listen and improve.</p>
        </div>`;
        break;
    case '1.5':
        showValue.innerHTML = `<div>
            <p class="default">${rating} stars 😕</p>
            <p class="thankyou-text">We appreciate your honesty, even if it's not a glowing review. Your feedback helps us understand your needs better.</p>
        </div>`;
        break;
    case '2':
        showValue.innerHTML = `<div>
            <p class="default">${rating} stars 🙂</p>
            <p class="thankyou-text">Not bad! We're glad you're here. Let us know how we can make your experience even better.</p>
        </div>`;
        
        break;
    case '2.5':
        showValue.innerHTML = `<div>
            <p class="default">${rating} stars 😉</p>
            <p class="thankyou-text">Thanks for the feedback! We're always looking for ways to improve, so your suggestions are appreciated.</p>
        </div>`;
        break;
 case '3':
    showValue.innerHTML = `<div>
        <p class="default">${rating} stars 😗</p>
        <p class="thankyou-text">Great! We're thrilled to hear you're enjoying our platform. Thank you for your positive feedback!</p>
    </div>`;
    break;
  case '3.5':
    showValue.innerHTML = `<div>
        <p class="default">${rating} stars 😚</p>
        <p class="thankyou-text">Wonderful! Your satisfaction is our priority. Let us know if there's anything more we can do for you.</p>
    </div>`;
    break;
  case '4':
    showValue.innerHTML = `<div>
        <p class="default">${rating} stars 😘</p>
        <p class="thankyou-text">Excellent! We're glad you're enjoying our platform. Your feedback helps us continue to improve.</p>
    </div>`;
    break;

    case '4.5':
        showValue.innerHTML = `<div>
            <p class="default">${rating} stars 😍</p>
            <p class="thankyou-text">Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform</p>
        </div>`;
        break;
    case '5': 
      showValue.innerHTML = `<div>
            <p class="default">${rating} stars 🥰</p>
            <p class="thankyou-text">Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform</p>
        </div>`;
        break;
    }
  });
}
function fadeOut(){

}