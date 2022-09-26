
    const menuLogo = document.querySelector(".menulogo")
    const navBar = document.querySelector(".navlinks")
    
    menuLogo.addEventListener("click", openMenu)

    function openMenu () {
        console.log("clicked")

        // menuLogo.classList.toggle("active")
        navBar.classList.toggle("active")
    }


    // document.querySelectorAll(".links").forEach(n => n.addEventListener("click", () => {
    //     navBar.classList.remove("active")
    //     navLinks.classList.remove("active")
    // }))

    document.querySelectorAll(".links").forEach(function closeLinks (e) {
        e.addEventListener("click", closed)
        // () => {
        //     navBar.classList.remove("active")
        // }) 

        function closed () {
            console.log("click me")
            navBar.classList.remove("active")
        }
    })