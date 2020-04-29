class Human {
	constructor(maxX, posY) {
		this.x = 0;
		this.y = posY;
		this.maxX = maxX;
		// Param necessaire
		let columnCount = 7;
		let rowCount = 1;
		let refreshDelay = 100;
		let scale = 1;
		let columnLoop = true;

		this.tiledImage = new TiledImage("img/cartes/giottoC.png",
										columnCount, rowCount, refreshDelay,
										columnLoop,scale);
		// this.tiledImage.changeRow(this.direction);
        this.tiledImage.changeMinMaxInterval(0,5);
		// this.tiledImage.setFlipped(true);

	}

	tick () {
		if (this.x < this.maxX){
			this.x += 2;
		}
		this.tiledImage.tick(this.x,this.y, ctx);
	}
}