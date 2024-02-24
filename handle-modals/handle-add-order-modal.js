export class HandleAddOrderModal {
  constructor() {}

  handler() {
    const addOrderModal = document.querySelector(".add-order-modal");
    const openAddOrderModal = document.querySelector(
      ".orders-relation > div > button"
    );
    const closeAddOrderModal = document.querySelector(
      ".add-order-modal-close-anchor"
    );

    openAddOrderModal.addEventListener("click", () => {
      addOrderModal.style.display = "flex";
    });

    closeAddOrderModal.addEventListener("click", () => {
      addOrderModal.style.display = "none";
    });
  }
}
