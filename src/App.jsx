import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, HomeLayout, IndexPages } from "./pages";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    errorElement: <Error />,
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
