import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Wrapper from './components/Wrapper';
import Russian from './lang/ru.json';
import English from './lang/en.json';
import Arabic from './lang/ar.json';

const locale = navigator.language;

let lang;
if (locale === 'en') {
	lang = English;
} else {
	if (locale === 'ru') {
		lang = Russian;
	} else {
		lang = Arabic;
	}
}
const locales = {
	en: {
		alias: 'English',
		enable: 'true',
	},
	ru: {
		alias: 'Russian',
		enable: true,
	},
	ar: {
		alias: 'Arabic',
		enable: true,
	},
};

ReactDOM.render(
	<React.StrictMode>
		<Wrapper>
			<App date={Date.now()} />
		</Wrapper>
		,
	</React.StrictMode>,
	document.getElementById('root')
);
