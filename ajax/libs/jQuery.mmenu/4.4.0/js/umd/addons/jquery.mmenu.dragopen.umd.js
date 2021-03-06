(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu dragOpen addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function t(t){return"boolean"==typeof t&&(t={open:t}),"object"!=typeof t&&(t={}),t=e.extend(!0,{},e[d].defaults[f],t)}function o(e){return e}function n(){c=!0,s=e[d]._c,i=e[d]._d,r=e[d]._e,s.add("dragging"),p=e[d].glbl}function a(e,t,o){return t>e&&(e=t),e>o&&(e=o),e}var s,i,r,p,d="mmenu",f="dragOpen",c=!1;e[d].prototype["_init_"+f]=function(){if("function"==typeof Hammer&&this.opts.offCanvas&&!this.vars[f+"_added"]){this.vars[f+"_added"]=!0,c||n(),this.opts[f]=t(this.opts[f]),this.conf[f]=o(this.conf[f]);var i=this,r=this.opts[f],h=this.conf[f];if(r.open){if(Hammer.VERSION<2)return e[d].deprecated("Older version of the Hammer library","version 2 or newer"),!1;var m={},l=0,u=!1,v=!1,g=0,_=0;switch(this.opts.offCanvas.position){case"left":case"right":m.events="panleft panright",m.typeLower="x",m.typeUpper="X",v="width";break;case"top":case"bottom":m.events="panup pandown",m.typeLower="y",m.typeUpper="Y",v="height"}switch(this.opts.offCanvas.position){case"left":case"top":m.negative=!1;break;case"right":case"bottom":m.negative=!0}switch(this.opts.offCanvas.position){case"left":m.open_dir="right",m.close_dir="left";break;case"right":m.open_dir="left",m.close_dir="right";break;case"top":m.open_dir="down",m.close_dir="up";break;case"bottom":m.open_dir="up",m.close_dir="down"}var w=this.__valueOrFn(r.pageNode,this.$menu,p.$page);"string"==typeof w&&(w=e(w));var b=p.$page.find("."+s.mm("fixed-top")+", ."+s.mm("fixed-bottom")),y=p.$page;switch(this.opts.offCanvas.zposition){case"back":y=y.add(b);break;case"front":y=this.$menu;break;case"next":y=y.add(this.$menu).add(b)}var C=new Hammer(w[0]);C.on("panstart",function(e){var t=e.center[m.typeLower];switch(i.opts.offCanvas.position){case"right":case"bottom":t>=p.$wndw[v]()-r.maxStartPos&&(l=1);break;default:t<=r.maxStartPos&&(l=1)}}).on(m.events+" panend",function(e){l>0&&e.preventDefault()}).on(m.events,function(e){var t=m.negative?-e["delta"+m.typeUpper]:e["delta"+m.typeUpper];if(u=t>=g?m.open_dir:m.close_dir,g=t,g>r.threshold&&1==l){if(p.$html.hasClass(s.opened))return;l=2,i._openSetup(),p.$html.addClass(s.dragging),_=a(p.$wndw[v]()*h[v].perc,h[v].min,h[v].max)}2==l&&y.css(i.opts.offCanvas.position,a(g,10,_)-("front"==i.opts.offCanvas.zposition?_:0))}).on("panend",function(){2==l&&(p.$html.removeClass(s.dragging),y.css(i.opts.offCanvas.position,""),i[u==m.open_dir?"_openFinish":"close"]()),l=0})}}},e[d].addons.push(f),e[d].defaults[f]={open:!1,maxStartPos:100,threshold:50},e[d].configuration[f]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}}}(jQuery);
}));