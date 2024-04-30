<template>
	<!-- heading -->
	<Heading
		title="conversation"
		description="Our most advanced model"
		icon="lucide:message-square"
		icon-color="text-violet-500/10"
	></Heading>
	<div class="px-4 lg:px-8">
		<div class="mt-6">
			<form
				class="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-md transition grid grid-cols-12 gap-2"
				@submit.prevent="submitForm"
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
					class="col-span-12 lg:col-span-2"
					:disabled="!prompt || isLoading"
					>Generate</Button
				>
			</form>
		</div>
		<div class="mt-4 space-x-4">
			<div
				v-if="isLoading"
				class="p-8 rounded-lg w-full flex items-center justify-center bg-muted"
			>
				<Loader />
			</div>
			<Empty
				v-if="!messages.length"
				:label="label"
			/>
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
					<UserAvatar v-if="message.role === 'user'" />
					<BotAvatar v-if="message.role === 'assistant'" />
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

async function submitForm() {
	isLoading.value = true;
	const userMessage: ChatCompletionRequestMessageType = {
		content: prompt.value,
		role: 'user',
	};
	const newMessages = [...messages.value, userMessage];
	const { data, error } = await useFetch('/api/conversation', {
		method: 'POST',
		body: {
			messages: newMessages,
		},
	});
	if (data.value && !error.value) {
		messages.value = [
			...messages.value,
			userMessage,
			{
				role: 'assistant',
				content: data.value.content as string,
			},
		];
		console.log(data.value);
	} else {
		console.error(error.value);
		// TODO: Check error Type
	}
	isLoading.value = false;
}
</script>

<style></style>
