/*
	slidebutton - 1.0.0
	https://github.com/jquery-element/slidebutton
*/

$.element( {
	name: "slidebutton",
	htmlReplace:
		'<div class="slidebutton">'+
			'<div class="slidebutton-track"></div>'+
			'<span class="slidebutton-thumb"></span>'+
		'</div>'
	,
	css: '\
		.slidebutton {\
			display: inline-block;\
			position: relative;\
			min-width: 20px;\
			min-height: 10px;\
			max-height: 20px;\
			cursor: pointer;\
			-webkit-touch-callout: none;\
			-webkit-user-select: none;\
			   -moz-user-select: none;\
			    -ms-user-select: none;\
			        user-select: none;\
		}\
		.slidebutton-track {\
			overflow: hidden;\
			position: relative;\
			width: 100%;\
			background-color: rgba( 0, 0, 0, .33 );\
		}\
		.slidebutton-track:before {\
			content: "";\
			left: 0;\
			width: 7px;\
			background-color: #f33;\
		}\
		.slidebutton-track,\
		.slidebutton-track:before {\
			height: 100%;\
			border-radius: 10px;\
		}\
		.slidebutton-active .slidebutton-track:before {\
			width: 100%;\
		}\
		.slidebutton-thumb {\
			display: inline-block;\
			height: 100%;\
			left: -1px;\
			border-radius: 50%;\
			background-color: #fff;\
		}\
		.slidebutton-track,\
		.slidebutton-thumb {\
			top: 0;\
		}\
		.slidebutton-track:before,\
		.slidebutton-thumb {\
			position: absolute;\
			transition: all .3s;\
		}\
	',
	init: function() {
		var
			jqElement = this.jqElement,
			jqThumb = jqElement.children( ".slidebutton-thumb" ),
			active = false
		;

		jqThumb.css( "width", jqElement.height() );

		jqElement.click( function() {
			jqThumb.css(
				"left",
				active ? -1 : jqElement.width() - jqThumb.width() + 1
			);
			jqElement.toggleClass( "slidebutton-active", active = !active );
		});
	}
});
