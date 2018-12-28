<template>
    <transition name="fade">
        <v-content>
            <section id="background">
                <v-parallax :src="require('@/assets/Race.jpg')" :height="viewHeight">
                    <v-layout align-center justify-space-between column>
                        <div/>
                        <h1 class="white--text mb-2 display-4 text-xs-center font-weight-light">About The Race</h1>
                        <v-icon color="white" size="50px" @click=";" v-scroll-to="'#mainSection'">expand_more</v-icon>
                    </v-layout>
                </v-parallax>
                <br/>
            </section>

            <section id="mainSection">
                <img src="@/assets/TeamPass.jpg"/>
                <img src="@/assets/TeamPass.jpg"/>
                <img src="@/assets/TeamPass.jpg"/>
                <img src="@/assets/TeamPass.jpg"/>
                <img src="@/assets/TeamPass.jpg"/>
                <img src="@/assets/TeamPass.jpg"/>
                <img src="@/assets/TeamPass.jpg"/>
            </section>
        </v-content>
    </transition>
</template>

<script>
export default {
    name: "CompetitionPage",
	computed: {
		viewHeight() {
			return window.innerHeight;
        },
        viewWidth() {
            return window.innerWidth;
        }
    }
}
</script>

<style>
#background img {
	height: 150%;
	bottom: 10vh;
	filter: brightness(50%);
}

#background h1 {
	text-shadow: 0px 0px 8px #000000;
}

.down-angle {
    color: white;
    bottom: 5vh;
}
</style>