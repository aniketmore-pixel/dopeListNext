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
      {/* Background overlay */}
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

      {/* Content container */}
      <div className="container mx-auto py-12 md:px-10 flex flex-col items-center justify-center relative z-10">
        {/* Navbar */}
        <div className="flex items-center justify-between w-full mb-12">
          <Link className="flex items-center gap-3 hover:opacity-90 transition" href="/loggedin">
            <Image src={dlLogo} width={55} height={55} alt="logo" className="rounded-lg" />
            <h1 className="text-3xl font-extrabold md:text-5xl tracking-tight">
              DopeList
            </h1>
          </Link>
          <div className="hidden lg:flex items-center">
            <form action={signInAction}>
              <GoogleSignInButton />
            </form>
          </div>
        </div>

        {/* Hero Card */}
        <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center border border-white/20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">
            Your Todo List <br className="hidden lg:inline-block" />
            Done Right!
          </h1>
          <p className="text-lg md:text-2xl font-light mb-10 text-gray-200 leading-relaxed">
            <span className="font-semibold text-white">Organize your tasks</span> and{" "}
            <span className="font-semibold text-white">stay on top</span> with ease.
          </p>

          {/* Call-to-action */}
          <div className="flex flex-col items-center gap-6">
            <form action={signInAction}>
              <GetStartedButton />
            </form>
            <Button
              variant={"outline"}
              className="group text-lg px-8 py-4 rounded-full border-2 border-white/60 bg-white/10 hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              <a
                href="https://github.com/aniketmore-pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                ⭐️ Give me a star on Github
              </a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center border-t border-white/20 pt-6 text-center text-gray-200">
          <p className="mb-3">
            Powered by{" "}
            <a
              href="https://convex.dev/c/todovex"
              target="_blank"
              className="font-semibold text-pink-400 hover:text-pink-300 transition-colors"
            >
              Convex
            </a>
          </p>
          <div className="flex space-x-6">
            <a
              aria-label="X (Twitter)"
              href="https://x.com/"
              className="hover:scale-110 transition-transform"
            >
              <svg
                aria-hidden="true"
                className="h-7 w-7 fill-gray-300 hover:fill-blue-400 transition-colors"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
              </svg>
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/aniketmore-pixel"
              className="hover:scale-110 transition-transform"
            >
              <svg
                aria-hidden="true"
                className="h-7 w-7 fill-gray-300 hover:fill-gray-900 transition-colors"
              >
                <path d="M12 2C6.477 2 2 6.484..." />
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
      className="relative flex items-center justify-center px-10 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold text-xl rounded-full shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform duration-300 disabled:opacity-70"
    >
      {pending ? <Loader className="w-6 h-6 animate-spin" /> : "🚀 Get Started with Google"}
    </button>
  );
}

function GoogleSignInButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:shadow-lg hover:scale-105 transition-all disabled:opacity-70"
    >
      {pending ? (
        <Loader className="w-5 h-5 animate-spin" />
      ) : (
        "Sign in with Google"
      )}
    </button>
  );
}
