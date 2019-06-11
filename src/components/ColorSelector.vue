<template>
	<div class="colors">
		<template v-for="color in colors">
			<div
				v-bind:key="color.hue"
				@click="selectColor(color)"
				class="colors__block"
				:style="{backgroundColor: color.getValue()}"
			></div>
		</template>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Hsla } from '@/models/Models.ts';

@Component({
	components: {},
})
export default class HslaVisualizer extends Vue {
	private colors: Hsla[] = [
		new Hsla(0, 100, 50, 1),
		new Hsla(60, 100, 50, 1),
		new Hsla(120, 100, 50, 1),
		new Hsla(180, 100, 50, 1),
		new Hsla(240, 100, 50, 1),
		new Hsla(300, 100, 50, 1),
	];
	public selectColor(color: Hsla): void {
		this.$emit('onColorSelect', color);
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
}
</style>
