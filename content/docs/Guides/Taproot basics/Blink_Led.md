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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJ5FC5F%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKJ%2BAbZcnX6GZdPwImJ1ZLsIdGXdI9S6lAJO5gryy38AiEAtNMy7Jq3VLTZMS%2BidrRRsolz1twrRoBCWAHDLr1LHOcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrnM4nDnhe1axWQjCrcA%2BbGNZjCf5tlywmyDBeQysnnJhRv7H3iuwOcW%2FLTajr7IN4B4UQeDJIjF%2Fi8t2BqpwzkQXK6asOd%2Bt3R%2FrAE%2FQMSZVdzz3cLJVvHRxtz%2F8%2FA0t0uGwF%2FB3LZbE3ktjRAXb3WdA%2FX4JcB6eVc%2BcCVBWa6yybMgUJmJJQL1a1qg1H5GTO0aXZZGkObFueSUmLJG4LnujeZwKBd9Kqr27HoFRvqGPTCWGMNBb4fy1HQis7LWlNmkblIQjU0YmJ9BRW3oYHDv79sjnTkyIUc5o7uXh%2Fknt0CPufyWtuJuyoHOrZw%2BeyhLM1yTnq8HaQIJxFok3TeFf0jdC6m1in%2BfuCyRJeDk%2BL3h6vZfGpSIFOcRy6TfhcX0xe79sqITZ1jCJ4FxP92jxzCj26Y%2F9nl8ekExF%2B38jHUkhEkb%2FjJEjr8npsdvtmBqEadlCmErdq6Gu0JxwgZrF3MO6CnPLizSqZbQgfDEMcs9WNWf%2BBVdTFWk6lP5aL6q7owsmoQIvxYQlf0FK96Qj9clJ4eDsfhjEtfZdsZVm020FOkFZsvFQywTVB5rJDdqj3fu%2Fj3D625mfmPoZYrXORvca%2BGsUFJ0RckiIPIW%2BFmXlqJRfPjEk0qYr0Jjzo7%2BHALNgSK6onyMIrPxMAGOqUBivwWplxPzOb6pCAwRsCIiAKi9Let3I3KLn7wOMaVTg3q3PpWwQW70OdJL5zf1cYa%2BPakfG5uy3BfNFa8oPkx7aJ1YklUz4HZvq0V%2B2xOtX0xTA050tPnxUJBAgv2Qk4O2YVT3NOnlLLPW37uU%2BajTVSvAMvAJhyMx1uQaoQvphGTLj5dvDLsjbB0FQE%2BZNlKGKBgfGykwnEfU4K64xI7H0Yne3kE&X-Amz-Signature=62e84226da492f75830bb046a589b260eb3c029e575798bda5863616a9708e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPZ76PP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSAkmu580UFVSYyncj3DLSk9F719FjJnjJk0Qy3ZqvsAIhAI03Bb43Y%2BiGT1969ic%2F4ZUOfLbCcdcJXiXOXNM7JF%2BDKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSu7kD%2B7ER1uaf1%2Fcq3ANvT2HBb3JKY1%2BgBIpE7BJpAbLDvaLp8DUH9izTPkRqRoztJbN7w3cQv4eBrBhF%2FfKxKKKwc40v70sxGLNW5VwYZVYDznkzcA%2Bsizqm8TMYq4756riOAgSDoavRk4b3pKUqUcXD6aO3jOPfICv7fiaA%2BnPQAJtSBLkiBcLbkGUddBXGUIWJE0pHHLPbAJRrQgN1lrs6CMTQXEzmYfzMGfu7yFE76Ef7bBOOyD%2FjOKsskyzZ6mgEnmfm7klJb2AEaGTToCZiKdwwjMmhYbLgsw3e2y9aMXJSNZYhu0oaoAGAUzzCnl2KP8UKlqqKSnJzMwQ3WvuBHIlOtbayRID1bPbZM5zFAejE6MjWWFyalID59ExgmKuphh3S1SYWGYkYD4J0FVG4%2BslNUIEfMfQAU1zD5AJXlmp6Bz7MDt13i0A0cROwRjHV8CNcwZNq0k5z430%2B2PPbG8GPlKlOhKO%2FgNGT5Lv5GmKbLDFQK02hTzoXwan%2FXuivZElWytDeR1hXKQzLCJ14kwNHVPZcE5ELStpE3SsqprD4HByQZ7p7R%2FpCkLbpA0kIUBZak4bKx%2Bn3xiprVUYuzhNnPtAEWRIxbdBcjmUpeu32HgyRLLyedaAy0ioorG2eMqcafDeJJjCBz8TABjqkARS%2FcRKgRi%2FLa6NDqPQR3pdnA2u2GPheyAAkYujnbsV27u8D3qA%2FbCHHnUiT4k4fRrywYzHvA86%2FchBm%2FIQ6lpiglhAno6Byk7Eh4i3B6OhINslmaoRIkXs4neE7%2FG49ZBBG2oM7Ex%2B%2FuZesENUk7ILzGhQzTj%2BW7F3oF8wQwjpUdSX7xj5ihxryqkcnWA38UyH7HSVtz%2FSgge%2FHs1WH8Ob1hAdf&X-Amz-Signature=f9f9bd9f85a285ac1394bc0d46abd5d6cfeada68ca1c027f662f5caf7e449e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
