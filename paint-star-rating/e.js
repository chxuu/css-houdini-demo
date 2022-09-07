registerLayout('layout-api-example', class {
  static get inputProperties() { return ['--exampleVariable']; }
  static get childrenInputProperties() { return ['--exampleChildVariable']; }
  static get layoutOptions() {
    return {
      childDisplay: 'normal',
      sizing: 'block-like'
    };
  }
  intrinsicSizes(children, edges, styleMap) {
    /* ... */
  }
  layout(children, edges, constraints, styleMap, breakToken) {
    /* ... */
  }
});