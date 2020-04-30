class Human {
	constructor(maxX, posY, perso, posX) {
		this.x = posX;
		this.y = posY;
		this.maxX = maxX;
		// Param necessaire
		let columnCount = 6;
		let rowCount = 1;
		let refreshDelay = 100;
		let scale = 1;
		let columnLoop = true;

		this.tiledImage = new TiledImage(perso,
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