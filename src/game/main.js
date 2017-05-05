
var game = new Phaser.Game(720, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function die(player, cars) {
	player.frame = 278;
}


function preload() {
	game.load.image('background1', 'assets/pictures/background1.png');
	game.load.image('background2', 'assets/pictures/background2.png');
	game.load.image('background3', 'assets/pictures/background3.png');
	
    game.load.image('mofo', 'assets/pictures/möfö.png');
	game.load.image('nopeusmerkki', 'assets/pictures/nopeusmerkki.png');

	game.load.image('pothole', 'assets/pictures/pothole.png');
	
    game.load.image('car11', 'assets/pictures/cars/car1_1.png');
    game.load.image('car12', 'assets/pictures/cars/car1_2.png');

    game.load.image('car21', 'assets/pictures/cars/car2_1.png');
    game.load.image('car22', 'assets/pictures/cars/car2_2.png');

    game.load.image('car31', 'assets/pictures/cars/car3_1.png');
    game.load.image('car32', 'assets/pictures/cars/car3_2.png');

    game.load.image('car41', 'assets/pictures/cars/car4_1.png');
    game.load.image('car42', 'assets/pictures/cars/car4_2.png');
	
	game.load.image('car51', 'assets/pictures/cars/car5_1.png');
    game.load.image('car52', 'assets/pictures/cars/car5_2.png');

    game.load.image('car61', 'assets/pictures/cars/car6_1.png');
    game.load.image('car62', 'assets/pictures/cars/car6_2.png');

    game.load.image('car71', 'assets/pictures/cars/car7_1.png');
    game.load.image('car72', 'assets/pictures/cars/car7_2.png');

    game.load.image('car81', 'assets/pictures/cars/car8_1.png');
    game.load.image('car82', 'assets/pictures/cars/car8_2.png');
	
	
    game.load.spritesheet('dude', 'assets/pictures/character.png', 32, 32);
}

var cars;
var holes;
var specials;
var player;

function create() {	
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	game.add.sprite(0, 0, 'background1');
	cars = game.add.group();
	potholes = game.add.group();
	cars.enableBody = true;
	
	player = game.add.sprite(32, game.world.height - 150, 'dude');
	game.physics.arcade.enable(player);
	player.body.collideWorldBounds = true;
	
	player.animations.add('up', [104, 105, 106, 107, 108, 109, 110, 111, 112], 10, true);
    player.animations.add('right', [143, 144, 145, 146, 147, 148, 149, 150, 151], 10, true);
	player.animations.add('left', [117, 118, 119, 120, 121, 122, 123, 124, 125], 10, true);
	player.animations.add('down', [130, 131, 132, 133, 134, 135, 136, 137, 138], 10, true);
	
	for (var i = 0; i < 12; i+=3)
    {
        var car11 = cars.create(i * 70, 159, 'car11');
		car11.body.velocity.x = 30;
		
	}

	for (var i = 0; i < 12; i+=3)
    {
        var car12 = cars.create(i * 70, 289, 'car12');
		car12.body.velocity.x = -30;
		
	}
}

function update() {
	
	var cursors = game.input.keyboard.createCursorKeys();
	
	player.body.velocity.x = 0;
	player.body.velocity.y = 0;
	
	if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
	 else if (cursors.up.isDown)
    {
        player.body.velocity.y = -150;

        player.animations.play('up');
    }
	 else if (cursors.down.isDown)
    {
        player.body.velocity.y = 150;

        player.animations.play('down');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 26;
    }

	game.physics.arcade.collide(player, cars, die, null, this);
}