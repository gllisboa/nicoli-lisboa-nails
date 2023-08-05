<template>
    <div id="container-about" :class="$matches.current">
        <div id="container-image-me" :class="$matches.current" class="button-56">
            <div id="image">
            </div>
        </div>
        <div id="split-div">

        </div>
        <div id="container-text-about" :class="$matches.current">
            <strong id="title-about">
                Sobre mim
            </strong>
            <strong id="text-about">
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

    #container-about.mobile {
       flex-direction: column;
       /* margin-top: 5vh; */
    }

    #container-image-me {
        box-shadow: var(--shadow-02);
        background-color: var(--pink-ligth);
        height: 50%;
        width: 25%;
    }

    #container-image-me.mobile {
        height: 30%;
        width: 60%;
        margin-bottom: 3vh;
    }

    #container-image-me #image {    
        height: 100%;
        width: 100%;
        background-image: url('../assets/profile-about-removebg-no-bg.png');
        background-size: 140%;
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

    #container-text-about.mobile {
        font-size: 1.5rem;
        width: 60%;
    }

    #title-about {
        color: var(--pink-dark);
        margin-bottom: 2vh;
        opacity: 0.5;
        text-shadow: -2px 2px var(--pink-ligth);
        font-size: 3rem;
    }

    #text-about {
        font-family: 'Montserrat', sans-serif;
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
    }


</style>