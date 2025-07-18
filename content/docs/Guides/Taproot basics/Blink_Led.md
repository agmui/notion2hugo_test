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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXAN7SOF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCWWn1zEbuNQCTXlt14odlaEpy7HYXSML3xq3Tem6DcGAIhALGFuwSNPsEdKITe5vF3d2dBjo8jWJrbZtLtFpKagzhmKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzd8217DXZKnAyEi8q3AOw8tXCN8nhrIEkQUnOUTDJkg%2FYqueOGciec1R37%2BMJtMVAMFPFNvKXkuweSm2ji%2BaZB8DIsfJNmgxFSmPq738zBhQtLR5PhbM9zKpQH4KSmwQAfSUQAtyRMOGJBfI9DlN%2FtAqNw6vgoqZAcE6LVsAvP4ng6l4U%2BaJOp9Y6cg3yJEHP3KZIOnk%2BYmBKDeDUT%2FTM6DPij2yc6GBkEmw9jop9Es%2FsSsRk3OdcLofeq5B0iJZtOI%2FTBNQrRAAXW07pdbnUBRED0noM1RdoLwUybham6AHl%2F7asC86%2BolTPKWavixSalGCo0BdbZwVJVzCVOJ9P7SFn%2FiFnCU6fC3aGqu7a3x%2FTlpyCcLQYmCoLgZmtyb5kbTll1FFVQgFWNgA82dA4yEoLyEoM0Vf56YIFfo9KKytrVCTBbYJ2hG%2FIcgoE9oqgv3aRhzE%2FvjmgoHQlNDI3GF5j2jWqHGcQuB5Od0gF6%2FBhfKQqxi1HlVFuDA6T6Hw2LhxOjAOGRP2%2BMzGiNz6IlTV1Z0Glavyf6IFF6%2ByHEFFtUAigrKaF%2BYUQmcbrt0Y2ghsATg7Ho00Lfz3%2FTtHiDTK6YdNZuAbb%2B8J73K5b50o27X8kBR39c4m%2FzKtUKPWyI0Y9oaQsaFG7ojDFz%2BjDBjqkAeG72yYrjjh5gBxVP6pL7qDhrMGhPuW723%2BIlyiXOitRaKvfw%2BD0IX29Aj9QEHc4fomwvsp878mAO%2Btxb1K0%2FAV9J%2FNb6pp4eIpcUsPww%2Bh4pfBJdbjWxvKyODb9KarKxjZA49jZwKcSMY0f3ZJ0zvW4%2F6ZFuwMJgwC3QqPEgcOKx56Lm0fQa4IpL9Htz3a%2FvAlHmtqek%2F7KSuOd2OCSOt6CZOuu&X-Amz-Signature=85c493586e1799fd0c9d34296017ddddd16791132a0fc3ce0ec31c78284ff0f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HF66Q3H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCNh5WZx1%2BTxh%2FaV8OBwAyp2y5W3UC2YMuo5MnDcj8yrgIgFu6ZtJ%2F9b4DUGbqWd%2FQsjKRpkiCOrJU9Bm%2B7T52DTbkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gZKwi6b%2FUyr%2FUPyrcAwqSh26lmcOuGsIKZ8V5lT6YmkEFlkverQqwsaEmjPP5lWeKV6npvv9yaKK1CanZsvC%2FP7KdAoLPU8aUAHp9q1WX7S92Bz3Z0n4lkRA9lKjdS6dDEHzCU%2Fp3dcSR8odKwXeZdL03qfwqbWqAzl3W86CedfV18aU1ibuJgUrCb9xrUnUyhuNXGG%2F9zfVmmIR2qTtNGMhku80gSgtyitWUr3jlSnsa0j8clpwed%2FxWaB6GqzBiZoo0FlaynzEU8NaeQrmWVIWmR0RRpMDxahGr4XEIAs2fK9l4mpM2cLJDLPvD2mTFEIa6uIiwMSVXqr7CFSdVprmbNnQjigYRbepx9jGld83anIggb1QtStQGJIB2fPDcY6BF70DxxDccuuD7Cn8XHeOBgDIqXknfgxnQV%2BovP56OD0fYLsVs8teX1BeW5Q6K0iL5edFgQ8Ol2ZbRzNlazIm5WHDIGKIHkln74wSKN46t2b1pxRE7ARslcwl76x0V7kppBX0gXIfgvyGZf9BDZZWIErLlhsKf02aq8Cs8bD5twCly4wFb%2FY4rgQEpDjy8H1J73Gu%2ByaTxfLJw0%2FHa7GFRYmt8SxAYH4%2BC2ae1v6M7jksjfG2wLEqT7PexlhcJa2mf2TybeJKzMPfP6MMGOqUBIzURCe%2FKWb5sFUR7ChrQVvyOQE4uF8qxqP2X9VqC1Gxo3DyNQ29IQq3pXiMSTBj0F2CUGoCGlslrkXWkyrTck2kC8orBcW1OXhotRig7Ti7HR7Ty7qfRgxyALTZU8spwf7nXF%2Fm9rCaZCiAIg%2BKTm1XWBSTPY4FtpWYn2wjsnEnW2xeJpV7HRJSz%2BcoOPoqbfIS655Kuvx%2Bu3qdQ3%2FBeo%2B35%2B7it&X-Amz-Signature=56622a226fee41b37ae53d86e5fdd4c895eb40b0ada0d29dc68a23af02db4971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
