export const useGetUser = async () => {
	const userClient = await useAuthClient();
	const user = await userClient.getUser();
	return user.data.user;
};
