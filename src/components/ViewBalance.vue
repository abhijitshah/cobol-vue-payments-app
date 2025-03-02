<template>
  <div>
    <h2>Current Balance: {{ balance }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: 0
    };
  },
  created() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        this.balance = data.balance;
      });
  }
}
</script>
