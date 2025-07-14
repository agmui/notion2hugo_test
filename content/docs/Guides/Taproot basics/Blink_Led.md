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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPDBRVY%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDNGZLox5CHBhPEUieAcT1U0QoXlKw2BTcmzbhe1Hx1xwIgbpYvklKzlYdWSmbQNH7uVKnkujDLJmpaQpt7PrCBxgIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBOMrbBVJG7O5bhN4yrcA3FzRKLIMAFUEeEYkwDCD2sE5Zc3xrb1RBe6o84LR4X%2BbgksK6ZUCHX%2FcQrrMisM02CKBqstn9ueZjzUkd02MGQidbdOWl0KCBu34JFomva0bkTm2mj%2FC2hVO28MmdNooXoKM633DgKI5YjxJ2qFSpVwwGjLxA0mvHcCBbAaGVkW%2BwObKDsmeHXoRJL76W%2BG%2BCh6KCNJKUlqJrP8sFrVkY6Rgg0nDTHQEM9AG4IfX7GaO7lgG1ZRZzMrmgUeo3T0r0H6lTvQidrua%2B8rYuHNqJiK%2FYhTg%2FZMNs6UCBLMGbEtZhDNvhkLYQb0hXUAkwTpjSyx2OgGA3l3I7mHWB34qZlqrSzqIZH0dPG0vr8MciBuSRpeBXSMLo%2F1ELXRTVKVApuS2odtvJ2KqsXJ%2F4bdsUu12PW30mSk4rYZIpvkXSal4GBVbWj%2BFWvIklw8LHnfL%2BSGrzRhQfJx%2BcViPQCJaVCAJBtISVxjoagOlFL93UN9Gy%2BFYOyPEvPe3r4Bt9uXwQQxyWk3Zp92qWCdQy5Csn0X5NGjG6YYigrUJaEfC0H1K4VvZkht5rdpMpagHS5nyzM2GVMDW5YratYuBxVLrJv%2B9kWLDFWzWqi6cvB3g1q3nmUhryBZ6fRztP%2B5MJaF1MMGOqUBgPDUX3Iavcjnap%2BoVpSPJySCm3w%2F58%2B9CU074BqXqRTOXle6ps3kYSe0iUnyiY0H1skToIvOznlw4rCCgYK1bjGEpCdYyuxL66Q81NTnnNaIm8jFGbVQmPMUdyyrKHROgmk%2Fk9uJJxOcDLCGVUesWuimxYUqEljgoHD3C1fkgsN1XCJh8nQ6XZAPars8sXJcKzU1J%2FKKCbF8riaI5H3eWjaQJWi3&X-Amz-Signature=d00733cedaecff473abdc689441506ad3793c05afde88bb71f262318e4241cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ZJQUEM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGg8r6PHkxz%2FgT8AljSi26CrlnxANykgYcdi1%2BNH5zwpAiAo3uVrgHayyzGqr5SREqbbS%2Bsnx2tn8N919I1XjJW2iir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMRgVZNEY3TxeI33UCKtwDjCq6xJtb5SFqMQnBhsyNPGkJXbUuVxLgNECBlS0CvOl8TrSrA7djxqulE436ZGL9%2FDmBSnv0zfF8h9UeCQHgZNSs2FHqHWzqmenRNzfg0hUoD%2B6mnOfaeMtd8Tm0K0YLcsoiGM4OlFqA8fyjf3wDpQ8j%2BZLvM51UFNS1MIjVvxSCyCWDUmay%2FWXq5YZJ2jGtwj2dc%2F0uSy%2BMYDnYmxIy9h5Hci2XKAsbL%2BlBwoyD3FqAFpmvS%2BRLm%2FfOVNbO8fGD5aZccXewqvmKBmZ%2B3ixLha7JP7BFn618AWA5%2Fl7Ioz214fGKp%2FDesgyRjAPlQDFSpSAuxHoSJcA10mFC2jl2XxS3jaVXquenWNfYhp83V7rDjRbb5pUEURs%2FSr7e8LNOdsCUl2ED4AZN7ezbA2a5z%2BjnpgZeYNgSvZsrZoM2i7y8wZjGItZeaM7wqKYULY%2BEgeoMHwCJsfMKGzf4CDp1H7UogI%2BdJ1eMmbiojPUW9gyh2DRxs2%2FDsU0m12N%2F2P8UwZVN%2BfdsolqP9EguBrsKWj2OayRJy6XpCaZNcig%2FeIXlrVQZQwEzjFiZTnbShr%2Fqf8FrRH7pGQ9DtIJcDoASaEz4hCoYQF8kWrDQG2ZIXdvESduVB8U%2BKWfSQBIwqYXUwwY6pgHbhp1ubogAGISqUiNVV635KD3M4MvZ7UBFS99XcAljhVn1NsBgJbA2jfNGUJ7hq4dEjYHE4Em3MUkbPSI6VlWOwvry9tdHkbXdKIWVTF%2BLamE5E5CUy859rPXvc5e4w0zTXypLwlw9eZpI%2F%2FJSW0OlV6y3pg3c8zFb5HeuB5EsSG94ThMDbw4dENJZesVoqzoc3Rmdkle%2FSizGW%2FOgB1yXYv2iviGz&X-Amz-Signature=7b0512451929e6c85aab5233ddb1491b33c101aaf7d2110b6e6bd3a708d18d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
