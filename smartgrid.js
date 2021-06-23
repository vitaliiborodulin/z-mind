module.exports = {
  columns: 12,
  offset: '0px', //columns
  container: {
    maxWidth: '1400px',
    fields: '30px' // Внимание! fields обязан быть >= offset / 2
  },
  breakPoints: {
    // xl: {
    //   width: '1400px',
    //   fields: '26px'
    // },
    lg: {
      width: '992px',
      fields: '20px'
    },
    md: {
      width: '768px'
    },
    sm: {
      width: '414px',
      fields: '10px'
    },
    // xs: {
    //   width: '320px',
    //   fields: '10px'
    // }
  },
  // detailedCalc: true
};