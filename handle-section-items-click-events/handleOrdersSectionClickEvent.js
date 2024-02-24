export class HandleOrdersSectionClickEvent {
  constructor() {}

  handler() {
    const ordersItem = document.querySelectorAll(".orders-item");

    ordersItem[0].addEventListener("click", () => {
      let address = ordersItem[0].querySelector(
        ".orders-item-address > span"
      ).innerHTML;
      let delivery = ordersItem[0].querySelector(
        ".orders-item-delivery > span"
      ).innerHTML;
      let price = ordersItem[0].querySelector(
        ".orders-item-price > span"
      ).innerHTML;

      let modalContent = document.querySelector(".modal > .orders-item");
      modalContent.querySelector(".orders-item-address > span").innerHTML =
        address;
      modalContent.querySelector(".orders-item-delivery > span").innerHTML =
        delivery;
      modalContent.querySelector(".orders-item-price > span").innerHTML = price;

      document.querySelector(".modal").style.display = "flex";
    });

    ordersItem[1].addEventListener("click", () => {
      let address = ordersItem[1].querySelector(
        ".orders-item-address > span"
      ).innerHTML;
      let delivery = ordersItem[1].querySelector(
        ".orders-item-delivery > span"
      ).innerHTML;
      let price = ordersItem[1].querySelector(
        ".orders-item-price > span"
      ).innerHTML;

      let modalContent = document.querySelector(".modal > .orders-item");
      modalContent.querySelector(".orders-item-address > span").innerHTML =
        address;
      modalContent.querySelector(".orders-item-delivery > span").innerHTML =
        delivery;
      modalContent.querySelector(".orders-item-price > span").innerHTML = price;

      document.querySelector(".modal").style.display = "flex";
    });

    ordersItem[2].addEventListener("click", () => {
      let address = ordersItem[2].querySelector(
        ".orders-item-address > span"
      ).innerHTML;
      let delivery = ordersItem[2].querySelector(
        ".orders-item-delivery > span"
      ).innerHTML;
      let price = ordersItem[2].querySelector(
        ".orders-item-price > span"
      ).innerHTML;

      let modalContent = document.querySelector(".modal > .orders-item");
      modalContent.querySelector(".orders-item-address > span").innerHTML =
        address;
      modalContent.querySelector(".orders-item-delivery > span").innerHTML =
        delivery;
      modalContent.querySelector(".orders-item-price > span").innerHTML = price;

      document.querySelector(".modal").style.display = "flex";
    });

    ordersItem[3].addEventListener("click", () => {
      let address = ordersItem[3].querySelector(
        ".orders-item-address > span"
      ).innerHTML;
      let delivery = ordersItem[3].querySelector(
        ".orders-item-delivery > span"
      ).innerHTML;
      let price = ordersItem[3].querySelector(
        ".orders-item-price > span"
      ).innerHTML;

      let modalContent = document.querySelector(".modal > .orders-item");

      console.log(modalContent);
      modalContent.querySelector(".orders-item-address > span").innerHTML =
        address;
      modalContent.querySelector(".orders-item-delivery > span").innerHTML =
        delivery;
      modalContent.querySelector(".orders-item-price > span").innerHTML = price;

      document.querySelector(".modal").style.display = "flex";
    });
  }
}
