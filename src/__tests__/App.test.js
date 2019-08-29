jest.mock("../app");
import React from "react";
import { readFileSync } from "fs";
import path from "path";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
// import { _users, _hoppies } from "@app/app";
import configureStore from "../redux/store";

import App from "../App";
import axios from "axios";

afterEach(cleanup);

function renderWithRedux(ui, { initialState, store = configureStore() } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}
// jest.mock("axios");
test("App", async () => {
  
  const usersJson = JSON.parse(
    readFileSync(path.join(__dirname, "/userHoppiesData.json")).toString()
  );
  // console.log(usersJson.users);

  // axios.get.mockResolvedValue({ data: usersJson });
  const { container, getByTestId, getByText } = renderWithRedux(<App />);

  //   const animalDropdown = getByTestId("use-dropdown-animal");
  //   expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

  expect(axios.get).toHaveBeenCalledTimes(1);
  //   const breedDropdown = getByTestId("use-dropdown-breed");
  //   expect(breedDropdown.children.length).toEqual(_breeds.length + 1);

  //   const searchResults = getByTestId("search-results");
  //   expect(searchResults.textContent).toEqual("No Pets Found");
  //   fireEvent(getByText("Submit"), new MouseEvent("click"));
  //   expect(pet.animals).toHaveBeenCalled();
  //   expect(searchResults.children.length).toEqual(_dogs.length);
  const resolvedSpan = await waitForElement(() => container);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      <div
        class="contend"
      >
        <div
          class="user-grid"
        >
          <div
            class="grid-header-text"
          >
            User Hoppies
          </div>
          <div
            class="grid-header-border"
          />
          <div
            class="user"
          >
            <div>
              <div>
                Micha
              </div>
              <div>
                John
              </div>
              <div>
                Ben
              </div>
            </div>
          </div>
          <div
            class="user-property"
          >
            <div />
          </div>
        </div>
      </div>
    </div>
  `);
});
