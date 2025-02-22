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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466445DRLI7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVN0ZQQ44dygUrev7a5oT%2BdenCEnxv%2F9uSjuXqgd6YyAiAtDFptC6GVDtdzdNBbBaIqDwOs2cHp3aI3%2B%2FQ29LuCiiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTEG%2FCcaPk8yFu%2BzKtwDBkMKM182a5suTvJV3eDCObndvbJHyTVcRSBlU33wb0OsYc8qI%2F0a6zSZdR7epRtSTr5iaxiHcXN%2BatWFYUa5pXjG2zavoHN1EuR9pm5i8fKaMci2OiP91%2BlI3rMxv%2F19NOBmBTJ4u5QZQd0Lmv9YvzxW%2BbW3ps9mkU4Gkxi9oAZ6kHC9Tr%2BsRNcH%2FmnIU7MjGISD6DIaz0JCFfGOYa%2FtX8eNKD5qI9OmgZbTUN%2FVhyVHEAzTi7KXOSXSjHBl0c3iIjR5gFoGqrlyNdOtxAflrqqDOfHG7ngZ1weoY05myl8vXDfgM2dutmCgTXgeINnyRVAcdnxDtRBbaxtqZTmgBvyhe8NbL9WAuxMpd8d%2FtDFmbQZZi5TW8CGVuP5sma0ZH3PEj%2Fic8vzOfWwJzJjy%2FpoKZwXWitotqGVqYT56UWeotqe32KCLWa9UVBiEBrlmWqbub07r6EYDb2gqQRs25z99WPNMKLNgzmh0z7dNYd0dkdD0uiM3Sf4PEXxodFn%2BAaXwf8wxrwg%2FFqjHx5VJSe%2FugacocSajEQsGj%2FFsgtjslqcAeg92HgKRfGZi8s4cLWXw90BfEwxktbe1mUhtxNy%2B9Fq9%2Bc4UyFl3KibTaDl6gB5z8a2gGfTautcww%2BfmvQY6pgFF2CtCZAfE0xKx0%2BCVUl3Mjb3ylW7WCFrm%2By8kVunMelDzucWomp6G%2FDhJ0DWgAU81YHIZ54FrH770JGiwLN0ERVOJkgGQYyVBMCdhBJ3XCoXsoYctdn%2Fb9yzYHktAikSDz6crul5ElxXIhKJIXrHE5rS4Do%2F0oFH2GcGt6fU9o6gaUUmQu4%2BbkgkvUo7ODHUUbTPFEsGor2n5HbDHhzw7jO3xaO8U&X-Amz-Signature=34b9a9ad7dda98633ecd87f290cfdf08d79deada3d174c961d63de5809edfe18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6A2FYW%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJx6T%2BkaHotO51GmJvMOAiLwdgjZM%2BOm3tOcTe9GztZAiEA%2BRrQsZySyLmc2L9fk7zsRdOmwuyb3FDu0D6yqlldAVEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWq81%2B5wwjxKesLwCrcA7PCK9%2BrAuW2Arep6%2BxtsRBa2Xd65%2FK0j7XM7a7b2Z1VtyXPbJCXf2D8z5Yqs%2FX1hP%2FBitC8VgP%2BXcz1LG14dFlXX6bD1kDd7%2B8etYdp%2F3q9I%2BJpxO8w6KUF7XZn60q1mtIJynh%2BN7NQ%2FRsK8i1nuLOnNOnXcqmkAYEcX5V5WPmp5zNm5JFIek%2FIVeog6RSokLS8pu2U3J5kHNIy5g0%2BXRaOhpswwRwXYpbYokL7Tfh8rk6fP%2FvyIxs2FnlOEeySQNuiLP8cmjYU9CU08onTFk7qiiaX7O4gIy5nmyS2wJcef56qrycHrjWTvw72DxJWTpw7JoU3ve7asAVL%2Bm7NxsJwUxyUSWMPA%2F4v8tN0cWuOQhdEPcgGtwfJkNzAdZXgWFgwP4bVnZ6si7Pe%2BMZTjNz%2B9E1TG7aRdUcuYUbWkyjF%2BVBTvtTmNlpHlNHO8zNiC9yeE%2BGuFcq%2FI%2BuFWgbx1uFrSfKcxJbz2mj9WROEhyLH8smLvb5cBUD1l%2BlUUdw7%2BDKC7nin7FTBEKhI1IJgAxbI0Kr9LF1nsIrhT%2B8UwHZU2REWOeAKa6o1qrQjAkCIh%2F%2Bf2xCqQdNtZTeomg3dNQQIwIWNFts9XUdBjDrnazCm1I4bEX5AWtZJ75EnMN%2Fm5r0GOqUBxHZ96Q98HcWBNcL5Epm1sSWtouT2vb2DRxOYwSLKfrmD%2F%2B7hjL4Fz9tc%2BBDyW8NZNKknW0vKRasGXAqxu%2Bx%2FteJppKNirKsmcOy%2B2ouY0WE4vcWWuOkHqyr2D%2FwvnHW%2FZY86d%2FmdKg8y1xw4BL0S3pndSZ%2BuCPiCaJdF93vX97Io4HloI2J0uwcywGt0Iv6b%2B%2FxPVfcC5uogy0aH0GMkR6oIBP1R&X-Amz-Signature=7f082e60225872648876bbf86c364ccff1c1777840b506bb030c4ac4a935536b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
