/**
 * Created by moersing on 2016/9/19.
 */

let
    App = {
        /**
         * @desc operate the browser cookies
         * */
        cookie: {
            /**
             * @desc get the browser cookie
             * @param {string} name - a cookie name
             * */
            get(name) {
                var
                    result = _normalCookies();
                return result[name] != null ? decodeURIComponent(result[name]) : false;
            },
            /**
             * @desc set the browser cookie
             * @param {string} name - a cookie name
             * @param {string} value  - a cookie value
             * @param {object} [options] - an optional the cookie option
             * */
            set(name, value, options) {
                var
                    cookie = [name + '=' + encodeURIComponent(value)],
                    key,
                    expires;
                if ((name == null || value == null)) {
                    return false;
                }
                for (key in options) {
                    if (options.hasOwnProperty(key)) {
                        if (key === 'expires') {
                            expires = new Date();
                            expires.setTime(expires.getTime() + (options[key] - 0));
                            options[key] = expires.toUTCString();
                        }
                        if (key === 'maxAge') {
                            cookie.push('max-Age=' + options[key]);
                        } else {
                            cookie.push(key + '=' + options[key]);
                        }
                    }
                }
                document.cookie = cookie.join(';');
                return this;
            },
            /**
             * @desc remove the browser cookie(s)
             * @desc {string} [name] - an optional the param `name`
             * */
            remove(name) {
                var
                    result = _normalCookies(),
                    key;
                if (name) {
                    this.set(name, '', {
                        expires: -1,
                        path: '/'
                    });
                } else {
                    for (key in result) {
                        if (result.hasOwnProperty(key)) {
                            this.set(key, '', {
                                expires: -1,
                                path: '/'
                            });
                        }
                    }
                }
                return this;
            }
        },
        /**
         * @desc 有关日期的操作
         * */
        date: {
            /**
             * @desc 获取某个月的最后一天
             * @param {Number} num - 如果是正整数，则是表示某个月(0-11),如果是负数,表示之前的几个月,
             *   -2 表示前两个月的最后一天
             *   2表示今年二月份的最后一天
             * */
            getLastDateOfMonth(num = 0){
                let
                    date = new Date(),
                    result;
                if (num < 0) {
                    result = new Date(date.getFullYear(), date.getMonth() + num, 0);
                }
                else {
                    result = new Date(date.getFullYear(), num, 0);
                }
                return result.getDate();
            }
        }
    };
/**
 * @desc normal the browser cookie
 * */
function _normalCookies() {
    var
        cookies = document.cookie.split(';'),
        single,
        result = {},
        len = cookies.length;
    while (len--) {
        single = cookies[len].split('=');
        result[single[0].trim()] = single[1];
    }
    return result;
}

export default App;