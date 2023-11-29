import { Provider } from "react-redux";
import { store } from "./store/store";
import RoutesApp from "./routes/RoutesApp";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<RoutesApp />
		</Provider>
	);
};

export default App;
