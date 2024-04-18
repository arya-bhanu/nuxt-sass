<template>
	<div class="h-full relative">
		<!-- sidebar -->
		<div
			class="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80"
		>
			<SidebarVue />
		</div>
		<main class="md:pl-72 pb-10">
			<!-- navbar -->
			<nav></nav>
			<slot />
		</main>
	</div>
</template>

<script lang="ts" setup></script>

<style></style>
