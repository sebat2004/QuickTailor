<script setup lang="ts">
import { ref } from 'vue'

// Types
interface Application {
    name: string
    date: string
}

const applications = ref<Application[]>()
const props = defineProps(['search']);

let apiResponse;
// Simulate backend API call
// TODO: Connect to backend API
apiResponse = [
    { name: 'Cboe Global Markets', date: '02/15/2024' },
    { name: 'Google', date: '02/15/2024' },
    { name: 'Freddie Mac', date: '02/15/2024' },
    { name: 'Amazon', date: '02/15/2024'}
]



// Filter api response based on search query
// TODO: Filter with fuzzy searching
if (props.search) {
    apiResponse = apiResponse.filter((application) => application.name.toLowerCase().includes(props.search.toLowerCase()))
}
applications.value = apiResponse;
</script>

<template>
    <table class="table">
        <thead>
            <tr class="table-header">
                <th class="pos-header header-item">Company</th>
                <th class="header-item">Date Applied</th>
                <th class="header-item">Resume</th>
            </tr>
        </thead>
        <template v-if="applications">
            <tbody v-for="(application, index) in applications">
                <tr v-if="index >= 1" class="row-divider"></tr>
                <tr class="table-row">
                    <td class="table-data table-link">{{ application.name }}</td>
                    <td class="table-data">{{ application.date }}</td>
                    <td class="table-data">📄</td>
                </tr>
            </tbody>
        </template>
        <tbody v-if="applications && applications.length === 0" class="table-empty">
            <tr>
                <td>No applications found :(</td>
            </tr>
        </tbody>
        <template v-if="!applications">
            <tbody v-for="index in 4" class="loading-container">
                <tr :key="index" v-if="index > 1" class="row-divider"></tr>
                <tr :key="index" class="loading-row animated-background"></tr>
            </tbody>
        </template>        
    </table>

    <table v-if="!applications"></table>
</template>

<style>
table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

.pos-header {
    width: 38%;
}

.table-link {
    color: #0070e0;
    text-decoration: none;
    width: 30%;
}

.table-link:hover {
    text-decoration: underline;
    cursor: pointer;
}

.header-item,
.table-data {
    padding: 10px;
    text-align: left;
}

.table-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 15px;
    padding: 0 10px;
}

tbody {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
}

thead {
    display: flex;
}

.table-row:hover {
    background-color: rgb(241, 241, 241);
    transition: 0.1s ease-in;
}

.table-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
}

.table-empty td {
    font-size: 20px;
    color: #595959;
}

.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: sticky;
    top: 0;
    padding: 0 10px;
    background-color: white;
    border-bottom: 2px solid #bdbdbd;
    padding-bottom: 5px;
}

.row-divider {
    border: 1px solid #bdbdbd;
    margin-bottom: 2px;
}

.loading-row {
    width: 100%;
    height: 40px;
    border-radius: 5px;
}

.loading-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}

@keyframes placeHolderShimmer {
    0% {
        background-position: -800px 0;
    }
    100% {
        background-position: 800px 0;
    }
}

.animated-background {
    animation-duration: 3.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background-color: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: relative;
}

@media (max-width: 800px) {
    .pos-header {
        width: 50%;
    }
    .table-link {
        width: 40%;
    }
    .table-header th {
        font-size: 0.8rem;
    }
    .header-item,
    .table-data {
        font-size: 0.8rem;
    }
}

</style>
