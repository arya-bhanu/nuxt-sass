import OpenAI from 'openai';

const config = useRuntimeConfig();

const openAi = new OpenAI({
	apiKey: config.openAiKey,
	organization: config.openAiOrganizationKey,
});

export default defineEventHandler(async (event) => {
	const { messages } = await readBody(event);

	if (!openAi) {
		throw createError({
			statusCode: 500,
			statusMessage: 'OpenAI key not configured properly',
		});
	}

	if (!messages) {
		throw createError({
			statusCode: 400,
			statusMessage: 'message are required',
		});
	}

	const response = await openAi.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages,
	});

	return response.choices[0].message;
});
