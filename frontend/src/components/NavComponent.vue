<script setup lang="ts">
</script>

<template>
    <div class="navbar">
        <div class="navbar_logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlIie204qmN_rjGNraW-n0zBMhWNnLpHtf6hP3ylxTA&s" alt="Name" />
        </div>
        <div class="buttons">
            <v-btn class="button" color="primary">Login</v-btn>
            <v-btn class="button" color="accent">Sign Up</v-btn>
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
    background-color: #f8f9fa;
}

.navbar_logo img {
    padding: 10px;
    width: 50px;
    height: 50px;
}
.buttons {
    padding: 10px;
    display: flex;
    gap: 10px;
}
</style>
