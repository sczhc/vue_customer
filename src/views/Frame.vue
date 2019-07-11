<template>
	<div class="frame">
		<nav-bar></nav-bar>
		<router-view :key="$route.name"></router-view>
		<footer />
	</div>
</template>

<script>
import NavBar from './NavBar'
import Footer from './Footer'
export default {
	components: {
		NavBar,Footer
	},
	watch: {
		'$route': {
			handler(n) {
				console.log(n)
			},
			immediate: true
		}
	}
}
</script>
