<script setup lang="ts">
import { Input } from '@/components/ui/input'
import NavComponent from '../components/NavComponent.vue'
</script>

<template>
    <NavComponent />
<Body>
    <div class="content">
        <div id="left">
            <div id="upload-button">Upload a Job Posting</div>
            <div id="craft-button">Craft Your Master Resume</div>
        </div>
        <div id="right">
            <div class="table-container">
                <h2>Your Recent Applications</h2>
                <Input class="search-input" type="email" placeholder="Search for a resume" />
                <hr class="divider">
                <div class="table">
                    <div class="table-header">
                    <div class="header-item">Posting</div>
                    <div class="header-item">Position</div>
                    <div class="header-item">Last Modified</div>
                    <div class="header-item">Resume</div>
                </div>
                <div class="table-content">
                    <div class="table-row">
                        <div class="table-data table-link">Cboe Global Markets</div>
                        <div class="table-data">Web Developer Intern</div>
                        <div class="table-data">02/15/2024</div>
                        <div class="table-data">📄</div>
                    </div>
                    <div class="table-row">
                        <div class="table-data table-link">Google</div>
                        <div class="table-data">STEP Intern</div>
                        <div class="table-data">02/14/2024</div>
                        <div class="table-data">📄</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Body>
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

.content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

#left {
    width: 40%;
    height: 100%;
    background-color: #E7E9EA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#upload-button {
    width: 60%;
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
    width: 60%;
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
    width: 60%;
    height: 100%;
    background-color: #E7E9EA;
    display: flex;
    justify-content: center;
    align-items: center;
}

.table-container {
  font-family: Arial, sans-serif;
  width: 80%;
  margin: auto;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 70%;
}

.table-container h2 {
  color: #223549;
  font-size: 40px;
  font-weight: bold;
margin-bottom: 20px;
}

.search-input {
    margin-bottom: 10px;
    width: 40%;
    background-color: #E7E9EA;
}

.divider {
    border: 1.5px solid #9C9C9C;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table-link {
    color: #0070E0;
    text-decoration: none;
}

.table-link:hover {
    text-decoration: underline;
    cursor: pointer;
}

.table-header, .table-row {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #e3e3e3;
}

.header-item, .table-data {
  padding: 10px;
  text-align: left;
}

.table-row {
  transition: background-color 0.2s ease-in-out;
}

.table-row:hover {
  background-color: #f5f5f5;
}

.resume-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
}
</style>