export class HandleAddDeliveryModal {
  constructor() {
    this.addDeliveryModal = document.querySelector(".add-delivery-modal");
    this.openAddDeliveryModal = document.querySelector(
      ".delivery-relation > div > button"
    );
    this.closeAddDeliveryModal = document.querySelector(
      ".add-delivery-modal-close-anchor"
    );
  }

  open() {
    this.addDeliveryModal.style.display = "flex";
  }

  close() {
    this.addDeliveryModal.style.display = "none";
  }

  handler() {
    this.openAddDeliveryModal.addEventListener("click", () => {
      this.open();
    });

    this.closeAddDeliveryModal.addEventListener("click", () => {
      this.close();
    });
  }
}
