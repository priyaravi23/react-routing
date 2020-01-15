import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import _ from "lodash";

import { LazyImage } from "./lazy-image";

const Global = createGlobalStyle`
  body {
    background-color: #AEB6BF;
    color: white;
    font-family: sans-serif;
  }
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);;
  row-gap: 1rem;
  column-gap: 1rem;
  padding: 1rem;
  justify-items: center;
`;

export default function HomeComponent() {
    return (
        <main>
            <Global />
            <h3>Browse our inventory for luxury, exotic and classic cars for sale</h3>
            <Grid>
                {_.range(1000).map(index => (
                    <LazyImage
                        key={index}
                        src={`https://picsum.photos/500/500/?image=${index}`}
                        alt="placeholder"
                    />
                ))}
            </Grid>
        </main>
    );
}