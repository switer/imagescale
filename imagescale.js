'use strict';

/**
 *  Image thumb process module.Use for thumb calc imge width and height with specified Max-width and Max-height
 *  http://github.com/switer/imagescale
 *
 *  Copyright (c) 2014 "switer" guankaishe
 *  Licensed under the MIT license.
 *  https://github.com/switer/imagescale/blob/master/LICENSE
 */
module.exports = function (image, maxWidth, maxHeight) {
    var width = image.width;
    var height = image.height;
    var limitScale;
    var scale;

    maxWidth == undefined && (maxWidth = 'auto'); // auto mean not be limited
    maxHeight == undefined  && (maxHeight = 'auto'); // auto mean not be limited

    if (maxWidth == 'auto' && maxHeight == 'auto') {
        // auto size, do nothing
        return image;

    } else if (maxHeight == 'auto' && width >= maxWidth) {
        height = height * maxWidth / width;
        width = maxWidth;
    } else if (maxWidth == 'auto' && height >= maxHeight) {
        width = width * maxHeight / height;
        height = maxHeight;
    } else if ((width > maxWidth && (height * maxWidth / width) > maxHeight) ||
        (height > maxHeight && (width * maxHeight / height) > maxWidth)) {
        limitScale = maxWidth / maxHeight;
        scale = width / height;

        if (scale > limitScale) {
            width = maxWidth;
            height = maxWidth / scale;
        } else {
            height = maxHeight;
            width = maxHeight * scale;
        }
    } else if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
    } else if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
    }
    /**
     *  Using Math.floor for againts out of bound
     **/
    height = Math.floor(height);
    width = Math.floor(width);

    image.width = width;
    image.height = height;

    return image;
}
