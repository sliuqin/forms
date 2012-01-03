var util = require('../util');
var Field = require('./Field').Field;

/**
 * 字符输入字段
 * @classDescription 一般配合 select 使用。
 * @inherits Field
 *
 */
function ChoiceField(options) {
    this.type = 'ChoiceField';
    this.options = {
        //选项列表 value-show
        choice_list : {}
    }
    util.extend(this.options, options);
    Field.call(this, this.options);
}

util.inherits(ChoiceField, Field);
ChoiceField.prototype._init = function() {
    Field.prototype._init.apply(this);
    this.choice_list = this.options.choice_list;
    return this;
}
ChoiceField.prototype.is_valid = function() {
    var valid = Field.prototype.is_valid.apply(this);
    //如果校验不通过
    if(!valid) {
        return false;
    }
    return true;
}
/**
 * 设置select选项
 * @param {Array} choice_list [['value','show'],['value','show']]
 */
ChoiceField.prototype.set_choice_list = function(choice_list) {
    this.choice_list = choice_list;
    return this;
}
exports.ChoiceField = ChoiceField;
