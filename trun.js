var animate = (function(){
	"use strict";

	var domPrefixes = 'webkit Moz O ms Khtml'.split(' '),
	trans  = '',
	elm = document.createElement('div');

	if( elm.style.transition ) { 
		trans  = 'transition';
	} else {
		for( var i = 0; i < domPrefixes.length; i++ ) {
			if( elm.style[domPrefixes[i] + 'Transition'] !== undefined ) {
				trans = domPrefixes[i] + 'Transition';
				break;
			}
		}
	}

	return function(element,animationName,S){

		var stepCounter,repeats=0,currentTimer,initialClass;

		S || (S={});
		S.steps || (S.steps=3);
		S.duration || (S.duration=100);
		S.delay || (S.delay=0);
		S.repeat || (S.repeat=1);

                initialClass = element.getAttribute('class');
                initialClass=(initialClass)?initialClass:'';
		element.setAttribute('class',initialClass+' '+animationName);
		if(trans !== ''){
			element.style[trans] = 'All '+S.duration+'ms linear';
		}

		function next(){
			stepCounter++;
			if(stepCounter<=S.steps){
				element.setAttribute('data-kframe',stepCounter);
				currentTimer = setTimeout(next,S.duration);
			}else{//end animation
				element.removeAttribute('data-kframe');
                                element.setAttribute('class',initialClass);
				if(repeats<S.repeat){
					currentTimer = setTimeout(run,S.delay);			
				}
			}
		}
		function run(overrideS){
			if(overrideS){
				overrideS.delay && (S.delay = overrideS.delay);
				overrideS.duration && (S.duration = overrideS.duration);
				overrideS.steps && (S.steps = overrideS.steps);
				overrideS.repeat && (S.repeat = overrideS.repeat);
			}
                        element.setAttribute('class',initialClass+' '+animationName);
			stepCounter=0;
			repeats++;
			next();

		}
		function stop(){
			clearTimeout(currentTimer);
			element.removeAttribute('data-kframe');
                        element.setAttribute('class',initialClass);
		}
	currentTimer = setTimeout(run,S.delay); //skip to the moment after all methods are called
	return {
		run:run,
		stop:stop
	}

};


})();
