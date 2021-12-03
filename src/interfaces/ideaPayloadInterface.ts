export interface IdeaEditPayload {
    userName?: string | number;
    likes?: number;
    ideaUUID: string;
}

export interface Idea<T> extends IdeaEditPayload{
    title: string;
    description: string;
    submitted_by: T;
    approved_by?: T;
    shortlisted_by?: T
}