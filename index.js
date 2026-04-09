;(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-active]"),
    closeModalBtn: document.querySelector("[data-modal-hidden]"),
    backdrop: document.querySelector("[data-modal]"),
    modal: document.querySelector(".modal"),
  }

  refs.openModalBtn.addEventListener("click", toggleModal)
  refs.closeModalBtn.addEventListener("click", toggleModal)

  refs.backdrop.addEventListener("click", handleBackdropClick)

  function toggleModal() {
    refs.backdrop.classList.toggle("active")
  }

  function handleBackdropClick(e) {
    if (!refs.modal.contains(e.target)) {
      toggleModal()
    }
  }
})()
