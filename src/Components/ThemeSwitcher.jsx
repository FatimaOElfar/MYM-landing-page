import {useState} from "react";
import useDarkSide from "./useDarkSide.jsx";
import {DarkModeSwitch} from "react-toggle-dark-mode";

const ThemeSwitcher = () => {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch
				sunColor='#F28C38'
				moonColor='#F5F3CE'
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/>
		</>
	);


}
export default ThemeSwitcher