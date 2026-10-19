"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutGrid,
  GraduationCap,
  Users,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Settings,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Bell,
  Mail,
  Calendar,
  Activity,
  UserCheck,
  Server,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { HaroLogo } from "../login/page";

export default function OverviewPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [usersOpen, setUsersOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-2 sm:p-6">
      {/* Outer Browser Frame Container */}
      <div className="w-full max-w-[1728px] h-[92vh] max-h-[1117px] bg-white rounded-xl shadow-2xl border border-neutral-300 overflow-hidden flex flex-col md:flex-row">

        {/* Left Sidebar */}
        <aside
          className={`${
            collapsed ? "w-16" : "w-64"
          } transition-all duration-300 bg-neutral-50/80 border-r border-neutral-200 p-4 flex flex-col justify-between shrink-0 select-none overflow-y-auto`}
        >
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center justify-between px-1 py-1">
              {!collapsed && <HaroLogo />}
              {collapsed && (
                <div className="w-6 h-6 rounded-full bg-[#1aa22a] mx-auto"></div>
              )}
            </div>

            {/* Portal Badge Card */}
            {!collapsed && (
              <div className="border border-neutral-200 rounded-md p-2.5 bg-white shadow-2xs text-xs">
                <div className="text-neutral-500 font-medium">Staff Portal</div>
                <div className="text-neutral-800 font-semibold flex items-center gap-1 mt-0.5">
                  <span>↳</span> Admin
                </div>
              </div>
            )}

            {/* Navigation Menu */}
            <nav className="space-y-1 text-xs">
              <Link
                href="/overview"
                className="flex items-center gap-3 px-3 py-2.5 rounded-md bg-neutral-200/70 text-neutral-900 font-medium transition-colors"
              >
                <LayoutGrid className="w-4 h-4 shrink-0 text-neutral-700" />
                {!collapsed && <span>Overview</span>}
              </Link>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-neutral-600 hover:bg-neutral-100 transition-colors"
              >
                <GraduationCap className="w-4 h-4 shrink-0 text-neutral-500" />
                {!collapsed && <span>Academic Setup</span>}
              </a>

              {/* Accordion for Users */}
              <div>
                <button
                  onClick={() => setUsersOpen(!usersOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 shrink-0 text-neutral-500" />
                    {!collapsed && <span>Users</span>}
                  </div>
                  {!collapsed && (
                    usersOpen ? (
                      <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                    )
                  )}
                </button>

                {!collapsed && usersOpen && (
                  <div className="ml-7 mt-1 space-y-1 pl-2 border-l border-neutral-200">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="block px-3 py-1.5 text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      Staff Accounts
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="block px-3 py-1.5 text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      Student Accounts
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-neutral-600 hover:bg-neutral-100 transition-colors"
              >
                <ClipboardList className="w-4 h-4 shrink-0 text-neutral-500" />
                {!collapsed && <span>Audit Log</span>}
              </a>
            </nav>
          </div>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-6 border-t border-neutral-200 text-xs mt-auto">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-600 hover:bg-neutral-100 transition-colors"
            >
              <Settings className="w-4 h-4 shrink-0 text-neutral-500" />
              {!collapsed && <span>Settings</span>}
            </a>

            <Link
              href="/login"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-600 hover:bg-neutral-100 transition-colors"
            >
              <LogOut className="w-4 h-4 shrink-0 text-neutral-500" />
              {!collapsed && <span>Log out</span>}
            </Link>

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors mt-2 bg-white"
            >
              {collapsed ? (
                <PanelLeftOpen className="w-4 h-4 shrink-0 text-neutral-500 mx-auto" />
              ) : (
                <>
                  <PanelLeftClose className="w-4 h-4 shrink-0 text-neutral-500" />
                  <span>Collapse menu</span>
                </>
              )}
            </button>
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="flex-1 bg-white p-6 sm:p-8 flex flex-col space-y-6 overflow-y-auto">
          {/* Header Row */}
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-100">
            {/* Breadcrumb */}
            <div className="text-xs text-neutral-400 font-medium flex items-center gap-1.5">
              <span>Dashboard</span>
              <span>&gt;</span>
              <span className="text-neutral-800 font-semibold">Overview</span>
            </div>

            {/* Search and Action Icons */}
            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs border border-neutral-200 rounded-md bg-neutral-50/50 focus:outline-none focus:ring-1 focus:ring-neutral-400 text-neutral-700"
                />
              </div>

              <button className="p-2 border border-neutral-200 rounded-md hover:bg-neutral-50 text-neutral-600 cursor-pointer">
                <Bell className="w-4 h-4" />
              </button>
              <button className="p-2 border border-neutral-200 rounded-md hover:bg-neutral-50 text-neutral-600 cursor-pointer">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Title Row & Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-normal text-neutral-900 tracking-tight">
              Portal overview
            </h1>

            <div className="flex items-center gap-2">
              <div className="relative">
                <select className="appearance-none bg-white border border-neutral-200 text-neutral-700 text-xs px-3 py-2 pr-7 rounded-md cursor-pointer focus:outline-none hover:bg-neutral-50">
                  <option>First Semester</option>
                  <option>Second Semester</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
              </div>

              <button className="flex items-center gap-2 bg-white border border-neutral-200 text-neutral-700 text-xs px-3 py-2 rounded-md hover:bg-neutral-50 cursor-pointer">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                <span>16 Oct, 2026</span>
              </button>
            </div>
          </div>

          {/* KPI Cards Grid - 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 rounded-lg p-5 flex flex-col justify-between min-h-[120px] shadow-2xs hover:border-neutral-300 transition-colors">
              <div className="flex items-center justify-between text-neutral-500 text-xs font-medium">
                <span>Active Users</span>
                <UserCheck className="w-4 h-4 text-green-600" />
              </div>
              <div className="mt-3">
                <div className="text-2xl font-semibold text-neutral-900">1,248</div>
                <div className="text-[11px] text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +12% from last semester
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-5 flex flex-col justify-between min-h-[120px] shadow-2xs hover:border-neutral-300 transition-colors">
              <div className="flex items-center justify-between text-neutral-500 text-xs font-medium">
                <span>Course Enrollments</span>
                <GraduationCap className="w-4 h-4 text-neutral-600" />
              </div>
              <div className="mt-3">
                <div className="text-2xl font-semibold text-neutral-900">3,820</div>
                <div className="text-[11px] text-neutral-500 mt-1">98% completion rate</div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-5 flex flex-col justify-between min-h-[120px] shadow-2xs hover:border-neutral-300 transition-colors">
              <div className="flex items-center justify-between text-neutral-500 text-xs font-medium">
                <span>System Health</span>
                <Activity className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="mt-3">
                <div className="text-2xl font-semibold text-emerald-600">99.9%</div>
                <div className="text-[11px] text-neutral-500 mt-1">All systems operational</div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-5 flex flex-col justify-between min-h-[120px] shadow-2xs hover:border-neutral-300 transition-colors">
              <div className="flex items-center justify-between text-neutral-500 text-xs font-medium">
                <span>Pending Audits</span>
                <Clock className="w-4 h-4 text-amber-500" />
              </div>
              <div className="mt-3">
                <div className="text-2xl font-semibold text-neutral-900">14</div>
                <div className="text-[11px] text-amber-600 mt-1">Requires admin review</div>
              </div>
            </div>
          </div>

          {/* Main Large Metric Box / Chart Card */}
          <div className="bg-white border border-neutral-200 rounded-lg p-6 min-h-[220px] flex flex-col justify-between shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-medium text-neutral-800">Academic Portal Engagement</h3>
                <p className="text-xs text-neutral-400">Monthly breakdown of student & staff activity</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1 text-neutral-600"><span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span> Students</span>
                <span className="flex items-center gap-1 text-neutral-600"><span className="w-2.5 h-2.5 rounded-full bg-neutral-300 inline-block"></span> Staff</span>
              </div>
            </div>
            {/* Visual Chart Bars Representation */}
            <div className="w-full h-36 flex items-end gap-3 pt-4 border-b border-neutral-100 px-2">
              {[40, 65, 55, 80, 95, 70, 85, 60, 90, 75, 88, 92].map((height, i) => (
                <div key={i} className="flex-1 h-full flex flex-col justify-end items-center gap-1 group">
                  <div className="w-full h-full bg-neutral-100 rounded-t flex items-end overflow-hidden">
                    <div
                      style={{ height: `${height}%` }}
                      className="w-full bg-green-600 group-hover:bg-green-700 transition-all rounded-t"
                    ></div>
                  </div>
                  <span className="text-[10px] text-neutral-400">M{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Split Row: System Health & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[260px]">
            {/* Left Box: System Health */}
            <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-lg p-6 shadow-2xs flex flex-col">
              <h2 className="text-lg font-normal text-neutral-900 mb-4">
                System health
              </h2>
              <div className="space-y-4 flex-1">
                <div className="flex items-center justify-between p-3 rounded-md bg-neutral-50 border border-neutral-100">
                  <div className="flex items-center gap-3">
                    <Server className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="text-xs font-medium text-neutral-800">Authentication Server</div>
                      <div className="text-[11px] text-neutral-400">OAuth2 & SSO Provider</div>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Operational</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-md bg-neutral-50 border border-neutral-100">
                  <div className="flex items-center gap-3">
                    <Server className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="text-xs font-medium text-neutral-800">Database Cluster</div>
                      <div className="text-[11px] text-neutral-400">PostgreSQL Primary Read/Write</div>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Operational</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-md bg-neutral-50 border border-neutral-100">
                  <div className="flex items-center gap-3">
                    <Server className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="text-xs font-medium text-neutral-800">Audit Logging Service</div>
                      <div className="text-[11px] text-neutral-400">High latency detected</div>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium">Degraded</span>
                </div>
              </div>
            </div>

            {/* Right Box: Recent Activity */}
            <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-lg p-6 shadow-2xs flex flex-col">
              <h2 className="text-lg font-normal text-neutral-900 mb-4">
                Recent activity
              </h2>
              <div className="space-y-3 flex-1 text-xs">
                <div className="flex items-start gap-3 pb-3 border-b border-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-neutral-800">User Role Updated</div>
                    <div className="text-neutral-400 text-[11px]">Admin granted access to Staff ID #4021</div>
                    <div className="text-neutral-400 text-[10px] mt-0.5">10 minutes ago</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-neutral-800">Semester Schedule Published</div>
                    <div className="text-neutral-400 text-[11px]">Academic setup synced with portal</div>
                    <div className="text-neutral-400 text-[10px] mt-0.5">1 hour ago</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-neutral-800">Failed Access Attempt</div>
                    <div className="text-neutral-400 text-[11px]">3 invalid login attempts flagged</div>
                    <div className="text-neutral-400 text-[10px] mt-0.5">3 hours ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
