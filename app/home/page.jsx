import NavBar from "@components/NavBar";
import ShowCase from "@components/ShowCase";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="mb-5">
      <div className="flex flex-col h-[80vh] bg-[url('https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg')] bg-cover bg-clip-border bg-center bg-no-repeat">
        <NavBar className="h-1/3"></NavBar>
        <div className="flex flex-col w-2/4 pl-10 h-full justify-center gap-6 bg-gradient-to-r from-slate-950 to-transparent">
          <h1 className="text-6xl font-bold text-white w-2/4">
            STRANGER THINGS
          </h1>
          <div className="flex gap-6 w-2/4">
            <Link
              href="/home"
              className="bg-white p-3 w-2/5 text-black font-bold rounded-md w-2/6 flex justify-center items-center gap-2"
            >
              <Image
                src="/play-button.png"
                width={32}
                height={32}
                className="inline p-1"
              ></Image>
              Play
            </Link>
            <Link
              href="/home"
              className="bg-zinc-500 p-3 w-2/5 text-white font-bold rounded-md w-2/6 flex justify-center items-center gap-2"
            >
              <Image
                src="/my-list.png"
                width={32}
                height={32}
                className="inline p-1"
              ></Image>
              My List
            </Link>
          </div>
          <p className="text-neutral-400 w-2/4">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces and a strange
            little girl
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="pl-10 flex flex-col gap-3">
          <h3 className="text-white font-bold text-lg">Top Rated</h3>
          <div className="flex gap-1">
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
          </div>
        </div>
        <div className="pl-10 flex flex-col gap-3">
          <h3 className="text-white font-bold text-lg">Popular Now</h3>
          <div className="flex gap-1">
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
          </div>
        </div>

        <div className="pl-10 flex flex-col gap-3">
          <h3 className="text-white font-bold text-lg">Action Movies</h3>
          <div className="flex gap-1">
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
          </div>
        </div>

        <div className="pl-10 flex flex-col gap-3">
          <h3 className="text-white font-bold text-lg">Documentaries</h3>
          <div className="flex gap-1">
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
            <ShowCase image_src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"></ShowCase>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
