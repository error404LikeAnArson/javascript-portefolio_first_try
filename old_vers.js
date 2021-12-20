var screen = window.matchMedia("(max-width: 600px)");
var screen2 = window.matchMedia("(max-width: 1242px) and (min-width: 601px), (max-height: 700px)")
var page = document.getElementById("page").style;
var sideCl = document.getElementById("sideColumn").style;
var head = document.getElementById("head").style;
var centralC = document.getElementById("centralContain").style;
var foot = document.getElementById("foot").style;
var sideCn = document.getElementById("sideContain").style;
var menuC = document.getElementById("classicMenu").style;
var head1 = document.getElementById("head1").style;
var head2 = document.getElementById("head2").style;
var head3 = document.getElementById("head3").style;
var head4 = document.getElementById("head4").style;
var pdfB = document.getElementById("pdfB").style;
var fullB = document.getElementById("fullB").style;
var gitB = document.getElementById("gitB").style;
var itemsC = document.getElementsByClassName("classicItem");
var photo = document.getElementById("photo").style;
var photo2 = document.getElementById("photo2").style;
var gif = document.getElementById("gif").style;
var i;



function sweetPage() {
    page.backgroundColor = "#000";
    page.backgroundImage = "url('coding.jpg')";
    page.backgroundRepeat = "no-repeat";
    page.backgroundSize = "cover";
    page.overflow = "auto";
    page.margin = "0";
    page.color = "white";

    document.getElementById("sweetB").style.display = "none";
    document.getElementById("fullB").style.display = "block";

    head3.textAlign = "center";
    fullB.backgroundColor = "rgb(140, 0, 0, 0.9)";
    pdfB.backgroundColor = "rgb(140, 0, 0, 0.9)";
    gitB.backgroundColor = "rgb(140, 0, 0, 0.9)";
    fullB.border = "rgb(50, 0, 0, 0.7) solid 2px";
    pdfB.border = "rgb(50, 0, 0, 0.7) solid 2px";
    gitB.border = "rgb(50, 0, 0, 0.7) solid 2px";


    document.getElementById("projUl").style.textShadow = "0px 0px 10px #000000";
    //document.getElementById("fomation").style.textShadow = "0px 0px 10px #000000";
    //document.getElementById("exp").style.textShadow = "0px 0px 10px #000000";
    page.overflowY = "scroll";


    let hobB = document.getElementsByClassName("hobB");
    let hobW = document.getElementsByClassName("hobW");

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

    document.getElementById("timelineImgTopW").style.height = "inherit";
    document.getElementById("timelineImgBottomW").style.height = "140%";

    console.log(document.getElementById("timelineImgTopW"));

    if (screen.matches) {
        page.gridTemplateColumns = "1fr";
        page.gridTemplateRows = "1fr 2fr 2fr";

        menuC.gridColumnStart = "1";
        menuC.gridColumnEnd = "2";
        menuC.gridRowStart = "1";
        menuC.gridRowEnd = "2";

        menuC.display = "grid";
        menuC.position = "fixed";
        menuC.backgroundColor = "rgb(93, 93, 93, 0.700)";
        menuC.gridTemplateColumns = "1fr 1fr 1fr 1fr"
        menuC.textAlign = "center";
        menuC.fontWeight = "bold";
        menuC.height = "60px";
        document.getElementById("FandEP").innerHTML = "Formations et Exp Pro";

        head.gridColumnStart = "1";
        head.gridColumnEnd = "2";
        head.gridRowStart = "2";
        head.gridRowEnd = "3";

        head.marginTop = "60px";
        head.gridTemplateRows = "2fr 3fr 1fr";
        head.borderRadius= "0 0 10px 10px"

        sideCl.gridColumnStart = "1";
        sideCl.gridColumnEnd = "2";
        sideCl.gridRowStart = "3";
        sideCl.gridRowEnd = "4";

        centralC.gridColumnStart = "1";
        centralC.gridColumnEnd = "2";
        centralC.gridRowStart = "3";
        centralC.gridRowEnd = "4";
        centralC.display = "none";

        sideCn.gridColumnStart = "1";
        sideCn.gridColumnEnd = "2";
        sideCn.gridRowStart = "3";
        sideCn.gridRowEnd = "4";
        sideCn.display = "none";

        foot.gridColumnStart = "1";
        foot.gridColumnEnd = "2";
        foot.gridRowStart = "3";
        foot.gridRowEnd = "4";
        foot.display = "none";
        foot.backgroundColor = "rgb(0, 0, 0, 0)";

    }
    else {
        //Change GRID, alignement
        document.getElementById("side2").style.fontSize = "120%";
        document.getElementById("side1").style.fontSize = "120%";
        document.getElementById("projUl").style.fontSize = "120%";
        document.getElementById("formation").style.fontSize = "120%";
        document.getElementById("exp").style.fontSize = "120%";
        document.getElementById("engCol").style.fontSize = "120%";

        page.gridTemplateColumns = "3fr 1fr";
        page.gridTemplateRows = "1fr 5fr";

        menuC.display = "inline-block";
        menuC.gridColumnStart = "1";
        menuC.gridColumnEnd = "2";
        menuC.gridRowStart = "1";
        menuC.gridRowEnd = "2";

        menuC.backgroundColor = "rgb(93, 93, 93, 0.700)";
        menuC.display = "grid";
        menuC.gridTemplateColumns = "1fr 1fr 1fr 1fr"
        menuC.textAlign = "center";
        menuC.fontWeight = "bold";
        menuC.height = "60px";

        head.gridColumnStart = "2";
        head.gridColumnEnd = "3";
        head.gridRowStart = "1";
        head.gridRowEnd = "3";

        head.backgroundColor = "rgb(92, 0, 0, 0.9)";
        head.gridTemplateColumns = "1fr";
        head.gridTemplateRows = "2fr 1fr 2fr 1fr"
        head.borderRadius = "0 0 0 0"
        head.margin = "0";
        head.padding = "5%";

        sideCl.display = "block";
        sideCl.gridColumnStart = "1";
        sideCl.gridColumnEnd = "2";
        sideCl.gridRowStart = "2";
        sideCl.gridRowEnd = "3";
        document.getElementById("side3").style.display = "none";

        sideCl.backgroundColor = "rgb(10, 10, 10, 0.55)";
        sideCl.borderRadius = "20px";
        sideCl.padding = "3%";

        sideCl.marginLeft = "7%";
        sideCl.marginRight = "7%";
        sideCl.marginTop = "5%";
        sideCl.marginBottom = "5%";

        centralC.display = "none";
        centralC.gridColumnStart = "1";
        centralC.gridColumnEnd = "2";
        centralC.gridRowStart = "2";
        centralC.gridRowEnd = "3";

        centralC.backgroundColor = "rgb(10, 10, 10, 0.55)";
        centralC.borderRadius = "20px";
        centralC.padding = "3%";

        centralC.marginLeft = "7%";
        centralC.marginRight = "7%";
        centralC.marginTop = "5%";
        centralC.marginBottom = "5%";

        foot.display = "none";
        foot.gridColumnStart = "1";
        foot.gridColumnEnd = "2";
        foot.gridRowStart = "2";
        foot.gridRowEnd = "3";

        foot.backgroundColor = "rgb(10, 10, 10, 0.55)";
        foot.borderRadius = "20px";
        foot.padding = "3%";

        foot.marginLeft = "7%";
        foot.marginRight = "7%";
        foot.marginTop = "5%";
        foot.marginBottom = "5%";

        foot.display = "grid";
        foot.gridTemplateRows = "1fr 1fr 1fr";
        document.getElementById("foot1").style.gridRowStart = "2";
        document.getElementById("foot1").style.gridRowEnd = "3";
        document.getElementById("foot2").style.gridRowStart = "3";
        document.getElementById("foot2").style.gridRowEnd = "4";
        foot.display = "none";

        sideCn.display = "none";
        sideCn.gridColumnStart = "1";
        sideCn.gridColumnEnd = "2";
        sideCn.gridRowStart = "2";
        sideCn.gridRowEnd = "3";

        sideCn.color = "white";
        sideCn.backgroundColor = "rgb(10, 10, 10, 0.55)";
        sideCn.borderRadius = "20px";
        sideCn.padding = "3%";
        sideCn.gridTemplateRows = "1fr 1fr";
        sideCn.height = "auto";

        sideCn.marginLeft = "7%";
        sideCn.marginRight = "7%";
        sideCn.marginTop = "5%";
        sideCn.marginBottom = "5%";

        head1.gridRowStart = "1";
        head1.gridRowEnd = "2";
        head2.gridRowStart = "2";
        head2.gridRowEnd = "3";
        head3.gridRowStart = "4";
        head3.gridRowEnd = "5";
        head4.gridRowStart = "3";
        head4.gridRowEnd = "4";

        head3.display = "grid";
        head3.gridTemplateColumns = "1fr 1fr 1fr";
        fullB.marginLeft = "20%";

        document.getElementById("contain1").style.marginBottom = "0";
        document.getElementById("contain2").style.marginTop = "0";

        photo.marginRight = "auto";
        photo2.marginRight = "auto";
        photo.marginLeft = "auto";
        photo2.marginLeft = "auto";
        photo.right = "7%";
        photo2.right = "7%";
        photo.maxWidth = "10%";
        photo2.maxWidth = "10%";
        gif.marginRight = "auto";
        gif.marginLeft = "auto";


    }
    return;
}

//simple hover
function menuHover(index) {
    itemsC[index].style.backgroundColor = "rgb(93, 93, 93, 0.6)";
    itemsC[index].style.cursor = "pointer";

    if(screen.matches){
        itemsC[index].style.borderRadius = "0 0 20px 20px";
    }
    return;
}

function menuHoverEnd(index) {
    itemsC[index].style.backgroundColor = "rgb(93, 93, 93, 0.000)";
    return;
}

//change "section" in function of clicks

function menuClick(index) {
    switch (index) {
        case 2:
            sideCl.display = "none";
            centralC.display = "block";
            sideCn.display = "none";
            foot.display = "none";
            break;
        case 3:
            sideCl.display = "none";
            centralC.display = "none";
            sideCn.display = "block";
            foot.display = "none";
            break;
        case 4:
            sideCl.display = "none";
            centralC.display = "none";
            sideCn.display = "none";
            foot.display = "block";

            foot.display = "grid";
            foot.gridTemplateRows = "1fr 1fr 1fr";
            document.getElementById("foot1").style.gridRowStart = "2";
            document.getElementById("foot1").style.gridRowEnd = "3";
            document.getElementById("foot2").style.gridRowStart = "3";
            document.getElementById("foot2").style.gridRowEnd = "4";

            document.getElementById("side3").style.display = "flex";

            break;
        default:
            sideCl.display = "block";
            centralC.display = "none";
            sideCn.display = "none";
            foot.display = "none";
            document.getElementById("side3").style.display = "none";
    }
    return;
}

function gitPage() {
    window.location='https://github.com/error404LikeAnArson?tab=repositories';
}

function screenChange() {
    fullPage();
    sweetPage();
    return;
}

//return the first page
function fullPage() {
    window.location.reload();
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


//change button size in function font family
function fontChange() {
    let pageFont = document.getElementById("sweetB").style.fontFamily;
    console.log(pageFont);
    return;
}

//change text size in function width-height
function alignText() {                                          
    let x = window.screen.availWidth;
    let y = window.screen.availHeight;
    let contacts = document.getElementsByClassName("contP");
    console.log(contacts);
    console.log(x);
    console.log(y);

    if (screen.matches) {

    }
    else {
        if (screen2.matches) {

        }
        else {
            if ((x / y) < (1700 / 850)) {
                for (i = 0; i < contacts.length; i++) {
                    contacts.item(i).style.fontSize = "2.5vh";
                }
            }
            else {
                for (i = 0; i < contacts.length; i++) {
                    contacts.item(i).style.fontSize = "1.5vw";
                }
            }
        }

    }



    return;
}

 //change img size in function height
function alignImg() {                                      
    let y = screen.height;

    return;
}

//gif or img function screen
function gifOrImg() {
    if(screen.matches){
        photo.display = "none";
        photo2.display = "none";
        gif.display = "block";
    }
    return;
}

function gifOrImgEnd() {
    if(screen.matches){
        photo.display = "block";
        photo2.display = "none";
        gif.display = "none";
    }
    return;
}

function explorer() {
    if (navigator.userAgent.indexOf("Trident") > -1) {
        page.display = "none";
        window.alert("Internet Explorer ? Really ?  ... Nope!");
    }
    return;
}

function onloadF() {                                        //all start function
    explorer();
    fontChange();
    alignText();
    alignImg();
    return;
}