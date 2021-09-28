class Spanner {
	constructor() {
		this.x = 500;
		this.y = window.innerHeight - 100;
		let columnCount = 14;
		let rowCount = 1;
		let refreshDelay = 100;
		let scale = 1;
		let columnLoop = true;

		this.tiledImage = new TiledImage("img/canvasSpanner.png",
										columnCount, rowCount, refreshDelay,
										columnLoop,scale);
		// this.tiledImage.changeRow(this.direction);
        // this.tiledImage.changeMinMaxInterval(0,4);
		// this.tiledImage.setFlipped(true);

	}

	tick () {
		this.tiledImage.tick(this.x,this.y, ctx);
	}
}