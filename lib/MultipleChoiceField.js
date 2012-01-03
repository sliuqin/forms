var util = require('../util');
var Field = require('./Field').Field;
var ChoiceField = require('./ChoiceField').ChoiceField;
/**
 * 字符输入字段
 * @classDescription 一般配合 select 使用。
 * @inherits Field
 *
 */
function MultipleChoiceField(options) {
    this.options = {

    }
    util.extend(this.options, options);
    ChoiceField.call(this, this.options);
    this.type = 'MultipleChoiceField';
}

util.inherits(MultipleChoiceField, ChoiceField);
MultipleChoiceField.prototype.is_valid = function() {
    //必填项
    var val = this.get_value();
    if(this.options.required && val.length == 0) {
        this.error = util.isArray(this.options.required) ? this.options.required[1] : 'this field is required!';
        return false;
    }
    return true;
}
MultipleChoiceField.prototype.get_value = function() {
    return this.val || [];
}
/**
 * 设置多选select的值.
 * @param {Array} values
 */
MultipleChoiceField.prototype.set_value = function(values) {
    if( typeof values == 'string') {
        values = [values];
    }
    this.val = values;
    return this;
}
exports.MultipleChoiceField = MultipleChoiceField;
