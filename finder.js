
function findPath(start, end){ // start and end are nodes ( such as nodes[0] and nodes[4] )
	var visited = [];
	var distance = 0;

	path = findPathRecursion(start, end, distance, visited);

	connectTheDots(path.path);
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

			nuDistance = dist + Math.sqrt(Math.pow((start.x - start.connections[n].x),2.0) + Math.pow((start.y - start.connections[n].y),2.0));
			var path = findPathRecursion(start.connections[n], end, nuDistance, nuVisited);

			if(path.distance < shortest.distance){
				shortest = path;
				shortest.path.push(start);
			}
		}
	}

	return shortest;

}