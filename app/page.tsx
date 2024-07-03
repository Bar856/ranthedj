import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <Image src="/logo.png" alt="DJ Logo" width={350} height={350} />
      <h1 className="text-5xl font-bold">בקרוב.....</h1>
      <div className="mt-4">
        <p>בנתיים, עקבו אחריי ברשתות</p>
        <div className="mt-4 flex justify-center items-center gap-4 space-x-4 ">
          <a
            href="https://www.facebook.com/profile.php?id=100056682145355"
            target="_blank"
            className="text-white"
            rel="noopener noreferrer">
            <Image src="/facebook.svg" alt="Facebook" width={40} height={40} />
          </a>
          <a
            href="https://www.instagram.com/ran_the_dj/"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </main>
  );
}
