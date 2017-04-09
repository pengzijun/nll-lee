/**
 * Created by moersing on 19/12/2016.
 */
import vue from 'vue';
import  store from '../store/index';
/**
 * @desc 生成一个类型判断的函数
 * @param {string} type - 生成的函数将会严格判断是否等于改类型
 * */
function _isType(type) {
    return function (o) {
        return Object.prototype.toString.call(o).toLowerCase() === `[object ${type.toLowerCase()}]`;
    }
}

const
    Utils = {
        isType: _isType,
        isFunction: _isType('function'),
        /**
         * @desc format to date time
         * @param {String} t  - A date time string
         * @param {String} f  - A format string
         * */
        toTimeFormat(t, f) {
            if (f == null || f == '') {
                f = 'yyyy-MM-dd';
            }
            var newDate = new Date(t);
            var date = {
                "M+": newDate.getMonth() + 1,
                "d+": newDate.getDate(),
                "h+": newDate.getHours(),
                "m+": newDate.getMinutes(),
                "s+": newDate.getSeconds(),
                "q+": Math.floor((newDate.getMonth() + 3) / 3),
                "S+": newDate.getMilliseconds()
            };
            if (/(y+)/i.test(f)) {
                f = f.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            for (var k in date) {
                if (new RegExp("(" + k + ")").test(f)) {
                    f = f.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                }
            }
            return f;
        },
    }
export  default Utils;
