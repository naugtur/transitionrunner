var animate = function(element,animationName,S){
	"use strict";
	var timeskip=0,stepCounter,repeats=0,duration=100,
	dynamics=null;

	S || (S={});
	S.steps || (S.steps=3);
	S.duration || (S.duration=100);
	S.delay || (S.delay=0);
	S.repeat || (S.repeat=1);

	element.setAttribute('class',element.getAttribute('class')+' '+animationName);

	function next(){
		stepCounter++;
		element.setAttribute('data-kframe',stepCounter);
		if(stepCounter<S.steps){
			setTimeout(next,S.duration);
		}else{
			if(repeats<S.repeat){
				setTimeout(run,S.delay);			
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
	setTimeout(run,S.delay); //skip to the moment after all methods are called
	return {
		run:run		
	}

};
