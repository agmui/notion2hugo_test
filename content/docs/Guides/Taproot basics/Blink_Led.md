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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DROSLZK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BUd2WAK%2Bt5xSkygeYj5iQJQ2U7g3kX%2BmkIl9aJoY9jAiEA8SybV2zK11UXML1P4Xvj6E5QeSh%2BbJKmzxOr3h3NGO0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFV7tMcEt%2FeYC8JzuCrcA%2FAeePTQZSTWYPUbXWo02HR9qnOZ4Yc3a4jGWVE2ZkNY05i5pYZGJZHjSlw%2BNaeWceehA7zetTl%2BbA9WZwoXwccwaB4V4RQ1ugdhEN1JpahwWMViCgbkorUWaQb8QWrextUcqEvQJTUX8oIAbemLC1RJJmeGnQ3zftfgnBBAFG3Bx2S66HiWHtAVYiL8VX0bAO6%2BZQaZSfobC9AvcT76C4%2B41AZKrKXj6Jz70iROLcQMW0PeDm9wiETUYsagw4LoZFHSlzA6cE1HO8qFs6CQwCdpe7t56N59joMCyag85L5NDnKrYzZ3QYAdaLCscAg4dM%2BofULQKEhGXjIkbCmLKXaFTzGfPnrVO9yYKehlTpa1O08U%2FVCR6wd%2BQIOSbJIYcheGqUfHnNCuxn8U684xMgvyhL9AHaEZfTcFKzxPrG%2BXN5MWDJbfFH0s%2BcTbiaL4Rs2qF21fFqvz1QzJhvoXpUr2q4w%2BLowmNqARvherBFMWaURfzfkf91lHm4ExCjmJCXQ94Ps9msb0hpNVKu9A4h0IhS5GeQYajIX6x9l8uWkCykIZPe4feCKNmkJ2Dv2fTwTTRQH5yEDKjOX6H%2FbBMsQgUJpz9njXLTBcYNUphPmDam38R8YepBZR2hjlMPD4qMEGOqUBMdv7PCZ5Co9Ae0%2FwSK4jiw8MVvBz%2BFjdLhMTn3SLZjCUhk3Vysj7Pqvy105U8A%2F6T1rdZmgtTC66sIlUyIoSPNb5q%2BcTYghaSfBa4Shjepi%2FUN9dDQrKg%2BY86X%2Fmfsg6ol7RZbzFFD65xYTXvKDJkfn7GxNnwZtUOGo5RmftRKm70%2BjUTXv3NvDclgVAiqph2nZlSiPKbFTU4dfXDhJUkwmb6zIq&X-Amz-Signature=baddf080961f8b0e511f12f8e6e6c7f50405b3f26e084a71da04d46c548d152e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAANZSIZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5EpebnXMxlh3P1mrCl8RfREFoFgLW3YSbOvfG66amJAiBJXXZYdUdvmaTEJ3bG1v5iksXpCoor%2FYCJizxG7cP4%2Fyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM1LrqflHRTxYJQd9JKtwDDTUrhkfgGGWAKsRVO8OO178FPmQebxiD4GV34e22VuoIl971Jyy0zYEEkGR35rPI1JUq5oUF%2FnQPLkpio6DiJzaxr1iam029iwP2JgcS2xHG9M93kWZmgdEHucGyr6e4YG7VBaT4GZJYpIwcS7MWEUbLHrdy3r7LEByjy8b2jkOY1l%2FV1DG%2B9Z3iwCg1FwOrKWMmQ%2BxsQqZsXfyBU9A2O78bE4e0NaA6a2U75pHvaz5qBiui%2FGOL8mEx8pM%2Fh65Kyx86hAxU5WFqo1hIu7S74KnouB03YJL7FrrnVIg%2F3gQtuYv866%2FHQ3QCcsWCNPTECPYjv7mo02FBrKxi1J11iiIW6oaVHyDWBHxWHc%2FOrzKEit9kenPnwyuqGlKfKPYzL60dzOaFFyk5i9YHuwihUTB3QwIH6%2FBtJp4LeuV0rKPX6cXxmQS6%2F0t0xgbeIa6tx1lSo7rOiBliEJ%2BOWS4EYScyBZdpq%2BbRKyY0OnTfI%2BXW7KrzeZNqk0ACq32lUqQ21eZ8%2B2qMVLZFdIXa38O%2B0TeBeVsZ7t4vOCKvCMMsw%2BrTP%2FpINcoPP%2B3wFCZ%2BeSs4t%2Bnt4wZcmsKpzuHWmwUUQ7z7iQXfrekAfcCGxyr1acO5mHFvMzzLsr0psSEw7OaowQY6pgEttkgF3sSD9Y%2BtxcPJX2dNTvPEa8qnb7%2FpBXxv3suUX%2FR8nGuQjfJOqzrJRAF%2FKekcPN8cJq4dHFajJTn%2FltJuLnZSRemv3Mp%2FuTosN9Vx9Bo55Or7PtbWNDqbVveF%2Bw1ypV7MXDoylkpQyuo7uke9kgZm9wPb3Xxul%2FncSWBJ2YwIH5cMGHitAEvXIhVANTRY%2FWmHBPph%2FL%2Bi0nGK3vd2Lnico7q%2B&X-Amz-Signature=114da022898e7f689717481982ecc371d56e9e2c1ec4d88af04ec7b378f44c41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
