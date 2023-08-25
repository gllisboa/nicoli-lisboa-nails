<template>
    <div id="container-nav-buttons" v-if="!expand">
        <div id="container-before-mobile">

        </div>
        <div id="nav-mobile-container">
            <nav id="nav-float">
                <a :href="scheduleLink.href" :class="{relevant: scheduleLink.relevant}">{{ scheduleLink.name }}</a>
            </nav>
        </div>
        <div id="container-button-expand">
                <button id="button-expand" v-on:click="expandNav()" class="material-symbols-outlined">
                    menu
                </button>
        </div>
    </div>
    <div id="container-nav-fullscreen" v-if="expand" v-on:click="expandNav()" >
        <span id="button-compress" class="material-symbols-outlined">
            arrow_downward
        </span>
        <nav id="nav-fullscreen">
            <a v-for="link in listLinks" :href="link.href" :class="{relevant: link.relevant}"> {{ link.name }} </a>
        </nav>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import navLinks from '../data/navLinks.json'

let listLinks = [...navLinks]
let scheduleLink = listLinks.filter(link => link.id == "schedule")[0]

export default defineComponent({
        name: 'NavMobile',
        components: {},
        data() {
            return {
                expand : false,
                listLinks: listLinks,
                scheduleLink: scheduleLink,
            }
        },
        methods: {
            expandNav() {
                this.expand = !this.expand
            }
        },
        mounted() {

        }

})
</script>

<style lang="css" scoped>

    #container-nav-buttons {
        position: fixed;
        display: flex;
        width: 100vw;
        bottom: 0;
        justify-content: center;
    }

    #container-before-mobile {
        width: 15%;
    }

    #container-button-expand{
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    #nav-mobile-container {
        align-items: center;
        display: flex;
        height: fit-content;
        justify-content: center;
        width: 60%;
        z-index: 999;
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

    #button-expand{
        background-color: var(--white);
        border-radius: 10%;
        border: solid var(--pink-dark);
        color: var(--pink-dark);
        font-size: 2rem;
        height: 5vh;
        margin-bottom: 3.5vh;
    }

    #container-nav-fullscreen{
        font-size: 3rem;
        background-color: var(--pink-dark);
        height: 100vh;
        position: fixed;
        top: 0;
        opacity: 0.95;
        width: 100vw;
        z-index: 99999999999999999;
    }

    #nav-fullscreen{
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
    }

    #nav-fullscreen a {
        align-items: center;
        border: solid var(--white);
        border-radius: 5%;
        color: var(--white);
        display: flex;
        font-size: 2.5rem;
        margin-bottom: 5%;
        height: 10%;
        justify-content: center;
        width: 90%;
        z-index: 999999999999999999;
    }

    #nav-fullscreen a.relevant {
        background-color: var(--pink-ligth);
    }

    #button-compress {
        font-size: 2.5rem;
        color: var(--white);
    }
</style>