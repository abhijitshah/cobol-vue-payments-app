<template>
  <div>
    <h2>Debit Account</h2>
    <input v-model="amount" placeholder="Enter debit amount" />
    <button @click="debitAccount">Debit</button>
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
    debitAccount() {
      fetch('/data.json')
        .then(response => response.json())
        .then(data => {
          if (data.balance >= parseFloat(this.amount)) {
            data.balance -= parseFloat(this.amount);
            return fetch('/data.json', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
          } else {
            alert('Insufficient funds');
          }
        })
        .then(() => {
          alert('Amount debited successfully');
        });
    }
  }
}
</script>
