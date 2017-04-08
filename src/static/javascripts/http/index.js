/**
 * Created by moersing on 11/9/2016.
 */
import {app} from 'javascripts/app';
import eventsHub from 'javascripts/eventsHub';
let
    config = {
        _timeout: 5000,
        root: process.env.http.root
    };
let
    assign = Object.assign;
/**
 * @desc vue resource 预设处理，包括超时,预设参数,错误等
 * @desc vue resource HTTP
 * */
function HttpFetch(http) {
    if (http && http.interceptors) {
        http.interceptors.push(_errorHandle, _timeout, _setRequest);
    }
    http.options.root = config.root; // root of http request
    let
        overWriteMethods = {
            get: http.get,
            post: http.post,
            put: http.put
        };

    /**
     * @desc overwrite get method of http
     * */
    ['get'].forEach(value => {
        http[value] = (url, options) => {
            return overWriteMethods[value].call(http, url, assign(_defaultOptions(), options));
        };
    });
    /**
     * @desc overwrite post/put method of http
     * */
    ['post', 'put'].forEach(value => {
        http[value] = (url, body = {}, options) => {
            return overWriteMethods[value].call(http, url, body, assign(_defaultOptions(), options));
        }
    })
}
/**
 * @desc  处理默认参数
 * */
function _defaultOptions() {
    return {
        headers: {
            Authorization: app.cookie.get('userToken') || ''
        }
    }
}

/**
 * @desc  超时处理
 * */
function _timeout(request, next) {
    let
        timeSeed,
        timeout = typeof request.timeout === 'number' ? request.timeout : config._timeout;
    delete request.timeout;

    timeSeed = setTimeout(() => {
        request.abort && request.abort();
        _timeoutHandle();
    }, timeout);
    next(function () {
        clearTimeout(timeSeed);
    });
}

/**
 * @desc  超时处理函数
 * */
function _timeoutHandle() {
    return eventsHub.$emit('toggleDialog', {
        content: '请求超时了,请刷新重试.',
        visible: true,
        close(){
            location.reload();
        },
        confirmButton: {
            text: '刷新一下'
        }
    });
}

/**
 *@desc 预设参数
 * */
function _setRequest(request, next) {
    if (request.method === 'GET') {
        request.params._ = Date.now(); //prevent cache
    }
    request._timeout = config._timeout;
    next();
}

/**
 * @desc 错误处理，当请求失败，或者 res.data.hasError === true 时调用该参数
 * */
function _errorHandle(request, next) {

    next(function (response) {
        let
            code = response.body.code;
        if (code === '401' || code === '4001') {
            eventsHub.$emit('toggleDialog', {
                content: '太久没动了,重新登录一下吧！！！',
                visible: true,
                close: function () {
                    this.$router.push('/');
                }
            });
        }
        if (response.status === 500) {
            eventsHub.$emit('toggleDialog', {
                content: '服务器现在很忙....,刷新一下看看有没有反应.',
                visible: true,
                close(){
                    location.reload();
                },
                confirmButton: {
                    text: '刷新一下'
                }
            })
        }
    });
}

export default HttpFetch;
