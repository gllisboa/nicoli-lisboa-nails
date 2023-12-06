<template>
    <div id="container-nav" :class="{scrollAfterHome: scrollAfterHome}">
        <nav id="nav">
            <a v-for="link in firstLinks" :href="link.href" >{{ link.name }}</a>
            <div id="split-nav"></div>
            <a v-for="link in finalLinks" :href="link.href" :class="{relevant: link.relevant}" >{{ link.name }}</a>
        </nav>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import navLinksList from '../data/navLinks.json'
import ListUitls from '../utils/lists.js'

let listLinks = [...navLinksList]
let firstLinks = ListUitls.firstPartOfList(listLinks)
let finalLinks = ListUitls.finalPartOfList(listLinks)
export default defineComponent({
        name: 'Nav',
        components: {},
        data() {
            return {
                scrollAfterHome: false,
                listLink: listLinks,
                firstLinks: firstLinks,
                finalLinks: finalLinks,
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
        font-size: 1.5rem;
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
        margin-right: 1vw;
        text-align: center;
        text-decoration: none;
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
        width: 12.5vw;
    }

    #container-nav a.relevant {
        background-color: var(--pink-dark);
        border: var(--white) solid;
        border-radius: 10%;
        font-family: 'Caveat', sans-serif;
        box-shadow: var(--shadow-01);
    }

    #container-nav :visited {
        color: inherit;
    }
    #container-nav.scrollAfterHome a {
        color: var(--pink-ligth);
        background-color: var(--white);
        border: var(--pink-ligth) solid;
        border-radius: 10%;
        box-shadow: var(--shadow-01);
    }
    #container-nav.scrollAfterHome a.relevant {
        color:  var(--white);
        background-color: var(--pink-dark);
        border: var(--white) solid;
        border-radius: 10%;
    }
    #container-nav.scrollAfterHome a:visited {
        color: var(--pink-ligth);
    }
    #container-nav.scrollAfterHome a.relevant:visited {
        color: var(--white);
    }

    #split-nav {
        display: inline;
        width: 36vw;
    }

</style>