import { useCustomFetch } from '~/composables/useCustomFetch';
import {NavigationResponse} from "~/types";

export default defineEventHandler(async (event) => {
  const { umbracoStartNode } = useRuntimeConfig();

  try {

    const query = getQuery(event);

    const { items}  = await useCustomFetch<NavigationResponse>('', {
      method: 'GET',
      params: {
        fetch: 'children:' + umbracoStartNode,
        fields: 'properties[route,pageTitle,umbracoNavihide]',
        isPreview: query.isPreview
      }
    });
    return items;
  }catch (err) {
    throw createError({
      statusCode: err.statusCode,
      message: err.message,
      data: []
    })
  }
});