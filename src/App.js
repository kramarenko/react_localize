import React, { useContext } from 'react';
import {
	FormattedMessage,
	FormattedDate,
	FormattedNumber,
	FormattedPlural,
} from 'react-intl';
import { Context } from './components/Wrapper';

import logo from './logo.svg';
import './App.css';

function App(props) {
	const context = useContext(Context);
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<select value={context.locale} onChange={context.selectLanguage}>
					<option value='en'>English</option>
					<option value='ru'>Russian</option>
					<option value='ar'>Arabic</option>
				</select>
				<p>
					<FormattedMessage
						id='app.header'
						defaultMessage='Edit the files and save to reload'
						values={{
							fileName: 'src/App.js',
							code: (word) => <strong>{word}</strong>,
						}}
					/>
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FormattedMessage id='app.try.title' defaultMessage='Try React' />
				</a>
				<FormattedMessage
					id='app.channel.plug'
					defaultMessage='Учебник, представлен вам Medium'
					values={{ blogName: 'Medium' }}
				/>
				<br />
				<FormattedDate
					value={props.date}
					year='numeric'
					month='long'
					day='numeric'
					weekday='long'
				/>
				<br />
				<FormattedNumber value={10000} />
				<br />
				<FormattedNumber
					value={20.42}
					style='currency'
					currencyDisplay='symbol'
					currency='USD'
				/>
				<br />
				<FormattedPlural
					id='app.plural'
					defaultMessage='{amount, plural, =0 {no languages} one {# one language} few {# several languages} many {# lots of languages} other {# wrong format}}'
					values={{ amount: 3 }}
				/>
			</header>
		</div>
	);
}

export default App;
