<template>
    <NavDesktop v-if="$matches.current !== 'mobile'"/>
    <NavMobile  v-if="$matches.current == 'mobile'"/>
</template>

<script>
import { defineComponent } from 'vue'
import NavDesktop from './NavDesktop.vue'
import NavMobile from './NavMobile.vue'

export default defineComponent({
        name: 'Nav',
        components: {NavDesktop, NavMobile},
        data() {
            return {}
        },
        methods: {},
        mounted() {
        }

})
</script>

<style lang="css" scoped>
</style>