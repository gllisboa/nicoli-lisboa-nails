<template>
    <div id="container-home" :class="$matches.current">
        <div id="title-container" :class="$matches.current" >
            <div></div>
            <h1 id="title" :class="$matches.current">
                <strong>
                    Especialista em Unhas e Pestanas
                </strong>
            </h1>
            <h1 id="sub-title" :class="$matches.current">
                <strong>
                    🌟 Bem-vindo(a) ao Mundo da Beleza por Nicoli Lisboa! 🌟
                </strong>
            </h1>
            <a v-if="$matches.current !== 'mobile'" id="link-agenda" :href="scheduleLink.href" > {{ scheduleLink.name  }}</a>
        </div>
        <div id="image-container" :class="$matches.current">
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import navLinks from '../data/navLinks.json'

    let listLinks = [...navLinks]
    let scheduleLink = listLinks.filter(link => link.id == "schedule")[0]

    export default defineComponent({
            name: 'Home',
            components: {},
            data() {
                return {
                    listLinks: listLinks,
                    scheduleLink: scheduleLink,
                }
            },
            methods: {},
            mounted() {
            }

    })
</script>

<style lang="css" scoped>

    #container-home {
        align-items: flex-start;
        background-image: url('../assets/bg-home.png');
        background-position: bottom;
        border-top-left-radius: 3%;
        display: flex;
        font-size: 1.5rem;
        height: 75vh;
        justify-content: flex-start;
        margin-left: 1vw;
        margin-top: 1vw;
        overflow: hidden;
        text-align: center;
    }

    #container-home.mobile {
        align-items: center;
        background-image: url('../assets/bg-home-mobile.png');
        background-position: center;
        background-size: cover;
        font-size: 1rem;
        flex-direction: column;
        justify-content: center;
    }

    #title-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 10vw;
        justify-content: center;
    }

    #title-container.mobile {
        margin-left: 0;
    }

    #title-container  > div {
        height: 20vh;
    }

    #title-container  * {
        color: var(--white);
    }

    #title {
        display: contents;
        color: inherit;
        font-size: 4em;
    }

    #title.mobile {
        font-size: 3.5em;
    }

    #sub-title strong, #sub-title {
        display: contents;
        font-size: 0.9em;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
    }
    #sub-title.mobile {
        display: contents;
        font-size: 1.3em;
    }

    #link-agenda {
        background-color: var(--pink-dark);
        outline: none;
        border-radius: 10%;
        border: solid;
        margin-top: 3vh;
        padding: 1vh;
        text-decoration: none;
        z-index: 99;
    }

    #link-agenda:hover {
        background-color: var(--pink-dark);
        color: var(--pink-dark);
    }

    #image-container {
        background-image: url('../assets/1.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 179%;
        bottom: 28%;
        height: 25vw;
        margin-top: 3vh;
        position: absolute;
        right: 5vw;
        width: 25vw;
        z-index: 999;
    }

    #image-container.mobile {
        background-size: 127%;
        background-position-y: -17vh;
        display: block;
        height: inherit;
        position: unset;
        width: 100vw;
    }

</style>