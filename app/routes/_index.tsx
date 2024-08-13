import type { MetaFunction } from "@remix-run/node";
import MyComponent from "~/components/my-component";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <MyComponent></MyComponent>
    </div>
  );
}
