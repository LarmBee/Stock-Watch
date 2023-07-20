/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontSize: {
				"8xl": "8rem",
			},
      maxHeight:{
        '80':'1023vh'
      }
		},
	},
	plugins: [],
};
