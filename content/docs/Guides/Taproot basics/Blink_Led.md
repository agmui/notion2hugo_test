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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PN2X6X%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFzp1uB2m27OPSffsGZ9i5sw3agrth04mfCqW1LYMqFcAiBkgnmbZkRivbyfOeHnpx2l9gL5I45cS0rtZPxdAnyMhyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM7qGE%2BKyXZlq%2F96pVKtwDMuZi5vufyaMn324P4tLkGVTCfJSYs9nZ%2FWNsTR5QTTWdH%2BRxXKXh%2BkLEL4NkdaDH4CVxXhEKQiyOxbfb0V1jdKGDmtzaNO8oVyuIZo%2BNkB0UxA8eiFbA9Xt6I%2Bf9QOPRJP4hSq%2FMHp10%2FlGErMtGHbEBeqh7CFnV%2BvGUjRbSQxaX%2FivJXlz0lkwsqytYtqmyUenNjtwUME%2F5o%2FyzMx4tbFZal9H%2B23RljH%2F22OxGe2iLtGy%2BIpDLCUdYqGgwKhEsz6uYtG9g9hWt%2Bwsq7%2Bk4H3FB3D8AVdqY0sLc2eAnXUvzlfDAfVO17VitfW1%2BvJ1x4LW3YpowCxFpjOPEJT%2FJph9nGCzd7jXCok0YQE3Whyob9w3gIf4%2F1A76YkNIofN6TmpPS19th9MHyxFpBIrPHBfCkiIVAy1ErH%2BfnetX9TCB5SvQz3JIe1UstulmSPURe4qhsar6tlDTi7d%2B3qyHzE0z9WkjUKmxA7nlZYuWE%2FykIOgX%2BoxYMzcYh3SSfvO0wp%2BYvqtqf4Lo3tKSy1nvehWmhVmtkYHXCOS5gTX7UGahTBt%2Fc5cxxRd9ufKnu27f3X6mly8nhGuVBQOkx%2FiEw6%2B1Z8gxWLIS9YQ7bkBXhsTtIeqNrZnDJFDw7MMw9p6IvQY6pgEpCLjKbfbuIMuifmfEODRh%2BCasFaSr9EF8QDzkNQV9VfXrRIk55Tu3yeeqRsVuMR5sastdNjuPZk9aZqQUEXt9BHQjwrjR5bKj%2BDvqRyNnieSfYnsiJsUcpAzfZJ1VPgJilyT9f35JWp%2FPoPKD8V4dzww5QiS0gEptGr%2Br2GVhi%2FxofJFerTJ0xM5KhKfH2lBZEOJYo2omGXjAYb3G5JgcjUVXqMlJ&X-Amz-Signature=8864d8717e4d263e4010752f583f4576f9ce64a9bfe5bb96cb7c27483f90d925&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPW4ULHO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIERBMeVSES9j8CQEaCRmWZsc4ylqvP%2Fp8MRsMSlbraBGAiEAtHec6QqDIU0iRd1tNDA9Wf6%2FFQShBNg3G0AdSWMweHwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLeQMwaLCMmNuO656ircAyzyw4f%2Fqgev9%2BQ2XQ8oo0uDjZLXY9klj6vDsvy0bzSiO9P0J1kOqekeD6kg7lfS%2B6450teCmn32VRD7UCu%2Bcw5U22cnXuOp6lkAnn98xDMQkEQUCTIDlCVEDuA18gCuim8Phchiy1MXYC883kkOnBp%2BoujiQY36DoXCsRO1wWPkNKdqMNbbPZulgiiXOramxKuenPEV57nxi9%2Bps7mFGfiB5MY7dZ2ep7jhnh5Xo%2Fm2YfdbULkA1f25RS%2BXYC7Si0E9KpGwuDP4tUYGDvQposnZUUYsOjcJwnM53rxiLFVil7KI7jMkIC6xY9qB8pAxzRb7xBx%2BjOXmO9YMJFnnkRl7bIpmTfWlB6rUl3i8vdgaWsrgdtlr6Zr98F1%2FuVADh1xDBtF8MXoRWJRl%2F7CWwUJeP4Y5pFqij8jjdrte7L1S71SZSkbFTNvZD0gcuX9aATnING83lgI3pUD8UYJrtnCd%2Fgt39Rl69x4usdzFitBYaVprPrg99RbKdRPABgk%2Foyp8lZrp6HJdNc07mYYfhWSRBUVu1Bydt0E7yncMSfgDbGzQt6YxTJYXyL00ZGoUrrH74V14D0Z4U0GWpX9rmlc4439et14Q5%2FPtmeKflrXnu3HW6XqecuZ0Bx6qML2fiL0GOqUBPWML7uP0g4KsKeMvqHaV6NGq%2BE%2FXaDiQ8geE2qfXTf62PONsvWv2pDQGq8rrqEzs7BVAaEi3BZEXbW5AnJJfIi97oEcxDikvjmeNtfX0bYY%2FHjyMkiSzXI1GpWPTbaM8EpSDTDUrUkGIn%2F8oZRXSYd3FBrKqh42qVf27IzoZOPmPP3FfDgqx1R44qnCInpoIbIiaprt3YrGmhtMVIZOQ6WAeuIqX&X-Amz-Signature=20ff99c9dacc1b614912e51a87cb64e900365d496f6f4c11e355825ae58b92c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
