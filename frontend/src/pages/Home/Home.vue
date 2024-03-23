<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import ApplicationTable from './components/ApplicationTable.vue'
import { Input } from '@/components/ui/input'
import { ref } from 'vue'

const search = ref(''); // search query

</script>

<template>
    <div class="content">
        <Navbar color="#E7E9EA" />
        <div class="home-body">
            <div id="left">
                <div id="upload-button">Upload a Job Posting</div>
                <div id="craft-button">Craft Your Master Resume</div>
            </div>
            <div id="right">
                <div class="table-container">
                    <div class="table-caption">
                        <h2>Your Recent Applications</h2>
                        <Input v-model="search" class="search-input" type="search" placeholder="Search company name..." />
                    </div>
                    <ApplicationTable :key="search" :search="search" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e7e9ea;
}

#left {
    width: 450px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#upload-button {
    width: 70%;
    height: 100px;
    background-color: #223549;
    color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#craft-button {
    width: 70%;
    height: 100px;
    background-color: white;
    color: #223549;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#right {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.search-input {
    margin-bottom: 10px;
    width: 40%;
    background-color: #e7e9ea;
}

.table-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    background: white;
    padding: 40px 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 90%;
    width: 90%;
}

.table-container h2 {
    color: #223549;
    font-size: 26px;
    font-weight: 600;
}

.table-caption {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #7f7f7f;
    padding: 10px 20px;
}

.table-caption h2 {
    margin: 0;
    width: 40%;
    text-align: center;
}

.search-input {
    width: 50%;
    border-radius: 10px;
    border: 0.5px solid #223549;
}

.home-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
}

@media (max-width: 900px) {
    #right {
        display: none;
    }
    
    #left {
        width: 100%;
        margin-top: 30%;
        justify-content: normal;
        align-items: center;
    }
 
    #upload-button {
        font-size: 1.2rem;
        width: 50%;
    }

    #craft-button {
        font-size: 1.2rem;
        width: 50%;
    }
}
</style>
