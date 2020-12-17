import { render, screen } from "@testing-library/react";
// import App from "./App";
import FindBy from "./FindBy";

describe("Tests", () => {
  // test("to check if form is rendering", () => {
  //   render(<App />);
  //   screen.debug();
  // });
  // test('brother is present', () => {
  //   render(<App />);
  //   expect(screen.getByText(/brother/)).toBeInTheDocument();
  // });
  // test('role is there or nah', () => {
  //   render(<App />);
  //   expect(screen.getByRole('button')).toBeInTheDocument();
  //   test('find broom', () => {
  //     render(<App />);
  //     expect(screen.queryByPlaceholderText('Lol')).toBeValid();
  // })

  test("findBy test ok", async () => {
    render(<FindBy />)
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    screen.debug();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    screen.debug();
  });
});
