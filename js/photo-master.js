document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    const originalImage = document.getElementById('original-image');
    const brushTool = document.getElementById('brush-tool');
    const eraserTool = document.getElementById('eraser-tool');
    const saveBtn = document.getElementById('save-btn');

    let isDrawing = false;
    let currentTool = 'brush';
    const brushSize = 50;
    const eraserSize = 50;
    const brushColor = 'rgba(0, 255, 200, .3)';
    let points = [];

    const eraserBuffer = document.createElement('canvas');
    const eraserCtx = eraserBuffer.getContext('2d');

    function initCanvas() {
        canvas.width = originalImage.width;
        canvas.height = originalImage.height;
        eraserBuffer.width = originalImage.width;
        eraserBuffer.height = originalImage.height;
        
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        eraserCtx.fillStyle = 'transparent';
        eraserCtx.fillRect(0, 0, eraserBuffer.width, eraserBuffer.height);
    }

    originalImage.onload = initCanvas;
    if (originalImage.complete) initCanvas();

    function getPosition(e) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: e.type.includes('touch') ? e.touches[0].clientX - rect.left : e.clientX - rect.left,
            y: e.type.includes('touch') ? e.touches[0].clientY - rect.top : e.clientY - rect.top
        };
    }

    function startDrawing(e) {
        e.preventDefault();
        isDrawing = true;
        points = []; 
        const pos = getPosition(e);
        points.push(pos);
        
        if (currentTool === 'brush') {
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        } else {
            eraserCtx.beginPath();
            eraserCtx.moveTo(pos.x, pos.y);
        }
    }

    function drawSmoothLine() {
        if (points.length < 2) return;

        ctx.globalCompositeOperation = 'xor';
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < points.length; i++) {
            const prev = points[i-1];
            const curr = points[i];

            const cp1x = prev.x + (curr.x - prev.x) / 3;
            const cp1y = prev.y + (curr.y - prev.y) / 3;
            const cp2x = prev.x + 2 * (curr.x - prev.x) / 3;
            const cp2y = prev.y + 2 * (curr.y - prev.y) / 3;
            
            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, curr.x, curr.y);
        }
        
        ctx.stroke();
    }

    function erase() {
        if (points.length < 2) return;

        eraserCtx.globalCompositeOperation = 'source-over';
        eraserCtx.strokeStyle = 'rgba(0,0,0,1)';
        eraserCtx.lineWidth = eraserSize;
        eraserCtx.lineCap = 'round';
        eraserCtx.lineJoin = 'round';

        for (let i = 1; i < points.length; i++) {
            const prev = points[i-1];
            const curr = points[i];
            
            const cp1x = prev.x + (curr.x - prev.x) / 3;
            const cp1y = prev.y + (curr.y - prev.y) / 3;
            const cp2x = prev.x + 2 * (curr.x - prev.x) / 3;
            const cp2y = prev.y + 2 * (curr.y - prev.y) / 3;
            
            eraserCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, curr.x, curr.y);
        }
        
        eraserCtx.stroke();

        ctx.globalCompositeOperation = 'destination-out';
        ctx.drawImage(eraserBuffer, 0, 0);

        eraserCtx.clearRect(0, 0, eraserBuffer.width, eraserBuffer.height);

        const lastPoint = points[points.length - 1];
        eraserCtx.beginPath();
        eraserCtx.moveTo(lastPoint.x, lastPoint.y);
    }

    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault();
        
        const pos = getPosition(e);
        points.push(pos);

        if (points.length > 15) {
            points.shift();
        }
        
        if (currentTool === 'brush') {
            drawSmoothLine();
        } else {
            erase();
        }
    }

    function stopDrawing() {
        isDrawing = false;
        points = [];
        eraserCtx.clearRect(0, 0, eraserBuffer.width, eraserBuffer.height);
    }

    function setActiveTool(tool) {
        currentTool = tool;
        brushTool.classList.toggle('active-tool', tool === 'brush');
        eraserTool.classList.toggle('active-tool', tool === 'eraser');
        
        canvas.style.cursor = tool === 'brush' ? 
            `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${brushSize}" height="${brushSize}" viewBox="0 0 ${brushSize} ${brushSize}"><circle cx="${brushSize/2}" cy="${brushSize/2}" r="${brushSize/2}" fill="%2300ffc82d"/></svg>') ${brushSize/2} ${brushSize/2}, auto` :
            `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${eraserSize}" height="${eraserSize}" viewBox="0 0 ${eraserSize} ${eraserSize}"><circle cx="${eraserSize/2}" cy="${eraserSize/2}" r="${eraserSize/2}" fill="%23aaa" opacity="0.7"/></svg>') ${eraserSize/2} ${eraserSize/2}, auto`;
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        eraserCtx.clearRect(0, 0, eraserBuffer.width, eraserBuffer.height);
    }

    function saveImage() {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = originalImage.width;
        tempCanvas.height = originalImage.height;
        
        tempCtx.drawImage(originalImage, 0, 0);
        tempCtx.drawImage(canvas, 0, 0);
        
        const link = document.createElement('a');
        // link.download = `drawing-${new Date().getTime()}.png`;
        link.href = tempCanvas.toDataURL('image/png');
        link.click();
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);

    brushTool.addEventListener('click', () => setActiveTool('brush'));
    eraserTool.addEventListener('click', () => setActiveTool('eraser'));

    saveBtn.addEventListener('click', saveImage);

    setActiveTool('brush');
});