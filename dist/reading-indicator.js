/*
    reading indicator

    @Author H'academy
*/
(function($){
    //External source - https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
    const merge = (target, source) => {
        if(source){
            // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
            for (let key of Object.keys(source)) {
                if (source[key] instanceof Object) {
                    Object.assign(source[key], merge(target[key], source[key]));
                }
            }
            // Join `target` and modified `source`
            Object.assign(target || {}, source);
        }

        return target;
    }

    $.fn.indicator = function(options){
        const settings = merge({
            color:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            height:"5px",
            topButton:{
                visible:true,
                background:"black",
                foreground:"white",
                hover:"lightgoldenyellow"
            }
        }, options);

        return this.each(function(){
            $(this).addClass("reading-indicator").css({
                "position":"fixed",
                "top":"0", "left":"0", "right":"0",
                "height":settings.height,
                "box-sizing":"border-box"
            });

            const percentDiv = $("<div>").addClass("percent").css({
                "width":"0%",
                "height":"100%",
                "background":settings.color,
            });

            const getPercent = function(){
                const position = $(document).scrollTop();
                const height = $(document).height() - $(window).height();
                const percent = position / height * 100;
                return percent;
            };
            const calculate = function(){
                const percent = getPercent();
                percentDiv.css("width", percent+"%");
            };

            $(window).scroll(calculate);
            
            $(this).append(percentDiv);

            calculate();

            //generate top button
            if(settings.topButton && settings.topButton.visible === true) {
                const topButton = $("<div>").addClass("top-button").css({
                    "position":"fixed",
                    "bottom":"5%",
                    "right":"5%",
                    "width":"25px",
                    "height":"25px",
                    "border":"1px solid black",
                    "border-radius":"50%",
                    "background":settings.topButton.background,
                    "z-index":"99999",
                    "display":"flex",
                    "justify-content":"center",
                    "align-items":"center",
                    "cursor":"pointer"
                });

                const span = $("<span>").css({
                   "color":settings.topButton.foreground,
                   "font-size":"20px"
                }).html("&#8679;");

                topButton.append(span);

                topButton.mouseenter(function(){
                    span.animate({
                        color:settings.topButton.hover,
                        marginBottom:"5px"
                    });
                });
                topButton.mouseleave(function(){
                    span.animate({
                        color:settings.topButton.foreground,
                        marginBottom:"0px"
                    });
                });
                topButton.click(function(){
                    $(document).scrollTop(0);
                });

                $(this).append(topButton);

                const calculateButton = function(){
                    const percent = getPercent();
                    if(percent > 0){
                        topButton.fadeIn();
                    }
                    else{
                        topButton.fadeOut();
                    }
                };

                $(window).scroll(calculateButton);
                calculateButton();
            }
        });
    }
})(jQuery);