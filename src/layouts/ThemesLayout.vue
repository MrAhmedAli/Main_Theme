<template>
  <div class="continer-fluid d-flex">
    <div class="sidebar-left">
      <div class="l-navbar" :class="{ show: isNavbarVisible }" id="nav-bar">
        <nav class="nav">
          <div>
            <a href="#" class="nav_logo d-block mb-0">
              <br />
              <div class="d-flex ms-5">
                <div
                  :class="[
                    'icon_circle',
                    { 'icon_circle blue_circle': activeIcon === 'computer' },
                  ]"
                >
                  <img
                    :src="
                      activeIcon === 'computer'
                        ? require('@/assets/images/monitor.svg')
                        : require('@/assets/images/monitor-blue.svg')
                    "
                    alt=""
                    @click="toggleIcon('computer')"
                  />
                </div>
                <div
                  :class="[
                    'icon_circle',
                    { 'icon_circle blue_circle': activeIcon === 'mobile' },
                  ]"
                >
                  <img
                    :src="
                      activeIcon === 'mobile'
                        ? require('@/assets/images/mobile.svg')
                        : require('@/assets/images/mobile-blue.svg')
                    "
                    class=""
                    alt=""
                    @click="toggleIcon('mobile')"
                  />
                </div>
              </div>
              <br />
              <div><img src="@/assets/images/bar_dashes.svg" alt="" /></div>
            </a>

            <div class="nav_list">
              <router-link
                to="/"
                class="nav_link"
                :class="{ active: activeOption === 'header' }"
                @click="toggleNavbar('header')"
              >
                <span class="nav_name">header</span>
              </router-link>

              <router-link
                to="/main-banner"
                class="nav_link"
                :class="{ active: activeOption === 'main_banner' }"
                @click="toggleNavbar('main_banner')"
              >
                <span class="nav_name">main banner</span>
              </router-link>

              <router-link
                to="/order"
                class="nav_link"
                :class="{ active: activeOption === 'order_way' }"
                @click="toggleNavbar('order_way')"
              >
                <span class="nav_name">order way</span>
              </router-link>

              <router-link
                to="/first-Ad"
                class="nav_link"
                :class="{ active: activeOption === 'first_ad' }"
                @click="toggleNavbar('first_ad')"
              >
                <span class="nav_name">first Ad</span>
              </router-link>

              <router-link
                to="/products"
                class="nav_link"
                :class="{ active: activeOption === 'products' }"
                @click="toggleNavbar('products')"
              >
                <span class="nav_name">products</span>
              </router-link>

              <router-link
                to="/second-banner"
                class="nav_link"
                :class="{ active: activeOption === 'second_banner' }"
                @click="toggleNavbar('second_banner')"
              >
                <span class="nav_name">second banner</span>
              </router-link>

              <router-link
                to="/hot-sales"
                class="nav_link"
                :class="{ active: activeOption === 'Hot_sales' }"
                @click="toggleNavbar('Hot_sales')"
              >
                <span class="nav_name">hot sales</span>
              </router-link>
              <router-link
                to="/third-banner"
                class="nav_link"
                :class="{ active: activeOption === '3rd_banner' }"
                @click="toggleNavbar('3rd_banner')"
              >
                <span class="nav_name">3rd banner</span>
              </router-link>

              <router-link
                to="/reviews"
                class="nav_link"
                :class="{ active: activeOption === 'reviews' }"
                @click="toggleNavbar('reviews')"
              >
                <span class="nav_name">reviews</span>
              </router-link>

              <router-link
                to="/footer"
                class="nav_link"
                :class="{ active: activeOption === 'Footer' }"
                @click="toggleNavbar('Footer')"
              >
                <span class="nav_name">Footer</span>
              </router-link>
            </div>

            <div class="d-block theme_color">
              <div class="d-flex">
                <img id="paintbucket" src="@/assets/images/paint-bucket.svg" />
                <p id="background-color">Theme color</p>
              </div>

              <div class="d-flex">
                <div class="circle">
                  <input
                    type="color"
                    class="custom-color-input"
                    v-model="colorValue"
                    id="style1"
                  />
                </div>
                <input
                  type="text"
                  class="color_input"
                  v-model="colorValue"
                  id="colorInput"
                  :style="{ 'background-color': colorValue }"
                  :class="{ 'black-text': isColorDark }"
                />
              </div>
            </div>

            <button class="save_button">Save</button>
          </div>
        </nav>
      </div>
    </div>

    <div class="main">
      <div class="top-bar">
        <div class="d-flex button-flex">
          <button class="reChoose-theme-button">
            Choose Another Theme
            <img
              src="@/assets/images/arrow-right.svg"
              alt="right-arrow"
              class="arrow-right-image"
            />
          </button>
          <button class="need-designer-button">Need A Designer</button>
        </div>
        <img
          src="@/assets/images/Horizontal_dashes.svg"
          alt=""
          class="image-horizontal_dashes"
        />
      </div>

      <div class="content d-flex">
        <router-view style="width: 1320px"></router-view>

        <div class="d-flex right-theme">
          <img
            src="@/assets/images/Vertical_dashes.svg"
            alt=""
            class="vertical_dashes"
          />

          <div class="image-container">
            <div class="image-wrapper">
              <ImageUtils>
                <img
                  src="@/assets/images/theme-opacity.svg"
                  alt=""
                  class="theme-image image"
                />
              </ImageUtils>
            </div>

            <div class="rectangle">
              <img :src="rectangleImage" alt="" class="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageUtils from "@/components/ImageUtils.vue";

export default {
  name: "HelloWorld",
  components: {
    ImageUtils,
  },
  data() {
    return {
      isNavbarVisible: true,
      isIconVisible: true,
      activeOption: "",
      activeIcon: "computer",
      colorValue: "#29B558",
    };
  },
  mounted() {
    // Set initial dimensions and position of the rectangle
    this.setRectangleDimensions();

    // Retrieve the active option from localStorage if available
    const storedOption = localStorage.getItem("activeOption");
    if (storedOption) {
      this.activeOption = storedOption;
    } else {
      // Set the default active option to 'header'
      this.activeOption = "header";
    }

    // Set initial dimensions and position of the rectangle
    this.setRectangleDimensions();

    // for dynamically changed color
    const colorInput = document.getElementById("style1");
    const textInput = document.getElementById("colorInput");

    // Listen for changes in the color input
    colorInput.addEventListener("input", this.handleColorInputChange);

    // Listen for changes in the text input
    textInput.addEventListener("input", this.handleColorInputChange);
  },
  beforeUnmount() {
    const colorInput = document.getElementById("style1");
    const textInput = document.getElementById("colorInput");

    // Remove event listeners before component unmounts
    colorInput.removeEventListener("input", this.handleColorInputChange);
    textInput.removeEventListener("input", this.handleColorInputChange);
  },
  watch: {
    $route() {
      // Update dimensions and position of the rectangle when the route changes
      this.setRectangleDimensions();
    },
    activeOption(newValue) {
      // Store the active option in localStorage
      localStorage.setItem("activeOption", newValue);
    },
  },
  computed: {
    rectangleImage() {
      const imagePaths = {
        header: require("@/assets/images/theme-header-focus.png"),
        main_banner: require("@/assets/images/theme-mainbanner-focus.png"),
        order_way: require("@/assets/images/theme-orderway-focus.png"),
        first_ad: require("@/assets/images/theme-firstad-focus.png"),
        products: require("@/assets/images/theme-product-focus.png"),
        second_banner: require("@/assets/images/theme-2ndbanner-focus.png"),
        Hot_sales: require("@/assets/images/theme-hotsales-focus.png"),
        "3rd_banner": require("@/assets/images/theme-3rdbanner-focus.png"),
        reviews: require("@/assets/images/theme-reviews-focus.png"),
        Footer: require("@/assets/images/theme-footer-focus.png"),
        // Add more options and image paths as needed
      };

      const currentOption = this.activeOption;

      if (Object.prototype.hasOwnProperty.call(imagePaths, currentOption)) {
        return imagePaths[currentOption];
      }

      return require("@/assets/images/theme-header-focus.svg");
    },
    isColorDark() {
      // Check if the selected color is dark
      // You can adjust the darkness threshold as needed
      const darknessThreshold = 100;
      const color = this.colorValue.substring(1); // Remove the '#' from the color value
      const red = parseInt(color.substr(0, 2), 16);
      const green = parseInt(color.substr(2, 2), 16);
      const blue = parseInt(color.substr(4, 2), 16);
      const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
      return brightness < darknessThreshold;
    },
  },

  methods: {
    toggleIcon(option) {
      this.activeIcon = option;
      if (!this.isIconVisible) {
        this.isIconVisible = true;
      }
    },
    toggleNavbar(option) {
      this.activeOption = option;
      if (!this.isNavbarVisible) {
        this.isNavbarVisible = true;
      }
      // Update dimensions and position of the rectangle when the active option changes
      this.setRectangleDimensions();
    },
    setRectangleDimensions() {
      // Get the rectangle element
      const rectangle = document.querySelector(".rectangle");

      // Define the positions based on the active option
      const optionPositions = {
        header: { top: "0px" },
        main_banner: { top: "20px" },
        order_way: { top: "140px" },
        first_ad: { top: "210px" },
        products: { top: "288px" },
        second_banner: { top: "468px" },
        Hot_sales: { top: "560px" },
        "3rd_banner": { top: "670px" },
        reviews: { top: "750px" },
        Footer: { top: "830px" },
        // Add more options and positions as needed
      };

      // Get the current active option
      const currentOption = this.activeOption;

      // Check if the current option has a defined position
      if (optionPositions[currentOption]) {
        const { top } = optionPositions[currentOption];

        // Set the dimensions and position of the rectangle
        rectangle.style.width = "210px";
        rectangle.style.top = top;
        rectangle.style.left = "40px";
      }

      // Disable user interaction with the rectangle
      rectangle.style.pointerEvents = "none";
    },
    handleColorInputChange(event) {
      this.colorValue = event.target.value;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");

*,
::before,
::after {
  box-sizing: border-box;
}

.icon_circle {
  width: 62px;
  height: 62px;
  border-radius: 50px;
  text-align: center;
  padding-top: 14px;
  margin-right: 20px;
}

.blue_circle {
  background-color: var(--second-blue-color);
}

a {
  text-decoration: none;
}
.l-navbar {
  position: relative;
  top: 0;
  left: -30%;
  width: 310px;
  height: 2077px;
  background-color: var(--dark-blue-with-opcity);
  padding: 0.5rem 1rem 0 0;
  transition: 0.5s;
  z-index: var(100);
}
.nav {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.nav_logo,
.nav_link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0 0.5rem 28px;
}
.nav_logo {
  margin-bottom: 2rem;
}

.nav_link {
  position: relative;
  color: var(--btn-text);
  margin-bottom: 1.5rem;
  transition: 0.3s;
  font-size: 20px;
  font-weight: 400;
}
.nav_link:hover {
  color: var(--second-blue-color);
}
.show {
  left: 0 !important;
}

.active {
  color: var(--second-blue-color);
  font-weight: 700;
}
.nav_link.active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 37px;
  height: 25px;
  background-image: url("@/assets/images/Polygon1.svg");
  background-size: contain;
  background-repeat: no-repeat;
}

#paintbucket {
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

#background-color {
  color: var(--btn-text);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin-left: 10px;
}

.circle {
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  flex-shrink: 0;
  background: transparent;
  position: relative;
  overflow: hidden;
}

.custom-color-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
  appearance: none;
}

.custom-color-input::-webkit-color-swatch {
  border-radius: 50%;
  border: none;
}

.color_input {
  width: 110px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: #29b558;
  padding-left: 12px;
}

.theme_color {
  width: 238px;
  height: 100px;
  border-radius: 15px;
  background: #42425b;
  padding: 9px 0px 0px 20px;
  margin-left: 28px;
}
.button-flex{
  margin: 56px 0px 0px 33px;
}

.save_button {
  width: 254px;
  height: 60px;
  border-radius: 10px;
  background: var(--second-blue-color);
  margin: 30px 0px 0px 28px;
  border: none;
  color: var(--white-color);
  font-size: 24px;
}

.reChoose-theme-button {
  color: var(--btn-text);
  text-align: left;
  padding-left: 30px;
  font-weight: 500;
  letter-spacing: 0.28px;
  border: none;
  width: 1091px;
  height: 60px;
  border-radius: 20px;
  background: var(--first-blue-color);
}

.arrow-right-image {
  padding-left: 832px;
  position: absolute;
}

.need-designer-button {
  margin-left: 20px;
  width: 207px;
  height: 60px;
  border-radius: 15px;
  border: 1px solid var(--second-blue-color);
  background: var(--dark-blue-color);
  color: var(--second-blue-color);
  font-size: 20px;
  font-weight: 500;
}
.image-horizontal_dashes{
  margin: 40px 0px 0px 53px; 
  width: 1440px;
}

.right-theme {
  margin: 30px 0px 0px 0px;
}

.image-container {
  position: relative;
  display: inline-block;
}
.theme-image {
  margin: 0px 0px 0px 40px;
  width: 208px;
  height: 876px;
}

.image {
  display: block;
}

.rectangle {
  position: absolute;
  pointer-events: none; /* Ensure the div does not interfere with mouse events on the image */
}

.black-text {
  color: var(--btn-text); /* Set the font color to white for dark background */
}
</style>
