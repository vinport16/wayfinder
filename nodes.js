/**
nodes have:
x, y, name, connections
connections is an array of nodes that are directly adjacent

levels have:
name, file, nodes
**/

function connect(node1, node2){
	node1.connections.push(node2);
	node2.connections.push(node1);
}

function getNode(name){
	for (level of levels) {
		for(var i = 0; i < level.nodes.length; i++){
			if(level.nodes[i].name == name){
				return level.nodes[i];
			}
		}
	}
	return false;
}

function getLevel(name){
	for (level of levels) {
		if (level.name == name){
			return level;
		}
	}
	return false;
}

function fromNodes(name){
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].name == name){
			return nodes[i];
		}
	}
	return false;
}

function getAllPlaces(except = "x"){ // pass in a name to get all places except that one
	places = [];

	for (level of levels) {
    	
   		    for(var i = 0; i < level.nodes.length; i++){
				if (level.nodes[i].name[0] != "h" &&
					level.nodes[i].name.substring(0,6) != "stairs" && 
					level.nodes[i].name.substring(0,8) != "elevator" && 
					level.nodes[i].name != except){
					places.push(level.nodes[i].name);
				}
			}
	}

	
	return places;
}

function getLevelOfNode(node){
	for(level of levels){
		for(var i = 0; i < level.nodes.length; i++){
			if(level.nodes[i] === node){
				return level;
			}
		}
	}
	return false;
}

function isInRoute(level){
	for(leg of path){
		if(leg.level == level){
			return true;
		}
	}
	return false;
}

//--        ----- building map of nodes -----        --//

var levels = [];

var nodes = []; // level 1

nodes.push({x:40, y:500, name:"Dark Purple", connections:[]});
nodes.push({x:500, y:420, name:"Pink", connections:[]});
nodes.push({x:790, y:420, name:"Purple", connections:[]});
nodes.push({x:70, y:80, name:"stairs1A", connections:[]});
nodes.push({x:560, y:230, name:"elevator1A", connections:[]});

nodes.push({x:160, y:450, name:"h0", connections:[]});
nodes.push({x:370, y:270, name:"h1", connections:[]});
nodes.push({x:660, y:260, name:"h2", connections:[]});

connect(fromNodes("Dark Purple"),fromNodes("h0"));
connect(fromNodes("Dark Purple"),fromNodes("stairs1A"));
connect(fromNodes("stairs1A"),fromNodes("h0"));
connect(fromNodes("Pink"),fromNodes("h0"));
connect(fromNodes("Pink"),fromNodes("h1"));
connect(fromNodes("elevator1A"),fromNodes("h1"));
connect(fromNodes("elevator1A"),fromNodes("h2"));
connect(fromNodes("h2"),fromNodes("Purple"));

levels.push({name:"Ground Floor", file:"maps/g.png", nodes:nodes});


nodes = []; // level 2

nodes.push({x:370, y:110, name:"Orange", connections:[]});
nodes.push({x:340, y:270, name:"Gray", connections:[]});
nodes.push({x:800, y:160, name:"Gold", connections:[]});
nodes.push({x:550, y:500, name:"Yellow", connections:[]});
nodes.push({x:70, y:80, name:"stairs2A", connections:[]});
nodes.push({x:560, y:230, name:"elevator2A", connections:[]});
nodes.push({x:200, y:70, name:"h0", connections:[]});
nodes.push({x:240, y:190, name:"h1", connections:[]});
nodes.push({x:560, y:350, name:"h2", connections:[]});
nodes.push({x:680, y:350, name:"h3", connections:[]});
nodes.push({x:680, y:490, name:"h4", connections:[]});

connect(fromNodes("stairs2A"),fromNodes("h0"));
connect(fromNodes("h0"),fromNodes("Orange"));
connect(fromNodes("h0"),fromNodes("h1"));
connect(fromNodes("h1"),fromNodes("Gray"));
connect(fromNodes("h1"),fromNodes("Orange"));
connect(fromNodes("elevator2A"),fromNodes("Orange"));
connect(fromNodes("h2"),fromNodes("Gray"));
connect(fromNodes("h2"),fromNodes("h3"));
connect(fromNodes("h3"),fromNodes("Gold"));
connect(fromNodes("h4"),fromNodes("Yellow"));
connect(fromNodes("h3"),fromNodes("h4"));

levels.push({name:"Second Floor", file:"maps/2.png", nodes:nodes});


nodes = []; // level 3

nodes.push({x:70, y:80, name:"stairs3A", connections:[]});
nodes.push({x:560, y:230, name:"elevator3A", connections:[]});
nodes.push({x:560, y:500, name:"stairs3B", connections:[]});
nodes.push({x:230, y:160, name:"Light Blue", connections:[]});
nodes.push({x:780, y:160, name:"Blue", connections:[]});
nodes.push({x:560, y:360, name:"Dark Blue", connections:[]});
nodes.push({x:360, y:50, name:"h0", connections:[]});
nodes.push({x:300, y:280, name:"h1", connections:[]});
nodes.push({x:630, y:160, name:"h2", connections:[]});
nodes.push({x:880, y:310, name:"h3", connections:[]});
nodes.push({x:730, y:480, name:"h4", connections:[]});

connect(fromNodes("stairs3A"),fromNodes("h0"));
connect(fromNodes("h1"),fromNodes("h0"));
connect(fromNodes("Light Blue"),fromNodes("h1"));
connect(fromNodes("h2"),fromNodes("h0"));
connect(fromNodes("h2"),fromNodes("elevator3A"));
connect(fromNodes("Blue"),fromNodes("h2"));
connect(fromNodes("Blue"),fromNodes("h3"));
connect(fromNodes("h3"),fromNodes("h4"));
connect(fromNodes("h3"),fromNodes("Dark Blue"));
connect(fromNodes("Dark Blue"),fromNodes("h4"));
connect(fromNodes("h4"),fromNodes("stairs3B"));

levels.push({name:"Third Floor", file:"maps/3.png", nodes:nodes});


nodes = []; // level 4

nodes.push({x:70, y:80, name:"stairs4A", connections:[]});
nodes.push({x:560, y:230, name:"elevator4A", connections:[]});
nodes.push({x:560, y:500, name:"stairs4B", connections:[]});
nodes.push({x:500, y:410, name:"h0", connections:[]});
nodes.push({x:830, y:450, name:"Teal", connections:[]});
nodes.push({x:800, y:200, name:"Red", connections:[]});
nodes.push({x:200, y:65, name:"h1", connections:[]});
nodes.push({x:280, y:240, name:"h2", connections:[]});
nodes.push({x:400, y:270, name:"h3", connections:[]});
nodes.push({x:430, y:170, name:"h4", connections:[]});
nodes.push({x:630, y:170, name:"h5", connections:[]});

connect(fromNodes("h0"),fromNodes("stairs4B"));
connect(fromNodes("h0"),fromNodes("Teal"));
connect(fromNodes("stairs4A"),fromNodes("h1"));
connect(fromNodes("h2"),fromNodes("h1"));
connect(fromNodes("h2"),fromNodes("h3"));
connect(fromNodes("h3"),fromNodes("elevator4A"));
connect(fromNodes("h3"),fromNodes("h4"));
connect(fromNodes("h4"),fromNodes("h5"));
connect(fromNodes("h5"),fromNodes("Red"));

levels.push({name:"Fourth Floor", file:"maps/4.png", nodes:nodes});



//--        ----- connections between levels -----        --//

connect(getNode("stairs1A"), getNode("stairs2A"));
connect(getNode("elevator1A"), getNode("elevator2A"));
connect(getNode("stairs2A"), getNode("stairs3A"));
connect(getNode("elevator2A"), getNode("elevator3A"));
connect(getNode("stairs3A"), getNode("stairs4A"));
connect(getNode("elevator3A"), getNode("elevator4A"));
connect(getNode("stairs3B"), getNode("stairs4B"));










