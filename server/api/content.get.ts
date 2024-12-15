import { useCustomFetch } from '~/composables/useCustomFetch';

export default defineEventHandler(async (event) => {


  try {
    const query = getQuery(event);

    const data = await useCustomFetch('/item' + query?.path , {
      method: 'GET',
      params: {
        isPreview: query.isPreview
      }
    } )

    return data

  }catch(err) {
    throw createError({
      statusCode: err.statusCode,
      message: err.message,
      data: []
    })
  }
})
