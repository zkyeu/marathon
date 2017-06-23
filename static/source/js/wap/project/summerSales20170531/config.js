 
(function(){
    var oContainer  = document.getElementById("container"),
        oSeajs      = document.getElementById("seajsnode"),
        sPage       = oContainer ? (oContainer.getAttribute("data-init") || "index") : "index",
        src         =  oSeajs ? oSeajs.getAttribute("src") : "20141111",
        version     = src.lastIndexOf("?")>0 ? src.substring(src.lastIndexOf("?")+1) : "20141111";
    seajs.config({
        map:[
            [/^(.*\/project\/.*\.(?:css|js))(?:.*)$/i,"$1?"+version]
        ]
    });
    seajs.use(sPage);
})();