<template>
	<Sheet>
		<SheetTrigger as-child>
			<Button
				variant="outline"
				class="md:hidden hover:opacity-75 transition"
			>
				<Icon name="lucide:menu" />
			</Button>
		</SheetTrigger>
		<SheetContent>
			<SidebarVue />
		</SheetContent>
	</Sheet>
</template>

<script lang="ts" setup></script>

<style></style>
