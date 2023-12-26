"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Calendar,
  Button,
} from "@/components";

export const DatePicker = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild className="sm:block hidden">
        <Button
          variant="outline"
          className={cn(
            "justify-start text-left  border-0 w-auto px-0 py-0 h-auto text-normal font-medium "
          )}>
          {date ? format(date, "PPP") : <span>Any Week</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          
        />
      </PopoverContent>
    </Popover>
  );
};
