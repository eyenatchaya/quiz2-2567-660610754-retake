import Image from "next/image";
import styles from "./page.module.css";

import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";
import { CommentProps } from "@/libs/types";

export default function Home() {
  
  // const [replies, setReplies] = useState<any>(null);
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner ImagePath={"/profileImages/proflie.jpg"} username={"Natchaya Palee 660610754"} postTitle="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" likes={100} />

        {/* Comment Example */}
        

        {/* Reply Example */}
        

        {/* map-loop render Comment component here */}
        {comments.map((comment: CommentProps) => (<Comment key={comment.username} {...comment}/>))}
      </div>
    </div>
  );
}
