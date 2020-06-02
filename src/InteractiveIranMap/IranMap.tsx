// core libraries
import React from "react";
import ReactTooltip from "react-tooltip";

// constants
import { iransStatesProperties } from "./constants/iransStates";
import { iransSeasProperties } from "./constants/iransSeas";
import { iransIslandsProperties } from "./constants/iransIslands";
// import testData from "../testData";

export interface InteractiveIranMapInterface {
  height: number;
  backgroundColor?: string;
  onClick: Function;
  selectedArea: string;
  useTestData?: boolean;
  defaultAreasColor?: string;
  selectedAreaColor?: string;
}

const InteractiveIranMap = (props: InteractiveIranMapInterface) => (
  <div
    style={{
      height: props.height,
      width: props.height * (1070.6 / 980),
      backgroundColor: props.backgroundColor,
    }}
  >
    <svg
      version="1.1"
      id="iran"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1200 1070.6"
      enableBackground="new 0 0 1200 1070.6"
      style={{ width: "100%", height: "100%" }}
    >
      <g id="provinces">
        {iransStatesProperties.map((iranState, index) => (
          <path
            key={index}
            id={iranState.persianName}
            onClick={() => props.onClick(iranState)}
            data-tip={`${iranState.persianName}`}
            data-for={`${iranState.name}Tooltip`}
            fill={
              props.selectedArea === iranState.name
                ? props.selectedAreaColor
                : props.defaultAreasColor
            }
            stroke="#9B9B9B"
            style={{ cursor: "pointer" }}
            d={iranState.d}
          />
        ))}
        {iransSeasProperties.map((iranSea, index) => (
          <path
            key={index}
            id={iranSea.persianName}
            onClick={() => props.onClick(iranSea)}
            data-tip={`${iranSea.persianName}`}
            data-for={`${iranSea.name}Tooltip`}
            fill={
              props.selectedArea === iranSea.name
                ? props.selectedAreaColor
                : "#00BDFF"
            }
            stroke="#9B9B9B"
            style={{ cursor: "pointer" }}
            d={iranSea.d}
          />
        ))}
      </g>

      <g id="islands">
        {iransIslandsProperties.map((iranIsland, index) => (
          <polygon
            key={index}
            id={iranIsland.persianName}
            onClick={() => props.onClick(iranIsland)}
            data-tip={`${iranIsland.persianName}`}
            data-for={`${iranIsland.name}Tooltip`}
            fill={
              props.selectedArea === iranIsland.name
                ? props.selectedAreaColor
                : props.defaultAreasColor
            }
            stroke="#9B9B9B"
            points={iranIsland.points}
          />
        ))}
      </g>
      {iransStatesProperties.map((iranState, index) => (
        <text
          key={index}
          textAnchor="start"
          x={`${iranState.ltrX}`}
          y={`${iranState.ltrY}`}
          onClick={() => props.onClick(iranState)}
          style={{
            fontSize: 16,
            fontWeight: "bold",
            cursor: "pointer",
            transform: `rotate(${iranState.ltrRotate}deg)`,
            letterSpacing: "normal",
          }}
          data-tip={`${iranState.persianName}`}
          data-for={`${iranState.name}Tooltip`}
        >
          {iranState.persianNickName}
        </text>
      ))}

      {iransSeasProperties.map((iranSea, index) => (
        <text
          key={index}
          textAnchor="start"
          x={`${iranSea.ltrX}`}
          y={`${iranSea.ltrY}`}
          onClick={() => props.onClick(iranSea)}
          style={{
            fontSize: 16,
            fontWeight: "bold",
            cursor: "pointer",
            transform: `rotate(${iranSea.ltrRotate}deg)`,
            letterSpacing: "normal",
          }}
          data-tip={`${iranSea.persianName}`}
          data-for={`${iranSea.name}Tooltip`}
        >
          {iranSea.persianNickName}
        </text>
      ))}
    </svg>

    {iransStatesProperties.map((state, index) => (
      <ReactTooltip
        key={index}
        id={`${state.name}Tooltip`}
        textColor="#000000FF"
        backgroundColor="#FFFFFFFF"
      />
    ))}

    {iransIslandsProperties.map((island, index) => (
      <ReactTooltip
        key={index}
        id={`${island.name}Tooltip`}
        textColor="#000000FF"
        backgroundColor="#FFFFFFFF"
      />
    ))}

    {iransSeasProperties.map((island, index) => (
      <ReactTooltip
        key={index}
        id={`${island.name}Tooltip`}
        textColor="#000000FF"
        backgroundColor="#FFFFFFFF"
      />
    ))}
  </div>
);

InteractiveIranMap.defaultProps = {
  defaultAreasColor: "#fff",
  selectedAreaColor: "red",
  backgroundColor: "white",
  useTestData: false,
};

export default InteractiveIranMap;
