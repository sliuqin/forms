/**
 * https://docs.djangoproject.com/en/1.3/ref/forms/fields/
 */
var util = require('util');
var EventEmitter = require('events').EventEmitter;
function Form(form_data) {
    this.form_data = form_data || {};
    this.cleaned_data = {};
    this._init();
}

util.inherits(Form, EventEmitter);
Form.prototype = {
    _init : function(fields) {
        this._update_cleaned_data(this.form_data);
        for(var f in this.fields) {
            var field = this.fields[f];
            field.name = field.options.name || f;
            field.label = field.options.label || f;
        }
        return this;
    },
    /**
     * 更新cleaned_data
     * @
     */
    _update_cleaned_data : function(data) {
        this.cleaned_data = {};
        for(var o in this.fields) {
            var val = data[o], field = this.fields[o];
            if( typeof val == 'string' && field.options.trim) {
                val = val.trim();
            }
            this.cleaned_data[o] = val || ( typeof field.options['default'] != 'undefined' ? field.options['default'] : '');
            this.fields[o].val = val;
        }
        return this;
    },
    get_cleaned_data : function() {
        this._update_cleaned_data(this.form_data);
        return this.cleaned_data;
    },
    /**
     * 获取表单错误
     */
    get_errors : function() {
        if(this.is_valid()) {
            return {};
        } else {
            return this.errors;
        }
    },
    /**
     * 校验表单
     * @return {Object}
     */
    is_valid : function() {
        this.errors = {};
        var valid = true, v, field;
        for(var f in this.fields) {
            field = this.fields[f];
            v = field.is_valid();
            //如果校验不通过，那么返回false；
            if(!v) {
                valid = false;
                this.errors[f] = field.error;
            }
        }
        return valid;
    }
}
Form.clone = function(form) {

}
exports.Form = Form;
