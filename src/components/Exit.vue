<template>
  <div>
    <h2>Exiting the program. Goodbye!</h2>
  </div>
</template>

<script>
export default {
  name: 'ExitComponent',
  created() {
    setTimeout(() => {
      window.close();
    }, 2000);
  }
}
</script>