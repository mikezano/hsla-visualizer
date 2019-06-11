<template>
	<div class="hsla-visualizer">
		<ColorSelector :color="hsla" @onColorSelect="changeColor"/>
		<ColorGrid :color="hsla"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ColorSelector from '@/components/ColorSelector.vue'; // @ is an alias to /src
import ColorGrid from '@/components/ColorGrid.vue'; // @ is an alias to /src
import { Hsla } from '@/models/Models.ts';

@Component({
	components: {
		ColorSelector,
		ColorGrid,
	},
})
export default class HslaVisualizer extends Vue {
	private hsla: Hsla = new Hsla(0, 0, 0, 0);

	public changeColor(color: Hsla) {
		this.hsla = color;
	}
}
</script>

<style lang="scss" scoped>
.hsla-visualizer {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
