window.onload = function () {
	main();
};

// constants
const colorsRGB = [
	[120, 28, 129],
	[64, 67, 153],
	[72, 139, 194],
	[107, 178, 140],
	[159, 190, 87],
	[210, 179, 63],
	[231, 126, 49],
	[217, 33, 32],
	[0, 150, 136],
	[158, 158, 158],
	[255, 152, 0],
	[96, 125, 139],
	[121, 85, 72],
	[0, 188, 212],
	[233, 30, 99],
	[139, 195, 74],
];

function main() {
	const colorBoxes = document.getElementsByName('box-color');
	for (let i = 0; i < colorBoxes.length; i++) {
		const color = rgbStringGenerator(colorsRGB[i]);
		colorBoxes[i].style.background = color;
		colorBoxes[i].addEventListener('click', function (e) {
			checkColorType(colorsRGB[i]);
		});
	}

	document
		.getElementById('random-box-color')
		.addEventListener('click', function (e) {
			const randomBox = document.getElementById('random-box-color');
			const rgb = randomColorGenaretor();
			randomBox.style.background = rgbStringGenerator(rgb);
			randomBox.innerText = '';
			checkColorType(rgb);
		});

	document.getElementById('reset-btn').addEventListener('click', function () {
		document.getElementById('canvas').style.background = '#ffffff';
		document.getElementById('canvas-text').style.color = '#424242';
	});

	let hexColor = '#fff';
	hexToRGBConverter(hexColor);
	handleSlider();
}

function randomColorGenaretor() {
	const rgb = [
		Math.round(Math.random() * 255),
		Math.round(Math.random() * 255),
		Math.round(Math.random() * 255),
	];
	return rgb;
}

function checkColorType(color) {
	const checkColor = document.querySelector(
		'input[name="checkColor"]:checked',
	).value;

	if (checkColor === 'rgb') {
		document.getElementById('code').innerText = rgbStringGenerator(color);
		document.getElementById('code').style.borderColor =
			rgbStringGenerator(color);
		document
			.getElementById('bg-btn')
			.addEventListener('click', function () {
				document.getElementById('canvas').style.background =
					rgbStringGenerator(color);
			});
		document
			.getElementById('txt-btn')
			.addEventListener('click', function () {
				document.getElementById('canvas-text').style.color =
					rgbStringGenerator(color);
			});
	} else if (checkColor === 'hex') {
		document.getElementById('code').innerText = rgbToHexConverter(color);
		document.getElementById('code').style.borderColor =
			rgbStringGenerator(color);
		document
			.getElementById('bg-btn')
			.addEventListener('click', function () {
				document.getElementById('canvas').style.background =
					rgbStringGenerator(color);
			});
		document
			.getElementById('txt-btn')
			.addEventListener('click', function () {
				document.getElementById('canvas-text').style.color =
					rgbStringGenerator(color);
			});
	}
}

function rgbToHexConverter(color) {
	let r = color[0];
	let g = color[1];
	let b = color[2];
	return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

function rgbaStringGenerator(color) {
	let r = color[0];
	let g = color[1];
	let b = color[2];
	let a = color[3];
	return `rgba(${r},${g},${b},${a})`;
}

function rgbStringGenerator(color) {
	let r = color[0];
	let g = color[1];
	let b = color[2];
	return `rgb(${r},${g},${b})`;
}

/**
 *
 * @param {string} hex
 */
function hexToRGBConverter(hex) {
	hex = hex.substr(1);
	if (hex.length === 6) {
		const r = parseInt(hex.substring(0, 2), 16);
		const g = parseInt(hex.substring(2, 4), 16);
		const b = parseInt(hex.substring(4), 16);
		console.log(r, g, b);
		return;
	}
	if (hex.length === 3) {
		const r = parseInt(`${hex[0]}${hex[0]}`, 16);
		const g = parseInt(`${hex[1]}${hex[1]}`, 16);
		const b = parseInt(`${hex[2]}${hex[2]}`, 16);
		console.log(r, g, b);
	}
}

function handleSlider() {
	const sliders = document.getElementsByClassName('slider-item');
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener('input', function (e) {
			const red = document.getElementById('red').value;
			const green = document.getElementById('green').value;
			const blue = document.getElementById('blue').value;
			const output = document.getElementById('output-color');
			const rgbString = rgbStringGenerator([red, green, blue]);
			output.style.background = rgbString;
		});
	}
}
