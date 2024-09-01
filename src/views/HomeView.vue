<template>
  <div class="home">
    <DefaultTemplate />
  </div>
</template>

<script>
// @ is an alias to /src
import DefaultTemplate from "@/components/DefaultTemplate.vue";

export default {
  name: "HomeView",
  //Add Components Below.
  components: {
    DefaultTemplate,
  },
};
</script>
