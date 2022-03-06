
const findBestStation = (stations, x, y) => {
	let bestStation;
	stations.forEach(s => {
		let power = calculatePower(s, x, y);
		if (power !== 0 && power > (bestStation?.power || 0)) {
			bestStation = { data: s, power };
		}
	});

	if (!bestStation) {
		console.log(`No link station within reach for point ${x},${y}`);
	} else {
		console.log(`Best link station for point ${x},${y} is ${bestStation.data[0]},${bestStation.data[1]} with power ${bestStation.data[2]}`);
	}
}

// function to calculate the power of a link station in x,y
const calculatePower = (station, x, y) => {
	// distance between the station and the point
	const dist = Math.sqrt(Math.pow(x - station[0], 2) + Math.pow(y - station[1], 2))
	if (dist > station[2]) {
		return 0;
	} else {
		return Math.pow(station[2] - dist, 2);
	}
}

// test examples
let stations =
	[[0, 0, 10],
	[20, 20, 5],
	[10, 0, 12]];

findBestStation(stations, 0, 0);
findBestStation(stations, 100, 100);
findBestStation(stations, 15, 10);
findBestStation(stations, 18, 18);