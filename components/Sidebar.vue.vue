<template>
	<aside
		class="flex-col flex h-full bg-white shadow-sm border-r-0 md:border-r py-4 space-y-4"
	>
		<div class="px-3 py-2 flex-1">
			<NuxtLink
				to="/"
				class="flex items-center pl-3 mb-14"
			>
				<div class="relative h-8 w-8 mr-4">
					<NuxtImg
						src="logo.svg"
						class="w-full h-full object-cover"
					/>
				</div>
				<h1 class="text-2xl font-bold">Artha.io</h1>
			</NuxtLink>
			<div class="space-y-1">
				<NuxtLink
					v-for="route in dashboardLinks"
					:key="route.label"
					:to="route.link"
					:class="{ 'bg-muted': currRoute.path === route.link }"
					class="text-sm group text-primary flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition hover:bg-muted items-center space-x-2"
				>
					<Icon
						:name="route.icon"
						:class="`h-5 w-5 ${route.color}`"
					/>
					<span>{{ route.label }} </span>
				</NuxtLink>
			</div>
		</div>
	</aside>
</template>

<script lang="ts" setup>
const currRoute = useRoute();
</script>

<style></style>
