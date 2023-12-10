<template>
  <div class="container-fluid">
    <div class="d-block ps-5">
      <!-- prevent the image from being draged or downloaded -->
      <ImageUtils>
        <!-- Main image -->
        <img
          src="@/assets/images/Resturant.svg"
          alt=""
          class="main-banner-image"
        />
      </ImageUtils>

      <!-- Horizontal dashes image -->
      <img
        src="@/assets/images/Horizontal_dashes.svg"
        alt=""
        class="image-horizontal_dashes"
      />

      <div class="pt-5 d-flex">
        <!-- Reset button for all files -->
        <button
          class="reset-button reset-button1-location"
          @click="resetAllFiles"
        >
          <img src="@/assets/images/reset.svg" alt="reset" />
        </button>

        <!-- Banner buttons -->
        <div v-for="index in 5" :key="`banner-${6 - index}`">
          <button
            class="banner-button"
            :id="`banner-${6 - index}`"
            @click="setActiveBanner(index)"
            :class="{
              active: activeBanner === index,
              uploaded: isBannerUploaded(index),
            }"
          >
            {{ "Banner " + (6 - index) }}
          </button>
        </div>

        <!-- Circline and text for banner editing -->
        <div class="circline circline1-location">
          <img
            src="@/assets/images/circline.svg"
            alt=""
            class="circline-image"
          />
          <p class="text-style">Banner editing</p>
        </div>
      </div>

      <!-- Uploading sections for each banner -->
      <div
        class="d-flex uploading"
        v-for="index in 5"
        :key="`banner-${6 - index}`"
      >
        <!-- Reset button for the selected banner file -->
        <button
          class="reset-button reset-button2-location"
          v-if="activeBanner === index"
          @click="resetFile(index)"
        >
          <img src="@/assets/images/reset.svg" alt="reset" />
        </button>

        <!-- Arabic upload section for the selected banner -->
        <div class="arabic-upload me-5" v-if="activeBanner === index">
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
          <!-- Tick image indicating the banner is uploaded in Arabic -->
          <img
            src="@/assets/images/tick-circle.svg"
            alt=""
            class="tick-image1-location"
            v-if="isBannerUploaded(index, 'arabic')"
          />
          <!-- Input field for uploading the Arabic banner file -->
          <input
            type="file"
            class="upload-input"
            accept=".jpg,.png"
            @change="handleFileUpload($event, index, 'arabic')"
          />
        </div>

        <!-- English upload section for the selected banner -->
        <div class="english-upload" v-if="activeBanner === index">
          <img src="@/assets/images/Rectangle-dashes.svg" alt="" />
          <!-- Tick image indicating the banner is uploaded in English -->
          <img
            src="@/assets/images/tick-circle.svg"
            alt=""
            class="tick-image2-location"
            v-if="isBannerUploaded(index, 'english')"
          />
          <p class="english-text1">Drop the ad you want in English here</p>
          <p class="english-text2">
            max size 5 mB , dimensions 20*25
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;supported format jpg, png
          </p>
          <!-- Input field for uploading the English banner file -->
          <input
            type="file"
            class="upload-input"
            accept=".jpg,.png"
            @change="handleFileUpload($event, index, 'english')"
          />
        </div>

        <!-- Circline and text indicating the active banner -->
        <div class="circline circline2-location" v-if="activeBanner === index">
          <img
            src="@/assets/images/circline.svg"
            alt=""
            class="circline-image"
          />
          <p class="text-style">
            {{ "&nbsp;&nbsp;&nbsp;&nbsp;Banner " + (6 - activeBanner) }}
          </p>
        </div>
      </div>

      <!-- Horizontal dashes image -->
      <img
        src="@/assets/images/Horizontal_dashes.svg"
        alt=""
        class="image-horizontal_dashes"
      />

      <div class="d-flex">
        <!-- Search icon -->
        <img
          src="@/assets/images/search-status.svg"
          alt=""
          class="search-icon"
        />
        <!-- Search input field -->
        <input
          type="text"
          v-model="searchQuery"
          class="form-input"
          placeholder="Search the list of products"
        />
        <!-- Circline and text for products list -->
        <div class="circline circline3-location">
          <img
            src="@/assets/images/circline.svg"
            alt=""
            class="circline-image"
          />
          <p class="text-style">Products list</p>
        </div>
      </div>

      <!-- Product list -->
      <div
        class="products d-flex"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <!-- Product image container -->
        <div class="product-image-container">
          <img :src="product.product_image" alt="" class="product-image" />
        </div>

        <!-- Product name -->
        <p class="product-text">{{ product.product_name }}</p>
        <div class="vertical-line"></div>
        <!-- Product price -->
        <p class="product-price1">{{ product.price }}</p>
        <!-- Discounted product price -->
        <p class="product-price2">{{ product.disscounted_price }}</p>

        <div class="form-check">
          <!-- Radio button for product selection -->
          <input
            class="form-check-input sm-input-radio-blue"
            type="radio"
            name="radioOptions"
            id="option1"
            value="option1"
          />
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
      activeBanner: 5, // Represents the index of the active banner (default value is 5)
      uploadedFiles: {
        // Stores uploaded files for each banner and language
        1: { arabic: null, english: null },
        2: { arabic: null, english: null },
        3: { arabic: null, english: null },
        4: { arabic: null, english: null },
        5: { arabic: null, english: null },
      },
      products: [
        // Array of product objects
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Quattro Stagioni Pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Quattro Fromage pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Rippino pizza or calzone",
          price: "60.00$",
          disscounted_price: "80.00$",
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "New Haven Pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
        },
        {
          product_image: require("@/assets/images/food.png"),
          product_name: "Viennese pizza",
          price: "60.00$",
          disscounted_price: "80.00$",
        },
      ],
    };
  },
  methods: {
    setActiveBanner(index) {
      this.activeBanner = index; // Updates the activeBanner value based on the selected index
    },
    handleFileUpload(event, bannerIndex, language) {
      const file = event.target.files[0]; // Retrieves the uploaded file
      this.uploadedFiles[bannerIndex][language] = file; // Stores the uploaded file in the uploadedFiles object
      console.log(file);
    },
    isBannerUploaded(bannerIndex, language) {
      return !!this.uploadedFiles[bannerIndex][language]; // Checks if a file is uploaded for a specific banner and language
    },
    resetFile(bannerIndex) {
      this.uploadedFiles[bannerIndex] = { arabic: null, english: null }; // Resets the uploaded file for a specific banner
    },
    resetAllFiles() {
      for (let i = 1; i <= 5; i++) {
        this.resetFile(i); // Resets uploaded files for all banners
      }
      this.activeBanner = 5; // Resets activeBanner to the default value
    },
  },
  computed: {
    filteredProducts() {
      if (this.searchQuery.trim() === "") {
        return this.products; // Returns all products if searchQuery is empty
      }

      const query = this.searchQuery.toLowerCase();
      return this.products.filter(
        (product) => product.product_name.toLowerCase().includes(query) // Filters products based on the search query
      );
    },
  },
};
</script>

<style scoped>
.main-banner-image {
  margin-top: 50px;
}
.image-horizontal_dashes {
  margin-top: 60px;
  width: 1196px;
}
.search-icon {
  position: absolute;
  margin: 50px 0px 0px 100px;
}
.reset-button {
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: var(--second-blue-color);
}
.reset-button1-location {
  margin: 5px 20px 0px 0px;
}
.reset-button2-location {
  margin: 80px 20px 0px 90px;
}
.banner-button {
  border: none;
  color: var(--btn-text);
  font-size: 22px;
  font-weight: 700;
  width: 170px;
  height: 60px;
  border-radius: 15px;
  background: var(--first-blue-color);
  margin: 0px 20px 60px 0px;
}
.circline {
  width: 135px;
  height: 40px;
  border-radius: 40px;
  background: var(--second-blue-color);
}
.circline1-location {
  margin: 10px 0px 0px 70px;
}
.circline2-location {
  margin: 78px 0px 0px 90px;
}
.circline3-location {
  margin: 48px 0px 0px 90px;
}
.circline-image {
  margin: 18px 0px 0px -73px;
}
.image-horizontal_dashes {
  margin-top: 50px;
  width: 1196px;
}
.text-style {
  margin: -16px 0px 0px 15px;
  color: var(--btn-text);
  font-size: 16px;
  font-weight: 500;
}
.active {
  background-color: var(--second-blue-color);
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
.upload-input {
  position: relative;
  top: -167px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.arabic-upload,
.english-upload {
  width: 397px;
  height: 199px;
}
.tick-image1-location {
  margin: -300px 0px 0px 355px;
}
.tick-image2-location {
  margin: -130px 0px 0px -40px;
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
.products {
  width: 1221px;
  height: 90px;
  border-radius: 15px;
  background: var(--first-blue-color);
  margin: 20px 0px 0px 0px;
}
.product-image-container {
  border-radius: 10px;
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
  margin: 25px 0px 0px 20px;
  height: 39px;
  width: 350px;
}
.vertical-line {
  width: 1px;
  height: 64px;
  background-color: var(--second-blue-color);
  margin: 13px 0px 0px 13px;
}
.product-price1 {
  color: var(--second-blue-color);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.48px;
  margin: 27px 0px 0px 40px;
}
.product-price2 {
  color: #eb455f;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-decoration: line-through;
  text-transform: capitalize;
  margin: 37px 0px 0px 20px;
}
.form-check {
  margin: 32px 0px 0px 500px;
}
.confirm-button {
  width: 150px;
  height: 50px;
  border-radius: 15px;
  background: var(--second-blue-color);
  color: var(--btn-text);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
  margin: 50px 0px 0px 125px;
}
</style>
