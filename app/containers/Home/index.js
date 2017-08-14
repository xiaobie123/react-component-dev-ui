import React from 'react';
import { Link } from 'react-router';
import { Tab1,Tab2} from '../../components';

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Home</p>
                <Link to="/list">to list</Link>
                <Tab2>
                    <div name="社会新闻">
                        社会新闻的内容
                    </div>
                    <div name="体育世界">
                        体育世界的内容
                    </div>
                    <div name="娱乐圈">
                        娱乐圈的内容
                    </div>
                </Tab2>
            </div>
        )
    }
}

export default Home