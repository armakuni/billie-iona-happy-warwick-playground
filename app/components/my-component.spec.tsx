import { createRemixStub } from "@remix-run/testing";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import MyComponent from "./my-component";

test("renders", async () => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      Component: MyComponent,
    },
  ]);

  render(<RemixStub />);

  expect(await screen.findByText("Hello")).toBeVisible();
});
