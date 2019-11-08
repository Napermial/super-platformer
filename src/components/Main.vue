<template>
    <div class="Main">
        <h1>SUPRE-A PLADFROMA GME</h1>
        <h2>TRY-A NUW FREE</h2>
        <audio id="music" loop autoplay>
            <source src="../audio/title_music.mp3" type="audio/mpeg">
        </audio>
        <div>
            <label>
                <input placeholder="PLAYER NAME" v-model="playerName">
            </label>
        </div>
        <div>
            <label> SELECT-A MARIO
                <input type="radio" v-model="isMario" value="MARIO">
            </label>
            <svg x="100" y="50">
                <rect width="50" height="100" style="fill: red" x="0" y="0"></rect>
            </svg>
            <label> SELECT-A LUIGI
                <input type="radio" v-model="isMario" value="LUIGI">
            </label>
            <svg x="100" y="50">
                <rect width="50" height="100" style="fill: green" x="0" y="0"></rect>
            </svg>
        </div>
        <button v-on:click="sendCredentials">PLAY</button>
        <h2>Beat-a some hy scorez</h2>
        <div v-if="highScores !== null">
            <h3 v-for="score in highScores" v-bind:key="score.id">
                {{score.score}}
            </h3>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Main",
        data() {
            return {
                playerName: null,
                isMario: null,
                highScores: null
            }
        },
        methods: {
            sendCredentials() {
                localStorage.setItem('isMario', this.isMario);
                localStorage.setItem('player', this.playerName);
                axios.post('http://localhost:8762/player/start-game', {
                    'name': this.playerName, 'character': this.isMario
                });
                this.$router.push('/game')
            }
        }, mounted() {
            document.getElementById('music').play()
        }, beforeMount() {
            axios.get('http://localhost:8762/player/all-score')
            // eslint-disable-next-line no-console
                .then(res => this.highScores = res.data)
        }
    }
</script>

<style scoped>

</style>