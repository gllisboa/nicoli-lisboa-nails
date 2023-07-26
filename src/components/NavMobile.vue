<template>
    <div id="nav-mobile-container">
        <nav id="nav-float">
            <a href="">Servicos</a>
            <a href="" class="relevant">Agende um Horario</a>
        </nav>
        <nav id="nav-fullscreen">

        </nav>

    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
        name: 'NavMobile',
        components: {},
        data() {
            return {}
        },
        methods: {},
        mounted() {
        }

})
</script>

<style lang="css" scoped>
    #nav-mobile-container {
        align-items: center;
        bottom: 0;
        display: flex;
        height: fit-content;
        justify-content: center;
        position: fixed;
        width: 100vw;
        z-index: 99999999999;
    }

    #nav-float {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #nav-float a {
        align-items: center;
        background-color: var(--white);
        border: solid var(--pink-ligth);
        color: var(--pink-ligth);
        display: flex;
        font-size: 1.45rem;
        height: 5vh;
        justify-content: center;
        padding: 0.5vh;
        text-align: center;
        width: 50vw;
        margin-bottom: 3vh;
        border-radius: 6%;

    }

    #nav-float a.relevant {
        box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
        color:  var(--white);
        background-color: var(--pink-dark);
        border: var(--white) solid;
    }

    a {
        text-decoration: none;
    }

    a:visited {
        color: var(--pink-ligth);
        text-decoration: none;
    }
</style>