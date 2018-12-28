<!--
We want you to make a complete website for us. We have an existing site but it more or less serves as a placeholder. I can give you full access to that so you can understand a bit about us and what we want to improve. 

For all these pages, the information we can provide for you (we have it/most of it typed out; if there is something you need let me know and I can get it typed out). 
Here is a list of things we need on the site: 

Photo gallery- we have photos that I can send you
About us/contact us page- again, the info I can send 
About the competition- info we can provide; include hyperlink to the competition page (I can send that too)
We have an idea to allow supporters to engage with the car itself. Basically we need a layout of the solar panels and then users can click on a specific cell and then they can buy it. When you buy a cell, you are allowed to put your personal information and put a picture of yourself. Our plan is at the end of the year to print out a huge panel with all the pictures so if somehow we can get a “pdf” or smith of this page that would be good. 
Our donation levels are right now (not entirely formalized)
Adopt a Cell
Merchandise
General Cash dontations 

Now also on the donations page, add in an option to donate spare parts, equipment, etc. 

Our email: planogreenteam@gmail.com
-->
<template>
	<v-app light>
		<tool-bar @change="switchPage($event)" v-if="showToolbar"/>
		<main-page v-if="showMainPage"/>
		<gallery-page v-if="showGalleryPage"/>
		<about-page v-if="showAboutPage"/>
		<competition-page v-if="showCompetitionPage"/>
		<support-page :donatorData="donatorData" v-if="showSupportPage"/>
	</v-app>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import MainPage from "./components/MainPage.vue";
import GalleryPage from "./components/GalleryPage.vue";
import AboutPage from "./components/AboutPage.vue";
import CompetitionPage from "./components/CompetitionPage.vue";
import SupportPage from "./components/SupportPage.vue";

const NUM_DONATORS = 60;

export default {
	name: 'App',
	components: {
		ToolBar,
		MainPage,
		GalleryPage,
		AboutPage,
		CompetitionPage,
		SupportPage
	},
	data () {
		return {
			showToolbar: false,
			showMainPage: true,
			showGalleryPage: false,
			showAboutPage: false,
			showCompetitionPage: false,
			showSupportPage: false,
			donatorData: [] // [{'exist': bool, 'id': int, 'img': string, 'info': dictionary, 'activations': dictionary}]
		}
	},
	methods: {
		scrollHandler() {
			if (this.showSupportPage == false)
				if (window.pageYOffset > window.innerHeight)
					this.showToolbar = true;
				else
					this.showToolbar = false;
		},
		switchPage(pageName) {
			this.showMainPage = false;
			this.showGalleryPage = false;
			this.showAboutPage = false;
			this.showCompetitionPage = false;
			this.showSupportPage = false;
			switch(pageName) {
				case "homePage":
					this.showMainPage = true;
					break;
				case "photoPage":
					this.showGalleryPage = true;
					break;
				case "aboutPage":
					this.showAboutPage = true;
					break;
				case "competitionPage":
					this.showCompetitionPage = true;
					break;
				case "supportPage":
					this.showSupportPage = true;
					break;
			}
			if (pageName != "supportPage")
				this.showToolbar = false;
			this.$scrollTo("#background");
		}
	},
	computed: {
		viewHeight() {
			return window.innerHeight;
		}
	},
	created () {
		window.addEventListener('scroll', this.scrollHandler);
		let id = 0;
		this.donatorData = Array.from(new Array(NUM_DONATORS), () => {return {exist: false, id: id++};});
	},
	destroyed () {
		window.removeEventListener('scroll', this.scrollHandler);
	}
}
</script>

<style>
#app {
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}
</style>