<template>
  <div class="container-fluid">
    <div class="d-block">
      <!-- prevent the image from being draged or downloaded -->
      <ImageUtils>
        <!-- Main image -->
        <img
          src="@/assets/images/reverse-choose-meal-image.svg"
          alt=""
          class="main-image"
        />
      </ImageUtils>

      <!-- Horizontal dashes image -->
      <img
        src="@/assets/images/Horizontal_dashes.svg"
        alt=""
        class="image-horizontal_dashes"
      />

      <div class="d-flex uploading mt-5">
        <!-- Reset button -->
        <button class="reset-button" @click="reset">
          <img src="@/assets/images/reset.svg" alt="reset" />
        </button>

        <div class="arabic-upload me-5">
          <!-- Arabic upload section -->
          <img src="@/assets/images/Rectangle-dashes.svg" alt="" />
          <p class="arabic-text1">
            قم بإسقاط الإعلان التي تريده باللغة الإنجليزية هنا
          </p>
          <p class="arabic-text2">
            <span>الحجم الأقصى: 5 ميغابايت، الأبعاد: 20 * 25</span
            ><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
              >التنسيق المدعوم: jpg، png</span
            >
          </p>
          <img
            src="@/assets/images/tick-circle.svg"
            alt=""
            class="tick-image1-location"
            v-if="arabicFile"
          />
          <input
            type="file"
            class="upload-input"
            accept=".jpg,.png"
            @change="handleArabicFileUpload"
          />
        </div>

        <div class="english-upload">
          <!-- English upload section -->
          <img src="@/assets/images/Rectangle-dashes.svg" alt="" />
          <img
            src="@/assets/images/tick-circle.svg"
            alt=""
            class="tick-image2-location"
            v-if="englishFile"
          />
          <p class="english-text1">Drop the ad you want in English here</p>
          <p class="english-text2">
            max size 5 mB, dimensions 20*25<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;supported
            format jpg, png
          </p>
          <input
            type="file"
            class="upload-input"
            accept=".jpg,.png"
            @change="handleEnglishFileUpload"
          />
        </div>
      </div>

      <!-- Horizontal dashes image -->
      <img
        src="@/assets/images/Horizontal_dashes.svg"
        alt=""
        class="image-horizontal_dashes2"
      />

      <div class="d-flex mt-4 ms-4">
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
        <div class="circline">
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
        <!-- Product list -->
        <div
          class="products d-flex"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <div class="product-image-container">
            <!-- Product image -->
            <img :src="product.product_image" alt="" class="product-image" />
          </div>
          <div class="d-block">
            <!-- Product name -->
            <p class="product-text">{{ product.product_name }}</p>
            <!-- Discounted price -->
            <p class="product-price2">{{ product.disscounted_price }}</p>
          </div>
          <!-- Original price -->
          <p class="product-price1">{{ product.price }}</p>
          <button class="add-button">
            <!-- Add or remove button -->
            <img
              v-if="!product.added"
              src="@/assets/images/add-square.svg"
              alt=""
              @click="addProduct(product)"
            />
            <img
              v-else
              src="@/assets/images/trash.svg"
              alt=""
              @click="deleteProduct(product)"
            />
          </button>
        </div>
      </div>

      <!-- Confirmation button -->
      <button class="confirm-button">Confirmation</button>
    </div>
  </div>
</template>

<script>
import ImageUtils from "@/components/ImageUtils.vue";

export default {
  components: {
    ImageUtils,
  },
  data() {
    return {
      searchQuery: "", // Stores the search query entered by the user
      arabicFile: null, // Stores the uploaded Arabic file
      englishFile: null, // Stores the uploaded English file

      products: [
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false, // Indicates if the product has been added or not
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false,
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false,
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false,
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false,
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false,
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false,
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false,
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false,
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false,
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false,
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Meat pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
          added: false,
        },
      ],
    };
  },
  methods: {
    // Handles the file upload for the Arabic language file
    handleArabicFileUpload(event) {
      this.arabicFile = event.target.files[0];
    },
    // Handles the file upload for the English language file
    handleEnglishFileUpload(event) {
      this.englishFile = event.target.files[0];
    },
    // Resets the uploaded files
    reset() {
      this.arabicFile = null;
      this.englishFile = null;
    },
    // add a product
    addProduct(product) {
      product.added = !product.added;
    },
    // delete a product
    deleteProduct(product) {
      product.added = !product.added;
    },
  },
  computed: {
    // Filters the products based on the search query
    filteredProducts() {
      if (this.searchQuery.trim() === "") {
        return this.products; // Return all products if searchQuery is empty
      }

      const query = this.searchQuery.toLowerCase();
      return this.products.filter((product) =>
        product.product_name.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style scoped>
.main-image {
  margin: 60px 0px 0px 100px;
}
.image-horizontal_dashes {
  margin: 98px 0px 0px 40px;
  width: 1196px;
}
.english-upload,
.arabic-upload {
  width: 397px;
  height: 199px;
}
.tick-image1-location {
  margin: -300px 0px 0px 355px;
}
.tick-image2-location {
  margin: -130px 0px 0px -40px;
}
.image-horizontal_dashes2 {
  margin: 50px 0px 0px 40px;
  width: 1196px;
}
.search-icon {
  position: absolute;
  margin: 50px 0px 0px 100px;
}
.english-text1,
.english-text2,
.arabic-text1,
.arabic-text2 {
  color: var(--light-gray);
  font-size: 14px;
  font-weight: 500;
}
.english-text1 {
  margin: -100px 0px 0px 80px;
}
.english-text2 {
  margin: 5px 0px 0px 92px;
}
.arabic-text1 {
  margin: -100px 0px 0px 90px;
}
.arabic-text2 {
  margin: 0px 0px 0px 96px;
}
.uploading {
  margin-top: 0px;
}
.reset-button {
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: var(--second-blue-color);
  margin: 80px 20px 0px 90px;
}
.circline {
  width: 135px;
  height: 40px;
  margin: 48px 0px 0px 90px;
  border-radius: 40px;
  background: var(--second-blue-color);
}
.circline-image {
  margin: 16px 0px 0px -73px;
}
.text-style {
  margin: -16px 0px 0px 15px;
  color: var(--btn-text);
  font-size: 16px;
  font-weight: 500;
}
.upload-input {
  position: relative;
  top: -179px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
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

::placeholder {
  color: var(--light-gray);
  font-size: 16px;
  font-weight: 500;
  line-height: 120%; /* 19.2px */
  text-transform: capitalize;
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
.product-image-container {
  border-radius: 10px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-image {
  border-radius: 10px;
  width: 80px;
  height: 80px;
  margin: 5px 0px 5px 5px;
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
  text-transform: capitalize;
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
.add-button {
  background: transparent;
  margin: 31px 0px 0px 30px;
  width: 24px;
  height: 24px;
}
</style>