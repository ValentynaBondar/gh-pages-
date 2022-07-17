var time=2,cc=1;$(window).scroll((function(){$("#counter").each((function(){$(this).offset().top<$(window).scrollTop()+300&&cc<2&&($(".advantages__item").addClass("viz"),$("h3").each((function(){var t=1,c=$(this).data("num"),n=1e3*time/c,a=$(this),e=setInterval((function(){t<=c?a.html(t):(cc+=2,clearInterval(e)),t++}),n)})))}))}));
//# sourceMappingURL=index.793bcdd6.js.map
