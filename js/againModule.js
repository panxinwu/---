(function(){
    var xiangClock,
        zzClock;
    var _pri = {
        //UI元素集合
        node: {
            zz_open: $('#zz_open'),
            openItem: $('#openItem'),
            tryBtn: $('#tryBtn'),
            tryWrap: $('#tryWrap'),
        },
        conf: {
            time: 50,
        },
        //绑定元素事件
        bindUI: function() {
            _pri.node.zz_open.on("click", _pri.util.openFun);
        },
        util: {
            zsgzOpen: function(){
                var i = 0;
                var clock = setInterval(function(){
                    if(i == 14) clearInterval(clock);
                    $(_pri.node.openItem).css({backgroundSize:'240rem 20.5rem',backgroundPosition:'-' + (16*i++) + 'rem 0'});
                },_pri.conf.time);
            },
            openFun: function(){
                $(_pri.node.zz_open).hide();
                $(_pri.node.openItem).show();
                $(_pri.node.tryWrap).addClass('tryBtnAni');
                _pri.util.zsgzOpen();
            },
        }
    }
    var init = function() {
        _pri.bindUI();
    }
    init();
})();