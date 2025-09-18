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
    <main className="relative bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 h-full min-h-screen text-white overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0">
        <Image
          src="/abstract-pattern.jpg"
          alt="Background pattern"
          fill
          className="object-cover object-center opacity-20"
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto py-12 md:px-10 flex flex-col items-center justify-center relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between w-full mb-12">
          <Link className="flex items-center gap-3" href="/loggedin">
            <Image
              src={dlLogo}
              width={50}
              height={50}
              alt="logo"
              className="h-16 w-20"
            />
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              DopeList
            </h1>
          </Link>

          <div className="hidden lg:flex items-center">
            <form action={signInAction}>
              <GoogleSignInButton />
            </form>
          </div>
        </div>

        {/* Hero section */}
        <div className="text-center max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-500 animate-text">
            Your Todo List <br className="hidden lg:inline-block" />
            Done Right!
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-100">
            <span className="font-semibold">Organize your tasks</span> and{" "}
            <br className="hidden lg:inline-block" />
            <span className="font-semibold">stay on top</span> with ease.
          </h2>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <form action={signInAction}>
            <GetStartedButton />
          </form>

          <Button
            className="text-lg px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-purple-900 transition duration-300"
            variant="outline"
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

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center border-t border-white/30 pt-6 text-center text-sm text-gray-200">
          <div className="mb-4">
            Powered by{" "}
            <a
              href="https://convex.dev/c/todovex"
              target="_blank"
              className="font-semibold text-pink-300 hover:text-pink-200 transition-colors duration-300"
            >
              Convex
            </a>
          </div>

          <div className="flex space-x-6">
            <a className="group" aria-label="Twitter/X" href="https://x.com/">
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-gray-300 group-hover:fill-blue-400 transition-colors"
              >
                <path d="M8.29 20.251c7.547..."></path>
              </svg>
            </a>
            <a
              className="group"
              aria-label="GitHub"
              href="https://github.com/aniketmore-pixel"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-gray-300 group-hover:fill-gray-900 transition-colors"
              >
                <path d="M12 2C6.477 2..."></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* Buttons */
function GetStartedButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="relative flex items-center justify-center px-10 py-4 bg-gradient-to-br from-pink-500 to-yellow-500 text-white font-semibold text-xl rounded-full transition transform hover:scale-105 shadow-lg"
    >
      {pending ? <Loader className="w-6 h-6 animate-spin" /> : "Sign in with Google"}
    </button>
  );
}

function GoogleSignInButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 transition"
    >
      {pending ? <Loader className="w-5 h-5 animate-spin" /> : "Sign in with Google"}
    </button>
  );
}
