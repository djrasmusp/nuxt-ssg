import type {GuId, IsoDate} from "~/types/branded";


export interface NavigationResponse {
    total: number
    items:NavigationItem[]
}

export type NavigationItem = {
    contentType: string
    name: string
    createDate: IsoDate
    updateDate: IsoDate
    route: {
        path: string
        startItem: {
            id: GuId
            path: string
        }
    },
    id: GuId,
    properties: {
        pageTitle: string
        umbracoNavihide?: boolean
    }
}