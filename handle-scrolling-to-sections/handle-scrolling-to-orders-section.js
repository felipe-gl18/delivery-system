export class HandleScrollingToOrderSection {
  constructor() {}

  handler() {
    const ordersRelation = document.querySelector(".orders-relation");
    const ordersRelationNav = document.querySelector(".orders-relation-nav");

    ordersRelationNav.addEventListener("click", () => {
      ordersRelation.scrollIntoView({ behavior: "smooth" });
    });
  }
}
