import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}'
        , './components/**/*.{js,ts,jsx,tsx,mdx}'
        , './app/**/*.{js,ts,jsx,tsx,mdx}'
    ]
    , darkMode: 'class'
    , theme: {
        extend: {
            colors: {
                'pokemon-red': {
                    '50': '#fdf3f3'
                    , '100': '#fce5e4'
                    , '200': '#fad0ce'
                    , '300': '#f5afac'
                    , '400': '#ec827d'
                    , '500': '#e05953'
                    , '600': '#cc3b34'
                    , '700': '#ac2f29'
                    , '800': '#8e2b26'
                    , '900': '#772925'
                    , '950': '#40110f'
                }
            }
        }
    }
    , plugins: []
};
export default config;
