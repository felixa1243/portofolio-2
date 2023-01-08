/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'Poppins': ['Poppins']
            },
            screens:{
                'xs':{'raw':'(max-width: 640px)'}
            }
        },
    },
    plugins: [],
}