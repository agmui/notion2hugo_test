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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSDEUOA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnn4slKUmyUsI3oh9XG4hr94LudHvJIref6bKItqyywIgKOEeA57bzoc40qPWAZYX6JQb8btH%2Bddao3TIILkTwAcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIB384jmec6QQ2t1XCrcA2QWOP7e2%2BJ0llC6kfHc7zCLUENB3aPs2ljuaahN7VKXYe%2FVnYd5gY53Og0dpd4OTYErbKiFbeK3862rxV6%2BZVFAMwbrZ6rdxqgq2usiDVfygSMBmmhJmWSQut%2BUvhZcXdFgFTPOOFFwrdTPtNouXusWjNYxI5A3cjP8k9Q2kGFw9q6DHJfNw5fQeTiRgKqbcz1ySc7HMPvch7RbaUeXzXV6T7VxF9KJH4y8BX2RHoe6%2B8htNqVU%2FrhTZYMY1ybx66LKGbpqh%2BqpXIYU%2Fg7MIbxMdR0VwaSaSB2pMrYAUv0HWGdrZgcKlGISNJWK1jP%2Fl4fHlGnBnmewhj%2FPWk94p%2FYqTSkHueDgP06P9ZzkyOkdsWGJUPuPKfxeDimG%2FYXW68vGevQhSJpc1inlpAlemt56ar1LKTRjZQpeiMtw30d9cwqUrNuILx213txy3tJHpxfke5VgNe%2BVgqshfgIUif1v2Q4%2Fh580gDPrKY8WFdj3HHm3QZMcQvEKQxmjUJKRsjNwgRBFRVZNRFF7nQS5C00fy8S0R86%2FPnQRJxcZsOPd0AYLeghg%2FzdDm2s1PARjPzoyhllVMJ6PSkMGvH78Hr5ea4o4LsW%2FtiLXjjsPhizfPjUoueKq%2FAawabFvMJrf7cMGOqUBpov6j3pyHPGFhDFoq1EHCGaxi7BaYzZgj6kcGFEmKwNxPunhjUYq7uOXHA%2F%2B9RpIbnURlyF1FQxx7OB%2FWy2840IaY%2F6ILk3woiyWbiCsuS8knP5jl4U5L%2Ff4ndIga7iz%2B0BrrA2Tqox5cf9Pul0h%2B4%2FmRpluBoq6cF4cjiXX%2FGyPJ5MYIEb%2FmV3x0xfqpo1K2ph3POmJ0tJQNAp1pZgOiePTUoLh&X-Amz-Signature=74ac02b6fcdf835edc16911021cd069a8a8caf315f8d431a596c198bb0bf470a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULLD3HO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqi6Cj0K0aHkXP%2Fd%2FeYkT1KiEIAmiHl6HsxktrLitolAiBDa7uQVkNF%2FHyRCw%2F5EEyQKuU0tsj%2B%2F8ccpJYrr7gNnCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZpjkfvRHe9QtGauKtwD8KbXgOcVZ2CUdd6Ono62jBTfGQGQL3mMp8RHfrJ0dIi0ik1vraQS0LJqTrT6MI9lVGR6bWRr8QOcoLpCVKEFzBS2wFjAJSMxG4OYOIDe3SB00So%2FCXgzjMnRX09T%2FszH%2B8sI8215wuRSLcFd6ROA2%2BHpgl1fWIS4YShu0Zg%2FPwXid0eTpiPvj7I6TOj6VACsEHZd4RXdWIbwXneTp2Uw6Vt3gDw%2FoDxOMd5yJJNhBnbCfTMnHhOJovhgeHPJkfdUNo8elyDutvkk04PD2GZaKxpXIXJIQsb5%2FeIl6aotPbZ6ps6cSy65YfrqLA2OzlJHz0kp4MJBfxX3OcKAV9FugoQWE%2BYFo77DNX%2BsFEJI7wNkxbO4ZV1AtV5G0SzqRSFPsAtoGE1Y3Rqcd9RU0VfCwbEG10JA8KGaCF6YpU6Vvv2lEdxv41aZ26r%2FP6%2BLCMCE3KfXLrXr4Lrv18Evs78qEzWgcWsj8wvsl%2BksMt%2B3f7GmnHEkIPArJiS48KT%2BhfovmyFg7UJtOS4wef%2BfM1iYsYsKPN%2BY%2FDM6bVdIAh1VGQjYvmcsbXsDW7iBu7ZgpmmkkqcbuCFbO831kzScFN8CcEJaSZzsWxNw631wv7z0n%2BshjOWmxc6QT3IrYDIwn%2BHtwwY6pgFM6X52HjGHBADpun7PQ%2FC9%2FCip6pDojK%2BMuU3Rb%2F1nGGPzXxetYXpyY8KhTfS4jVAFIlBbhHdXCfNbsRAf6PQvL0zm%2F%2FzAofllTpL16UMdIqblA0HLuE7phlMtw2LoSJ2w%2FXB2yAc8URfYV%2BJqm1Zs851vNaq%2Fu4G3KmWgV9tN%2FJMAX3KoTJT9%2FpBMtbD2tJhxzFLWzQC%2FahRMOiXz%2BRbaom5voIEq&X-Amz-Signature=66cd41754388fcb9a81541d9d6f089485a6175a0f61336b5e1318f8129b82c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
