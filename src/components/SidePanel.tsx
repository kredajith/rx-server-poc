import Link from "next/link";

const SidePanel = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 h-full">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <ul>
        <li className="mb-2 hover:text-blue-400">
          <Link href="/">Home</Link>
        </li>
        <li className="mb-2 hover:text-blue-400">
          <Link href="/about">About</Link>
        </li>
        <li className="mb-2 hover:text-blue-400">
          <Link href="/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;
