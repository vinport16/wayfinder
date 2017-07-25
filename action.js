/*
<select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
*/
var pos = document.getElementById("position");
var des = document.getElementById("destination");

var options = "";
var places = getAllPlaces().sort();
for(var i = 0; i < places.length; i++){
	options += "<option value='"+ places[i] +"'> "+ places[i] +"</option>";
}
pos.innerHTML = options;

updateDestination = function(){
	var options = "";
	var places = getAllPlaces(pos.value).sort();
	for(var i = 0; i < places.length; i++){
		options += "<option value='"+ places[i] +"'> "+ places[i] +"</option>";
	}
	des.innerHTML = options;
}


setupMap("map.png",0,0,function(){
	//drawPaths(nodes);
	//drawPoints(nodes);
	//findPath(getNode("Exit"), getNode("J Crew"));
	//drawNames(nodes);
});

findRoute = function(){
	setupMap("map.png",0,0,function(){
		//drawPaths(nodes);
		//drawPoints(nodes);
		findPath(getNode(pos.value), getNode(des.value));
		//drawNames(nodes);
	});
}