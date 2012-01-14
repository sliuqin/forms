var util = require('../util');
function Field(options) {
    var field = this;
    this.options = {
        //是否是必填项
        required : false,
        get : function(val) {
            val = typeof val != 'undefined' ? val : typeof this.val !='undefined' ? this.val :'';
            return val;
        },
        set : function(val) {
            this.val = val;
            return this.val;
        }
    }
    //处理required

    util.extend(this.options, options);
    this._init();
}

Field.prototype = {
    _init : function() {
    },
    is_valid : function() {
        var val = this.get();
        console.log(val)
        if(this.options.required && (val == '' || typeof (val) == 'undefined')) {
            this.error = util.isArray(this.options.required) ? this.options.required[1] : 'this field is required!';
            return false;
        }
        return true;
    },
    set : function(val) {
        return this.options.set(val);
    },
    get : function() {
        return this.options.get();
    }
}
exports.Field = Field;
