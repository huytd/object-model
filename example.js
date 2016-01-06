var OM = require('./index.js');

var carModel = {
    make: '',
    year: 0,
    name: '',
    mpg: 0,
    preowned: false
};

OM.createModel(carModel);

var rav4 = carModel.init('toyota', 2000, 'RAV4', 27);
console.log(rav4);

var crv = carModel.init({
    make: 'honda',
    year: 2005,
    name: 'CRV',
    preowned: true
});
console.log(crv);
