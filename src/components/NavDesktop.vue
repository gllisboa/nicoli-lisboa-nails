<template>
    <div id="container-nav" :class="{scrollAfterHome: scrollAfterHome}">
        <nav id="nav" >
            <a href=""> Sobre mim</a>
            <a href=""> Serviços </a>
            <div id="split-nav"></div>
            <a href="" class="relevant"> Agende um Horario </a>
            <a href="" class="relevant"> Contatos </a>
        </nav>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
        name: 'Nav',
        components: {},
        data() {
            return {
                scrollAfterHome: false
            }
        },
        methods: {
            handleScroll() {
                if (window.scrollY >= (window.innerHeight - (window.innerHeight * 0.6) )) {
                    console.log("If: " + window.innerHeight)
                    this.scrollAfterHome =  true
                }else {
                    this.scrollAfterHome =  false

                }
            },
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }

})
</script>

<style lang="css" scoped>

    #container-nav {
        color: var(--white);
        height: 10vh;
        position: fixed;
        top: 5vh;
        left: 5vh;
        z-index: 9999999999999;
    }

    #nav {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #container-nav a {
        border: var(--pink-ligth) solid;
        border-radius: 10%;
        color: inherit;
        padding: 1vh;
        margin-right: 2vw;
        text-decoration: none;
    }

    #container-nav a.relevant {
        background-color: var(--pink-dark);
        border: var(--white) solid;
        border-radius: 10%;
    }

    #container-nav :visited {
        color: inherit;
    }
    #container-nav.scrollAfterHome a {
        color: var(--pink-ligth);
        background-color: var(--white);
        border: var(--pink-ligth) solid;
        border-radius: 10%;
    }
    #container-nav.scrollAfterHome a.relevant {
        color:  var(--white);
        background-color: var(--pink-dark);
        border: var(--white) solid;
        border-radius: 10%;
    }
    #container-nav.scrollAfterHome :visited {
        color: var(--pink-ligth);
    }

    #split-nav {
        display: inline;
        width: 58vw;
    }

</style>