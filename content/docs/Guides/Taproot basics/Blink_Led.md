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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AKKASXB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BcjQeO43SlSoj%2BKEWmHapEaHcUtACR%2FfgLhmBBkyYiAiB3k5tla3zZ8rMrTBjcJNkR%2FdhzP%2B9RZGp7XMU8IxUPGiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrY3RS8QE45scb9YhKtwDQ16Or7kkq4cLtW7zqEhBGZFrVLLRBY%2BJRn0YalNBH3BfPMmbaFTOQvr6jP53XfX2lKp%2BKOnmYnqkhO4VP%2FFvoNTw42lhg%2BYZ8P3pMOy%2Fycyhb3OzEGsFzwxxzRHR1nFw6vS%2B6b%2BvzkvoOiTRnoKKh%2FT5bIYG%2FmoSaqgWEuXppZIKho4p2YM1v%2F3xQyZqLBWlT%2BeKEcnB76jhCs29KZkSoAT80gJpivLgqgEOnddNIRj%2Bx%2BSOfdA0KA7doUG7i4Ct3GynNWVA3q39cyYufz566wCbmD3oCl51g39fi4iVglk1kjI7LM6VrOx2Bdaa0pZZPDcr%2FwvMqbCQEb%2F65MNF8J1FyG0F4LO21LMdxzR4jtb8bZv711RH9jH9StlSz%2BprCKHKnkK9n33tBJc%2FOp9KDvrB1CToB08lTAuUd7StfDNGrBhGbn5ld0dwIdCVBbSdI73%2Fcchi6VOWRGirVYWYwZPJTC3vtPYLoHIy3y63M20WtHDSzBfvPyJzm0aKwLo7xjcK5mpvWP6IO3Y8bUv3LRcR2kIzqsgBAmOkEqVh9QttgnRZnsC2JsjOwnSZnC1SBHbD2sptX9jqKoqKBJUtCev9eZQX99j8OarapFitB%2BOqpqQbzI19sj8%2FzjMwg%2FPnxAY6pgFUek9GmhzeO%2BiRtExUkbJEQmvSkVT0skWl4lCOhYDX7KOn48GEMwuzxLpQbDhbBYVisX3wIylI%2BfvyrEefS33HUtof7DMeo4eZ7MHUbP9xSkP00w2PbbaOxHpZrzbmM81ec%2By%2BLphFDEcv3DhQsqCG%2Fcb%2FsN%2FUzqvQ67wvtFudBY7m5KM7K7uNTk5ffK%2F%2BLsK589Ne00OnInNu4UKEiEkBjNBdIcI4&X-Amz-Signature=7f7f3f0ab39041179074be5d3ff6c49c5b89795066c8fb98dcec82dbb9452f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CQPF6RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyTpPSQlaiivwKDfIAolqlvXZuO0HzrgBAYaNKly8PzAiEA7ItsHzREAc%2F3P0X4XEW1Bktgxc320ME%2FyaEy53srvL8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFk7jF44%2BvW31yfBVircA%2FkTgxnNorNOb19vC0VZFC9HKzbMIMLfLFH6Wg9UALwkw44nsal3l33%2BJNsHG9oTPGnV1SJTUkkSltFF%2BYcZY702IRI%2BXDNBWJT1C4J%2BAeZnY9yoMErpAyFWThnd%2F14I4%2BA79MvMcjtPWhot3rxKqhj3yH9EDJYGkcLAtZaoHD7ILMJiscks7VHomd1lXGgAk6B13JZF144RY5coXPG4%2FXehRhBd4eJeZbcpFBGloZ%2FsNwofLuMfXoB7ef5izpFVslCuvUB%2Ftf7ZSwlPrM%2B1BMvnoo9%2BJYamqeoGnG%2Ba6g8Pi6Vk%2F0TBQsTnCUWcX8Kn4WUMmMB7lAamqWJfsQlIkSbdhhFeh3bWTSj8Nwq6fa7Z166Ugjl%2BRCb64D3r5kCt3Aqd4K5lXYZEx741oHHsLEwA9%2BJXrzTuiwctx0hHOYiEBRuV%2BqOFQ%2BBoZUl4EBi76nil0MyASlJMizXL2I1s9K%2BPZkCYwIAkgUIcnIccrw%2BaVQsVr5ItKLvGBTYVh0Rv7rG8Aje4I%2Fczc1QZGvzkyr67QHzWvazwqxSiVWSZVUpLsP3mj6HhjIJxjmRWvOJgf3hWDIvDVfY0rIsb5qdJtOq1mfB1cjiyN83ZjqJofbXvQ70YFAroZIC%2BmurwMOrx58QGOqUB71jZdvkpLEJneY5n9N%2FRbodZFjo9tB4xIv6cRdeyTZqcMpU3pgzNJpXxEKwFnc4vmorT2%2FJ6j0yfNiiYODmjjNTZ6P5oqfeB8kvG9uptp6GlsIYeiXrU63pineRNSpa9YwxWwhXppVLltLvAgUFdQfe7K1fyicBW9LBqq9gItQFCBqZtfU9mBY5LJ5Cc5Mwjsv8ZPYFNxqEda%2BQcG3wk5J%2FVnWMW&X-Amz-Signature=33861e774cb511d1b89461ef07b8ee219d3c254127ad2354bfbe50449fbcecbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
