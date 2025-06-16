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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKSVFDY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCYE6XkVmBPB%2BTSn149fhuxFM%2BJvClD4BNvhOznUUeBOAIgcb5swcqV3nYGbGtWP2hVs%2B5eKPANOxOFe2%2Bjfwaoypsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLE%2BMORYZ3d9TUSsLCrcAz5hcVZGhCuZ7bOlA%2FHnzv6SnHKOk2rxwsIxiOEF8Fn%2FPlMl1nAk8Ugc87R852CFtgaZWTWASNi%2BxNtSq7mwJovjk%2FTmy8DL5vbj4ncuQfxfmKCWgtSSAU%2F%2Fh4eKs9U01UwpkPQgP7bYm2gdu97aSjr0AtZwZ%2BepOk23yJAnPSBFf5zyMUwX%2BRmg7rZl%2F8RdocYm7qYx5SHFocgaaSSU%2ByIXEOMTx2067Zaa0pmip6Ra0K4dhXScKAF%2FFZwTywQwjJPUBBo4UWDzk7DmOwiufr2ncuNCTkk7X6tGSVsLFiMpotG2JS9PC5yxoo2RVGk1hs5VUnVsywpld%2B6CV2TMIWIp1ywSUe%2FCZE%2FJU9kLE5HPLGE5TGxwUh9vc9MqIjI3QfAlCRQ5I021hbqztki2WuNrf17kHMjn90YF7zKaTmnVXQJIV%2BpkdvFWtBgQMgWrNY4af6GX3TIKFRZRLbtBTgXs0ljeMv9Yn56eJJ3F9vqAlkdUN%2B7VtVmtrCA9wvMbYkI%2BeS0LPOJzm0puib0tCzsThpq9HYIyXEBQwdRAPZLphKHDejcgcIPctQcoQYRkuwXrxgqsK5nOHppujXuOun4DDAt3nGxGngKgqSAl9wTRaYnZxyMYUP%2BIJF5gMNe4wsIGOqUB365meBf1CrggpdfTalC4cC5sf7c7XbzqLJCrTgHFOmuHzREnep7avyy0fWfKi7HqZ%2BmeoOWyfOznBQIsdsvkGGI10mZWinu1SB56q9Eo%2BF5B%2BJof6O%2BOF5ON0hhqUKmTGQikm%2BUop2%2FU4aR2bM%2BUP%2Bvk%2FNMhgevVjaPKnAzJr8J%2BluOTcSWxnog7kS1EYz%2FPWBW%2BM1g4XybCQI2YTu%2BYhTWqhmlb&X-Amz-Signature=7edec3b3fb3d173a1e4ceca048180e733950e181db6b0170588276c75100686d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3QZQ3W%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFuKD62El0pRCzOvHT7FvxplV4hS13LIjPw8XwcXgcoCAiEAuMtAieZ8e6IA91%2FMEUh3tXcX8BupEjkFX9vt943R1r8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLdZVBrAGE79ROoIvCrcA5aL0Gyz6Q84pQX5q4I2w%2Bsr6lXK8A1V7aZcrCXEUY3rXstkpCt55A4MFvcKXVx6yC7K4zlqZZK9tTfMee8B5IbYyF4N6jMzcYDGVgzxFJqy3Ft8tKEfh2TIHfxDJwvTuHEBo50P479JO83QHyxU9NqyqgfQwdsxlTe0dGbVPokABd7dQD4YIFBFW9vL%2FWI7ByTAtHwOspgykM7o%2BsVPMXXJiToBTsxmXIIE6IwJkEPvEhfGlYWmYNsnvQhSMjOWI6st6qRKOBe5L7NpEnVe9bAP9H2WDMNXa3ohXDWg0fX%2FWePNav7FdplckjlBpZ12ORWeYKBNZ%2FZlAJozbu5FuAOnkGGQfBj2c%2BEd5IE2Pgv6jFmJyk3Yd1DONtfEW4LDZ0XJXXshZorZGMQtozLN1Uq6GLWkrxMVcbMXoGkq%2BE4yaiS7MTNSdoIllO5ebynmFp5QPUekn173FWujSgfJYBY1Q4X2IeoUOIL3tup5i2z6bGm2XYxgnkps6LRFjGEt21WuTeWU2HjHpjmDW80w75BsOYbWqqFqn%2BeNazjlqcrti9zPQPeErl6J1eOa7lwlSNxstfc3Ca%2FvLGQyttoFawGer0Ng6mrkMiNbKwBIgOiyL1QHzMiYhneIof%2FcMNW4wsIGOqUB4rIVLUo1ekz0TPlblQkw9i0%2FmKWNKtiXL8TWZ4Vy3JL9Iw3qLF6H3vX%2BjDoiDdpNeJNZye0cGZ9LhuISmuEehP9vp5jeShDldwFt7fyddlxkHICj0H0BRh%2BZF1sy%2FaHqK3iXcRRGKMX0hEiiRqY5X7348%2FnVSXOhshs6HCtM5pck0eftI%2BOk%2F2se4Z21%2FTsBS2cpE%2FYsmE8QHEK2Mi9OkQPG%2FIwv&X-Amz-Signature=7818190d9c2eb519fbc6ff56b215dc4c8cb7a19698b3df4c2b293e92b7536abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
