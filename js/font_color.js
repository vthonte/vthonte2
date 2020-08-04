var text= $('#font_color').addClass('text-red');

$('.red').unbind('click').click(function(e){
e.preventDefault();
text.attr('style','color:red');
});

$('.green').unbind('click').click(function(e){
e.preventDefault();
text.attr('style','color:blue');
});
