(function(){
    var xiangClock,
        zzClock;
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
        halo.use('loader', function(m){
                m.loader(['img/again.png',
                    'img/cloud_bg.png',
                    'img/zzbg.png',
                    'img/guang.png',
                    'img/hz.png',
                    'img/lhand.png',
                    'img/smilezz.png',
                    'img/xl_ghz.png',
                    'img/xl_srz.png',
                    'img/xl_x.png',
                    'img/xl_xcz.png',
                    'img/xl_zsgz.png',
                    'img/xl_zz.png',
                    'img/yezi.png',
                    'img/zzbh1.png',
                    'img/zzbh2.png',
                    'img/zzbh3.png',
                    'img/zzbh4.png',
                    'img/zzbh5.png',
                    'img/zzbh6.png',
                    'img/zzbh7.png',
                    'img/zzbh8.png',
                    'img/zzbh9.png',
                    'img/zzbh10.png',
                    'img/zzbh11.png',
                    'img/zzbh12.png',
                    'img/zzbh13.png',
                    'img/zzbh14.png',
                    'img/zzbh15.png',
                    'img/xl_xdz.png',])
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
                                page1: $('#page1'),
                                xiangDom: $('#xiang'),
                                hdzDom: $('#hdz'),
                                xczDom: $('#xcz'),
                                xdzDom: $('#xdz'),
                                zsgzzDom: $('#zsgzz'),
                                lssrzDom: $('#lssrz'),
                                xianDom: $('#fodder .list'),
                                zzDom: $('#zzItem'),
                                zzDom1: $('#zzItem1'),
                                zzDom2: $('#zzItem2'),
                                zzsuccDom: $('#zzsuccItem'),
                                cloudDom: $('#cloud'),
                                lhand: $('#lhand'),
                                rhand: $('#rhand'),
                                container: $('#container'),
                                fodder: $('#fodder'),
                                fodderWrap: $('#fodderWrap'),
                                tishi_tips: $('#tishi_tips'),
                                dm_tips: $('#dm_tips'),
                                surebtn: $('#sureWrap'),
                                surebtn1: $('#sure_btn1'),
                                surebtn2: $('#sure_btn2'),
                                yeziWrap: $('#yeziWrap'),
                                startBtn: $('#startBtn'),
                                startDom: $('#start'),
                                part2: $('#part2'),
                                hezi: $('#hezi'),
                                share_btn: $('#share_btn'),
                                shareWrap: $('#shareWrap'),
                                postWord: $('#postwords1'),
                                guang: $('#guang'),
                                postWordInput: $('#postWordInput'),
                            },
                            conf: {
                                time: 60,
                                cloudTime:30,
                                fodderLength:0,
                                _thisList: '',
                                _thisChildrenb: '',
                                canSwipeL: true,
                                canSwipeR: true,
                            },
                            //绑定元素事件
                            bindUI: function() {
                                _pri.node.xianDom.on("click", _pri.util.sureFun);
                                _pri.node.surebtn1.on("click", _pri.util.handAni);
                                _pri.node.surebtn2.on("click", _pri.util.repeaFun);
                                _pri.node.startBtn.on("click", _pri.util.startFun);
                                _pri.node.shareWrap.on("click", _pri.util.hideShareFun);
                                _pri.node.share_btn.on("click", _pri.util.shareFun);
                                _pri.node.page1.on("swipeLeft", _pri.util.xianLAni);
                                _pri.node.page1.on("swipeRight", _pri.util.xianRAni);
                            },
                            util: {
                                initxiang: function(){
                                    var i = 0;
                                    var clock = setInterval(function(){
                                        if(i == 8) clearInterval(clock);
                                        $(_pri.node.xiangDom).css({backgroundSize:'36rem 5rem',backgroundPosition:'-' + (4*i++) + 'rem 0'});
                                    },_pri.conf.time);
                                },
                                inithd: function(){
                                    var i = 0;
                                    var clock = setInterval(function(){
                                        if(i == 8) clearInterval(clock);
                                        $(_pri.node.hdzDom).css({backgroundSize:'45rem 3.5rem',backgroundPosition:'-' + (5*i++) + 'rem 0'});
                                    },_pri.conf.time);
                                },
                                initxcz: function(){
                                    var i = 0;
                                    var clock = setInterval(function(){
                                        if(i == 8) clearInterval(clock);
                                        $(_pri.node.xczDom).css({backgroundSize:'29.75rem 5rem',backgroundPosition:'-' + (4.25*i++) + 'rem 0'});
                                    },_pri.conf.time);
                                },
                                initxdz: function(){
                                    var i = 0;
                                    var clock = setInterval(function(){
                                        if(i == 8) clearInterval(clock);
                                        $(_pri.node.xdzDom).css({backgroundSize:'38.5rem 4.5rem',backgroundPosition:'-' + (5.5*i++) + 'rem 0'});
                                    },_pri.conf.time);
                                },
                                initzsgzz: function(){
                                    var i = 0;
                                    var clock = setInterval(function(){
                                        if(i == 8) clearInterval(clock);
                                        $(_pri.node.zsgzzDom).css({backgroundSize:'38.5rem 6.25rem',backgroundPosition:'-' + (5.5*i++) + 'rem 0'});
                                    },_pri.conf.time);
                                },
                                initlssrz: function(){
                                    var i = 0;
                                    var clock = setInterval(function(){
                                        if(i == 5) clearInterval(clock);
                                        $(_pri.node.lssrzDom).css({backgroundSize:'30rem 4rem',backgroundPosition:'-' + (5*i++) + 'rem 0'});
                                    },_pri.conf.time);
                                },
                                initzz: function(){
                                    var i = 0;
                                    var clock = setInterval(function(){
                                        if(i == 8) clearInterval(clock);
                                        $(_pri.node.zzDom).css({backgroundSize:'72.5rem 8rem',backgroundPosition:'-' + (7.25*i++) + 'rem 0'});
                                    },_pri.conf.time);
                                },
                                initguang: function(){
                                    var i = 0;
                                    var clock = setInterval(function(){
                                        if(i == 9) clearInterval(clock);
                                        $(_pri.node.guang).css({backgroundSize:'176rem 10rem',backgroundPosition:'-' + (16*i++) + 'rem 0'});
                                    },_pri.conf.time);
                                },
                                initzzbhani: function(){
                                    var i = 0;
                                    var clock = setInterval(function(){
                                        if(i == 6) clearInterval(clock);
                                        $(_pri.node.hezi).css({backgroundSize:'86.625rem 9rem',backgroundPosition:'-' + (12.375*i++) + 'rem 0'});
                                    },_pri.conf.time);
                                },
                                cloudAni: function(){
                                    $(_pri.node.cloudDom).css('visibility','visible');
                                    var i = 1;
                                    var clockCloud = setInterval(function(){
                                        if(i == 15) {
                                            clearInterval(clockCloud);
                                        }
                                        $(_pri.node.cloudDom).css({backgroundImage:'url(img/zzbh' + i++ + '.png)'});
                                    },_pri.conf.cloudTime);
                                },
                                handAni: function(){
                                    $(_pri.node.xianDom).eq(_pri.conf.fodderLength).children('.sure_tips').css('display','none');
                                    $(_pri.conf._thisChildrenb).css('display','none');
                                    $(_pri.node.surebtn).css('display','none');
                                    $(_pri.node.dm_tips).css('display','none');
                                    $(_pri.node.lhand).addClass('lhandAni');
                                    $(_pri.node.rhand).addClass('rhandAni');
                                    _pri.util.stopinitAni();
                                    setTimeout(function(){
                                        $(_pri.node.lhand).addClass('lhandzzAni');
                                        $(_pri.node.fodder).addClass('zzlhandAni');
                                    },1000);
                                    setTimeout(function(){
                                        $(_pri.node.zzDom).css('visibility','hidden');
                                        _pri.node.zzDom1.css('display','none');
                                        $(_pri.node.zzDom2).css('display','none');
                                        $(_pri.node.fodder).css('display','none');
                                        $(_pri.node.yeziWrap).css('visibility','hidden');
                                        _pri.node.cloudDom.css('visibility','visible');
                                        _pri.util.cloudAni();
                                        $(_pri.node.lhand).removeClass('lhandzzAni');
                                        $(_pri.node.lhand).removeClass('lhandAni');
                                        $(_pri.node.rhand).removeClass('rhandAni');
                                        $(_pri.node.fodder).removeClass('zzlhandAni');
                                        
                                    },1500);
                                    setTimeout(function(){
                                        _pri.node.cloudDom.addClass('zzsuccOutAni');
                                        _pri.node.lhand.addClass('lhandOutAni');
                                        _pri.node.rhand.addClass('rhandOutAni');
                                    },3000);
                                    setTimeout(function(){
                                        _pri.node.hezi.css('visibility','visible');
                                        _pri.node.hezi.addClass('zzsuccInAni');
                                        _pri.node.share_btn.addClass('shareBtnAni');
                                        _pri.node.postWord.addClass('postWordAni');
                                    },4000);
                                    setTimeout(function(){
                                        _pri.node.guang.css('visibility','visible');
                                    },5000);

                                },
                                stopinitAni: function(){
                                    clearInterval(xiangClock);
                                    clearInterval(zzClock);
                                },
                                xianLAni: function(){
                                    if(_pri.conf.canSwipeL){
                                        _pri.conf.fodderLength++;
                                        $(_pri.node.xianDom).children('.xian_tips').css('display','none');
                                        $(_pri.node.xianDom).eq(_pri.conf.fodderLength).children('.xian_tips').css('display','block');
                                        if(_pri.conf.fodderLength != 6){
                                            _pri.conf.canSwipeR=true;
                                            setTimeout(function(){
                                            $(_pri.node.fodderWrap).css('-webkit-transform','translate3d(-' + 7.5*_pri.conf.fodderLength + 'rem,0,0)');
                                            },200);
                                            $(_pri.node.lhand).addClass('lhandxzAni');
                                            setTimeout(function(){
                                            $(_pri.node.lhand).removeClass('lhandxzAni');
                                            },1000);
                                        }
                                        if(_pri.conf.fodderLength === 5){
                                            _pri.conf.canSwipeL=false;
                                        }
                                    }
                                },
                                xianRAni: function(){
                                    if(_pri.conf.canSwipeR){
                                        _pri.conf.fodderLength--;
                                        $(_pri.node.xianDom).children('.xian_tips').css('display','none');
                                        $(_pri.node.xianDom).eq(_pri.conf.fodderLength).children('.xian_tips').css('display','block');
                                        if(_pri.conf.fodderLength != -1){
                                            _pri.conf.canSwipeL = true;
                                            setTimeout(function(){
                                            $(_pri.node.fodderWrap).css('-webkit-transform','translate3d(-' + 7.5*_pri.conf.fodderLength + 'rem,0,0)');
                                            },200);
                                            $(_pri.node.rhand).addClass('rhandxzAni');
                                            setTimeout(function(){
                                                $(_pri.node.rhand).removeClass('rhandxzAni');
                                            },1000);
                                        }
                                        if(_pri.conf.fodderLength === 0){
                                            _pri.conf.canSwipeR = false;
                                        }
                                    }
                                },
                                sureFun: function(){
                                    _pri.conf.canSwipeL = false;
                                    _pri.conf.canSwipeR = false;
                                    if(_pri.conf.fodderLength == 0 || _pri.conf.fodderLength == 3){
                                        $(_pri.node.zzDom).css('display','none');
                                        $(_pri.node.zzDom1).css('display','block');
                                    }else{
                                        $(_pri.node.zzDom).css('display','none');
                                        $(_pri.node.zzDom2).css('display','block');
                                    }
                                    _pri.conf._thisList = $(this);
                                    $(this).siblings().css('visibility','hidden');
                                    $(_pri.node.xianDom).eq(_pri.conf.fodderLength).children('.sure_tips').css('display','block');
                                    $(_pri.node.xianDom).eq(_pri.conf.fodderLength).children('.xian_tips').css('display','none');
                                    $(_pri.node.tishi_tips).css('display','none');
                                    $(_pri.node.surebtn).css('display','block');
                                },
                                repeaFun: function(){
                                    _pri.conf.canSwipeL = true;
                                    _pri.conf.canSwipeR = true;
                                    $(_pri.node.zzDom).css('display','block');
                                    $(_pri.node.zzDom1).css('display','none');
                                    $(_pri.node.zzDom2).css('display','none');
                                    $(_pri.conf._thisChildrenb).css('display','none');
                                    $(_pri.node.xianDom).eq(_pri.conf.fodderLength).children('.sure_tips').css('display','none');
                                    $(_pri.node.xianDom).eq(_pri.conf.fodderLength).children('.xian_tips').css('display','block');
                                    $(_pri.conf._thisList).siblings().css('visibility','visible');
                                    $(_pri.node.surebtn).css('display','none');
                                    $(_pri.node.tishi_tips).css('display','block');
                                },
                                startFun: function(){
                                    $(_pri.node.startDom).animate({
                                      opacity: 0,
                                    }, 500, 'ease-out',function(){
                                        $(_pri.node.startDom).hide();
                                        $(_pri.node.part2).show().animate({opacity: 1,},500,'ease-in');
                                    });
                                    // $(_pri.node.startDom).css('display','none');
                                    // $(_pri.node.part2).css('display','block');
                                },
                                shareFun: function(){
                                    zzType = _pri.conf.fodderLength;
                                    zzText = $(_pri.node.postWordInput).val();
                                    ajaxPost(zzType,zzText);
                                    $(_pri.node.shareWrap).show();
                                },
                                hideShareFun: function(){
                                    $(_pri.node.shareWrap).hide();
                                }
                            }
                        }
                        init = function() {
                            _pri.bindUI();
                            xiangClock = setInterval(function(){
                                 _pri.util.initxiang();
                                 _pri.util.inithd();
                                 _pri.util.initxcz();
                                 _pri.util.initxdz();
                                 _pri.util.initzsgzz();
                                 _pri.util.initlssrz();

                             },800);
                            cloudClock = setInterval(function(){
                                 _pri.util.initguang();
                                 _pri.util.initzzbhani();
                             },800);

                            zzClock = setInterval(function(){
                                 _pri.util.initzz();
                             },1000);
                        }
                        init();
                        var audio = document.createElement("audio");
                        // audio.src = "./images/bj.mp3";
                        audio.src = "img/mbg3.mp3";
                        audio.autoplay = false;
                        audio.loop = true;
                        audio.addEventListener("canplaythrough",function() {
                           // audio.play();
                            fadeIn();
                            function fadeIn(v) {
                                var v = v || 0.1;
                                audio.volume = v;
                                if((v+=0.1)<=1.0) {
                                    setTimeout(function() {
                                        fadeIn(v)
                                    },500);
                                }
                            }
                        },false);
                        // 手Q微信需要手动触发播放
                        // var flag = 0;
                        // $('body').on('touchstart', function(event) {
                        //     if(!$(event.target).hasClass('audio_ico')){
                        //         if(flag == 0 && audio.paused){
                        //             audio.play();
                        //             $('.audio_ico').toggleClass('audio_ico_stop');
                        //         }
                        //         flag = 1;
                        //     }
                        // });
                        $('.audio_ico').on('touchend',function(event){
                            event.preventDefault();
                            if($(this).hasClass('audio_ico')){
                                if(audio.paused){
                                    audio.play();
                                }else{
                                    audio.pause();
                                }
                                $('.audio_ico').toggleClass('audio_ico_stop');
                            }
                        },false);
                    });//end of _pri

        });//end of halo.use

})();//end of ()