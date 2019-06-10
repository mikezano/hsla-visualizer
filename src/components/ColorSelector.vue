<template>
	<div class="colors">
		<template v-for="color in colors">
			<div
				v-bind:key="color"
				@click="selectColor(color)"
				class="colors__block"
				:style="{backgroundColor: color}"
			></div>
		</template>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
	components: {},
})
export default class HslaVisualizer extends Vue {
	private colors: string[] = [
		'hsla(0,100%,50%,1)',
		'hsla(60,100%,50%,1)',
		'hsla(120,100%,50%,1)',
		'hsla(180,100%,50%,1)',
		'hsla(260,100%,50%,1)',
		'hsla(320,100%,50%,1)',
	];
	public selectColor(color: string): void {
		this.$emit('onColorSelect', color);
		console.log(color);
	}
}
</script>

<style lang="scss">
.colors {
	display: flex;

	&__block {
		height: 2rem;
		width: 2rem;
		margin: 0.5rem;
	}

	$light: 50%;
	$saturation: 100%;
	&__red {
		background-color: hsla(0, $saturation, $light, 1);
	}
	&__yellow {
		background-color: hsla(60, $saturation, $light, 1);
	}
	&__green {
		background-color: hsla(120, $saturation, $light, 1);
	}
	&__cyan {
		background-color: hsla(180, $saturation, $light, 1);
	}
	&__blue {
		background-color: hsla(260, $saturation, $light, 1);
	}
	&__magenta {
		background-color: hsla(300, $saturation, $light, 1);
	}
}
</style>
