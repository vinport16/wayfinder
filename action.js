var path  = null;

var currentLevel = levels[3];

var floornav = document.getElementById("floors");

var pos = document.getElementById("position");
var des = document.getElementById("destination");

var options = "<option value='null'>select</option>";
var places = getAllPlaces().sort();
for(var i = 0; i < places.length; i++){
	options += "<option value='"+ places[i] +"'> "+ places[i] +"</option>";
}
pos.innerHTML = options;

drawLevels = function(){
	var floorsOptions = "";
	for(level of levels){
		if(level == currentLevel){
			floorsOptions+="<div class=\"floor\" style='background:#99ff99' onclick='changeLevel(\""+level.name+"\");'>"+level.name+"</div>";
		}else if(path != null && isInRoute(level)){
			floorsOptions+="<div class=\"floor\" style='background:#ccffcc' onclick='changeLevel(\""+level.name+"\");'>"+level.name+"</div>";
		}else{
			floorsOptions+="<div class=\"floor\" onclick='changeLevel(\""+level.name+"\");'>"+level.name+"</div>";
		}
	}
	floornav.innerHTML = floorsOptions;
}

updateDestination = function(){
	var options = "<option value='null'>select</option>";
	var places = getAllPlaces(pos.value).sort();
	for(var i = 0; i < places.length; i++){
		options += "<option value='"+ places[i] +"'> "+ places[i] +"</option>";
	}
	des.innerHTML = options;
}

function changeLevel(name){
	currentLevel = getLevel(name);
	drawLevels();
	
	setupMap(currentLevel.file,0,0,function(){
		if(path == null){
			drawPlaces(currentLevel.nodes);
		}else{
			for(segment of path){
				if(segment.level == currentLevel){
					connectTheDots(segment.nodes);
				}
			}
		}
	});
}


setupMap(currentLevel.file,0,0,function(){
	drawLevels();
	drawPlaces(currentLevel.nodes);
});

findRoute = function(){
	path = findPath(getNode(pos.value), getNode(des.value));
	console.log(path);
	changeLevel(path[0].level.name);
}






