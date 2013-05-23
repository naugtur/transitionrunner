var animate = (function(){
	"use strict";

	var domPrefixes = 'webkit Moz O ms Khtml'.split(' '),
	trans  = '',support=false,
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

		var timeskip=0,stepCounter,repeats=0,duration=100,
		dynamics=null,currentTimer;

		S || (S={});
		S.steps || (S.steps=3);
		S.duration || (S.duration=100);
		S.delay || (S.delay=0);
		S.repeat || (S.repeat=1);

		element.setAttribute('class',element.getAttribute('class')+' '+animationName);
		if(trans !== ''){
			element.style[trans] = 'All '+S.duration+'ms linear';
		}

		function next(){
			stepCounter++;
			if(stepCounter<=S.steps){
				element.setAttribute('data-kframe',stepCounter);
				currentTimer = setTimeout(next,S.duration);
			}else{
				element.removeAttribute('data-kframe');
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
			stepCounter=0;
			repeats++;
			next();

		}
		function stop(){
			clearTimeout(currentTimer);
			element.removeAttribute('data-kframe');
		}
	currentTimer = setTimeout(run,S.delay); //skip to the moment after all methods are called
	return {
		run:run,
		stop:stop
	}

};


})();
