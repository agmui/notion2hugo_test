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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHCZD55%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPTy7uPjFcZdIkmdZ4T3r5TXWs7k41dAoNYfFsVV5iCAiEArrDB7C6fZRumOW%2BZAUx5eJFaApRaLyHIbOiNzSs4Vj8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFIc5LEm%2BHBpy%2FfsyrcA2Pl2YpzABAwN4gYrNRMhErNKUgV1z8hRu%2B8mYJMbVp4zDtfz9PJMNSsDlOoSxHg0zcfgorI41ewdWLUgepNaaup3uc1h32I9cPbK8sKahmXfalrWpE5o24n1WWOksUtKeUHlCdaf9UdXB2PPzW%2F3od%2FC703pPUAfiZXZ0xyQpw9jXzvKq4i3cI%2BkSE66GkGxPDjexVx1iUmnfvfe6nrFb1FOrb0tnWm3cBu%2B%2B6IZcPiEMjt3GUe7s9mmk3Vxkkbrdr7hogG6nIiSKnhX063ZEDMVgIvSEmb2Qdo0UbK2ZYq1pWgUEpUg0BTWFOfdEdWmGFJQO%2BQFmyZoPXgaZDHw48XBSrZOqm%2BdRU8R10y27XTOLpiSY1Zmp452ztlka6Dx0NGzqRIdJsUA5itGupf1r6CLhskPdbo8iYxikw3JNcODclkBZ8lCc07o%2F5hfJdXQQHoohoG1a5D2HSqXP%2FE1edg0%2BwWX4pvnWLPd1BzyCgD3zXlyF%2BrsKGJDp7%2BkBIhJOnTYYMsgSjnuJC4qfYTfW1scH7DY39mIrw7apSuBePPJKGd03tNRLJ02Q7QFOlvWaUPJjmfzyN4YIscPc63jxjbmyB2e0C0lFS0c7U4PJD3UtJAtVNGpPvqGgyZMOXKgb8GOqUBf5JMiX0f0MZ5JygFB%2Fh%2FK6C63vtpkIZPnoBV59%2BKyVxQWV0KMYa1Vae9SJwqBlCraFIkdaN4WGY%2B%2FV5J5GR9SNd3lbEcz1o7xjlP4ssQqTGsPghIfqrz%2F%2BjN1KJcvGqi%2FOkqYixgwt49UB4XqyUX7HSF%2BqOg2yrB9kUTobHX%2FJgM5XhFKX7qc16cnzZlIpHtGmzo2rD3G%2FFpH64CNa8wzzF8G1Hq&X-Amz-Signature=215d15b830fcd20e8b2982605f5a7a7514feedeb1b8d9af47f3b9181738838d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTAI37A%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvlcvYC7mmSVAWhDrvbsCxTqJu6wcYBwc8SK1mXb1b%2BgIgLopHcjlUYLa4lDllMoz%2Beusic0qIH7dHrcFS9unpj%2BoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ%2FwoBFOAFHF1I1yircA2oENVJxUZijYoJIFHWCyRy6npujYkaAUYBQvke8Ub7bZTE%2BK2h1WCFS1890x3zlOGil5zZ92RdzVZNtX%2FCzhOhoob3uy2PgsYxNtnpGkgRzaHj8cQcpAcDg6gltdlNuNFfBrFCpX8y9KZVn5FlDuNI2pvKwLlq77%2BI0JSs3HMz7GNVK2jOtm%2BXB0NxAVsNXih3j7awLB%2BfzZgXkTjbcLJPu9DHPqWVYQCkaYHts6kGZ8FkK0U%2FiUgkMGubU6UqeendeZ3a0ZcPeijojT81LxiznVmcqWyxHx2hUHByn8TZMCB6dGNkvaBAEFytIH1nxZpQkkZXzmZVmqyM7lrysXABrzl%2BkRU4XxvZEaNRao%2FTumnSx6y%2Bf14H9Aj8uiLZdJQArrVR4Sd%2Fnly%2BPJ5WeaxM%2BmB%2Bsjb1j1og4xlld%2FvW%2Fck4STiUqP6ubfFwjEjmHlAj0qYtcYmT7BHybxMRipgcnjaF7vzdFh3GZbMiF23BCTRwMs9nAINdRP7N2CjOQnfiwYCGMtNzH4uxpRbVBO7GKofRo4RhTvB%2Fg2gVdP7in1SZYuGhWy2O9aow9W6RsjMmiz956fHT6ybX2hirTCI5poWwvRE1aBpV5HH3zA0SGJ66Cv42pN%2BnK0%2FuuMOXKgb8GOqUBl%2FJtx6s3L2z%2BTm0lmdCyFbqUJgmwE7Au%2BqAsabRZru7QxbWHE11q20h9U%2BIFIseeEA7upuLa2jJTHsvaIliMHpyIwj10a11gjuBJRey1IDoilZBJwxVajSVcfN1X0SqZg2KmfqOzlyvUC9apPdGKBZfF6Ef%2FthvJwUW6F3ewv4l8oilj2IgOquDlWtcGVWnzfq7EN3sg6wIj9Xwcg5M%2F%2FSqlnOFg&X-Amz-Signature=034a71ce0b1e34179091cdf20d2dbbce13324a8f04c52845b3395ed7752369c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
