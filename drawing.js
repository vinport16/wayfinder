var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.onload = function() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
}

function drawCircle(x, y, r, fill){
	ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = fill;
    ctx.lineWidth = 0;
    ctx.strokeStyle = "rgba(255, 255, 255, 0)";
    ctx.fill();
    ctx.stroke();
}

function drawLine(x1, y1, x2, y2, fill){
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineWidth = 3;
	ctx.strokeStyle = fill;
	ctx.stroke();
}

function drawPoint(node){
    drawCircle(node.x, node.y, 5, "black");
}

function drawPoints(nodes){
    for(n in nodes){
        drawPoint(nodes[n]);
    }
}
function drawName(node){
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(node.name,node.x,node.y-20);
}

function drawNames(nodes){
    for(n in nodes){
        drawName(nodes[n]);
    }
}

function drawPlaces(nodes){
    for(n in nodes){
        if(
            nodes[n].name.substring(0,6) != "stairs" &&
            nodes[n].name.substring(0,8) != "elevator" &&
            nodes[n].name.substring(0,1) != "h"
            )
        {
            drawPoint(nodes[n]);
            drawName(nodes[n]);
        }
    }
}

function drawPaths(nodes){
    for(n in nodes){
        for(n2 in nodes[n].connections){
            drawLine(nodes[n].x, nodes[n].y, nodes[n].connections[n2].x, nodes[n].connections[n2].y, "red");
        }
    }
}

function connectTheDots(nodes){
    for(n in nodes){
        if(n != nodes.length - 1){
            drawLine(nodes[n].x, nodes[n].y,
                nodes[parseInt(n)+1].x, nodes[parseInt(n)+1].y, "green");
        }
    }
    start = nodes[0];
    end = nodes[nodes.length-1]
    
    drawCircle(start.x, start.y, 30, "rgba(255, 0, 255, 0.3)");
    drawCircle(end.x, end.y, 30, "rgba(0, 255, 0, 0.3)");

    drawName(start);
    drawName(end);
}

function setupMap(map, x, y, callback){
    var img1 = new Image();

    //drawing of the test image - img1
    img1.onload = function () {
        //draw background image
        ctx.drawImage(img1, x, y);
        callback();
    };

    img1.src = map;
}