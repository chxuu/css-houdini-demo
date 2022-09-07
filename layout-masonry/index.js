// CSS.registerProperty({
//   name: '--color-stop',
//   syntax: '<color>',
//   inherits: false,
//   initialValue: 'transparent'
// })
if ('layoutWorklet' in CSS) {
  // 把自定义的瀑布流布局脚本添加到Layout Worklet中
  // 解释layoutWorklet
  CSS.layoutWorklet.addModule('masonry.js');
}