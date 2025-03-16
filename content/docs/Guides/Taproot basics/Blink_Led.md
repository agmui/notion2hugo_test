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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZMAE46W%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd3tLV1j8ZoOzDcd6b0ciJ4jehacRdp5q4NKzPWlhexAiEA4ctotdWSh0CMFhlaqOjuhWAShX4kC4A5kukDoeomlbEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAxbTWSHaegUrNChfCrcA%2FFDVYv%2BXaZYQt6vthnSCSPFbT1v3%2BkOtlfH74r3ysA97eAMgqeMeDL2aygGTB8Fhw4tIOFqQ7WhGLHlYvCXpyiOBH8DCGx%2F6bQOW2Kfw1UPw9UbHA%2B3YS0OJ%2FqhCo3BLX9FZ5excIk%2FVfwVoHzvuzfjtohp3w1h0fsc5lnHTMwFx9XUxn6t4PGmwks%2BmKOsUIl0CAqlZrMPmt%2FH0KHG34U81wIe9zgEsQTika5i28YmxNTjxlT6Qzbnmld3POI4DaCWjtkLxtBL9mm8hj%2FjlPO40vYvkMW3gGGOklWYSH4cPleq%2BLkWm2z%2FEbLCECSC4PmFbSumH%2FxV7Z86D1fdhHhQkXowQib5PD1Q0PvPaqQEQpOMW0JU9%2BpgXdCQOq%2FbYpZKfuyzk%2FTzIZNOq3kdyYjeI4zXsptTDx0aJ4DuZfs7ekeCnsQaq%2Fk6UZ%2FU%2B2AFbDbWKrgO8vwwiPregWAEQ30N2TuGPM0aFYn5PcthqCi9dEqwi9fGBkLZzDc%2B9N%2F4FaNQUR4KHUxQuQ0a9yrwRQxOl0XayZKN51bfuU4b%2FmyBvOtdirB%2BOtV1fApXK7IrzpagQMhwqjjmjcFm22VElN0hrFPj5R%2BP8Amynx0fIdT%2FgIo%2FY1AdfngOqsDDMPb93L4GOqUBP5xRn6oF5L%2BjMlAuFjxZmyqg161BbiEMF1Sfwz8WMy%2FVFtArQ1p2zAZGVOezGZcW%2FVqGvddaATcmxu5w1xAJ3Oom%2FpFLsipFZ7ZznK1OFDdBdcEXJ91iDIz3yz4Ct5SDg3x9%2FwM4MB%2FK3SHP12NLh58%2BoSd97lj5u2fafhckL02%2FYwyKJOuPvBvIczlDgGzVj6d%2BtsXINcq00TzEsyUKtDA6vl%2F0&X-Amz-Signature=f63c1a2d606fe8ab7cd1d4895eed3bab82d6874f260877a101ac04d4fa3cadea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646HQ25LD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYg3Gez5peh6EBOvIuwbCbV0moYfbF4vvO7xKcViiHVAiEA83UGdEB6HW0FBr9r7hc133mpofQpSCSie0tLMXf7t%2Fwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAak%2BSnY8SoLYAWlvircA0nYc0UUvIZG0h9ZxPnpGxXsMvgA3CTuY2HQkEx3bVTlaXcUdzI6%2F1GRs0X%2BdoMnnCJxWultKQpKcwSlUrvgZbjtInLmbqBIo4NZ8jLpPiiF4bQ1yIpFjaF2yDXxGW8a5yHS%2BOjimAy7gU7T%2FHlBEWAx0%2FvT5IXe61vTyh2BH3iwpX2UxFiJzvKMVlV2K91Pdhlw1nhjIQzGc%2B0BYw%2BDxxkuRXE8ufzuPSasgrjBlW9X33ImklHzt2WaBvvCPgfhVribGLvAEIdpNpEDZNw3HMhF10ISTpzRu26V99YL%2FumeQE0lKVy53yDscoTiQ%2Bd4yf37dlaoQjy9DEDvBfWFB54hI0YvLpAVkOBgxOMfIQoGULm0jqKqy%2F3qqXhe4PZbf7fdfsPzRFP9M22YkGF7UG16OcYY10KbIdIvTr6X%2F1jk0rr%2FPX9dPvJOa8Ct3gmP0DcJKpryCTKy96gCddXuF4XiAPK4AIsJUEYX4zdrbhuYAkgc4TDyMk7cDNx6HdUd2s6TdkWEihxuwHOTXSWQ%2Fg8egKJF14vSf6fLyMqeKM08ERL9BxpDIZuUMd5LPSVYIgSUd%2F1tty6NV0rWcc4%2FtxorI7RWJ8ZEk%2F0mlohzzp7Ql831QzgvYQ0Xvp5vMJz%2B3L4GOqUBTo7k2kaZ64bKvbOr1oIzn1uLjTZ8lYTZ6EW7Rg%2FBDuaZH%2F%2BJi93ZexLLDmYD8L9mVt0bDy%2FJK%2Fok1L4gC%2Bc5czXvLLwoaNMr7KEr8LjMuwn9ZinDGQTl35on3NNc9%2FsRtGqRLTeF2pssu07WQUFj4erR2vuFQRQ%2FJQiumpUKu%2Fj1NoyK9li%2BnRAVy%2FAoaqzoIBq16FJwgc%2FbtKGpSASsWY0euNO5&X-Amz-Signature=d4a9437c0bb235e280c087b0f88fdd13ddd9502924dc5dff9025ec528113b06f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
