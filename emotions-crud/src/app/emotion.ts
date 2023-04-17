export interface NewEmotion {
    name: string;
    description: string;
}

export interface Emotion extends NewEmotion {
    id: string;
}