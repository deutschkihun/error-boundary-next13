// React Error Boundary with Next.js

"use client";

type ErrorType = {
  error: Error;
  reset: () => void;
};

const error = ({ error, reset }: ErrorType) => {
  return (
    <main className="grid min-h-full px-6 py-24 bg-gray-900 place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-emerald-700 dark:text-emerald-500">
          There was a problem
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-zinc-100">
          {error.message || "Someting went wrong"}
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Please tty again later or contact support if the problem happens
          again.
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <button className="btn btn-primary" onClick={reset}>
            Try again
          </button>
          <button className="btn btn-accent">
            <a className="no-underline link" href="/">
              Go back home
            </a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default error;
