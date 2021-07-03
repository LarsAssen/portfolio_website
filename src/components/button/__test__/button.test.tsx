import React from "react";
import ReactDOM from "react-dom";
import Button from '../button';

import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer'

afterEach(cleanup);

it("renders without errors", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Button label="hello"></Button>, div);
});

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="Click here"></Button>);
    expect(getByTestId('button')).toHaveTextContent("Click here");
});

it("renders button correctly with different label", () => {
    const {getByTestId} = render(<Button label="Save"></Button>);
    expect(getByTestId('button')).toHaveTextContent("Save");
});

it("Matches snapshot", () => {
    const tree = renderer.create(<Button label="Save"></Button>).toJSON();

    expect(tree).toMatchSnapshot();
})