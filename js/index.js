      var list=document.querySelector('.pinpai');
      var a1=document.getElementById('a1');
      var a2=document.getElementById('a2');
        a1.onclick = function(){
            a1.classList.add('disabled');
            a2.classList.remove('disabled');
            list.style.transform='translateX(0px)';
        }
        a2.onclick=function(){
            a2.classList.add('disabled');
            a1.classList.remove('disabled');
            list.style.transform='translateX(-1240px)';
        }

     var box = document.querySelector('.box1');
            var right = box.querySelector('.right');
            var left = box.querySelector('.left');
            var ul = box.querySelector('ul');
            var ul_lis = ul.querySelectorAll('li');
            var ol = box.querySelector('ol');
            var num = 0;
            var circle = 0;
            var flag = true;

            var h=box.offsetHeight/2;
            left.style.top=h-20+'px';
            right.style.top=h+'px';
            box.addEventListener('mouseenter', function () {

                right.style.opacity = '1';
                left.style.opacity = '1';
                clearInterval(timer);
                timer = null;
            });
            box.addEventListener('mouseleave', function () {
                right.style.opacity = '0';
                left.style.opacity = '0';
                timer = setInterval(function () {
                    right.click();
                }, 2000);
            });
            var timer = setInterval(function () {
                right.click();
            }, 2000);
            for (var i = 0; i < ul_lis.length; i++) {
 
                var li = document.createElement('li');
                li.className = 'current';
                li.setAttribute('index', i);
                ol.appendChild(li);
                li.addEventListener('click', function () {
 
                    for (var i = 0; i < ol.children.length; i++) {
                        ul_lis[i].style.opacity = '0';
                        ol.children[i].className = 'current';
 
                    }
                    this.className = 'current white';
 
                    var index = this.getAttribute('index');
                    ul_lis[index].style.opacity = '1';
 
                    num = index;
                    circle = index;
                });
 
            }
            ol.children[0].className = 'current white';
 
            var first = ul.children[0].cloneNode(true);
            ul.appendChild(first);
            right.addEventListener('click', function () {
                if (flag) {
                    flag = false;
                    if (num == ul.children.length - 1) {
                        num = 0;
                    }
                    num++;
                    if (num == 4) { num = 0; }
                    for (var i = 0; i < ol.children.length; i++) {
                        ul_lis[i].style.opacity = '0';
                    }
                    ul_lis[num].style.opacity = '1';
                    flag = true;
                    circle++;
                    if (circle == ol.children.length) {
                        circle = 0;

                    }
 
                    circlechange();
                }
 
            });
 
            function circlechange() {
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = 'current';
                }
                ol.children[circle].className = 'current white';
            };
            left.addEventListener('click', function () {
 
                if (flag) {
                    flag = false;
                    if (num == 0) {
                        num = ul.children.length - 1;
 
                    }
                    num--;
                    if (num == -1) { num = 4; }
                    for (var i = 0; i < ol.children.length; i++) {
                        ul_lis[i].style.opacity = '0';
                    }
                    ul_lis[num].style.opacity = '1';
 
                    flag = true;
                    circle--;
                    if (circle < 0) {
                        circle = ol.children.length - 1;
                    }
                    circlechange();
                }
    });


    // app-header-sticky add show   display none
    var appheader=document.querySelector('.app-header-sticky');
    var container=document.querySelector('.container');
    var width=(window.screen.width-1260)/2;
    
    window.onscroll = function() {
        let {y} = getPageScroll();
        if(y>105){
            appheader.style.opacity='1';
            appheader.style.position='fixed';
            appheader.style.background='#fff';
            appheader.style.top='0';
            appheader.style.left=width+'px';
            appheader.className='show';
            container.style.opacity='0';
        }else{
            appheader.style.opacity='0';
            container.style.opacity='1';
        }

        function getPageScroll() {
            let y;
            if (window.pageXOffset) { //IE9及其以上
               y = window.pageYOffset;
            } else if (document.compatMode === "BackCompat") { //混杂模式下   
                y = document.body.scrollTop;
            } else { //标准模式下 
                y = document.documentElement.scrollTop;
            }
            return {
                y: y
            }
        }
    };
    var aaaa=document.querySelector('.aaaa');
    aaaa.onmouseover=function () {
        aaaa.style.borderBottom='1px solid #27ba9b';
    }
    aaaa.onmouseout=function () {
        aaaa.style.borderBottom='0px solid #27ba9b';
    }
    var aaaa2=document.querySelector('.aaaa2');
    aaaa2.onmouseover=function () {
        aaaa2.style.borderBottom='1px solid #27ba9b';
    }
    aaaa2.onmouseout=function () {
        aaaa2.style.borderBottom='0px solid #27ba9b';
    }

    var aaaa3=document.querySelector('.aaaa3');
    aaaa3.onmouseover=function () {
        aaaa3.style.borderBottom='1px solid #27ba9b';
    }
    aaaa3.onmouseout=function () {
        aaaa3.style.borderBottom='0px solid #27ba9b';
    }
    var aaaa4=document.querySelector('.aaaa4');
    aaaa4.onmouseover=function () {
        aaaa4.style.borderBottom='1px solid #27ba9b';
    }
    aaaa4.onmouseout=function () {
        aaaa4.style.borderBottom='0px solid #27ba9b';
    }
    var aaaa5=document.querySelector('.aaaa5');
    aaaa5.onmouseover=function () {
        aaaa5.style.borderBottom='1px solid #27ba9b';
    }
    aaaa5.onmouseout=function () {
        aaaa5.style.borderBottom='0px solid #27ba9b';
    }
    var aaaa6=document.querySelector('.aaaa6');
    aaaa6.onmouseover=function () {
        aaaa6.style.borderBottom='1px solid #27ba9b';
    }
    aaaa6.onmouseout=function () {
        aaaa6.style.borderBottom='0px solid #27ba9b';
    }
    var aaaa7=document.querySelector('.aaaa7');
    aaaa7.onmouseover=function () {
        aaaa7.style.borderBottom='1px solid #27ba9b';
    }
    aaaa7.onmouseout=function () {
        aaaa7.style.borderBottom='0px solid #27ba9b';
    }
    var aaaa8=document.querySelector('.aaaa8');
    aaaa8.onmouseover=function () {
        aaaa8.style.borderBottom='1px solid #27ba9b';
    }
    aaaa8.onmouseout=function () {
        aaaa8.style.borderBottom='0px solid #27ba9b';
    }
    var aaaa9=document.querySelector('.aaaa9');

    aaaa9.onmouseover=function () {
        aaaa9.style.borderBottom='1px solid #27ba9b';
    }
    aaaa9.onmouseout=function () {
        aaaa9.style.borderBottom='0px solid #27ba9b';
    }
    var aaaa10=document.querySelector('.aaaa10');

    aaaa10.onmouseover=function () {
        aaaa10.style.borderBottom='1px solid #27ba9b';
    }
    aaaa10.onmouseout=function () {
        aaaa10.style.borderBottom='0px solid #27ba9b';
    }
  