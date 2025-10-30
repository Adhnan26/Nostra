// Offer Section
var offerbar = document.querySelector(".offer-bar")
var offerclose = document.getElementById("offer-close").addEventListener("click", () => {
    offerbar.style.display = "none"
})

// Side Navbar
var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-50%"
})




// Textarea limit
const form = document.getElementById("form")
const message = document.getElementById("message")
const charcount = document.getElementById("charCount")

message.addEventListener("input", () => {
    if (message.value.length > 300) {
        message.value = message.value.substring(0, 300);
    }

    const length = message.value.length; 
    charcount.textContent = `${length} / 300 characters`;
});


// Regex Error Message
const submit = document.getElementById("submit")

submit.addEventListener("click", (event) => {
    event.preventDefault()

    let validation = true

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const Regexname = /^[a-zA-Z ]+$/
    const Regexemail = /^[a-zA-Z0-9]+@gmail\.com$/

    const nameError = document.querySelector(".nameError")
    const emailError = document.querySelector(".emailError")



    if (!Regexname.test(name)) {
        nameError.style.display = "inline"
        validation = false
    }

    else {
        nameError.style.display = "none"
    }

    if (!Regexemail.test(email)) {
        emailError.style.display = "inline"
        validation = false
    }

    else {
        emailError.style.display = "none"
    }

    if (message.value.trim().length == 0) {
        alert("Message cannot be empty");
        validation = false;
    }

    if (validation == true) {
        alert("Submitted Successfully")
        form.reset();
        charcount.textContent = "0 / 300 characters"
        nameError.style.display = "none"
        emailError.style.display = "none"
    }

})












