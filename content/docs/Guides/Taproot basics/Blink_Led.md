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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q45UCOTP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2uLyWPZNFk4ZKiHEDNT0JnwsBvD%2FNNTaM0LftabfXrAiBDT8xgvfhhS2fFGB1MLLQET57CMuwmh7lNiL3vatHHZir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMD7gbOyBJEMgZf3VpKtwDvkY8AH0RGFhr4raaPqYofrCj81PtgnSu5%2BpWS7xt0fRotKamYHkktrZQ2%2FkUO%2Fch8ZvJaZt1TTClc4mRe%2BEm3enYaZmxFOpGldOLKpEl84Glqjgvh4C%2F7kU3WHJqy9HNMn%2FCz%2FbyrUI3%2BF3EZgDImL9mwzTkHL1GcGMoluqQlskbK7Cw8PFtFbY1J7HLHWFYXEpHkikSbB2rCi2bmVyqnAZUdLzzCVGzS8CPauc3GTKI9iLYE%2FVA%2BqjuM%2BKt05%2BRFC16X5%2BkGjVsAQnq%2BXFLgIDGyQPlEOHmp4Gggi%2FcwvwhdAgY1R5hGb1f1VD816R3z2qskhPozQvqLgsZsYkWJwUVlKDBJ5IFKcjtAfx0RpHbrelJxbT2cCNgTbJSIYKsAJJulBWtq7DU38vxMYHcuwHduRbGSj%2FJHq9U7Ket%2FYxp4FtUm44IINn4WE3T5OmhzpUue3Z0qCV3%2FbXExfAdzLiHotG3g5z%2BGny1C5%2BxnZIbwTBsGU0eMbl6xDydQnNNrWmQJBQlMJVv7YVUtN8Ml%2BJEMc0%2FMnlwwNwh3njLSJKBTLo8nlw0y3dGXvjJ8TxOmNJmPtUtiHh3l1Qda7L6Ba3vsaTXQjH%2F07dmBpa6Ojjr75blrAeeXmlF4NUwmoeqvgY6pgEqdt0GImkJWuGKB5niStuJ%2FJFTdHOkxkkE%2F2MDs72lG0052K7AM2p%2BPNRLndwfXSMakO%2BHyhOzVLhoZvW3mnEU1Jj0pwZk3pSISoHPcu3wh%2F3PMqiSLXqe%2F5XnUjcrNFJhMTaPFCfnOjZGlBNqrO3WE1HY%2B4U%2BN%2Fuf4bLpofhVdsToWPs5zImtYJlsE1ldRcOnYfy4%2FPnfJ7j3HrixJkv8yguIO4jA&X-Amz-Signature=6e280c1d83206a6a17529fd250ddfb972c7fcf096acf8538cb4d3a356cc90fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYCQ6BK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFp%2FL5g0uRwpjDRL%2BYKxxSY0CwlR0fmWaof4vaPjD0qRAiEA%2FsSzQm%2BlYLxGlPMM790Zdzfz8iMvFLBRCaB8TtNOQ2wq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMr5B5GHZ3U83qjd%2FircA6yqgtl482xlVZNnVkbD%2ByBEWxitQuIGEa4FtyJZd5C%2B1LYaaIdp4XQ%2BVSL34bjVNbwTXRPf64ws7F%2BeBGpWfk4PHZzxa7su0ZPjLtfUhL%2FCr4Bd8OB1YtvksYi3orTNMwXNrofjuelT0Q0xRkVILNz0iSsT62ARHkHrHwHh2iKQ%2BXA5dzl1gRLAbz%2BIHr53FGTCPN15OREaRok0J193f8ws4yAdOTQjKPglJOO32sLspOK9P%2Fz3iP8tjK8bFj7N3CKDG3yUC0X8Y9L2b854KDrp8p5Qd4IA0m40uv%2BoupluRaKxOkJUu%2BC%2BkWTYVtsda89JHuRQ61Gs%2Bb4NhCx0C%2Bm78vhsHN3QiAo97xt945SXqubXdoipo73gp5rIKv78L76HtsRJEow8ZmeT3WflXKlsJZFhyElCLSbSFIBC7l0wMVaiqZ0ncBfL4cNCnYTPecfU1j2v6ya3qDZVgvO9Grb2QU18NMmXGx5fm4Eq%2B1nHYnQoxyUBdEXAGUB2qYiHI%2Bce%2BG13NEmrlrdx9W1gVkEUsxJ8oLV9NCfRf4sS8p9njaPX%2BoecdwbLakFN5NV3qXrhNVDY7Y6huU12L075lg8o5S0sAsYUTjRocxfR7Xm5edkrLNzQZ8BmpaOuMIWHqr4GOqUBvLB2a48brH84kyctVDkj1ccjKPKET6GoKhAB7LcMl1rjxJYMwwIAId%2B6sK7h2cYNWRPb3Rx1Z1DiNbw%2BsoZVcFjDNR%2FdcZhrGW6HPPSDG00E2Ve7L5ry%2FVHmYA0UsOX3KT%2BCH1mcS3UELm8lZg7t15BnWKLNvntDAbUf1ivGFjhXrDu0thyzu51x9VhSmfQ5YW%2FnJv3IYTZkanvGnLLn%2FQiVLQim&X-Amz-Signature=db8d31ba8e3431d6e67392bdb6ab3e9fc2a78c8694d3614014040a9c847fef6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
