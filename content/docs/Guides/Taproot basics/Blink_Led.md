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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3IMK5A%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDZDUKVNFvCpCAjhPTz465nGjviBIrRFGWRNQs7U3uFpAIhAM2Lj7mKULk3gWTBjeadCnH1g%2BKmxIra6s2MOnoVesRzKv8DCBUQABoMNjM3NDIzMTgzODA1IgwlS2VRpSwDL3IwsQIq3AOV%2Ffo3ZIk2DzlQRDWzkr7M3Gg9CA%2F5n7DNZVLfEaW40srfC96ZKLOyvY68YwSoVLprSvOMUhgDOaMVmEMrVr2fjoz%2Bo%2BAZG5%2FC4YF1MMLFEfg2TXpoQSWYrIDx3AoH6kAWsX9YR08SGrVs6L2FDiMhNRCW4vHnY1mfDkfRnsgWT3mrVzPZlTmgv2DT%2FbhOPMFU5k8K16fn2W9uyFp%2FbqbG5m%2Fh0hp66rijFyhFS4FUWVyU9A%2BLW8cjwbD04RJU%2ByM3wFrhcys8aSEqzh5Lr2ClcGde183GDIBdtbjBDGhxtxiJbySeoFfa2exZjicdZ3UuMkG9w0%2FkBU3MNNV4qy7mLLlzyVt5QqnsW0DtWeSxOGRt6RmeBrSI2wqb%2FrXvU2Pb3fiwQtczuBr79BU7KQhHYHS6FNadcq09djyAlVVvP97zIFUprNH55DuMmq6ASKV7OAl1m7uKbeCtYzJMmIXeGNzm40TOVGlfvvgohgZ3u4REQBCeFQpSRrl8lK4b37dp05RhyUZfFmqwJ1HmFCe3wRpSN2NA1Uk%2B6tiJXW6f19dqDe%2FFP5aH8ARHutb4t3%2BzWgErQjR%2B1NQIb0eKcYwouYGyN8OuejuUk69WdDQeP84YBMI%2BRcT1HMFW3DD25sbBBjqkATkdSTSmA4hL9NlCM%2FxbRmR6hNqvGUHe6w2VreZ3bdHk3dfh5CktgJt%2BNJkGtYIxGcEcbx2TE1vGHCZD9KpzcrU3kQWBexQZVm7PuRYTRqhGiDVLn03YPynysJd%2Bg2r8gzLVqb0rCo2DHq5T%2FJ15qCkmiYtPSBNBmQDtHSAsDYVq823Iko6pWD7kaqc8oxH6NfmClAxGVZ9TT%2BIHhdMSRhCTk0G3&X-Amz-Signature=d50813f88e79f183952603f5dbb3caacd2f30ea5818e6667752556023a384862&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6L2QQ2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC%2BD7vmjLvfa6eZpKg7POoWU1S9yAaR9cPZdNJwmrfqzAIgGCgU2eIO7rr3vNrtZPlvajIRHJ4dhLSnzfXNNaew6Rcq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDInh0JHxMmGCZeCzPircA7qUAKQ%2FzvmqNTQXPVvyPUaUjzkmxI%2BW18JFV9I7x4RkwtqaCFKr6SkQOSceeGAakYPq0hX1DyqE6KEQ9MMWM6kUNbaYc2pylfFCho8Cet0FDDuj69%2Bwy9lc1nESXzjumX3UEpprDVdqY%2B86y8jm2RIJAarScoxS9posSSeRAGWWuGWfiYmM3qjEex%2BS%2BiNOeWrMGNkTGBssBs7vmA8vCg%2BQqx24%2F1cSxgCtKAPOo3QHYTN%2BWQtgWoFwlSQe9c7NPwiSlVK%2BZYnQc7xDQnZc%2Bvti63bt%2B2iIfjQy2eErHD7d0C4B8u5nnfn7pXnJiWuNpakkUOtXIOsrdK4wE3xbi7rm74bmRvUM6Owtv3U1qYYPh%2BqLxiMvhxkykZIAaE4p8oXOA7abWTM6PcrxbBSKdPBhTr9Dpa6qjNdKe22%2BOMRtAe65ES%2B0eY7%2Bpe0OYVFuBt0fpc7Rqtq13j8doA9g1KFLlHnCL2iC6QgHTP0bUOqXU27keJw67SHYOSkME6Cw5fE%2FyCi0lukwBGgWKRZIwTDF2uvw9zk6qKo52z%2Fib3nrRWTXImkOtA3CduCW1%2BdojIMbm7hiVEKcRdsKwiAEISFPKQ%2FCdo8kPQ6C4jLGN084eNs4X%2Bselt%2BEh4A%2BMLGxx8EGOqUBvqZOL6TIWl6I6OdmKJ%2FJjPGLl8nACkSE7ILgpGY4735L%2BbFNM3AOeHa1rclWZm3MtJCioy1WW8roT1rzdqo33Yyx%2FMDa8Ndvq498ZQ94z2UmRD9u4V63mpYCtXmEdBJHXMB24EMPAc672xFNQXeffdySh65KYJGc%2Fm7G%2BFN4b862ueQdPptuEYngSMUXZB%2BCUyS9Xz9u2JKBm0%2FxNvCdaVIrdMIZ&X-Amz-Signature=f45fb07b83a4ed1278a4ae9d07a6d4be5915c761993b2c01f4de6bb72165b5fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
