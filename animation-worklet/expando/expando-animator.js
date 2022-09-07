registerAnimator('expando', class ExpandAnimator {
  constructor(options) {
    /* 构造函数，动画示例被创建时调用，可用于做一些初始化 */
  }

  animate(currentTime, effect) {
    // currentTime: 用于控制动画执行的数值，通常根据它的数值来动态修改另一个参数effect，从而影响动画执行。例如我们可以传入document.timeline或者传入element.scrollTop作为这个动态数值，传入前者表明我们只是想用时间变化来控制动画的执行，传入后者表明我们想通过滚动距离来控制动画执行。
    // document.timeline是每个页面被打开后从0开始递增的时间数值，可以简单理解为页面被打开的时长，初始时document.timeline === 0，随着时间不断递增。
    // effect: 可通过修改它来影响动画执行。一个很常见的做法是，通过修改effect.localTime控制动画的执行，effect.localTime的作用相当于控制动画播放的进度条，修改它的数值就相当于拖动动画播放的进度。
    /* 干预动画的执行 */
    // console.log('currentTime', currentTime);
    const repeatTime = currentTime * 0.001 % 15;
    console.log('repeatTime', repeatTime);
    let t = 0;
    // 0-5(0-5) 5-10:5  10-15(5->0)
    if (repeatTime < 5)
      t = Math.max(0, repeatTime - 1);
    else if (repeatTime > 10)
      t = Math.max(0, 15 - repeatTime);
    else
      t = 5;
    console.log('t', t);
    effect.localTime = 1 * 1000;
  }
});
