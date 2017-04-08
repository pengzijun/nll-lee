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
            redirect: '/index/transaction/class-manage',
            children: [
                {
                    path: 'transaction',
                    redirect: 'transaction/class-manage',
                    component: require('components/transaction/index'),
                    children: [
                        {
                            path: 'class-manage',
                            component: require('components/transaction/class-manage/index'),
                            meta: {activeIndex: 0} /**标志为当前选中的列表*/
                        },
                        {
                            path: 'order-manage',
                            component: require('components/transaction/order-manage/index'),
                        },
                        {
                            path: 'commodity-manage',
                            component: require('components/transaction/commodity-manage/index'),
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
