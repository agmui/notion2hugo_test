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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBQOSXXL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCweU5HpZEnQnRe5svJDehfuyzR8Qiv7%2BWPD7GJTXAz7AIgQC5T1Q%2BBBw1O%2BgPTm%2FOBZ6F9n0NpHVUf7GXOsaX2RLkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWADJ1vWT7oNeq7iCrcA4D%2BOx2jMHdosOGKbjTp85gdjYCLDEZi4HvMFG2D6T8gfR9nY7Bgvj4zT30j%2FT7OZlk7bKklldMdfx5h7S%2BGuwjROuYZX7iMxEMPwf84lHN5JZK7UZeVjdXZ1EWjgCK7Qkc8fY7sxrFA42VH8UNKIt4VGD4WI48rOfGMY2QO8KUDCr6848DI6E2RiTjezfb3y8jcwSSIevA8gmQ3cDGeBRmmaDUW9DwafK%2Bbv1idp6zRlG5ahe%2BG4K1DpCj3rYILahpBbTEydSxOTDBKJnoQyc2t%2F%2BWForzVkgTsnt7OJc0aen2oRuzJSqnSCei2UzgvBFGldfGFl%2BILJ2b4FZY8Xf0CIBVXTRw7Rm4jeRNBNxh5IuO5b01Apr9%2Bs7I3UkHMhE4sk5X9Kxe32BdEHZwLD8tQZmLp5EVAmdsR6tLRg34g7S2QDtIUqWTlm9NOCqJ1heZAtRbnfcL76auBkHtfSkADvQraShVxMVRhizFFO5T7XpVVdCl7zI%2BfV8wOhkWBwPIJYnQglfljHP9%2BDM2SBxz52vdFc%2BLle4v0PbzkwwpyvMs803gTDVq68hss8koE%2FuMigf86Xreq6XLpGv2xjjkeVc7Ncd7VbhjXeRd8%2F2KreBPxHMY%2BnR6FYh8yMJLA0b4GOqUBFWF32czTEKmdr2z31t%2FglHvz9RwjL09OvceZ%2BfQ4n%2FhsyBa0JpcAoFB4wYtec%2Fue27NXcdM3ZK53zPCJ%2F28qccVHA1NW67jfAwBZntZhBD4cnvVnnd0bCYP0QQaHRy9890rOxGQj71szons54GofkrrfwEGd9fCAP7A6UtVkgTNmoATS%2BZZSLKCxsx9vbHI1JLR9CEDrAuSLJBdiOxUsAZIRJRM1&X-Amz-Signature=602fcc5423ba06d3d8f589a65e3c1b011e3ed9d0ee8948482a645bd326b3d5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDAOWBP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Qk3PEU%2FWGD4aqx0rqRv0cQ9kNwhdG0VnPzMsflZZPgIgLa4OzroQDGXyQmMcfR4ItOFtCQW5Lxp9orrWklSNAbEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuJ%2B1vhgF859zYFmCrcA4EDLuqKSFqmu13kUZrFQRL0jcTbHgJYQGxC%2FqrUeMvMpkvMKknQqftmxxRcscZQfiBdFXQ6%2BkYszCxOTqa1DqWIZFXzL4cmpnCq7CZt%2Fphbs9619%2FhrFB6eNxxNbJCzuVMIczjpfAImyLJ3WzDPiKVIrPCbRbjcY7PvARA8Jbigl%2FV87oPfYm6XJPDF4jQ5qpjCUfD7OCjqGSY3p9Uvl8hkEb5lJCfZGJeUMoGXIpT2WNtCogSx3o9ppNuxel9qKlxmMPL09gfXs%2F8S4FLLsrmNTYxOfeghRkd5x4ulUxsVIirx6eWVIcV3lCiftM0WhKI3gRJCKRKkzYu5hbHfBjox3BgeCVFfNwMHPKC5OES8441%2BzEMOsGAN5bkDsJr00vLavF5VMnQmEZJljLOWzJMZSI2FauiK6H6%2BARDEOX7asWXvWqiavEufNuf9JGiKj0EuaC9mskZFI4zueweLGJ8WPIiEOq%2BfMmLrH1DMnQPrF9Vqad9qUNQj0gYPqPnsei%2BXMln09vbFZyjiWMlMa%2BxTYunXobKKW3C%2B8rvbl8H1xRdBjG6X4akcLAA9urykb7Pn5iwUbqhzuZJOeYbHDDvpcPXYR%2B4C%2BFbqHscYi1M%2BpdAOUbUQEGXYM34%2FMLHA0b4GOqUBuzdRV%2Bw9LkB2Eb%2BskP7OMC9b30fGqrg11ZMcM3j4PQh7Pzq7GtA8RdUqGNZs4Ic0y%2BdlbDF3tDw8NujtcW5RcZ9otS5mtG04WlyiZyOpOg4K3B0Hwv%2BwjqGZSFhDX43q2vlU1IOcMkSys7hSKaquW7yW3IaGqqlGMuYRdewCwVHTpNfCAka3XoR2BgQG2oPWYg1PZLMBSVnEk5hd4yQK0xhbavcV&X-Amz-Signature=78c3511be3e08762374f8fcc114c8196d2a3b2a7166e96024136824785d6fb27&X-Amz-SignedHeaders=host&x-id=GetObject)

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
