<template>
  <div class="page-container">
    <h1>Add Transaction</h1>
    <div class="input-container flex-col">
      <FormTextInput
        display="Transaction Name"
        name="transactionName"
        placeholder="Video Game Purchased" />
      <FormTextInput
        display="Transaction Amount"
        name="transactionAmount"
        placeholder="$0.00" />
      <FormDropBox display="Transaction Type" name="transactionType" />
      <div class="flex-row">
        <FormButton displayValue="Back"></FormButton>
        <FormButton displayValue="Submit"></FormButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormTextInput from '@/components/form/FormTextInput.vue';
import FormButton from '@/components/form/FormButton.vue';
import FormDropBox from '@/components/form/FormDropBox.vue';

export default defineComponent({
  name: 'AddTransactionView',
  components: { FormTextInput, FormButton, FormDropBox },
});
</script>

<style lang="scss" scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
}

.page-container {
  background-color: #202020;
  border-radius: 10px;
  width: 30%;
  margin: auto;
  position: relative;
  top: 150px;
}

.input-container {
  width: 80%;
  margin: 20px auto 0 auto;
}
</style>
