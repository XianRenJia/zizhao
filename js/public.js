 window.onload = function () {
        window.onresize = function () {
            getRem(960, 100);
        }
        function getRem(pwidth, prem) {
            var html = document.getElementsByTagName("html")[0];
            var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
            if(oWidth>960){
            	html.style.fontSize = 960 / pwidth*prem + "px";
            }else{
            	html.style.fontSize = oWidth / pwidth*prem + "px";
            }
        }
        /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
    为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
        getRem(960, 100);
}
