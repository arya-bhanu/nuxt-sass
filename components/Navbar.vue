<template>
	<div class="flex items-center p-4">
		<div class="flex w-full justify-end">
			<DropdownMenu>
				<DropdownMenuTrigger as-child>
					<Button variant="outline">
						<Icon name="lucide:user-circle" />
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent
					align="end"
					class="w-72 left-[100px]"
				>
					<DropdownMenuLabel>My Account </DropdownMenuLabel>
					<DropdownMenuSeparator> </DropdownMenuSeparator>
					<div class="flex w-full items-center p-2 pl-3 gap-x-2">
						<Avatar v-if="user">
							<AvatarImage
								v-if="user.user_metadata"
								:src="user.user_metadata.avatar_url"
								referrerpolicy="no-referrer"
							>
								<AvatarFallback>
									{{ user.email?.charAt(0).toUpperCase() }}
									{{ user.email?.charAt(1).toUpperCase() }}
								</AvatarFallback>
							</AvatarImage>
						</Avatar>
						<div>
							<span class="font-bold block">
								{{ user?.user_metadata.full_name }}
							</span>
							<span class="text-sm block">
								{{ user?.email }}
							</span>
						</div>
					</div>

					<DropdownMenuItem
						class="cursor-pointer flex items-center gap-x-1"
						@click.prevent="handleLogout"
					>
						<Icon name="heroicons:arrow-left-on-rectangle" />
						<span>Logout</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	</div>
</template>

<script lang="ts" setup>
const user = await useGetUser();
async function handleLogout() {
	if (user) {
		const userAuthClient = await useAuthClient();
		try {
			await userAuthClient.signOut();
			navigateTo('/auth');
		} catch (err) {
			console.error(err);
			alert('Signout failed');
		}
	}
}
</script>

<style></style>
