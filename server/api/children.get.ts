import { useCustomFetch } from '~/composables/useCustomFetch';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);

    const {items } = await useCustomFetch<{ total: number, items: object[]}>('', {
      method: 'GET',
      params: {
        fetch: 'children:' + query.path,
        contentType: query.contentType,
        isPreview: query.isPreview
      },
      onRequest: ({ options}) => {
        options.headers.delete('Start-Item')
      }
    })

    return items;
  }catch(err) {
    throw createError({
      statusCode: err.statusCode,
      message: err.message,
      data: []
    })
  }
})
