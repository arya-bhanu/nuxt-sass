<template>
	<div class="px-4 lg:px-8 flex items-center gap-x-3 mb-3">
		<div :class="`p-2 w-fit rounded-md ${bgColor}`">
			<Icon
				:name="icon"
				:class="`w-10 h-10` + iconColor"
			/>
		</div>
		<div>
			<h2 class="text-3xl font-bold capitalize">{{ title }}</h2>
			<p class="text-sm text-muted-foreground capitalize">{{ description }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
type PropsType = {
	title: string;
	description: string;
	icon: string;
	iconColor?: string;
	bgColor?: string;
};
defineProps<PropsType>();
</script>

<style></style>
