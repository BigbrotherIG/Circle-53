
    const menuLogo = document.querySelector(".menulogo")
    const navBar = document.querySelector(".navlinks")

        formId = document.querySelector("#form-id")
        nameId = document.querySelector("#name-id")
        telephoneId = document.querySelector("#telephone-id")
        submitBtn = document.querySelector("#submit-btn")
        inputToggle = document.querySelector(".successInput")
        msg = document.querySelector(".msg")
    
        const logoMenu = document.querySelector(".logomenu")
        logoMenu.addEventListener("click", openMenu)
        const logoExit = document.querySelector(".logoexit")
        logoExit.addEventListener("click", closedMenu)
        // submitBtn.addEventListener("click", displayError)

    function openMenu () {
        logoMenu.classList.toggle("active")
        logoExit.classList.toggle("active")
        navBar.classList.toggle("active")
    }

<<<<<<< HEAD
    function closedMenu() {
        logoMenu.classList.toggle("active")
        logoExit.classList.toggle("active")
        navBar.classList.toggle("active")
    }

=======
>>>>>>> e2cbcc4ff63d3a7a1225203ee01482a0b23fc006
    // document.querySelectorAll(".links").forEach(n => n.addEventListener("click", () => {
    //     navBar.classList.remove("active")
    //     navLinks.classList.remove("active")
    // }))
    
    document.querySelectorAll(".links").forEach(function closeLinks (e) {
<<<<<<< HEAD
        e.addEventListener("click", closed)    
=======
        e.addEventListener("click", closed)
>>>>>>> e2cbcc4ff63d3a7a1225203ee01482a0b23fc006
        function closed () {
            console.log("click me")
            openMenu()
            navBar.classList.remove("active")
            }
    })

    formId.addEventListener("submit", (e) => {
        e.preventDefault()
        
        if(nameId.value === "" || telephoneId.value === "") {            
            msg.className = "error"
            msg.innerText = "Please fill your details"
                        
            displayError()                      
        }
<<<<<<< HEAD
        else {
            
            let para =  document.createElement("input")
            let paraAppend = document.createTextNode(`${this.nameId.value} your network provider is ${telephoneId.value}.`)
            
            // let changeInput = inputToggle
            // let changeInput = changeInput.setAttribute("type", para )
            // changeInput = inputToggle.getAttribute("value", para)
            // inputToggle.setAttribute("type", para)
            // inputToggle.setAttribute("value", para)

            inputToggle.value  = `${nameId.value} your network provider is ${telephoneId.value}.`
            console.log(inputToggle.value)
            
            msg.className = "success1"
            msg.innerText = "Successful"
            setTimeout(()=> {msg.remove()}, 3500)
            
            displayError()
            // Clear fields
            nameId.value = ""
            telephoneId.value = ""
        }
        
        telephoneId.addEventListener("input", () => {
            telephoneId.setCustomValidity("");
            telephoneId.checkValidity();
        })
        
        telephoneId.addEventListener("invalid", () => {
            if(telephoneId === "") {
                telephoneId.setCustomValidity("Enter your phone number!")
            }
            else {
                telephoneId.setCustomValidity("Enter phone number in this format: 234-456-7890");
            }

        })
    
    })

    function displayError () {
        // setTimeout(()=> msg.remove(), 3500)
        console.log("click mmm")

        if(nameId.value === "" || telephoneId.value === "") {
            setTimeout(() => {msg.remove()}, 3500);
        }
        else {
            setTimeout(() => {msg.remove()}, 3500);
            
        }
    }
    
=======
    })
>>>>>>> e2cbcc4ff63d3a7a1225203ee01482a0b23fc006
