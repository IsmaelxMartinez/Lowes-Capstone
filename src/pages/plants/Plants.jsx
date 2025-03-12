import "./Plants.scss";
import React from "react";
import PlantList from "../../components/PlantList/PlantList.jsx";

export default function Plants() {
  return (
    <div className="plants">
      <h1>Plants</h1>

      <PlantList />
    </div>
  );
}
