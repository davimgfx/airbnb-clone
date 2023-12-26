"use client";

import {
  Container,
  Logo,
  DatePicker,
  LocalPicker,
  GuestPicker,
  Button,
} from "@/components";
import { Search, UserMenu } from "./partials";

export const Header = () => {
  return (
    <header className="fixed w-full bg-white z-10 shadow-md">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0 ">
            <Logo />
            <div
              className="flex sm:flex-row gap-4 sm:justify-start items-center border-[#DDDDDD] border-2 px-4 py-2 rounded-full sm:w-auto w-[40rem]  flex-row-reverse justify-end"
              data-testid="search-bar">
              <LocalPicker />
              <span className="w-[1px] h-7 bg-[#DDDDDD] sm:block hidden" />
              <DatePicker />
              <span className="w-[1px] h-7 bg-[#DDDDDD] sm:block hidden" />
              <GuestPicker />
              <Button variant="secondary" className="w-auto h-auto px-0 py-0">
                <Search />
              </Button>
            </div>
            <div className="flex items-center gap-4" data-testid="userMenu">
              <h2
                className="text-sm hidden
            lg:block">
                Airbnb your home
              </h2>
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
