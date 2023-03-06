export type MoviesResult = {
    title:       string;
    description: string;
    movies:      Movie[];
}

export type Movie = {
    id:          string;
    title:       string;
    releaseYear: string;
}

