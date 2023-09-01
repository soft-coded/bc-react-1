import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import BodyComponent from "./components/body/BodyComponent";
import FooterComponent from "./components/footer/FooterComponent";

function App() {
	return (
		<div>
			<h1>learn react</h1>
			{/* Header Component */}
			<HeaderComponent />
			{/* Body Component */}
			<BodyComponent />
			{/* Footer Component */}
			<FooterComponent />
		</div>
	);
}

export default App;
