<template>
	<div class="home">
		<ColorSelector :color="hslaColorValue" @onColorSelect="changeColor"/>
		<ColorGrid :color="hslaColorValue"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ColorSelector from '@/components/ColorSelector.vue'; // @ is an alias to /src
import ColorGrid from '@/components/ColorGrid.vue'; // @ is an alias to /src

@Component({
	components: {
		ColorSelector,
		ColorGrid,
	},
})
export default class HslaVisualizer extends Vue {
	private hslaColorValue: number = 0;

	public changeColor(color: number) {
		this.hslaColorValue = color;
	}
}
</script>
