$(document).ready(function() {
//code block
$('pre').each(function() {
	$this = $(this);
	var text = $this.html();
	text = safe_tags_replace(text);
	var splitter = text.split(/\n/);
	text = '';
	for(var s = 0; s < splitter.length-1; s++) {
		if(splitter[s].length > 0) {
			text += '<span>' + splitter[s] + '</span>';
		}else{
			text += '<span><br></span>';
		}
	}
	text = text.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
	$this.before('<div class="code"><div class="copy">Select code</div><div class="numbers"></div><div class="source">'+text+'</div><div class="clear"></div></div>');
	for(var i = 1; i < splitter.length; i++) {
		var height = $this.prev().find('.source span').eq(i-1).height();
		$this.prev().find('.numbers').append('<span style="height: '+height+'px">'+i+'</span>');
	}
	var nwidth = 0;
	if($this.prev().find('.source').height() > 500) {
		nwidth = $this.prev().find('.numbers').width() + 37;
	}else{
		nwidth = $this.prev().find('.numbers').width() + 20;
	}
	var cwidth = $this.prev().width();
	$this.prev().find('.source').width(cwidth - nwidth);
	$this.remove();
});

//fixed link
$('.code').scroll(function() {
	var top = $(this).scrollTop();
	$(this).find('.copy').css('top', top + 5);
});
	
//select code
$('.copy').click(function(e) {
	
	var e , s, r;
	e = this.parentNode.getElementsByClassName('source')[0];
		
	if(window.getSelection) {
		s = window.getSelection();
		r = document.createRange();
		r.selectNodeContents(e);
		s.removeAllRanges();
		s.addRange(r);
			
	}else if(document.selection) {
		r = document.body.createTextRange();
		r.moveToElementText(e);
		r.select();
	}
});

});
//replace html tags
var tagsToReplace = {'&': '&amp;', '<': '&lt;', '>': '&gt;'};
function replaceTag(tag) {
	return tagsToReplace[tag] || tag;
}
function safe_tags_replace(str) {
	return str.replace(/[&<>]/g, replaceTag);
}