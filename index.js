;(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-active]"),
    closeModalBtn: document.querySelector("[data-modal-hidden]"),
    backdrop: document.querySelector("[data-modal]"),
    modal: document.querySelector(".modal"),
    hamMenu: document.querySelector(".ham-menu"),
    offScreenMenu: document.querySelector(".off-screen-menu"),
  }

  refs.openModalBtn.addEventListener("click", toggleModal)
  refs.closeModalBtn.addEventListener("click", toggleModal)

  refs.backdrop.addEventListener("click", handleBackdropClick)

  refs.hamMenu.addEventListener("click", () => {
    refs.hamMenu.classList.toggle("active")
    refs.offScreenMenu.classList.toggle("active")
  })

  function toggleModal() {
    refs.backdrop.classList.toggle("active")
  }

  function handleBackdropClick(e) {
    if (!refs.modal.contains(e.target)) {
      toggleModal()
    }
  }
})()
