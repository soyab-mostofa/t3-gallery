import Link from "next/link";

const TopNav = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 p-4 text-xl font-semibold ">
      <Link href="/gallery">Gallery</Link>
      <Link href="/gallery">Sign in</Link>
    </nav>
  );
};
export default TopNav;
