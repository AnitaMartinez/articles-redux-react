import { ADD_ARTICLE } from '/src/js/constants/action-types';

export function addArticle(payload) {
    return { type : ADD_ARTICLE, payload }
}