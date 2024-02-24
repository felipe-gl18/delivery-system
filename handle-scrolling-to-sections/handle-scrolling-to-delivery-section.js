export class HandleScrollingToDeliverySection {
  constructor() {}

  handler() {
    const deliveryRelationNav = document.querySelector(
      ".delivery-relation-nav"
    );
    const deliveryRelation = document.querySelector(".delivery-relation");

    deliveryRelationNav.addEventListener("click", () => {
      deliveryRelation.scrollIntoView({ behavior: "smooth" });
    });
  }
}
