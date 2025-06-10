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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6FCPZJ3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmHZG5k90zXJBrti9O9FgjrC5mBuuAKfJVVc1sqiH%2BzAiEA6xpzDuXXtdKrcPyJkqcgGC0dOoJR%2FAJcka1w4GUecwUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ5jL4RqLQtAWQcCircAyiyd8dTMKvBjHKOaTaGhwb6EVY7A%2By6sExzjcOnIwrH2%2FAdw2dBMAJAWxum1XLLSIriiJcRpp27c%2B52fQjyIgmhTcspSFd3xVl5CwiihR0%2Ba1LWR5HB5bP1ewfYMzyTsbgnvQNcbDDN1clLxTsFjlCohzwi6JdFR%2FqfwqA8F9irNBj5OWrtp%2FVhhGNgZtO5fapJnvJLIUh0adq3fTF8Ze8LN72ni2OSMtFvFg0IPVcfWHquvC4k%2F9PrGSjyfXN4WjHm3s7Mkhvyq5c7SS92leoRuY%2FoT66Lzs2CPQO7g5sdPj%2Fw%2BIblboNeRkDaNDtmT20tjK%2B6CNeO%2BSEHEOGErfAyZuCTo1zdZD5LOw47j0iiXcZL%2BkfuIbM%2BRqIyNsw%2Bfs0YWEu%2BJcE2lWUJ7Wf575P1B1l7qsg6zNhcW9GHGHx4z%2FiqHfS7T2F19b6TQQAeYWoP%2BQklNtHDdkgwSVN8BBviejMVTY6m5Bar9eKhEdmMl6YPy9q17sz5q2V%2BU4KY1nB30N2tn6iwwy8%2FePK7AYJacYIQiykWxmTcfpncSRJskVJnUiDa1jAxvWZZFuXf8r%2BFKZ%2BJdkICiD1J9RNWkpp2ybMWAgCLmF4DPJNcQKF9hly7ujVzUBiiUuC6MPben8IGOqUBy3vlxyUQeVCm8g5%2FgYR1eS7RwMeK%2FodtyTXzrCH9jH9ssSS4euc0Jx2Bhk4aOL0EaSlFgPnxqLD9EaD6pW6y0zmxk1ox2Ozg%2BKyiEUCCejUANui72IDfGt9qKn%2B3wa0aDSXXQPo04%2FGlFF0lisUd1sVVEJ3zlRnX3kO04gHb7FY1r5qtiPRT3hkbh%2Bz7X6sY3HaHnrziu%2Fk3pRAIyqLMWB37cO7x&X-Amz-Signature=4d02ce2d3bb72d729a5ffae0c2b888cc34b523a8f335dff704108c338900818e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GDADG4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQ%2FUz%2FqNer%2FhybOv5ZQmkZfjl7QO5ZfUyDjWCASks5wIgTjh3a1UW0m4C4bbTGcBKo51A0cQrXrnZEly5Gp4rmQQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqJoYD3lRZ9WfzRlSrcA94g91H9Gkt5PsXczeZgkZ1CR93R5TM%2Byq5VQ%2FXjH1Avm4Jzj39gxyxfuoE2yiyCMpcB%2FLIDswk2X3a%2BwkAVUs7gnQK%2FueKJIKfaUbUmZNIXzOJ2vHQMaz1Ob1VXjc5pMi3iT4x514tclEgc%2B91zh25K5o%2B7Smyc%2Bs7ssR97xsXg7c06LbGALev%2FelYdtFouE2FwBEs1VDB1MlkP%2B3M%2Bt%2Fmf6IvKHOVmTySPPDR1SxPzMJefvGO3D0TbdN85K9yoGLvvL6u5XhrpsJFF2B3ju0joq%2B%2FxDuqVKYzYSuBwzKutyztDiGHZxb3ng8zeFN9eJC%2BzU8KUNGr9p4IQ6ivoWo8654DSOmznGdCKQA8alZ99%2FDo9OgZmbSoAXisFSIEm9BMF9Hcqh%2FJGa64C12Sj6yzOcKj6yGDpTabNGG3yAPT34ysov4imQUzWJ85bPYLArdQRj91aQ40PVfp8ARb6bGk75nwPY6uR%2FzJOQooNo9lBI3t18BXU9uETrph0W%2BjNVFGYT7u%2BZlhRykITWpyctj2RCfad56Z1kL6elad2GDCPgbZf2zJh0Vv%2FhforvRuijwf5qRYSEqnHkNRzmWTcVavuZ%2BQb8MTOMILoqEckA27DhQefg9K9WcQcOHUdMKbfn8IGOqUBggiCsvsAoJtI3%2FrAEskQyG3o0%2BCy9Lfmxkyt48Nz9acR%2BZ9%2BEwawnq2OJUFoMYBhvLCc7ts27L3dExi5b78QDAetWYyYU7rrXZad%2F7nWoarOihU7QML4M86mlMlmJd2eTr%2B1iQgrF8HB5t1iIz5V4wOswXQVM%2FaBXI5ozMhA2PQgKfGu73nkeZivATHmbieunmjXw6%2Bm49RdGsV%2Bm5XiDFBGS%2Bdv&X-Amz-Signature=d7c13c21967c85c5f63de3a1dcdf8a8f76ca59be6c365f0d8845d931affff547&X-Amz-SignedHeaders=host&x-id=GetObject)

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
