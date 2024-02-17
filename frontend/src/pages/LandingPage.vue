<script setup lang="ts">
import NavComponent from '../components/NavComponent.vue'
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router';

// get access to the router
const router = useRouter();

// method to navigate to the login page
const navigateToLogin = () => {
  router.push('/login');
};

// method to navigate to the sign up page
const navigateToSignUp = () => {
  router.push('/signup');
};

</script>

<template>
  <div class="custom-container">
    <NavComponent />
    <div class="content">
      <div id="left">
        <h1>Speed Up the Application Process</h1>
        <h2>Effortlessly craft tailored resumes to accelerate your career journey.</h2>
        <div class="buttons">
          <Button class="button" variant="secondary" @click="navigateToSignUp">Sign Up</Button>
          <Button class="button" variant="outline" @click="navigateToLogin">Login</Button>
        </div>
      </div>
      <div id="right">
        <img src="../assets/Blank_Resumes.svg" alt="Blank Resumes" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-container {
  margin: 0px;
  padding: 30px;
  width: 100%;
  height: 90vh;
}

.content {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.content h1 {
  font-size: 4.6rem;
  font-weight: 600;
  color: #223549;
  margin-bottom: 20px;
  line-height: 1.2;
}

.content h2 {
  font-size: 2rem;
  font-weight: 400;
  color: #223549;
  margin-bottom: 20px;
}

#left {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
}
#right {
  width: 40%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button {
  margin-right: 20px;
}
</style>