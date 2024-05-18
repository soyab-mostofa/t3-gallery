import Image from "next/image";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";
// All requests made with the client will be authenticated
const mockUrls = [
  "https://utfs.io/f/bd9d9915-badb-43ed-94e3-6e1dadf44477-vlcusr.jpg",
  "https://utfs.io/f/bd9d9915-badb-43ed-94e3-6e1dadf44477-vlcusr.jpg",
  "https://utfs.io/f/bd9d9915-badb-43ed-94e3-6e1dadf44477-vlcusr.jpg",
  "https://utfs.io/f/bd9d9915-badb-43ed-94e3-6e1dadf44477-vlcusr.jpg",
  "https://utfs.io/f/bd9d9915-badb-43ed-94e3-6e1dadf44477-vlcusr.jpg",
  "https://utfs.io/f/bd9d9915-badb-43ed-94e3-6e1dadf44477-vlcusr.jpg",
];

const mockData = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-8">
        {[...mockData, ...mockData].map((image) => (
          <div key={image.id} className="w-48">
            <Image
              src={image.url}
              width={192}
              height={"100"}
              alt="image"
              className=""
            />
          </div>
        ))}
      </div>
    </main>
  );
}
