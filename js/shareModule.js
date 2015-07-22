(function(){
    var loadingAni = function(){
            var i = 0;
            var clock = setInterval(function(){
                if(i == 10) clearInterval(clock);
                $('#loadingimg').css({backgroundSize:'27.5rem 2.75rem',backgroundPosition:'-' + (2.5*i++) + 'rem 0'});
            },50);
    };
    var inittalk = function(){
            var i = 0;
            var clock = setInterval(function(){
                if(i == 6) i=0;
                switch(i){
                    case 0:
                        $('#talkWrap').css({backgroundSize:'9.4rem 25.5rem',backgroundPosition:'0 0',height:'3.9rem'});
                        break;
                    case 1:
                        $('#talkWrap').css({backgroundSize:'9.4rem 25.5rem',backgroundPosition:'0 -3.95rem',height:'4.3rem'});
                        break;
                    case 2:
                        $('#talkWrap').css({backgroundSize:'9.4rem 25.5rem',backgroundPosition:'0 -8.25rem',height:'4rem'});
                        break;
                    case 3:
                        $('#talkWrap').css({backgroundSize:'9.4rem 25.5rem',backgroundPosition:'0 -12.3rem',height:'4.3rem'});
                        break;
                    case 4:
                        $('#talkWrap').css({backgroundSize:'9.4rem 25.5rem',backgroundPosition:'0 -16.725rem',height:'4.3rem'});
                        break;
                    case 5:
                        $('#talkWrap').css({backgroundSize:'9.4rem 25.5rem',backgroundPosition:'0 -21.175rem',height:'4.3rem'});
                        break;
                }
                i++;
            },3000);
    };
    loadingAniClock = setInterval(function(){
        loadingAni();
     },800);
    inittalk();
        halo.use('util','loader', function(m){
        m.loader(['img/zzbhani.png',
        'img/bg.png',
        'img/hd1.png',
        'img/hd2.png',
        'img/hd3.png',
        'img/hd4.png',
        'img/hd5.png',
        'img/hd6.png',
        'img/hd7.png',
        'img/hd8.png',
        'img/hd9.png',
        'img/hd10.png',
        'img/hd11.png',
        'img/hd12.png',
        'img/hd13.png',
        'img/zzwdk1.png',
        'img/zzwdk2.png',
        'img/trymebtn1.png',
        'img/trymebtn2.png',
        'img/trymetext.png',])
    .loadend(function(percent){
        $('#percent').html(this.percent);
    })
    .complete(function(){
        
         var template = $('#template').html();
        $('#container').html(template);
        $('#loading').addClass('loadingAni');
        setTimeout(function(){
        $('#loading').css('display','none');
        },1000);
   
                        var _pri = {
                            //UI元素集合
                            node: {
                                zz_open: $('#zz_open'),
                                openItem: $('#openItem'),
                                tryBtn: $('#tryBtn'),
                                tryWrap: $('#tryWrap'),
                                zzWrap: $('#zzWrap'),
                            },
                            conf: {
                                time: 30,
                            },
                            //绑定元素事件
                            bindUI: function() {
                                _pri.node.zzWrap.on("click", _pri.util.openFun);
                            },
                            util: {
                                zzOpen: function(){
                                    zztype = $('#postData').attr('data-zztype');
                                    zztext = $('#postData').attr('data-zztext');
                                    $('#tryText').html(zztext);
                                    var i = 1;
                                    switch(zztype){
                                        case '0': 
                                            var clock = setInterval(function(){
                                                if(i == 11) clearInterval(clock);
                                                $(_pri.node.openItem).css({backgroundImage:'url(img/xc' + i++ + '.png)'});
                                            },_pri.conf.time);
                                            break;
                                        case '1': 
                                            var clock = setInterval(function(){
                                                if(i == 13) clearInterval(clock);
                                                $(_pri.node.openItem).css({backgroundImage:'url(img/hd' + i++ + '.png)'});
                                            },_pri.conf.time);
                                            break;
                                        case '2': 
                                            var clock = setInterval(function(){
                                                if(i == 11) clearInterval(clock);
                                                $(_pri.node.openItem).css({backgroundImage:'url(img/xd' + i++ + '.png)'});
                                            },_pri.conf.time);
                                            break;
                                        case '3': 
                                            var clock = setInterval(function(){
                                                if(i == 12) clearInterval(clock);
                                                $(_pri.node.openItem).css({backgroundImage:'url(img/jx' + i++ + '.png)'});
                                            },_pri.conf.time);
                                            break;
                                        case '4': 
                                            var clock = setInterval(function(){
                                                if(i == 11) clearInterval(clock);
                                                $(_pri.node.openItem).css({backgroundImage:'url(img/zsgz' + i++ + '.png)'});
                                            },_pri.conf.time);
                                            break;
                                        case '5': 
                                            var clock = setInterval(function(){
                                                if(i == 12) clearInterval(clock);
                                                $(_pri.node.openItem).css({backgroundImage:'url(img/sr' + i++ + '.png)'});
                                            },_pri.conf.time);
                                            break;
                                    }
                                    
                                },
                                openFun: function(){
                                    $(_pri.node.zzWrap).hide();
                                    $(_pri.node.openItem).show();
                                    _pri.util.zzOpen();
                                    $(_pri.node.tryWrap).addClass('tryBtnAni');
                                },
                                initzzbhani: function(){
                                var i = 0;
                                var clock = setInterval(function(){
                                    if(i == 6) clearInterval(clock);
                                    $(_pri.node.zz_open).css({backgroundSize:'86.625rem 9rem',backgroundPosition:'-' + (12.375*i++) + 'rem 0'});
                                },_pri.conf.time);
                        },
                            }
                        }
                        var init = function() {
                            _pri.bindUI();
                            cloudClock = setInterval(function(){
                             _pri.util.initzzbhani();
                         },800);
                        }
                        init();
                         });

})
})();