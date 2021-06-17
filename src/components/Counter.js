import React, { Component } from 'react';

class Counter extends Component {
    state = {
        num: 0
    }
    handleInc = () => {
        this.setState({ num: this.state.num + 1 });
    }
    handleDec = () => {
        this.setState({ num: this.state.num - 1 });
    }
    handleReset = () => {
        this.setState({ num: 0 });
    }
    render() {
        return (
            <section className="wrapper">
                <div className="calc">
                    <button onClick={this.handleDec}>-</button>
                    <div className="num">{this.state.num}</div>
                    <button onClick={this.handleInc}>+</button>
                </div>
                <button onClick={this.handleReset}>RESET</button>
            </section>
        );
    }
}

export default Counter;