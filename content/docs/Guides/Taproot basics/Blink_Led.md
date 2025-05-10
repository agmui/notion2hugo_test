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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSEBS53T%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBA76O%2Fy9Xz%2FkdMsGhWjL89QndsTtmNzpz%2FHe3tq38VKAiA%2Fzri%2BxPjywRQjEQlkq1uzdLVlUFxq651xeVr%2BDS5exyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4DMJsy1wufJt1NMyKtwDSrESvrojhX97Pq2vs4d972iGY8SU3wKVd08EhbsSxT8F0VmbFapbW%2BVDCndJWB8o8cvoq3SxR8x%2FKv7bU2%2BOxd6DiXUl5qYV23HyrZgb3ptbEkNpldYIYhReYYSf%2Fopcen7n57bT%2BA8vkxzM0JwjOLy%2FCp0WUciwo%2FiIRiC2ySJU7KfKryzS2Kj4GsKF39VVgD%2BZoJUUfKj9T22ZQ%2BkI7iYny8AYxV%2B%2BjUIpyTJWJdJ%2FeZ4FSDi30JI1%2BU6O4HJ1cT5tyOEumnL6C9uP6GHDB9kR1xGtLL8hwy2tqyZVWJg0LFMyzeZAo31Aqi3ZmPh6m4lacMxfrzs8N%2BtenvwanTFw1J696t7XBEoWaa1rd26pPAb8YC1e9bXJEFyO0xplfaAYTB1CUDxb2B63B8nP%2F4kpKeYRzAeH2TRY21CjOSaeHM1l1ttbJZtTaynAXMMhFp6ZjWeq%2FqtvntLi8G1m%2Bl0rM1OcVLi1mqFk9C7oYpqSSKJX4N%2BDiRUDIHUPs7jkVvLo1O4hxpNiohVDCYhUhqGZgOmx31iPY5sl9NOR4Fxf0YOO4eOimNjgw42EK4tw0FySysqjCsINqzkuGQIedbW5IxIQsotyUbqHmIh%2B0un4M3bvGL1YutFuWH4woqr9wAY6pgGVkCzzQH%2FmPEejujYmRqRxYrqDmdiUarz7JoU3z1oVrYoGoy20zNPlDVqqHg3TsYf8H0hdXxrDawkOyQPNI92xaejQ7yfpxkNSPQzf2GqoSWtWtwInkrURPzt4s8PC%2Ffw7r2JmEL2EiyCqffhJpWDRaPW4%2B89Pci0Ztwx1VOge8EuB%2BJ%2BMpcJw5ElzSo%2Fs5vTq3l6%2BzriqAM5B0hfaI0f2c5ztSjnm&X-Amz-Signature=a06a30c11ada44495b866d7579083adad56af6b0c27b1d2784e62cd58abd2454&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CAJTC4O%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqqLumS1JIDPu3IjQsvRCT0ozmNcy2ZR4FzAhKLtmRJAiEA6ZTpQz6yZsPIhMlTkI4dycbc9JSUvPHxtSOKxI8ER1wqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnQFC%2B1JF%2BoPz1ZmircAyct1nJBFArsKQY8w0Mb9AIYs4FHKNKeWfIJmFP0S6Om8gsk1AEuYrh%2FujPe%2F9kbM1xUZEqKWQaFsO0buTE61NcVw6B1Wk5T6oEI1xv2nJT%2Bjqm2MjOmAst5RCNFUkKJYOzTPoEePdls4k89L7uREJYeFK3Eig8VLgoLzD7hyDut0nb5KSSmtXn9O%2BgGKWyZQjq3lrneMLafWojpCjD33cgZvkY33KfNtaU4Lg%2BisxjDJ17RtlvnSx9R3r5klsRdzJyshzI7lLQm0QVHIj1za3iizJDYmKk5x%2BJcTMvqQY9hKdAAIkd3L%2BDgq%2BVBjfY858F1YS6HugPW5v9dv0ATR%2FGsPtyooAaM%2Bw748ynpF5y2SF29sYlwJJ6Y%2FLXIIiOPCCaL5Mym7P5w%2FnC9Rowi2mEhH9AP2E0nHH65qdF5XLwKt6fCjJ3GEv9mpeiQpLY%2Bw%2FFFMzohFUHVvce99x9xgstDlgJKiffNaYM7bfRYbP2f9BMIED9b8PtgCebtJIctcA5ec5uwA0F2ydcsEAEVgLgIjpCEMN8cVlAvnNnkbhp%2BWa5j%2BBTOx5uJ6K%2BZKZFLS2KSyKynw10Mpq4%2F3CEPuZZxT6Eqi8PWD4E1GeFmF49UH5pRsSGbzMZ45cVuMOet%2FcAGOqUBG%2BqfhTBPczDXCkHInKrlUFwqtnc52fc7Dz7ydxXVdUKvpsyd%2F3H8rutKCRySyCul5B2CidTVFb2GWITjqAHOMnM%2BjROypXddLGkcW1Nu4bjtipwbolUslmp2vEN%2FertrtAYvUMLktpSemLb%2FT0xGpiZTsf9xMgInY6jATLwsC8adZ6XG0Ch7nXYC1pvQzWFA6Q%2Bb%2Bx%2BPgMIp6kr%2FcyBK0moMDUm3&X-Amz-Signature=e71dcc26c1e20cdacaf33018d3ec1d5ad5df1e15f16cc2985ac445bc3b7d7932&X-Amz-SignedHeaders=host&x-id=GetObject)

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
