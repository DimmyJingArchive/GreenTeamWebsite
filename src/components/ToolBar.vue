<template>
    <transition name="fade">
        <v-toolbar class="white" fixed>
            <v-toolbar-title style="cursor:pointer" @click="$emit('change', 'homePage')">
                <v-layout row wrap align-center>
                    <img :src="require('@/assets/logo.png')" height="40vh"/>
                    &nbsp;
                    Plano Green Team
                </v-layout>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items>
                <v-btn flat @click="$emit('change', 'homePage')">Home</v-btn>
                <v-btn flat @click="$emit('change', 'photoPage')">Photo Gallery</v-btn>
                <v-btn flat @click="$emit('change', 'aboutPage')">About Us</v-btn>
                <v-btn flat @click="$emit('change', 'competitionPage')">About The Competition</v-btn>
                <v-btn flat @click="$emit('change', 'supportPage')">Support Us</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </transition>
</template>

<script>
export default {
    name: "ToolBar"
}
</script>

<style scoped>
</style>
