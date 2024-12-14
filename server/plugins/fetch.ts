import { defineNitroPlugin } from '#imports';
import { $fetch } from 'ofetch';

export default defineNitroPlugin((nitroApp) => {
    const { umbracoBaseUrl, umbracoStartNode } = useRuntimeConfig();

    nitroApp.hooks.hook('custom:fetch', async (url: string, options: Record<string, any> = {}) => {
        try {
            // Tilføj default baseURL og headers
            const response = await $fetch(url, {
                baseURL: `${umbracoBaseUrl}/umbraco/delivery/api/v2/content`,
                headers: {
                    'Start-Item': umbracoStartNode,
                    ...options.headers,
                },
                ...options,
            });

            return response;
        } catch (error: any) {
            console.error(`Failed to fetch ${url}:`, error);
            throw new Error(`Failed to fetch ${url}: ${error.message}`);
        }
    });
});
