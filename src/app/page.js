import Image from "next/image";


export default function Home() {

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full flex flex-row justify-between pb-[40px] p-[50px] bg-black text-white text-xl">
          <div>Home</div>
          <div>Blog</div>
          <div>Projects</div>
          <div>Reports</div>
          <div>About Us</div>
        </div>
        <div className="w-full h-auto p-10 grid grid-cols-2 gap-10">
          <div className="flex justify-center bg-green-100 min-h-[100px]">Container 1</div>
          <div className="flex justify-center bg-orange-100 min-h-[100px]">Container 2</div>
          <div className="flex justify-center bg-pink-100 min-h-[100px]">Container 3</div>
          <div className="flex justify-center bg-green-100 min-h-[100px]">Container 4</div>
        </div>
        <div className="w-full min-h-[200px] bg-blue-200 px-[10px] flex justify-center flex-col mb-[100px]">
          <div className="flex justify-center min-h-[100px] border-b-2">Hello</div>
          <div className="flex justify-center min-h-[100px] border-b-2">World</div>
          <div className="flex justify-center min-h-[100px] border-b-2">Test</div>
          <div className="flex justify-center min-h-[100px] border-b-2">Text</div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-yellow-200 pt-[20px]">
        <div className="flex justify-center min-h-[100px] p-5">Ai</div>
        <div className="flex justify-center min-h-[100px] p-5">is</div>
        <div className="flex justify-center min-h-[100px] p-5">so</div>
        <div className="flex justify-center min-h-[100px] p-5">Cool!</div>
      </footer>
    </div>
  );
}
