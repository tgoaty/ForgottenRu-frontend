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
    description?: string;
    date: string;
    images?: string[];
    comments?: CommentI[];
}

export interface UserI {
    id: string;
    username: string;
    login: string;
    password: string;
}