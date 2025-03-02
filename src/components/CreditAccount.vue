<template>
  <div>
    <h2>Credit Account</h2>
    <input v-model="amount" placeholder="Enter credit amount" />
    <button @click="creditAccount">Credit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0
    };
  },
  methods: {
    creditAccount() {
      fetch('/data.json')
        .then(response => response.json())
        .then(data => {
          data.balance += parseFloat(this.amount);
          return fetch('/data.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        })
        .then(() => {
          alert('Amount credited successfully');
        });
    }
  }
}
</script>
