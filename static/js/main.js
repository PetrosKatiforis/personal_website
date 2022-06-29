const accordionHeaders = document.getElementsByClassName("accordion__header")

Array.from(accordionHeaders).forEach(element => {
  element.addEventListener("click", () => {
    // Toggle the accordion's "open" class name
    
    element.parentElement.classList.toggle("open")
  })
})

// Menu bar handling
const menu = document.getElementById("burger-menu")

menu.addEventListener("click", () => {
  // Toggle header's open state
  menu.parentElement.classList.toggle("open")
})
