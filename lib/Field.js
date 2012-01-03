var util = require('../util');
function Field(options) {
    this.options = {
        //是否是必填项
        required : false,
        //是否去除头尾空格
        trim : true
    }
    //处理required

    util.extend(this.options, options);
    this._init();
}

Field.prototype = {
    _init : function() {
    },
    is_valid : function() {
        //必填项
        var val = this.val;
        if( typeof val == 'string' && this.options.trim) {
            val = val.trim();
        }

        if(this.options.required && (val == '' || typeof (val) == 'undefined')) {
            this.error = util.isArray(this.options.required) ? this.options.required[1] : 'this field is required!';
            return false;
        }
        return true;
    },
    set_value : function(val) {
        this.val = val;
        return this;
    },
    get_value : function() {
        return this.val;
    }
}
exports.Field = Field;
