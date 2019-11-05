<template>
    <div>
        <svg width="1000" height="500">
            <rect class="mario" width="50" height="100" stroke="10" x="50"  v-bind:y="playerPos"></rect>
            <rect class="luigi" width="50" height="100" stroke="10" v-bind:x="obstaclePos" y="400" ></rect>
            <line class="line" x1="0" y1="500" x2="1000"  y2="500"></line>
            <circle class="sun" r="50" cx="100" cy="100" ></circle>
            <rect class="enemy" height="50" width="50" x="600" y="450"  ></rect>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "Game",
        data() {
            return {
                speed: 1,
                playerPos:400,
                playerWeight: 80,
                playerSpeed:1,
                playerJumpStrength:200,
                gravity:9.89,
                playerJumping:false,
                obstaclePos:800
            }
        },
        created() {
         document.addEventListener('keydown', event => this.handleUserAction(event));
             this.start()
         }
        ,methods:{
                nextFrame(){
                    this.obstaclePos -= this.playerSpeed
                },
            handleUserAction(event){
                if(event.keyCode === 32){
                    this.playerPos -=20
                }
            },
            start(){
                setInterval(this.nextFrame, 40);
            }
        }
    }
</script>

<style scoped>
    .mario{
        fill: red;
    }
    .luigi{
        fill: green;
    }
    .line{
        stroke: #2c3e50;
        stroke-width: 2;
    }
    .sun{
        fill: yellow;
    }
    .enemy{
        fill: blue;
    }
</style>