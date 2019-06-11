<template>
	<div class="grid">
		<div class="grid__cell-header"></div>
		<div class="grid__cell-header">Saturation</div>
		<div class="grid__cell-header">Light</div>
		<template v-for="n in 11">
			<div class="grid__cell grid__cell--percent">{{(n-1)*10}}%</div>
			<div class="grid__cell" :style="{backgroundColor: setSaturation((n-1)*10)}"></div>
			<div class="grid__cell" :style="{backgroundColor: setLight((n-1)*10)}"></div>
		</template>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Hsla } from '@/models/Models.ts';

@Component({})
export default class ColorGrid extends Vue {
	@Prop() color!: Hsla;

	public increments: number = 0;

	public setSaturation(value: number): string {
		return `hsla(${this.color.hue},${value}%,50%,1)`;
	}
	public setLight(value: number): string {
		return `hsla(${this.color.hue},100%,${value}%,1)`;
	}
}
</script>

<style lang="scss" scoped>
$size: 3rem;
.grid {
	display: grid;
	grid-template-columns: repeat(3, calc(100vw / 3));
	grid-template-rows: repeat(12, calc(100vh / 12));

	&__cell-header {
		//border: 1px solid gray;
	}
	&__cell {
		//background-color: gray;
		//box-shadow: 0.1rem 0.1rem 0.2rem hsla(0, 0, 0, 0.5);
	}
	&__cell--percent {
		display: flex;
		justify-content: center;
		align-items: center;

		//border: 1px solid black;
	}
}
</style>
