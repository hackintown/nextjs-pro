"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button";
import { cn } from "@/components/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/Navbar/navigation-menu";
import { NavigationItems } from "./constant";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white border-b-gray-200 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="font-semibold text-xl">
          Hackintown
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:block">
          <NavigationMenu
            style={{
              zIndex: 1000,
            }}
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-row">
                  <div className="w-min">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-start rounded-md rounded-r-none border-r border-r-gray-200 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="text-[#13182C] text-[25px] font-bold mb-4">
                          Custom software development services
                        </div>
                        <Button className="h-10 rounded-lg">
                          All Services
                        </Button>
                      </a>
                    </NavigationMenuLink>
                  </div>
                  <ul className="grid w-[400px] gap-2 p-1 md:w-[500px] md:grid-cols-3 lg:w-[600px] xl:w-[700px]">
                    <ListItem href="/docs" title="Web Development">
                      With impeccable precision through our web development
                      services; marked by technical supremacy to create a robust
                      two-way handshake.
                    </ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Application Development"
                    >
                      We are a leading web application development company that
                      offers a fully functional…
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Technology Audit And Consultancy"
                    >
                      Transform how you use technology to achieve your business
                      objectives…
                    </ListItem>
                    <ListItem href="/docs" title="Web Development">
                      With impeccable precision through our web development
                      services; marked by technical supremacy to create a robust
                      two-way handshake.
                    </ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Application Development"
                    >
                      We are a leading web application development company that
                      offers a fully functional…
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Technology Audit And Consultancy"
                    >
                      Transform how you use technology to achieve your business
                      objectives…
                    </ListItem>
                    <ListItem href="/docs" title="Web Development">
                      With impeccable precision through our web development
                      services; marked by technical supremacy to create a robust
                      two-way handshake.
                    </ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Application Development"
                    >
                      We are a leading web application development company that
                      offers a fully functional…
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Technology Audit And Consultancy"
                    >
                      Transform how you use technology to achieve your business
                      objectives…
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Technologies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {NavigationItems.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/digitalproducts" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-base")}
                  >
                    Digital Product
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {NavigationItems.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-base")}
                  >
                    Hire Developer
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button>Start a Project</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-green-500 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <Link
            href="/services"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Services
          </Link>
          <Link
            href="/technologies"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Technologies
          </Link>
          <Link
            href="/digitalproduct"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Digital Product
          </Link>
          <Link
            href="/company"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Company
          </Link>
          <Link
            href="/hire-developer"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Hire Developer
          </Link>
          <div className="px-4 py-2">
            <Button>Start a Project</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-primary",
            className
          )}
          {...props}
        >
          <div className="text-normal font-medium leading-none">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
