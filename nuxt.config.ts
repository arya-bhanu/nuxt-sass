export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/supabase', "@nuxt/image","nuxt-icon"],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './components/ui',
	},
	supabase: {
		redirectOptions: {
			login: '/auth',
			callback: '/confirm',
			include: undefined,
			exclude: ['/'],
			cookieRedirect: false,
		},
	},
});