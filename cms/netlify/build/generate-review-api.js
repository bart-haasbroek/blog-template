import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateReviewApi = () => {
    const contentDir = `${rootDir}/content/reviews`
    const apiDir = `${rootDir}/static/api`
    const allFile = `${apiDir}/reviews.json`
    const metaFile = `${apiDir}/reviews-meta.json`
    const pages = siteConfig.posts.perPage
    const doneMessage = `{totalNumber} reviews generated in reviews API`

    createAll(contentDir, allFile, apiDir)
        .then((all) => {
            const totalPages = createPagination(pages, all, `${apiDir}/reviews`)
            createMeta({ totalPages: totalPages }, metaFile)
            console.log(doneMessage.replace('{totalNumber}', all.length))
        })
        .catch((err) => {
            console.log(err)
        })
}
export default generateReviewApi