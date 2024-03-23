export class HandleOrdersSectionClickEvent {
  constructor() {}

  handler() {
    const ordersItem = document.querySelectorAll(".orders-item");

    ordersItem.forEach((data) => {
      data.addEventListener("click", () => {
        let address = data.querySelector(
          ".orders-item-address > span"
        ).innerHTML;
        let delivery = data.querySelector(
          ".orders-item-delivery > span"
        ).innerHTML;
        let price = data.querySelector(".orders-item-price > span").innerHTML;

        let modalContent = document.querySelector(".modal > .orders-item");
        modalContent.querySelector(".orders-item-address > span").innerHTML =
          address;
        modalContent.querySelector(".orders-item-delivery > span").innerHTML =
          delivery;
        modalContent.querySelector(".orders-item-price > span").innerHTML =
          price;

        document.querySelector(".modal").style.display = "flex";
      });
    });
  }
}
