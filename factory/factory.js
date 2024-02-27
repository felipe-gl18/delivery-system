import { HandleOrderDetailsModal } from "../handle-modals/handle-order-details-modal.js";
import { HandleDeliveryDetailsModal } from "../handle-modals/handle-delivery-details-modal.js";
import { HandleAddOrderModal } from "../handle-modals/handle-add-order-modal.js";
import { HandleAddDeliveryModal } from "../handle-modals/handle-add-delivery-modal.js";
import { HandleScrollingToOrderSection } from "../handle-scrolling-to-sections/handle-scrolling-to-orders-section.js";
import { HandleScrollingToDeliverySection } from "../handle-scrolling-to-sections/handle-scrolling-to-delivery-section.js";
import { HandleCloseNavbarAction } from "../handle-navbar-actions/handle-close-navbar-action.js";
import { HandleOpenNavbarAction } from "../handle-navbar-actions/handle-open-navbar-action.js";
import { HandleDeliverySectionClickEvent } from "../handle-section-items-click-events/handleDeliverySectionClickEvent.js";
import { HandleOrdersSectionClickEvent } from "../handle-section-items-click-events/handleOrdersSectionClickEvent.js";
import { HandleChartCreation } from "../handle-chart-creation/handle-chart-creation.js";
import { HandleOrderCreation } from "../handle-order-creation/handleOrderCreation.js";

export class Factory {
  constructor() {}

  init() {
    const handleOrderCreation = new HandleOrderCreation();
    handleOrderCreation.listenToOrderFormSubmit();

    const handleOrderDetailsModal = new HandleOrderDetailsModal();
    handleOrderDetailsModal.handler();

    const handleDeliveryModal = new HandleDeliveryDetailsModal();
    handleDeliveryModal.handler();

    const handleAddOrderModal = new HandleAddOrderModal();
    handleAddOrderModal.handler();

    const handleAddDeliveryModal = new HandleAddDeliveryModal();
    handleAddDeliveryModal.handler();

    const handleScrollingToOrdersSection = new HandleScrollingToOrderSection();
    handleScrollingToOrdersSection.handler();

    const handleScrollingToDeliverySection =
      new HandleScrollingToDeliverySection();
    handleScrollingToDeliverySection.handler();

    const handleOpenNavbarAction = new HandleOpenNavbarAction();
    handleOpenNavbarAction.handler();

    const handleCloseNavbarAction = new HandleCloseNavbarAction();
    handleCloseNavbarAction.handler();

    const handleDeliverySectionClickEvent =
      new HandleDeliverySectionClickEvent();
    handleDeliverySectionClickEvent.handler();

    const handleOrdersSectionClickEvent = new HandleOrdersSectionClickEvent();
    handleOrdersSectionClickEvent.handler();

    const handleChartCreation = new HandleChartCreation();
    handleChartCreation.handler();
  }
}
