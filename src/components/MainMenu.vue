<template>
  <div>
    <h1>Account Management System</h1>
    <button @click="navigate('view-balance')">View Balance</button>
    <button @click="navigate('credit-account')">Credit Account</button>
    <button @click="navigate('debit-account')">Debit Account</button>
    <button @click="navigate('exit')">Exit</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigate(route) {
      this.$router.push({ name: route });
    }
  }
}
</script>
