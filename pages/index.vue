<template>
	<div>
		<h1>Home</h1>
		{{ user }}
	</div>
</template>

<script lang="ts" setup>
const supaClient = useSupabaseClient();
const user = await supaClient.auth.getUser();
</script>

<style></style>
