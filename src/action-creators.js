export function getImages(a, b) {
    return {
        type: 'GET_IMAGES',
        pageNumber: a,
        numRequested: b
    }
}