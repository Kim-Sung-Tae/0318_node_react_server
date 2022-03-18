import React, { Component } from 'react';

class ClassTag extends Component {
    constructor(props){
        super(props)
        this.state = {
            mytext: ' mytext 초기 값 '
        }
    }
    componentDidMount(){
        this.setState({mytext : "setState 로 할당된 값"})

    }
    render() {
        return (
            <div>
                <h3>Class Tag  클래스형 컴퍼넌트</h3>
                <p>componentDidMount  this.setState   mytext : setstate 할당</p>
                {this.state.mytext}
            </div>
        );
    }
}

export default ClassTag;

