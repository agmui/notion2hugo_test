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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C74N5WU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwmnUVeUyJs1pc1mZdX8cEZYHzW%2F1WG%2B0JIoww0eziHwIgLFxd5PR5itY7evc4Iy9M5Qwz7Vv4xcf4zs02WVTBjs8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDjW%2FVOTcwGlXmCnYSrcA%2FwcDRLrpLoFkG0ErNI%2B47836aNkEOGxU0jlvpaqwYWrebe3ToQkdO9YWD8SuWA5sOgNGTbLCbeknxBhNoiwVo6axYWGRE4KvjGEKhR8ejslxC5mybMGfHLSwIt4EGcWP6MOAix8C043cPdVUGzuI7MpJ%2FOhCHrEZnGOfEKOeYtarXFYOL%2Bgt096a5ZcalNN8nan4H5DuhiBwQAUXlkMkuGdn5trDIV48Q3O8TNSnmJOhjpi5bQKKHFOfSCGY1nYCTVz9F4aiFkHVOZJ1cE%2BSYUB8FtV1ar0esRBma9TbLgXcPuwQgcIRuamiWLFd8KIqzxVdEYAXTL0GVTA%2FYel2nF4owPQYLhAdzpf07DkTjzc419eJ0HpNxFpJZXtAKemK8T4xqg396CKJBNGy9r1e2xV8%2BjBUnhFT34%2FbZdYFnydgoADvSgNSf1K8hY3VcYt7LTQEcZ%2BPItz1xBNGloaDzsMtWHhhOoyBTHpGWMBgU5AoemIcK4fW1gDgUwt1qjHgft5i%2FyG2RUFzJ8intjgRuRtUmNBQdk6q8Y64hBSYAUdqBzOxPZhfXUlXbTUwxWD7iWYtTOH3kAB48vkdzL6INisb6z4QF%2B5YjxrJMbQMwGBRow7CrPdiFxTzsAuMK3%2ByL8GOqUBunQTYTMR0VYd7C34UY8qAWhJMNTB5V%2FwA0OFIVFxpROHgMTix0mdT%2Fb0vlnxgb%2FuioF7ty%2FZGOuvAezwQonr8RRoovHgQDpiP0Fny9w8Xah7MWlpqViWiN1S%2F429her%2FXSMHaWRX6I3m2grEH03HAl5nG3jCrlRlqFiITqTpg99gQPngRFTyVFu9VrUH6x7cQYbNtA%2Bl1ChBC%2BRlAAOawDmg7qc3&X-Amz-Signature=d4bd25f2b71b28d676baa95fbabfaf2781533b98989705c11ca1315f96f27d34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEH2EWB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdO8v%2FcuKhuALCQ0r6F3%2Ba7wIo0BMNjf9jM6uqMBdqSgIgTcY4UPV2syOXtMQw6Z4JchPypvhSO8gMmN6rrloUsFgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDI38I6hQFd7%2BCqYUtircA6q8sTsyhht%2FUkDqclJYnUFemqzDf8PV96%2FSADSQWwRVM84B4f%2BcX5BQ4aYqvzwbdBKphy0JH4ANtUPxuCQa86UcbLmupXZviGqjy%2BPV%2FWQlHUNIpmr742sY7sR9fauLvJFDYoX5%2FecXT8oWyRtz968Oj%2BsOlqotTSFhHD0iwFvN59ZjuVnE7ujXSGUa0LFRzsTtq5WyOrd28qZGj8Exy5Zvd4Yv5wLoaOPPP%2BaUiPoYzyLXj2HaGSb9Bu1qE3p%2Fp55sOhVrykRhMqDRI0tXHnCbq%2FUgxr%2FSELgsQBNmke0L1Mm%2FA2OvXjlulrXFSLN8u7FXnB3A6ovSNHw0uYGdr6cgxP%2BSeHPSs0diNp2%2BWWTWaX4eHLDAymRrHVSJLEJ8eDZrj2NMJ8tKFiUN89JzBcA%2BDYxFnVLXUSEycOyfeCk3VBn6GDhkc78eiT14XQJWtDKs%2F0sEIjkcCVcu3Ozu6KAPgsH416Dfsu0aq3AvcyonyiInOcTqQFzmIF6UyEOoTcmG%2BF%2FX4Avz34DUQR9Yp%2FBHATz7r5QgtizKFoNRL2J1oe3a2dz8ZSuZ40KV7h17N47DtjZRGQg2THyo0apyj6GymNlmeefNcDa5PYM91NCVIlKNm7dRQ82gHlZNMMX%2FyL8GOqUB9HAvEZ1P0WRafa%2FaPrM%2FpMXwtYZr7V9WW1QgB0AfEHTPtNln4bIXgQwAfa5wSQmQA49u9qWUgaCTDJSzV4IDw932rwOKOflaiSX7lyB3I%2FwtFbBckJKgFeW3VvMxauoqZRnrNxxIzb16xVsWT%2BCAin6e0LRlyO4AHqjIMJ0GDCNQcwiyOeaCNb0ilDA88H3sTsWUOBDisR3auTZiEe0jIOPmZV84&X-Amz-Signature=7065e8ebb53f55ee73f6074c24e993cbf2d0d3f3e02f87a0a7b2798741abc6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
