<template>
  <div class="container-fluid">
    <div class="d-block">
      <!-- Orders -->
      <div class="d-flex mt-5">
        <div v-for="(order, index) in orders" :key="`order-${index}`">
          <div
            class="order_status"
            :class="{ active: order.isActive }"
            @click="setActiveOrder(index)"
          >
            <img
              :src="order.isActive ? order.imageActive : order.imageInactive"
              alt=""
              class="order-image"
            />
            <p
              :class="
                order.isActive ? 'order-title-active' : 'order-title-inactive'
              "
            >
              {{ order.order_title }}
            </p>
            <p
              :class="
                order.isActive
                  ? 'order-description-active'
                  : 'order-description-inactive'
              "
            >
              {{ order.order_description }}
            </p>
          </div>
        </div>

        <!-- Circline -->
        <div class="circline">
          <img
            src="@/assets/images/circline.svg"
            alt=""
            class="circline-image"
          />
          <p class="text-style">how to order</p>
        </div>
      </div>

      <!-- Horizontal Dashes -->
      <img
        src="@/assets/images/Horizontal_dashes.svg"
        alt=""
        class="image-horizontal_dashes"
      />

      <!-- Uploading -->
      <div class="d-flex uploading" v-for="index1 in 3" :key="index1">
        <!-- Upload Set -->
        <div class="upload-set d-block" v-if="orders[index1 - 1].isActive">
          <div class="d-flex mt-2" v-for="index2 in 2" :key="index2">
            <div class="me-2 half-upload-set">
              <img
                src="@/assets/images/small-rectangle-dashes.svg"
                class="me-2"
                alt=""
              />
              <input
                type="text"
                class="text-input"
                :placeholder="placeholders[(index2 - 1) * 2]"
                v-model="orders[index1 - 1].inputValues[(index2 - 1) * 2]"
                :maxlength="200"
              />
              <div class="d-flex limitedNumber-text-container">
                <p class="limitedNumber-text red-number">200/</p>
                <p class="limitedNumber-text white-number">
                  {{ orders[index1 - 1].inputValues[(index2 - 1) * 2].length }}
                </p>
              </div>
            </div>

            <div class="half-upload-set">
              <img src="@/assets/images/small-rectangle-dashes.svg" alt="" />
              <input
                type="text"
                class="text-input"
                :placeholder="placeholders[(index2 - 1) * 2 + 1]"
                v-model="orders[index1 - 1].inputValues[(index2 - 1) * 2 + 1]"
                :maxlength="200"
              />
              <div class="d-flex limitedNumber-text-container">
                <p class="limitedNumber-text red-number">200/</p>
                <p class="limitedNumber-text white-number">
                  {{
                    orders[index1 - 1].inputValues[(index2 - 1) * 2 + 1].length
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Arabic Upload -->
        <div
          class="arabic-upload me-3 ms-2 mt-5"
          v-if="orders[index1 - 1].isActive"
        >
          <img src="@/assets/images/m-rectangle-dashes.svg" alt="" />
          <p class="arabic-text1">أضف الصورة بالعربية</p>
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
            v-if="uploadedFiles[index1 - 1].arabic"
          />
          <input
            type="file"
            class="upload-input"
            accept=".jpg,.png"
            @change="handleArabicFileUpload($event, index1 - 1)"
          />
        </div>

        <!-- English Upload -->
        <div class="english-upload mt-5" v-if="orders[index1 - 1].isActive">
          <img src="@/assets/images/m-rectangle-dashes.svg" alt="" />
          <img
            src="@/assets/images/tick-circle.svg"
            alt=""
            class="tick-image2-location"
            v-if="uploadedFiles[index1 - 1].english"
          />
          <p class="english-text1">Add the picture in English</p>
          <p class="english-text2">
            max size 5 mB , dimensions 20*25
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;supported format jpg, png
          </p>
          <input
            type="file"
            class="upload-input"
            accept=".jpg,.png"
            @change="handleEnglishFileUpload($event, index1 - 1)"
          />
        </div>
      </div>

      <!-- Confirmation Button -->
      <button class="confirm-button">confirmation</button>

      <!-- Reset Button -->
      <button class="reset-button">
        <img src="@/assets/images/reset.svg" alt="reset" @click="reset" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedFiles: {
        // Stores the uploaded files for each order
        0: { arabic: null, english: null },
        1: { arabic: null, english: null },
        2: { arabic: null, english: null },
      },
      orders: [
        {
          // Data for the first order
          imageActive: require("@/assets/images/shopping-cart-white.svg"),
          imageInactive: require("@/assets/images/shopping-cart-green.svg"),
          order_title: "انتظر التسليم",
          order_description:
            "لذلك من هنا نحن على استعداد لتجهيز الطلبات وتسليمها إلى مكان إقامتك",
          isActive: false,
          inputValues: ["", "", "", ""], // Input values for the order
        },
        {
          // Data for the second order
          imageActive: require("@/assets/images/wallet-white.svg"),
          imageInactive: require("@/assets/images/wallet-green.svg"),
          order_title: "خروج الطلب",
          order_description:
            "الطلبات الموجودة في عربة التسوق الخاصة بك الآن فقط قم بتأكيدها للخروج لتكون جاهزًا للمعالجة",
          isActive: false,
          inputValues: ["", "", "", ""],
        },
        {
          // Data for the third order
          imageActive: require("@/assets/images/paper-white.svg"),
          imageInactive: require("@/assets/images/paper-green.svg"),
          order_title: "اختر القائمة",
          order_description:
            "حدد قائمة الطعام أو الشراب التي تريدها يرجى إدخالها في عربة التسوق الخاصة بك",
          isActive: true,
          inputValues: ["", "", "", ""],
        },
      ],
      placeholders: [
        // Placeholders for the input fields
        "أضف الشرح بالعربية",
        "أضف الاسم بالعربية",
        "Add an explanation in English",
        "Add the name in English",
      ],
    };
  },
  methods: {
    // Handles the file upload for the Arabic language section
    handleArabicFileUpload(event, index) {
      this.uploadedFiles[index].arabic = event.target.files[0];
    },
    // Handles the file upload for the English language section
    handleEnglishFileUpload(event, index) {
      this.uploadedFiles[index].english = event.target.files[0];
    },
    // Resets the form for the active order
    reset() {
      const activeOrderIndex = this.orders.findIndex((order) => order.isActive);

      if (activeOrderIndex !== -1) {
        this.uploadedFiles[activeOrderIndex].arabic = null;
        this.uploadedFiles[activeOrderIndex].english = null;

        this.orders[activeOrderIndex].inputValues = ["", "", "", ""];
      }
    },
    // Sets the active order when clicked
    setActiveOrder(index) {
      this.orders.forEach((order, i) => {
        order.isActive = i === index;
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=DIN+Next+LT+W23&display=swap");
.order_status {
  width: 310px;
  height: 280px;
  border-radius: 40px;
  background: #fdfdfd;
  margin: 0px 48px 0px 10px;
}
.order-image {
  float: right;
  width: 39.432px;
  height: 42px;
  margin: 48px 41px 0px 0px;
}
.order-title-active,
.order-title-inactive {
  float: right;
  margin: 122px -43px 0px 0px;
}
.order-description-active,
.order-description-inactive {
  float: right;
  margin: 15px 43px 0px 0px;
}
.order-title-active {
  color: var(--White, #fdfdfd);
  font-family: "DIN Next LT W23";
  font-size: 24px;
  font-weight: 700;
}
.order-description-active {
  width: 229px;
  color: var(--btn-text);
  text-align: right;
  font-family: "DIN Next LT W23";
  font-size: 16px;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
}
.order-title-inactive {
  color: #000;
  font-family: "DIN Next LT W23";
  font-size: 24px;
  font-weight: 700;
}
.order-description-inactive {
  color: #888;
  text-align: right;
  font-family: "DIN Next LT W23";
  font-size: 16px;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
}
.circline {
  width: 135px;
  height: 40px;
  margin: 120px 0px 0px 30px;
  border-radius: 40px;
  background: var(--second-blue-color);
}
.circline-image {
  margin: 18px 0px 0px -73px;
}
.image-horizontal_dashes {
  margin: 50px 0px 0px 40px;
  width: 1196px;
  width: 1196px;
}
.text-style {
  margin: -16px 0px 0px 15px;
  color: var(--btn-text);
  font-size: 16px;
  font-weight: 500;
}
.active {
  background-color: #1cc555;
}
.reset-button {
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: var(--second-blue-color);
  margin: 80px 0px 0px 20px;
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
  margin: -170px 0px 0px 75px;
}
.english-text2 {
  margin: 0px 0px 0px 45px;
}
.arabic-text1 {
  margin: -170px 0px 0px 115px;
}
.arabic-text2 {
  margin: 0px 0px 0px 65px;
}
.uploading {
  margin: 0px 0px 0px 0px;
}
.upload-set {
  height: 155px;
  width: 630px;
  margin: 175px 0px 0px 0px;
}
.half-upload-set {
  width: 310px;
  height: 69px;
}
.upload-input {
  position: relative;
  top: -185px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.text-input {
  position: relative;
  top: -67px;
  left: 3px;
  width: 98%;
  height: 95%;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: var(--dark-blue-color);
  color: var(--light-gray);
  padding-left: 20px;
}
.limitedNumber-text-container {
  margin: -90px 0px 0px 20px;
  position: relative;
}

::placeholder {
  text-align: center;
  color: var(--light-gray);
  font-size: 14px;
  font-weight: 500;
}
.limitedNumber-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
}
.english-upload,
.arabic-upload {
  width: 310px;
  height: 280px;
}
.tick-image1-location {
  margin: -325px 0px 0px 265px;
}
.tick-image2-location {
  margin: -210px 0px 0px -40px;
}
.red-number {
  color: #eb455f;
}
.white-number {
  color: white;
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
  margin-left: 72px;
}
</style>
