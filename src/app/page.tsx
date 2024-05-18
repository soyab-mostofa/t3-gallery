import Image from "next/image";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";
// All requests made with the client will be authenticated

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-8">
        {[...images, ...images].map((image) => (
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
