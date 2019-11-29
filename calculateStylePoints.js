const calculateStylePoints = (styleNotes) => {
	let sumNotes = 0;
	for( i = 0; i < 5; i++ ) {
		sumNotes += styleNotes[i]
	}
	return sumNotes - Math.min(...styleNotes) - Math.max(...styleNotes)
};

module.exports = calculateStylePoints;