const openDragen = document.querySelector("[data-open-dragen]")
const closeDragen = document.querySelector("[data-close-dragen]")
const showDragen = document.querySelector("[data-indholdDragen]")

openDragen.addEventListener("click", () => {
    showDragen.showModal()
})

closeDragen.addEventListener("click", () => {
    showDragen.close()
})