<template>
    <div>
        <svg width="1000" height="500">
            <rect class="mario" width="50" height="100" stroke="10" v-bind:x="xPos"  y="400"></rect>
            <rect class="luigi" width="50" height="100" stroke="10" x="800" y="400" ></rect>
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
                xPos:700
            }
        },
        created() {
         document.addEventListener('keydown', event => this.handleUserAction(event))
         }
        ,methods:{
                nextFrame(){

                },
            handleUserAction(event){
                if(event.keyCode === 32){
                    this.xPos++;
                }
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