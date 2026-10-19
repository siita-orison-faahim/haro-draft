"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { HaroLogo, LeftAbstractBg } from "../login/page";
import { Loader2 } from "lucide-react";

export default function LoginLoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/overview");
    }, 1500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[1280px] bg-white rounded-xl shadow-2xl overflow-hidden min-h-[720px] flex flex-col md:flex-row">
        {/* Left abstract column */}
        <div className="w-full md:w-1/2 border-r border-neutral-200 hidden md:block relative">
          <LeftAbstractBg />
        </div>

        {/* Right loading state column */}
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

          {/* Center Loading Card */}
          <div className="w-full max-w-xs mx-auto my-auto flex flex-col items-center justify-center">
            <div className="w-full bg-white border border-neutral-200 shadow-md rounded-lg p-8 flex flex-col items-center justify-center space-y-4 text-center">
              <Loader2 className="w-5 h-5 text-neutral-600 animate-spin" />
              <span className="text-xs font-medium text-neutral-700 tracking-tight">
                Authenticating Role...
              </span>
            </div>
          </div>

          {/* Empty spacer for vertical balance */}
          <div className="h-6"></div>
        </div>
      </div>
    </div>
  );
}
