/*
	slidebutton - 1.0.0
	https://github.com/Timer91/slidebutton
*/

$.element( {
	name: "slidebutton",
	htmlReplace:
		'<div class="slidebutton">'+
			'<div class="slider"></div>'+
			'<span class="thumb"></span>'+
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
		     -khtml-user-select: none;\
		       -moz-user-select: none;\
		        -ms-user-select: none;\
		    		user-select: none;\
		}\
			.slider {\
				overflow: hidden;\
				position: relative;\
				width: 100%;\
				background-color: rgba(0, 0, 0, 0.33);\
			}\
				.slider:before {\
					content: "";\
					left: 0;\
					width: 7px;\
					background-color: #f33;\
				}\
				.slider,\
				.slider:before {\
					height: 100%;\
					border-radius: 10px;\
				}\
				.active.slidebutton .slider:before {\
					width: 100%;\
				}\
			.thumb {\
				display: inline-block;\
				height: 100%;\
				left: -1px;\
				border-radius: 50%;\
				background-color: rgba(255, 255, 255, 1);\
			}\
				.slider,\
				.thumb {\
					top: 0;\
				}\
				.slider:before,\
				.thumb {\
					position: absolute;\
					transition: all .3s;\
				}\
	',
	init: function() {
		var
			jqElement = this.jqElement,
			slider = jqElement.children( ".slider" ),
			thumb = jqElement.children( ".thumb" ),
			shift = 1,
			active = false
		;

		// thumb initialization with slide button height
		thumb.css( { "width" : jqElement.height() } );
		slider.css

		jqElement
			.click( function() {
				var moveLeft = jqElement.width() - thumb.width() + shift;

				thumb.css( { "left" : active ? -shift : moveLeft } );

				active = !active
				jqElement.toggleClass( "active" );
			});

	}
});
