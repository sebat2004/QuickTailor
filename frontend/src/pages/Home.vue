<script setup lang="ts">
import NavComponent from '../components/NavComponent.vue'

</script>

<template>
  <div class="container">
    <NavComponent />
    <div class="container">
      <div class="left">
        <h1>Speed Up the Application Process</h1>
        <h2>Effortlessly craft tailored resumes to accelerate your career journey.</h2>
      </div>
      <div class="right">
        <img src="../assets/Blank_Resumes.svg" alt="Blank Resumes" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #f8f9fa;
}

.left, .right {
  padding: 40px;
}
.left {
  width: 60%;
}
.right {
  width: 40%;
}
</style>
