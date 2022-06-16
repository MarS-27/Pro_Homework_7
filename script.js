sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

summer_sports = sports.slice(5, sports.length);
winter_sports = sports.slice(0, 5);
fruits = summer_sports.splice(2, 2).concat(winter_sports.splice(2, 1));

console.log(summer_sports, winter_sports, fruits);