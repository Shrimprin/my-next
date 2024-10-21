import Image from "next/image";

export default function BookDetails({ index, book }) {
  return (
    <div className="flex w-full mb-4">
      <div>
        {/* 書影を表示 */}
        <Image src={book.image} alt={book.title} width={100} height={100} />
      </div>
      <div>
        {/* 書籍情報をリスト表示(index属性が指定されたら連番も表示) */}
        <ul className="list-none text-black ml-4">
          <li>{index && index + "."}</li>
          <li>
            {book.title} ({book.price}円)
          </li>
          <li>{book.author}</li>
          <li>{book.publisher}</li>
          <li>{book.published}</li>
        </ul>
      </div>
    </div>
  );
}
