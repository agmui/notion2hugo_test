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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Q5DL6J%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIHkL%2BpES%2BahD0eqTBNqeBIegOUvFPOMhW9bvUqisdR9CAiEAzpNfKCcCJip0Zlb9sX%2FF%2BIFiBx0p3YdwY9nd0Hr%2FNJQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVQdBNv0zj5wAGy2SrcA%2FgYp03QcyAyoGjJG7tVGHlGNjQiSLue44V8z8q3SKkpgPELCqixTuw4i7MoqyiVQ11ma16qQ7sEKQiXXOXo6TfD0ntdnaHDlGZ47gPu4fyK2ZNtLhbQ5mBh%2FZunwEOAVUUOm59brI6bIbiulhOiCatBhgnVJO5l7jJwphMV9ijC7Avwn8KHZGcSpVkPSyV%2BIpz2gTCChhCTtrVTog10ODusCDPc14%2BVmRCsXhi2HX2%2FASbpg%2BJSdFIMc09Ihoyb7XnAOfNTD9ofSybuI2hgvBYnJxbgB%2FoSxQql8BEDtHjHaVVzSityVKLFcNvYaIDt1rbfiQIaYgB89%2FDzRyQgHYfKA1h6vfn6%2B9KUSNCX2FkmaK5YpwBKuIv6wdvNTOSsjkMgdATeQESHGcabJ%2BlBrfY1BioJjsPuK5yDLiO17xyiP7mgaifmB8IAQe4MSmq7KFrsE2xzfulv3BAC9YOI2C6j7JaSFZHpFrMC4qZKxxIhnFNyeCKnLTy10KY%2F0zyKX%2FiFT%2BjWN9u1EYZ%2B3LBQ6EiLlJubD1%2BsPDhAAWIEf6x934kUL5CB7j8gjtJLmpreZlfq%2B0ewJHnVjEXxIrNkF2kVPdl7ZgvOibekk8h2WsTy1vqqK0CbUHxcttmtMLP76b8GOqUBGLL2Y%2B4jruah94sp2xxMNzgpuxd1ou9gxwl%2F5T7dXo3zIC7U2TVX9y%2BfiDNNnqvLS7oaXD11H3DzjBWMzwOLWB2avL6MuI4KJsrsK4DRKtCuuZqH10ghjXjj04p81KEqt6UBbm%2FX9GwaU7f3PK5Fo81hd6BT837Z0KKX8OiUlCN4T%2FR9dvOpcGQqT2DUdK8Kvqt9N1t0eRa7DiXq0RfjaGURs6QB&X-Amz-Signature=6f1ad606469a0baf8423e01d8861235da85bf5eff311cc73f00d97aa678762b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDE7TTY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIHL4BSgAroH%2FFIJZvhYT8RinqudA4w2DYEwqkSksidnhAiEA003IcT5FPZ7FUout8EVwzN4jurIU8WHAF50lwJV8ITAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7v2X%2BOraVodnYgbyrcA%2BgZp%2FJOGsm0tKixOInjW4aZIZ0vV0tazCeD6lcNPwQU7gjqujWXlRSjnZQlXZUR3nA8AQMkd4oUMM%2FiIfcgn3RDtMgAbW7r1iWrEIdQYloYRNN2uB4hqeGeN%2Bp1%2BPdfbBxLxdc5w1jvv%2BU95Pto%2BTRInuHznIvUuqfpLRqCSLwFRJD21%2FdQ7Ux926i6C9D0jDP8clSYxkPlENFkUMv93U6na%2FA4NrRjXXBTxSi4A6YmYeE23og75z6LfgX4RM2NEyiwRLGX0XgBO%2FUGa70whzRJ8akq4yDQB%2FXFZQsLB%2B1lwMsBPxc5h589RiyrRg6QYOm4tgrytTnqWF9KZtyJT6XjrFjJl1IjShT8MhM10X%2FYaJ%2FmOxZUIMi%2B%2BGsTsbFidwIRD%2FWGc%2FlHBTLvLhjW%2BtkDEcTB91rvI9lwWLWtRHeV3UoGN1rmItT8xSlc9%2Ffd%2FYpBmAQr%2FfRUhEWEgRsQMgBQlybN0PZ0aC78gaf2YJCQb5vxuj80kClK%2FLPc7rt9wMmOh67lhVHaLxJOR0jhe6iDXaJodIY8O3CfKNBExog3e1cbfrAiAAd7z6VZPeXqdUc8PmL0OSr0kws%2F7z6oRKubD5qMrT8smQ5mimhtu%2FZ3FV%2FndW94goqW4jSpMPr66b8GOqUBhX6G%2FeGzoHyMPzqiiuBRFyiWH1v9vLpOXrW%2B3z%2FLeLJCem8O1FS31V%2FsHBNfbtSEmd2aGuuzeOq1RzlzAzgi6vUSW4ZtKsl6PSTlAv8kWCCzVKw%2FEfSWpThjHgAm5RsnUoO0%2BW1gxWwQvgSxbaCmPapcIVU2dDrZ0%2BI33GpH3KHfb5HUsx7ZfxXaoV7Pu%2Fv6N7kU%2B9j44VOoiMfIeSYvZk2opKls&X-Amz-Signature=07e421c28f695b2edb9b7c197f3033af3a222133f68b69fb8437b89f1d52d3fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
