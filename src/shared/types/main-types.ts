export interface CommentI {
    id: string;
    mark: string;
    username: string;
    date: string;
    time: string;
    text: string;
}

export interface MarkI {
    id: string;
    lat: number;
    lng: number;
    title: string;
    type: MarkType;
    description?: string;
    date: string;
    images?: string[];
    comments?: CommentI[];
}

export enum MarkType {
    Alone = "Alone",
    Group = "Group",
    Urban = "Urban",
    Cultivated = "Cultivated"
}

export interface UserI {
    id: string;
    username: string;
    login: string;
    password: string;
}