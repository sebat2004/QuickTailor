<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
    <div class="navbar">
        <div class="logo_section">
            <img src="../assets/QuickTailor_Logo.svg" alt="Name" class="navbar_logo"/>
            <h3>uickTailor</h3>
        </div>

        <div class="buttons">
            <Button variant="outline">Login</Button>
            <Button variant="secondary">Sign Up</Button>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.logo_section {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.logo_section h3 {
    font-size: 2.2rem;
    font-weight: 500;
    color: #223549;
    transform: translate(-10px, 8px);
}

.navbar_logo {
    width: 72px;
    height: 72px;
}
.buttons {
    display: flex;
    gap: 10px;
}
</style>
