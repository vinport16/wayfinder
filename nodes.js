/**
nodes have:
x, y, name, connections
connections is an array of nodes that are directly adjacent
**/

function connect(node1, node2){
	node1.connections.push(node2);
	node2.connections.push(node1);
}

function getNode(name){
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].name == name){
			return nodes[i];
		}
	}
	return false;
}

function getAllPlaces(except = "x"){ // pass in a name to get all places except that one
	places = [];
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].name[0] != "x" && nodes[i].name != except){
			 places.push(nodes[i].name);
		}
	}
	return places;
}

var nodes = [];


nodes.push({x:450, y:500, name:"Front", connections:[]});     // 0
nodes.push({x:740, y:210, name:"J Crew", connections:[]});    // 1
nodes.push({x:250, y:300, name:"Apple", connections:[]});       // 2
nodes.push({x:450, y:170, name:"Tiffany", connections:[]}); // 3
nodes.push({x:240, y:360, name:"x1", connections:[]}); // 4
nodes.push({x:460, y:350, name:"Lobby", connections:[]});	  // 5
nodes.push({x:165, y:370, name:"x0", connections:[]});// 6
nodes.push({x:70,  y:475, name:"Exit", connections:[]});      // 7

nodes.push({x:620, y:355, name:"x2", connections:[]}); //8
nodes.push({x:640, y:365, name:"x3", connections:[]}); //9
nodes.push({x:730, y:365, name:"x4", connections:[]}); //10

connect(nodes[7], nodes[6]);
connect(nodes[6], nodes[4]);
connect(nodes[4], nodes[2]);
connect(nodes[4], nodes[5]);
connect(nodes[5], nodes[3]);
connect(nodes[5], nodes[0]);
connect(nodes[3], nodes[1]);

connect(nodes[5], nodes[8]);
connect(nodes[8], nodes[9]);
connect(nodes[9], nodes[10]);
connect(nodes[10], nodes[1]);


