const form = document.getElementsByClassName("box-form")[0];
const submit = document.getElementsByClassName("box-form__submit")[0];
const email = document.getElementsByClassName("box-form__email")[0];
const icon = document.getElementsByClassName("box-form__icon")[0];
const error = document.getElementsByClassName("box-error__text")[0];

submit.addEventListener("click", function(e){
    e.preventDefault();
    
    if (email.checkValidity()){
        form.reset();
        form.classList.remove("box-form--change");
        submit.classList.remove("box-form__submit--change");
        error.style.display = "none";
        icon.style.display = "none";
    }else {
        form.classList.add("box-form--change");
        submit.classList.add("box-form__submit--change");
        icon.style.display = "flex";
        error.style.display = "block";
        error.innerHTML = "Please provide a valid email";
    }
});

