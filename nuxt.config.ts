export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/supabase',
		'@nuxt/image',
		'nuxt-icon',
	],
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
			include: ['/dashboard'],
			exclude: ['/'],
			cookieRedirect: true,
		},
	},
	imports: {
		dirs: ['composables/**', 'composables/supabase/**'],
	},
	runtimeConfig: {
		public: {
			urlPublic: process.env.SITE_URL,
		},
		openAiKey: process.env.OPEN_AI_KEY,
	},
	components: [
		{ path: '~/components/shared', prefix: '', extensions: ['.vue'] },
		{ path: '~/components', prefix: '', extensions: ['.vue'] },
		{ path: '~/components/ui', prefix: '', extensions: ['.vue'] },
	],
});
