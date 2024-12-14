import { useNitroApp } from '#imports';
import type {NitroFetchOptions} from "nitropack";

export const useCustomFetch = async <T = unknown>(
    url: string,
    options: NitroFetchOptions<any> = {}
): Promise<T> => {
    const nitroApp = useNitroApp();

    const response = await nitroApp.hooks.callHook('custom:fetch', url, options);

    return response as T;
};
