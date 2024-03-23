<script setup lang="ts">
import { useRouter } from "vue-router";
const props = defineProps(["color", "position"]);

// get access to the router
const router = useRouter();

// navigation methods
const navigateToLanding = () => {
  router.push("/");
};

const navigateToAbout = () => {
  router.push("/about");
};
</script>

<template>
  <div
    class="navbar"
    :style="`--element-color: ${props.color}; --position: ${props.position}`"
  >
    <div id="logo_section">
      <img
        @click="navigateToLanding"
        src="../assets/QuickTailor_Logo.svg"
        alt="Name"
        id="navbar_logo"
      />
      <h3 @click="navigateToLanding">uickTailor</h3>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  position: var(--position);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--element-color);
  padding: 20px 30px;
}

#logo_section {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#logo_section h3 {
  font-size: 2.2rem;
  font-weight: 500;
  color: #223549;
  transform: translate(-10px, 8px);
}

#logo_section h3:hover {
  cursor: pointer;
}

#navbar_logo {
  width: 65px;
  height: 65px;
}

#navbar_logo:hover {
  cursor: pointer;
}
</style>
