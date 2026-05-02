import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li>
          <Link href="/about/last">Last</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
