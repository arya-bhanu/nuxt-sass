<template>
	<!-- heading -->
	<Heading
		title="conversation"
		description="Our most advanced model"
		icon="lucide:message-square"
		icon-color="text-violet-500/10"
	></Heading>
	<div class="px-4 lg:px-8">
		<div>
			<form
				action=""
				class="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-md transition grid grid-cols-12 gap-2"
			>
				<div class="col-span-12 lg:col-span-10">
					<div class="m-0 p-0">
						<input
							v-model="prompt"
							type="text"
							placeholder="How do I calculate the radius of a circle?"
							class="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full"
						/>
					</div>
				</div>
				<Button
					type="submit"
					class="col-span-12 lg:col-span-2"
					:disabled="!prompt || isLoading"
					>Generate</Button
				>
			</form>
		</div>
		<div class="mt-4 space-x-4">
			<div
				v-if="!isLoading"
				class="p-8 rounded-lg w-full flex items-center justify-center bg-muted"
			>
				<Loader />
			</div>
			<Empty :label="label" />
			<div class="flex flex-col-reverse space-y-4">
				<div
					v-for="message in messages"
					:key="message.content"
					class="p-8 w-full rounded-lg"
					:class="`${
						message.role === 'user'
							? 'bg-white border border-black/10'
							: 'bg-slate-20'
					}`"
				>
					<p class="text-sm">
						{{ message.content }}
					</p>
				</div>
			</div>
		</div>
	</div>
	<!-- loader -->
	<!-- empty -->
	<!-- bot-avatar -->
</template>

<script lang="ts" setup>
import type { ChatCompletionRequestMessageType } from '../../types';
const isLoading = ref(false);
const prompt = ref('');
const label = ref('No conversation started.');
const messages = ref<ChatCompletionRequestMessageType[]>([]);
</script>

<style></style>
