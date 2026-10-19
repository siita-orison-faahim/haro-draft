"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function HaroLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center -space-x-1">
        <div className="w-5 h-5 rounded-full bg-[#1aa22a] opacity-90"></div>
        <div className="w-5 h-5 rounded-full bg-[#128a20] opacity-80"></div>
      </div>
      <span className="font-semibold text-lg tracking-tight text-neutral-900">
        Haro V1
      </span>
    </div>
  );
}

export function LeftAbstractBg() {
  return (
    <div className="relative w-full h-full bg-[#f4f4f6] overflow-hidden flex items-center justify-center min-h-[500px]">
      <svg
        className="absolute w-[140%] h-[140%] text-neutral-300 stroke-neutral-300 fill-none"
        viewBox="0 0 500 500"
        strokeWidth="1.5"
      >
        <circle cx="100" cy="180" r="160" className="stroke-neutral-300/70" />
        <ellipse cx="220" cy="150" rx="130" ry="190" className="stroke-neutral-300/80" />
        <circle cx="350" cy="220" r="180" className="stroke-neutral-300/60" />
      </svg>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/login-loading");
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[1280px] bg-white rounded-xl shadow-2xl overflow-hidden min-h-[720px] flex flex-col md:flex-row">
        {/* Left abstract column */}
        <div className="w-full md:w-1/2 border-r border-neutral-200 hidden md:block relative">
          <LeftAbstractBg />
        </div>

        {/* Right login form column */}
        <div className="w-full md:w-1/2 p-6 sm:p-12 flex flex-col justify-between bg-white min-h-[640px]">
          {/* Header row */}
          <div className="flex items-center justify-between w-full">
            <HaroLogo />
            <div className="border border-neutral-200 rounded-md px-3 py-1.5 text-right text-xs bg-white shadow-2xs">
              <div className="text-neutral-500 font-medium">NTC, Sandema</div>
              <div className="text-neutral-800 font-medium flex items-center justify-end gap-1">
                <span>↳</span> Staff Portal
              </div>
            </div>
          </div>

          {/* Main Form Box */}
          <div className="w-full max-w-sm mx-auto my-auto py-8">
            <h1 className="text-xl font-normal text-center text-neutral-800 mb-8">
              Log in to Haro V1
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Label<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="placeholder"
                  className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600 bg-neutral-50/30 text-neutral-800 placeholder-neutral-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Label<span className="text-red-500">*</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="placeholder"
                  className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600 bg-neutral-50/30 text-neutral-800 placeholder-neutral-400"
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center text-neutral-600 cursor-pointer gap-1.5">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={(e) => setShowPassword(e.target.checked)}
                    className="rounded border-neutral-300 text-green-600 focus:ring-green-500"
                  />
                  <span>Show password</span>
                </label>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-green-600 hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#1ba42c] hover:bg-[#168a24] text-white py-2.5 px-4 rounded-md text-sm font-medium transition-colors shadow-2xs cursor-pointer"
              >
                Click to login
              </button>
            </form>

            <p className="text-center text-xs text-neutral-600 mt-6">
              Having issues accessing your portal?{" "}
              <a href="#" className="underline font-medium text-neutral-800">
                Contact IT
              </a>
            </p>
          </div>

          {/* Empty spacer for alignment */}
          <div className="h-6"></div>
        </div>
      </div>
    </div>
  );
}
