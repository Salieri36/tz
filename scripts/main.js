/* Preloader */
const preloaderCounter = $('.preloader__counter span'),
      iconsPreloader = $('.preloader__icon'),
      iconStar = $('.preloader__icon')[0],
      iconHeadphone = $('.preloader__icon')[1],
      iconCamera = $('.preloader__icon')[2],
      preloader = $('.preloader'),
      main = $('.main')[0];

function countingPreloader() {
    let count = 0,
        number = [3, 6, 9, 11, 16, 18, 20, 23, 29, 30, 32, 35, 40, 42, 47, 50, 54, 57, 60, 62, 67, 70, 77, 80, 84, 89, 92, 97, 100],
        numberCount = 0,
        imgCount = 0,
        imgControlCount = 0;

    let timer = setInterval( () => {        
        count = number[numberCount];
        numberCount ++;        
        preloaderCounter.text(count);

        if (count === 18) {
            clearInterval(timer);
            setTimeout( () => {
                timer = setInterval( () => {        
                    count = number[numberCount];
                    numberCount ++;        
                    preloaderCounter.text(count);

                    if (count === 23 || count === 77) {
                        iconStar.classList.remove('preloader__icon_show');
                        iconStar.classList.add('preloader__icon_hidden');
                        iconHeadphone.classList.add('preloader__icon_show');
                        iconHeadphone.classList.remove('preloader__icon_hidden');  
                    }
                    if (count === 40 || count === 97) {
                        iconHeadphone.classList.remove('preloader__icon_show');
                        iconHeadphone.classList.add('preloader__icon_hidden');
                        iconCamera.classList.add('preloader__icon_show');
                        iconCamera.classList.remove('preloader__icon_hidden');  
                    }
                    if (count === 57 || count === 100) {
                        iconCamera.classList.remove('preloader__icon_show');
                        iconCamera.classList.add('preloader__icon_hidden');
                        iconStar.classList.add('preloader__icon_show');
                        iconStar.classList.remove('preloader__icon_hidden');  
                    }
                    if (count === 100) {
                        clearInterval(timer);
                        let timer2 = setInterval( () => {
                            for (let i = 0; i < 3; i++) {
                                iconsPreloader[i].classList.remove('preloader__icon_show');
                                iconsPreloader[i].classList.add('preloader__icon_hidden');
                            }
                            iconsPreloader[imgCount].classList.add('preloader__icon_show');
                            iconsPreloader[imgCount].classList.remove('preloader__icon_hidden');
            
                            imgCount ++;
                            imgControlCount ++;
                            if (imgCount === 3) {
                                imgCount = 0;
                            }
            
                            if (imgControlCount === 6) {
                                clearInterval(timer2);
                                preloader.slideUp();
                                main.classList.add('main_show');
                            }
                        }, 333); 
                    }
                }, 30);
            }, 130);
        }
    }, 30);
    
    
}

countingPreloader();


/* First screen */
/* title animation */
(function() {
    // Init
    const container = document.querySelector(".first-screen__wrapper"),
          inner = document.querySelector(".first-screen__title"),
          inner2 = document.querySelector(".first-screen__subtitle"),
          inner3 = document.querySelector(".first-screen__suptitle"),
          innerIcon = document.querySelector(".first-screen__headphone");
  
    // Mouse
    let mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        let e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    //-----------------------------------------
  
    let counter = 0;
    let updateRate = 5;
    let isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };
  
    //-----------------------------------------
  
    let onMouseEnterHandler = function(event) {
      update(event);
    };
  
    let onMouseLeaveHandler = function() {
      inner.style = "";
      inner2.style = "";
      inner3.style = "";
      innerIcon.style.zIndex = 10;
    };
  
    let onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //-----------------------------------------
  
    let update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2),
        (mouse.y / inner2.offsetHeight / 2).toFixed(2),
        (mouse.x / inner2.offsetWidth / 2).toFixed(2),
        (mouse.y / inner3.offsetHeight / 2).toFixed(2),
        (mouse.x / inner3.offsetWidth / 2).toFixed(2)
      );
    };
  
    let updateTransformStyle = function(x, y) {
      let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
      innerIcon.style.zIndex = -10;
      inner2.style.transform = style;
      inner2.style.webkitTransform = style;
      inner2.style.mozTransform = style;
      inner2.style.msTransform = style;
      inner2.style.oTransform = style;
      inner3.style.transform = style;
      inner3.style.webkitTransform = style;
      inner3.style.mozTransform = style;
      inner3.style.msTransform = style;
      inner3.style.oTransform = style;
    };
  
    //-----------------------------------------
  
    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
  })();

/* Lightning animation */
$(window).mousemove(function(e){
    let w = $('.first-screen__wrapper').innerWidth(),
    h = $('.first-screen__wrapper').innerHeight(),
    t = e.pageY - $('.first-screen__wrapper').offset().top,
    l = e.pageX - $('.first-screen__wrapper').offset().left;
    let _x = Math.floor(w/2);
    let _y = Math.floor(h/2);
    let diffX = e.pageX - _x;
    let diffY = (e.pageY - _y) * 2;
    let z = Math.sqrt((diffX * diffX) + (diffY * diffY));
    let size = 100 - z/10;    
    if (size < 10) {
        size = 10;
    }   
    $('.first-screen__wrapper').css('background-image', 'radial-gradient(circle at '+ (l / w * 100) +'% '+ (t / h * 100) +'%, transparent 0px, rgba(255, 125, 150, 0.287806) 0%, rgba(245, 64, 137, 4e-05) '+ size + '%');
});

/* Cursor animation */
window.onmousemove = function(e){
    let cursor = document.querySelector(".cursor");        
    cursor.style.top = (e.pageY + 5) +"px";
    cursor.style.left = e.pageX+"px";    
}

/*function hover() {
    let cursor = document.querySelector(".cursor"),
        contacts = document.querySelector(".first-screen__contact"),
        floaat = document.querySelector(".first-screen__floaat-wrapper"),
        dots = document.querySelector(".first-screen__dots-wrapper");
        
        contacts.addEventListener('mouseover', (e) => {        
            cursor.style.transform = "scale(10)";       
            cursor.textContent = "contacts";
            cursor.style.color = "#fff";
            cursor.style.fontSize = "0.11em";
            cursor.style.textAlign = "center";
            cursor.style.transition = "width 0.3s, height 0.3s";
            contacts.style.color = "red";
        });
        contacts.addEventListener('mouseout', (e) => {        
            cursor.style.transform = "scale(1)";         
            cursor.textContent = "";
            cursor.style.color = "#fff";
            cursor.style.fontSize = "0.11em";
            cursor.style.textAlign = "center";
            contacts.style.color = "#FFEFF6";        
        });
        floaat.addEventListener('mouseover', (e) => {        
            cursor.style.transform = "scale(2)";
            cursor.style.transition = "background 0.5s, transform 0.5s";
            cursor.style.background = "#fff";
        });
        floaat.addEventListener('mouseout', (e) => {        
            cursor.style.transform = "scale(1)";         
            cursor.style.background = "red";                    
        });
        dots.addEventListener('mouseover', (e) => {        
            cursor.style.transform = "scale(7)";       
            cursor.textContent = "open";
            cursor.style.color = "#fff";
            cursor.style.fontSize = "0.11em";
            cursor.style.textAlign = "center";
            cursor.style.transition = "width 0.3s, height 0.3s";            
        });
        dots.addEventListener('mouseout', (e) => {        
            cursor.style.transform = "scale(1)";         
            cursor.textContent = "";
            cursor.style.color = "#fff";
            cursor.style.fontSize = "0.11em";
            cursor.style.textAlign = "center";                    
        });   
        
}     
hover();*/

/* Viewer counter */
function viewersCounter() {
    let viewersHundred = document.querySelector('.hundred'),
        viewersThousand = document.querySelector('.thousand'),
        viewersMillion = document.querySelector('.million'),
        counterHundred = 21,
        counterThousand = 30,
        counterMillion = 0;    

    let timer = setInterval( () => {

        if (counterHundred < 10) {
            viewersHundred.textContent = "00" + counterHundred;
        } else if (counterHundred < 100) {
            viewersHundred.textContent = "0" + counterHundred;
        } else {
            viewersHundred.textContent = counterHundred;
        }
    
        if (counterThousand < 10) {
            viewersThousand.textContent = "00" + counterThousand;
        } else if (counterThousand < 100) {
            viewersThousand.textContent = "0" + counterThousand;
        } else {
            viewersThousand.textContent = counterThousand;
        }
    
        if (counterMillion < 10) {
            viewersMillion.textContent = "00" + counterMillion;
        } else if (counterMillion < 100) {
            viewersMillion.textContent = "0" + counterMillion;
        } else {
            viewersMillion.textContent = counterMillion;
        }
        
        counterHundred += 11;
        if (counterHundred >= 999) {
            counterHundred = 0;
            counterThousand++;
            if (counterThousand >= 999) {
                counterThousand = 0;
                counterMillion++;
            }
        } 
    }, 200);
    
}
viewersCounter();

/* Slide screens */
$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%" // this works just fine with duration 0 as well
            // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });

    // get all slides
    var slides = document.querySelectorAll(".screen");
    
    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i], {pushFollowers: false})
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
});

/* Team slider */
function slideTeam() {
    const prev = document.querySelector('.fourth-screen__prev'),
          next = document.querySelector('.fourth-screen__next'),
          firstPhoto = document.querySelector('.fourth-screen__team-img1'),
          lastPhoto = document.querySelector('.fourth-screen__team-img5'),
          width = document.querySelector('.fourth-screen__wrapper');
    
    next.addEventListener('click', () => {
        if (width.clientWidth <= 1360) {
            firstPhoto.style.marginLeft = "-225px";
            lastPhoto.style.marginRight = "0px";
        } else {
            firstPhoto.style.marginLeft = "-270px";
            lastPhoto.style.marginRight = "0px";
        }
        
    })
    prev.addEventListener('click', () => {
        if (width.clientWidth <= 1460) {
            lastPhoto.style.marginRight = "-225px";
            firstPhoto.style.marginLeft = "0px";
        } else {
            firstPhoto.style.marginLeft = "-270px";
            lastPhoto.style.marginRight = "0px";
        }        
    })
}
slideTeam();

/* We Do animation */
function weDo() {
    const items = document.querySelectorAll('.third-screen__item'),
          title = document.querySelector('.third-screen__changed-title'),
          bg = document.querySelector('.third-screen__changed-item'),
          images = ['assets/img/gear2.png', 'assets/img/star_big1.png', 'assets/img/graphik_big.png', 'assets/img/Lupa_big.png', 'assets/img/CLAQUETA_basica.png', 'assets/img/Headphone_JD.png'],
          titles = ['Channel Operation and Management', 'Creative Services for Infuencers', 'Graphic Design & Photography', 'Business Development', 'Lyric Videos & Animation', 'Brand Campaigns'],
          icons = document.querySelectorAll('.third-screen__bg-icon');
          
    items.forEach( (item, index) => {
        item.addEventListener('click', () => {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove('active');
            }
            item.classList.add('active');
            bg.style.backgroundImage = "url("+ images[index] +")";
            title.textContent = titles[index];
            icons[0].style.animation = "heart 3s";
            icons[1].style.animation = "lettering1 3s";
            icons[2].style.animation = "lettering2 3s";
            setTimeout( () => {
                icons[0].style.animation = "";
                icons[1].style.animation = "";
                icons[2].style.animation = "";
            }, 3000);                       
        })
    })
}
weDo();