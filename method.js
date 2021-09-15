/* 1 hiện hình nền mặc định theo array 0,1,2(dot)
2 pre và next
pre : lùi đi 1  , next tiến lên 1 (+ hoặc trừ giá tri index hiện tai)
khi ấn button pre tại giá trị nhỏ nhất (index = 0) thì set index = giá trị lớn nhất (index.length) - 1 vì arr
khi index = 0 , set index = 3 (-1 , vì arr) , khi index = 3 set index = 0 (vi trí ban đầu)
nếu ấn button tại giá trị lớn nhất (index.length) thì set index = min 
Còn lại khi bấm thì lấy giá trị index tại điểm đó
nút dot : có 3 giá trị index , mỗi giá trị là 1 hình

*** nhớ chạy vòng lặp ẩn 3 div và thẻ dot để khi tại index đó thì active hoặc hiện

*/



const myJSON = {
        "slide1": {
            "slideNum": {"attri":"number", "content":"1/4"},
            "slideText": {"attri":"text", "content":"Yasou"},
            "slideImg": {"attri":"src" ,"content":"image/ys.jpg"}
        },
        "slide2": {
            "slideNum": {"attri":"number", "content":"2/4"},
            "slideText": {"attri":"text", "content":"Xinzhao"},
            "slideImg": {"attri":"src" ,"content":"image/xz.jpg"}
        },
        "slide3": {
            "slideNum": {"attri":"number", "content":"3/4"},
            "slideText": {"attri":"text", "content":"Xayah"},
            "slideImg": {"attri":"src" ,"content":"image/xaya.jpg"}
        },
        "slide4": {
            "slideNum": {"attri":"number", "content":"4/4"},
            "slideText": {"attri":"text", "content":"Shen"},
            "slideImg": {"attri":"src" ,"content":"image/shen.jpg"}
        } ,
        "slide5": {
            "slideNum": {"attri":"number", "content":"2/4"},
            "slideText": {"attri":"text", "content":"Test"},
            "slideImg": {"attri":"src" ,"content":"image/xz.jpg"}
        },
}

function createSlides() {
    var i = 0;
    for (const key of Object.keys(myJSON)) {

        var Slides = document.createElement("div");
        var slidesNum = document.createElement("div");
        var slidesText = document.createElement("div");
        var slidesImg = document.createElement("IMG");
        var slideDot = document.createElement('span');
        Slides.className = "Slides";
        slideDot.className = "dot";
       
        var keyNum = myJSON[key].slideNum;
        var keyText = myJSON[key].slideText;
        var keyImg = myJSON[key].slideImg
            slidesNum.className = keyNum.attri;
            slidesNum.innerHTML = keyNum.content;
            slidesText.innerHTML = keyText.content;
            slidesText.className = keyText.attri
            slidesImg.setAttribute(keyImg.attri, keyImg.content);
            slideDot.setAttribute('onclick',`currentSlide(${i})`)


            document.getElementById("divcontainer").append(Slides);
            Slides.append(slidesNum,slidesImg,slidesText);
            document.getElementById('divDot').append(slideDot);
            i++;
            //console.log(i);
            //document.getElementsByClassName("Slides").append(slidesNum,slidesImg,slidesText);
        }


/* xử lí vòng lặp in ra các tag của slide , và chấm dot tương ứng 1 length

    var Slides = document.createElement("div");
    var slidesNum = document.createElement("div");
    var slidesText = document.createElement("div");
    var slidesImg = document.createElement("IMG");
    Slides.className = "Slides";


 
        vòng lặp in các value cảu json theo key

    slidesNum.className = myJSON.mySlides.slide1.slideNum.attri;
    slidesNum.innerHTML = myJSON.mySlides.slide1.slideNum.content;
    slidesText.innerHTML = myJSON.mySlides.slide1.slideText.content;
    slidesText.className = myJSON.mySlides.slide1.slideText.attri;
    slidesImg.setAttribute(myJSON.mySlides.slide1.slideImg.attri, myJSON.mySlides.slide1.slideImg.content);


    document.getElementById("divcontainer").append(Slides,slidesNum,slidesImg,slidesText);
    */


}
createSlides();



var index = 0;
slideShow(index);

function slideShow(value) {
    var slides = document.getElementsByClassName('Slides');
    var i ;
    var dots = document.getElementsByClassName('dot');
    if (value===slides.length)
    {
        index = 0;

    }
    if(value<0)
    {
        index = slides.length -1 ;
    }
    for (i=0;i<slides.length;i++)
    {
        slides[i].style.display = "none";
    }
    for(i=0;i<dots.length;i++)
    {

        dots[i].className = dots[i].className.replace("active","");

    }
   
    slides[index].style.display = "block";
    dots[index].className = dots[index].className + " active";
}

function currentSlide(value) {
    slideShow(index=value);
}

function nextSlide(value) {
    slideShow(index= index+value);
}



/*

    Tạo ra nút button 
    Khi nhấn tạo ra 1 json bao gồm các trường
    {
        <div class="Slides"
            <div class="number">1/4</div>
            <img  src="image/ys.jpg" alt="yasou">
            <div class="text">Yasou</div>
        </div>
    }


*/
/*
    vòng lặp in ra các thẻ và infor của nó
    lưu theo json các infor 
    vòng lặp thứ 2 gán infor , từng thẻ gán theo index , slides + index (slides0,slides1)

    Vòng lặp 1 tạo ra các thẻ cần bao gồm (3 thẻ div, 1 img)
        gồm các biến nhận giá trị create + index (slides0,slides1...) => giải quyết xong tạo thẻ cần
    Tạo 1 json các infor {length,classSlide : Slides , classNum : number}


*/


function loadJson()
{

}