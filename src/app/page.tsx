import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";
// All requests made with the client will be authenticated

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
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
  );
};

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <p className="flex h-full w-full items-center justify-center text-3xl">
          You are not signed in
        </p>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
