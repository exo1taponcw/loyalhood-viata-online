
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(250 100% 60%)',
					foreground: 'hsl(0 0% 100%)'
				},
				secondary: {
					DEFAULT: 'hsl(260 45% 25%)',
					foreground: 'hsl(0 0% 100%)'
				},
				destructive: {
					DEFAULT: 'hsl(0 84.2% 60.2%)',
					foreground: 'hsl(210 40% 98%)'
				},
				muted: {
					DEFAULT: 'hsl(250 20% 95%)',
					foreground: 'hsl(250 10% 45%)'
				},
				accent: {
					DEFAULT: 'hsl(270 60% 70%)',
					foreground: 'hsl(0 0% 100%)'
				},
				popover: {
					DEFAULT: 'hsl(0 0% 100%)',
					foreground: 'hsl(250 10% 10%)'
				},
				card: {
					DEFAULT: 'hsl(0 0% 100%)',
					foreground: 'hsl(250 10% 10%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
					'50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.6)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite'
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
				'hero-pattern': 'radial-gradient(circle at 20% 50%, #667eea20 0%, transparent 50%), radial-gradient(circle at 80% 20%, #764ba220 0%, transparent 50%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
