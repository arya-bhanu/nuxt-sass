import OpenAI from 'openai';

const config = useRuntimeConfig();

const openAi = new OpenAI({
	apiKey: config.openAiKey,
});

export default defineEventHandler(async (event) => {
	const { message } = await readBody(event);

	if (!openAi) {
		throw createError({
			statusCode: 500,
			statusMessage: 'OpenAI key not configured properly',
		});
	}

	if (!message) {
		throw createError({
			statusCode: 400,
			statusMessage: 'message are required',
		});
	}

	const response = await openAi.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages: message,
	});

	return response.choices[0].message;
});
