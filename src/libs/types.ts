// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    username: string;
    userImagePath: string;
    replyText: string;
    likeNum: number;
}
export type { ReplyProps };

interface PostOwnerProps {
    ImagePath: string;
    username: string;
    postTitle:string;
    likes:number;
}
export type { PostOwnerProps };

interface CommentProps {
    userImagePath: string;
    username: string;
    commentText:string;
    likeNum:number;
    replies:(ReplyProps | undefined)[];
}
export type { CommentProps };

