<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import ApplicationTable from './components/ApplicationTable.vue'
import { Input } from '@/components/ui/input'
import { ref } from 'vue'

const search = ref('') // search query
</script>

<template>
    <div class="content">
        <Navbar color="#E7E9EA" />
        <div class="home-body">
            <div class="actions-container">
                <button id="upload-button">Upload a Job Posting</button>
                <button id="craft-button">Craft Your Master Resume</button>
            </div>
            <div class="table-container">
                <div class="table-caption">
                    <h2>Past Job Applications</h2>
                    <Input v-model="search" class="search-input" type="search" placeholder="Search..." />
                </div>
                <ApplicationTable :key="search" :search="search" />
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

.home-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 40px 0;
}

.actions-container {
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8%;
    align-items: center;
    margin-bottom: 30px;
}

#upload-button {
    height: 80px;
    background-color: #223549;
    color: white;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 0 8%;
    font-weight: 600;
}

#craft-button {
    height: 80px;
    padding: 0 7%;
    background-color: white;
    color: #223549;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-weight: 600;
}

.search-input {
    margin-bottom: 10px;
    background-color: #e7e9ea;
    height: 35px;
    width: 60%;
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
    width: 70%;
}

.table-container h2 {
    color: #223549;
    font-weight: 600;
}

.table-caption {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #7f7f7f;
    padding: 10px 30px;
    text-align: center;
}

.table-caption h2 {
    margin-right: 10px;
    width: 60%;
    text-align: left;
    font-size: 1.7rem;
}

.search-input {
    width: 50%;
    border-radius: 10px;
    border: 0.5px solid #223549;
}

@media (max-width: 1000px) {
    .actions-container {
        margin-bottom: 20px;
    }

    .table-container {
        width: 80%;
        padding: 20px 20px;
    }

    .table-caption h2 {
        text-align: left;
        margin-left: 20px;
        font-size: 1.2rem;
        margin-right: 0px;
    }

    .table-caption {
        gap: 50px;
        padding: 10px 0px;
    }

    .actions-container {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    #upload-button {
        height: 65px;
        padding: 0 5%;
        background-color: #223549;
        font-size: 0.8rem;
        text-align: center;
        color: white;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    #craft-button {
        height: 65px;
        padding: 0 8%;
        font-size: 0.8rem;
    }
}

@media (max-width: 500px) {
    .actions-container {
        margin-bottom: 10px;
    }

    .table-container {
        width: 95%;
        padding: 20px 10px;
    }

    .table-caption h2 {
        font-size: 1rem;
    }

    .table-caption {
        gap: 20px;
        padding: 10px 0px;
    }

    .search-input {
        width: 50%;
        height: 30px;
    }

    .actions-container {
        width: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    #upload-button {
        height: 50px;
        padding: 0 5%;
        font-size: 0.7rem;
    }

    #craft-button {
        height: 50px;
        padding: 0 5%;
        font-size: 0.7rem;
    }
}
</style>
