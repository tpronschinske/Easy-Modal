﻿/* ------------------------------
* @name: Easy Modal
* @date: March 9th, 2016
* @version: 1.0.0
* @author: Travis Pronschinske
* --------------------------------
*/

(function ($) {

    var defaultSettings = {
        content: '<span>New Easy Modal/Dialog Box</span>',
        size: 'medium',
        fadeInModal: 800,
        fadeOutModal: 800,
        footer: false,
        buttonText: "Ok",
        linkText: "Cancel"
    };

    $.easyModal = function (options) {

        var o = $.extend({}, defaultSettings, options),
            $wrap = $('<div class="modal-wrap">').hide(); //Modal Wrapper

        if (o.footer) {
            // Modal with footer and action buttons
            $easyModal = $('<div id="offClick" class="modal-bg">\
                           <div class="modal modal--' + o.size + '">' + o.content + '\
                           <div class="modal-footer">\
                           <div class="modal-actions"> \
                           <button class="btn btn--link close">' + o.linkText + '</button>\
                           <button class="btn btn--action close">'+ o.buttonText + '</button>\
                           </div>\
                           </div>\
                           </div>\
                           </div>').hide(); // MAIN MODAL STRUCTURE WITH FOOTER

        } else {
            // Modal with close icon in upper corner
            $easyModal = $('<div class="modal-bg close">\
                           <div class="modal modal--' + o.size + '">' + o.content + '<span id="modal-close" class="modal-close close"><i class="fa fa-times fa-lg"></i></span></div>\
                           </div>').hide(); // MAIN MODAL STRUCTURE NO FOOTER
        }

        // action called on click for show function
        function show() {

            var top, left;

            $wrap.fadeIn(o.fadeInModal, function () {
                $easyModal.fadeIn(o.fadeInModal);
            });

            top = Math.max($(window).height() - $easyModal.outerHeight(), 0) / 2;
            left = Math.max($(window).width() - $easyModal.outerWidth(), 0) / 2;

            $easyModal.css({
                top: top + $(window).scrollTop(),
                left: left + $(window).scrollLeft()
            });
        }

        // Hiding the Modal function
        function hide() {
            $easyModal.fadeOut(o.fadeOutModal, function () {
                $wrap.fadeOut(o.fadeOutModal).remove();
            });
        }

        $easyModal.find('.close').on('click', function (e) {
            hide();
        });

        $('body').prepend($wrap.append($easyModal));
        show();
    };

}(jQuery));
