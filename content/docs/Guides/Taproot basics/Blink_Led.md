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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZKB7RA%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFtYLhDXu4MfyUTEBF93%2BjfN7JmTmHutV4FFpXiy07ngAiAHaJjWjSFh4soaaPyoQxF2ghVQYs%2FPymbT%2BVyFQQWnOyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMHKMWMEY0WwLVMjMJKtwDv64kFiX%2BLmIRPWv5TUrIMaSBFSXmAj6Ngjk4TpV7r3wCji%2FxGTPQBlpnUMj48f7egeAl2nz8G4vmnnsJSnYs%2F9WHqj8z8zWnFMdufEr93tbTGdbAOoXSCm0lg5DsuXITZj2eAC%2FjAq8mm%2Fs83vOX3j8TcUMFzzjD8jOhiv%2FBEjjM7RpkfLiQlciGfe517g6QNnQUsSRDX1tcGCleeV9%2BstiRXJEa%2F7nD6FwDdHK1ZwNmQnXvwZPibRxi92bBf0cJEV8JCcAd0i0ApmYq568Wi%2F1%2BZnO5aq%2BU225A1Ia5aSfI0BIfsX%2FtwvczO9DIewgIGQC67SSG6SUhfZg%2Fk5%2B%2FqrNh9MeYVJikpK0fJZ%2B7%2BQsLFlvhHIgBGCMivCOgiLquGFjn0DivFpLXrC6cXX2EAaVTSHmb8y6ZdRbrSK7id0L%2BJrAQ%2FHDTg6nNWTFzoLLxlpkC8goF6EyJdZtY68KmyPUuP7xWKTtIauPGCKShRAaTbs5vlGfupHGWRrcUIG61zhcKNITNvRe5yfReWGNuTrH2bc0D22H8KhAQuz9%2BPb6VDz%2BO4eUGItK97pblj5hIlSSCxrD4k1q320YEHEMIOuUnA355JcJo1KUP6%2FNbBJ8IHlCC30ddLFNjvtswv8yBvgY6pgGeQg7vovQfJ5OULzIoAzyhwR91VY55DpncHRgQbk2uMZOHPHRRZ7%2B2ulI6EgAKUWOc%2FmKzscfKZ9mkmczg%2FeIqgQtt7xWdXUNXDaMaAgnt%2BOaL15q61D544Z%2BUMGMLya2b%2FW7VcCGLp4nLx%2FniD9BTtt6tHvsC0o2ilzUmP5q91tTN8dmV%2BBcOiajJ6cqFcd7hvFTxTc68MgVy4A2MZXCMfOzacpKs&X-Amz-Signature=b48c1bbbfe57ffd139a63d4082d5e376458776562b7c4422e8a2b8cd5c347486&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI656G3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBzDSbDW7BxGmk7QN9lzwFIqzEinUXwa1LNOcigApY6sAiEAl5C9Qflr3BL2hIJP1p5G7G8wKaT%2BbJzQPngZWQa%2Fc98q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOAd%2BuWlEHVPtH7GlircA9P8fPLx61w4aCfSv13CckexURjML3TEbsdqnXuMBeGn87W%2BDObtDQPvyjklA7s4SJK%2FUJbC7mL7dFS3nhDgzPK7bij837%2FZ8XI5VZHQA7YHsI8tcaKD1ZLhQn8BeowQC4uRoINaEFyIYwKm01YOnCK7hBXu9%2FyCXbAwF7ijrwNH0CQW5xByiQYLi3Frv01FBhUaVDov9mQwGm3QB7rcdKUs64f7AvKUuXO1pVl1fCQtLDi1FxBcH25jl1n6sb64RRO3PoFWuXn8OquH8CXtcO9PD8M23Drlt0YI2honXkeaBLc70Dqdz0lUvB%2Fu0MxaVQhiQ7KAi4fCjhbS1idc474%2Bd%2Fq%2Fn1vRfVma0s4sDcTBQ4UjoPqCl632rgItTyKNbAcx3M%2BGMtWzRA7wg%2B7Kpda0AZO%2B5WxPSTX3FHGHODXSFT6snrzbajJ66UQcsgyBd4wIo%2BAxW3LeAJxIZGOfCvp5CiNUq2d%2FD3nPEGZer1crGZjwFa%2BqkyvWmJ8kx0iXQM6yzJ5PXLHtsERrIyNtsP4W25g%2Fc%2Fd6F3vrWkkPmjwXGBZ8%2BvRnQkIiBYDMC3X2nP8nSuBVlX8YXxnlSzhHxmYXqHBg1DJ2lkYE3ICpJknlSy4Ysavc7yuXC6YmMObMgb4GOqUBGbz4TzimAbOQu0D0WI%2BmGb9nTvDMxvumzy%2Bm9Vq480FGoP%2F%2BGUYlPZDBbehPy7RAHZvQBga7QRwEMf7cSmR8SvmC9TRnCqfIryO88uI2F0FyO5WcCB%2FfIDjVz74SSwkATRYqKkrg36kMfTZED8Op3STc3Yw4m0SPoQ5viFQyN4JtLJlyUiHC8daR9p5NHhf5nsNu3gl0OderS%2BxopHXohNEs%2F6Ny&X-Amz-Signature=3519f72552785f3a18456ec7a50dc094691f70b9c86389f53e7474e3006a7dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
