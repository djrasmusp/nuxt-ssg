export const usePreview = () => {
    const { name, path } = useRoute()

    const isPreview = (name === 'preview-slug')
    const pageId = extractPageId(path)

    const appendPreviewUrl = (path : string) : string => {
        return isPreview ? '/preview' + path : path
    }

    return {
        isPreview,
        path: (isPreview) ? '/' + pageId : path,
        pageId,
        appendPreviewUrl
    }
}

function extractPageId(path: string){
    const regex = /\/preview-([^/]+)\//;
    const match = path.match(regex);
    return match ? match[1] : undefined;
}