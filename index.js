let menu = document.querySelector('#menu-icon')
let navbar= document.querySelector('.navbar')
menu.onclick = () => {
  menu.classList.toggle('fa-xmark')
  navbar.classList.toggle('nav-active')
} 

let answers = document.querySelectorAll(".accordion"); 
answers.forEach((event) => { 
  event.addEventListener("click", () => { 
    if (event.classList.contains("active")) { 
      event.classList.remove("active")
    } else { 
      event.classList.add("active")
    } 
  })
})