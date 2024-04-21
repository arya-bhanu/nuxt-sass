<template>
	<span class="h-full flex flex-col space-y-4 items-center justify-center">
		<NuxtImg
			src="logo.svg"
			alt="logo"
			class="w-10 h-10 relative animate-spin"
		/>

		<p
			v-if="isProcessing"
			class="text-sm text-muted-foreground"
		>
			Artha Io Engine Is Processing ...
		</p>
	</span>
</template>

<script lang="ts" setup>
type PropsType = {
	isProcessing?: boolean;
};
withDefaults(defineProps<PropsType>(), {
	isProcessing: true,
});
</script>

<style></style>
