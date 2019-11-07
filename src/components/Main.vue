<template>
    <div class="Main">
        <h1>SUPRE-A PLADFROMA GME</h1>
        <h2>TRY-A NUW FREE</h2>
        <div>
            <input placeholder="PLAYER NAME" v-bind="playerName">
        </div>
        <div>
            <label>SELECT-A MARIO</label>
            <input type="radio" name="mario">
            <svg x="100" y="50">
                <rect  width="50" height="100" style="fill: red" x="0" y="0"></rect>
            </svg>
            <label>SELECT-A LUIGI</label>
            <input type="radio" name="luigi">
            <svg x="100" y="50">
                <rect  width="50" height="100" style="fill: green" x="0" y="0"></rect>
            </svg>
        </div>
        <button v-on:click="sendCredentials">PLAY</button>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Main",
        data() {
            return {
                playerName:null
            }
        },
        methods: {
            sendCredentials(){
                axios.post()
            }
        }
    }
</script>

<style scoped>

</style>