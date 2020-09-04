import React,{Component} from 'react';
import 'antd/dist/antd.less';
import style from './style.scss';
import Header from './components/Header/Header';
import Slide from './components/Slide/Slide';
//import Main from './components/Main/Main';
import Main from './components/Admin/Main';

class App extends Component {
	render() {
		return (
			<>
				{/* <Header />
				<Slide />
				<Main /> */}
				<Main/>
			</>
		);
	}	
}


export default  (App);
