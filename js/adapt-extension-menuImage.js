define([
	'coreJS/adapt'
],
function(Adapt) {

    var $body = $('body');

    Adapt.on('menuView:ready', function(view) {

        var menuImage = view.model.attributes._menuImage;

        // Check there was a branding image attached
        if (menuImage && menuImage.src) {
            // Create a container for the image, we'll style it separately
            var $menuImage = $('<img/>').addClass('menu-image').attr({
                src: menuImage.src,
                alt: ''
            });

            // Wrap the image inside a paragraph so it inherits the text-align value
            var $p = $('<p />').addClass('menu-image-wrapper').css({
                paddingTop: menuImage.paddingTop || 0,
                paddingBottom: menuImage.paddingBottom || 0
            });

            // Insert it before the menu title
            $('.menu-header-inner').addClass('has-image').prepend($p.html($menuImage));
        }
    });
});
