var util = require('../util');
var Field = require('./Field').Field;
var CharField = require('./CharField').CharField;
/**
 * 字符输入字段
 * @classDescription 一般配合 textarea 使用。
 * @inherits Field
 *
 */
function TextField(options) {
    this.options = {

    }
    util.extend(this.options, options);
    CharField.call(this, this.options);
    this.type = 'TextField';
}

util.inherits(TextField, CharField);
exports.TextField = TextField;
