import review_content from '../../data/review-data';

export default function handler(req, res) {
    res.status(200).json(review_content)
  }