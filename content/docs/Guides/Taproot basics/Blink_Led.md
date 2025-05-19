---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIO57HH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR8P8s2u2MTmOuem1FAI1nev70qMdd1bUFgxWPTAq4GwIhAN%2Bgqs%2BJuivbkNr55tj4oI2TKc8qLVZi98DQ7poEz0cTKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJwhBRFw2Cq55LpJsq3ANPShryVjnBhHsJMzucfPRIY4b2O8qqN9f1HdKs8hsf1N1ZoY8EKLKHjH3uXJfFp%2F1km8RGasZUHIt0VgSi5GiVGagAvi8teCirp150HT6KnKJYCrlOtoEW9U66BZI19OFFivlgwpjoLm9C7eiZQyM7yQ6mCJeaQHFPXHkKgCZAQzhazd5Seb%2BO0oEsoIv%2FdABjZ0IzlgRH1FXCFzFN%2FudOI4y8bOZN5CMMlR9TgUGOfzE9QBfmK3oC7Tlfs1HoBj43XsDbDDKkaPS9AYyQhIUA1%2BbhL%2BqfXPd2CSIILq7dl2ArKhUJ6XBc1Pgd0nRdTZASdUJvv2DsEjtcwwC5LygevGPM5ew%2B0c6fw%2BbOnXENqbRLJJTYiUZviMFGTYRhaFvkZfk46XcWrQRE5dM2GaK5C9S%2FQarAIgKaOLSjxTL3nzxAyzMKLQjlYSzOtSu1enzFCXUGNTZFuRADRnu4h368IqrXPggLee%2BIwzy%2BLNAKw6Ka6ERvhFPCutjOo10FbwjSDQ%2FnQorr22jsZRCCKgIy12ZgM3b485S1uZkZgB0tJxtr0DPDgSiGNMGSMCutljSl2DRHFqszVEzXMMGuSbAm%2BPt6IXN%2FFeK9WdH7wHk271DBw2iuYcQZacw51DCxuavBBjqkARkue2Pxo%2BKjP0Kpbr5%2FAyr7Le6Z1XJecfAOr0eWhfIyRYGvSGa2xF%2BsxB1QTu%2BtWw%2B5ZuLHmDe918s9jxV1FFp2K4EYFeqxfSclCjpCWYvloZXBFFVhg1RTPYlarIHshiqyzZi22gYc%2Bmyw0NKxN4TUf%2BgwbSVbZjbQ3EQ2hMbBIXkOZv%2FMvH0bJTz%2BMVsMe%2FuPz9t4g7yMOcosCA3TOMunxDYq&X-Amz-Signature=b97e37ce4adf337637ff0034a2d57f06fa3b358bc2f2066af92244a6d775a0e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WUZQMY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1ZVL6stNMnRKzMEAat6C%2FOGtxRzL%2Fwfrtn6BKZGz6OgIgTJAKAjxDvIOm5bW2LrP6pNFJzvBCEvzEphAwyLxCUgkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr4AuqA%2FwwDA42rnCrcAx%2FepT5wyE%2FiddD2zI6ub3FLolKqGKfep6RQ8VypEMrpDuIsi%2FV%2Bmnj2IihemvEUZ30NXiNkQZhnLkzfpa09r2GQa4h4xXweOLwXY%2BISsthgRaz2hwKERvWyAU%2B%2Fi%2FRGIE6uK%2Bygrz%2BKgulMQwYxB9ZPifjBNqPvp3bLR8ERtQ5ApeAnuiDuvO8DD3KhmTClOGTKn%2FOiJPX77xOjyZY%2FFiWOpiEMJx%2B3DQNgLYVFKkr9RgM1Ely7L7aJw7II5zNTePY2FV6xkbce696wxI6raSYqYIiyK8YAWLZ5E%2F9Duyr2DS6w9NEaLKBAzp4BxS9ZZGiIIx3jypq1pkOdcs5YQOtsQ75VGqK2UG2U31Q3VfFJiQJnAAp9Z05X1iJPa6hu8zt8OEZyU0WEpigDNTxf3fVzLRPEN9Zfb0PyoEPZFuvJu7lKLcPMe%2FzLSvGKtDrHUy5wXQ3Rj7Rl6qqsCd%2FOmtzN9eMLdpt9lwrYCIO9AUe1y86G2wysUvr%2FsrfsBQtYuus0l7wsOCNEarjLKDF7iTRplXc8%2BG5GsCUGt8zNRGQJ4wflEwYyVT1vpSTWZX0%2FXOqXKkGhiUSxzZqI0nzUch6%2Fc94MrMwDuyyUg3h7BzbHIkQadKGH%2FwU1miFxMPu5q8EGOqUBxQF0Ck1riqvJ5KZV5FzSVS46GFVdkE4CFL%2FUDLLp8m134IU0HDAAebEmbSXx1M9Fn4AWGg16JjqLFN4LNlg%2Fnj1%2FFZY%2FYt4f5Z01HAq6LOB6Er%2F%2FJgyyC681TNrkOwOibSXqzWvNJX5wUMjIXs5z2zORsi06MeQxAgj7sberYfiFEJ%2BMfnXRNJXSQ9SNa%2FKfR5%2BZPQB1pTQB%2ByOCqFGQkxs9KZ%2B6&X-Amz-Signature=b96d8be91cf33131846ed9842c543d28d5fd8b9a65dd85aefb7e2c15983a1626&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
