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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYG5BJAV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjgc8HjAu2bd9x2K1K7tsBeXXE6RZcjBxDYqfgtzKjjAiEAtyAkRCdBqTxHFtex6syXN%2BgAAZ6uf2evncLcv001oTsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP96OytEbbc5beqkVircA9KLIHLaUM9R7PKl6UGSjhI5r5HeGWEr0ySyiXtVln7M6UoCvGPV%2BuDdEA0EkWzZEJUuMd3D1AuAVwC0siSPYfPLCl%2F13xW%2FQdxRIZDHv0DL8ehDYrBz51rTbfsbnr2cDgBfZqhuWJdh7IrLCobRYJnB%2BrcABIbVdDQZgLkkzbQarArsTGp6u07S97GNV6d7er%2FMfxPRPb9%2FqeCOVVz%2BVIISJYPNnXt%2FM%2B7CezwPEm4Nw%2BJbFY1Gfgu53T76fcdSIEi9gJXd%2FxhXN%2FnJ%2FVqVQFhVp%2Fi5ZvzwgPJRxjS5Z%2B3taFb6QeMCo4aPCVUGo5pJibLwVr%2FHwgyY6R5X%2FckVJy%2F3pM9m2GPXfybUDF0tuoGZkclSapcvpOKygK%2BHmpmrtzb8L5fmoyZ06UWoJzeMSjVQVtQQ2etchYjvPUjhx0bG2BbqKZSfZ8Jw6Hv565CTOa7un70PJeCYwFTJmc33gyTQzXzBJZuqnlKv5%2F%2B7RFeB0jMxt%2BcfOO3RORcmH7SzRbdO5Xtb3XFj6n0jWMObFsgWeaPbn%2F8BUskqxy2exwKrvTeXnXyW99nwk2ga0ZJaMJNMwzRZsEmfE1Py3LOwgz7sE%2BYaOHqcbGZSy98%2B6xCoXJQLZFSGFTcgVgZ4MIqZ2cIGOqUBCcJ%2B5gIRa8xTHZKzAbJkUw32SitnkwBA8XmAOU1wK%2F0y0%2FUUaKSAGP2sV75XNgG4UjNPvakfpMUF6bAcuwCTZWNysu4Zhld1lJ70F1z7YGFaiB3N3NNu%2B%2Bjiv8cVb%2B8nfJUKHAxE2hQMR9EOdCE0ND1SIi01xGkonMgmDxYsp60T3Fzbhmp%2B62QeDEkGfGXSnWinhlLX4Cueg1O6SHrBWLZ77cIQ&X-Amz-Signature=bc90487326b90abd6ec1bcb6e45970c1096213e9e615b1c1f0f1145c22ec8c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2OQISHF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWaiwdtV8nsYu0fL2oRGdG8gnDQsgVVgnHcKBxr%2B5i9AiBW7DNs1cLb7QOKgVFFfg8pA9%2Bif%2B%2FNZ6oV%2Bi0rY2gaHiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMtEWpFHEiGoSHHv8KtwD1YJCUdH%2B%2FC3EWps6Nxg61u35Z%2FhZJ36Q%2FMJGgjZe65A3pLyMISHYe6OD491YvH8ezTHZBaR84l7Qj22vUFQNn6FxOi5awSAlUyRt%2FZFVzIAnBojbYUBJBbBjsoHeXdlQNFM2Byy2QfM94XuM%2BwwQ8MY2KnwOExuWhRPQi%2Fz%2BF4VeT1Iux2WnNwp2BG%2BVgWX5bVvQ8hIC2U85XIyK1ww2OgIfbmQqsH3iYnOnRYP7392mPEtNuCu3JZm2uAz6uEfdkNiyiqA%2B8i1N4PaJjnU7B1G5B%2Bw7lDeAv%2BvWkrzSNt1R3HUDqkPcnDAQ9TvSnrHaz3RSb9NpOk1QJrIOZOhydVLTgP1GQL9dgZMzpiADCEIUvMmqG520IpIFBrjrUd3h1Nv3cN3jQwzAo9Evf%2FZINNeZuu92T2AlfaBV3gK29bIFAS02G9UlN3q5g1Q5vGYGfYnJv0DIa69lLBTIRG60pRU8t7Nn6Xttmzgo1M8ltM3NkXOi5AGel0URNh%2FIEbiL0glb8CHWrYZ0CWCcymxZORBVS9iL4rFTlDCc%2FWFE1tQrL%2BqVoI%2BKshiFdrV3W4hCQZr84QdZs6Ic4uEMHA5%2BxGEkFmORFGbA8p6m8LtlqewHusD3Mh8sak4w%2FJUwn6%2FYwgY6pgHN2I8jch8sjxGbVP9EFJTCgbVAv4TUHTPkfaBpvqHTds2tFq4%2BL58CvFF0%2FG%2FqFIayesbMfT5tHvyoXtxoeofSm0QEgKBjQgxwEc71pW3qG7RRVH5MfDPaGWFg6XQud0ezcgCCWMAPkAMj55WZgrMCsLi6p1zKzbJou4sYL6wowTOFnY5W7BUntCrROUQ0Mz%2FmqrdkzVfds9Dj8%2BKO2kMtQms0L8Mo&X-Amz-Signature=6384699e41ab6e327ad2c56df68fd28d0b0cc36e30ceadfbd8d9d2eef0adf700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
