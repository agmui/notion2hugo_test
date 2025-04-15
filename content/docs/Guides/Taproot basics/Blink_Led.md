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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFO6XRPP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAztiMsOUQiIF7%2Ft5cD14PE5MlUjUFt3tzkyPcmR2NkfAiEA8o4oUHBdR7%2BYq6ePcpLvgDmtrz7VfX%2Fdm2FASZSZHJwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDL3pUTwyzEnhvBhK%2BSrcAzxJYHshFJGdZuWmtIrbCU%2B3K35DndMMYhZnVXORg%2Fx4WNCfkvq%2BfpS%2BXUo9Me5uCWu%2FY1YeX6gh68wacWztKceB4Kh3W7jPAaEnfBBFG9ox4utwNUagb1sRNhmi%2BKB31qy1TTizaPA4BBzqbUXtqSrKnP%2FDqRS2IGMMSrzAQvj0J2f5rqcAhnMz8dmMDzG1ggcYRMmibnR08I9ttuky0J%2F53hbBZOMJCWLuJ8jEUTA6%2BD06YhwKuFGBR33SYZ0b5R5YRVh6Ybut1YRiRlRu8hBnuqmxWKbq%2B0JNDf8ZeIw2c5pz4WhC5gP%2BdtKksdpx8Eeg32aDfN8AwpJ6HuIOXiKLPtaVJ7Zsrd%2BuVfb8iclzb3rXf5ihdYSZEX805DTmOoQ30r6CdNYCK5ZjXvcTeMMcH9JppkA1pHg9Dt23tB62V%2FisexUPDV1n4OMBGNtg9%2BVgARP05pMjcrK1XQjUQkh9lA4EwOHlPbe4w%2FZx3kn1fm5ih%2FZvjfl64tUHdYEyR7lTpwpujoFoS750q3GKmuE0GWY%2FMTq2G18K8SLy2zSrf9gAoQCsbYH8lqczafOMbqR34gtQwNmCQmmuv5MkQriNLhnllgKSfsIulkeyJ8h43zfQUWvZSKV7kJcfMPDW%2Br8GOqUBioNI2lEPr6YPVNWxBZ2E2zo0Wnh1s9G77gNOBpycCeUa6uaKL1ZGdpeHUAW6WP6gDAstLDe2C5iVJCj8QK%2BDWUq3CaMhp%2FEFBDTR6Fr8YOWscXM14chb46hp3LqonO6gJmtsr5Gl5TvV2C2FEc4BPGz5GvKI4LODqMnucxfkvRAsdPIkG%2BBG6euvBw%2BFx4puAdw9%2BiJvwTtO4rPyg%2BG5h2uv8nvE&X-Amz-Signature=03976ec746707edd5170e96053b8c8cd8fa1f25cd0fb737c9e2ad124d8ffe18b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NB3LGS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEodzIhEoUOaWqzbXt1CB9GkdMkNx1E%2BqEz2SpBRV4gSAiEA%2BlirftW2uogVZqY%2B41%2Fj5jOHdBwh6TGOcFUtueSj59cq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGMhpOncidj4Jmb9YyrcA38X4ClgtqEg2jzuIkdsjXD0VSM3VbDB8k9KI4WjHuwLiNgi6ASeX5UGEV%2FC1sxLTNRPVQTGOfm7%2FYzlfXddWp9vETimj14n%2BZ%2BbYi39eqLLy7qZRnVrEFxYDYEIq4fZvJpFpLpv1bd4a9eZhQd3ngMlcFK3%2Bv9SrmCI%2FSA7yWGsZhNUOtEtIC8xumszg6BkEo5pHFF5hoNh5eiCr8CjXNiJMkamT2hUnL4pVq3MGdAzCjXuDqllAit2ADryqRehwpzdA3vWKnAQrhnL2vP99bWuBthYb0KEF0tRXowylxAguTiZ4QIIZFzWKb6VSRggrC1qvMREGfe8NyFfm6Ur3cWT0NTwDcB%2FbIjdSWa9wZC80TkiGxHjmtvcJXl5U83NttHC2K0qTYzyhK2GdznnCH95pZNgJwSqSCYS23o6PwdK%2FGQC5p8Vxpo5%2BjPxOi5JTqAn3yOmyUwjA9aD9ySwqUfclLFL1FCaCyixXoztRVz9iy0BQbZO9ypFCbls%2Fy6xS3Fklx556j33jd%2Bf%2BUdXRnDQ1ZZ%2BgwNLT8hsV%2B06bWZuQCeqPG%2BegBrH0DjVJJf8fWa4lORGVO6HGOun%2B%2BHS%2F25AfyaV8FyGU6kjhhgOkoIVgmjhfVONuqoReE13MO%2FW%2Br8GOqUBmNEKdBqzUQByjpcTjoLSgUXE1BLTrzqCGO821bTh6i3ceIheNKhuY4CkXgCmtvZIw0XaaqelB8MnBcNZwEUwaSO5Fmm8tqb4wWZYQEaLJ0Ra25X4NZuPJrcrvYaJmElxkLTx1A5fRmZ9z1wz%2FE7O1sCWOtwHc6G9luJw%2FdQETIJyIfdD3AhYntIuMYpPTWCH4AzMZohAuiLWmpQVQlm3yX1ZCutl&X-Amz-Signature=363ebb365b0978d16701b994ebd1e3a840829a259508d050760b02e1ba90be60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
