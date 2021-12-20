var boolean = new Boolean(true);

var screen = window.matchMedia("(max-width: 730px)");
var screen2 = window.matchMedia("(max-width: 1242px) and (min-width: 731px), (max-height: 700px) and (min-width: 731px)");
var screen3 = window.matchMedia("(max-width: 850px) and (min-width:731px");
var defaultScreen = window.matchMedia("(min-width: 1243px) and (min-height: 701px)");

var page = document.getElementById("page").style;
var sideCl = document.getElementById("sideColumn").style;
var header = document.getElementById("header").style;
var head = document.getElementById("head").style;
var centralC = document.getElementById("centralContain").style;
var foot = document.getElementById("foot").style;
var sideCn = document.getElementById("sideContain").style;
var menuC = document.getElementById("classicMenu").style;
var itemSup = document.getElementById("itemSup").style;
var head1 = document.getElementById("head1").style;
var head2 = document.getElementById("head2").style;
var head3 = document.getElementById("head3").style;
var head4 = document.getElementById("head4").style;
var sideNone = document.getElementById("side3").style;
var foot1C = document.getElementById("foot1").style;
var foot2C = document.getElementById("foot2").style;
var foot1 = document.getElementById("hobbyCol").style;
var foot2 = document.getElementById("engCol").style;
var langCol = document.getElementById("langCol").style;
var logCol = document.getElementById("logCol").style;
var qCol = document.getElementById("qCol").style;
var engCol = document.getElementById("engCol").style;
var formt = document.getElementById("formation").style;
var exp = document.getElementById("exp").style;
var contCol = document.getElementById("contCol").style;
var pdfB = document.getElementById("pdfB").style;
var clearB = document.getElementById("clearB").style;
var fullB = document.getElementById("fullB").style;
var sweetB = document.getElementById("sweetB").style;
var gitB = document.getElementById("gitB").style;
var photo = document.getElementById("photo").style;
var photo2 = document.getElementById("photo2").style;
var gif = document.getElementById("gif").style;
var projUl = document.getElementById("projUl").style;
var engCol1 = document.getElementById("engCol1").style;
var engCol2 = document.getElementById("engCol2").style;
var menuIcD = document.getElementById("menuIcoDiv").style;
var menuI1 = document.getElementById("menuIcon1").style;
var tooLong = document.getElementById("tooLong").style;
var animeB = document.getElementById("animeB").style;
var b40 = document.getElementById("b40").style;
var b35 = document.getElementById("b35").style;
var b30 = document.getElementById("b30").style;
var b25 = document.getElementById("b25").style;
var b20 = document.getElementById("b20").style;
var b15 = document.getElementById("b15").style;
var b10 = document.getElementById("b10").style;

var menuS = document.getElementById("classicMenu");

var contRows = document.getElementsByClassName("contRow");
var langIcons = document.getElementsByClassName("langIcon");
var logIcons = document.getElementsByClassName("logIcon");
var logCols = document.getElementsByClassName("logCol1");
var logRows = document.getElementsByClassName("logRow");
var qCols = document.getElementsByClassName("qCol1");
var buttons = document.getElementsByClassName("button");
var contIcons = document.getElementsByClassName("contIcon");
var itemsC = document.getElementsByClassName("classicItem");
var shadows = document.getElementsByClassName("shadow");
var expfors = document.getElementsByClassName("expf");
var hobbies = document.getElementsByClassName("hobbies");
var projLis = document.getElementsByClassName("projLi");
var date1 = document.getElementsByClassName("date1");
var arrows = document.getElementsByClassName("arrow");
var picture = document.getElementsByClassName("picture");
var menuIcons = document.getElementsByClassName("menuIcon");
var startAni = document.getElementsByClassName("startAnime");
var n1 = document.getElementsByClassName("n1");
var n2 = document.getElementsByClassName("n2");
var n3 = document.getElementsByClassName("n3");
var n4 = document.getElementsByClassName("n4");
var n5 = document.getElementsByClassName("n5");
var n6 = document.getElementsByClassName("n6");
var n7 = document.getElementsByClassName("n7");
var bh = document.getElementsByClassName("bonhomme");

var p = document.getElementsByTagName("p");
var li = document.getElementsByTagName("li");
var i;

var iniScr;
var oldValue = undefined;
var newValue;
var xBH;
var menuStat = 0;
var close = new Boolean(true);
var xScreen = window.innerWidth;
var yScreen = window.innerHeight;



//ie not work alert
function explorer() {
    if (navigator.userAgent.indexOf("Trident") > -1) {
        page.display = "none";
        window.alert("Internet Explorer ? Really ?  ... Nope!");
        return false;
    }
    return true;
}

//follow the screen size
function iniScrChg() {
    if (screen.matches) {
        iniScr = 0;
    }
    else {
        if (defaultScreen.matches) {
            iniScr = 3;
        }
        else {
            if (screen3.matches) {
                iniScr = 2;
            }
            else {
                iniScr = 1;
            }
        }
    }
    return iniScr;
}

function screenChange() {
    xScreen = window.innerWidth;
    yScreen = window.innerHeight;

    if (oldValue === undefined) {
        iniScrChg();
        oldValue = iniScr;
    }

    if (screen.matches) {
        newValue = 0;
    }
    else {
        if (defaultScreen.matches) {
            iniScr = 3;
        }
        else {
            if (screen3.matches) {
                iniScr = 2;
            }
            else {
                iniScr = 1;
            }
        }
    }

    if (oldValue === newValue) {
        return;
    }
    else {
        if (screen.matches) {
            xBH = 0.8 * xScreen;
        }
        else {
            if (screen3.matches) {
                xBH = 0.5 * xScreen;
            }
            else {
                xBH = 0.64 * xScreen;
            }
        }
        if (boolean) {
            menuSetUp();
        }
        oldValue = newValue;
        downloadPage(boolean);
        return;
    }
}

//button to switch page
function sweetPage() {
    boolean = true;
    downloadPage(boolean);
    return;
}

function fullPage() {
    boolean = false;
    downloadPage(boolean);
    return;
}

function clearPage() {
    boolean = false;
    downloadPage(boolean);
    return;
}

//download pdf
function PDF() {
    let a = document.createElement('a');
    a.href = "CV.pdf";
    a.download = "CV.pdf";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return;
}

//link github
function gitPage() {
    window.location = 'https://github.com/error404LikeAnArson?tab=repositories';
}

//menu hover property
function menuHover(index) {
    if (close) {
        itemsC[(index + 1) % itemsC.length].style.backgroundColor = "rgb(93, 93, 93, 0.6)";
    }
    itemsC[(index + 1) % itemsC.length].style.cursor = "url(cursor.png) 2 0, pointer";
    return;
}

function menuHoverEnd(index) {
    if (close) {
        itemsC[(index + 1) % itemsC.length].style.backgroundColor = "rgb(93, 93, 93, 0.000)";
    }
    return;
}

//menu click action
function menuClick(index) {
    switch (index) {
        case 1:
            sideCl.display = "grid";
            centralC.display = "none";
            sideCn.display = "none";
            foot.display = "none";
            animeB.display = "none";
            sideNone.display = "none";
            document.getElementById("side1").style.display = "block";
            document.getElementById("side2").style.display = "block";
            gridSwitch(false);
            animationClick(document.getElementById("side1"), document.getElementById("side2"));
            break;
        case 2:
            sideCl.display = "none";
            centralC.display = "grid";
            sideCn.display = "none";
            foot.display = "none";
            animeB.display = "none";
            gridSwitch(false);
            animationClick(document.getElementById("centCont"));
            break;
        case 3:
            sideCl.display = "none";
            centralC.display = "none";
            sideCn.display = "grid";
            foot.display = "none";
            animeB.display = "none";
            gridSwitch(false);
            animationClick(document.getElementById("contain1"), document.getElementById("contain2"));
            break;
        case 4:
            sideCl.display = "grid";
            centralC.display = "none";
            sideCn.display = "none";
            foot.display = "grid";
            animeB.display = "none";
            document.getElementById("side1").style.display = "none";
            document.getElementById("side2").style.display = "none";
            sideNone.display = "grid";
            gridSwitch(true);
            animationClick(document.getElementById("side3"), document.getElementById("foot1"), document.getElementById("foot2"));
            break;
        case 5:
            menuStat = (menuStat + 1) % 3;
            if (menuStat === 0) {
                close = true;
            }
            menuB();
            break;
        case 6:
            if (close) {
                close = (null);
            }
            else {
                close = (true);
            }
            menuB();
            break;
        default:
            sideCl.display = "none";
            centralC.display = "none";
            sideCn.display = "none";
            foot.display = "none";
            animeB.display = "block";
            gridSwitch(false);
    }
    return;
}

//button hover property
function buttonHover(index) {
    buttons[index].style.backgroundColor = "rgb(99, 0, 0)";
    buttons[index].style.color = "white";
    buttons[index].style.border = "rgb(70, 0, 0) solid 2px";
    buttons[index].style.cursor = "url(cursor.png) 2 0, pointer";
    return;
}

function buttonHoverEnd(index) {
    buttons[index].style.color = "black";

    if (boolean || screen.matches || screen2.matche) {
        buttons[index].style.backgroundColor = "rgb(140, 0, 0, 0.9)";
        buttons[index].style.border = "rgb(50, 0, 0, 0.7) solid 2px";
    }
    else {
        buttons[index].style.backgroundColor = "rgb(151, 151, 151)";
        buttons[index].style.border = "rgb(51, 51, 51) solid 2px";
    }
    return;
}

//different form menu
function menuB() {
    let menuP = document.getElementsByClassName("menuP");
    let menuSupI = document.getElementById("menuSupIcon").style;
    let menuI2 = document.getElementById("menuIcon2").style;
    let menuCoin = document.getElementById("menuIconCoin").style;
    let LL = "Languages & Logiciels";
    let FE = "Formations & Expériences Pro";

    for (i = 0; i < menuIcons.length; i++) {
        menuIcons[i].style.margin = "auto";
        menuIcons[i].style.marginTop = "5px";
    }

    menuC.top = "";
    menuIcD.display = "grid";
    menuIcD.gridTemplateColumns = "1fr";
    menuIcD.height = "60px";
    menuCoin.marginTop = "0";

    menuIcD.margin = "0";
    for (i = 0; i < itemsC.length; i++) {
        itemsC[i].style.margin = "0";
    }

    switch (menuStat) {
        case 1:
            document.getElementById("LandLog").innerText = LL;
            itemsC[2].style.display = "block";
            document.getElementById("LandLog").style.display = "block";
            document.getElementById("FandEP").innerText = FE;
            itemsC[4].style.display = "block";
            document.getElementById("FandEP").style.display = "block";



            menuC.gridTemplateColumns = "1fr";
            menuC.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr";

            menuC.gridColumnStart = "2";
            menuC.gridColumnEnd = "3";


            if (!close) {
                page.gridTemplateColumns = "1fr 200px";

                for (i = 0; i < itemsC.length; i++) {
                    itemsC[i].style.display = "block";
                }
                menuI1.display = "none";
                menuC.width = "200px";
                menuC.height = "420px";
                menuSupI.marginLeft = "5px";

                menuC.backgroundColor = "#000";
                menuIcD.backgroundColor = "#4F81B4";
                menuC.color = "#4DCB4E";
                menuC.border = "2px solid #F9F9F9";
                menuIcD.border = "2px solid #F9F9F9";
                menuC.textAlign = "left";
                menuIcD.borderRadius = "0 0 0 0";

                menuIcD.gridTemplateColumns = "1fr 1fr";
                menuCoin.display = "block";
                menuCoin.width = "100px";

            }
            else {
                page.gridTemplateColumns = "1fr 74px";

                for (i = 0; i < itemsC.length; i++) {
                    itemsC[i].style.display = "none";
                }
                menuCoin.display = "none";
                menuC.width = "74px";
                menuC.height = "60px";
                menuSupI.marginRight = "3px";
                menuC.border = "none";
                menuIcD.border = "none";
                menuIcD.borderRadius = "45%";

                menuC.backgroundColor = "#000";
                menuIcD.backgroundColor = "rgb(93, 93, 93, 0.700)";
                menuIcD.gridTemplateColumns = "1fr";
            }

            menuSupI.display = "block";
            itemSup.display = "none";
            menuI2.display = "none";
            break;
        case 2:
            page.gridTemplateColumns = "1fr 74px";

            menuC.gridTemplateColumns = "1fr";
            menuC.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr";
            menuC.width = "74px";

            menuC.gridColumnStart = "2";
            menuC.gridColumnEnd = "3";

            menuSupI.display = "block";
            menuIcD.display = "block";
            menuC.border = "none";
            menuIcD.border = "none";
            menuIcD.borderRadius = "0 0 0 0";
            menuIcD.gridTemplateColumns = "1fr 1fr";

            if (!close) {
                for (i = 0; i < itemsC.length; i++) {
                    itemsC[i].style.display = "block";
                }
                for (i = 0; i < menuP.length; i++) {
                    menuP[i].style.display = "none";
                }
                for (i = 0; i < menuIcons.length; i++) {
                    menuIcons[i].style.display = "block";
                }
                menuI2.display = "block";
                menuC.height = "420px";
                menuC.color = "white";
                menuC.borderRadius = "30px";

                menuC.backgroundColor = "rgb(93, 93, 93, 0.700)";
                menuIcD.backgroundColor = "rgb(0, 0, 0, 0)";

            }
            else {
                menuC.border = "none";
                menuC.borderRadius = "45%";

                for (i = 0; i < itemsC.length; i++) {
                    itemsC[i].style.display = "none";
                    itemsC[i].backgroundColor = "rgb(93, 93, 93, 0.700)";

                    menuC.backgroundColor = "rgb(93, 93, 93, 0.700)";
                    menuIcD.backgroundColor = "rgb(0, 0, 0, 0)";
                }
                menuC.height = "60px";
            }

            menuCoin.display = "none";
            menuI1.display = "none";
            break;
        default:
            menuC.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr";
            menuC.gridTemplateRows = "1fr";


            menuCoin.display = "none";

            if (boolean) {
                itemSup.display = "none";
            }

            for (i = 0; i < menuP.length; i++) {
                menuP[i].style.display = "block";
            }
            for (i = 0; i < menuIcons.length; i++) {
                menuIcons[i].style.display = "none";
            }
            menuSetUp();
    }
    // stickyMenu();
    // stickyEnd();
    return;
}

//cursor hover
function photoHover() {
    for (i = 0; i < picture.length; i++) {
        picture[i].style.cursor = "url(cursor.png) 2 0, pointer";
    }
    return;
}

//gif or img function screen
function gifOrImg() {
    photo.display = "none";
    photo2.display = "none";
    gif.display = "block";
    return;
}

function gifOrImgEnd() {
    photo.display = "block";
    if (screen.matches) {
        photo2.display = "none";
    }
    else {
        photo2.display = "block";
    }
    gif.display = "none";
    return;
}

//
//
//
//
//

//animation text at click
function animationClick(el1, el2, el3) {

    if (navigator.userAgent.indexOf("Firefox") > -1) {
        el1.animate([
            {
                opacity: 0,
                scale: 0.1
            },
            {
                opacity: 1,
                scale: 1
            },
            {
                opacity: 1,
                scale: 1
            },
            {
                opacity: 1,
                scale: 1
            }
        ], 2000)

        if (el2) {
            el2.animate([
                {
                    opacity: 0,
                    scale: 0.1
                },
                {
                    opacity: 0,
                    scale: 0.1
                },
                {
                    opacity: 1,
                    scale: 1
                },
                {
                    opacity: 1,
                    scale: 1
                }
            ], 2000)
        }
        if (el3) {
            el3.animate([
                {
                    opacity: 0,
                    scale: 0.1
                },
                {
                    opacity: 0,
                    scale: 0.1
                },
                {
                    opacity: 0,
                    scale: 0.1
                },
                {
                    opacity: 1,
                    scale: 1
                }
            ], 2000);
        }
    }
    else {
        animePage(el1);
        if (el2) {
            animePage(el2);
        }
        if (el3) {
            animePage(el3);
        }
    }
    return;
}

//!not firefox
function animePage(el) {
    let interval = null;
    let s = 0.1;
    clearInterval(interval);
    interval = setInterval(frame, 9);
    function frame() {
        if (s >= 1) {
            clearInterval(interval);
        }
        else {
            el.style.transform = "scale(" + s + ")";
            el.style.opacity = s;
            s = s + 0.01;
        }
    }
    return;
}

//animation starting
function animeStart() {
    page.gridTemplateColumns = "12.5vw 12.5vw 12.5vw 12.5vw 12.5vw 12.5vw 12.5vw 12.5vw";
    page.gridTemplateRows = "25vh 25vh 25vh 25vh";
    page.backgroundColor = "black";

    console.log(startAni);
    console.log(n1);
    console.log(n4);

    for (i = 0; i < startAni.length; i++) {
        startAni[i].style.display = "block";
        startAni[i].style.backgroundImage = "radial-gradient(#545454, #302b36, #000000)";
    }

    for (i = 0; i < n1.length; i++) {
        n1[i].style.zIndex = "12";
    }
    for (i = 0; i < n2.length; i++) {
        n2[i].style.zIndex = "11";
    }
    for (i = 0; i < n3.length; i++) {
        n3[i].style.zIndex = "10";
    }
    for (i = 0; i < n4.length; i++) {
        n4[i].style.zIndex = "9";
    }
    for (i = 0; i < n5.length; i++) {
        n5[i].style.zIndex = "8";
    }
    for (i = 0; i < n6.length; i++) {
        n6[i].style.zIndex = "7";
    }
    for (i = 0; i < n7.length; i++) {
        n7[i].style.zIndex = "6";
    }

    let xDiv, yDiv, side, increment = 1;

    for (i = 0; i < n1.length; i++) {
        let interval = null;
        xDiv = (3 + i * 2) * ((12.5 / 100) * xScreen);
        yDiv = 1;
        if (i) {
            side = 1;
        }
        else {
            side = -1;
        }
        clearInterval(interval);
        interval = setInterval(animeS(n1[i], xDiv, yDiv, interval, side, increment), 6000);
    }

    function animeS(div, xDiv, yDiv, interval, side, increment) {
        if (((xDiv > (xScreen * 3)) || (xDiv < (- xScreen * 2))) &&
            (yDiv > (yScreen * 3)) || (yDiv < (- yScreen * 2))) {
            clearInterval(interval);
        }
        else {
            let z1 = 10 * side * increment;
            let y1 = 20 * increment;
            let x2 = 25 * side * increment;
            let y2 = 20 * increment;
            xDiv += x2;
            yDiv += y2;
            div.style.transform = "rotate3d(0," + y1 + ", " + z1 + ", 30deg) translate3d(" + x2 + "%, " + y2 + "%, 0)";
            increment++;
            interval = setInterval(animeS(div, xDiv, yDiv, interval, side, increment), 6000);
        }

    }


    // for (i = 0; i < n2.length; i++) {
    //     n2[i].style.backgroundColor = "yellow";
    // }
    // for (i = 0; i < n3.length; i++) {
    //     n3[i].style.backgroundColor = "orange";
    // }
    // for (i = 0; i < n4.length; i++) {
    //     n4[i].style.backgroundColor = "red";
    // }
    // for (i = 0; i < n5.length; i++) {
    //     n5[i].style.backgroundColor = "purple";
    // }
    // for (i = 0; i < n6.length; i++) {
    //     n6[i].style.backgroundColor = "blue";
    // }
    // for (i = 0; i < n7.length; i++) {
    //     n7[i].style.backgroundColor = "green";
    // }

    return;
}

//animation bottom img
function bhAnime() {

    for (i = 0; i < bh.length; i++) {
        bh[i].style.height = "25%";
        bh[i].style.width = "auto";
        bh[i].style.position = "absolute";
        bh[i].style.bottom = "5px";
        bh[i].style.cursor = "not-allowed";
    }

    bh[0].style.left = "5px";

    let interval = null;
    let j = 5, k = 0, l = 0, timeout;
    let sens = new Boolean(true);

    if (navigator.userAgent.indexOf("Firefox") > -1) {
        timeout = 5;
    }
    else {
        timeout = 10;
    }


    if (screen.matches) {
        xBH = 0.8 * xScreen;
    }
    else {
        if (screen3.matches) {
            xBH = 0.5 * xScreen;
        }
        else {
            xBH = 0.64 * xScreen;
        }
    }

    clearInterval(interval);
    interval = setInterval(frame, timeout);
    function frame() {
        if (j >= xBH) {
            for (i = 0; i < bh.length; i++) {
                bh[i].style.transform = "rotateY(180deg)";
            }
            clearInterval(interval);
            interval = setInterval(frame2, timeout);
            function frame2() {
                if (j <= 0) {
                    for (i = 0; i < bh.length; i++) {
                        bh[i].style.transform = "rotateY(360deg)";
                    }
                    clearInterval(interval);
                    interval = setInterval(frame, timeout);
                }
                else {
                    j = j - 2;
                    if (!(l % 4)) {
                        bh[k].style.display = "none";
                        if (k === 6) {
                            sens = false;
                        }
                        if (k === 0) {
                            sens = true;
                        }
                        if (sens) {
                            k++;
                        }
                        else {
                            k--;
                        }
                        bh[k].style.display = "block";
                    }
                    bh[k].style.left = j + "px";
                    l++;
                }
            }
        }
        else {
            j = j + 2;
            if (!(l % 4)) {
                bh[k].style.display = "none";
                if (k === 6) {
                    sens = false;
                }
                if (k === 0) {
                    sens = true;
                }
                if (sens) {
                    k++;
                }
                else {
                    k--;
                }
                bh[k].style.display = "block";
            }
            bh[k].style.left = j + "px";
            l++;
        }

    }
    return;
}

//
function draw() {
    //     let zone = document.getElementById("canvas");
    //     let x = ((xScreen) * 0.7) / 100;    // =>pourcentage
    //     let y = ((yScreen) - 60) / 100;
    //     zone.width = (xScreen) * 0.7;
    //     zone.height = (yScreen) - 60;



    //     if (zone.getContext) {
    //         let ctx = zone.getContext('2d');

    //         // let grad1 = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    //         // grad1.addColorStop(0, "rgb(180, 180, 180)");
    //         // grad1.addColorStop(1, "rgb(80, 80, 80)");

    //         ctx.fillStyle = "rgb(180, 180, 180)";
    //         ctx.fillRect(x * 1, x * 1, x * 6, x * 6);

    //         // let grad2 = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    //         // grad2.addColorStop(0, "rgb(90, 90, 90)");
    //         // grad2.addColorStop(1, "rgb(10, 10, 10)");

    //         ctx.fillStyle = "rgb(50, 50, 50)";
    //         ctx.fillRect(x * 25, y * 35, x * 15, y * 20);

    //         ctx.fillStyle = "rgb(250, 120, 0)";
    //         ctx.fillRect(x * 90, y * 10, x * 80, y * 25);

    //         ctx.fillStyle = "rgb(255, 255, 255)";
    //         ctx.arc(x*50, y*20, 10, 0, Math.PI * 2, true);
    //         ctx.fill(); 

    //         ctx.fillStyle = "rgb(255, 255, 255)";
    //         ctx.arc(x*20, y*80, 10, 0, Math.PI * 2, true);
    //         ctx.fill(); 

    //         ctx.fillStyle = "rgb(255, 255, 255)";
    //         ctx.arc(x*60, y*90, 10, 0, Math.PI * 2, true);
    //         ctx.fill(); 

    //         ctx.fillStyle = "rgb(255, 255, 255)";
    //         ctx.arc(x*90, y*85, 10, 0, Math.PI * 2, true);
    //         ctx.fill(); 

    //         ctx.fillStyle = "rgb(255, 255, 255)";
    //         ctx.arc(x*70, y*10, 10, 0, Math.PI * 2, true);
    //         ctx.fill(); 

    //         ctx.fillStyle = "rgb(255, 255, 255)";
    //         ctx.arc(x*60, y*70, 10, 0, Math.PI * 2, true);
    //         ctx.fill(); 

    //         ctx.fillStyle = "rgb(255, 255, 255)";
    //         ctx.arc(x*60, y*40, 10, 0, Math.PI * 2, true);
    //         ctx.fill(); 

    //         ctx.fillStyle = "rgb(250, 150, 0)";
    //         ctx.beginPath();
    //         ctx.moveTo(x*10, y*10);
    //         ctx.lineTo(x*15, y*20);
    //         ctx.lineTo(x*20, y*10);
    //         ctx.fill();

    //         ctx.fillStyle = "rgb(110, 110, 110)";
    //         ctx.beginPath();
    //         ctx.moveTo(x*54, y*52);
    //         ctx.lineTo(x*55, y*60);
    //         ctx.lineTo(x*60, y*55);
    //         ctx.fill();


    //         window.addEventListener('resize', resizeCanvas, false);
    //         function resizeCanvas() {
    //             zone.width = (xScreen) * 0.7;
    //             zone.height = (ySceen) - 60;

    //             ctx.fillStyle = "rgb(180, 180, 180)";
    //             ctx.fillRect(x * 1, x * 1, x * 6, x * 6);

    //             ctx.fillStyle = "rgb(90, 90, 90)";
    //             ctx.fillRect(x * 25, y * 35, x * 15, y * 20);

    //             ctx.fillStyle = "rgb(250, 120, 0)";
    //             ctx.fillRect(x * 90, y * 10, x * 80, y * 25);

    //         }
    //     }
    return;
}

//
//
//
//
//

//change color function background, white=true black=false
function elementColor(boolean) {
    let hobB = document.getElementsByClassName("hobB");
    let hobW = document.getElementsByClassName("hobW");

    if (boolean) {
        for (i = 0; i < hobB.length; i++) {
            hobB.item(i).style.display = "none";
        }
        for (i = 0; i < hobW.length; i++) {
            hobW.item(i).style.display = "block";
        }
        document.getElementById("timelineImgTopB").style.display = "none";
        document.getElementById("timelineImgTopW").style.display = "block";
        document.getElementById("timelineImgBottomB").style.display = "none";
        document.getElementById("timelineImgBottomW").style.display = "block";
        document.getElementById("gitBlack").style.display = "none";
        document.getElementById("gitWhite").style.display = "block";
    }
    else {
        for (i = 0; i < hobB.length; i++) {
            hobB.item(i).style.display = "block";
        }
        for (i = 0; i < hobW.length; i++) {
            hobW.item(i).style.display = "none";
        }
        document.getElementById("timelineImgTopB").style.display = "block";
        document.getElementById("timelineImgTopW").style.display = "none";
        document.getElementById("timelineImgBottomB").style.display = "block";
        document.getElementById("timelineImgBottomW").style.display = "none";
        document.getElementById("gitBlack").style.display = "block";
        document.getElementById("gitWhite").style.display = "none";
    }
}

//change font size function screen
function fontSize(boolean) {

    if (screen.matches) {
        if ((xScreen / yScreen) < (1700 / 850)) {
            for (i = 0; i < p.length; i++) {
                p.item(i).style.fontSize = "2vh";
            }
            for (i = 0; i < li.length; i++) {
                li.item(i).style.fontSize = "2vh";
            }
        }
        else {
            for (i = 0; i < p.length; i++) {
                p.item(i).style.fontSize = "1.2vw";
            }
            for (i = 0; i < li.length; i++) {
                li.item(i).style.fontSize = "1.2vw";
            }
        }
    }
    else {
        if (screen2.matches) {

        }
        else {
            if (boolean) {
                if ((xScreen / yScreen) < (1700 / 850)) {
                    for (i = 0; i < p.length; i++) {
                        p.item(i).style.fontSize = "2.5vh";
                    }
                    for (i = 0; i < li.length; i++) {
                        li.item(i).style.fontSize = "2.5vh";
                    }
                }
                else {
                    for (i = 0; i < p.length; i++) {
                        p.item(i).style.fontSize = "1.2vw";
                    }
                    for (i = 0; i < li.length; i++) {
                        li.item(i).style.fontSize = "1.2vw";
                    }
                }
            }
            else {
                for (i = 0; i < p.length; i++) {
                    p.item(i).style.fontSize = "1.05em";
                }
                for (i = 0; i < li.length; i++) {
                    li.item(i).style.fontSize = "1.05em";
                }
            }
        }
    }
    return;
}

//change font effect
function fontEffect() {
    let line = document.getElementsByClassName("toBoldAndLine");
    let ita = document.getElementsByClassName("toIta");
    let bold = document.getElementsByClassName("Sup");

    for (i = 0; i < line.length; i++) {
        line[i].style.fontWeight = "bolder";
        line[i].style.textDecoration = "underline";
    }
    for (i = 0; i < ita.length; i++) {
        ita[i].style.fontStyle = "italic";
    }
    for (i = 0; i < bold.length; i++) {
        bold[i].style.fontWeight = "bolder";
    }
    return;
}

//photo position & property, sweet=True full/clear=False
function photoP(boolean) {

    photo.display = "block";
    photo.border = "outset";
    photo.transform = "rotate(-2deg)";
    photo2.border = "outset";
    photo2.transform = "rotate(-2deg)";
    gif.border = "outset";
    gif.transform = "rotate(-2deg)";
    photo.zIndex = "5";
    photo2.zIndex = "4";
    photo2.boxShadow = "2px 3px 10px 5px #00000056";
    gif.boxShadow = "2px 3px 10px 5px #00000056";

    if (boolean) {

        photo.marginRight = "auto";
        photo.marginLeft = "auto";
        photo2.marginRight = "auto";
        photo2.marginLeft = "auto";
        gif.marginRight = "auto";
        gif.marginLeft = "auto";

        if (screen.matches) {
            photo2.display = "none";
            photo.position = "relative";
            photo.top = "20%";
            photo.maxWidth = "70%";
            photo.maxHeight = "68%";
            gif.position = "relative";
            gif.top = "20%";
            gif.maxWidth = "70%";
            gif.maxHeight = "68%";

            if (yScreen < 742) {
                photo.maxHeight = "40%";
                photo.width = "auto";
                gif.maxHeight = "40%";
                gif.width = "auto";
            }
        }
        else {
            photo2.display = "block";
            photo.position = "absolute";
            photo.top = "5%";
            photo.right = "7%";
            photo2.position = "absolute";
            photo2.top = "5%";
            photo2.right = "7%";
            gif.position = "absolute";
            gif.top = "5%";
            gif.right = "7%";

            if (screen3.matches) {
                photo.maxWidth = "16%";
                photo2.maxWidth = "16%";
                gif.maxWidth = "16%";
            }
            else {
                photo.maxWidth = "10%";
                photo2.maxWidth = "10%";
                gif.maxWidth = "10%";
            }
        }
    }
    else {
        if (screen.matches) {
            photo2.display = "none";
            photo.position = "relative";
            photo.marginRight = "auto";
            photo.marginLeft = "auto";
            photo.top = "20%";
            photo.maxWidth = "70%";
            gif.position = "relative";
            gif.marginRight = "auto";
            gif.marginLeft = "auto";
            gif.top = "20%";
            gif.maxWidth = "70%";
        }
        else {
            if (screen2.matches) {
                photo2.display = "block";
                photo.position = "absolute";
                photo.top = "25%";
                photo.maxWidth = "15%";
                photo.left = "10%";
                photo2.position = "absolute";
                photo2.top = "25%";
                photo2.maxWidth = "15%";
                photo2.left = "10%";
                gif.position = "absolute";
                gif.top = "25%";
                gif.maxWidth = "15%";
                gif.left = "10%";

            }
            else {
                photo2.display = "block";
                photo.position = "absolute";
                photo.top = "5%";
                photo.left = "28%"
                photo.maxWidth = "9%";
                photo2.position = "absolute";
                photo2.top = "5%";
                photo2.left = "28%"
                photo2.maxWidth = "9%";
                gif.position = "absolute";
                gif.top = "5%";
                gif.left = "28%"
                gif.maxWidth = "9%";

            }
        }
    }
    gif.display = "none";
    return;
}

//image size and position
function imgSetUp(boolean) {

    for (i = 0; i < langIcons.length; i++) {
        langIcons[i].style.marginLeft = "auto";
        langIcons[i].style.marginRight = "auto";
    }

    for (i = 0; i < logIcons.length; i++) {
        logIcons[i].style.marginLeft = "auto";
        logIcons[i].style.marginRight = "20px";
        logIcons[i].style.marginTop = "auto";
        logIcons[i].style.marginBottom = "auto";
    }

    for (i = 0; i < contIcons.length; i++) {
        contIcons[i].style.maxHeight = "65%";
        contIcons[i].style.marginTop = "auto";
        contIcons[i].style.marginBottom = "auto";
    }

    if (boolean) {
        if (screen.matches) {
            for (i = 0; i < contIcons.length; i++) {
                contIcons[i].style.maxHeight = "80%";
                contIcons[i].style.width = "auto";
            }
        }
        else {
            if (screen3.matches) {
                document.getElementById("timelineImgTopW").style.height = "65vw";
            }
            else {
                document.getElementById("timelineImgTopW").style.maxHeight = "30vw";
            }
        }
    }
    else {
        if (screen.matches) {

        }
        else {
            if (screen2.matches) {
                // for(i=0; i<arrows.length;i++){
                //     arrows[i].style.maxHeight = ;
                // }
            }
            else {

            }
        }
    }
    return;
}

//button size and position
function buttonSetUp(boolean) {

    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.fontWeight = "bolder";
    }

    pdfB.borderRadius = "10px";
    pdfB.width = "70px";
    pdfB.height = "39px";
    pdfB.marginLeft = "auto";
    pdfB.marginRight = "auto";

    gitB.borderRadius = "10px";
    gitB.width = "70px";
    gitB.height = "39px";
    gitB.marginLeft = "auto";
    gitB.marginRight = "auto";

    sweetB.borderRadius = "10px";
    sweetB.width = "70px";
    sweetB.height = "39px";
    sweetB.marginLeft = "auto";
    sweetB.marginRight = "auto";

    if (boolean || screen.matches) {
        pdfB.backgroundColor = "rgb(140, 0, 0, 0.9)";
        pdfB.border = "rgb(50, 0, 0, 0.7) solid 2px";

        gitB.backgroundColor = "rgb(140, 0, 0, 0.9)";
        gitB.border = "rgb(50, 0, 0, 0.7) solid 2px";

        fullB.backgroundColor = "rgb(140, 0, 0, 0.9)";
        fullB.border = "rgb(50, 0, 0, 0.7) solid 2px";
        fullB.borderRadius = "10px";
        fullB.width = "70px";
        fullB.height = "39px";
        fullB.marginLeft = "auto";
        fullB.marginRight = "auto";

        clearB.backgroundColor = "rgb(140, 0, 0, 0.9)";
        clearB.border = "rgb(50, 0, 0, 0.7) solid 2px";
        clearB.borderRadius = "10px";
        clearB.width = "70px";
        clearB.height = "39px";
        clearB.marginLeft = "auto";
        clearB.marginRight = "auto";

        sweetB.backgroundColor = "rgb(140, 0, 0, 0.9)";
        sweetB.border = "rgb(50, 0, 0, 0.7) solid 2px";
    }
    else {
        pdfB.backgroundColor = "rgb(151, 151, 151)";
        pdfB.border = "rgb(51, 51, 51) solid 2px";

        gitB.backgroundColor = "rgb(151, 151, 151)";
        gitB.border = "rgb(51, 51, 51) solid 2px";

        sweetB.backgroundColor = "rgb(151, 151, 151)";
        sweetB.border = "rgb(51, 51, 51) solid 2px";
    }
    return;
}

//menu sweet 
function menuSetUp() {

    menuC.gridColumnStart = "1";

    menuC.display = "grid";
    menuC.color = "white";
    menuC.backgroundColor = "rgb(93, 93, 93, 0.700)";
    menuC.height = "60px";
    menuC.width = "100%";
    menuC.fontWeight = "bold";
    menuC.textAlign = "center";
    menuC.zIndex = "3";
    menuC.position = "relative";
    menuC.top = "";
    menuC.right = "0";
    menuC.border = "none";
    menuC.borderRadius = "0 0 0 0";
    menuIcD.border = "none";

    menuIcD.display = "none";

    let exp = "Exp";
    let prgm = "Technique";
    let LL = "Languages & Logiciels";
    let FE = "Formations & Expériences Pro";

    if (xScreen < 750) {
        document.getElementById("FandEP").innerText = exp;
    }
    else {
        document.getElementById("FandEP").innerText = FE;
    }

    if (screen.matches) {
        document.getElementById("LandLog").innerText = prgm;
    }
    else {
        document.getElementById("LandLog").innerText = LL;
    }

    if (xScreen >= 750 && !screen.matches) {
        itemsC[4].style.display = "table";
        document.getElementById("FandEP").style.display = "table-cell";
    }
    else {
        itemsC[4].style.display = "block";
        document.getElementById("FandEP").style.display = "block";
    }

    if (xScreen < 1084 && xScreen > 730) {
        itemsC[2].style.display = "table";
        document.getElementById("LandLog").style.display = "table-cell";
    }
    else {
        itemsC[2].style.display = "block";
        document.getElementById("LandLog").style.display = "block";
    }

    for (i = 0; i < itemsC.length; i++) {
        itemsC[i].style.display = "block";
        itemsC[i].style.height = "60px";
    }

    if (screen.matches) {
        itemSup.display = "block";
    }
    else {
        itemSup.display = "none";
    }

    menuI1.display = "block";
    menuI1.margin = "auto";
    menuI1.marginTop = "5px";

    return;
}

//menu stick at scroll
function menuSt() {
    let test = document.getElementsByClassName("sticky");
    if (test.length) {
        test[0].style.position = "fixed";
        test[0].style.top = "0";
        if (menuStat === 0) {
            test[0].style.width = "100%";
            test[0].style.backgroundColor = "rgb(93, 93, 93, 0.9)";
        } else {
            if (menuStat === 1 && !close) {
                test[0].style.width = "200px";
            }
            else {
                test[0].style.width = "74px";
            }
        }
    }
    return;
}

function stickyMenu() {
    if (screen.matches && boolean) {
        let stickyX = menuS.offsetTop;
        if (stickyX != 0) {
            if (window.pageYOffset > stickyX) {
                menuS.classList.add("sticky");
            }
            menuSt();
        }
    }
    return;
}

function stickyEnd() {
    if (screen.matches && boolean) {
        let stickyX = yScreen * 60 / 100;
        if (window.pageYOffset < stickyX) {
            menuS.classList.remove("sticky");
            menuC.gridRowStart = "2";
            menuC.gridRowEnd = "3";
            menuC.backgroundColor = "rgb(93, 93, 93, 0.700)";
            menuC.position = "relative";

            menuB();
        }
    }
    return;
}

//
//
//
//
//

//before new grid, clear the page
function clear() {
    page.overflowY = "scroll";
    page.overflowX = "hidden";
    page.padding = "0";
    gif.display = "none";
    page.backgroundImage = "none";

    header.backgroundColor = "rgb(0, 0, 0, 0)";
    head.backgroundColor = "rgb(0, 0, 0, 0)";
    sideCn.backgroundColor = "rgb(0, 0, 0, 0)";
    sideCl.backgroundColor = "rgb(0, 0, 0, 0)";
    centralC.backgroundColor = "rgb(0, 0, 0, 0)";
    foot.backgroundColor = "rgb(0, 0, 0, 0)";

    header.margin = "0";
    sideCl.margin = "0";
    sideCn.margin = "0";
    centralC.margin = "0";
    foot.margin = "0";

    header.padding = "0";
    sideCn.padding = "0";
    sideCl.padding = "0";
    centralC.padding = "0";
    foot.padding = "0";

    header.borderRadius = "0 0 0 0";
    sideCl.borderRadius = "0 0 0 0";
    sideCn.borderRadius = "0 0 0 0";
    centralC.borderRadius = "0 0 0 0";
    foot.borderRadius = "0 0 0 0";

    photo.top = "";
    photo.left = "";
    photo.right = "";
    photo2.top = "";
    photo2.left = "";
    photo2.right = "";
    gif.top = "";
    gif.left = "";
    gif.right = "";

    for (i = 0; i < shadows.length; i++) {
        shadows[i].style.textShadow = "0 0 0 #000000";
    }

    head.height = "";

    return;
}

//clear the page when click, to-foot=true from-foot=false
function gridSwitch(on) {
    if (on) {
        sideCl.gridTemplateRows = "1fr 1fr 1fr";
        sideCl.backgroundColor = "rgb(0, 0, 0, 0)";
    }
    else {
        sideCl.gridTemplateRows = "2fr 3fr";
        sideCl.backgroundColor = "rgb(10, 10, 10, 0.65)";
    }
    return;
}

//clear property portrait
function clearPropP() {
    page.overflowY = "scroll";
    head.height = "auto";
    header.height = "auto";

    header.backgroundColor = "rgb(92, 0, 0)";
    header.color = "white";
    header.paddingLeft = "2%";
    header.paddingTop = "2%";
    header.paddingRight = "0";
    header.paddingBottom = "0";
    header.borderRadius = "0 0 0 0 ";

    sideCl.padding = "3%";
    sideCl.color = "black";

    sideCn.padding = "3%";
    sideCn.height = "auto";

    centralC.backgroundColor = "rgb(151, 151, 151, 0.3)";
    centralC.borderRadius = "0 0 25px 25px";
    centralC.padding = "3%";

    foot.backgroundColor = "rgb(151, 151, 151)";
    foot.padding = "3%";
    foot.paddingBottom = "5%";
    foot.margin = "0";
    foot.borderRadius = "50px 50px 0 0";

    logCol.marginTop = "0";
    tooLong.padding = "0";

    for (i = 0; i < projLis.length; i++) {
        projLis[i].style.padding = "0";
    }

    for (i = 0; i < arrows.length; i++) {
        arrows[i].style.maxWidth = "auto";
    }

    for (i = 0; i < logRows.length; i++) {
        logRows[i].style.maxHeight = "auto";
    }

    for (i = 0; i < date1.length; i++) {
        date1[i].style.padding = "0";
    }

    for (i = 0; i < qCols.length; i++) {
        qCols[i].style.padding = "0";
    }

    for (i = 0; i < li.length; i++) {
        li[i].paddingRight = "2%";
    }

    return;
}

//clear property landscape
function clearPropLS() {
    page.overflowY = "scroll";
    header.height = "auto";

    header.backgroundColor = "rgb(151, 151, 151)";
    header.color = "black";
    header.padding = "2%";
    header.borderRadius = "0 0 0 0 ";

    sideCl.backgroundColor = "rgb(92, 0, 0)";
    sideCl.padding = "3%";
    sideCl.color = "white";

    centralC.padding = "3%";
    centralC.borderRadius = "0 0 0 0";

    sideCn.padding = "3%";
    sideCn.height = "auto";

    foot.backgroundColor = "rgba(92, 0, 0, 0.123)";
    foot.padding = "3%";
    foot.paddingBottom = "5%";
    foot.margin = "0";
    foot.borderRadius = "50px 0 0 0";

    logCol.marginTop = "0";
    tooLong.padding = "0";

    for (i = 0; i < projLis.length; i++) {
        projLis[i].style.padding = "0";
    }

    for (i = 0; i < arrows.length; i++) {
        arrows[i].style.maxWidth = "auto";
    }

    for (i = 0; i < logRows.length; i++) {
        logRows[i].style.maxHeight = "auto";
    }

    for (i = 0; i < date1.length; i++) {
        date1[i].style.padding = "0";
    }

    for (i = 0; i < qCols.length; i++) {
        qCols[i].style.padding = "0";
    }

    for (i = 0; i < li.length; i++) {
        li[i].padding = "0";
    }
    return;
}

//full property
function fullProp() {
    page.overflow = "hidden";
    header.height = "30vh";

    header.backgroundColor = "rgb(151, 151, 151)";
    header.color = "black";
    header.padding = "1%";
    header.borderRadius = "0px 70px 70px 0px";

    sideCl.backgroundColor = "rgb(92, 0, 0)";
    sideCl.color = "white";
    sideCl.paddingTop = "0";
    sideCl.paddingBottom = "0";
    sideCl.paddingLeft = "4%";
    sideCl.paddingRight = "2%";

    centralC.padding = "2%";
    centralC.borderRadius = "0 0 0 0";

    sideCn.padding = "2%";
    sideCn.height = "65vh";     //or too long

    foot.backgroundColor = "rgba(92, 0, 0, 0.123)";
    foot.padding = "0";
    foot.paddingLeft = "2%";
    foot.margin = "0";
    foot.marginRight = "5%";
    foot.borderRadius = "0px 100px 0px 0px";

    logCol.marginTop = "5%";

    tooLong.paddingTop = "20%";
    tooLong.paddingBottom = "60%";

    for (i = 0; i < projLis.length; i++) {
        projLis[i].style.paddingTop = "0.7%";
        projLis[i].style.paddingBottom = "0.7%";
    }

    for (i = 0; i < arrows.length; i++) {
        arrows[i].style.maxWidth = "60%";
    }

    for (i = 0; i < logRows.length; i++) {
        logRows[i].style.maxHeight = "53px";
    }

    for (i = 0; i < date1.length; i++) {
        date1[i].style.paddingBottom = "19%";
    }

    for (i = 0; i < qCols.length; i++) {
        qCols[i].style.paddingRight = "50%";
    }

    for (i = 0; i < li.length; i++) {
        li[i].padding = "0";
    }
    return;
}

//full/clear property
function fullClearProp() {
    page.backgroundColor = "rgb(214, 214, 214)";
    page.color = "black";
    menuC.display = "none";
    animeB.display = "none";
    document.getElementById("side1").style.display = "block";
    document.getElementById("side2").style.display = "block";
    head.height = "auto";

    head3.alignItems = "center";

    let dates = document.getElementsByClassName("date");
    for (i = 0; i < dates.length; i++) {
        dates[i].style.marginLeft = "0";
        dates[i].style.paddingLeft = "0";
    }

    let dateUls = document.getElementsByClassName("FandExpUl");
    for (i = 0; i < dateUls.length; i++) {
        dateUls[i].style.margin = "0";
    }

    if (screen.matches) {
        clearPropP();
    }
    else {
        if (screen2.matches) {
            clearPropLS();
        }
        else {
            fullProp();
        }
    }
    return;
}

//sweet property portrait
function sweetPropP() {

    page.backgroundSize = "250%";
    header.height = "auto";
    head.height = "auto";

    header.paddingLeft = "2%";
    header.paddingTop = "2%";
    header.paddingRight = "0";
    header.paddingBottom = "0";

    sideCl.padding = "4%";
    centralC.padding = "4%";
    sideCn.padding = "4%";
    foot.padding = "4%";

    if (xScreen > 590) {
        for (i = 0; i < date1.length; i++) {
            date1[i].style.paddingBottom = "20%";
        }
    }
    else {
        for (i = 0; i < date1.length; i++) {
            date1[i].style.paddingBottom = "38%";
        }
    }

    return;
}

//sweet intermediaire size
function sweetPropLS2() {
    page.overflowX = "auto";
    page.backgroundSize = "150%";

    header.height = "auto";
    head.height = "auto";
    header.padding = "5%";

    for (i = 0; i < date1.length; i++) {
        date1[i].style.paddingBottom = "62%";
    }
    return;
}

//sweet property landscape
function sweetPropLS() {
    header.margin = "0";
    header.padding = "5%";
    header.height = "auto";

    head.height = "100vh";

    sideCl.marginLeft = "7%";
    sideCl.marginRight = "7%";
    sideCl.marginTop = "8vh";
    sideCl.marginBottom = "8vh";
    sideCl.borderRadius = "20px";
    sideCl.padding = "3%";

    centralC.marginLeft = "7%";
    centralC.marginRight = "7%";
    centralC.marginTop = "8vh";
    centralC.marginBottom = "8vh";
    centralC.borderRadius = "20px";
    centralC.padding = "3%";

    sideCn.marginLeft = "7%";
    sideCn.marginRight = "7%";
    sideCn.marginTop = "8vh";
    sideCn.marginBottom = "8vh";
    sideCn.borderRadius = "20px";
    sideCn.padding = "3%";

    foot.marginLeft = "7%";
    foot.marginRight = "7%";
    foot.marginTop = "8vh";
    foot.marginBottom = "8vh";
    foot.borderRadius = "20px";
    foot.padding = "3%";

    sideCn.height = "auto";

    for (i = 0; i < date1.length; i++) {
        date1[i].style.paddingBottom = "20%";
    }

    document.getElementById("contain1").style.marginBottom = "0";
    document.getElementById("contain2").style.marginTop = "0";
    return;
}

//sweet property
function sweetProp() {
    page.backgroundColor = "#000";
    page.backgroundImage = "url('coding.jpg')";
    page.backgroundRepeat = "no-repeat";
    page.backgroundSize = "85%";
    page.overflowY = "scroll";
    page.overflowX = "hidden";
    page.color = "white";

    sideCl.zIndex = "2";

    header.backgroundColor = "rgb(92, 0, 0, 0.9)";
    sideCl.backgroundColor = "rgb(10, 10, 10, 0.65)";
    centralC.backgroundColor = "rgb(10, 10, 10, 0.65)";
    foot.backgroundColor = "rgb(10, 10, 10, 0.65)";
    sideCn.backgroundColor = "rgb(10, 10, 10, 0.65)";

    for (i = 0; i < shadows.length; i++) {
        shadows[i].style.textShadow = "0px 0px 8px #000000";
    }

    head3.textAlign = "center";

    for (i = 0; i < qCols.length; i++) {
        qCols[i].style.paddingRight = "20%";
    }

    menuSetUp();

    for (i = 0; i < projLis.length; i++) {
        projLis[i].style.paddingTop = "4%";
        projLis[i].style.paddingBottom = "4%";
    }

    if (screen.matches) {
        sweetPropP();
    }
    else {
        sweetPropLS();
        if (screen3.matches) {
            sweetPropLS2();
        }
    }
    return;
}

//property for all
function property(boolean) {
    clear();

    head.boxSizing = "border-box";

    let lis = document.getElementsByClassName("s3Li");
    let CC = document.getElementById("centCont").style;

    for (i = 0; i < lis.length; i++) {
        lis[i].style.listStyle = "none";
    }

    for (i = 0; i < logCols.length; i++) {
        logCols[i].style.marginLeft = "auto";
        logCols[i].style.marginRight = "auto";
    }

    for (i = 0; i < qCols.length; i++) {
        qCols[i].style.marginLeft = "auto";
        qCols[i].style.marginRight = "auto";
    }

    for (i = 0; i < hobbies.length; i++) {
        hobbies[i].style.marginLeft = "auto";
        hobbies[i].style.marginRight = "auto";
    }

    langCol.textAlign = "center";

    document.getElementById("dateUl1").style.listStyle = "none";
    document.getElementById("dateUl2").style.listStyle = "none";

    projUl.listStyleImage = "url('puce.png')";

    centralC.justifyContent = "center";
    CC.marginTop = "auto";
    CC.marginBottom = "auto";


    if (boolean) {
        sweetProp();
    }
    else {
        fullClearProp();
    }
    return;
}

//
//
//
//
//

//all grid for second page portrait
function clearGridP() {
    page.gridTemplateColumns = "1fr";
    page.gridTemplateRows = "60vh 3fr 6fr 4.7fr 2fr";

    header.gridColumnStart = "1";
    header.gridColumnEnd = "2";
    header.gridRowStart = "1";
    header.gridRowEnd = "2";

    sideCl.gridColumnStart = "1";
    sideCl.gridColumnEnd = "2";
    sideCl.gridRowStart = "3";
    sideCl.gridRowEnd = "4";

    centralC.gridColumnStart = "1";
    centralC.gridColumnEnd = "2";
    centralC.gridRowStart = "2";
    centralC.gridRowEnd = "3";

    sideCn.gridColumnStart = "1";
    sideCn.gridColumnEnd = "2";
    sideCn.gridRowStart = "4";
    sideCn.gridRowEnd = "5";

    foot.gridColumnStart = "1";
    foot.gridColumnEnd = "2";
    foot.gridRowStart = "5";
    foot.gridRowEnd = "6";

    head.gridTemplateColumns = "1fr 2fr";
    head.gridTemplateRows = "16.8vh 34.2vh 9vh";

    head1.gridColumnStart = "1";
    head1.gridColumnEnd = "2";
    head1.gridRowStart = "2";
    head1.gridRowEnd = "3";

    head2.gridColumnStart = "1";
    head2.gridColumnEnd = "3";
    head2.gridRowStart = "1";
    head2.gridRowEnd = "2";

    head3.gridColumnStart = "1";
    head3.gridColumnEnd = "3";
    head3.gridRowStart = "3";
    head3.gridRowEnd = "4";

    head4.gridColumnStart = "2";
    head4.gridColumnEnd = "3";
    head4.gridRowStart = "2";
    head4.gridRowEnd = "3";

    qCol.gridTemplateColumns = "1fr 1fr";
    qCol.gridTemplateRows = "1fr";

    formt.gridTemplateColumns = "25% 5% 75%";
    formt.gridTemplateRows = "1fr";

    exp.gridTemplateColumns = "25% 5% 75%";
    exp.gridTemplateRows = "1fr";
    return;
}

//all grid for second page landscape
function clearGridSP() {
    page.overflowY = "-moz-scrollbars-vertical";
    page.gridTemplateColumns = "7fr 4fr";
    page.gridTemplateRows = "2.5fr 3fr 4fr 2fr";

    header.gridColumnStart = "1";
    header.gridColumnEnd = "3";
    header.gridRowStart = "1";
    header.gridRowEnd = "2";

    sideCl.gridColumnStart = "2";
    sideCl.gridColumnEnd = "3";
    sideCl.gridRowStart = "2";
    sideCl.gridRowEnd = "4";

    centralC.gridColumnStart = "1";
    centralC.gridColumnEnd = "2";
    centralC.gridRowStart = "2";
    centralC.gridRowEnd = "3";

    sideCn.gridColumnStart = "1";
    sideCn.gridColumnEnd = "2";
    sideCn.gridRowStart = "3";
    sideCn.gridRowEnd = "4";

    foot.gridColumnStart = "1";
    foot.gridColumnEnd = "3";
    foot.gridRowStart = "4";
    foot.gridRowEnd = "5";

    head.gridTemplateColumns = "1fr 1fr";
    head.gridTemplateRows = "2fr 3fr";

    head1.gridColumnStart = "1";
    head1.gridColumnEnd = "2";
    head1.gridRowStart = "2";
    head1.gridRowEnd = "3";

    head2.gridColumnStart = "1";
    head2.gridColumnEnd = "2";
    head2.gridRowStart = "1";
    head2.gridRowEnd = "2";

    head3.gridColumnStart = "2";
    head3.gridColumnEnd = "3";
    head3.gridRowStart = "1";
    head3.gridRowEnd = "2";

    head4.gridColumnStart = "2";
    head4.gridColumnEnd = "3";
    head4.gridRowStart = "2";
    head4.gridRowEnd = "3";

    qCol.gridTemplateColumns = "1fr";
    qCol.gridTemplateRows = "1fr 1fr";

    formt.gridTemplateColumns = "17% 5% 78%";
    formt.gridTemplateRows = "1fr";

    exp.gridTemplateColumns = "17% 5% 78%";
    exp.gridTemplateRows = "1fr";
    return;
}

//all grid for second page full
function fullGrid() {
    page.overflow = "hidden";
    page.gridTemplateColumns = "26vw 32vw 42vw";
    page.gridTemplateRows = "30vh 50vh 20vh";

    header.gridColumnStart = "2";
    header.gridColumnEnd = "4";
    header.gridRowStart = "1";
    header.gridRowEnd = "2";

    sideCl.gridColumnStart = "1";
    sideCl.gridColumnEnd = "2";
    sideCl.gridRowStart = "1";
    sideCl.gridRowEnd = "3";

    centralC.gridColumnStart = "2";
    centralC.gridColumnEnd = "3";
    centralC.gridRowStart = "2";
    centralC.gridRowEnd = "3";

    sideCn.gridColumnStart = "3";
    sideCn.gridColumnEnd = "4";
    sideCn.gridRowStart = "2";
    sideCn.gridRowEnd = "4";

    foot.gridColumnStart = "1";
    foot.gridColumnEnd = "3";
    foot.gridRowStart = "3";
    foot.gridRowEnd = "4";

    head.gridTemplateColumns = "17% 38% 12% 33%";
    head.gridTemplateRows = "1fr";

    head1.gridColumnStart = "1";
    head1.gridColumnEnd = "2";
    head1.gridRowStart = "1";
    head1.gridRowEnd = "2";

    head2.gridColumnStart = "2";
    head2.gridColumnEnd = "3";
    head2.gridRowStart = "1";
    head2.gridRowEnd = "2";

    head3.gridColumnStart = "3";
    head3.gridColumnEnd = "4";
    head3.gridRowStart = "1";
    head3.gridRowEnd = "2";

    head4.gridColumnStart = "4";
    head4.gridColumnEnd = "5";
    head4.gridRowStart = "1";
    head4.gridRowEnd = "2";

    head3.gridTemplateColumns = "1fr";
    head3.gridTemplateRows = "1fr 1fr 1fr";

    sideCl.gridTemplateColumns = "1fr";
    sideCl.gridTemplateRows = "23% 45% 32%";

    foot.gridTemplateColumns = "50% 50%";
    foot.gridTemplateRows = "1fr";

    foot1C.gridRowStart = "1";
    foot1C.gridRowEnd = "2";
    foot2C.gridRowStart = "1";
    foot2C.gridRowEnd = "2";

    foot2.gridTemplateColumns = "2fr 7fr";
    foot2.gridTemplateRows = "1fr";

    engCol1.gridColumnStart = "1";
    engCol1.gridColumnEnd = "2";
    engCol2.gridColumnStart = "2";
    engCol2.gridColumnEnd = "3";

    langCol.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    langCol.gridTemplateRows = "1fr";

    logCol.gridTemplateColumns = "1fr 1fr";
    logCol.gridTemplateRows = "1fr";

    qCol.gridTemplateColumns = "1fr 1fr";
    qCol.gridTemplateRows = "1fr";

    sideCn.gridTemplateColumns = "1fr";
    sideCn.gridTemplateRows = "67% 33%;";

    formt.gridTemplateColumns = "20% 5% 75%";
    formt.gridTemplateRows = "1fr";

    exp.gridTemplateColumns = "20% 5% 75%";
    exp.gridTemplateRows = "1fr";

    contCol.gridTemplateColumns = "1fr";
    contCol.gridTemplateRows = "1fr 1fr";
    return;
}

//grid for second page for any screen other size
function clearGrid() {
    page.overflowY = "scroll";

    head3.gridTemplateColumns = "1fr 1fr 1fr";
    head3.gridTemplateRows = "1fr";

    sideCl.gridTemplateColumns = "1fr";
    sideCl.gridTemplateRows = "1fr 2fr 1fr";

    foot.gridTemplateColumns = "1fr";
    foot.gridTemplateRows = "1fr 1fr";

    foot1C.gridRowStart = "1";
    foot1C.gridRowEnd = "2";
    foot2C.gridRowStart = "2";
    foot2C.gridRowEnd = "3";

    foot2.gridTemplateColumns = "1fr 2fr 5fr";
    foot2.gridTemplateRows = "1fr";

    engCol1.gridColumnStart = "2";
    engCol1.gridColumnEnd = "3";
    engCol2.gridColumnStart = "3";
    engCol2.gridColumnEnd = "4";

    langCol.gridTemplateColumns = "1fr 1fr";
    langCol.gridTemplateRows = "1fr 1fr";

    logCol.gridTemplateColumns = "1fr";
    logCol.gridTemplateRows = "1fr 1fr";

    sideCn.gridTemplateColumns = "1fr";
    sideCn.gridTemplateRows = "2fr 1fr";

    contCol.gridTemplateColumns = "1fr";
    contCol.gridTemplateRows = "1fr 1fr 1fr";

    if (screen.matches) {
        clearGridP();
    }
    else {
        clearGridSP();
    }
    return;
}

//grid for second page for full screen or other
function clearFullGrid() {

    sideNone.gridRowStart = "3";
    sideNone.gridRowEnd = "4";

    if (screen.matches || screen2.matches) {
        clearGrid();
    }
    else {
        fullGrid();
    }
    return;
}

//all grid for first page portrait
function sweetGridP() {
    page.gridTemplateColumns = "1fr 74px";
    page.gridTemplateRows = "60vh 60px 1fr";
    head.height = "60vh";
    if (yScreen < 754) {
        page.gridTemplateRows = "60% 60px 1fr";
        head.height = "60%";
    }

    menuC.gridColumnStart = "1";
    menuC.gridColumnEnd = "3";
    menuC.gridRowStart = "2";
    menuC.gridRowEnd = "3";

    header.gridColumnStart = "1";
    header.gridColumnEnd = "3";
    header.gridRowStart = "1";
    header.gridRowEnd = "2";

    sideCl.gridColumnStart = "1";
    sideCl.gridColumnEnd = "3";
    sideCl.gridRowStart = "3";
    sideCl.gridRowEnd = "4";

    centralC.gridColumnStart = "1";
    centralC.gridColumnEnd = "3";
    centralC.gridRowStart = "3";
    centralC.gridRowEnd = "4";

    sideCn.gridColumnStart = "1";
    sideCn.gridColumnEnd = "3";
    sideCn.gridRowStart = "3";
    sideCn.gridRowEnd = "4";

    foot.gridColumnStart = "1";
    foot.gridColumnEnd = "3";
    foot.gridRowStart = "3";
    foot.gridRowEnd = "4";

    menuC.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr";
    menuC.gridTemplateRows = "1fr";

    head.gridTemplateColumns = "1fr 2fr";
    head.gridTemplateRows = "16.8vh 34.2vh 9vh";
    if (yScreen < 745) {
        page.gridTemplateRows = "16.8% 34.2% 9%";
    }

    head1.gridColumnStart = "1";
    head1.gridColumnEnd = "2";
    head1.gridRowStart = "2";
    head1.gridRowEnd = "3";

    head2.gridColumnStart = "1";
    head2.gridColumnEnd = "3";
    head2.gridRowStart = "1";
    head2.gridRowEnd = "2";

    head3.gridColumnStart = "1";
    head3.gridColumnEnd = "3";
    head3.gridRowStart = "3";
    head3.gridRowEnd = "4";

    head4.gridColumnStart = "2";
    head4.gridColumnEnd = "3";
    head4.gridRowStart = "2";
    head4.gridRowEnd = "3";

    langCol.gridTemplateColumns = "1fr 1fr";
    langCol.gridTemplateRows = "1fr 1fr";

    logCol.gridTemplateColumns = "1fr";
    logCol.gridTemplateRows = "1fr 1fr";

    formt.gridTemplateColumns = "30% 5% 65%";
    formt.gridTemplateRows = "1fr";

    exp.gridTemplateColumns = "30% 5% 65%";
    exp.gridTemplateRows = "1fr";
    return;
}

//all grid for first page landscape
function sweetGridLS() {
    page.overflowY = "-moz-scrollbars-vertical";
    page.gridTemplateColumns = "3fr 1fr";
    page.gridTemplateRows = "60px 1fr";

    menuC.gridColumnStart = "1";
    menuC.gridColumnEnd = "2";
    menuC.gridRowStart = "1";
    menuC.gridRowEnd = "2";

    header.gridColumnStart = "2";
    header.gridColumnEnd = "3";
    header.gridRowStart = "1";
    header.gridRowEnd = "3";

    sideCl.gridColumnStart = "1";
    sideCl.gridColumnEnd = "2";
    sideCl.gridRowStart = "2";
    sideCl.gridRowEnd = "3";

    centralC.gridColumnStart = "1";
    centralC.gridColumnEnd = "2";
    centralC.gridRowStart = "2";
    centralC.gridRowEnd = "3";

    sideCn.gridColumnStart = "1";
    sideCn.gridColumnEnd = "2";
    sideCn.gridRowStart = "2";
    sideCn.gridRowEnd = "3";

    foot.gridColumnStart = "1";
    foot.gridColumnEnd = "2";
    foot.gridRowStart = "2";
    foot.gridRowEnd = "3";

    menuC.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
    menuC.gridTemplateRows = "1fr";

    head.gridTemplateColumns = "1fr";
    head.gridTemplateRows = "2fr 1fr 2fr 1fr";

    head1.gridColumnStart = "1";
    head1.gridColumnEnd = "2";
    head1.gridRowStart = "1";
    head1.gridRowEnd = "2";

    head2.gridColumnStart = "1";
    head2.gridColumnEnd = "2";
    head2.gridRowStart = "2";
    head2.gridRowEnd = "3";

    head3.gridColumnStart = "1";
    head3.gridColumnEnd = "2";
    head3.gridRowStart = "4";
    head3.gridRowEnd = "5";

    head4.gridColumnStart = "1";
    head4.gridColumnEnd = "2";
    head4.gridRowStart = "3";
    head4.gridRowEnd = "4";

    langCol.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    langCol.gridTemplateRows = "1fr";

    logCol.gridTemplateColumns = "1fr 1fr";
    logCol.gridTemplateRows = "1fr";

    formt.gridTemplateColumns = "20% 5% 75%";
    formt.gridTemplateRows = "1fr";

    exp.gridTemplateColumns = "20% 5% 75%";
    exp.gridTemplateRows = "1fr";

    if (screen3.matches) {
        formt.gridTemplateColumns = "30% 5% 1fr";
        exp.gridTemplateColumns = "30% 5% 1fr";
    }
    return;
}

//grid for first page for any screen size
function sweetGrid() {
    page.overflowY = "scroll";

    sideCn.gridTemplateColumns = "1fr";
    sideCn.gridTemplateRows = "2fr 1fr";

    foot.gridTemplateColumns = "1fr";
    foot.gridTemplateRows = "1fr 1fr 1fr";

    sideNone.gridRowStart = "1";
    sideNone.gridRowEnd = "2";
    foot1C.gridRowStart = "2";
    foot1C.gridRowEnd = "3";
    foot2C.gridRowStart = "3";
    foot2C.gridRowEnd = "4";

    foot2.gridTemplateColumns = "1fr 2fr 5fr";
    foot2.gridTemplateRows = "1fr";

    engCol1.gridColumnStart = "2";
    engCol1.gridColumnEnd = "3";
    engCol2.gridColumnStart = "3";
    engCol2.gridColumnEnd = "4";

    head3.gridTemplateColumns = "1fr 1fr 1fr";
    head3.gridTemplateRows = "1fr";

    qCol.gridTemplateColumns = "1fr 1fr";
    qCol.gridTemplateRows = "1fr";

    if (screen.matches) {
        sweetGridP();
    }
    else {
        sweetGridLS();
    }
    return;
}

// grid function screen sweet page=True, full/clear page=False
function gridCall(boolean) {

    for (i = 0; i < logRows.length; i++) {
        logRows[i].style.gridTemplateColumns = "1fr 4fr";
        logRows[i].style.gridTemplateRows = "1fr";
    }

    for (i = 0; i < contRows.length; i++) {
        contRows[i].style.gridTemplateColumns = "1fr 3fr";
        contRows[i].style.gridTemplateRows = "1fr";
    }

    head4.gridTemplateColumns = "1fr";
    head4.gridTemplateRows = "1fr 3fr";

    contCol.gridTemplateColumns = "1fr";
    contCol.gridTemplateRows = "1fr 1fr 1fr";

    foot1.gridTemplateColumns = "1fr 1fr 1fr";
    foot1.gridTemplateRows = "1fr";

    if (boolean) {
        sweetGrid();
    }
    else {
        clearFullGrid();
    }
    return;
}

//display active function sweet/clear/full and screen, sweet=True cle/ful=False
function otherDisplay(boolean) {

    for (i = 0; i < startAni.length; i++) {
        startAni[i].style.display = "none";
    }

    if (screen.matches) {
        itemSup.display = "block";
    }
    else {
        itemSup.display = "none";
    }

    if (boolean) {
        sweetB.display = "none";
        if (screen2.matches || screen.matches) {
            fullB.display = "none";
            clearB.display = "block";
        }
        else {
            fullB.display = "block";
            clearB.display = "none";
        }
    }
    else {
        sweetB.display = "block";
        fullB.display = "none";
        clearB.display = "none";
    }
    return;
}

//default display function page, sweet=True full/clear=False
function defaultDisplay(boolean) {
    if (boolean) {
        menuC.display = "grid";
        header.display = "grid";
        head.display = "grid";
        sideCl.display = "none";
        sideCn.display = "none";
        centralC.display = "none";
        foot.display = "none";
        for (i = 0; i < menuIcons.length; i++) {
            menuIcons[i].style.display = "none";
        }
        menuIcD.display = "none";
        animeB.display = "block";
        for (i = 0; i < bh.length; i++) {
            bh[i].style.display = "none";
        }
        b40.display = "block";
    }
    else {
        menuC.display = "none";
        header.display = "grid";
        head.display = "grid";
        sideCl.display = "grid";
        sideCn.display = "grid";
        centralC.display = "grid";
        foot.display = "grid";
        sideNone.display = "block";
    }
    return;
}

//empty page
function displayNone() {

    page.overflow = "hidden";

    head.display = "none";
    header.display = "none";
    menuC.display = "none";
    sideCl.display = "none";
    centralC.display = "none";
    sideCn.display = "none";
    foot.display = "none";
    animeB.display = "none";
    for (i = 0; i < picture.length; i++) {
        picture[i].style.display = "none";
    }
    for (i = 0; i < menuIcons.length; i++) {
        menuIcons[i].style.display = "none";
    }
    return;
}

//property for all page
function allPage() {
    page.fontFamily = "Cambria, 'Times New Roman', Arial, sans-serif";
    page.overflowX = "hidden";
    head.backgroundColor = "rgb(0, 0, 0, 0)";
    page.margin = "0";
    return;
}

//send/change current page
function downloadPage(boolean) {
    gridCall(boolean);
    defaultDisplay(boolean);
    otherDisplay(boolean);
    property(boolean);
    elementColor(boolean);
    fontSize(boolean);
    fontEffect();
    photoP(boolean);
    imgSetUp(boolean);
    buttonSetUp(boolean);
    return;
}

//main
function onloadF() {
    displayNone();
    let startTest = new Boolean(true);
    startTest = explorer();
    if (startTest) {
        //draw();
        allPage()
        displayNone();
        //animeStart();
        iniScrChg();
        boolean = true;
        downloadPage(boolean);
        bhAnime();
    }
    return;
}



//mode tel head size f() screen
//anime start
//remplace canvas
//diff modele tel...
//menu =
//      animation de transition
//img f() size (fleche -_-#)

//verif et factorise prop (clear/full en cours)
//onresize fonctionne pas
//head overflow his parent header
// fonction chaque enfant size f() parent