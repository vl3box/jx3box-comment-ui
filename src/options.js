import { $cms } from "@jx3box/jx3box-common/js/https";
import User from "@jx3box/jx3box-common/js/user";
const KEY = "cmt_order";

async function getOrderMode() {
    // console.log(User.isLogin())
    if (User.isLogin()) {
        return $cms()
            .get(`/api/cms/user/conf`, {
                params: {
                    key: KEY
                }
            })
            .then(res => {
                return res.data.data;
            });
    } else {
        return new Promise(resolve => {
            const key = localStorage.getItem(KEY) || 'desc'
            resolve(key);
        });
    }
}

async function setOrderMode(val) {
    if (User.isLogin()) {
        return $cms()
            .post(
                `/api/cms/user/conf`,
                {
                    val: val
                },
                {
                    params: {
                        key: KEY
                    }
                }
            )
            .then(res => {
                return res.data.data;
            });
    } else {
        return new Promise(resolve => {
            resolve(localStorage.setItem(KEY, val));
        });
    }
}

export { getOrderMode, setOrderMode };
