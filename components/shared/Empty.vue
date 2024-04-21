<template>
	<span class="h-full p-20 flex flex-col items-center justify-center">
		<div class="relative h-72 w-72">
			<NuxtImg
				src="/empty.jpg"
				alt="empty-state"
			/>
			<p class="text text-muted-foreground text-sm text-center">
				{{ label }}
			</p>
		</div>
	</span>
</template>

<script lang="ts" setup>
defineProps<{
	label: string;
}>();
</script>

<style></style>
