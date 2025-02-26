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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPXDNJS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFOw7cmlO%2F%2BFDC87hKzJF77yNqFGdUSKjsKjzmykJTTMAiEA32Fx57t7GS2Z%2Fqt5U4x9k5Gu%2BxNhlLe0F9vzPW5GIZcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG3jbGgstH3%2F6KVSHSrcA4f7zqp5Z8Cs%2BSyNM9JBjsj48gDpo2mOGRQt8An8rtuL88lWXeSwPl23V5nJ9fiuIdECe6nESk7UP%2Fwd3v%2BG25Wd2%2B7aZzguoK6Aitzh%2BEZF3ghvuBQLheRprjE9mW9KDeuWpOUattzYWmrEdwICDOp5bFJKpbY0W8YEgaVyaxEI2JAAMg33GZ5DJWTXd%2B8HKmTiXn7dEqd9%2B43vN1cI39L13ty517XrB70adcCQRfd9zYvR8TGJIq9YRwXMogsHAG%2ByyoLEpzgwQI%2Bwi5Ic6z87lmzVtkSehv5i9P4Y4sh9C%2BwZ0gAV0MIst7NVXDhiwdo9cL9cn0OgUhPWhgXQ2Ucrreh0p2EcLNrRH%2FX38cLmlf%2Bk28ntAIfE9lzTCo6vDiUYuMogX6QOtBBlMvtD1vYAI%2BATKOXhZKRHsNmQDfpe29Yb1tRgC3i4lkaSfYCLVOd8JjCorkT5leixqwjrjCcARkNhO2dZ6UUiZiSv0VjIukoqJ1tujg3ZC%2BnqippBhdtfN0aLqvypPgmyqR542i7tvlYPgXFvpZTqZ5ROsCb%2F7gz7yIAb7WWqnVEM5T%2Bwwl47KyQX7c%2BT4xBU%2FJJC3Ilx%2FaNQ%2BxOZ7AsSnzP3GoybKWSNLTnvUGihhabEMN28%2Bb0GOqUB7qvuKHYRptXmqGfpVh05uOwPK1Vv5dCtuxhMGn0xJ%2Bs4zs0RUS%2Bz6W4izfq8uBXIbxx78m4cibLN2GahAiuEhKpoiSzLeUlLsMO4aa5bd5Kk9c2JNUoRv3pcDK%2F4ODchx6OBJnLeTb3AuFdcQAjuasvqkHOdxjygKxCdoWsNh6%2BmElnIN9n2ZGXgrLmcok0qXNRMsKCPYDjhwoMZPBfvTMDZAZML&X-Amz-Signature=e9d32344d0bad5ae7c4e262a2c0601bc6716125f810c53678f3114b6f988d5d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQGVY3B3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCpkIaRNnsICtU%2Bl9nFii4INkHq4do0D5S3KfCh29K6ZAIhAK5U6btD7tftG7AOCY9%2BcK1reycJYQWlym7ixsWMOkLbKv8DCFEQABoMNjM3NDIzMTgzODA1IgxV37mVF2Mtw9FN7sAq3AOX9L7JWW2NI04iSQ9F44VNuub80OV3I7fjZkCT9SBZSJHmzIWRJyZiU4QNskmmnEoYm%2FQzM014b%2FLok5XB2n5KJM0bORokZQo4xoWuqmglh7ApEDVtTvZU0DvsjpCL4PTBslO1yq3v7NR9yslDQbAuELOAb1ERNTguzyHlw5zHaw1OD3x02oFbxFazsKiilx%2F3ovkkXcPsXjHZ1sL%2Ff6ANj621tSsPJqBl2Ax5tugNEwz9WMPWdhpgKl1iHs2zK8msRC%2FbssNRCMOVn%2FV9vQl82NPe1qrJFDD8mzQcwVjGaj8HnJ1G9xKMYI41oPT8JVVnFIjRdqJyEW8wt8HLaQ4ldP4BuLVJZ6eUTYFcTeb3f4hQC%2BoMd%2BaZcbh3roeA8Kek7h5JFIU5dNUg1wGdv4GpRaUTZseBW5Cg4U0wXhuoCx4tDGUZdk5Wj9jytGDCCFKSG9%2FhRiZI3TWjCiKDDuDD81ykEIUNX9N3YrNUQQWPULYk7dTLxbbZ0W%2BSWeBSE6rXIm%2BlnHo04Q8u3u7YNgRaYysGcTJP5HodIuuTJCOtz4v8%2FbPpycdApBDy1T0O4WbENq7GLiF0MDAjSfVX3nle8zYY4HPrxHnOhrflEYkEaNLYpHuLcIMpcHKMnjDpvPm9BjqkAXsvzp9hkksVR1xFUMcTPjmI4kpxwvIZvF4na8dN034rWngfwluVoJ2XSnp0DQZfXXFrJ2QW9mvEbWUDaLbzfnvvgOQYrV5tojzrP7NSyGlT1Fky3RYdrhDtWjTdI%2FO43i7MpAoWF6JfMaTBRSfmrHoT2w78YT4MeyqHoIuJKzsS9bVH28YLoF4nAILXV8m0UJldHZDfwCUtXrNnIR0gKMwkhRai&X-Amz-Signature=a85e809ac6e975c762d5adaf740f1687cf490bc3c96016893849c27f74ad05a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
