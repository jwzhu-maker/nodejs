const depthFirstPrint = (graph, source) => {
	const visited = new Set();
  const stack = [source];

  while (stack.length > 0) {
	const current = stack.pop();
	if (visited.has(current)) {
	  continue;
	}
	visited.add(current);
	console.log(current);
	for (const neighbor of graph[current]) {
	  stack.push(neighbor);
	}
  }
}

const graph = {
	  a: ["c", "b"],
	  b: ["d"],
	  c: ["e"],
	  d: ["f"],
	  e: [],
	  f: [],
	};


depthFirstPrint(graph, "a");
