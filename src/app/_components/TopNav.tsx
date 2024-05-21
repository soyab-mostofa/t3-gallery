import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { UploadButton, UploadDropzone } from "../_utils/uploadthing";

const TopNav = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 p-4 text-xl font-semibold ">
      <Link href="/">Gallery</Link>
      <div className="flex items-center gap-2">
        <SignedOut>
          <button className="rounded-md bg-gray-300 px-4 py-2 text-gray-700 ">
            <SignInButton />
          </button>
        </SignedOut>
        <SignedIn>
          <UploadDropzone endpoint={"imageUploader"} />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
export default TopNav;
