export const useAuthClient = async () => {
	const supaClient = useSupabaseClient();
	const user = await supaClient.auth;
	return user;
};
