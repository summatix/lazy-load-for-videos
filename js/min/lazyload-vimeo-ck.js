var $llv=jQuery.noConflict(),classPreviewVimeo="preview-vimeo",classPreviewVimeoDot="."+classPreviewVimeo,classBranding="lazyload-info-icon",classBrandingDot="."+classBranding,videoratio=.5625,$llv_o,setOptionsVimeo=function(e){$llv_o=$llv.extend({buttonstyle:"",playercolour:"",videoseo:!1,responsive:!0},e)};$llv(document).ready(function(){function e(){v(),t(),o()}var l=function(){return'<a class="'+classBranding+'" href="http://kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>'},t=function(){if($llv_o.displayBranding!==!1){var e=$llv(classPreviewVimeoDot),t=$llv(l());e.before(t)}},o=function(){$llv(classPreviewVimeoDot).on("click",function(){var e=p(this);n(this),i(this);var l="";$llv_o.playercolour!==l&&($llv_o.playercolour=r($llv_o.playercolour),l="&color="+$llv_o.playercolour),$llv(this).html('<iframe src="'+a(e)+"?autoplay=1"+l+'" style="height:'+parseInt($llv("#"+e).css("height"))+'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>'),"function"==typeof u.resize&&$llv_o.responsive===!0&&u.resize()})},n=function(e){$llv(e).removeClass(classPreviewVimeo)},i=function(e){$llv(e).prev(classBrandingDot).remove()},a=function(e){return"//player.vimeo.com/video/"+e},r=function(e){var l=e.toString().replace(/[.#]/g,"");return l},v=function(){$llv(classPreviewVimeoDot).each(function(){var e=p(this);c(e)})},c=function(e){var l=d(e)+".json?callback=showThumb",t=document.createElement("script");t.type="text/javascript",t.src=l;var o="";$llv_o.videoseo===!0&&(o=' itemprop="name"'),$llv("#"+e).prepend(t).prepend('<div style="height:'+parseInt($llv("#"+e).css("height"))+"px;width:"+parseInt($llv("#"+e).css("width"))+'px;" class="lazy-load-vimeo-div"><span class="titletext vimeo"'+o+"></span></div>").addClass($llv_o.buttonstyle),s(e)},s=function(e){$llv_o.videoseo===!0&&$llv.getJSON(d(e)+"?callback=?",{format:"json"},function(l){$llv("#"+e).append('<meta itemprop="contentLocation" content="'+l[0].url+'" />'),$llv("#"+e).append('<meta itemprop="embedUrl" content="'+a(e)+'" />'),$llv("#"+e).append('<meta itemprop="thumbnail" content="'+l[0].thumbnail_large+'" />'),$llv("#"+e).append('<meta itemprop="datePublished" content="'+l[0].upload_date+'" />'),$llv("#"+e).append('<meta itemprop="duration" content="'+l[0].duration+'" />'),$llv("#"+e).append('<meta itemprop="aggregateRating" content="'+l.data.rating+'" />')})},d=function(e){return"//vimeo.com/api/v2/video/"+e+".json"},p=function(e){var l=$llv(e).attr("id");return l};$llv(document).ready(e()).ajaxStop(function(){e()}),$llv.fn.bindFirst=function(e,l){var t=$llv(this);t.unbind(e,l),t.bind(e,l);var o=$llv._data(t[0]).events,n=o[e];n.unshift(n.pop()),o[e]=n};var u={config:{container:$llv(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){u.config.container.length>0&&($llv(window).on("resize",u.resize),$llv(window).bindFirst("load",function(){u.resize()}))},resize:function(){$llv(u.config.selector,u.config.container).each(function(){var e=$llv(this),l=e.parent().width(),t=Math.round(l*videoratio);e.attr("height",t),e.attr("width",l),e.css({height:t,width:l})})}};"function"==typeof u.init&&$llv_o.responsive===!0&&u.init()});