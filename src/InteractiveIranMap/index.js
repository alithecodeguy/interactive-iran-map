// InteractiveIranMap.js
import React from "react";
import IranMap from "./IranMap";
const InteractiveIranMap = (props) => {
  const [state, setState] = React.useState({ selectedArea: "tehran" });
  const selectAreaHandler = (area) => {
    setState((prevState) => ({ ...prevState, selectedArea: area.name }));
  };
  return (
    <div>
      <IranMap
        height={600}
        backgroundColor="white"
        onClick={selectAreaHandler}
        selectedArea={state.selectedArea}
        useTestData={true}
        defaultAreasColor="#fff"
        selectedAreaColor="red"
      />
    </div>
  );
};
export default InteractiveIranMap;
