import LogoComponent from "./logo/LogoComponent";
import ViewTitleComponent from "./view-title/ViewTitleComponent";

export default function HeaderComponent() {
	return (
		<>
			<h2>I am Header Component!!</h2>
			<LogoComponent />
			<ViewTitleComponent />
		</>
	);
}
