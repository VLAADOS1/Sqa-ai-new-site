function makeMask(srcCanvas, nw, nh, invert = false) {
  const m = document.createElement('canvas');
  m.width  = nw;
  m.height = nh;
  const mx = m.getContext('2d');

  mx.drawImage(srcCanvas, 0, 0, nw, nh);


  const imgData = mx.getImageData(0, 0, nw, nh);
  const d       = imgData.data;
  for (let i = 0; i < d.length; i += 4) {
    const drawn = d[i+3] > 0; 
    const val   = invert
      ? (drawn ? 0   : 255)  
      : (drawn ? 255 : 0);    
    d[i] = d[i+1] = d[i+2] = val;
    d[i+3] = 255;           
  }
  mx.putImageData(imgData, 0, 0);

  return m.toDataURL('image/png');
}

window.makeMask = makeMask;
