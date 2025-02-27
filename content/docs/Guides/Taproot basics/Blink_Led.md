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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QBNW6N%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjAxf5BXd7t%2FcCR%2FRiGJxRG0H%2Bx13G9zB%2FZj2ciblFtgIgEGh3d%2FhDD6AHT%2BZbjGG%2F7ZjsfxVLKoVjNTAkdeowitIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDM3PHUQ6fFJNDn7YCCrcA3Io5uN4XlPWVPkX%2B1LTChItu%2Bq%2FFNUWFO5jx6zTfyuBc1mN0msqavsDYXQ306aXaXkBMUSeWveRvUtHfd8JU63kt254TRoV7ak7F92uaUOA7jzMg6%2Fm6xjy5dAmASuJI2b8SuUBaVa9h55uDhUeROqEDyA0e9pQDwL3Ad9ba32SZNg2X3D8Eer01hMc6MaQIE7pcF0EWb2X4lr56lj2A8PkwojoTHNwO%2B5j4WlK4e2lpfRmZ%2B9BN0soXvGWAKNTn3o8nsrZjq9JljGdWbCmxpf8XY9QUfawrtNMFXQCXKpUt5fWNrFolrEBgbohhI0YTN3d19Mp94O8VjQdntaQT8MY11l8iNYhNk7iPwp6SzMNNh95Xd%2Bj7CBMXAqHGw%2F%2FBwHDCxOCOVA9gtsYi5f4omnlIgR2xSC6tjVcAAfV9PhP9cyOEyIpVQEKHRVTRtCGdxRupR2RC458vUFrziz978HqNfAyJA7wexYrF0s10xUtzP%2FJPKHDxRq8%2B32%2FetZlCcfy4Rlvox%2BVZSR4JeMakOXqrzUlimSAgY0jRroXFyGOmlJ6L1aKsRbbYNkMLJw5xUpF%2Fk5e6LEUOiRssgwYyRMur6WaYNvveUYv9YonGNnBoN0yskBqWs0BCWmtMLfQgL4GOqUBnAjCu7hM9JaUjOgdx0VNJp2FRY4VT%2FCZQ%2FXliBmXy5LMi2gflIuFzrR4EoFIfjFofvo3dI%2BS%2FoOVfEgBCPj%2B96pTEZB7n0my5VEgKu839%2FbKQMhaWrPkjuvBSOaOnlCsCrJloXDXKUj0H6j5RHRc4jtVW8shc%2FAm4TZbgnud3mNXg0oVOpHv2NNRks3J4Fh86YTdXkSLYjFlgk6DKCjnXka7JYx1&X-Amz-Signature=1e3342ae110f6bd7e5326bc87ed5df48f675ec006ca37a1ad71f3435d3a78614&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KO5PWT2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIF%2Bms%2BWc8cCPofPKweOhwkrpXH3SLfmLcFvvrs9o8IaEAiBqVqerek5M2X5yUKqGELTPifXWkpoDdpllsEkGWuTJsSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2BWOiBdkFoVK%2BBsFuKtwDGeSaAzo7bwwpB7qhQ8mQw2JMALJt6DpElulVvRnODjhLuJ3CC%2BT0xYXK%2Ba9BwIIwH79NvCdheoeFPct1J40r7%2FfZGVeG3%2BeRw4EPUoB77SmWB0Hx7bx%2FRyWMHABveuoCJCtj7aMdIUK7zTXiqgzoF0Hb7gvNvJJMueu7j9zYuoiGFFz7ZWq9DRvsZcSAxbaUze3KG69FIfHFaVsH0%2BusxLKj4GnaqDlyXmh49Yp%2FcfiE92R32tPL6aUiZss0w5WbC99C3IMb67ciaywn%2FYHQLYVhA%2BMCwbpqxYe1pvOh%2B%2BNLATBR9kYGe1y3tY2QJmGKAQ3ZqDdHUyxVvfnN3hPVkVvIl4m%2BZfee63b6u0vCB%2BIZLJRYDRT3dkdIKu%2B0fvOvAVkJM4msFLX11QhPRjQb0001ZuY2dSPLSbWfRkh371iWoEhOv5oKgA2Lw90hoQ%2F%2FBrKvqlL4ZKZUW8hvrkRxTv9GAtVY%2FJBZSBqLQv6ys5EIJD4rmzTuaaBToynqMhV48S%2B%2FTFM18yXj%2BtT6m0r%2FDu1m%2BsjWCehN0RI2Ru5YYVqHskqQ1ryzTC1dworNJjJxNQFwp1i2UE8hXNO7bx0sbPKkjiFqJhWpdUPvt5p51gfAe4BuLbRt78XIFWgwutCAvgY6pgG%2BbTvZpCdx0VX%2B9xnKkVNmn1H3OpWdyV3md78Hq2l3a5l7HoYh0sQ6JFmHvq%2FfrcwO%2FAun1Ph3j1VFluu4qlwEurrcOQa4tcMrZzDV1UJDiaix3dPONUr36SM76wEJ0LxmBc6OeDEj0hRB8YN00f7wio1RgbfuP%2BH6fKBpi0I5661SPeF8G%2FSskMSnfAbLmJfOWgVFVUvNLHaCKtnKitGLWd%2FRB90W&X-Amz-Signature=64de4dd647f2e30054e35aa4f8d6ab37389b55af9bae3931a37511a8ea2b19e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
