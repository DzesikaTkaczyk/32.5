const calculateDistancePoints = (distance, hillSize, kPoint) => {
	let distancePoints = 0;
	if( hillSize === 'mamucia' ){
		distancePoints = 120 + ((distance - kPoint) * 1.2)
	};
	else if (hillSize === 'big') {
		distancePoints = 60 + ((distance - kPoint) * 1.8)
	};
	else if (hillSize === 'normal') {
		distancePoints = 60 + ((distance - kPoint) * 2)
	};
	return distancePoints;
};
module.exports = calculateDistancePoints;
