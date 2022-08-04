<template>
  <div class="3D-Vdeos"></div>
  <hi>pr</hi>
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
