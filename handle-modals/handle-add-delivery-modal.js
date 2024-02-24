export class HandleAddDeliveryModal {
  constructor() {}

  handler() {
    const addDeliveryModal = document.querySelector(".add-delivery-modal");
    const openAddDeliveryModal = document.querySelector(
      ".delivery-relation > div > button"
    );
    const closeAddDeliveryModal = document.querySelector(
      ".add-delivery-modal-close-anchor"
    );

    openAddDeliveryModal.addEventListener("click", () => {
      addDeliveryModal.style.display = "flex";
    });

    closeAddDeliveryModal.addEventListener("click", () => {
      addDeliveryModal.style.display = "none";
    });
  }
}
