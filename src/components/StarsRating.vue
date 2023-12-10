<template>
  <div>
    <svg
      v-for="i in 5"
      :key="i"
      :width="width +'px'"
      :height="height +'px'"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="{
        filled: i <= fullStars,
        'half-filled': showHalfStar(i),
        'none-filled': i > fullStars + halfStars,
      }"
      style="margin-right: 7px;"
    >
      <path
        d="M13.7299 3.51001L15.4899 7.03001C15.7299 7.52001 16.3699 7.99001 16.9099 8.08001L20.0999 8.61001C22.1399 8.95001 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95001 3.89991 8.61001L7.08991 8.08001C7.61991 7.99001 8.25991 7.52001 8.49991 7.03001L10.2599 3.51001C11.2199 1.60001 12.7799 1.60001 13.7299 3.51001Z"
        :fill="getFillColor(i).fillColor"
        :stroke="getFillColor(i).strokeColor"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      default: 20, // Show maximum 5 stars
    },
    height: {
      type: Number,
      default: 20, // Show maximum 5 stars
    },
  },
  computed: {
    fullStars() {
      return Math.floor(this.rating); // Compute the number of full stars
    },
    halfStars() {
      // Check if there should be a half star
      const decimalPart = this.rating - Math.floor(this.rating);
      return decimalPart >= 0.25 && decimalPart < 0.75 ? 1 : 0;
    },
  },
  methods: {
    showHalfStar(index) {
      // Check if the star at index should be half-filled
      return (
        this.rating - Math.floor(this.rating) >= 0.75 &&
        index === Math.floor(this.rating) + 1
      );
    },
    getFillColor(index) {
      const fillColor =
        index <= this.fullStars ? "var(--orange-color)" : "transparent"; // Filled and unfilled stars color
      const strokeColor =
        index > this.fullStars + this.halfStars ? "#FE9518" : "none"; // Stroke color for unfilled stars

      return {
        fillColor,
        strokeColor,
      };
    },
  },
  watch: {
    rating(newValue) {
      this.$emit("average-rating", newValue);
      console.log("average-rating event emitted:", newValue);
    },
  },
};
</script>

<style scoped>
.filled {
  fill: var(--orange-color);
}

.half-filled {
  clip-path: inset(0 50% 0 0);
}

.none-filled {
  fill: #1e1e1e;
}
</style>
