import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const rtkService = createApi({
    reducerPath: 'rtkService',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.API_URL }),
    tagTypes: ['rtkGetAll'],
    endpoints: (builder) => ({
        getRtkService: builder.query<{}, void>({
            query: () => 'users',
            providesTags: ['rtkGetAll']
        })
    })
})

export const { useGetRtkServiceQuery } = rtkService