import ReturnBtn from "@/components/ReturnBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
      <ReturnBtn />
      {children}
    </main>
  );
}
