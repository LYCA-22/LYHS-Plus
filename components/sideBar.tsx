"use client";
import React, { useState, useEffect } from "react";
import { Dock, DockIcon } from "./ui/dock";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { icons } from "@/components/icons";
import Image from "next/image";
import { ThemeToggle } from "@/components/themeToggle";
import Link from "next/link";
import { useAppSelector } from "@/store/hook";

export function SideBar() {
  const [theme, setTheme] = useState("");
  const [path, setPath] = useState("");
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const IsLoggedIn = useAppSelector((state) => state.userData.isLoggedIn);
  const version = process.env.NEXT_PUBLIC_APP_VERSION;
  const time = process.env.NEXT_PUBLIC_BUILD_TIME;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 640px)").matches);
    };

    // 初始檢查
    checkIsMobile();

    // 監聽視窗大小變化
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
    // 可以加入對主題變化的監聽
    const html = document.querySelector("html");
    const observer = new MutationObserver(() => {
      if (html?.classList.contains("dark")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });

    observer.observe(html!, { attributes: true });

    // 初始化主題
    if (html?.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setPath(pathname || "");
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  if (isMobile) {
    return <></>;
  }

  return (
    <div className="flex justify-between flex-col items-center p-3 py-7 min-w-32">
      <Image
        alt="logo"
        src={`${theme === "dark" ? "/logo-light.svg" : "/logo.svg"}`}
        width={40}
        height={40}
      />
      <Dock
        direction="middle"
        className="rounded-full flex flex-col bg-background"
      >
        <DockIcon>
          <Link href="/">
            <div className="hover:bg-hoverbg p-4 rounded-full">
              {icons["home"](path)}
            </div>
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/news">
            <div className="hover:bg-hoverbg p-4 rounded-full">
              {icons["news"](path)}
            </div>
          </Link>
        </DockIcon>
        <DockIcon>
          <div className="p-2 m-2 rounded-full bg-foreground hover:opacity-75">
            {icons["star"]()}
          </div>
        </DockIcon>
        <DockIcon>
          <Link href="/lyca">
            <div className="hover:bg-hoverbg p-4 rounded-full">
              {icons["lyca"](path)}
            </div>
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/apps">
            <div className="hover:bg-hoverbg p-4 rounded-full">
              {icons["apps"](path)}
            </div>
          </Link>
        </DockIcon>
      </Dock>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="p-3 rounded-full hover:bg-background ring-0 outline-0">
            {icons["more"]()}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <p className="m-1">系統主題</p>
              <ThemeToggle />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>設定</DropdownMenuItem>
            <DropdownMenuItem>我的帳號</DropdownMenuItem>
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  系統資訊
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>LYHS Plus App 系統資訊</DialogTitle>
                  <DialogDescription>
                    <p className="m-1">目前版本：{version}</p>
                    <p className="m-1">發佈時間：{time}</p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <DropdownMenuItem>{IsLoggedIn ? "登出" : "登入"}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
