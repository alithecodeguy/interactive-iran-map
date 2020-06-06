// InteractiveIranMap.js
import React from "react";
import IranMap from "./IranMap";
import { IslandInterface } from "./types";
const InteractiveIranMap = () => {
  const [state, setState] = React.useState({ selectedArea: "tehran" });
  const selectAreaHandler = (area: IslandInterface) => {
    setState((prevState) => ({ ...prevState, selectedArea: area.name }));
  };
  return (
    <div>
      <IranMap
        height={600}
        onClick={selectAreaHandler}
        selectedArea={state.selectedArea}
        useTestData={true}
      />
    </div>
  );
};
export default InteractiveIranMap;
