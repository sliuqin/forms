var util = require('../util');
var Field = require('./Field').Field;
var TextField = require('./TextField').TextField;
/**
 * 富文本输入字段
 * @classDescription 一般配合 textarea 使用。
 * @inherits Field
 *
 */
function RichTextField(options) {
    this.options = {
        //富文本框主题
        theme:'advanced',
        skin:'default'
    }
    util.extend(this.options, options);
    TextField.call(this, this.options);
    this.type = 'RichTextField';
}

util.inherits(RichTextField, TextField);
exports.RichTextField = RichTextField;
