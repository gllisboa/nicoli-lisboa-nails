<template>
    <div id="container-home" :class="$matches.current">
        <div id="title-container" :class="$matches.current" >
            <div></div>
            <h1 id="title" :class="$matches.current">
                <strong>
                    Nails Designer
                </strong>
            </h1>
            <h1 id="sub-title" :class="$matches.current">
                <strong>
                    Especializada em Alongamentos de Fibra de Vidro
                </strong>
            </h1>
            <a v-if="$matches.current !== 'mobile'" href="http://" id="link-agenda"> Agende um Horário</a>
        </div>
        <div id="image-container" :class="$matches.current">
        </div>
        <div id="background-digonal">

        </div>
    </div>
</template>

<script>

</script>

<style lang="css" scoped>

    * {
        /* color: antiquewhite; */
    }
    /* #before-all {
        height: 5vh;
        width: 100vw;
    } */
    #container-home {
        align-items: flex-start;
        background-color: var(--pink-ligth);
        border-top-left-radius: 3%;
        display: flex;
        height: 75vh;
        justify-content: flex-start;
        margin-left: 1vw;
        margin-top: 1vw;
        overflow: hidden;
        text-align: center;
    }

    #container-home.mobile {
        /* margin-top: 5vh; */
        align-items: center;
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
        font-size: 4.5em;
    }

    #sub-title {
        display: contents;
        font-size: 2em;
    }
    #sub-title.mobile {
        display: contents;
        font-size: 2.3em;
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
        background-size: 120%;
        bottom: 20%;
        height: 25vw;
        margin-top: 3vh;
        position: absolute;
        right: 5vw;
        width: 25vw;
        z-index: 999;   
    }

    #image-container.mobile {
        background-size: 63%;
        display: block;
        height: inherit;
        position: unset;
        width: 100vw;
    }

    #background-digonal {
        height: 10vh;
    }

    #background-digonal:before {
        border-right: 99vw solid var(--white);
        border-top: 20vh solid var(--pink-ligth);
        border-bottom-style: unset;
        content: '';
        left: 1vw;
        bottom: 20vh;
        position: absolute;
        width: 0vw;
}

</style>