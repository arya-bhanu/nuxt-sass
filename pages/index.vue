<template>
	<div>
		<h1>Home</h1>
		{{ user }}
	</div>
</template>

<script lang="ts" setup>
const user = await useGetUser();
</script>

<style></style>
