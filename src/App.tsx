import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./App.scss";
import { firstRequestData } from "./redux/actions";
import { IInitialState } from "./redux/reducers/userHoppyReducer";
import { UserHoppies, Users, Hoppy } from "./UserHoppies";
import { AppState } from "./redux/store";
import UserComponent from "./components/User";
import UserHoppiesComponent from "./components/UserHoppiesComonent";
import { timeout } from "q";

interface AppProps {
  firstRequestData: typeof firstRequestData;
  reducer: any;
  //   userHoppies: IInitialState;
}

class App extends React.Component<AppProps> /* (firstRequestData:any)  =>  */ {
  state = {
    url: "./userHoppiesData.json",
    noData: false,
  };

  // var url : string = "./userHoppiesData.json"; const [users,     setUsers] =
  // useState < Users > (new Users()); const [noData,     setNoData] = useState <
  // boolean > (false); var noData: boolean = false; useEffect(() => {
  componentDidMount() {
    this.setState({ noData: true });
    axios
      .get(this.state.url)
      .then(response => {
        // this.setState({ users: response.data.users });
        if (this.state.noData) this.setState({ noData: false });
        this.props.firstRequestData(response.data);
        console.log(
          "Did Update_=> From Store: ",
          this.props.reducer.users.users.length
        );
        // setUsers(response.data);
        // props.firstRequestData(response.data);
        /*     if (this.state.url)
                    // this.state.noData = false;
                    this.setState({noData: false});
                 */
        // setNoData(false);
      })
      .catch(error => {
        console.log(error);
        this.setState({ noData: true });
      });
    /*             // eslint-disable-next-line }, []);
     */
  }

  render() {
    return (
      <div>
        {this.state.noData ? (
          <header className="header">
            <h1>No Data Found</h1>
          </header>
        ) : (
          <div className="contend">
            <div className="user-grid">
              <div className="grid-header-text">User Hoppies</div>
              <div className="grid-header-border" />
              <div className="user">
                <UserComponent />
              </div>
              <div className="user-property">
                <UserHoppiesComponent />
              </div>
            </div>
          </div>
          // userHoppies.map(userHoppies => {   return <div />; })
        )}
      </div>
    );
  }
}
// const mapStateToProps = (state: AppState) => ({
//     system: state.system,
//     chat: state.chat
//   });

const mapStateToProps = (state: AppState) => ({
  reducer: state.reducer
});

const mapDispatchToProps = {
  firstRequestData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
