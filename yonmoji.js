var newpage="index";
function newhref(){
    var regExp=new RegExp("[/|\\|:|*|?|\"|<|>|\|]","g");
    window.location.href=newpage.replace(regExp,"")+".html";
}
function newquery(){
    var oldhref=window.location.href;
    if ( oldhref.indexOf("?page=")>=0 && oldhref.indexOf("github.io/")>=0 ){
        var regExp=new RegExp("github\.io\/(.*)page\=","g");
        oldhref=oldhref.replace(regExp,"github.io/");
        oldhref=oldhref.substr(oldhref.indexOf("github.io/")+"github.io/".length)
        newpage=decodeURI(oldhref)
        document.forms.entry.page.value=newpage;
        setTimeout(newhref,0);
    }
    else{
        newstyle();
    }
}
function newword(){
    newpage=document.forms.entry.page.value;
    newhref();
}

if( window.addEventListener ){
    window.addEventListener('load',newquery,false);
}
else if( window.attachEvent ){
    window.attachEvent('onload',newquery );
}
else{
    window.onload=newquery;
}

function newstyle(){
    var styledic={
     "yonmoji_‎syllogism":           "大小結",
     "yonmoji_shuhar":              "守破離",
     "yonmoji_johakyu":             "序破急",
     "yonmoji_kishoutenketsu":      "起承転結",
     "yonmoji_kishouhojoketsu":     "起承鋪叙結",
     "yonmoji_kishouhojokaketsu":   "起承鋪叙過結",
     "yonmoji_kishouhojokaketsu":   "起承鋪叙過結",
     "yonmoji_kishouketsu":         "起承結終",
     "yonmoji_shoutententen":       "承転転転転転転転",
     "yonmoji_tentententen":        "転転転転転転転転",
     "yonmoji_kiketsu":             "起結",
     "yonmoji_tsuriketunige":       "釣結逃",
     "yonmoji_kiketsushouten":      "起結承転",
     "yonmoji_ketsushoutentei":     "結承転提",
     "yonmoji_kishoutenketsuyami":  "起承転結闇",
     "yonmoji_PDCA":                "ＰＤＣＡＰＤＣＡＰＤＣＡ",
     "yonmoji_PPPP":                "ＰＰＰＰＰＰＰＰＰＰＰＰ",
     "yonmoji_DDDD":                "ＤＤＤＤＤＤＤＤＤＤＤＤ",
     "yonmoji_ganbaru":             "頑頑頑頑頑頑頑頑頑頑頑頑",
     "yonmoji_asahiruyoru":         "朝昼夜徹明朝昼夜徹明",
     "yonmoji_QVSA":                "ＱＶＳＡＱＶＳＡＱＶＳＡ",
     "yonmoji_shunkashutou":        "春夏秋冬春夏秋冬春夏秋冬",
     "yonmoji_shunbaikashutou":     "春梅夏秋冬春梅夏秋冬春梅夏秋冬",
     "yonmoji_shunbaikaakisametou": "春梅夏秋雨冬春梅夏秋雨冬春梅夏秋雨冬",
     "yonmoji_ame":                 "雨雨雨雨雨雨雨雨",
     "yonmoji_yuki":                "雪雪雪雪雪雪雪雪",
     "yonmoji_kanki":               "乾乾乾乾乾乾乾乾",
     "yonmoji_tozainannboku":       "東西南北中",
     "yonmoji_seishuhakugen":       "青朱白玄",
     "yonmoji_moshimo":             "忍竜武精死",
     "yonmoji_biyori":              "最極凶劣",
     "yonmoji_bunmei":              "独米英仏伊日中韓",
     "yonmoji_decimal":             "１２３４５６７８９",
     "yonmoji_circle":              "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳",
     "yonmoji_ideographic":         "一二三四五六七八九十",
     "yonmoji_roman":               "ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ",
     "yonmoji_lower-alpha":         "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
     "yonmoji_upper-alpha":         "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",
     "yonmoji_iroha-hiragana":      "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす",
     "yonmoji_iroha-katakana":      "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
     "yonmoji_todofuken":           "北青岩城秋形島茨栃群埼千東神潟富石井梨野岐静愛三滋京阪兵奈和鳥根岡広口徳川媛高福佐長熊分宮鹿沖"
    };
    var syllogismStyle=document.createElement('style'); syllogismStyle.type="text/css";
    document.getElementsByTagName('head').item(0).appendChild(syllogismStyle);
    var stylesheet= document.styleSheets[document.styleSheets.length-1];
    for(key in styledic){
        stylesheet.insertRule("."+key+"{  margin-left: 1em;  margin-bottom: 3em;  list-style-type: none;  }",stylesheet.cssRules.length);
        stylesheet.insertRule("."+key+" li{  margin-bottom: 0.5em;  text-indent: -2em;  }",stylesheet.cssRules.length);
        stylesheet.insertRule("."+key+" li:before{  margin-right: 1em;  font-size: large;  }",stylesheet.cssRules.length);
        var data=styledic[key].split(""); var i=1;
        for(char in data){
            stylesheet.insertRule("."+key+"  li:nth-child("+i+"):before{ content: '"+data[char]+"'; }",stylesheet.cssRules.length); i++;
        }
    }
}


/*
# Copyright (c) 2016 ooblog
# License: MIT
# https://github.com/ooblog/LTsv9kantray/blob/master/LICENSE
*/
