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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H2LRLC4%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCTud0EuWHY3YrbKibIr%2B581flNlZGQX6A6%2B8srCC5lqwIhAOxOsB%2FsgiN7bKmgxRjacerZEtEGejFPWsG%2BL4jLdpAjKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYDsSy4qfoB92AaGAq3AMRGMrJC%2BjruCKuCxW6LFCgMBQUuF8wYT8MbYfyzBMnsynZJTSxL5IWj%2FswPqWKIbTlYIPGG8g5Qqkq9nEqTqPovF0GHeIs8EalTFC50PIFiO31jZvz6CADtqP5GaWJoPRPEMrxAO0GJ148iF%2BVIfm%2Fs8KzUu00iMPW2Y6MHDzxtkITHw%2B3952y8Mha0v0ZqXnirAC7n5r%2BrUaG7SSE9d7I7pc0Qc1N1d1KpNKHYOcYnlH%2BlkcYGekwjfPOlMNQrLY6HwnJTqopyz972i%2BUA8%2BBRPSuyLHIaIB2gEk2cSkV0SIRtLVAwaVlhIDeeZjJY27UIVsgX1QMBl1l48B9qU4ega5g7ynpZ1pYMRM%2FuB9jXFDwTOQOUM4MoLU67nkPXE9Z8Mbc7yt8YbHUQVVJ3sMTU7tOs24r0A1Cou47wYGK7noVVw0R6QUsFX3hvNY2d%2BO4A6ac88SmvJuphNyjnzh6I86ztyN3zjZArLdhg8A55zf62jipKpXXnFPYiceZ3swf3uKmqZ%2FxABVNIRpWrG%2BAk0VVtGwg3cGmN6pOt96cFhTG43Gus7KJag4Nf2YWvpXYIkNXZ4laqcFLoArYkqsj3WQLfMWwRmH8TZqPoZqpB0M068SkcoTqIC67kzDWrdvHBjqkAcGCo3U7sTa%2B60mB%2BsBQKD60W7x5sp49Mm8RKhPFBPN3Ssn%2BVe2HZhOmCDK8JGFPsIRHUfdJNz2KbWy8hv19U8xYkcgK%2BQqkh3BqzMoAzUyWGa%2FH6D7wc7fzSeVFgT7yU5Dh9%2Fpt99pye0SKbMiaecCOHbj0YjXIIM0g3p0rxWHUo2On954YnfwcQhikEpejDrD99CIIfk5r0KrzZKhnPNvwZbKT&X-Amz-Signature=66b61249d6ff998dd48b43e3b9213db1544d0fcaf3e11fdd5690cb8208011c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMGHOH2E%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIBy1AocAv2PngyyfxhVpwB0NBuXWtOwTDydRDWXUpnx3AiB2qcfpBmDTOCVVGbxcPCjPaW42Xn56b1%2FfPFsCBijKxyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2FDdO3MWDqbTTolZKtwDT9LWkobzID8n6i9OGwb17ID7Z6oGa8GI9aK4M09bztHzR6rjsf4L5bq52y1iqYzUYK3R5K0dPnJ8xFxDsCvFZHEdQBplKx2KLjYYY8%2FR8MVeuzX9yos7G41qliClgbGxhqyvbAmoQVtA%2FsLrHr511mhypQFmsoor9%2FxXYYMxVnYRteaXFitFq4PtgF%2FU0tLJFKIuXg9X44WZIKSG29Z%2Ft0IpBljyeXCj1Ulkn3ZG6b7X0ptcRVaPJlX3JQuU4jof7xqIQpQa2mm0oUI1Lzx8564aZ0zMwkOE8eRARlveYrTy00tAy9Cv3CLo6w1W1tNpILjEe5zFLL%2BkUBOsawSMEzTdTmF6%2Bu6Ze3U1MnH%2BjryYdJ0NCeNqWjUDvv6Q4h88WSUjWThCFDC8Dn%2BJ21TRDLiIY%2BwP%2BS3j4URtj5oxvZNlUGBZ2045BS78sWNX77w%2FYbgtBHKs4yU0CNeOJUacEqBa2W0C9zWbisw%2FG%2FS2T%2BjcaGV9cBshbR6mxHJwh9CWLuCPnglx8DoIuVM%2Brvr4NWziMBaxp581emHxnJ7FUq%2FmkX5hF31EVnkG2TEX2tl6t%2F2slJhdF117JNgm6UBoj1vRODsyW%2BWwhDp3ViqizA2h3VobKQLkrz%2Fku%2Fgwh63bxwY6pgEL3gt%2Fdwrhvk7J%2BUTF4TPzw6UQ63DaEZBqaiRjbToUoF8Xf%2FhUbLrlzAqv4ABmuEX6Bt4GQtHsR%2Fq3d%2BynJk6lWX7Uzdsa%2BqLX1x0pGdjBtrctMcdGcsMc8LXp1F3f8Eeb40uWGeAGDEEZrID2fXOHai31rqEvkJlGnQprsgGsf5Zuv%2F%2Fcrw%2FMNL1lDLSoHzdM7uBjK%2BZUtlDyVrVyGVp0ClnY1dTr&X-Amz-Signature=89c8bc06bfdae877ea881d03056e3168cc97ec140184cc0627e52a6d16f4e666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
