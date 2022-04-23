import React from "react";
import { JSXEle, JSXEleDyn } from "./ElementJSXX";
import CarFunc from "./ComponentFunctionn";

class CarClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { make: "Mustang", model: props.model, n: 0 }
    }
    render() {
        return (
            <>
                {JSXEle}
                {JSXEleDyn}
                <h1> This is Car Class {this.state.make}</h1 >
                <h1> And this is the Model {this.state.model + this.state.n}</h1 >
                <button onClick={() => { this.setState({ make: 'Dodge' }) }}>SetState</button>
                <br />
                <button onClick={() => { this.setState({ n: this.state.n + 1 }) }}>Change N</button>
                <br />
                <button onClick={() => { this.setState({ model: 'Chevy' }) }} >Change Model Props</button>
                <CarFunc color="Green" />
            </>
        );
    }
}

export default CarClass;