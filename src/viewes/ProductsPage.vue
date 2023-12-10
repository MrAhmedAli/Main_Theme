<template>
  <div class="container-fluid">
    <div class="d-block">
      <!-- Language toggle section -->
      <div class="language-toggle d-flex">
        <div class="inputs-location d-flex">
          <div class="input-wrapper">
            <!-- Input field -->
            <input
              type="text"
              id="input"
              class="inputs2 custom-input"
              placeholder="our menu"
              value=""
            />
            <span class="lang-transformer">En</span>
            <!-- Language toggle button -->
            <button class="lang-transformer-btn" @click="toggleLanguage">
              <img src="@/assets/images/lang.svg" />
            </button>
          </div>

          <!-- Circline image -->
          <div class="circline circline1-location">
            <img
              src="@/assets/images/circline.svg"
              alt=""
              class="circline-image"
            />
            <p class="text-style">Edit item list</p>
          </div>
        </div>
      </div>

      <!-- Cards section with horizontal scroll -->
      <div class="d-flex cards-scroll">
        <div class="d-flex arrow">
          <!-- Scroll buttons -->
          <button
            class="scroll-button left"
            @click="scrollUp"
            v-if="isScrollVisible"
          >
            <img
              :src="
                require(isScrollAtStart
                  ? '@/assets/images/scroll-arrow-dark.svg'
                  : '@/assets/images/scroll-arrow-light.svg')
              "
              alt="left-arrow"
              class="left-arrow"
              id="left-arrow-img"
            />
          </button>
          <button
            class="scroll-button right"
            @click="scrollDown"
            v-if="isScrollVisible"
          >
            <img
              :src="
                require(isScrollAtEnd
                  ? '@/assets/images/scroll-arrow-dark.svg'
                  : '@/assets/images/scroll-arrow-light.svg')
              "
              alt="right-arrow"
              class="right-arrow"
              id="right-arrow-img"
            />
          </button>
        </div>

        <!-- Card groups -->
        <ul
          class="cards"
          style="flex-direction: row-reverse"
          ref="cardsContainer"
        >
          <li
            class="card"
            v-for="(cardGroup, groupIndex) in cardGroups"
            :key="groupIndex"
          >
            <div class="d-flex">
              <div
                class="item me-3"
                v-for="(menu, cardIndex) in cardGroup"
                :key="cardIndex"
              >
                <div class="d-flex">
                  <div class="counter">
                    <!-- Counter -->
                    <p>
                      {{ groupIndex * cardGroups[0].length + cardIndex + 1 }}
                    </p>
                  </div>
                  <div class="product-image-container">
                    <!-- Product image -->
                    <img
                      :src="menu.product_image"
                      class="product-image"
                      alt=""
                    />
                  </div>
                </div>

                <div class="d-flex heart-location">
                  <!-- Heart icon and item title -->
                  <img src="@/assets/images/red-heart.svg" alt="" />
                  <p class="item-title">{{ menu.product_name }}</p>
                </div>
                <!-- Star rating -->
                <img
                  src="@/assets/images/star-set.svg"
                  class="stars-location"
                  alt=""
                />

                <!-- Item description -->
                <p class="item-description">{{ menu.product_description }}</p>

                <div class="item-line"></div>
                <div class="d-flex">
                  <!-- Item price and add to cart button -->
                  <p class="price-text">{{ menu.price }}</p>
                  <button class="add-button">إضافة للسلة</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Horizontal dashes image -->
      <img
        src="@/assets/images/Horizontal_dashes.svg"
        alt=""
        class="image-horizontal_dashes"
      />

      <div class="d-flex ms-4">
        <!-- Search icon -->
        <img
          src="@/assets/images/search-status.svg"
          alt=""
          class="search-icon"
        />
        <!-- Search input -->
        <input
          type="text"
          v-model="searchQuery"
          class="form-input"
          placeholder="Search the list of products"
        />
        <div class="circline circline2-location">
          <!-- Circline image -->
          <img
            src="@/assets/images/circline.svg"
            alt=""
            class="circline-image"
          />
          <p class="text-style">Products list</p>
        </div>
      </div>

      <div class="products-container">
        <!-- Products list -->
        <div
          class="products d-flex"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <div class="add-product-image-container">
            <!-- Product image -->
            <img
              class="add-product-image"
              :src="product.product_image"
              alt=""
            />
          </div>

          <div class="d-block">
            <!-- Product name -->
            <p class="product-text" style="">{{ product.product_name }}</p>
            <!-- Discounted price -->
            <p class="product-price2">{{ product.disscounted_price }}</p>
          </div>

          <!-- Original price -->
          <p class="product-price1">{{ product.price }}</p>

          <button class="add-button2">
            <!-- Add to cart or delete button based on product state -->
            <img
              v-if="!product.added"
              src="@/assets/images/add-square.svg"
              alt=""
              style=""
              @click="addProduct(product)"
            />
            <img
              v-else
              src="@/assets/images/trash.svg"
              alt=""
              style=""
              @click="deleteProduct(product)"
            />
          </button>
        </div>
      </div>

      <!-- Confirmation button -->
      <button class="confirm-button">confirmation</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      inputAr: "",
      inputEn: "",
      isScrollVisible: false,
      isScrollAtStart: false,
      isScrollAtEnd: true,
      products: [
        {
          id: 1,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },
        {
          id: 2,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },
        {
          id: 3,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },
        {
          id: 4,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },
        {
          id: 5,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },
        {
          id: 6,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },
        {
          id: 7,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },
        {
          id: 8,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },
        {
          id: 10,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },
        {
          id: 11,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },
        {
          id: 12,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },
        {
          id: 13,
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          added: false,
        },

      ],

      menu_card: [
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
      ],

      default_card: [
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
        {
          product_image: require("@/assets/images/salad.svg"),
          product_name: "بيتزا مع الخضار الطازج",
          price: "$4.25",
          disscounted_price: "80.00$",
          product_description:
            "هي إحدى الطريقتين الأكثر شيوعًا لتقديم البيتزا في المطبخ الإيطالي",
          rate: 5,
          replaced: false,
        },
      ],
    };
  },
  mounted() {
    // Update scroll status when the component is mounted
    this.updateScrollStatus();

      // Add event listeners for scroll, mutation, and resize
    this.$refs.cardsContainer.addEventListener(
      "scroll",
      this.updateScrollStatus
    );

    const observer = new MutationObserver(this.updateScrollStatus);
    observer.observe(this.$refs.cardsContainer, { childList: true });

    window.addEventListener("resize", this.updateScrollStatus);
  },
  beforeUnmount() {
    // Remove event listeners before the component is unmounted
    this.$refs.cardsContainer.removeEventListener(
      "scroll",
      this.updateScrollStatus
    );

    const observer = new MutationObserver(this.updateScrollStatus);
    observer.disconnect();

    window.removeEventListener("resize", this.updateScrollStatus);
  },
  computed: {
    filteredProducts() {
      // Filter products based on the search query
      if (this.searchQuery.trim() === "") {
        return this.products; // Return all products if searchQuery is empty
      }
      const query = this.searchQuery.toLowerCase();
      return this.products.filter((product) =>
        product.product_name.toLowerCase().includes(query)
      );
    },
    cardGroups() {
      const groupSize = 4; // Number of cards to display in each group
      const groups = [];

      // Divide the menu_card array into groups of four cards
      for (let i = 0; i < this.menu_card.length; i += groupSize) {
        groups.push(this.menu_card.slice(i, i + groupSize));
      }

      return groups;
    },

  },
  methods: {
    toggleLanguage(event) {
      //get access to html elements
      const parentDiv = event.currentTarget.closest("div");
      const langTransformer = parentDiv.querySelector(".lang-transformer");
      const input = parentDiv.querySelector("input");
      //get the language that's displayed now to the user
      const langCode = langTransformer.textContent;
      const inputId = input.id;
      //preparing the data property where the value will be stored
      const dataProp = `${inputId}${langCode}`;

      langTransformer.textContent =
        langTransformer.textContent === "En" ? "Ar" : "En";
      this[dataProp] = input.value;
      //store the value in the suitable data property
      input.value = this[`${inputId}${langCode === "En" ? "Ar" : "En"}`];

      // update the placeholder based on the selected language
      if (langTransformer.textContent === "En") {
        input.placeholder = "Our menu";
      } else {
        input.placeholder = "قائمتنا";
      }
    },
    addProduct(product) {
      // Find the index of the first row with replaced === false
      const firstFalseIndex = this.menu_card.findIndex(
        (item) => !item.replaced
      );
      // If the product is not added, add it
      product.added = true;
      if (firstFalseIndex !== -1) {
        // Replace the value with the product where replaced is false
        this.menu_card.splice(firstFalseIndex, 1, product);
        // Set replaced to true for the replaced product
        product.replaced = true;
      } else {
        // Add the product to the menu_card array with replaced set to true
        product.replaced = true;
        this.menu_card.push(product);
      }
    },
    deleteProduct(product) {
      this.menu_card.forEach((item, index) => {
        const menuCardLength = this.menu_card.length;
        if (item.id === product.id) {
          const indexValue = index;
          console.log("index found", indexValue);
          if (indexValue <= 7) {
            if (menuCardLength <= 8) {
              this.menu_card.splice(
                indexValue,
                1,
                this.default_card[indexValue]
              );
              console.log("index is less than 8");
            } else if (menuCardLength > 8) {
              this.menu_card.splice(indexValue, 1);
            }
          } else {
            this.menu_card.splice(indexValue, 1);
          }
        }
      });
      product.added = false;
    },
    updateScrollStatus() {
  // Get reference to the cards container element
  const cardsContainer = this.$refs.cardsContainer;

  // Get the current scroll position
  const scrollTop = cardsContainer.scrollTop;

  // Check if the scroll position is at the start of the container
  this.isScrollAtStart = scrollTop === 0;

  // Check if the scroll position is at the end of the container
  this.isScrollAtEnd =
    scrollTop >= cardsContainer.scrollHeight - cardsContainer.clientHeight;

  // Check if the scroll bar is visible (container height is smaller than the content height)
  this.isScrollVisible =
    cardsContainer.scrollHeight > cardsContainer.clientHeight;
},
scrollUp() {
  // Get reference to the cards container element
  const cardsContainer = this.$refs.cardsContainer;

  // Get the height of a single card
  const cardHeight = cardsContainer.querySelector(".card").clientHeight;

  // Get the current scroll position
  const scrollTop = cardsContainer.scrollTop;

  // Calculate the index of the target card based on the scroll position
  const targetCardIndex = Math.floor(scrollTop / cardHeight) - 1;

  // Calculate the scroll position of the target card
  const targetScrollTop = targetCardIndex * cardHeight;

  // Scroll to the target card with smooth behavior
  cardsContainer.scrollTo({
    top: targetScrollTop,
    behavior: "smooth",
  });

  // Update scroll flags
  this.isScrollAtStart = targetScrollTop === 0;
  this.isScrollAtEnd = false;
},
  scrollDown() {
  // Get reference to the cards container element
  const cardsContainer = this.$refs.cardsContainer;

  // Get the height of a single card
  const cardHeight = cardsContainer.querySelector(".card").clientHeight;

  // Get the current scroll position
  const scrollTop = cardsContainer.scrollTop;

  // Calculate the index of the target card based on the scroll position
  const targetCardIndex = Math.ceil(scrollTop / cardHeight) + 1;

  // Calculate the scroll position of the target card
  const targetScrollTop = targetCardIndex * cardHeight;

  // Scroll to the target card with smooth behavior
  cardsContainer.scrollTo({
    top: targetScrollTop,
    behavior: "smooth",
  });

  // Update scroll flags
  this.isScrollAtStart = false;
  this.isScrollAtEnd =
    targetScrollTop >=
    cardsContainer.scrollHeight - cardsContainer.clientHeight;
}
  },
};
</script>

<style scoped>
.circline {
  width: 135px;
  height: 40px;
  margin: 10px 0px 0px 70px;
  border-radius: 40px;
  background: var(--second-blue-color);
}
.circline-image {
  margin: 18px 0px 0px -73px;
}
.circline1-location {
  margin: 8px 0px 0px 70px;
}
.circline2-location {
  margin: 48px 0px 0px 90px;
}
.image-horizontal_dashes {
  margin: 50px 0px 0px 40px;
  width: 1196px;
}
.search-icon {
  position: absolute;
  margin: 50px 0px 0px 100px;
}
.text-style {
  margin: -16px 0px 0px 15px;
  color: var(--btn-text);
  font-size: 16px;
  font-weight: 500;
}
.inputs {
  width: 200px;
  height: 50px;
  margin: 0px 20px 0px 0px;
  background: var(--first-blue-color);
  border-radius: 15px;
  border: 1px solid var(--second-blue-color);
}
.inputs:focus {
  outline: none;
  box-shadow: none;
  border-radius: 10px;
  padding-left: 20px;
  border: 2px solid var(--second-blue-color);
}
::placeholder {
  color: var(--light-gray);
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
}
.inputs::placeholder {
  text-align: center;
}
.inputs-location {
  margin: 40px 0px 0px 330px;
}
.item {
  width: 289px;
  height: 343.895px;
  border-radius: 25px;
  background: var(--White, #fdfdfd);
  box-shadow: 0px 16px 40px 0px rgba(0, 0, 0, 0.05);
}
.counter {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid var(--second-blue-color);
  margin: 20px 0px 0px 20px;
  text-align: center;
  padding-top: 5px;
}
.heart-location {
  margin: 35px 0px 0px 29.54px;
}
.item {
  margin-top: 55px;
  float: right;
}
.item-title {
  height: 29.99px;
  color: var(--Primary, #1cc555);
  font-family: "DIN Next LT W23";
  font-size: 20px;
  font-weight: 500px;
  line-height: 150%; /* 30px */
  margin: 10px 0px 0px 51px;
}
.stars-location {
  margin: 12px 0px 10px 136px;
}
.item-description {
  width: 205px;
  height: 38px;
  color: var(--Darkgrey, #888);
  float: right;
  text-align: right;
  font-family: "DIN Next LT W23";
  font-size: 12px;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  margin: 10px 32px 0px 0px;
}
.item-line {
  width: 237.863px;
  height: 0.775px;
  background: #ededed;
  margin: 70px 0px 0px 25px;
}
.add-button {
  width: 104.598px;
  height: 43.374px;
  border-radius: 40px;
  background: var(
    --Gradient-1,
    linear-gradient(100deg, #30e36d 0%, #1cc555 100%)
  );
  color: var(--btn-text);
  font-family: "DIN Next LT W23";
  font-size: 14px;
  font-weight: 700;
  margin: 28px 0px 0px 30px;
}
.price-text {
  display: flex;
  width: 100px;
  height: 29.99px;
  flex-direction: column;
  justify-content: center;
  color: var(--Black, #333);
  font-size: 20px;
  font-weight: 600;
  margin: 34px 0px 0px 28px;
}
.form-input {
  text-indent: 60px;
  border-radius: 10px;
  border: none;
  width: 905px;
  height: 50px;
  margin: 40px 0px 20px 75px;
  background-color: var(--first-blue-color);
}
.form-input:focus {
  outline: none;
  border-color: var(--second-blue-color);
  color: var(--white-color);
}
.products-container {
  width: 1200px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px 0px 40px;
}
.products {
  width: 400px;
  height: 90px;
}
.product-text {
  color: var(--btn-text);
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.52px;
  margin: 4px 0px 0px 15px;
}
.product-price1 {
  color: var(--second-blue-color);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.48px;
  margin: 10px 0px 0px 25px;
}
.product-price2 {
  color: #eb455f;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-decoration: line-through;
  margin: 10px 0px 0px 20px;
}
.confirm-button {
  margin: 80px 0px 0px 125px;
  width: 150px;
  height: 50px;
  border-radius: 15px;
  background: var(--second-blue-color);
  color: var(--btn-text);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
}
.input-wrapper {
  position: relative;
  display: inline-block;
}
/* Styling for the input fields */
.inputs2 {
  width: 295px;
  height: 50px;
  margin: 0px 15px 10px 15px;
  background: var(--first-blue-color);
  padding-left: 55px;
  border: 1px solid var(--second-blue-color);
}
/* Styling for the focused input field */
.inputs2:focus {
  outline: none;
  box-shadow: none;
  border-radius: 10px;
  border: 2px solid var(--second-blue-color);
}
/* Styling for the language transformer text */
.lang-transformer {
  color: var(--light-gray);
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: 10px;
  left: 15px;
  padding: 8px 0px 0px 10px;
}
/* Styling for the language transformer button */
.lang-transformer-btn {
  position: absolute;
  top: 17px;
  left: 50px;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.inputs2::placeholder {
  color: var(--light-gray);
  text-align: center;
  font-family: "DIN Next LT W23";
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
}
.language-toggle {
  margin: 0px 0px 0px 370px;
}
.add-button2 {
  background: transparent;
  margin: 31px 0px 0px 30px;
  width: 24px;
  height: 24px;
}
.product-image-container {
  border-radius: 70px;
  width: 145px;
  height: 145px;
  margin: -85px 0px 0px 15px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
}
.product-image {
  border-radius: 50%;
  width: 145px;
  height: 145px;
}
.add-product-image-container {
  border-radius: 10px;
  width: 80px;
  height: 80px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
}
.add-product-image {
  border-radius: 10px;
  width: 80px;
  height: 80px;
}
/*----- scroll started --------*/
.cards {
  width: 1260px;
  height: 930px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  overflow-y: auto;
}
.card {
  border-radius: 12px;
  scroll-snap-align: start;
  transition: all 0.2s;
  background-color: transparent;
  width: 1260px;
  height: 400px;
  margin-top: 50px;
}
.card:not(:last-child) {
  margin-bottom: 10px;
}
.cards::-webkit-scrollbar {
  height: 12px;
  width: 12px;
}
.cards::-webkit-scrollbar-thumb,
.cards::-webkit-scrollbar-track {
  border-radius: 92px;
  margin: 110px 0px 40px 0px;
}
.cards::-webkit-scrollbar-thumb {
  background: var(--second-blue-color);
}
.cards::-webkit-scrollbar-track {
  background: #212139;
}
.cards-scroll {
  width: 1270px;
  background-color: transparent;
  margin: 20px 0px 0px 10px;
}
.scroll-button {
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
}
.scroll-button.left {
  left: 8px;
  top: 100px;
}
.scroll-button {
  margin: -15px 0px 0px 1240px;
}
.scroll-button.right {
  left: 8px;
  top: 920px;
}
.left-arrow,
.right-arrow {
  cursor: pointer;
  position: relative;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
#right-arrow-img {
  transform: rotate(90deg);
}
#left-arrow-img {
  transform: rotate(-90deg);
}
.arrow {
  position: relative;
}
/* -- scroll ended -- */
</style>
