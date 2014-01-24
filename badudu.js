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
    return false;
}
function removeThat(){
    document.getElementById('ldModal').remove();
    return false;
}
function DocDblClickHandler(event) {
    var isIE = document.all?true:false;
    var pos_x; var pos_y;
    if (!isIE) {
        pos_x = event.pageX;
        pos_y = event.pageY;
    }
    if (isIE) {
        pos_x = event.clientX + document.documentElement.scrollLeft;
        pos_y = event.clientY + document.documentElement.scrollTop;
    }
    //alert(event.srcElement.nodeName);
    ndNm = event.srcElement.nodeName;
    if(ndNm === 'INPUT' || ndNm === 'BUTTON' || ndNm === 'TEXTAREA'){
        return;
    }
    //pos_x = event.offsetX?(event.offsetX):event.pageX;
    //pos_y = event.offsetY?(event.offsetY):event.pageY;
    var txt = '';
    if (window.getSelection) {
        txt = window.getSelection();
    } else if (document.getSelection) {
        txt = document.getSelection();
    } else if (document.selection) {
        txt = document.selection.createRange().text;
    }
    var text = txt.toString();
    var regex = /\s+/gi;
    if (text.length > 0) {
        var cnWrd = text.trim().replace(regex,' ').split(' ').length;
        if(cnWrd < 2){
            loadData(text.replace(/\s/g, ""), pos_x, pos_y);

            var ldr = '<div id="circularG"><div id="circularG_1" class="circularG"></div><div id="circularG_2" class="circularG"></div><div id="circularG_3" class="circularG"></div><div id="circularG_4" class="circularG"></div><div id="circularG_5" class="circularG"></div><div id="circularG_6" class="circularG"></div><div id="circularG_7" class="circularG"></div><div id="circularG_8" class="circularG"></div></div>'
            document.body.innerHTML +='<div id="ldModal" style="position:fixed;z-index:10; top: '+pos_y+'; left: '+pos_x+'; background:rgba(0,0,0,0.1); color: #fff; margin: 0px; pading: 50px;">'+ldr+'</div>';

        }
    }
}

(function() {
    var Lib = {
        ajax: {
            xhr: function() {
                var instance = new XMLHttpRequest();
                return instance;
            },
            getJSON: function(options, callback) {
                var xhttp = this.xhr();
                options.url = options.url || location.href;
                options.data = options.data || null;
                callback = callback ||
                function() {};
                options.type = options.type || 'json';
                var url = options.url;
                if (options.type == 'jsonp') {
                    window.jsonCallback = callback;
                    var $url = url.replace('callback=?', 'callback=jsonCallback');
                    var script = document.createElement('script');
                    script.src = $url;
                    document.body.appendChild(script);
                }
                xhttp.open('GET', options.url, true);
                xhttp.send(options.data);
                xhttp.onreadystatechange = function() {
                    if (xhttp.status == 200 && xhttp.readyState == 4) {
                        callback(xhttp.responseText);
                    }
                };
            }
        }
    };

    window.Lib = Lib;
})()
function loadData(txt,pos_x,pos_y){Lib.ajax.getJSON({url:"http://geni.lantip.net:8183/api/"+txt,type:"jsonp"},function(jsondata){var obj=eval("("+jsondata+")");var def="<ol>";for(var key in obj.kateglo.definition){var newObj=obj.kateglo.definition[key];def+="<li>"+newObj.def_text+"</li>"}def+="</ol>";var res="<div>"+"<h3>"+txt+' <small style="margin-left: 10px; border-left: 1px solid #ccc; padding-left: 10px; font-weight: 100; color: #666">'+obj.kateglo.lex_class+"</small></h3>"+def+"<p><small>sumber: "+obj.kateglo.ref_source+"</small></p>"+"</div>";document.getElementById("ldModal").remove();document.body.innerHTML+='<div id="bdModal" style="position:fixed;width:400px;height:300px;z-index:999999999; font-family: sans-serif; top: 100; left: 100; background:rgba(0,0,0,0.6); color: #fff; margin: 0px;"><a href="javascript:removeThis()" style="color:#fff; padding: 10px; background-color: tomato; text-decoration: none; font-family: sans-serif">close</a><div style="padding: 20px; background-color: #fff; height: 250px; overflow-y: auto; color: #000">'+res+"</div></div>"})}