<template>
    <div>
      <h2>Error Boundary Test</h2>
      <button @click="throwError">Throw Error</button>
    </div>
  </template>
  
  <script>
  export default {
    errorCaptured(err) {
      console.error('Error caught:', err);
      alert('An error occurred!');
      return false;
    },
    methods: {
      throwError() {
        throw new Error('Test Error');
      }
    }
  };
  </script>
  