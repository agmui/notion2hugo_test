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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQ7Y7CR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC%2FZBn7OiMExCTIYigjHD3zK4A3S8Wqj94eD4Mok3EYIAIgOqxpJU5s9Ik8%2F2FO6C19tHfNnd0QFHfgLFrxuTTkuJMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLzps3zBzykuK80dnSrcAx50SVGPNT7KaWDLZ2d4iZELBCdYMivn7UQm6HnyKCyo0JIVSepCsgDaV7TTjviBtFm5SpQCmKmIiUPpatCLB6kP%2Fq%2FQhiQtCfIOAAnfdBmDUb0ySKW5a6uJW9HJvx%2BH2LRSGNiFABtpqNvmwRj5qhfbhzPp4x%2F7rhbalFO4hCY2D7KGg8gNPNnyPepgVUN2TSASExMz6gtx1iUcxzBMJbBIQILILD7Z8vciiigsMbnE0wCOrgbiRsy20CNcyJqgHDgKyEK%2BPb4yI0GDueHwMvnkTElXt4P2naUfNvPIXNSHxYul764%2BhyEdjn3ZCgJKOF6aylq%2Fwa00CYp%2FdnWu%2FPzkauKVmqL0jUuKbMytwnCSdqgnV5lu%2FI6MQ2XR4AAHDKg8ITwJc6XGclPkvvyr9HWyEynV98zUjgjrcE2BmDxchSHtOR5rL3ehU6Sd7G2MxSvbvPulyK%2BnGMADWr486crzVydOQa2rX0jhmOs2EuEhZlwHpW19g0lTLzhtEvjdBpZAqJ54emYisqoTlhtVPFvfNffxRxFIZD58PwrqiBIyy%2BfKYDxUCHqg9CowZNbgiE2qY6kvNflXR1OE043ZPkHWUI0SGb3QiR1dSuRzzgD4e481UeesBDbmY8BIMIOQ68IGOqUBn0%2BLvQpLytNY6C883neHi8zg74SoHEFt3mOOhcn86vLhfNPHqL6q29ryU%2BqMAUhkDPDKdxdAB4JKqsX%2FD0Ta1eww1DFIK%2Fh5g1jq1c4ECsrrwxvNsBvXx1gVB4EliW88uUKRXBQX61UdST6xwjg6g2Q6gEB4PZOSq1SV5n9IGTap%2Fz9fVoIUF1%2BQNW4osiiaGl%2BMXkgOwqUbmXLCWP6HG7q0ZMR2&X-Amz-Signature=0477de288d0a10bc257886b56206d891082ab2870504a93d377f5d7d9cbc3ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DFC6YL%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDlA2HMKvuW0SG8hQimhAi0t6ZdBxDS62pYVIwJHXNKUgIgQF3Jk4bva%2BJrwHvqvTQXELL5w8BgEyffzgUWhPo8fpcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNiY4R66gCfltXkXDircA3IlwOQ%2FLjPZrvkDGZ5bKBsRdAzlK7f4N3OG6%2Byn4VFs1gN5LLou%2Bn8wwbHOaIoZ9qu9rVYjJMcLn5BEJMLZ6LY7dMly4szuvsiINa%2BATuYyoMKF%2FxJeBeMFhyg4TrRFInqG1kvr9wPBrw8pZfTbHQWzKJemAOqvEaBzm8NdVU4994J%2BMYHSJtYh1%2F9l8zU%2F%2BrFNb5uOx7PHFHHf6vQYdlZKQ%2BhCsWlEXM8kGbKILNaDYpKeUgXmSyEMy90d9ZPpFUdmW%2BIW7KI7DmHyUTE7lEs8Bg9Cofvd3OmiUrUG38miOjwqT%2Fo4riuqLyF9cb8unSjuXkXunPuJZ%2FFnT51%2B19Gx7P6LtplwRzkBKh7%2FkA0MW5%2FluVXeUDuIhcauZlNWViMQe9DrHWEFnGLkgc5ES0xZf7SiqCuEOg0ZQZeeLmxT7q1aFrKYgpKvWg9ug9jr9fFy%2BNi%2Bjo9YFMVT72xOEvKhxUUK9CE8CnxkBm3Mmc%2FIAHVHdMZTmEV3c3TXKV2xeQDdXRVficR0RK6oIEfnDlK4HyiWOvKwitkhixGXSG2agHsu7aob529Q2UiVbdgG3MuoJM0ZXF2RoodenG28clXbq0phisOZWyP%2BSx%2BSbqJCvlyieLpKUST%2BooX3MNWR68IGOqUB8rvdsoHoMIknG%2BbiQipStOmc%2BbwobZ1fmPWvt0rOUpP3PXC83xt9aMpXcfc8n5sTN5z8xIs%2B10zTa67Q5OFclFjO2gWP1CpNik2BBCl0FqGG5H9V8TnKWtRWKhiNTqoAuWqcI%2BdCOyVHt1fpCXOgbqdpyGMSovuePi070SQgK0%2FbVDaHi400cVl1XS5nMvXAISz3N1jbfvNMDI1ixXjYYN2g9uMJ&X-Amz-Signature=d8004e9142e794b59f631c26c91d83ef75c50b15c350040ca1394a325690bee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
