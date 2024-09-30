"use client";
import { CommentProps, ReplyProps } from "@/libs/types";
import Reply from "./Reply";

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies = [],
}: CommentProps) {
  let isZero:boolean = false;
    if(likeNum>0){
      isZero = false;
    } else isZero = true;
  return (
    <div>
      <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{commentText}</span>
            { !isZero &&
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{likeNum} คน</span>
            </div>
            }
          </div>
        </div>
      {/* {replies.map((reply:ReplyProps) => (<Reply key={reply.username} {...reply} />))} */}
      {replies?.map((reply) => reply && ( <Reply key={reply.username} {...reply} />  ))}
    </div>
  );
}
