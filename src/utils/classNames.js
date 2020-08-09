export const classnames = obj => {
  let finalClassNames = '';
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      finalClassNames = finalClassNames.length > 0 ? finalClassNames + ' ' + key : key;
    }
  });
  return finalClassNames;
};