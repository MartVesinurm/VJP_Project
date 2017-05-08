    var cars;
    var potholes;
    var marks;
    var drinks;
    var playerSpeed = 150;
    var carSpeedRight = 40;
    var carSpeedLeft = -40;
    var potholesRepaired = 0;
    var timeInterval = 1000;
    var player;
    

var level1State = {


	create: function(){



		game.add.sprite(0, 0, 'background1');
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

		text = game.add.text(650, 24, "Score: 0", {
	        font: "24px Arial",
	        fill: "#ffffff",
	        align: "left"
	    });

	    text.anchor.setTo(0.5, 0.5);

	    timer = game.time.events.loop(timeInterval, spawnLevel1, this); 
	    potholeTimer = game.time.events.loop(5000, addPotholes, this); 
	    powerupTimer = game.time.events.loop(8000, addPowerups, this); 
	
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

	    if(potholesRepaired > 10){
	    	potholesRepaired = 0
	    	game.state.start('level2');
	    }


	    game.world.bringToTop(cars);
	    updateText();
		
		game.physics.arcade.overlap(player, drinks, energyBoost, null, this);
		game.physics.arcade.overlap(player, marks, speedAlert, null, this);
		game.physics.arcade.overlap(player, cars, die, null, this);
		game.physics.arcade.overlap(player, potholes, updateScore, null, this);
		game.physics.arcade.collide(cars, cars);
		game.physics.arcade.overlap(cars, potholes, reduceScore, null, this);

	},

	


 };
	function winLevel() {
		game.state.start('level2');
	};

