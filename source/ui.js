'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Facebook',
		url: 'https://www.facebook.com/suguru.oki0527'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/gurusu_program'
	},
	{
		label: 'LinkedIn'
		url 'https://www.linkedin.com/in/suguru-ohki/'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/SuguruOoki'
	},
	{
		label: 'Qiita',
		url: 'https://qiita.com/SuguruOoki'
	},
	{
		label: 'Unicorns!',
		async action() {
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn1.gif')));
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn2.gif')));
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn3.gif')));
		}
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I’m a full-time open-sourcerer making things like macOS apps, CLI tools, and modules.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
