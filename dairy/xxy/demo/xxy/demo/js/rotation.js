window.onload = function () {
    //获得标签对象
    let imgs = $("imgs");
    let tab = $("tab");

    //获得子元素
    let imgsChildren = imgs.children;
    let tabChildren = tab.children;

    //记录当前图片
    let index = 0;
    //记录当前圆点
    let tabIndex = 0;

    //一张图片的宽度
    const IMG_WIDTH = document.body.clientWidth;

    //存储定时器的返回值
    let timer = null;

    for (let i = 0; i < tabChildren.length; i++) {
        //鼠标悬浮再第几个小圆点上，就切换到第几张图片
        tabChildren[i].onmouseover = function () {
            //鼠标悬浮时不自动播放，清除定时器
            clear();
            MotionUtils.bufferMove(imgs, {
                left: -i * IMG_WIDTH
            });
            //切换小圆点
            tabMove(i);
        }
        tabChildren[i].onmouseout = function () {
            startAuto();
        }
    }

    //自动播放
    startAuto();

    //自动播放
    function startAuto() {
        timer = setInterval(function () {
            rightMove();
        }, 5000);
    }

    //清除定时器
    function clear() {
        clearInterval(timer);
    }


    //小圆点
    function tabMove(i) {
        //切换到对应圆点，并修改index值和i的值一致
        index = i;
        //当i=4时，圆点应该为0
        if (i === 3) {
            i = 0;
        }
        tabChildren[i].className = "grayTab";
        //遍历tab，如果和i的值不相等则设为白色
        for (let j = 0; j < tabChildren.length; j++) {
            if (j !== i) {
                tabChildren[j].className = "whiteTab";
            }
        }
    }

    //左移
    function leftMove() {
        //向做移动index--
        index--;
        //若index=-1，那么就直接设置left为-4*IMG_WIDTH，然后index = 3
        if (index === -1) {
            imgs.style.left = -4 * IMG_WIDTH + "px";
            index = 3;
        }
        //设置left值
        MotionUtils.bufferMove(imgs, {
            left: -index * IMG_WIDTH
        });
        //切换小圆点
        tabMove(index);
    }

    //右移
    function rightMove() {
        //向右移动index++
        index++;
        //若index===5，把imgs的left值设为0，index设为1
        if (index === 5) {
            imgs.style.left = 0;
            index = 1;
        }
        //设置left值
        MotionUtils.bufferMove(imgs, {
            left: -index * IMG_WIDTH
        });
        //切换小圆点
        tabMove(index);
    }

    //转移导航栏代码至此处**********

}

function $(id) {
    return document.getElementById(id);
}

function getStyle(element, attr) {
    let result = element.currentStyle ? element.currentStyle[attr] : getComputedStyle(element, null)[attr];
    return Number.parseFloat(result);
}

let MotionUtils = {
    /*
     * @param obj 要改变的对象
     * @param attr 要改变的对象的属性
     * @param finalValue 要改变对象的属性的最大值
     * @param callback 在上一次运动完后下一次要运动的函数，回调自己
     */
    bufferMove: function (obj, data, callback) {
        //清除旧定时器
        clearInterval(obj.timer);
        //开启新定时器
        obj.timer = setInterval(function () {
            //flg标识运动是否完毕
            let flg = true;
            for (let attr in data) {
                //获得当前obj属性值
                let currentValue;
                if (attr === "opacity") {
                    currentValue = Number.parseFloat(getStyle(obj, attr)) * 100;
                } else {
                    currentValue = Number.parseInt(getStyle(obj, attr));
                }
                //计算速度
                let speed = (data[attr] - currentValue) / 7;

                //计算物体运动方向
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                //计算下一次obj的属性值
                let nextValue = currentValue + speed;
                //设置属性值
                if (attr === "opacity") {
                    obj.style[attr] = nextValue / 1000;
                    obj.style.filter = "alpha(opacity=" + nextValue + ")";
                } else {
                    obj.style[attr] = nextValue + "px";
                }
                //判断当前属性是否运动完毕
                if (nextValue !== data[attr]) {
                    flg = false;
                }
            }
            //清除定时器
            if (flg) {
                clearInterval(obj.timer);
                //如果传了callback，那么就执行这个函数
                if (callback) {
                    callback();
                }
            }
        }, 80);
    },

    fadein: function (element) {
        let speed = 0.2;
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            let currentOpacity = Number(getStyle(element, "opacity"));

            if (currentOpacity < 1) {
                element.style.opacity = currentOpacity + speed;
            }
            if (currentOpacity >= 1) {
                element.style.opacity = 1;
                clearInterval(element.timer);
            }
        }, 1000);
    },

    fadeout: function (element) {
        let speed = 0.2;
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            let currentOpacity = Number(getStyle(element, "opacity"));

            if (currentOpacity > 0) {
                element.style.opacity = currentOpacity - speed;
            }
            if (currentOpacity <= 0) {
                element.style.opacity = 0;
                clearInterval(element.timer);
            }
        }, 1000);
    }
}