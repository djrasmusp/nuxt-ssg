import { defineNitroPlugin } from '#imports';
import { $fetch } from 'ofetch';

export default defineNitroPlugin((nitroApp) => {
    const { umbracoBaseUrl, umbracoStartNode, umbracoApiKey } = useRuntimeConfig();

    nitroApp.hooks.hook('custom:fetch', async (url: string, options: Record<string, any> = {}, isPreview: boolean = false) => {
        try {

            const isPreview = (options.params?.isPreview === 'true')
            delete options.params.isPreview
            const hasFetch = (options.params.fetch)

            const response = await $fetch(url, {
                baseURL: `${umbracoBaseUrl}/umbraco/delivery/api/v2/content`,
                headers: {
                    'Start-Item': umbracoStartNode,
                    ...options.headers,
                },
                ...options,
                onRequest({ options }){
                    if(hasFetch){
                        options.headers.delete('Start-Item')
                    }
                    if(isPreview){
                            options.headers.set('Preview', 'true')
                        options.headers.set('Api-Key', umbracoApiKey)
                        options.headers.delete('Start-Item')
                    }
                },
            });

            return response;
        } catch (error: any) {
            console.error(`Failed to fetch ${url}:`, error);
            throw createError({
                statusCode: error.statusCode,
                message: error.message,
                data: []
            })
        }
    });
});
