import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, IndexPages } from "./pages";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [{ path: "/", element: <IndexPages /> }],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
