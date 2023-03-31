import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ }) => {
  throw redirect(307, '/docs/introduction');
}) satisfies PageLoad;