export interface IHsla {
	hue: number;
	saturation: number;
	light: number;
	alpha: number;
}

export class Hsla implements IHsla {
	public hue: number = 0;
	public saturation: number = 0;
	public light: number = 0;
	public alpha: number = 1;

	constructor(hue: number, saturation: number, light: number, alpha: number) {
		this.hue = hue;
		this.saturation = saturation;
		this.light = light;
		this.alpha = alpha;
	}

	public getValue(): string {
		return `hsla(${this.hue},${this.saturation}%,${this.light}%,${this.alpha})`;
	}
}
