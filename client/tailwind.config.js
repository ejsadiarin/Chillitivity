/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			width: {
				iframeWidthMobile: "20rem",
			},
			height: {
				iframeHeight: "10rem",
			},
		},
	},
	plugins: [],
};
