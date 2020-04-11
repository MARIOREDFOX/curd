import React, {Component} from "react";
import * from "./Auto"
class List extends React.Component {
    render() {
        return (
            <div>
            	<ul>
				  {this.state.list.map(item => (
				    <li key={item}>
				      {item} &nbsp;
				    </li>
				  ))}
				</ul>
            </div>
        )
    }
}
