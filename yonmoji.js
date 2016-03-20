function newhref(){
    var href=window.location.href;
    if ( href.indexOf("?page=")>=0 && href.indexOf("github.io/")>=0 ){
        var regExp=new RegExp("github\.io\/(.*)page\=","g");
        href=href.replace(regExp,"github.io/");
        href=href+".html";
        window.location.href=href
    }
}

if( window.addEventListener ){
    window.addEventListener('load',newhref,false);
}
else if( window.attachEvent ){
    window.attachEvent('onload',newhref );
}
else{
    window.onload=newhref;
}

function newword(){
    var word=document.forms.entry.page.value;
    var regExp=new RegExp("[/|\\|:|*|?|\"|<|>|\|]","g");
    word=word.replace(regExp,"");
    window.location.href=word+".html"
}


//# Copyright (c) 2016 ooblog
//# License: MIT
//# https://github.com/ooblog/LTsv9kantray/blob/master/LICENSE
