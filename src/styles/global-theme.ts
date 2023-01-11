import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`	
    * {
		margin: 0;
		padding: 0;
        outline: 0;
		box-sizing: border-box;
    }

	html {
		-webkit-font-smoothing: antialiased;
	}

	html, body, #root {
		width: 100%;
		height: 100%;
	}

	body, input, select, textarea, button {
        -webkit-font-smoothing: antialiased;
		font-family: Sora, sans-serif;
		font-weight: 400; color: ${({ theme }) => theme.colors.secondary[900]};
	}

    strong, h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }

	ul {
		list-style: none;
	}
	
	a {
		text-decoration: none;
		color: inherit;
	}
	
	button {
		cursor: pointer;
	}

	img {
		max-width: 100%;
	}

	@media (max-width: 992px) {
		html {
			font-size: 93.75%;
		}
	}
	
	@media (max-width: 768px) {
		html {
			font-size: 87.5%;
		}
	}
`
