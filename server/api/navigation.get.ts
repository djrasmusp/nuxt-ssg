import { useCustomFetch } from '~/composables/useCustomFetch';
import {NavigationResponse} from "~/types";

export default defineEventHandler(async (event) => {
  const { umbracoStartNode } = useRuntimeConfig();

  const { items}  = await useCustomFetch<NavigationResponse>('', {
    method: 'GET',
    params: {
      fetch: 'children:' + umbracoStartNode,
      fields: 'properties[route,pageTitle,umbracoNavihide]'
    }
  });

  return items;
});