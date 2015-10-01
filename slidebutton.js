/*
	slidebutton - 1.0.0
	https://github.com/Timer91/slidebutton
*/

$.element( {
	name: "togglebutton",
	htmlReplace:
		'<div class="togglebutton">'+
			'<span class="btn"></span>'+
		'</div>'
	,
	css: '\
		.togglebutton {\
			overflow: hidden;\
			display: inline-block;\
			position: relative;\
			width: 35px;\
			height: 14px;\
			cursor: pointer;\
			border-radius: 10px;\
			background-color: rgba(0, 0, 0, 0.33);\
		}\
		.togglebutton:before {\
			content: "";\
			position: absolute;\
			top: 0;\
			left: 0;\
			width: 7px;\
			height: 100%;\
			background-color: #f33;\
			border-radius: 10px;\
		}\
		.active.togglebutton:before {\
			width: 100%;\
		}\
		.btn {\
			display: inline-block;\
			position: absolute;\
			width: 14px;\
			height: 100%;\
			left: 0;\
			border-radius: 50%;\
			background-color: rgba(255, 255, 255, 1);\
			box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.11);\
		}\
		.togglebutton:before,\
		.btn {\
			transition: all .3s;\
		}\
	',
	init: function() {
		var
			jqElement = this.jqElement,
			thumb = jqElement.children( ".btn" ),
			active = false
		;

		jqElement
			.click( function() {
				var moveLeft = jqElement.width() - thumb.width();

				thumb.css({
					"left" : active ? 0 : moveLeft
				});

				active = !active
				jqElement.toggleClass("active");
			});

	}
});
