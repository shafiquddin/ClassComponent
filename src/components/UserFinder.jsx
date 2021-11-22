import { Component } from "react";
import { Fragment } from "react";
import UserContext from "../store/User-Context";
import ErrorBoundary from "./ErrorBoundry";
import classes from "./UserFinder.module.css";
import Users from "./Users";

class UserFinder extends Component {
  static contextType=UserContext
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }
  componentDidMount(){
    this.setState({filteredUsers:this.context.users})
  }

  componentDidUpdate(preProps, preState) {
    if(preState.searchTerm !== this.state.searchTerm){
      this.setState({
        filteredUsers:this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value.toLowerCase().trim()});
  };

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
        <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const DUMMY_USERS = [
//   { id: 'u1', name: 'shafiq' },
//   { id: 'u2', name: 'shaikh' },
//   { id: 'u3', name: 'shoaib' },
// ];

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//         <div className={classes.finder}>
//       <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
