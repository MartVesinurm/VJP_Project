
var game = new Phaser.Game(720, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('background1', 'assets/pictures/background1.png');
	game.load.image('background2', 'assets/pictures/background2.png');
	game.load.image('background3', 'assets/pictures/background3.png');
	
    game.load.image('mofo', 'assets/pictures/möfö.png');
	game.load.image('nopeusmerkki', 'assets/pictures/nopeusmerkki.png');
	
	
    game.load.image('car', 'assets/pictures/cars/car2.png');
	
	
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
	cars.enableBody = true;
	
	player = game.add.sprite(32, game.world.height - 150, 'dude');
	
	player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
	
	for (var i = 0; i < 12; i++)
    {
        var car = cars.create(110, 130, 'car');
	}
}

function update() {
	
	var cursors = game.input.keyboard.createCursorKeys();

	
	if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }

}