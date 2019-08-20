import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Store } from "../redux/store";

const UserHoppiesComponent: React.FC<Store> = ({ reducer }) => {
  console.log("UserHoppiesComponent--UserHoppiesComponent", reducer);
  return (
    <div>
      {reducer.currentUser.hoppys.map((hoppy, index) => {
        return (
          <div key={index} className="user-hoppies">
            <div className="user-hoppies-prop"> Passion: {hoppy.passion} </div>
            <div className="user-hoppies-prop">Since: {hoppy.start}</div>
            <div className="user-hoppies-prop">{hoppy.hoppy} close</div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => ({ reducer: state.reducer });
export default connect(mapStateToProps)(UserHoppiesComponent);
