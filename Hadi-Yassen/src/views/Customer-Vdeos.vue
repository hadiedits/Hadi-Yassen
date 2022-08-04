<template>
  <div v-for="itemm in items" :key="itemm.time">
    <iframe
      style="width: 700px; height: 400px"
      v-bind:src="'https://www.youtube.com/embed/' + itemm.youtube"
    ></iframe>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    async created() {
      try {
        const res = await axios.get(
          `https://hadiedits.github.io/data/Customer-Vdeos.json`
        );
        this.items = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    data() {
      return {
        items: [],
      };
    },
  };
</script>
