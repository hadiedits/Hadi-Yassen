<template>
  <router-view />
  <CustomerVdeos />
</template>
<script>
  import CustomerVdeos from "././views/Customer-Vdeos.vue";
  export default {
    name: "App",
    components: { CustomerVdeos },
  };
</script>
