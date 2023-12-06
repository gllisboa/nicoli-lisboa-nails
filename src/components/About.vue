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
Olá, sou Nicoli Lisboa, sua Nail Designer especializada em fibra de vidro e uma apaixonada Lash Designer, trazendo o melhor em cuidados estéticos diretamente para Ovar! <br><br>
💅✨ Com habilidade artística e dedicação, transformo unhas em verdadeiras obras de arte com a técnica de fibra de vidro. Meu compromisso é proporcionar a você não apenas unhas incríveis, mas também uma experiência relaxante e única. <br><br>
👁️🌈 Como especialista em Lash Designer, crio olhares deslumbrantes e naturais que refletem sua beleza interior. Cada procedimento é feito com precisão e paixão para realçar a sua expressão única. <br><br>
📍 Estou localizada em Ovar, pronta para recebê-lo(a) em um ambiente acolhedor e profissional.
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
        align-items: flex-start;
        background-color: var(--white);
        display: flex;
        height: 100vh;
        justify-content: center;
        margin-left: 1vw;
        margin-top: 10vh;
        width: 100vw;
    }

    #container-about.mobile {
       flex-direction: column;
       align-items: center;
       height: 200vh;
       margin-top: 6vh;
       justify-content: flex-start;
    }

    #container-image-me {
        box-shadow: var(--shadow-02);
        background-color: var(--pink-ligth);
        height: 50%;
        width: 25%;
    }

    #container-image-me.mobile {
        height: 16%;
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
        font-size: 100vh.5rem;
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