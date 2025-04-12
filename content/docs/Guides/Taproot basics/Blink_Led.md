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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EBT3CN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDV6PFk%2Fh6RavNcJMztyAzdahUmb2h3zmH1Ahj%2FUVdIRAIgAQIcD2t2nebnShmhWZl33rHsTDJoDMHsw4pW76RAIuEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbArtY8c04m%2BFcCqCrcAwfDDmxvIwhkeUMpGnEY91XSzsXGguMbNLk%2BPMq9winpF549zWnVDmBQJ7Hu%2BEsinUvNagJJL1DiW32pwvPo01n2JwcEQqW%2B39o%2BBidT4R409FDs651b0vIXeNIGA4qh0KDYIY7PVzbJUxMf4NSkzWzND4Uyw%2FMYnztX8U1vk80BLxc%2Few9b92S%2FeckA8SEAVHArb9bCrleQZ5H4AVERa5nIsP3HLOcNh01Dx6fNriY4L6QaC%2FDtc%2BHHOtjqkEmfnMmKW81wfOQCNbgyPDOyl6Iul5N9y4ObjoLUp1DskdI8XfsSwU6GLBa7GLbTNUZxBaLuRWedjpErC%2BeiCLJRvQ3hAj7Iue3zeVh%2BYInsZqMuKHC9JgvxxRxBmUG90nLiCifeiYNcfaalws762xldTAf4Eo5Vgq5QFBm6ZzDdTr7YvQh6PBx%2FTtacr%2BL8ooXo67dCIftlTQbb5ujJmCqJLEOeB9W4eFvQKYu6s2nE%2BJ5NCyYNfUItwa8ZGxXEi7j17m4QJ57E2fgIAF2ugpoKOmGvAHkB8l3anRbh4NWBhuktZokuHC6sisLUH7MYibLz9y0vZdf272U86C6wtgyefd2NvQKvGXz%2FyI%2F80SLc6o6dgbUlfUKwUBbhhZbwMLuV678GOqUBsCOpUxHKcVTtqNF5dmA63aC%2BxVs%2B9X7iS%2FdWe%2Bmuo97G0C%2BNAwPk0398fnqylAnqa8s5CvsIKbNCFYyjMs%2BrMpG1ThiuCwN0GyvKWHO7%2FBwCfj5EURlvdp59m79kXEMuIzzFq4BjjVUs1uGIkaKDK%2FNOIb0tCgPUwZtCM%2BI7p95JrmD2jFiI2f5iUYWi1%2BBjDMhJyDKcLatA73nDqMb%2FoRJot0NL&X-Amz-Signature=4cd799cc411a3d2e86037460cac45fcd6690c31343915d18895c657ae98a4bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR54ATAI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDjAwa7IsiwnAe0J1NoJ7bPOMgxR4XCaVjVKkEr0FIz%2BAiAsy%2BpD7iShVJJGRDuMvNu%2FIGxYel9LEyay7QqyU%2BLdiyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2uOfA1U6K5qVcG5NKtwDfpfDHamZrJ%2Bl9IW3NrEWTgPmJdIqOoxyjTNuUx8K3cm7g9sUrgOX7%2FdKYX1bmw3c0YxB3DX2AMhrUg%2FijLreHgRFYMHerUETPniuw%2FR6o7nYlXVbNhmbweXqoFGpGf0pa7jbBBY3VBq0W2OttOoDQdHXn538GxuIngfofYQZhEGUUfz9cZxzA4DLnz0zez7%2Fi61r46lt%2BTyapBqC%2F6EY0Yv5WSdOfWsEx%2BISG4WjeI%2FRY4CUn4uyDifLZuVeOcQ9vFsitueDbpEo87HPbEERm8MFgQ%2FVvYU3kXuxeT%2BjuNvyTz7ctWTbHwOJz7RGhc5CPJpuBayDJLIWttpi0fTZYNrTHr8EHJPqd5GHtEcAW1gUsLCgZkGvYet4hFVmjgsnV4tViEfhqqgAdUdXjVsWa0xh19rLJQXTpk%2FFOE7czePrf3jtMt0PvMat5ohU56%2BKD7rsUGFPfbc4FFTfgvexEcuTRGLHgvh0TyyfQx0lyu3zt28wafhTB%2B5OxdYrrUpXSplRFfxItahkuFiSK%2Fb6rRydIhh9tvXZyWp%2FcOoCoiSiyli7OSiJaBhQtQqaw8fmvKn248CdKbup70E85%2FDrmT%2BeeahceSlv9dM%2FkK1BpxT7WZE6K7dAqt8ZniUw%2FJTrvwY6pgGsN8%2FGMVuFtl6bJBBK13ZsICipZj%2Bu%2FaPXF%2FuUpKefkEn97i%2BW1slRm3q9vy7WszS234efn%2BswvETualsn8%2Ba5z32JUl8%2BqGAj8DcE3eqdLe6COtjuCq2Bu45bdoF7uCLq30OhTrnDB6mcgthV30BlHe4vsnOdPN5%2FAKHXdF2uYpWRqHS3GnDgqqVA4BLBmnkfwCiksuZiVdo7iB8LaBU4PQWsNeIX&X-Amz-Signature=4205c46c1526210245c7beafd871d542f5fe1ceaa155de0bf694287b4d176dde&X-Amz-SignedHeaders=host&x-id=GetObject)

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
