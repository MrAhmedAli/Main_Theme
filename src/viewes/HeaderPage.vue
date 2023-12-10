<template>
  <div class="container-fluid">
    <div class="d-block">
      <!-- Header Section -->
      <div class="d-flex mt-5 ms-5">
        <!-- Header Icons -->
        <img src="@/assets/images/user.svg" alt="user-image" class="me-4" />
        <img src="@/assets/images/heart.svg" alt="heart-image" class="me-4" />
        <img src="@/assets/images/shopping-cart.svg" alt="" class="me-5" />
        <img src="@/assets/images/small-down-arrow.svg" alt="" class="me-1" />
        <img src="@/assets/images/AR.svg" alt="AR-image" class="me-3" />
        <img src="@/assets/images/world.svg" alt="world-image" class="me-3" />

        <!-- Header Texts -->
        <p class="header-text ms-5 pt-4">تواصل معنا</p>
        <p class="header-text ms-5 pt-4">من نحن</p>
        <p class="header-text ms-5 pt-4">افضل المنتجات</p>
        <p class="header-text ms-5 me-5 pt-4">تسوق</p>
        <img class="ms-5" src="@/assets/images/company-logo.svg" alt="" />
      </div>

      <!-- Horizontal Dashes Image -->
      <img src="@/assets/images/Horizontal_dashes.svg" class="image-horizontal_dashes" />

      <!-- Uploading Section -->
      <div class="d-flex uploading">
        <!-- Reset Button -->
        <button class="reset-button reset-button1-location" @click="reset_upload">
          <img src="@/assets/images/reset.svg" alt="reset" />
        </button>

        <!-- Arabic Upload Section -->
        <div class="arabic-upload me-5">
          <!-- Rectangle Dashes Image -->
          <img src="@/assets/images/Rectangle-dashes.svg" alt="" />

          <!-- Arabic Texts -->
          <p class="arabic-text1">
            قم بإسقاط الإعلان التي تريده باللغة الإنجليزية هنا
          </p>
          <p class="arabic-text2">
            <span>الحجم الأقصى: 5 ميغابايت، الأبعاد: 20 * 25</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>التنسيق المدعوم: jpg، png</span>
          </p>

          <!-- Tick Circle Image (Visible if Arabic File is present) -->
          <img src="@/assets/images/tick-circle.svg" alt="" class="tick-image1-location" v-if="arabicFile" />

          <!-- Arabic File Input -->
          <input type="file" class="upload-input" accept=".jpg,.png" style="top: -192px" @change="handleArabicFileUpload" />
        </div>

        <!-- English Upload Section -->
        <div class="english-upload">
          <!-- Rectangle Dashes Image -->
          <img src="@/assets/images/Rectangle-dashes.svg" alt="" />

          <!-- Tick Circle Image (Visible if English File is present) -->
          <img src="@/assets/images/tick-circle.svg" alt="" class="tick-image2-location" v-if="englishFile" />

          <!-- English Texts -->
          <p class="english-text1">Drop the ad you want in English here</p>
          <p class="english-text2">
            max size 5 mB , dimensions 20*25
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;supported format jpg, png
          </p>

          <!-- English File Input -->
          <input type="file" class="upload-input" accept=".jpg,.png" @change="handleEnglishFileUpload" />
        </div>

        <!-- Circline Edit Logo Section -->
        <div class="circline circline1-location">
          <img src="@/assets/images/circline.svg" class="circline-image" />
          <p class="text-style">edit logo</p>
        </div>
      </div>

      <!-- Language Toggle Section -->
      <div class="language-toggle d-flex">
        <!-- Reset Button -->
        <button class="reset-button reset-button2-location" @click="reset_inputs">
          <img src="@/assets/images/reset.svg" alt="reset" />
        </button>

        <!-- Input Fields with Language Transformer -->
        <div class="input-wrapper" v-for="(placeholder, index) in placeholders" :key="index">
          <input
            type="text"
            :id="'input' + (index + 1)"
            class="inputs custom-input"
            :placeholder="getPlaceholder(placeholder)"
            :value="getInputValue(placeholder)"
            @input="setInputValue($event.target.value, placeholder)"
          />
          <span class="lang-transformer">{{ currentLanguage }}</span>
          <button class="lang-transformer-btn" @click="toggleLanguage">
            <img src="@/assets/images/lang.svg" />
          </button>
        </div>

        <!-- Circline Edit Titles Section -->
        <div class="circline circline2-location">
          <img src="@/assets/images/circline.svg" alt="" class="circline-image" />
          <p class="text-style">edit titles</p>
        </div>
      </div>

      <!-- Buttons Section -->
      <div class="buttons-location d-flex">
        <button class="delete-button">Delete</button>
        <button class="confirm-button">Confirmation</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1Ar: "", // Value of the Arabic input field for the first placeholder.
      input1En: "", // Value of the English input field for the first placeholder.
      input2Ar: "",
      input2En: "",
      input3Ar: "",
      input3En: "",
      input4Ar: "",
      input4En: "",
      arabicFile: null, // Selected Arabic file for upload.
      englishFile: null, // Selected English file for upload.
      currentLanguage: "En",
      placeholders: [ // Array of objects representing placeholders for inputs in both Arabic and English.
        { placeholderAr: "تواصل معنا", placeholderEn: "Contact us" },
        { placeholderAr: "من نحن", placeholderEn: "About us" },
        { placeholderAr: "افضل المنتجات", placeholderEn: "Best products" },
        { placeholderAr: "تسوق", placeholderEn: "Shop" },
      ],
    };
  },
  methods: {
    handleArabicFileUpload(event) {
      this.arabicFile = event.target.files[0]; // Set the selected Arabic file for upload.
    },
    handleEnglishFileUpload(event) {
      this.englishFile = event.target.files[0]; // Set the selected English file for upload.
    },
    reset_upload() {
      this.arabicFile = null; // Reset the selected Arabic file.
      this.englishFile = null; // Reset the selected English file.
    },
    reset_inputs() {
      // Reset the input values for all placeholders.
      this.input1Ar = "";
      this.input1En = "";
      this.input2Ar = "";
      this.input2En = "";
      this.input3Ar = "";
      this.input3En = "";
      this.input4Ar = "";
      this.input4En = "";
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === "En" ? "Ar" : "En"; // Toggle between English and Arabic language.
    },
    getPlaceholder(placeholder) {
      return this.currentLanguage === "En"
        ? placeholder.placeholderEn // Return the English placeholder if the current language is English.
        : placeholder.placeholderAr; // Return the Arabic placeholder if the current language is Arabic.
    },
    getInputValue(placeholder) {
      const inputId = `input${this.placeholders.indexOf(placeholder) + 1}`; // Get the input ID based on the index of the placeholder.
      const langCode = this.currentLanguage === "En" ? "En" : "Ar"; // Get the language code based on the current language.
      return this[`${inputId}${langCode}`]; // Return the value of the corresponding input field.
    },
    setInputValue(value, placeholder) {
      const inputId = `input${this.placeholders.indexOf(placeholder) + 1}`; // Get the input ID based on the index of the placeholder.
      const langCode = this.currentLanguage === "En" ? "En" : "Ar"; // Get the language code based on the current language.
      this[`${inputId}${langCode}`] = value; // Set the value of the corresponding input field.
    },
  },
};
</script>

<style scoped>
.header-text {
  text-align: center;
  margin-top: 10px;
  color: var(--btn-text);
  font-family: "DIN Next LT W23";
  font-size: 24px;
  font-weight: 500;
}

.reset-button {
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: var(--second-blue-color);
}

.reset-button1-location {
  margin: 80px 20px 0px 90px;
}

.reset-button2-location {
  margin: 0px 20px 0px 55px;
}

.arabic-upload, .english-upload{
  width: 397px;
  height: 199px;
}

.english-text1 {
  color: var(--light-gray);
  font-size: 14px;
  font-weight: 500;
  margin: -100px 0px 0px 80px;
}

.english-text2 {
  color: var(--light-gray);
  font-size: 14px;
  font-weight: 400;
  margin: 5px 0px 0px 92px;
}

.arabic-text1 {
  color: var(--light-gray);
  font-size: 14px;
  font-weight: 500;
  margin: -100px 0px 0px 90px;
}

.arabic-text2 {
  color: var(--light-gray);
  font-size: 14px;
  font-weight: 400;
  margin: 5px 0px 0px 96px;
}

.tick-image1-location {
  margin: -310px 0px 0px 355px;
}

.tick-image2-location {
  margin: -130px 0px 0px -40px;
}
.uploading {
  margin-top: 50px;
}

.upload-input {
  position: relative;
  top: -179px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.circline {
  width: 135px;
  height: 40px;
  margin: 10px 0px 0px 70px;
  border-radius: 40px;
  background: var(--second-blue-color);
}

.circline1-location {
  margin: 78px 0px 0px 90px;
}
.circline2-location {
  margin: 8px 0px 0px 70px;
}

.circline-image {
  margin: 18px 0px 0px -73px;
}

.text-style {
  margin: -18px 0px 0px 35px;
  color: var(--btn-text);
  font-size: 16px;
  font-weight: 500;
}

.input-wrapper {
  position: relative;
  display: inline-block;
}

.inputs {
  width: 200px;
  height: 50px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  background: var(--first-blue-color);
  padding-left: 56px;
  border: 1px solid var(--second-blue-color);
}

.inputs:focus {
  outline: none;
  box-shadow: none;
  border-radius: 10px;
  border: 2px solid var(--second-blue-color);
}

.lang-transformer {
  color: var(--light-gray);
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: 10px;
  left: 15px;
  padding-top: 8px;
  padding-left: 10px;
}

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

::placeholder {
  color: var(--light-gray);
  text-align: center;
  font-family: "DIN Next LT W23";
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
}

.language-toggle {
  margin: 60px 0px 0px -20px;
}

.delete-button {
  width: 150px;
  height: 50px;
  border-radius: 15px;
  background: #eb455f;
  color: var(--btn-text);
  font-size: 20px;
  font-weight: 500;
}

.confirm-button {
  width: 150px;
  height: 50px;
  border-radius: 15px;
  background: var(--second-blue-color);
  color: var(--btn-text);
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
}

.buttons-location {
  margin: 196px 0px 0px 55px;
}

.image-horizontal_dashes {
  margin: 60px 0px 0px 30px;
  width: 1196px;
}
</style>
