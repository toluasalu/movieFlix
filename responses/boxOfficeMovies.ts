
export interface BoxOfficeResult {
    items:        Item[];
    errorMessage: string;
}

export interface Item {
    id:      string;
    rank:    string;
    title:   string;
    image:   string;
    weekend: string;
    gross:   string;
    weeks:   string;
}