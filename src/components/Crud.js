import React from "react";
import './AutoCompleteText.css'
import sampleData from '../sample.json';

let users = sampleData;

class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      users: users
    });
    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let _users = this.state.users;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _users = _users.filter(function(user) {
        return user.name.toLowerCase().match(search);
      });
    }

    return (
      <div>
        <h3>Search Box</h3>
          <div className="AutoCompleteText">
            <div>
              <input
                type="text"
                value={this.state.searchString}
                ref="search"
                onChange={this.handleChange}
                placeholder="Search here..."
              /><hr />
              <ul>
                {_users.map(l => {
                  return (
                    <li>
                      {l.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
    <div>
    );
  }
}

export default Crud;
