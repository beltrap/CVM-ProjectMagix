class Reborn {
	constructor(maxX, posY) {
		this.x = 1;
		this.y = posY;
        this.maxX = maxX;
        this.direction = false;
        this.speed = 5
		// Param necessaire
		let columnCount = 5;
		let rowCount = 1;
		let refreshDelay = 100;
		let scale = 1;
		let columnLoop = true;

		this.tiledImage = new TiledImage("img/canvasReborn.png",
										columnCount, rowCount, refreshDelay,
										columnLoop,scale);
		// this.tiledImage.changeRow(this.direction);
        this.tiledImage.changeMinMaxInterval(0,4);
		// this.tiledImage.setFlipped(true);

	}

	tick () {
        if (this.x > window.innerHeight + 200 || this.x < -100){
            this.speed = -this.speed;
        }
        this.x +=this.speed;
		this.tiledImage.tick(this.x,this.y, ctx);
	}
}