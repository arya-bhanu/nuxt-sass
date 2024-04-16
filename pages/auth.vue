<!-- App.vue -->
<template>
	<div class="w-full min-h-screen flex items-center">
		<div class="max-w-[800px] w-full mx-auto">
			<Card>
				<CardTitle>
					<p class="text-center py-4">Welcome</p>
				</CardTitle>
				<CardContent>
					<Auth
						:supabase-client="supabaseClient as any"
						:appearance="{
							theme: ThemeSupa,
						}"
						:providers="['google', 'github']"
						:redirect-to="'/'"
					/>
				</CardContent>
			</Card>
		</div>
	</div>
</template>

<script setup lang="ts">
// Import predefined theme
import { ThemeSupa } from '@supabase/auth-ui-shared';

import { Auth } from '@nuxtbase/auth-ui-vue';

const supabaseClient = useSupabaseClient();

definePageMeta({
	layout: 'home',
});
</script>
