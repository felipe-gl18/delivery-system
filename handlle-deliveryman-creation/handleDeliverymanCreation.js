import { HandleAddDeliveryModal } from "../handle-modals/handle-add-delivery-modal.js";
import { HandleScrollingToDeliverySection } from "../handle-scrolling-to-sections/handle-scrolling-to-delivery-section.js";

export class HandleDeliveryManCreation {
  constructor() {
    this.deliverymanForm = document.querySelector(
      ".add-delivery-modal>div>button"
    );
  }

  generateDeliverymanImage() {
    const deliverymanImage = document.querySelector("img");
    deliverymanImage.src = "./assets/user.png";

    return deliverymanImage;
  }

  generateDeliverymanName(value) {
    const name = document.createElement("div");
    const nameLabel = document.createElement("p");
    const nameValue = document.createElement("span");

    name.className = "delivery-item-name";
    nameLabel.innerText = "ENTREGADOR";
    nameValue.innerText = `${value}`;

    name.appendChild(nameLabel);
    name.appendChild(nameValue);

    return name;
  }

  generateDeliverymanDeliveries(value) {
    const deliveries = document.createElement("div");
    const deliveriesLabel = document.createElement("p");
    const deliveriesValue = document.querySelector("span");

    deliveries.className = "delivery-item-deliveries";
    deliveriesLabel.innerText = "TOTAL DE ENTREGAS";
    deliveriesValue.innerText = `${value}`;

    deliveries.appendChild(deliveriesLabel);
    deliveries.appendChild(deliveriesValue);

    return deliveries;
  }

  generateDeliverymanIncome(value) {
    const income = document.createElement("div");
    const incomeLabel = document.createElement("p");
    const incomeValue = document.createElement("span");

    income.className = "delivery-item-price";
    incomeLabel.innerText = "TOTAL PARA RECEBER";
    incomeValue.innerText = `${value}`;

    return income;
  }

  create(props) {
    const deliveryMans = document.querySelector(".delivery");

    const newDeliveryman = document.createElement("div");

    const deliverymanImage = this.generateDeliverymanImage();
    const deliverymanName = this.generateDeliverymanName(props.name);
    const deliverymanDeliveries = this.generateDeliverymanDeliveries(
      props.deliveries
    );
    const deliverymanIncome = this.generateDeliverymanIncome(props.income);

    newDeliveryman.className = "delivery-item";

    newDeliveryman.appendChild(deliverymanImage);
    newDeliveryman.appendChild(deliverymanName);
    newDeliveryman.appendChild(deliverymanDeliveries);
    newDeliveryman.appendChild(deliverymanIncome);

    deliveryMans.appendChild(newDeliveryman);
  }

  isValidated(values) {
    const { name, deliveries, income } = values;
    if (name.length != 5) {
      return true;
    } else {
      return false;
    }
  }

  listenToDeliverymanSubmit() {
    this.deliverymanForm.addEventListener("click", () => {
      const name = document.querySelector(".delivery-name-value").value;

      const isValidated = this.isValidated({
        name,
        deliveries: null,
        income: null,
      });

      const handleAddDeliveryModal = new HandleAddDeliveryModal();
      const handleScrollingToDeliverySection =
        new HandleScrollingToDeliverySection();

      if (isValidated) {
        this.create({ name, deliveries: null, income: null });
        handleAddDeliveryModal.close();
        handleScrollingToDeliverySection.scroll();
      } else {
        alert("Preencha os campos corretamente!");
      }
    });
  }
}
