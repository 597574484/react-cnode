import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../Action/Index';
import {Tool, merged} from '../Tool';
import {DataLoad, DataNull, Header, TipMsgSignin, Footer} from './common/index';

/**
 * 模块入口
 * 
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header title="发表主题" />
                <TipMsgSignin />  
                <Footer index="1" />
            </div>
        );
    }
    componentDidMount() {

    }
    componentWillReceiveProps() {

    }
    componentWillUnmount() {

    }
}



export default connect((state) => { return { state: state.Topic }; }, action('Topic'))(Main); //连接redux