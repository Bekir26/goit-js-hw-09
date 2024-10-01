const feedbackForm = document.querySelector('.feedback-form');
let feedback = {email : '', message : ''}
const emailDOM = document.querySelector('input[name="email"]');
const messageDOM = document.querySelector('textarea[name="message"]')


function greetings() {    
    let parsingFeedback = JSON.parse(localStorage.getItem("feedback-form-state")) ? JSON.parse(localStorage.getItem("feedback-form-state")): {email : '', message : ''}
    feedback.email = parsingFeedback.email;
    feedback.message = parsingFeedback.message;
    emailDOM.value = feedback.email;
    messageDOM.value = feedback.message;
}

greetings();

feedbackForm.addEventListener('submit', e =>{
    e.preventDefault();
    let email = emailDOM.value.trim();
    let message = messageDOM.value.trim();
    if(email !== '' && message !== ''){
        localStorage.removeItem("feedback-form-state");
        e.currentTarget.reset();
        alert("Form başarıyla gönderildi")
    }
    else{
        alert("Tüm alanlar doldurulmalıdır.")
    }
})
emailDOM.addEventListener('input', e => {
    feedback["email"] = e.currentTarget.value; 
    setLocalStorage("feedback-form-state",feedback)
   
})
messageDOM.addEventListener('input', e => {
    feedback["message"] = e.currentTarget.value; 
    setLocalStorage("feedback-form-state",feedback)
})

function setLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}