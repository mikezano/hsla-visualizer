<template>
	<div class="hsla">
		<div class="hsla__label--light">
			<span class="hsla__label--span">0%</span>
			&larr; Light &rarr;
			<span class="hsla__label--span">100%</span>
		</div>
		<div class="hsla__label--saturation">
			<span class="hsla__label--span">0%</span>
			&larr; Saturation &rarr;
			<span class="hsla__label--span">100%</span>
		</div>
		<div class="grid">
			<template v-for="i in 11">
				<template v-for="j in 11">
					<div
						class="grid__cell"
						:style="{backgroundColor: setHslaValues((i-1)*10,(j-1)*10)}"
						:title="setHslaValues((i-1)*10,(j-1)*10)"
					></div>
				</template>
			</template>
		</div>
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
	public setHslaValues(saturation: number, light: number): string {
		const hsla: string = `hsla(${
			this.color.hue
		}, ${saturation}%, ${light}%,1 )`;

		return hsla;
	}
}
</script>

<style lang="scss" scoped>
$size: 3rem;

.hsla {
	position: relative;
	&__label--light,
	&__label--saturation {
		color: black;
		position: absolute;
		top: 1rem;
		font-weight: bold;
		font-size: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	&__label--span {
		font-size: 1rem;
	}

	&__label--saturation {
		transform: rotateZ(-90deg);
		left: 1rem;
		bottom: 0;
	}
}

.grid {
	display: grid;
	grid-template-columns: repeat(11, calc(50vw / 11));
	grid-template-rows: repeat(11, calc(50vh / 11));
	grid-gap: 1rem;
	padding: 4rem;

	&__cell-header {
		//border: 1px solid gray;
	}
	&__cell {
		//background-color: gray;
		box-shadow: 0.1rem 0.1rem 0.2rem hsla(0, 0, 0, 0.5);
	}
	&__cell--percent {
		display: flex;
		justify-content: center;
		align-items: center;

		//border: 1px solid black;
	}
}
</style>
