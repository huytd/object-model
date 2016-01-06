;(function(){
    function ObjectModel() { }

    ObjectModel.prototype.createModel = function(o) {
        if (typeof(o) == 'object') {
            o.init = function() {
                var obj = {};
                var keys = Object.keys(o);
                var arg = arguments;

                if (typeof(arg[0]) == 'object') {
                    var prm = arg[0]; var prmKeys = Object.keys(prm);
                    var paramMatched = true;
                    for (var i = 0; i < prmKeys.length; i++) {
                        if (keys.indexOf(prmKeys[i]) == -1) {
                            paramMatched = false;
                            break;
                        }
                    }
                    if (paramMatched) {
                        // parse from object
                        for (var i = 0; i < keys.length; i++) {
                            var key = keys[i];
                            if (key != 'init') {
                                if (prmKeys.indexOf(key) != -1) {
                                    obj[key] = prm[key];
                                } else {
                                    obj[key] = o[key];
                                }
                            }
                        }
                        return obj;
                    }
                }

                // parse from arguments
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (key != 'init') {
                        if (i < arguments.length) {
                            obj[keys[i]] = arguments[i];
                        } else {
                            obj[keys[i]] = o[keys[i]];
                        }
                    }
                }
                return obj;
            }
        }
    };

    module.exports = new ObjectModel;
})();
