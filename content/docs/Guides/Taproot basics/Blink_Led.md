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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676XHNKO4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1et5PtvO2ORvDrekH37r2BN1ccKWPU4i9Daxg9BEjUAIhAPCk80hLoi92d%2FpfxaORSXB7Ct2yu8kJwhNbEdz7S6AiKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5%2BjSb%2FiCDfSTPvxkq3AMTPTcgyxEf3zk6SHPSLtJ0kG8Pn3VWwhDRDFTDj4WiXkp8DIQvPImLPdFNy6UJm0KUrvLAGbLJWVPSNDc3vsn1Vb7JjnjrLXPyc0i6GAuXD4P7BSeMNES34VE0gnMgwDEDS3ex52EMdII78nmtCemyEtHp80WtAlGYMBGNO6tp5MCa5xMti8YJ%2FQwI3kJnnD09fF%2BLZw9iFiJ1bWiX4S7qxYdd9MjB%2FPqmRTAhrmIog936%2B16sgNBiSIjXM6KOHQ3ooi9cKUyUBzHWIAaxGV0VOWuSGv5OKAFV4%2F5GYltvsxg7TN%2Fxklt0LDWkiHOvSdDmz8d6rWyeLHeFd3FXoyp7i%2FgPoLQGK6jfKBoL6WCTWfrsJuryT5NdJkHKYSpfgnfHZNKHhgh640kyDMmxHhpFjAGvA1X3%2F0kZfQwaIQ97x8A2ixAYwE6fXaRnqYLPUdwrvgany6aGJdt67nHNfg9c%2BcGEkDcBaprVsudhjKMK6NP5Onl4G6D5kiBq4E978pIh7emwG1VfdisSSEyVGqCY07YLqWWhlhK8maIrfJqTYvTjM7HeY0ywC8Oow8Ep%2FwZzVsNCjaZx4r5e%2BrqqTHcxtdzni8VF%2FSPPRihe5ZBJFtMTySzFbwKWuQ72FjD%2FyfO8BjqkAcPxG6TUArdfkmoverw1OyizUh%2B3loOB22aFpjh5dvFa0uUwpNFbgxaRJRxd2zRpKI1YXC6giMQgUcvBjuockz2OtFWujMTLH1SNWwKK1iQiIqipnG5FYSfWMgMmxEtW%2FD1oNiDS7pTtH%2Bsd6FjWcM398d3Jer2YM9aSuUIF%2FXoacxxF1VH%2FDtqPVn1bCwvssfZ6wKwdrFBWQtZFjR8Lfyp9btPA&X-Amz-Signature=1fe1a767a8d033d9faad0fb5b21fccc618062d2deda4c468328034027be58a51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HG5CRO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnDvKDNEdud7ZiM4wubn9LlQzuisYVjezM7y%2B5zpZGXQIgRcSq3%2FObWB93cGH3XeNIUhTdQaAxPQgnsmriskJZPXkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8RdDpJZrUBnJ6%2BwSrcA%2FmbtefH5rzEW4HRZ3eymhnBJhwReZwKbwO1mjlyVa5uasGSzuYOov%2FaE2a%2F5OrlIkrvqfwgCCkIanC3l9xL%2BpE7%2FNPlmaQzw0dskFGJNNBfYwHPIzZC7has%2Buj9UTm5bMKXdbcQQ6ubjBCxjQ%2BmrFMWbApOFzqoi3prCzB6Kz92EdNQ6GLvUxEESvw%2ByBJpvIVnTHCNmLHxa3PJn0ewU58m1cropfIy22wlLKo780sbazERBnhlu09YQVMdpl59oNmFLJ2Hi9K0gt7XJnhq5FyDUVB8yjcdGwwv2ZPbA35DWQsCv2o6UCJj1Pr09V%2F0eeyDYJAXg3w6D9I%2FTYfsQx7i1iXL51zGlbDlqXGgVU0x05BjEErhvn%2FGf%2Bp%2BSPbezaiQuBnFg8MwfjTfLh7miR561tvFEwegMvTk93ofLdZJATQUNwjpXneWFTBDuKIcwT8%2FepuIklI2LVjJwTt1%2B4JJQkrzDzTBlTqKWde8SOvQtN76WGCI9bpZZvVZefNLzIE4ahhrlAVUMrjtS8WXfQp1cDi5%2BWYjHqSL2Bg6UCxXM1plIyxknGwkuU5dhTpPyjsemmguCFQjcQcTsF0s1Hp8P3fbf2VUo52YmBMLtKr8qReR1yrST9FS99%2F4MMPJ87wGOqUBCJR1TFPMr%2B%2BUK25Nkzhue28uQuhgiYaulwYiSk65pFDYRx4grUzZwi0vPDwBxZwgXaHdo5uzyUV4CUKEhlmjOASKGhBM8mCUtc6Oqc1yZBgcLma9OnOw0E2d8RJf5cASucLuJnJJ4%2BiZjlQOT%2FIqtYzuxIaFuV7AKM5OnTlfQx9TziCnDqmwCZIE8nmDsvdoCOUoh%2Frl7xVcrYRaudCuBG0BUruB&X-Amz-Signature=455c5bd6b4f9f15593208e355dcf406572b99ef83b80a257fd931ae42eb9cc0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
