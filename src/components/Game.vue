<template>
    <div>
        <svg width="1000" height="500">
            <rect class="player" v-bind:fill="isMario" width="50" height="100" stroke="10" x="50" v-bind:y="playerPos"></rect>
            <line class="line" x1="0" y1="500" x2="1000" y2="500"></line>
            <circle class="sun" r="50" cx="200" cy="200"></circle>
            <rect class="enemy" height="50" width="50" v-bind:x="enemyPosX" v-bind:y="enemyPosY"></rect>
            <rect class="health-bar" v-bind:fill="healthBar" height="30" width="200" x="30" y="30"></rect>
            <rect class="cloud 1" height="60" width="100" x="600" y="100"></rect>
            <rect class="cloud 2" height="60" width="100" x="550" y="80"></rect>
            <text class="score-num" x="850" y="30" >{{this.score}}</text>
        </svg>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Game",
        data() {
            return {
                speed: 4,
                playerPos: 400,
                playerSpeed: 15,
                gravity: 10,
                isJumping: false,
                isGoingUpwards: true,
                enemyPosX: 800,
                enemyPosY: 450,
                isGameOver: false,
                score: 1,
                isMario: 'red',
                healthBar:'darkgreen'
            }
        },
        created() {
            document.addEventListener('keydown', event => this.handleUserAction(event));
            this.start()
        }
        , methods: {
            nextFrame() {
                this.checkCollision();
                this.moveEnemy();
                this.moveUser();
                this.increaseScore();
            },
            handleUserAction(event) {
                if (event.keyCode === 32) {
                    this.isJumping = true;

                }
            },
            moveUser() {
                if (this.isJumping) {
                    if (this.playerSpeed - 20 / 25 < 0) {
                        this.playerSpeed = 1;
                        this.isGoingUpwards = false
                    } else {
                        if (this.isGoingUpwards) {
                            this.playerSpeed = this.playerSpeed - 20 / 25
                        } else {
                            this.playerSpeed = this.playerSpeed + 15 / 25
                        }
                    }
                    if (this.isGoingUpwards) {
                        this.playerPos = this.playerPos - this.playerSpeed
                    } else {
                        this.playerPos = this.playerPos + this.playerSpeed
                    }
                    if (this.playerPos > 401) {
                        this.playerPos = 400;
                        this.playerSpeed = 15;
                        this.isJumping = false;
                        this.isGoingUpwards = true
                    }
                }
            },
            moveEnemy() {
                if (this.enemyPosX < -50) {
                    this.enemyPosX = 1100;
                    if (Math.random() > 0.5) {
                        this.enemyPosY = 450;
                        this.speed = 4
                    } else {
                        this.enemyPosY = 300;
                        this.speed = 8
                    }
                }
                this.enemyPosX -= this.speed;
            },
            checkCollision() {
                let rect1 = document.querySelector('.player').getBoundingClientRect();
                let rect2 = document.querySelector('.enemy').getBoundingClientRect();
                if (rect1.x < rect2.x + rect2.width &&
                    rect1.x + rect1.width > rect2.x &&
                    rect1.y < rect2.y + rect2.height &&
                    rect1.y + rect1.height > rect2.y)
                {
                    clearInterval();

                    this.healthBar = 'red';
                    this.isGameOver = true;
                    if(confirm('YOU DIEDED \n Your score is: ' + this.score + '\n' + 'Would you like to restart?')){
                        this.$router.push('/game');
                            this.speed = 4;
                            this.playerPos = 400;
                            this.playerSpeed= 15;
                            this.gravity= 10;
                            this.isJumping= false;
                            this.isGoingUpwards= true;
                            this.enemyPosX= 800;
                            this.enemyPosY= 450;
                            this.isGameOver= false;
                            this.score= 1;
                            this.healthBar = 'darkgreen'
                    }else {
                        this.$router.push('/')
                    }
                }

            },
            increaseScore() {
                if (!this.isGameOver) {
                    this.score += 1;
                    // eslint-disable-next-line no-console
                    console.log(this.score)
                }else{
                    axios.post();
                }
            },

            start() {
                if (localStorage.getItem('isMario') === 'MARIO'){
                    this.isMario = "red"
                }else {
                    this.isMario = "green"
                }
                //25 FPS
                setInterval(this.nextFrame, 40);
            }
        }
    }
</script>

<style scoped>
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

    .health-bar {
        fill: darkgreen;
    }

    .score-num {
        fill: black;
        font-family: Supersans;
        font-size: 40px;
    }

    .cloud{
        fill: grey;
    }
</style>