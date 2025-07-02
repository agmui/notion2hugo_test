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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TOCNQY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dOQArJ5h205iyV%2ByRxoUj1FB03JC0XjZWzySBrzQOQIhAPfYDWs%2FCRChRxgbTTNt9idQaSkFF2axiWKFabiqbNg0KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRHB1iPAsc4w%2FGLFwq3AP%2BKlKOeWwlVwCPCZdyY7by3uTcItIyYBgMxP2Ss%2Bb%2BTvtuQojbTwKbkUTjv%2FJoG9k8z%2B3TQOcS6UOJyX5mwQY6X61fwCpECuI%2Fb6y3X8Hw%2Fz5pNISVpo3CO61zKzNSNyRfauVwpeEewQZWQuyJrorYxNFZQNAYVB4clTN7fdR3i%2Fqq25%2Bisie%2B%2BCZOrn1hm0vfe50q%2BZcw8IZh1Rw9X4SBzm0w4AhwjVCSP5zFJVSBoaP%2FyD7IEC%2FGMav7rP1bznxKC27HCJ0xNHCwaufGydG0MG%2FY59kgljORNKJSIc4tR9QiwMvGHWBmrGMlp3edLGWPwdIxYFJtFErHW5TxlPMtY09BYZSoM3wA5w1deE5Xcxp%2FOIxdgjMHnT40z1kR2u6np8%2BW1LCdJQr3ooU2iVDLqz4eJ5x%2Fv0qFAdxGpAoE%2BwSw7qR289onXTF76NCKYkayC544V%2FKG3jaXS6qhxgCjfJ1L5KcYAPoTyOMgrVwjZISN2n3xJFtQ4HR3l0PRBL8%2FXbaO7r3%2BkzN6OkUG3JxflBFpSFeYBP%2B5yR2nASgxO7Pom5zaH3fpyIQ%2B3WhDK27tf5XC%2BWsq9wcPodrnerTxsZaGfJ%2FQlzw%2FYgujtqdIeslXTxbJvTHCdeojXzC1k5bDBjqkAaADey2uCdex%2BzQv2AuWlNNzVlknvLbFmP3ig2h8cgdQB9Kd9yD4VYyRaRwZvs8TqCcY8XUDZZWicv8%2BvTuA7b2n5NxgjMH3pnsyosNbhdZuKJGo87Jv4IkUCKI0J5vtwG3CZ3OL87f1XXu%2F4RGkobVXX%2FMiar8nx3sKw3ymfD4CFIv9eNM4JcuaRudD1DygG8CVvkcAi9X9tUVDScdpA7k7BI7i&X-Amz-Signature=1f4c59b6d2b7ac1a6401b6c8ccf48a9e8d4176306cfe6c1187dc5caa6a8b8e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVSLZT6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCIKgDtg5yziFKSAMwspS1nnM81GiOgAD9odWkQjljAIhAIziY%2BqbnuejjjN6E8mR75460%2BSR1CRe3m96y%2BrGx95NKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV9y16ORsZNUsH7zsq3AMtDHZ6dEUui4idIk6bFnobKLIk9aOv0iKRwMghfthhhEXWcWNq00qRjpCbaO7lvmFcwW4pgd6lEddm3Ax3Sb%2Ffp2ewLueDt5%2Bv%2FY8dTXu0iqQZOryMRy5PbwoTCotARTEloqDJeh5Ehf5yC7tRr%2FaoKFktszkmKEGZBqYN3oz%2BpJJ1Tx5bICQVBXGy1Nd4tDmgU1v0iaRhZwIPcA%2BM7g019yV5Fvw7jLaGHH0HblVfH7bsl0MQUtrB9ULfV6mDmV7uREsruuGwzmA2xRw9tgEqHibn9TOjBV8IZ5BWjA4k45AM%2BU8%2FZcLYhwdSgOrIAJ2Dj3YKTfwgdyoEI9mUlHIg7s2YbDs5zx1BOM%2FgBwR5%2FDU%2B36bP0FPGJfSVJ2b75KiLwPPlGVM7RyAIv1rOYsjXLFCNQF2qXeNK9%2BDaPMqqk84JGhH%2BXH958uV7h9aX2uoDm63k32jRFIygVHjNGgAtLLc5d6qDGBtL4DyKBoe3efCcu0o0bfm0GhvhJ1lFr4Pi0bVM%2BH0tj5qHmbE8k2%2BUVD75wQ19jiOhDG4c65Cp0lTmZZIlA2MDAQvuO1ZLL1yOTUyN%2FCOgJylOstFrJDY%2Bd%2BJ6Q%2F1onDEJAwk7XquIJujHsIrpg%2FIJdCF4eTDAk5bDBjqkATop6cgwxOoUam1QOcpi01q4bdFCUbEhn7BQ2W%2FkYbuy%2Fh0HudkuWM%2F40kThl%2FUqSq576Hn1vMdzZ6qV1jYfoL3kTTxjsZ%2BB%2Fq%2FExY1UKwNMMf98AXf%2BE%2BphN4KsUwHa4mumPuYhWlhZ6tbcT%2FLgGEmd5usKjF1vDYvZGR8G5s%2FxdrzhiHcejBbuN%2Bsu%2BcT2hJlLyUUqaspffyuhfD%2B4j0QRoVIL&X-Amz-Signature=910053f60f5726e7bfb79a03e9268cd428c3b585e8083226e7c395225f90ee04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
