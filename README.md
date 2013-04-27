transitionrunner
================


##usage:

simle animation
animates through keyframes defined in CSS
3 frames by default

	//js
	animate(element,'myAnimationClass');
	//css
	.myAnimationClass[data-kframe=1] { top: 40% }
	.myAnimationClass[data-kframe=2] { top: 42% }
	.myAnimationClass[data-kframe=3] { top: 44% }

other options


	//js
	animate(element,'myAnimationClass',{
		steps:10, //number of steps
		delay:2000, //wait this long before run
		duration:300 //frame duration 
		repeat: 5 //how many runs of animation
		});

run animation again

	//js

	var anim_runner = animate(element,'myAnimation');
	anim_runner.run({ //can override settings
		steps:10, //number of steps
		delay:2000, //wait this long before run
		duration:300 //frame duration 
		repeat: 5 //how many runs of animation
		})
