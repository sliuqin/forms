var util = require('../util');
var Field = require('./Field').Field;

/**
 * 字符输入字段
 * @classDescription 一般配合 input type=text 使用。
 * @inherits Field
 *
 */
function CharField(options) {
    this.options = {

    }
    util.extend(this.options, options);
    Field.call(this, this.options);
    this.type = 'CharField';
}

util.inherits(CharField, Field);
CharField.prototype.is_valid = function() {
    var valid = Field.prototype.is_valid.apply(this);
    //如果校验不通过
    if(!valid) {
        return false;
    }
    return true;
}
exports.CharField = CharField;
