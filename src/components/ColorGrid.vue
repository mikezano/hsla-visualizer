<template>
	<div class="grid">
		<template v-for="n in 4">
			<div class="grid__cell">{{100/n}}</div>
			<div class="grid__cell" :style="{backgroundColor: setSaturation(100/n)}"></div>
			<div class="grid__cell" :style="{backgroundColor: setLight(100/n)}"></div>
		</template>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class ColorGrid extends Vue {
	@Prop() color!: number;

	public increments: number = 0;

	public setSaturation(value: number): string {
		return `hsla(${this.color},${value}%,50%,1)`;
	}
	public setLight(value: number): string {
		return `hsla(${this.color},100%,${value}%,1)`;
	}
}
</script>

<style lang="scss" scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-gap: 1rem;

	&__cell {
		background-color: gray;
	}
}
</style>
