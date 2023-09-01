import BodyLeftComponent from "./body-left/BodyLeftComponent";
import BodyRightComponent from "./body-right/BodyRightComponent";

export default function BodyComponent() {
	return (
		<>
			<h2>I am Body Component !!!</h2>;
			<BodyLeftComponent />
			<BodyRightComponent />
		</>
	);
}
