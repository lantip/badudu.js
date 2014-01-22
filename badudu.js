// badudu.js v1.0.0 | (cl) 2014 @lantip - ArdWort

document.ondblclick = DocDblClickHandler;
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
function removeThis(){
    document.getElementById('bdModal').remove();
}
function removeThat(){
    document.getElementById('ldModal').remove();
}
function DocDblClickHandler(event) {
    pos_x = event.offsetX?(event.offsetX):event.pageX;
    pos_y = event.offsetY?(event.offsetY):event.pageY;
    var txt = '';
    if (window.getSelection) {
        txt = window.getSelection();
    } else if (document.getSelection) {
        txt = document.getSelection();
    } else if (document.selection) {
        txt = document.selection.createRange().text;
    }
    loadData(txt.toString().replace(/\s/g, ""), pos_x, pos_y);

    var ldr = '<div id="circularG"><div id="circularG_1" class="circularG"></div><div id="circularG_2" class="circularG"></div><div id="circularG_3" class="circularG"></div><div id="circularG_4" class="circularG"></div><div id="circularG_5" class="circularG"></div><div id="circularG_6" class="circularG"></div><div id="circularG_7" class="circularG"></div><div id="circularG_8" class="circularG"></div></div>'
    document.body.innerHTML +='<div id="ldModal" style="position:fixed;z-index:10; top: '+pos_y+'; left: '+pos_x+'; background:rgba(0,0,0,0.1); color: #fff; margin: 0px; pading: 50px;">'+ldr+'</div>';
}

function loadData(txt,pos_x,pos_y){Lib.ajax.getJSON({url:"http://geni.lantip.net:8183/api/"+txt,type:"jsonp"},function(jsondata){var obj=eval("("+jsondata+")");var def="<ol>";for(var key in obj.kateglo.definition){var newObj=obj.kateglo.definition[key];def+="<li>"+newObj.def_text+"</li>"}def+="</ol>";var res="<div>"+"<h3>"+txt+' <small style="margin-left: 10px; border-left: 1px solid #ccc; padding-left: 10px; font-weight: 100; color: #666">'+obj.kateglo.lex_class+"</small></h3>"+def+"<p><small>sumber: "+obj.kateglo.ref_source+"</small></p>"+"</div>";document.getElementById("ldModal").remove();document.body.innerHTML+='<div id="bdModal" style="position:fixed;width:400px;height:300px;z-index:100; font-family: sans-serif; top: '+pos_y+"; left: "+pos_x+'; background:rgba(0,0,0,0.6); color: #fff; margin: 0px;"><a href="#" onclick="removeThis()" style="color:#fff; padding: 10px; background-color: tomato; text-decoration: none; font-family: sans-serif">close</a><div style="padding: 20px; background-color: #fff; height: 250px; overflow-y: auto; color: #000">'+res+"</div></div>"})}(function(){var e={ajax:{xhr:function(){var e=new XMLHttpRequest;return e},getJSON:function(e,t){var n=this.xhr();e.url=e.url||location.href;e.data=e.data||null;t=t||function(){};e.type=e.type||"json";var r=e.url;if(e.type=="jsonp"){window.jsonCallback=t;var i=r.replace("callback=?","callback=jsonCallback");var s=document.createElement("script");s.src=i;document.body.appendChild(s)}n.open("GET",e.url,true);n.send(e.data);n.onreadystatechange=function(){if(n.status==200&&n.readyState==4){t(n.responseText)}}}}};window.Lib=e})()