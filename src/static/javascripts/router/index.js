/**
 * Created by moersing on 12/12/2016.
 * vue router configurations
 */
const routers =
    [
        {path: '/', component: require('components/login/login')},
        {path: '/login', component: require('components/login/login')},
        {
            path: '/index',
            component: require('components/index/index'),
            redirect:'/index/city',
            children: [
                {
                    path: 'city',
                    component: require('components/city/index'),
                    redirect:'/index/city/station',
                    children: [
                        {
                            path: 'station',
                            component: require('components/city/station/index'),
                            redirect:'/index/city/station/system-mode',
                            children: [
                                {
                                    path: 'system-mode',
                                    component: require('components/common/system-mode')
                                }, {
                                    path: 'valve-setting',
                                    component: require('components/common/valve-setting')
                                }, {
                                    path: 'temperature-setting',
                                    component: require('components/common/temperature-setting')
                                }, {
                                    path: 'time-setting',
                                    component: require('components/common/time-setting')
                                }, {
                                    path: 'history-data',
                                    component: require('components/common/history-data')
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
if (process.env.NODE_ENV === 'development') {
    routers.push({path: '/test', component: require('components/test')});
}
export default routers;
