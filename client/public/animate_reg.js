const search = document.getElementById("test")
const icon = document.getElementsByClassName("icon")
const close = document.getElementsByClassName("close")
const form = document.getElementsByClassName("form_registration")

console.log(close)

search.addEventListener("click", function () {
	console.log("click")
    let w = search.offsetWidth
    let h = search.offsetHeight
    search.classList.remove("search_animation")
    // search.style.width = w + "px"
    // search.style.height = h + "px"
    console.log(w, h, typeof w)
    setTimeout(() => {
			search.classList.add("search_click")
			icon[0].classList.remove("icon_shown")
			icon[0].classList.add("icon_hidden")
			close[0].classList.remove("close_hidden")
			close[0].classList.add("close_shown")
		}, 500)

    setTimeout(()=>{
        form[0].classList.add("form_registration_shown")
        form[0].classList.remove("form_registration_hidden")
    }, 1500)

})

close[0].addEventListener("click", function () {
	console.log("click close")
    form[0].classList.add("form_registration_hidden")
    search.classList.remove("search_click")
    setTimeout(() => {
        icon[0].classList.remove("icon_hidden")
        icon[0].classList.add("icon_shown")
        close[0].classList.remove("close_shown")
        close[0].classList.add("close_hidden")
    }, 500)

    setTimeout(() => {
        search.classList.add("search_animation")
    }, 1500)
    
    
})
