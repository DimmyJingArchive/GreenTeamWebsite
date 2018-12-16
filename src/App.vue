<template>
	<v-app light>
		<transition name="fade">
			<v-toolbar v-if="showToolbar" class="white" fixed>
				<v-toolbar-title>
					<v-layout row wrap align-center>
						<img :src="require('@/assets/logo.png')" height="40vh"/>
						&nbsp;
						Plano Green Team
					</v-layout>
				</v-toolbar-title>
			</v-toolbar>
		</transition>
		<v-content>
			<section id="background">
				<v-parallax :src="require('@/assets/SolarCar.jpg')" :height="viewHeight">
					<v-layout column align-center justify-center class="white--text">
						<h1 class="white--text mb-2 display-4 text-xs-center font-weight-light">Plano Green Team</h1>
					</v-layout>
				</v-parallax>
			</section>

			<section>
				<v-layout column wrap class="my-5" align-center justify-space-between>
					<v-flex xs12>
						<v-container grid-list-xl>
							<v-layout row wrap align-center justify-space-between>
								<v-card class="elevation-0 transparent ma-2">
									<img src="./assets/Learning.jpg"/>
									<v-card-title class="justify-center">
										<h1 class="mb-2 display-1">Learning</h1>
									</v-card-title>
								</v-card>
								<v-card class="elevation-0 transparent ma-2">
									<img src="./assets/Communicating.jpg"/>
									<v-card-title class="justify-center">
										<h1 class="mb-2 display-1">Communicating</h1>
									</v-card-title>
								</v-card>
								<v-card class="elevation-0 transparent ma-2">
									<img src="./assets/Constructing.jpg"/>
									<v-card-title class="justify-center">
										<h1 class="mb-2 display-1">Constructing</h1>
									</v-card-title>
								</v-card>
								<v-card class="elevation-0 transparent ma-2">
									<img src="./assets/Racing.jpg"/>
									<v-card-title class="justify-center">
										<h1 class="mb-2 display-1">Racing</h1>
									</v-card-title>
								</v-card>
							</v-layout>
						</v-container>
					</v-flex>
				</v-layout>
			</section>

			<section>
				<v-layout column wrap class="my-5" align-center justify-space-between>
					<v-flex xs12>
						<v-container grid-list-xl>
							<v-layout row align-center justify-space-between class="mb-5">
								<img src="./assets/GreenMachine.jpg"/>
								<v-layout align-end justify-space-between column>
									<h1 class="display-2 mb-4">
										The Green Machine 1.0
									</h1>
									<h1 style="width: 80%" class="text-xs-right">
										Developed by students in Plano and Frisco for the 1,400 mile race from Ft. Worth, TX to Palmdale, CA
									</h1>
								</v-layout>
							</v-layout>
						</v-container>
					</v-flex>
				</v-layout>
			</section>

			<section>
				<v-layout column wrap class="my-5" align-center justify-space-between>
					<v-flex xs12>
						<v-container grid-list-xl>
							<v-layout row align-center justify-space-between class="mt-5">
								<v-layout align-start justify-space-between column>
									<h1 class="display-2 mb-4">
										Siemens Solid Edge Award
									</h1>
									<h1 style="width: 80%" class="text-xs-left">
										Presented to the Solar Car Team making the best use of Siemens Solid Edge Software at the 2018 Solar Car Challenge
									</h1>
								</v-layout>
								<img src="./assets/SolidEdgeAward.jpg"/>
							</v-layout>
						</v-container>
					</v-flex>
				</v-layout>
			</section>

			<section id="endImage">
				<v-parallax :src="require('@/assets/TeamPass.jpg')" :height="viewHeight"/>
				<h1 class="text-xs-center">2018 Palmdale Team Passes Scruitneering</h1>
			</section>
		</v-content>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	components: {
	},
	data () {
		return {
			showToolbar: false
		}
	},
	methods: {
		scrollHandler() {
			if (window.pageYOffset > window.innerHeight - 100)
				this.showToolbar = true;
			else
				this.showToolbar = false;
		}
	},
	computed: {
		viewHeight() {
			return window.innerHeight;
		}
	},
	created () {
		window.addEventListener('scroll', this.scrollHandler);
	},
	destroyed () {
		window.removeEventListener('scroll', this.scrollHandler);
	}
}
</script>

<style>
#app {
}

#background img {
	height: 150%;
	bottom: 25vh;
	filter: brightness(50%);
}

#background h1 {
	text-shadow: 0px 0px 8px #000000;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
</style>