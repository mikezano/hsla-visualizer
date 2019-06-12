<template>
	<div class="grid">
		<!-- <div class="grid__cell-header"></div>
		<div class="grid__cell-header">Saturation</div>
		<div class="grid__cell-header">Light</div>-->
		<template v-for="i in 11">
			<template v-for="j in 11">
				<div class="grid__cell" :style="{backgroundColor: setHslaValues((i-1)*10,(j-1)*10)}"></div>
			</template>
		</template>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Hsla } from "@/models/Models.ts";

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
	public setHslaValues(saturation: number, light: number): string {
		const hsla: string = `hsla(${
			this.color.hue
		},${saturation}%,${light}%,1)`;

		return hsla;
	}
}
</script>

<style lang="scss" scoped>
$size: 3rem;
.grid {
	display: grid;
	grid-template-columns: repeat(11, calc(50vw / 11));
	grid-template-rows: repeat(11, calc(50vh / 11));

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
