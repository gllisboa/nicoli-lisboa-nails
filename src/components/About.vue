<template>
    <div id="container-about">
        <div id="container-image-me" class="button-56">
            <div id="image">
            </div>
        </div>
        <div id="split-div">

        </div>
        <div id="container-text-about">
            <strong id="title-about">
                Sobre mim
            </strong>
            <strong>
                Prazer, me chamo Nicoli Lisboa, sou brasileira, moradora de Ovar, Nail Designer com foco em Fibra de Vidro, Gelinho, Banho de Gel e aquela cutilagem caprichada que amamos, né?
            </strong>
        </div>

    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
            name: 'About',
            components: {},
            data() {
                return {
                }
            },
            methods: {},
            mounted() {
            }

    })
</script>

<style lang="css" scoped>

    #container-about {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-left: 1vw;
        height: 100vh;
        width: 100vw;
        background-color: var(--white);
    }

    #container-image-me {
        box-shadow: var(--pink-dark-opacity-4) -5px 5px, var(--pink-dark-opacity-3) -10px 10px, var(--pink-dark-opacity-2) -15px 15px, var(--pink-dark-opacity-1) -20px 20px, var(--pink-dark-opacity-05) -25px 25px;
        background-color: var(--pink-ligth);
        height: 50%;
        width: 25%;
    }

    #container-image-me #image {
        height: 100%;
        width: 100%;
        background-image: url('../assets/profile-about-removebg-no-bg.png');
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
    }

    #split-div {
        width: 10%;
    }

    #container-text-about {
        display: flex;
        flex-direction: column;
        text-align: justify;
        font-size: 2.5rem;
        width: 35%;
    }

    #title-about {
        color: var(--pink-dark);
        margin-bottom: 2vh;
        opacity: 0.5;
        text-shadow: -2px 2px var(--pink-ligth);
        font-size: 3rem;
    }


</style>