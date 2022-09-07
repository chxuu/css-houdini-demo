registerLayout('masonry', class {
  static get inputProperties() {
    return [ '--padding', '--columns' ];
    // return [];
  }

  async intrinsicSizes() { /* TODO implement :) */ }
  async layout(children, edges, constraints, styleMap) {
    const inlineSize = constraints.fixedInlineSize;

    console.log('inlineSize===>', 'inlineSize');
    console.log('children===>', children);
    console.log('edges===>', edges);
    console.log('constraints===>', constraints);
    console.log('styleMap【---padding】===>', styleMap.get('--padding'));
    console.log('styleMap【--columns】===>', styleMap.get('--columns'));

    const padding = parseInt(styleMap.get('--padding').toString());
    const columnValue = styleMap.get('--columns').toString();
    let columns = parseInt(columnValue);
    if (columnValue == 'auto' || !columns) {
      columns = Math.ceil(inlineSize / 350);
    }

    const childInlineSize = (inlineSize - ((columns + 1) * padding)) / columns;
    const childFragments = await Promise.all(children.map((child) => {
      // layoutNextFragment
      return child.layoutNextFragment({fixedInlineSize: childInlineSize});
    }));

    let autoBlockSize = 0;
    const columnOffsets = Array(columns).fill(0);
    for (let childFragment of childFragments) {
      const min = columnOffsets.reduce((acc, val, idx) => {
        if (!acc || val < acc.val) {
          return {idx, val};
        }

        return acc;
      }, {val: +Infinity, idx: -1});

      childFragment.inlineOffset = padding + (childInlineSize + padding) * min.idx;
      childFragment.blockOffset = padding + min.val;

      columnOffsets[min.idx] = childFragment.blockOffset + childFragment.blockSize;
      autoBlockSize = Math.max(autoBlockSize, columnOffsets[min.idx] + padding);
    }

    return {autoBlockSize, childFragments};
  }
});