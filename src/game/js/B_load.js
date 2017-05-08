
var loadState = {


	preload: function() {

		
		game.load.image('loadpic', 'assets/pictures/load.png');

		var loadingLabel = game.add.text(game.world.width / 2 - 150, 480 / 2, 'ladataan peliä...',
											{font: '30px Courier', fill: '#ffffff'});

		//Load game levels
		game.load.image('background1', 'assets/pictures/background1.png');
		game.load.image('background2', 'assets/pictures/background2.png');
		game.load.image('background3', 'assets/pictures/background3.png');


		//Load menu items
		game.load.image('backgroundMenu', 'assets/pictures/menu/menu.png');
		game.load.image('instructions', 'assets/pictures/menu/OHJEET.png');
		game.load.image('playGame', 'assets/pictures/menu/PELAA.png');
		game.load.image('information', 'assets/pictures/menu/TIETOA.png');
		game.load.image('more', 'assets/pictures/menu/more.png')

		game.load.image('backgroundOhjeet', 'assets/pictures/menu/menu_ohjeet.png');
		game.load.image('backgroundTietoa', 'assets/pictures/menu/menu_credits.png');

		//Load lose and win screens
		game.load.image('winScreen', 'assets/pictures/win.png');
		game.load.image('loseScreen', 'assets/pictures/lose.png');

		//Load UI sprites
		game.load.image('ui-soundOn', '/assets/pictures/UI-sprites/flatDark12.png');
		game.load.image('ui-pause', '/assets/pictures/UI-sprites/flatDark13.png');
		game.load.image('ui-soundOff', '/assets/pictures/UI-sprites/flatDark14.png');
		game.load.image('ui-play', '/assets/pictures/UI-sprites/flatDark15.png');
		game.load.image('ui-musicOn', '/assets/pictures/UI-sprites/flatDark16.png');
		game.load.image('ui-musicOff', '/assets/pictures/UI-sprites/flatDark18.png');
		game.load.image('ui-settings', '/assets/pictures/UI-sprites/flatDark21.png');
		game.load.image('ui-check', '/assets/pictures/UI-sprites/flatDark22.png');
		game.load.image('ui-menu', '/assets/pictures/UI-sprites/flatDark32.png');
		game.load.image('ui-cross', '/assets/pictures/UI-sprites/flatDark34.png');
		
		
		//Load powerups
	    game.load.image('energyDrink', 'assets/pictures/möfö.png');
		game.load.image('SpeedSign', 'assets/pictures/nopeusmerkki.png');

		//Load potholes and create game character sprite
		game.load.image('pothole', 'assets/pictures/pothole.png');
		game.load.spritesheet('dude', 'assets/pictures/character.png', 32, 32);

		//Load different vehicles
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

		
	},

	create: function() {
		game.add.sprite(0, 0, 'loadpic');
		game.state.start('menu')
	}
};


