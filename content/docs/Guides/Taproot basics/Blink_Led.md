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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624FYT2A2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoLONdyprYdIARKQgCdZGLRQ4V5fh1bysFYYcgUttWdAiATGhzumuCttTr5LSBup6dNKd1SnkFsG1NO2TQz3AKnsyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMHx9I3gr28u9ePV2cKtwDIuUqQCINwsY3VVwlUNWGIAFd94M7QEr6p4OH5vBY%2F4dg%2BB88zdB4Bu733r3upPVzqbVCnXHJf0OQ3Z8mtA573j7Kn7E9PUJgXKyeJ4QKhK%2FCVgqG6s5u6%2BmmcpY3bQOmoaNOW7l2rW6W2xfwqmdjP4FVtPwO7tn%2FjPY1G2poBo95RZG2zp3zbg1YZFaO1UI0TTFSouqrC%2BDSZSCRtyO8gZFdCgjiTXgEVL0PXOr6uOt2tG1DrhZEiGmX7s%2FWt1R7g27t93AaWBS4Q2kKg7uIXMe5trlqsT5q5sItKELmY1bS7ZWEh%2BoWa3hHQ1pp9mf0V61reqp10ZDPx%2Fvdpi08QFvZT5R6IdYGgxvXeX9U%2BzNSJCYn%2BSNcdNNQPvqE%2FDv9mJtUT8EFGUARIto4CfzR%2FRmmUNUyTHEoLEIUitK17%2F8zXeVyx8%2F5Q3KpxB%2FHLSKFpr%2BAR%2Floj%2F6jfuC6s%2B%2FDZAs8D1OtTMWpydfTHdQMpk8y6eQsnM1yqWh%2FusFgTwNWP1cHrFR%2BwPQHLAFFPhLxSWRIdsqKXwI%2BLnz3FTczJXTk0CvkWHUxzTdcdsAHpOjdOXPj%2BTweMLY6Cyss8s04jNK31M3sZ3uQhhfiJvI7FJ4sNotE1QZM0oTw%2Ba8wm%2F3WwQY6pgHqe%2BVHOXDEnOheqckSUAvwoxtFOL%2BsaMIvMbQgtbZlWN9DIHbqw6JE64Vx4ZC4EQ2yFe1NXj7yW5TPDMHd2hz3MpszNiFXNEbFAtwTJXUAih4yRVnuOXfs7aw7abYWj3RpOyuJBRYdrHVwIx9x5g4LtDoafyPq4EIfGCh4tQDJl6t0IV787sCbZ1ag%2BrDuGhusI9YYJTXJ8qJft35Grq%2F8zCGVmwQr&X-Amz-Signature=64a177b23024ee2500c055afa82497c360f414e549ce296b2aafd9e8cc934a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQD5YHE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZe6O6yiQjDPPIjfq%2FFK2tcwSwTvLuSeuQKt2ke7swVgIgRcYtbHPb5ka5Nqq%2FojWdAAS1qkVZ4Un4RPmwtz9tJEAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKKJe0J%2F5hx9NB%2Fv2yrcA5uxCmlklO1iWPsrUQZHA5kCjO929ywwhyBDyOos09KbfRbqsRqkPVpf6dIYZ%2BaJbNYCpmKa7%2FGuruz127UE8JIP%2Bz8dV3HWPBQWOlwFsecmdfSudV4%2FInD2Mc3WVJkgdxsT9RQBvwJG06yFdP97%2FJxWKqfCT3wo1Az6oHkFQjdXTVXy2JzKjoEeNYF%2F7%2B8HWt5FPqHjhcFulpumFiFXuHe437sIDRKDgLsew1XYlVQPvN8Tvxd2yApCwFSka2eXJK0XOBdkqqTdWRfNA%2BfbOKgAUC2IPwi9L0djine1KPWirtHSeaIUgWhWA7DjK2hcBI1TZUGYVHFBTZgTrKv5pisHObhjXOV6cBfXIRbISph4KxkGiOv6b2EGajWRisHe%2Bk9MysZuGCDKBVFQb6temfOnUnJDEH0Yz%2FKxGE2MEC7uIYwmB6eIuHknwmdSQvzAZGGEFrCecCh5IxWE84E3LoFZG2Z3%2BFtn%2FFu1AgX2E%2B6HvJg6olqsHmxGP%2BnZldDVC313T6vIeIAOYBjeu16t%2BGJNpBzx4f0VKom4QjZ4fSHMaNsiAoiZ%2BMRHbNzCi9VfO3Z7Qu7DlXj9pL5%2BE0ECmXEvppkSF6dl%2Fwo5%2FC5S2noOAuPhohyuucvX5n%2FVMNv91sEGOqUB963LTWy9SHK5dVmsu1z2WfINUksOwsBcz613sA5D9g4pnCxC6vNfX%2Bs1Ehm9JtYEwSAHrGONx1jf8CrFlCydiKssKTBd5DyJ0UP86AhCmltd5ixkwEBa03nl%2BP0JoeR2jTamOk1yw8PBx62LywU2sHIKuO%2BQZdILZ2EPou08U2atEz3%2BYTr6bmURsnnpHfti%2FGWUzwkMNklVIntfxibEFllOME6X&X-Amz-Signature=26debdb9260dff12c47f6b3454248fef6732f4808757910e191affb8988dea6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
