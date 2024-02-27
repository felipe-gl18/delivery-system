export class HandleOrderCreation {
  constructor() {
    this.orderForm = document.querySelector(".add-order-modal>div>button");
  }

  generateOrderImage() {
    const orderImage = document.createElement("img");
    orderImage.src = "./assets/food.png";

    return orderImage;
  }

  generateOrderAddress(value) {
    const address = document.createElement("div");
    const addressLabel = document.createElement("p");
    const addressValue = document.createElement("span");

    address.className = "orders-item-address";
    addressLabel.innerText = "ENDEREÇO";
    addressValue.innerText = `${value}`;

    address.appendChild(addressLabel);
    address.appendChild(addressValue);

    return address;
  }

  generateOrderDelivery(value) {
    const delivery = document.createElement("div");
    const deliveryLabel = document.createElement("p");
    const deliveryValue = document.createElement("span");

    delivery.className = "orders-item-delivery";
    deliveryLabel.innerText = "ENTREGADOR";
    deliveryValue.innerText = `${value}`;

    delivery.appendChild(deliveryLabel);
    delivery.appendChild(deliveryValue);

    return delivery;
  }

  generateValue(value) {
    const price = document.createElement("div");
    const priceLabel = document.createElement("p");
    const priceValue = document.createElement("span");

    price.className = "orders-item-price";
    priceLabel.innerText = "VALOR";
    priceValue.innerText = `R$ ${value}`;

    price.appendChild(priceLabel);
    price.appendChild(priceValue);

    return price;
  }

  create(props) {
    const orders = document.querySelector(".orders");

    const newOrder = document.createElement("div");

    const orderImage = this.generateOrderImage();
    const address = this.generateOrderAddress(props.address);
    const delivery = this.generateOrderDelivery(props.delivery);
    const price = this.generateValue(props.price);

    newOrder.className = "orders-item";

    newOrder.appendChild(orderImage);
    newOrder.appendChild(address);
    newOrder.appendChild(delivery);
    newOrder.appendChild(price);

    orders.appendChild(newOrder);
  }

  listenToOrderFormSubmit() {
    this.orderForm.addEventListener("click", () => {
      this.create({
        address: document.querySelector(".order-address-value").value,
        delivery: document.querySelector(".order-delivery-value").value,
        price: document.querySelector(".order-price-value").value,
      });
    });
  }
}
