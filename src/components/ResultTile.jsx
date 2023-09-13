import React from "react";
import styled from "styled-components";

function ResultTile() {
  return (
    <MainTile>
      <MainHeading>Result</MainHeading>
      <SubHeading>You Scored full mark</SubHeading>
    </MainTile>
  );
}

export default ResultTile;

const MainTile = styled.div`
  background-color: antiquewhite;
  margin: 0 auto;
  margin-top: 100px;
  height: 100px;
  width: 50%;
  align-items: center;
  text-align: center;
`;

const MainHeading = styled.h1`
  font-size: 23px;
  color: blue;
`;

const SubHeading = styled.h2`
  font-size: 10px;
`;
