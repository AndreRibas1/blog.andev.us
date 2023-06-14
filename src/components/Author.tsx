import { AuthorContent } from "../lib/authors";

type Props = {
  author: AuthorContent;
};
export default function Author({ author }: Props) {
  return (
    <>
      <span><a href={`https://blog.andev.us/about/${author.link}`}>{author.name}</a></span>
      <style jsx>
        {`
          span {
            color: #9b9b9b;
          }
        `}
      </style>
    </>
  );
}
