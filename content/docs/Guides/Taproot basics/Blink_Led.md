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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PV7LAH6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD%2Fd8QFiALpzSqd%2BxQUuLyuNZs4RM%2F%2BhdLiHr1wPaf7ewIgJInHdK%2Fc%2BA9GajZYwgRvAqMOC75ruvi7dtisR0X14zMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDD%2BzhTBqb%2B07jq%2FMpyrcA1YFH6xsgeBbA8fPumr0R3umxm0CFDCZ9o11LdtRDN%2Bpfi7kkkgv3ZexaxdEa0To%2B2DV34O2Kq0lZUUCKlxvFtiZfAAF%2Fiibcxfnb1qR1cCxqJTDmZq%2F5zwY87EYjINF441GF6fRH0LQKnhhO2FH0tyFL%2FA%2FWwAhqy%2FBFWy07jYzHL4TueudqQjGz1EmKLo4VlKIO6XtzTIeTRIMtGDS%2Bfu4j%2FOtolz9gIgQItGfmq1qbZBSWLR%2BliNSUliXTfDjRxSjgjKHu8veYzt4VdgwTqWQVgCOXJvSOtv%2B0hcT%2FrrrI%2BX5614BAjzM0AZVLBybNTomhNsQc60MwxF8n%2BQo3tAnQUUGQgfCuAcyshd3VA1Xr35d0uZvgPs3sUZPQX0t7T5YSQe3xt8aCpCBJfgAaymcHnkkRWsnBikEYPvFPx6OneeZMcqJ46YdstjieHHhhoDKEmeoaMtXTDPSdwxDc6SJUZY1bEd%2Fy4%2FbAVnV64LLHuozNAOI8QhEPQvpMxW5DzaeS5JPMAHgesQJzEWSCsvzWoO0R3r8JiTA1egDFydVFzzAYlPlHmhKMtAO1DDWXDoGSt8YphmxKLqduGYZcmlxhvFNn0nHpl2D1GLLaOH0y6Gc0lZAC3%2Be1hVNMKuu2cMGOqUB6WS6oOLon6gIivcrNaAckovERkCiYZxU49q34UvJ24PLonjjlXgh%2Fm%2Bitg7bpLuoMowgo9ruPJtaE4Dp%2Bd%2BLFCnmAQo8ppFkaSU4zSyFAC0b3CYYNk7%2Fy7%2BUs9fn%2ByjDIEf871ot3JMTjWaqvrXPgaieK3%2BFkIUZ6zAsZ68ne0N39BaHnQaD0e7KKk2zAjRVT7Fw3JWrSgO7kLI8IapIzJkmv7ng&X-Amz-Signature=93eb4314d62a897d835b720e5d0bb858775e91161ba1665fd0a88a10a3ca1666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTCSKGS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIDh3mQQlzs%2B4KAOyXMEUWM%2FAvk5Ol60G0CPdNyv57SeqAiBt1cirlNl4SKxNYrhnfcoUtY7pyIXBZiKiLhvl%2BOQCrSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMwqcfMGtdYe563z3FKtwDZ7fq1y0Fl%2FRhwEyKAagfoqn%2FU4RXA0P%2FHAYkhG%2FbJ%2BpQ3KE73Co7ToXLs7QtHYoX9LHgO%2FBAhyOquQYwY%2FH1U1rwTcxxyv8qv5%2F39P2ZF8%2FuLwFJY41oKGILcwd%2FmjAl%2FS0gcWWNtrnMZn%2FVbQ6VXd%2BJozOmMbstoJckKRcBdBN1vUP%2FWnJpmC4jaBfkJC0m1SoLHsfi5R6qC1wp29VQZFmjUtt%2FhLTkywDsl9urqNbf6BUXtaDPBDrE0NrrItBmvmAxGwdSBYLfgMm9AzrbqLyURuiP5hPKJp%2FFHHljTUFm0f6FI4qIoT%2BlGO63gNIvY4sGPDoj5KDLcgXlTfAdyZiHsXAiwm%2BEGQuVwqO4SoBWrfOtbB7O4xtM6L9u3nwlrFI8WViQ8SROwKbvfpViPlHcLBLUOIIFsWOGn3ZVfGrsuA2rth6Vkp0u9CjwQ2qkA1HU0Zo1Pjfyp4XtxmukOTDLX%2F%2BXrIaDgRPg23wsLR%2B7UVoyr8f2kZFxX9ES81qVnOarCQHwdgfrlbv%2BDHe8ON6ugXqWBqgeKdDe7iSxzbUU6j%2F2ECYuoGdCO8m7H0TzebKUlubE%2F4tHaJbvxA3dvGtjj4H8kPvpqXkY%2BXb3kJyNl31%2BsKEvqQzVPgIwsYPZwwY6pgExgVndERKvur%2B1YCs15JmNoS5yP7Z%2FJBNmA59qnIksNaTp6wkDy3ERmP3MW3%2BesE1hnAYIAWmexoA3K7fC5%2FLe%2BPS9PMAktdBBlAv0o3qi%2B7C5uH2t%2Fgvg3Q9ZLyFajkfSXFiPlz2Wx19RlIslsv7Wtck0PvppNJk8%2FEbS491qQm5Ym%2BVc2mrwGi9zLcxMwX%2FiVboeBTOFy30SoWvkFPrZi%2BPcaSYj&X-Amz-Signature=488844eb3d7d6d76fc4bb872febb723cb1bf94c130a3c8ddc2250739ba6e5767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
