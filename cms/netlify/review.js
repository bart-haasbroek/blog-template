import { getMixins } from './mixins'

class Review {
  constructor(axios) {
    this.slug = 'review'
    this.slugPlural = 'reviews'
    this.pretty = 'Review'
    this.plural = 'Reviews'
    this.axios = axios
  }
}

// Mixins
Object.assign(Review.prototype, getMixins)
export default Review
