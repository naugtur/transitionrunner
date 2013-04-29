transitionrunner
================

It's always a choice between a bloated JavaScript animation library that works in every browser or CSS animations that are not avaliable in some older browsers.

This is a tiny JavaScript tool to enable you to define keyframes in CSS and make it run with JavaScript. You get a simple and powerful CSS animation feature on new browsers that falls back to runing only the keyframes in a browser with no transition support.

##usage:

 - simple animation

animates through keyframes defined in CSS
(3 frames by default)

	//js
	animate(element,'myAnimationClass');
	//css
	.myAnimationClass[data-kframe=1] { top: 40% !important; }
	.myAnimationClass[data-kframe=2] { top: 42% !important; }
	.myAnimationClass[data-kframe=3] { top: 44% !important; }

 - other options


	//js
	animate(element,'myAnimationClass',{
		steps:10, //number of steps
		delay:2000, //wait this long before each run 
		duration:300 //frame duration 
		repeat: 5 //how many runs of animation
		});

 - run animation again

	//js

	var anim_runner = animate(element,'myAnimation');
	//... later
	anim_runner.run({ //can run it again with new settings
		steps:10, //number of steps
		delay:2000, //wait this long before run
		duration:300 //frame duration 
		repeat: 5 //how many runs of animation
		})
