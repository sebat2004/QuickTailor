<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navbar from '../../components/Navbar.vue'
import { useRouter } from 'vue-router'

// get access to the router
const router = useRouter()

// method to navigate to the login page
const navigateToHome = () => {
    router.push('/home')
}

// method to navigate to the sign up page
const navigateToSignUp = () => {
    router.push('/signup')
}
</script>

<template>
    <Navbar position="fixed" color="#E7E9EA" />
    <div class="login-container">
        <div class="form-container">
            <img src="../../assets/QuickTailor_Logo.svg" alt="logo" id="logo" />
            <h1>Welcome Back!</h1>
            <h2>Enter to start tailoring.</h2>
            <form>
                <p><span>Email</span> <span style="color: red">*</span></p>
                <Input class="input" type="email" placeholder="Enter your email address" />
                <p><span>Password</span> <span style="color: red">*</span></p>
                <Input class="input" type="password" placeholder="Enter password" />
                <Button class="button" variant="secondary" type="submit" @click="navigateToHome">Login</Button>
                <p>
                    <span>Don't have an account yet? </span>
                    <span id="sign-up-text" @click="navigateToSignUp">Sign Up</span>
                </p>
            </form>
        </div>
        <div id="bottom-bar"></div>
    </div>
</template>

<style scoped>
.login-container {
    background-color: #e7e9ea;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
    margin: 0;
    padding: 0;
    color: #223549;
}

.form-container {
    background-color: white;
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 60px 80px;
    width: 550px;
    height: 650px;
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
    margin-bottom: 10px;
}

p {
    margin-bottom: 5px;
}

.input {
    margin-bottom: 15px;
}

#sign-up-text {
    color: #3698ff;
}

#sign-up-text:hover {
    cursor: pointer;
}

@media (max-width: 1060px) {
    .form-container {
        height: 590px;
    }

    #logo {
        width: 90px;
    }

    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 22px;
    }
}

@media (max-width: 540px) {
    .form-container {
        height: 100vh;
        border-radius: 0;
        width: 100%;
        padding: 40px 30px;
    }

    #logo {
        width: 80px;
    }

    h1 {
        font-size: 36px;
    }

    h2 {
        font-size: 20px;
    }
}
</style>
