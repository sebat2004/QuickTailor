<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import NavComponent from '../components/NavComponent.vue'
</script>

<template>
<NavComponent />
<body>
  <div class="container">
    <img src="../assets/QuickTailor_Logo.svg" alt="logo" id="logo" />
    <h1>Welcome Back!</h1>
    <h2>Enter to start tailoring.</h2>
    <form>
      <p><span>Email</span> <span style="color: red;">*</span></p>
      <Input class="input" disabled type="email" placeholder="Enter your email address" />
      <p><span>Password</span> <span style="color: red;">*</span></p>
      <Input class="input" disabled type="password" placeholder="Enter password" />
      <Button class="button" variant="secondary" type="submit">Login</Button>
    </form>

  </div>
  <div id="bottom-bar"></div>
</body>

</template>

<style scoped>
body {
  background-color: #E7E9EA;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  margin: 0;
  padding: 0;
  color: #223549;
}

.container {
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 60px 80px;
  max-width: 550px;
  height: 700px;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

#bottom-bar {
  background-color: #223549;
  height: 200px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 0;
}

#logo {
  width: 120px;
  align-self: flex-start;
  height: auto;
  display: block;
  margin-left: -17px;
}

h1 {
  font-size: 48px;
  margin: 0;
  line-height: 0.9;
  font-weight: 600;
  margin-bottom: 5px;
}

h2 {
  font-size: 26px;
  margin: 0;
  margin-bottom: 30px;
}

.button {
  margin-top: 20px;
  width: 100%;
}

p {
  margin-bottom: 5px;
}

.input {
  margin-bottom: 15px;
}
</style>