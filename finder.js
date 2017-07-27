var STAIR_LENGTH = 100; // weight of taking stairs (distance from one floor to the next)

function findPath(start, end){ // start and end are node objects
	var visited = [];
	var distance = 0;

	path = findPathRecursion(start, end, distance, visited);

	path.path.reverse(); // turn it around so that the starting point is the first element

	// divide path into segments based on levels

	pathSegments = [];
	segment = [];
	for(var i = 0; i < path.path.length-1; i++){
		segment.push(path.path[i]);
		if((path.path[i].name.substring(0,6) === "stairs" && path.path[i+1].name.substring(0,6) === "stairs" ) ||
		   (path.path[i].name.substring(0,8) === "elevator" && path.path[i+1].name.substring(0,8) == "elevator")){
			pathSegments.push(segment);
			segment = [];
		}
	}
	segment.push(path.path[path.path.length-1]);
	pathSegments.push(segment);

	// remove stairs/elevators on floors where you don't otherwise travel

	for(var i = 0; i < pathSegments.length; i++){
		if(pathSegments[i].length < 2){
			pathSegments.splice(i,1);
			i--;
		}
	}

	// package each segment labeled with the floor it's on

	path = [];

	for(segment of pathSegments){
		path.push({level:getLevelOfNode(segment[0]), nodes:segment});
	}

	return path;
}

function findPathRecursion(start, end, dist, visited){
	
	if(start == end){
		return {distance:dist, path:[end]};
	}

	var nuVisited = [];
	var shortest = {distance:Number.MAX_SAFE_INTEGER, path:false};

	for(n in visited){
		nuVisited.push(visited[n]);
	}
	nuVisited.push(start);

	for(n in start.connections){
		if( !nuVisited.includes(start.connections[n]) ){
			if(start.name.substring(0,6) === "stairs" && start.connections[n].name.substring(0,6) === "stairs"){
				nuDistance = dist + STAIR_LENGTH;
			}else{
				nuDistance = dist + Math.sqrt(Math.pow((start.x - start.connections[n].x),2.0) + Math.pow((start.y - start.connections[n].y),2.0));
			}
			var path = findPathRecursion(start.connections[n], end, nuDistance, nuVisited);

			if(path.distance < shortest.distance){
				shortest = path;
				shortest.path.push(start);
			}
		}
	}

	return shortest;

}