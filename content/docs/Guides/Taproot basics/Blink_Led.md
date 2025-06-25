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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJVZNQ5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICjDW7Qa7FlMZpDtPC3lGnEhm%2FlScnujl9NFerT6UBJFAiEArvvwIGNlIvoOOwHqC4fNvU8hAIJUVyBqjZ4qe2VSVpwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCkf%2BcDSZXsEFw3%2BjircA%2FAiz%2FN1F82cw5C1wzNmOd0YgzAuO9wpaG91IzTqW6gPiuJoKWSFlyuNomkXqb4rwFVjFogsRgpf%2FSFIDRig6TOd5MxupHCrdVPynQzfZb9QXkGHrnSBXcPSlwzTZuu1L2C2Xq0TAU6aVwmMjuhnE5qzN%2BprxNPcrDorUgjKg2uKHu%2Bh4UK4xaDbO0qrgbTbbVqkDs30vCIklojdsdXcjGtUWaxr2tW3QM4xhZR2Zunz8G0OBbSPDC%2B0SslP3HBR2uX1Xi0Y4Wvu1Np6UUWO6U9czg69rdWAAW3XPW2nz1fXHbfWnhuk3RPczD1EPpftewybveSb406ORH9AolsjKUNXXD6uM3nTu3WK89%2FRiQHL7cm2qSwP%2BkqxcVtEiqr3mZV1thyDS%2Bb8N%2FVZO5g8tOvtYabcUC%2BX6dg9iaNd9imhZjWTN5f56E077aLSi3WYEQ5gQFkGhgnThMfaQhL35n24FqlERxFco6LgGDvxJ%2F2H%2BxhhS47iRL78wBQKxz8RV4K2rNnHXKQxbNZ5m9Eklxw6E1wDFOkueRxHVYIxlL7uocRqxPcXS7%2Fw%2FFyUPf6QV6YvTguZ214qgXfIUbuUOO41EteeNa%2B4kr9PucYSoNd9usscLbdMcvghiw2QMOzu7MIGOqUBeqvwk0LCQarAWyLKLgH%2F%2Fyl4BgA3bs1PMHV58nA4e4Wqd3JCbZDEfb5zubtX2aj0DEepnomyMUh%2BndU9nHzVlNkwzVnQ91hWpceBCUz5Ly6357Lplhooed8PJb6euwbqMXMdPwguo2W2KN44gp1GWIFB58pMxMMXkg8LmZcJFAA%2BnEkMMrhWYBR5cL67ZPuJmROzZClCCPECAFrx%2FKae0d5O7woP&X-Amz-Signature=17c7380bab5710beb0030c7bb0b69111176ef1ff3e52b74871c35a1431c06b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASJF5AT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIFUqRWdnbfHqldB4wU8SCFe6nt9JQKzqeGiLHaf6S2R9AiBxyTBG3fwcS266eyLQtNiA%2FyXZ1i57xYbB7rKExXyvUSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMBr3%2BYzaO5y3rzrx2KtwDc%2BJXcMQRf%2BgZJr3%2Bha3CcbIYREe9JY1%2Fn%2FqUcGHCrFJ0BC%2FQu%2FqlPaHRYfzPRNf3alXsz9GZxtRYMNkYWnWu8rFWsw%2BqDAYeEh5b0KXdpFm0gWGfCrBFSySHUMUoD7ynChzt%2FFIZhPfPF7iHruOMP35e818OfcNG1Tm%2BZnfw2CYk%2BnkzgX6EYJ9h8wTbkpWnjuvu15%2F2zkHIPMcgcIlMcF0hGTbxiLgQQwLnXpic%2FwkqN366mBSxkQOhqQGLrRLEpv50iNlqz4M08EHcW3ekU0on8LyqOivMZ7K8cp0LYfihig6kY2bNZ%2FDv%2FC3vXkuEX5jn%2Bc%2Blok4LdxujigEUtO0%2FGt4MgvmQlCsfN9VNCJIuYStPs3S5eiQjEpawfDyNww53H%2BNW0oqtvBwzWLHlxHEPlGiX65w2joctMIuJulU21dLhWRTTRFnrt7cE59sIXs%2F6kVTHEvqT%2FUptUMzxkaoBDXTVKLn9gZK6m%2BUO8yjjbq5u%2BLrxgqkNy4nVM9%2BcrfTys%2B7cfpQ92ahuZu3BG4srI8zqkxPHLg7e0zxtjH%2FebzYiDJG9QQRT2G7m4tkHpRBvYDGemTALKmo7Y4ZO8Vj7NQi3%2BKdaBpvRnOED7EMwntQgcmtlYxpgsGUw%2BO7swgY6pgHzO1i%2FTT82PidsvAMatWPSikNuxQQnhO2BAVOYQJH7Q8FOJEBjVWiTkIhGiJ4uaYhoFez6FmeMWX1HQQNCs3oZsPZlg%2Bft17pyw7iFHRQX%2FeXG4aLKTAdkvyS1WmhAHRCccPpr4Bp9PEemnvkfWLVeGTxanWarYwkTdYNHszxrHc6VpCMiJLaMBj2dlFpLsGQdeDx2dNA2Nt8IvMemDilaKAfgrh2o&X-Amz-Signature=c91c27138941d1edbef2f797cd558b2caf4baf6a9e0f63e0e495f91a49caba56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
