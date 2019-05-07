onmessage=function(e){var pixels=new Uint8ClampedArray(e.data.pixels);var total=0;for(var i=3;i<pixels.length;i+=4){if(pixels[i]>=30)total++;}
postMessage({total:total,image:e.data.image});}