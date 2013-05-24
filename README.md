transitionrunner
================

It's always a choice between a bloated JavaScript animation library that works in every browser or CSS animations that are not avaliable in some older browsers.

This is a tiny JavaScript tool to enable you to define keyframes in CSS and make it run with JavaScript. You get a simple and powerful CSS animation feature on new browsers that falls back to runing only the keyframes in a browser with no transition support.

Simplest demo: http://naugtur.github.io/transitionrunner/

##usage:

 - simple animation

animates through keyframes defined in CSS
(3 frames by default)
 
js

     animate(element,'myAnimationClass');
css

     .myAnimationClass[data-kframe=1] { top: 40% !important; }
     .myAnimationClass[data-kframe=2] { top: 42% !important; }
     .myAnimationClass[data-kframe=3] { top: 44% !important; }

 - other options
  
js

     animate(element,'myAnimationClass',{
         steps:10, //number of steps
         delay:2000, //wait this long before each run 
         duration:300 //frame duration 
         repeat: 5 //how many runs of animation
         });

 - run animation again
 
js

     var anim_runner = animate(element,'myAnimation');
     //... later
     anim_runner.run({ //can run it again with new settings
         steps:10, //number of steps
         delay:2000, //wait this long before run
         duration:300 //frame duration 
         repeat: 5 //how many runs of animation
         })

 - stop animation while it's going
 
js

     var anim_runner = animate(element,'myAnimation');
     //... later
     anim_runner.stop();   


##easing

Transitionrunner's settings allow to set `duration` as a number, so the animation loop is linear. But easing is about speed, not time. 

If `v = s/t` and `t` is constant, then you can create easing by changing the distance. 

Annotated CSS from the demo:

    .shake { top: 50px; } /*initial*/
    .shake[data-kframe="1"]{ top: 30px !important; } /*20px move*/
    .shake[data-kframe="2"]{ top: 20px !important; } /*10px move*/
    .shake[data-kframe="3"]{ top: 30px !important; } /*10px move back*/
    .shake[data-kframe="4"]{ top: 50px !important; } /*20px move back*/
    .shake[data-kframe="5"]{ top: 70px !important; } /*20px move*/
    .shake[data-kframe="6"]{ top: 80px !important; } /*10px move*/
    .shake[data-kframe="7"]{ top: 70px !important; } /*10px move back*/
    /*and 20px back to default*/
