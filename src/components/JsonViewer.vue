<template>
  <div class="json-viewer listings-scroll overflow-auto h-full">
    <pre class="">{{ jsonCode }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    jsonCode: String,
  },
  created() {
    console.log("Received jsonCode:", this.jsonCode);
  },
};
</script>

<style scoped>
.json-viewer {
  padding: 16px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: auto;
  font-family: monospace;
}
</style>
