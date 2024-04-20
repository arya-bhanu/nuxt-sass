<script setup lang="ts">
const user = useSupabaseUser();

watch(
	user,
	() => {
		if (user.value) {
			// Redirect to protected page
			return navigateTo('/dashboard');
		}
	},
	{ immediate: true }
);
definePageMeta({
	layout: 'home',
});
</script>

<template>
	<div>Waiting for login...</div>
</template>
