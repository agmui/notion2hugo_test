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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S43E2EUL%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAtlg3LhlHiPkbfUFZ5qX2YuFiudBk51ff2TrwN40ElIAiBUob9TI5l%2FHnbM4cX5%2FgJUi68yPvY1k1etstpjSAkYMyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD1jfVafo1UmPXilHKtwDcEiURcwMkx9WIRzGaLCMMTj%2BV2cBIDNhuW8VdCJBm1Po2yg8XhK9YiO7ucv6KkUJqAwqfg70iRE8IPqvgibkpbb6NMtBqdAAX7n%2BWEEC%2BqoBS8PZcbUTVOKiLXTtTgwPMtUBnitmyX9Ef6di7JI7ArW57%2Bgy0d4bgYhMTi5zFzQYjLT%2BVHTJP1qPKa9d7N3qazRiOwPmyYHM0kdGVRwm7nzke7aOSzZebeMVyLyUCXFx8%2Bfl0Pw2h9uagmphlTgKaNveb9vrYR3vNm3a%2FMpVUSlTr1spW3IINVtS7vYSjuwXAuh2RY%2BM87WwiwFYfwxCvX1fg1ca6djg3TvmxnxBh5ZduCjpqj1aC6kl1WdsZ1D25TtbtBHe5N0SsaNP92HBfNBes9bkCL2adHWofe8umElQckrpOFp6QDaMdohtTG5NMxRG6NigJXcZzpnrL%2BY0MW2M8j15TBT9E1YLlgG82JDZZjgYFH%2FckuEr9j7MGcZSDAH%2FxfKbWe8VJp4JXsufftacRwntLsM0le2mNRD1v%2F4dzaHfRg76iqkvDu8yZQRYCGVxQ9H2qQIFYIkTDSi1%2BtMFYFXGUMaUP6Dad63u%2B603AUrqRgymQ4H09li2LiQi1tdv4AxTFOFRCA8wsZLcvwY6pgGdtTqlU3fSDUI%2B3fHqeRnHYm6NWynmBNnqL5iEonqXbjgPRufU35YAhlRSI15yXcgoZyz1Lzxh6iIS7VK69P78mmr0%2FPeHp6S7vkibYW2GJoUkYGroH%2Fwrwpx66CS5iTtzYpAsGvQv7OfGPT0VSxxRKns7NAky%2BinP6SYV9BtNEdt3Nyha4K6kRM4Rgi%2BPIQCQLehvP61Ck0sS3qT3nRbpi3BUQ%2FJC&X-Amz-Signature=4c3d8d0c1f98231849d7204ac0f6e4b242c6b9301f7c5cc4fc1dfc66b851473f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6INNBZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDxY2PG0bjp2KIMYkQlkAMNjKXG55%2F9iooP%2Fz9dnUHZIAiBTI37n9lHy6w5DSePjO2xkwaa35B%2FJ4URvFVptuYJ1USqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuglJLTQ7wXgH32hyKtwDjbkLcLfBfPg5tzs5h8EwIQzKwyKkvUONNvpBL7nUo79lDGndZpBtN1xcRkzAiRvsPgE5%2F%2B4sZTlOd3arQbWQiC9WIopOl3mmbHxumuOKRSSFhywFd8Pisv3NiEqsM6cLB%2B6X6USDNzKCb%2FRjeXi6RQqgLdxP88Nr20lJef5jCiqKRoZaQlvvLQyspvLwHrUuzXl86TlwF03FdzXAHscOrsBXCFK3k2uCxJwVHxlUBaRjRPbKJmhL107xuThw2hOrn%2BTyXlNNmbuNC1cP4SQKzUSPxNA8ZbEEoAzh1dUPUpBlIhBGjY7lXCxgd5mW73eYiGrskkGBhYUYNnZD5DnzV6JAJZjazEYrZcbqGg9iEeGVamKeR2u%2F8p6JejG4YRgLQPN6SKw%2Fk6Kl%2BswvPhVsT1WRwD%2F5lwo3cRbjCKLEsbt51%2Buc37m6%2BZQW6ETDuTrxv8rKeJqJ4QOyn8xG5c%2Fa6PPPKfYVG83pNNIA1hjUKsSVTMIoPPR8a9b5rDFtVKQm6cLi5G5yzALk4%2B2g%2FdJON40Zz0oSsg7U3kfnQNAK5bbkNnZKi%2B3Q1QgmmmrPJRLDGVkbcCMy%2BEAp3gdc0tWmlTSXrcjuzTf%2BqGUWggjNdn5kTVIQ3Px0hXM8ArgwtJLcvwY6pgEoeRrLxC2a6ZdHzKN1sY1U94NsnsWN%2B6Kbz18FN2VX9PDqFfTH2e1W9v%2B2Jdb2LBzoBbwUKS07iQIONkfyPAsNv7SyGcQswfRMKxY1OkNdisFv%2F7g1WY3UGGj7VOAmqZaE2fbDuswHLP0Z8K9NAWOhmlhgF4dGMgZ709SNMn6af%2B%2FWlV7FKbZyqiJbNAIAbf3FH1jzgC7FZz78CLhAwsuGb4dPJQs3&X-Amz-Signature=ce6cb4b2f5995b91beeac9a74281f50f4aa832f33fb93a925a279487e76b9fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
