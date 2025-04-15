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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSG6TX4X%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOEJYuT8ChkQo4YKmWDy9drn9l1vadzyzWgMBVEnh4GAiEA%2B%2B4Yl6PFEWeF5cgGip3mKM%2BDGInCQjgF%2FpvL3NzcmHoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFOLp80jCsi4yd%2BisSrcAyrEe3FCml%2BOpOk7NJqUXgw5PlN%2Boujve4hyXnGNt6fuVzPOUbCMmb3ddA%2F0NJ%2Fl5k1i%2ByjD%2B97XorI8elDOPyeVImjWpFDhYLFYxIcgO7SWwAzC0ayEh8jKW1IgVPmhmyhhNVPW5pRO1qBw6uStKuG9kbyVe%2B%2Fp1qNnXqzeCJNOmTvqZZEHW%2FKzY5YSohgKtfxUhZ1C%2F%2F6AbGGlTgYQQcmKfDd2pDrP488kEhewbK0V7oOwLKNYR3mIEoDiwyT%2Fb02pNY9%2FdEsjNR9xJJOExSZ2HwDOEwJBoV7yVsr6iu0FAD5Ruqpcr1SrJfx941dCJA%2B20RoI2YRWt%2BijYumB1QEpXTvGOL%2BX%2BJsyACgcTqNtEYe%2BWLwfAluB9b%2FIJl76eoWnCNmITFRcDEhtf3IZhtci%2F%2Bpj3U8OOJAQObRfSRsZ%2BEcyxbMZfvBOGoF7NXWmXyRC5PXNWerU6GtsFV7h0ebMxdxi2b53ghKAKSB80h3Sig349HE1j9Lp3SjMh9JozOkG%2BXisF8TuLgWLoffRnUAKb0LvzcNH0zSNLFfzO9Os6NKVXgMjVG%2B94JDar9cJ9a7crEMxkX%2Faz7Hro26W6Mhr%2FroRWaW46KUwQUaosRXilVXPJakIUkOB7FBeMNCB%2BL8GOqUBcofEz55xyi2jLLxyrzblECfnyGHFlOWmphN6T3bYWokWnH1XQF0RcILi5p%2FN9RHSj%2FImTNszgeDItUfEKRZc2MQUduPIbnxAnkghQQMwm80YRyUvJEqjrfaAgscBDkJ8X6hR9bmbFP2ECGkue3Vqm0IjMGGPt1yMbRNkbqZyr6%2BmoA2baaQsdd%2BYCmNC21l2%2FLIEncim9MOzzAewcmiGYrVZ6xMA&X-Amz-Signature=cbc76275b33abff2c897536f4de85ec86a0a012f407c0134141ff78b4383f308&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJSGKML7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBICjDCZO4T14199m90JDJWLJzzoRuKV1Nr49YhU5rnEAiEAl0uKwk%2B2UPJsdlpqGYcsuciuMUVIx1ywBijTI%2FuUAQIq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJkjHCM2oGJhHda7kCrcAxIvAzcdOUNY3YPDM4xIUmAjg6wGbgveXkbgQBBGR00LAeNtF7uEmNo%2B%2BQxTfpPj8B3TDddjeRmytYcBY0pPhhMg%2BuRGbmhy02gpPpJya6Jo6MuXv%2BjVxjVpUckWbq%2Fje9c3I%2BhDqOo75mIpgfbMhTN95%2Fvi31wHGmIq1hajtRYBW6%2BH3OnkiLpRglvBQgcnI4S7oZgQB%2Fh1O6Vo9rTRi88tejtVh3ky1gCmcTnXewhNhhtSDNiau4Lxk%2B7z3g8lazg1PhG9yQBJ9OPwQcIKYzr26SopG4ebA7LkuUBYtBk4w5QR75jFgUtp6wqdJulDpThiHq2ZJd1cDufZ%2BxtCD3MgsFOICNWqLvVREiXC0uWajGM0Cr3S9N8qiycBuKUmE6N9YsNkWFnr1VmRDQ0QQ0U0HnidpzA8nkTskHpMGKWQZqwN4WtFQpzQBcyGNdxw4c5MHCH9LiuNC6TFO6oUDb4bbjF526Y9zwH2gYg1oPDEAML9nFAOcKT1gFb0dtKiGl4Mahj%2FQalfNn8vhx7ND%2B7mks92iCQcWbbxHNRkaAsI%2BBrC26WWjr%2BCCg6O3TpYulgpNSPjrbz1tkiNmMvO294TcPRbMDQhSOzZg9FbWuF4SXALsGcogkhQPfoVMK2C%2BL8GOqUBrq8XDdClmxB%2Bb0sIhl3nEy8PcdWtOcgIYcUq35iLclURKa0stv%2FBzbPeqF19aZ5oBxfAj8h%2FSPGKKYshwSOSSdWwi9F%2BOWRkSS%2BgSbw22kApnoHyzQ7TloC6XF9pqMm1uZAl2B8Up4k6oVgO%2B2gVqTpeqP6A7u8BUACQmVU5cYZ7XfQlQ93gTgUGopjhAx15%2BFJg1zqAQqXWdWstuUl05H7CHIk1&X-Amz-Signature=bb5cc0e3f5eec6a985fd268667c34f0eb76aa0333db17035db28e8c2f934ddf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
