import { omdbFetch } from "./api";

export const getOmdbData = async (title) => {
    const omdb = await omdbFetch(title)
    for (const film of omdb.Search){
        if (film.Title.startsWith("Star Wars: Episode") && film.Title.endsWith(title)){
            return film
        }
    }
}