import { useCustomFetch } from '~/composables/useCustomFetch';
import {z} from "zod";

const querySchema = z.object({
  path: z.string().startsWith('/'),
  contentType: z.string()
})

export default defineEventHandler(async (event) => {
  try {
    const query  = await getValidatedQuery<{ path: string, contentType: string}>(event, query => {
      querySchema.parse(query);
    })

    const {items } = await useCustomFetch<{ total: number, items: object[]}>('', {
      method: 'GET',
      query: {
        fetch: 'children:' + query.path,
        contentType: query.contentType,
      },
      onRequest: ({ options}) => {
        options.headers.delete('Start-Item')
      }
    })

    return items;
  }catch(err) {
    console.error(err);
  }
})
