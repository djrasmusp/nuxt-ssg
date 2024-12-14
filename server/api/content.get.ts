import { useCustomFetch } from '~/composables/useCustomFetch';
import { z} from 'zod'

const querySchema = z.object({
  path: z.string().startsWith('/')
})

export default defineEventHandler(async (event) => {


  try {
    const query  = await getValidatedQuery<{ path: string}>(event, query => {
      querySchema.parse(query);
    })

    const data = await useCustomFetch('/item' + query?.path , {
      method: 'GET',
    } )
    return data

  }catch(err) {
    throw createError({
      statusCode: 500,
      message: err.message,
      fatal: true,
    })
  }
})
