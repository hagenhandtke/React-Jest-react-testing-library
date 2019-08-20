import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firstRequestData, currentUser } from "../redux/actions";
import { Users } from "../UserHoppies";

import { IInitialState } from "../redux/reducers/userHoppyReducer";
interface Store {
  reducer: IInitialState;
  currentUser: typeof currentUser;
}
const UserComponent: React.FC<Store> = ({ reducer, currentUser }) => {
  reducer.users.users.map(user => {
    console.log("in UserComponent:", user);
  });

  function selectedUser(user: any) {
    currentUser(user);
  }

  return (
    <div>
      {reducer.users.users.map((user: any) => {
        console.log("in loop", user);
        return (
          <div key={user.name} onMouseDown={() => selectedUser(user)}>
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => ({ reducer: state.reducer });
export default connect(
  mapStateToProps,
  { currentUser }
)(UserComponent);
