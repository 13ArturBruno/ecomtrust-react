import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

export default class Button extends React.Component {
    render(){
        return(
            <div>
                <button 
                    type="button"
                    className="btn btn-primary"
                >
                    {this.props.value}
                </button>
            </div>
        )
    }
}

