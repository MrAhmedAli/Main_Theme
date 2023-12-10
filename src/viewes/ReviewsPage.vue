<template>
  <div class="container-fluid">
    <div class="d-block">
      <div class="d-flex cards1">
        <!-- Start of card1 loop -->
        <div class="card1 me-4" v-for="(card, index) in cards2" :key="index">
          <!-- Star Rating component -->
          <StarsRating :rating="card.star" class="" :width="24" :height="24" />
          <p class="descripition">{{ card.person_message }}</p>
          <div class="d-flex mt-2">
            <div class="product-image-container">
              <!-- Person image -->
              <img :src="card.person_image" alt="" class="person-image" />
            </div>
            <p class="person-name">{{ card.person_name }}</p>
          </div>
        </div>
        <!-- End of card1 loop -->
      </div>

      <!-- Horizontal Dashes image -->
      <img
        src="@/assets/images/Horizontal_dashes.svg"
        alt=""
        class="image-horizontal_dashes"
      />

      <div class="d-flex cards-scroll">
        <div class="d-flex arrow">
          <button class="scroll-button left" @click="scrollLeft">
            <!-- Left scroll arrow image -->
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
          <button class="scroll-button right" @click="scrollRight">
            <!-- Right scroll arrow image -->
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

        <ul class="cards">
          <div class="d-flex" style="text-align: center">
            <!-- Start of cardGroup loop -->
            <li
              class="card"
              v-for="(cardGroup, groupIndex) in cardGroups"
              :key="groupIndex"
            >
              <!-- Start of card loop -->
              <div
                class="d-flex details mb-5"
                v-for="(card, cardIndex) in cardGroup"
                :key="cardIndex"
              >
                <div class="d-flex details">
                  <div class="product-image-container2">
                    <!-- Person image 2 -->
                    <img
                      :src="card.person_image"
                      class="person-image2"
                      alt=""
                    />
                  </div>
                  <div class="d-block">
                    <p class="person-name2">{{ card.person_name }}</p>
                    <p class="person-message">{{ card.person_message }}</p>
                    <!-- Star Rating component 2 -->
                    <StarsRating
                      :rating="card.star"
                      class="stars-location"
                      :width="24"
                      :height="24"
                    />
                  </div>
                  <button class="add-button2">
                    <img
                      v-if="!card.added"
                      src="@/assets/images/add-square.svg"
                      @click="addProduct(card)"
                      style=""
                    />
                    <img
                      v-else
                      src="@/assets/images/trash.svg"
                      @click="deleteProduct(card)"
                      style=""
                    />
                  </button>
                </div>
              </div>
              <!-- End of card loop -->
            </li>
            <!-- End of cardGroup loop -->
          </div>
        </ul>
      </div>
      <button class="confirm-button">confirmation</button>
    </div>
  </div>
</template>

<script>
import StarsRating from "@/components/StarsRating.vue";
export default {
  components: {
    StarsRating,
  },
  data() {
    return {
      isScrollAtStart: true,
      isScrollAtEnd: false,
      cards: [
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Ahmed Raed Ezat Ajuor",
          person_message:
            "As Expected, The Food Was Delicious And Our Servers....",
          star: "5",
          added: false,
        },
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Ahmed Raed Ezat Ajuor",
          person_message:
            "As Expected, The Food Was Delicious And Our Servers....",
          star: "5",
          added: false,
        },
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Ahmed Raed Ezat Ajuor",
          person_message:
            "As Expected, The Food Was Delicious And Our Servers....",
          star: "4",
          added: false,
        },
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Ahmed Raed Ezat Ajuor",
          person_message:
            "As Expected, The Food Was Delicious And Our Servers....",
          star: "5",
          added: false,
        },
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Ahmed Raed Ezat Ajuor",
          person_message:
            "As Expected, The Food Was Delicious And Our Servers....",
          star: "3",
          added: false,
        },
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Ahmed Raed Ezat Ajuor",
          person_message:
            "As Expected, The Food Was Delicious And Our Servers....",
          star: "5",
          added: false,
        },
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Ahmed Raed Ezat Ajuor",
          person_message:
            "As Expected, The Food Was Delicious And Our Servers....",
          star: "5",
          added: false,
        },
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Ahmed Raed Ezat Ajuor",
          person_message:
            "As Expected, The Food Was Delicious And Our Servers....",
          star: "4",
          added: false,
        },
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Ahmed Raed Ezat Ajuor",
          person_message:
            "As Expected, The Food Was Delicious And Our Servers....",
          star: "5",
          added: false,
        },
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Ahmed Raed Ezat Ajuor",
          person_message:
            "As Expected, The Food Was Delicious And Our Servers....",
          star: "1",
          added: false,
        },
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Ahmed Raed Ezat Ajuor",
          person_message:
            "As Expected, The Food Was Delicious And Our Servers....",
          star: "5",
          added: false,
        },
      ],
      cards2: [
        {
          person_image: require("@/assets/images/man.svg"),
          person_name: "Annisa Friya",
          person_message:
            "“As expected, the food was delicious and our servers were so friendly and helpful – we loved them! It was a delightful experience all round”",
          star: "5",
        },
        {
          person_image: require("@/assets/images/cheif-man.svg"),
          person_name: "Annisa Friya",
          person_message:
            "“As expected, the food was delicious and our servers were so friendly and helpful – we loved them! It was a delightful experience all round”",
          star: "3",
        },
        {
          person_image: require("@/assets/images/cheif-man.svg"),
          person_name: "Annisa Friya",
          person_message:
            "“As expected, the food was delicious and our servers were so friendly and helpful – we loved them! It was a delightful experience all round”",
          star: "5",
        },
      ],
    };
  },
  methods: {
    // Update the scroll status based on the position of the cards container
    updateScrollStatus() {
      const cardsContainer = document.querySelector(".cards");
      if (cardsContainer) {
        this.isScrollAtStart = cardsContainer.scrollLeft === 0;
        const maxScrollPosition =
          cardsContainer.scrollWidth - cardsContainer.clientWidth;
        this.isScrollAtEnd = cardsContainer.scrollLeft >= maxScrollPosition;
      }
    },
    // Scroll the cards container to the left
    scrollLeft() {
      const cardsContainer = document.querySelector(".cards");
      const cardWidth = cardsContainer.querySelector(".card").clientWidth; // Get the width of a single card
      const scrollAmount = cardWidth + 10; // Adjust this value based on your card spacing

      // Calculate the new scroll position after scrolling to the left
      const newScrollPosition = Math.max(
        cardsContainer.scrollLeft - scrollAmount,
        0
      );
      cardsContainer.scrollLeft = newScrollPosition;
    },

    // Scroll the cards container to the right
    scrollRight() {
      const cardsContainer = document.querySelector(".cards");
      const cardWidth = cardsContainer.querySelector(".card").clientWidth; // Get the width of a single card
      const scrollAmount = cardWidth + 10; // Adjust this value based on your card spacing

      // Calculate the maximum scroll position to prevent scrolling too far
      const maxScrollPosition =
        cardsContainer.scrollWidth - cardsContainer.clientWidth;
      // Calculate the new scroll position after scrolling to the right
      const newScrollPosition = Math.min(
        cardsContainer.scrollLeft + scrollAmount,
        maxScrollPosition
      );
      cardsContainer.scrollLeft = newScrollPosition;
    },

    // Toggle the state of adding or removing a product
    addProduct(card) {
      card.added = !card.added;
    },

    // Toggle the state of adding or removing a product
    deleteProduct(card) {
      card.added = !card.added;
    },
  },
  mounted() {
    // Call the updateScrollStatus method on mounted
    this.updateScrollStatus();
    // Add the scroll event listener to update scroll status
    const cardsContainer = document.querySelector(".cards");
    cardsContainer.addEventListener("scroll", this.updateScrollStatus);
  },
  beforeUnmount() {
    // Clean up the scroll event listener on unmount
    const cardsContainer = document.querySelector(".cards");
    cardsContainer.removeEventListener("scroll", this.updateScrollStatus);
  },
  computed: {
    // Group the cards into cardGroups of a specified size
    cardGroups() {
      const groupSize = 3; // Number of cards to display in each group
      const groups = [];

      for (let i = 0; i < this.cards.length; i += groupSize) {
        groups.push(this.cards.slice(i, i + groupSize));
      }

      return groups;
    },
  },
};
</script>

<style scoped>
.card1 {
  padding: 40px;
  width: 330px;
  height: 268px;
  border-radius: 15px;
  border: 2px solid rgba(229, 229, 229, 0.5);
  background: var(--White, #fdfdfd);
  box-shadow: 0px 24px 80px 0px rgba(0, 0, 0, 0.05);
}
.descripition {
  align-self: stretch;
  color: var(--Black, #333);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  margin-top: 15px;
}
.product-image-container {
  border-radius: 50%;
  width: 56px;
  height: 56px;
}
.person-image {
  border-radius: 50%;
  width: 56px;
  height: 56px;
}
.person-name {
  color: var(--Black, #333);
  font-size: 20px;
  font-weight: 500;
  margin: 12px 0px 15px 16px;
}
.image-horizontal_dashes {
  margin: 50px 0px 0px 40px;
  width: 1196px;
}
.cards1 {
  margin: 60px 0px 0px 170px;
}
.details {
  width: 634.5px;
  height: 90px;
}
.product-image-container2 {
  border-radius: 15px;
  width: 90px;
  height: 111px;
}
.person-image2 {
  width: 90px;
  height: 111px;
  border-radius: 15px;
}
.cards {
  width: 1300px;
  display: flex;
  padding: 24px 0px;
  list-style: none;
  overflow-x: scroll;
}
.card {
  /* because of making the scroller appear on the top and rotate is done (on cards-scroll class),
  we need to rotate the card div so that not every thing appear reversed*/
  transform: rotateX(180deg);
  border-radius: 12px;
  scroll-snap-align: start;
  transition: all 0.2s;
  background-color: transparent;
  width: 634.5px;
  height: 300px;
  margin-top: 65px;
  /* overflow-y: auto;*/ /* Enable vertical scrolling for taller content */
}
.card::-webkit-scrollbar {
  width: 6px;
}
.card::-webkit-scrollbar-thumb,
.card::-webkit-scrollbar-track {
  border-radius: 92px;
}
.card::-webkit-scrollbar-thumb {
  background: var(--second-blue-color);
}
.card::-webkit-scrollbar-track {
  background: var(--thumb);
}
.card:not(:last-child) {
  margin-right: 10px;
}
.cards::-webkit-scrollbar {
  height: 12px;
  display: "";
}
.cards::-webkit-scrollbar-thumb,
.cards::-webkit-scrollbar-track {
  border-radius: 92px;
  width: 74px;
  margin: 0px 300px 0px 300px;
}
.cards::-webkit-scrollbar-thumb {
  background: var(--second-blue-color);
}
.cards::-webkit-scrollbar-track {
  background: #212139;
}
.cards-scroll {
  width: 1270px;
  margin: 60px 0 0 0;
  background-color: transparent;
  /* to make the scroller appear on the top instead of bottom, rotate is done*/
  transform: rotateX(180deg);
}
.scroll-button {
  position: absolute;
  top: 580px;
  background: none;
  border: none;
  cursor: pointer;
}
.scroll-button.left {
  left: 10px;
}
.scroll-button {
  margin: -165px 0px 0px 270px;
}
.scroll-button.right {
  left: 720px;
}
.left-arrow,
.right-arrow {
  cursor: pointer;
  position: relative;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
#right-arrow-img {
  transform: translate(-50%, -50%) rotate(0deg);
}
#left-arrow-img {
  transform: translate(-50%, -50%) rotate(180deg);
}
.arrow {
  position: relative;
}
.person-name2 {
  color: var(--second-blue-color);
  font-size: 24px;
  font-weight: 500;
}
.person-message {
  color: var(--btn-text);
  font-size: 12px;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  margin: -17px 0px 0px 55px;
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
  margin: 63px 0px 0px 128px;
}
.stars-location {
  margin: 8px 0px 0px -100px;
}
.add-button2 {
  background: transparent;
  margin: 31px 0px 0px 140px;
  width: 24px;
  height: 24px;
}
</style>
