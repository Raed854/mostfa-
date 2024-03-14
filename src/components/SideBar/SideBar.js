import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChartPie,
  faChartLine,
  faBars,
  faBuilding,
  faKey,
  faCircleUser
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="container">
      <div className="sidebar-header">
        <div className="image-frame">
          <FontAwesomeIcon icon={faBars} className="hamburger" />
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="options-container">
          <div className="option-item">
            <FontAwesomeIcon icon={faUsers} className="icons" />
            <p className="option-item-text">Users</p>
          </div>
          <div className="option-item">
            <FontAwesomeIcon icon={faCircleUser} className="icons" />
            <p className="option-item-text">Role</p>
          </div>
          <div className="option-item">
            <FontAwesomeIcon icon={faBuilding} className="icons" />
            <p className="option-item-text">Company</p>
          </div>
          <div className="option-item">
            <FontAwesomeIcon icon={faChartPie} className="icons" />
            <p className="option-item-text">Time Card</p>
          </div>
          <div className="option-item">
            <FontAwesomeIcon icon={faChartLine} className="icons" />
            <p className="option-item-text">Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
