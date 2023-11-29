import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},

	{
		path: "",
		element: ""
	}
]);

const RoutesApp: React.FC = () => {
	return <RouterProvider router={routes} />;
};

export default RoutesApp;
