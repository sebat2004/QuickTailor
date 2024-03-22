<script setup lang="ts">
    import NavComponent from '../../components/Navbar.vue'
    import ApplicationTable from './components/ApplicationTable.vue';
</script>

<template>
    <NavComponent />
    <body>
        <div class="content">
            <div id="left">
                <div id="upload-button">Upload a Job Posting</div>
                <div id="craft-button">Craft Your Master Resume</div>
            </div>
            <div id="right">
                <div class="table-container">
                    <h2>Your Recent Applications</h2>
                    <ApplicationTable />
                </div>
            </div>
        </div>
    </body>
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

.search-input {
    margin-bottom: 10px;
    width: 40%;
    background-color: #E7E9EA;
}

.resume-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
}
</style>