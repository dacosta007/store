import { fail } from '@sveltejs/kit';
import { isValidEmail } from '$lib';
import { products } from '$lib/assets/mockProducts'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  // get top recent list of products
  const recentProducts = products

  return {
    productList: recentProducts
  };
};


/** @type {import('./$types').Actions} */
export const actions = {
  newsletter: async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email');

    if (!isValidEmail(email)) {
      return fail(400, { error: true, message: 'Invalid email address.' })
    }

    // Process the newsletter subscription logic here
    // For example, save to a database or send an email confirmation

    return { 
      success: true, 
      title: 'Subscription Successful', 
      message: 'Welcome to our community. You\'ve successfully subscribed to the newsletter!' 
    }
  }
};