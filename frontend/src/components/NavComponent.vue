<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router';

// get access to the router
const router = useRouter();

// method to navigate back to the landing page whenever the logo is clicked
const navigateToLanding = () => {
  router.push('/');
};
</script>

<template>
    <div class="navbar">
        <div id="logo_section">
            <img @click="navigateToLanding" src="../assets/QuickTailor_Logo.svg" alt="Name" id="navbar_logo"/>
            <h3 @click="navigateToLanding">uickTailor</h3>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    position: fixed;
    top: 30px;
    left: 40px;
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
    width: 72px;
    height: 72px;
}

#navbar_logo:hover {
    cursor: pointer;
}
</style>
