window.animationWorkletPolyfill.load().then(_=> {
  CSS.animationWorklet.addModule('expando-animator.js').then(function(){
    const expando = document.querySelector('.expando .bg');
    const expandX = 100;
    const effectOptions = {duration: 5000, fill: 'both'};
    // translate(0px, 0px)
    const expando_effect = new KeyframeEffect(expando, [{'transform': 'translateX(0px)'}, {'transform': 'translateX(' + expandX + 'px)'}], effectOptions);

    window.expandoAnimator = new WorkletAnimation('expando', expando_effect, new DocumentTimeline(), {'expandX': expandX});

    window.expandoAnimator.play();
  });

});