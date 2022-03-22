class Human {
	constructor(pos, border, perso) {
		this.pos = pos;
		this.border = border
		this.flip = false;
		this.step = 2;
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
		if (this.pos.x < this.border.b2 && this.pos.x > this.border.b1){
			this.pos.x += this.step;
		} else {
			this.flip = !this.flip;
			this.tiledImage.setFlipped(this.flip);
			this.step *= -1;
		}
		this.tiledImage.tick(this.pos.x,this.pos.y, ctx);
	}
}