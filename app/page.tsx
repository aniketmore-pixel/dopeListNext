"use client";
import { signInAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import dlLogo from "@/public/logo/dllogo.png";
import clsx from "clsx";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useFormStatus } from "react-dom";

export default function LoginForm() {
  return (
    <main className="relative bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-600 h-full min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/abstract-pattern.jpg"
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-40"
        />
      </div>
      <div className="container mx-auto py-12 md:px-10 flex flex-col items-center justify-center relative z-10">
        <div className="flex items-center justify-between w-full mb-8">
          <Link className="flex items-center gap-2" href="/loggedin">
            <Image
              src={dlLogo}
              width="50"
              height="50"
              alt="logo"
              className="h-16 w-20"
            />
            <h1 className="text-3xl font-bold md:text-5xl">DopeList</h1>
          </Link>
          <div className="hidden lg:flex items-center">
            <form action={signInAction}>
              <GoogleSignInButton />
            </form>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400 animate-text">
            Your Todo List <br className="hidden lg:inline-block" />
            Done Right!
          </h1>
          <h2 className="text-2xl md:text-3xl font-light">
            <span className="font-semibold">Organize your tasks</span> and
            <br className="hidden lg:inline-block" />
            <span className="font-semibold">stay on top</span> with ease.
          </h2>
        </div>

        {/* Testing Note */}
        <div className="text-center mb-12 p-4 bg-gray-800 rounded-lg">
          <p className="text-lg font-medium">
            To test this website, you can use the email{" "}
            <span className="font-semibold">testingdopelist@gmail.com</span> and
            password <span className="font-semibold">dopelist@123</span>, or use
            your own email.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 mb-12">
          <form action={signInAction}>
            <GetStartedButton />
          </form>
          <Button
            className="text-xl px-8 py-4 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-purple-900 transition-colors duration-300"
            variant={"outline"}
          >
            <a
              href="https://github.com/aniketmore-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xl px-8 py-4 bg-transparent border-2 border-transparent rounded-full hover:border-white hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Give me a star on Github ⭐️
            </a>
          </Button>
        </div>

        <footer className="mt-12 flex flex-col items-center border-t border-white pt-6 text-center">
          <div className="mb-4">
            Powered by{" "}
            <a
              href="https://convex.dev/c/todovex"
              target="_blank"
              className="font-semibold text-pink-400 hover:text-pink-300 transition-colors duration-300"
            >
              Convex
            </a>
          </div>
          <div className="flex space-x-6">
            <a className="group" aria-label="Instagram" href="https://x.com/">
              <svg
                aria-hidden="true"
                className="h-7 w-7 fill-gray-200 group-hover:fill-blue-400 transition-colors duration-300"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"></path>
              </svg>
            </a>
            <a
              className="group"
              aria-label="GitHub"
              href="https://github.com/aniketmore-pixel"
            >
              <svg
                aria-hidden="true"
                className="h-7 w-7 fill-gray-200 group-hover:fill-gray-800 transition-colors duration-300"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function GetStartedButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="relative flex items-center justify-center px-8 py-4 mb-2 bg-gradient-to-br from-pink-500 to-yellow-500 text-white font-semibold text-xl rounded-full transition-transform transform hover:scale-105"
    >
      <span className="flex items-center gap-2">
        {pending ? <Loader className="w-6 h-6" /> : "Sign in with Google"}
      </span>
    </button>
  );
}

function GoogleSignInButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
    >
      <span
        className={clsx(
          "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",
          pending && "px-16"
        )}
      >
        {pending ? (
          <span className="">
            <Loader className="w-5 h-5" />
          </span>
        ) : (
          "Sign in with Google"
        )}
      </span>
    </button>
  );
}
