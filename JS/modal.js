(() => {
  const refs = {
    openFormBtn: document.querySelector("[data-open-form]"),
    closeFormBtn: document.querySelector("[data-close-form]"),
    backdrop: document.querySelector("[data-backdrop]"),
  };

  refs.openFormBtn.addEventListener("click", toggleForm);
  refs.closeFormBtn.addEventListener("click", toggleForm);

  refs.backdrop.addEventListener("click", logBackdropClick);

  function toggleForm() {
    refs.backdrop.classList.toggle("is-hidden");
  }

  function logBackdropClick() {
    console.log("Это клик в бекдроп");
  }
})();
