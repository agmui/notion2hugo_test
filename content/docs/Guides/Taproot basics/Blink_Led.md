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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUCCMER%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7KXU7leJnZhCgeGXDglLHImcavxLgU1Bmjk%2FmMBOQ5AiEA7GzpeemJrQqwZa8x8LA3g2c3m3VfKOdNY2d%2F19FdtWwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLyHnhqiwy0coB9DySrcA4fFq4iFPGQ5NLkAFxAOo5QXINe2XGPWTnKHQhUnnYezU9Mpj5I9oRGfhLhdYHdfp7TOeOIryEKsQY3BNgQ7CCzuQRjfelfyzykmMmvWu1QrqwzKkTjQAMOHCAdP87jk%2Fzb2zRKO2NqR7Ee%2Fz5sn9uH1WzSf7npnEhlGqkYae54oRAwIO%2Bb8ZxwK2oSsPfF4AJ889wbYtwOvnfW%2B7IY8vRVa4TCyYga5M9LLyyJEfhOs9WWgpkUBTORWW%2BMDpady2C5skRxFkTzffz6XiVGhQkznxwgSBH3zGUunVtWB94CpACtZi3hpI2OYPlgG0nt%2FavtbpKLrO2985fX9yJuaSpAQe96KPudGMVBkOUAqgnrRIYNAi8oOJ%2BDj2iDIQpILoD8bSISv5nO76ll6bwc%2FnrINt0rvJn26p72a4qTNyKx%2BjPwa7ZAYrhSuLfxfm1vRD6yloQXrM6OzpUbX8h3xpU1ZuZpEWznfV3ol7XPJoRcu3nUNip5czvGewNnB%2B7ZzjC%2FPGyq9vpGQB0uRrS6LoJFR9wsG8aF6yAdx5Me4nwvYblknzyLAZ0sXiq88O1KB3Ld2lx0zXspVuqdJP2aBbn9uFbrwT%2BU8Z9Jcf6Rfko9sQ8AbL5YDUwGqBbXVMIKdr8AGOqUB0JTVqmnrPoJYd38qCuCPDVlY%2FRdO%2FrTrC%2FiAGRjER7Mv8GX7a8IBuTUqG%2BmsjjyV3fTkMc0Myfy%2BXNSGJrTMliZ5v7MOVRG%2Bi1Gbv2WZPttAVLT4OH2BbeEok7HbkdBoaXE0ziwgOPQc6t5QFW2DxjBnlJTTUDmjPFKcRkEh8Td%2Ba2pmsd1yXPxc%2BekuJ3Yb0OdHLveVf3t%2BR4RVVvEr6n0hjVou&X-Amz-Signature=1d28aa1c3b07ef00b18b5eb40fc9e267d728038104241ef2d1631829f2e95b93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFOURP43%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOAQ%2FbKtB82hqJ1lTlW9sKRo0u0fDbAbJmAzFFeL0o7QIgPcmzwTQ4o6lLcpG9uCam5dwUBvw00n6ANvkEGbVvc3Uq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDADczYup3n94QcUJdircA17cpnZfWzgzpK5UzZw0RqGLrNg6TZDTbIPCKFK01cj7eb7NMYVuse1mnUlshJNtVRMyMxrbsLq0SJ94vZYRuR2N3VREH0WeWpCWSkZcufPwT6YoEHxh54PhEoi1SzrueCMVcUiPX6myRdfZqhAaRg3ttS%2Fo8W7TUNM0HYMuwCk0U9Wry11uHOnm5aggDpORlyWJ5DF8ZUyFJPGD%2F62sX6L23WovrHD2ozmEG2LXNSWx3Gb4oJaJoDAdBTfPu8avhGcCAfrV5odTKN3SFis24y8Xo%2FAvjRfdgS9BWdFIA6j19t25BrAIPb04awD%2Bd4LVXeKMbainZagD0tn2kajtlRidmx29g6DncgxZgvVrxrlK2stkZ415mpurHeyPPhUWTZ1ZWEwtLhDHbA4T%2B1f1ww6ZEljVZDvslQiZd06%2BQTIuFMYlO2nnMCPw1FdnmanIGJ0HiaSjUuXBjFsh6zXLqkDHq9oSpjs%2FW%2BloQlVnqKrkkv3JUtn8fCCqVTNS2H24tOjq5HyyoT%2FxH7eEkYoeUhygOQah3Hjm20v%2FIzD%2F69BqDN%2FjhDNUWY45zuJpbvGLSYonC1tP56i6vjUas3qLIpTUZxOq2haOW440FDOxrZPSGprXJ2rr4MO4M%2BLmMKqdr8AGOqUBXgofSwLyfVCUVfvLofSoOs8B6nLlfei7KuCwM0NZZhm3E4OF%2F%2Fl5w30jXj7mlb6NrKiWAdtPTpiHI8rLlP7wuBkb5WOJ5jeo5vQS5b6fX3jw1xrudGAPPTK0WUqH6t7m0xp2%2BCwMSy30YothnoGREc0Fwfk1fPS%2BkIA7wEbNzMW8zm12tB%2FShX0zBfqBS8Qm2h%2FwWy0ji1zURK1hBXA%2Bsy45pgX8&X-Amz-Signature=34dbfa9fb6321f24ad5e26e0e3a5ee26dc726165afe27115acc06f46439c1452&X-Amz-SignedHeaders=host&x-id=GetObject)

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
