import { render, cleanup } from "@testing-library/react";
import DefaultLayout from "./DefaultLayout";

describe("<DefaultLayout />", () => {
  afterEach(cleanup);

  beforeEach(()=>{
    jest.mock("next/link", () => {
        return ({children}) => {
          return children;
        }
      });
  })

  it("Check snapshot", () => {
    const { asFragment } = render(
      <DefaultLayout>
        <p>Layout</p>
      </DefaultLayout>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
