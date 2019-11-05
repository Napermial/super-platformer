<template>
    <div>
        <svg width="1000" height="500">
            <rect class="mario" width="50" height="100" stroke="10" x="50" v-bind:y="playerPos"></rect>
            <rect class="luigi" width="50" height="100" stroke="10" v-bind:x="obstaclePos" y="400"></rect>
            <line class="line" x1="0" y1="500" x2="1000" y2="500"></line>
            <circle class="sun" r="50" cx="100" cy="100"></circle>
            <rect class="enemy" height="50" width="50" x="600" y="450"></rect>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "Game",
        data() {
            return {
                speed: 1,
                playerPos: 400,
                playerSpeed: 63,
                isJumping: false,
                isGoingUpwards: false,
                playerJumpStrength: 200,
                obstaclePos: 800
            }
        },
        created() {
            document.addEventListener('keydown', event => this.handleUserAction(event));
            this.start()
        }
        , methods: {
            nextFrame() {
                this.obstaclePos -= this.speed;
                this.moveUser()
            },
            handleUserAction(event) {
                if (event.keyCode === 32) {
                    this.isJumping = true;
                    // eslint-disable-next-line no-console
                    console.log("SPAAACE")

                }
            },
            moveUser() {
                if (this.isJumping) {
                    if (this.playerSpeed - 20 < 0) {
                        this.playerSpeed = 0;
                        this.isGoingUpwards = false
                    } else {
                        this.playerSpeed = this.playerSpeed - 20 / 25
                    }
                    if (this.isGoingUpwards) {
                        this.playerPos = this.playerPos - this.playerSpeed
                    } else {
                        this.playerPos = this.playerPos + this.playerSpeed
                    }
                    this.playerPos > 300 ? this.isGoingUpwards= true : this.isGoingUpwards= false
                } else {
                    this.isGoingUpwards = true;
                    this.playerSpeed = 63
                }
            },
            start() {
                setInterval(this.nextFrame, 40);
            }
        }
    }
</script>

<style scoped>
    .mario {
        fill: red;
    }

    .luigi {
        fill: green;
    }

    .line {
        stroke: #2c3e50;
        stroke-width: 2;
    }

    .sun {
        fill: yellow;
    }

    .enemy {
        fill: blue;
    }
</style>