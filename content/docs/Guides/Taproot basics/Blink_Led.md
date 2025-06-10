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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T72FQ3QF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBpJMAayYu3RQzrfgRz2VZ7UKY%2FFGNH58Mtxz5Ffz8KwIgbrJ3h54tFESvQ9dFRC2bLykP4iCCCNX4FWIeFH%2BPhhgqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2B4NSTB%2Bj08w696VCrcA0t6Mmj9yXI%2Fa1bIubvEkTtHBHUkOOB97EUXH8G1be6wsvnQZLqZHs3GUyGZPZ%2FJv76zsbSb5pNGo%2FjLz2mIsLthLaNxu8aDevnJ9qnOTtJycY%2FzNK3hVVlaQneH2AjLCGeuF3TeQba5Hz7c4EUQNap8cuW6GxPgRGSq4W76AVyKaBZgJ9oj3ZJERlx6qhq1rImM3gnmxOcCf7u6IStg3X4Ey8bEwJ9dtggdcwcf%2BL1jp664qsuxfRthe8parHjyGmgwXL8r%2Ba4EjzcHoNj7z0JosfGlU7%2B5JeToi%2FrBixgMZGxuSZsOIfosBFVWXQAjls7VoR1Nx%2BD3lJxmPWIDergQmFyH0uOctCRc86nq03PjNeQ%2FhHgMbWefpuUOKhMVC0r36DmjbzzgOIM0iejhXuUdOgo1MBbq0POPcl%2FhodszwI2rPcG3wFn61SjdrnRpzBof8PVieqSR0Z1V79m0bLX1mDoD%2B3pNNe0QTBBMnoEQvVOd3BAa82Y2uCRQ05rZ%2FQwJOYqddhb7EdmoXx5tj8ovpLuT5m8EHG%2BfOFkwDgcc4JGRsw%2FP7vq%2Fpz8r6JolfKvxLD%2BjE5sScHLRjGaCF3sT8PTxTBhGQrNPJMMg%2BprA%2F%2BMbYATvOnp3uQaaMJDaocIGOqUBc07UiQsziYkiwQyGGcd%2BDizaawu%2BAkcNCwWKrhTVpdl0jZVz1cUy324LkpQyf853H8ZYX%2F4jktDvhIG3vKRgjhoI04reJ8GHKf6EV6yOOGjRTuheVAX8jk8lNCCF8CT5PAx391iUonS4Fs8aUm0OlEVPDKqr9lHyoQRGq8js2eTZSrN5XHcF5YHULqvV8VywiK9aKCvBl9gD1V5%2BR6J4IIVZJz4W&X-Amz-Signature=7720d7309ac8b5389e2370d457a4ace52478a5d7bd0f5ee912692d268ac46714&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIL2WVX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCEnvRaZA7mIc2qReB7WC0xg%2B22eEIJD71%2BHw33uhKqgIgJXlDiKvBxC1GqFIfDVnOs%2FbOoRixLjWjdRl0E%2FSo5IwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxB0hssE7%2F1CJ6ZhCrcA5WQ6DH2KXSN2ZNwBldD0NcNQmQuHazHtENG9sjj5RWMv2Nt8IQqJdOQSmxOMoqSC6eque4Jc7v2ICElt7pTlId464c5neneU%2B2bVt5bhiXlGS8F9wQtKJGHuhhuQ93JJZwKDbsSvzxsp60U76lKM9cgT9DWHLM2lWO6uQ2kgqc1Suc%2FI5Z2Jq%2F2Cl4UFJ8lOon5i%2FE2bEUIlcQ6JPRxB1WOfoQBWE63NDRrvKjb9qTgiQ5qJCPYrBVUiNQX%2Bhy8kIzG9wIsunqMInmHGlOtst%2FcMGUP5aZ1xEtFU9vlQQOFqrovXcCu2XHtjkRzDszwyR%2BttnGJt0BFN3Wnif%2FY7YvoDFGUnE06s73n8Q%2Bl2BABcc4Cl21Zpl8Qf1hc6QlOhp%2BREXzdXWDBVYTJkp07V1w2u4jdQQDetcFquadc4q2L3oSh%2F%2BBUWgXiRKpfEPhBiEA%2BT9UGt1mKlOefLZANPWIzG%2B45ad%2FmJc0xbyRUY68aJMDIDfwtfQUvuEu5k42At747e8luD3UIEtCQPMA7tVIsfoBfkCPailIZehBhmYLzkwM4Bb%2FYrwdY7UTOaF%2Fi5GGt2FD%2FhppARhY4S2XS5j2kfpUDsGKA7RluD9TrUltiMp00r5HGNfmQaxL9MJTLocIGOqUBekQwn4m4Rtbb4XTKT394WMeBRyYfUa2jYysvpHVYXpGkAvXTBbAsqC7EUZabpxtw5%2Bv7VI9X1QBzeTEzOxdvodBGtJ6gGdd%2FO08kvCC3GXLSr%2FJYUwuCO3zKps2QB%2FkvQEpYlfObx1kNEkyVcZNoJixFBoZQ%2B%2FdcW3%2BD%2BO17HrTZAsTroPkW0hOgq1fQjaC8HJPqpmncjCRoN2LEIEGw4E1Q2zEX&X-Amz-Signature=a434e4cfe9a6dc7030192c6a9fdae647fe1d12fe38bd7100141ba5ece66ade35&X-Amz-SignedHeaders=host&x-id=GetObject)

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
