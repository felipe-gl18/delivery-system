import "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js";

function handleOpenMobileNavigation() {
  const openMobileNavigation = document.querySelector(
    ".navigation-menu-anchor-open"
  );
  const closeMobileNavigation = document.querySelector(
    ".navigation-menu-anchor-close"
  );
  const navigation = document.querySelector(".navigation-items");

  openMobileNavigation.addEventListener("click", () => {
    navigation.style.display = "flex";
    openMobileNavigation.style.display = "none";
    closeMobileNavigation.style.display = "flex";
  });
}

function handleCloseMobileNavigation() {
  const openMobileNavigation = document.querySelector(
    ".navigation-menu-anchor-open"
  );
  const closeMobileNavigation = document.querySelector(
    ".navigation-menu-anchor-close"
  );
  const navigation = document.querySelector(".navigation-items");

  closeMobileNavigation.addEventListener("click", () => {
    navigation.style.display = "none";
    openMobileNavigation.style.display = "flex";
    closeMobileNavigation.style.display = "none";
  });
}

function handleScrollingIntoOrdersSection() {
  const ordersRelation = document.querySelector(".orders-relation");
  const ordersRelationNav = document.querySelector(".orders-relation-nav");

  ordersRelationNav.addEventListener("click", () => {
    ordersRelation.scrollIntoView({ behavior: "smooth" });
  });
}

function handleScrollingIntoDeliverySection() {
  const deliveryRelationNav = document.querySelector(".delivery-relation-nav");
  const deliveryRelation = document.querySelector(".delivery-relation");

  deliveryRelationNav.addEventListener("click", () => {
    deliveryRelation.scrollIntoView({ behavior: "smooth" });
  });
}

function handleOpenOrdersModal() {
  const modal = document.querySelector(".modal");
  const openModal = document.querySelector(".modal-close-anchor");

  openModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function handleOpenDeliveryModal() {
  const deliveryModal = document.querySelector(".modal-delivery");
  const openDeliveryModal = document.querySelector(
    ".modal-delivery-close-anchor"
  );

  openDeliveryModal.addEventListener("click", () => {
    deliveryModal.style.display = "none";
  });
}

function handleAddOrderModal() {
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

function handleAddDeliveryModal() {
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

handleOpenMobileNavigation();
handleCloseMobileNavigation();
handleScrollingIntoOrdersSection();
handleScrollingIntoDeliverySection();
handleOpenOrdersModal();
handleOpenDeliveryModal();
handleAddOrderModal();
handleAddDeliveryModal();

const ordersItem = document.querySelectorAll(".orders-item");
const deliveryItem = document.querySelectorAll(".delivery-item");

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
  modalContent.querySelector(".orders-item-address > span").innerHTML = address;
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
  modalContent.querySelector(".orders-item-address > span").innerHTML = address;
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
  modalContent.querySelector(".orders-item-address > span").innerHTML = address;
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
  modalContent.querySelector(".orders-item-address > span").innerHTML = address;
  modalContent.querySelector(".orders-item-delivery > span").innerHTML =
    delivery;
  modalContent.querySelector(".orders-item-price > span").innerHTML = price;

  document.querySelector(".modal").style.display = "flex";
});

deliveryItem[0].addEventListener("click", () => {
  let address = deliveryItem[0].querySelector(
    ".delivery-item-address > span"
  ).innerHTML;
  let delivery = deliveryItem[0].querySelector(
    ".delivery-item-delivery > span"
  ).innerHTML;
  let price = deliveryItem[0].querySelector(
    ".delivery-item-price > span"
  ).innerHTML;

  let modalContent = document.querySelector(".modal-delivery > .delivery-item");
  modalContent.querySelector(".delivery-item-address > span").innerHTML =
    address;
  modalContent.querySelector(".delivery-item-delivery > span").innerHTML =
    delivery;
  modalContent.querySelector(".delivery-item-price > span").innerHTML = price;

  document.querySelector(".modal-delivery").style.display = "flex";
});

deliveryItem[1].addEventListener("click", () => {
  let address = deliveryItem[1].querySelector(
    ".delivery-item-address > span"
  ).innerHTML;
  let delivery = deliveryItem[1].querySelector(
    ".delivery-item-delivery > span"
  ).innerHTML;
  let price = deliveryItem[1].querySelector(
    ".delivery-item-price > span"
  ).innerHTML;

  let modalContent = document.querySelector(".modal-delivery > .delivery-item");
  modalContent.querySelector(".delivery-item-address > span").innerHTML =
    address;
  modalContent.querySelector(".delivery-item-delivery > span").innerHTML =
    delivery;
  modalContent.querySelector(".delivery-item-price > span").innerHTML = price;

  document.querySelector(".modal-delivery").style.display = "flex";
});

deliveryItem[2].addEventListener("click", () => {
  let address = deliveryItem[2].querySelector(
    ".delivery-item-address > span"
  ).innerHTML;
  let delivery = deliveryItem[2].querySelector(
    ".delivery-item-delivery > span"
  ).innerHTML;
  let price = deliveryItem[2].querySelector(
    ".delivery-item-price > span"
  ).innerHTML;

  let modalContent = document.querySelector(".modal-delivery > .delivery-item");
  modalContent.querySelector(".delivery-item-address > span").innerHTML =
    address;
  modalContent.querySelector(".delivery-item-delivery > span").innerHTML =
    delivery;
  modalContent.querySelector(".delivery-item-price > span").innerHTML = price;

  document.querySelector(".modal-delivery").style.display = "flex";
});

deliveryItem[3].addEventListener("click", () => {
  let address = deliveryItem[3].querySelector(
    ".delivery-item-address > span"
  ).innerHTML;
  let delivery = deliveryItem[3].querySelector(
    ".delivery-item-delivery > span"
  ).innerHTML;
  let price = deliveryItem[3].querySelector(
    ".delivery-item-price > span"
  ).innerHTML;

  let modalContent = document.querySelector(".modal-delivery > .delivery-item");
  modalContent.querySelector(".delivery-item-address > span").innerHTML =
    address;
  modalContent.querySelector(".delivery-item-delivery > span").innerHTML =
    delivery;
  modalContent.querySelector(".delivery-item-price > span").innerHTML = price;

  document.querySelector(".modal-delivery").style.display = "flex";
});

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    datasets: [
      {
        label: "Quantidade de entregas",
        data: [
          8, 42, 18, 14, 29, 7, 36, 50, 11, 47, 33, 5, 38, 15, 32, 19, 43, 2,
          45, 24, 31, 39, 10, 25, 70, 20, 49, 4, 22, 48, 13,
        ],
        borderWidth: 0,
        backgroundColor: "rgba(50, 154, 116, 0.6)",
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "ENTREGAS",
          font: {
            weight: "bolder", // Peso da fonte (por exemplo, 'bold', 'normal', etc.)
            size: 12, // Tamanho da fonte em pixels
          },
          padding: {
            bottom: 20, // Distância do texto para o topo do eixo
          },
        },
        grid: {
          display: false,
        },

        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: "DIAS",
          font: {
            weight: "bolder", // Peso da fonte (por exemplo, 'bold', 'normal', etc.)
            size: 12, // Tamanho da fonte em pixels
          },
          padding: {
            top: 20, // Distância do texto para o topo do eixo
          },
        },
        grid: {
          display: false, // Configuração para desativar as linhas de grade no eixo X
        },
      },
    },
  },
});
