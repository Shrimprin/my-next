import { getAllReviews } from "@/lib/getter";
import LinkedBookDetails from "@/components/LinkedBookDetails";

export const dynamic = "force-dynamic";
export default async function Home() {
  // 全てのレビュー情報を取得
  const reviews = await getAllReviews();
  return (
    <>
      {/* 取得したレビュー情報をもとにリストを生成 */}
      {reviews.map((b, i) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </>
  );
}
