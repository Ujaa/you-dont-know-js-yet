function toggle() {
	let nextToggle = 0;
	const toggles = arguments;
	return function toggleResult() {
		console.log(toggles[nextToggle]);
		nextToggle = nextToggle + 1;
		if (nextToggle >= toggles.length)
			nextToggle = 0;
	};
}

var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");

hello();      // "hello"
hello();      // "hello"

onOff();      // "on"
onOff();      // "off"
onOff();      // "on"

speed();      // "slow"
speed();      // "medium"
speed();      // "fast"
speed();      // "slow"
