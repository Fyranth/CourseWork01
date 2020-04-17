var ImgNumber = 0;

function openslider (catalogName) {
    //Делаем слайдер видимым
    var slider = document.getElementById('slider');
    var slstyle = slider.style;
    slstyle.display = 'flex';
    //Включаем показ тумана войны
    var slider_parent = slider.parentElement;
    var ptstyle = slider_parent.style;
    ptstyle.display = 'flex';
    //очистим слайдер
    var sliderDivs = slider.getElementsByClassName('slider_img_box');
    var SDLenght = sliderDivs.length;
    if( SDLenght > 0 ) {
        var t =0; 
        while (t<sliderDivs.length) {
            slider.removeChild(sliderDivs[t]);
        }
    }
    //загружаем в него картинки
    var id_coll = 'album_prewiew_'+catalogName;
    var album_div = document.getElementById(id_coll).getElementsByTagName('img');
    var i = 0;
    while(i < album_div.length) {
        var newDiv = document.createElement('div');
        newDiv.className = 'slider_img_box';
        
        var newImg = document.createElement('img');
        newImg.src = album_div[i].src;
        newImg.className = 'slider_img';
        newDiv.appendChild(newImg);
        slider.appendChild(newDiv);

        if(i > 0) {
            var divstyle = newDiv.style;
            divstyle.display='none';  
        }
        i++;
    }
}

function closeslider() {
    //Делаем слайдер невидимым
    var slider = document.getElementById('slider');
    var slstyle = slider.style;
    slstyle.display = 'none'; 
    //Выключаем показ тумана войны
    var slider_parent = slider.parentElement;
    var ptstyle = slider_parent.style;
    ptstyle.display = 'none';
    ImgNumber=0;  
}

function moveImg(step) {
    var slider = document.getElementById('slider').getElementsByTagName('img');
    var i=0;
    var slength = slider.length;
    var styleimg = slider[ImgNumber].parentElement.style;
    styleimg.display = 'none';
    var newImgNumber = ImgNumber+step;
    if(newImgNumber>(slength-1)){
        newImgNumber = 0;
    }
    if(newImgNumber<0){
        newImgNumber = slength-1; 
    }
    styleimg = slider[newImgNumber].parentElement.style;
    styleimg.display = 'flex';
    ImgNumber = newImgNumber;

}