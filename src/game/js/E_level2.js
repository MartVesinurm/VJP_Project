var level2State = {


	create: function(){
		
		level1music.mute = true;
		level2music.loopFull()
		
		timeInterval = 1500;
		carSpeedLeft = -60;
		carSpeedRight = 60;

		level = 2
		game.add.sprite(0, 0, 'background2');
		cars = game.add.group();
		potholes = game.add.group();
		cars.enableBody = true;

		player = game.add.sprite(game.world.width / 2, game.world.height / 2, 'dude');
		game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;
		
		player.animations.add('up', [104, 105, 106, 107, 108, 109, 110, 111, 112], 10, true);
	    player.animations.add('right', [143, 144, 145, 146, 147, 148, 149, 150, 151], 10, true);
		player.animations.add('left', [117, 118, 119, 120, 121, 122, 123, 124, 125], 10, true);
		player.animations.add('down', [130, 131, 132, 133, 134, 135, 136, 137, 138], 10, true);
		
		drinks = game.add.group();
		marks = game.add.group();


		marks.enableBody = true;
		drinks.enableBody = true;


		text = game.add.text(665, 24, "Score: 0", {
	        font: "24px Arial",
	        fill: "#ffffff",
	        align: "left"
	    });

	    text.anchor.setTo(0.5, 0.5);

	    timer = game.time.events.loop(timeInterval, spawnLevel2, this); 
	    potholeTimer = game.time.events.loop(5000, addPotholes, this); 
	    powerupTimer = game.time.events.loop(8000, addPowerups, this); 

	    //Adding the mute-button
    	this.musicToggle = this.game.add.button(this.game.world.width - 70, 420, 'soundOnOff', this.toggleMusic, this);
    
	    //Changing the correct frame of the mute-buttons spritesheet.
	    if (this.game.sound.mute) {
	      this.musicToggle.frame = 1;
	    } else {
	      this.musicToggle.frame = 0;
	    }
	
	},



	toggleMusic: function() {	
		if (this.game.sound.mute) {
			this.game.sound.mute = false;
			this.musicToggle.frame = 0;
		 } else {
			this.game.sound.mute = true;
			this.musicToggle.frame = 1;
		 }
	},

	update: function() {
		var cursors = game.input.keyboard.createCursorKeys();
	
		player.body.velocity.x = 0;
		player.body.velocity.y = 0;

		cars.forEach(checkPos, this);
		
		if (cursors.left.isDown)
	    {
	        player.body.velocity.x = -playerSpeed;

	        player.animations.play('left');
	    }
	    else if (cursors.right.isDown)
	    {
	        player.body.velocity.x = playerSpeed;

	        player.animations.play('right');
	    }
		 else if (cursors.up.isDown)
	    {
	        player.body.velocity.y = -playerSpeed;

	        player.animations.play('up');
	    }
		 else if (cursors.down.isDown)
	    {
	        player.body.velocity.y = playerSpeed;

	        player.animations.play('down');
	    }
	    else
	    {
	        //  Stand still
	        player.animations.stop();

	        player.frame = 26;
	    }

	    if(potholesRepaired > 1){
	    	potholesRepaired = 0
	    	game.state.start('level3');
	    }


	    game.world.bringToTop(cars);
	    updateText();
		
		game.physics.arcade.overlap(player, drinks, energyBoost, null, this);
		game.physics.arcade.overlap(player, marks, speedAlert, null, this);
		game.physics.arcade.overlap(player, cars, die, null, this);
		game.physics.arcade.overlap(player, potholes, updateScore, null, this);
		game.physics.arcade.collide(cars, cars);
		game.physics.arcade.overlap(cars, potholes, reduceScore, null, this);
		game.physics.arcade.overlap(cars, drinks, killPowerup, null, this);
		game.physics.arcade.overlap(cars, marks, killPowerup, null, this);
		
		if(potholesRepaired < -1000) {
			die(player);
		}
	},

	


 };

	function winLevel() {
		game.state.start('level3');
	};
