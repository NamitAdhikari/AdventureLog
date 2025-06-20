// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				pk: number;
				username: string;
				first_name: string | null;
				last_name: string | null;
				email: string | null;
				date_joined: string | null;
				is_staff: boolean;
				profile_pic: string | null;
				uuid: string;
				public_profile: boolean;
				has_password: boolean;
				disable_password: boolean;
			} | null;
			locale: string;
		}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
	}
}

export {};
