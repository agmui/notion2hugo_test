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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDYMS5S%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw8SSSY%2FcbnX5XMrtAK5XktAn3LCt9fnP%2BDMpUTPULjAiEAt906cOQ7ThIBoL8msSPLixOqxyuulU%2FGJ%2Bbu2YSDITUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuK3XYhuFAAW42ILCrcAz0ISxeNJlvZdhYS34yXv%2BTAEQ%2Bn2vAKp9TueUCxTlJt3OaMqDvow6ACN3jL1OjvNAkaz2IPQ9GQ1m3buJv9itULsdNQXDAZTEzxH9YxBZKbOi2KO0zyPPANDaEo2mLVxl36z3EeIpsxoinvAl1RbvkJKMqq2MFmm%2Br4%2Bg%2BrxDPiHGeQ7BnMj1g%2B9pbzQMqbzhjkHqkID8B1wkXGsLNC3ipZ%2Fy%2BVpTG8HKLS5PwfF%2BOtHpuEuhJqyHM4jV5cE15odRB7jUciH6KIo08YG8EQD56wbqQ0iEew81xEGpO8KaPcLegvr3qRw3dSK7UQse7YhHzs5%2FHMmj4ARGnQcQgjJ%2FL1vWPCVaIbKGwQy8Z%2B1yIZZcob6HdYRyhAAAb%2Fl7i9J3Ix%2FzO5KXUDUbqqqvUjOuwVbup7BXFJoX7WKTLyXXLY2whCp6Mji9tHs%2B%2F%2B519af3O54rEUGk1ihUwPzcF7V%2F7MmkG1hsENn%2BfD6xbHjx%2Fbm%2FjqFa7kfnAm66qnXvEQki0riL1hGqD83mZ%2Fwo1bbwXpx56HIKXX%2FFXR5LNZ6o%2FfkJ3CtCCSkvgyfr0Mn3655%2B6Xc61SCDOmW28Ji%2FAtWRyP0KowQLQF%2Fpy8B37miXPD8uUoJ5C%2BdcHf4mneMKL50L4GOqUB5hs%2FZEawC9atp1npJW3HYVz2miHvD13rm4JpkjBI6NDr%2FKQY6dOLMyA0zjf5jjTw09RenAdB0iKgRHbpeRWAKTfskcbXy1EtDsx245RZNWdCa%2F78oEJaG%2FNsJ7SP8N6niujuyjtNWygZ%2Bfyzva41BlbSW55OXe2vumwHz7CZhzP7kdwMPiR7Wy5AZwaef%2FwEKnNl2VbeNby%2Fflgc3arObsEtl7T3&X-Amz-Signature=54f58973525638cb2eeda48aedb7988ae7f725701e0c92db29aad64efafca154&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FH747LN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgzqYc9nZFUqBduH9VZCfTb%2F4P3RNaruTa4o1I2Km4EAiEAv%2Fn0FOef%2FubguWuD644VpjmT0x5kl8IdnUmwzHgFUKwqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOavvp9QQEX3i9q5ircA6lUb7qm8Fxjd7yJIfhDHCRDGiTBbHDdndby%2FIfjVg%2FwNyTKUKJb2dh4lm9OhEgt9yNTPfFPWQDUJ4hskTgv57pDaPVr%2Bw%2BD9UHCjjrIg3qatNPuBpI3TQ9UAmzigLm8YjtIxqP9wXba9tEQOFYQ4CrzaK9wMOSjYU3rhV%2F9aTWH%2BMgVCJllEY3w7VdmXbniwuigNy9SuomKjjK60d8oY9dP%2FNbFEApLmL4jT0%2BJpZ7l9qL6JplT7pP2XsHerESwYv5YP8fuBW7IKeNtY2N%2FTOVxuKRPjkoh3eKFZg3GmsFeewm3RqK0vNcMvEGRmqsxsS7btzWKT%2FEcqf3L7ct6y3%2BsUY8YuDsNuVtBSj9mswh2fuaKcz5i5NgcZBHY18mXIsPPQ3k40NAH63rrr%2FY1bmPumbrQujV%2BqnM0RnbaW79nFOLvNY2ZuZxF8JV3PGAavyrlFXdbK5fk53JDRCFP3dHuwI6LqMXytFxz5M0o1YIcCwiGvsn615CFfZ2YRwNNysLTPSsm5mzed5RcsmfKodvkT6X5aA2v6m0k3T7FKGpDApapxLVIFzVJDRr%2F3DOHH9%2FWrvD4xMh%2BkukTlQBwM7yn3NkFwQaEMZlJ3nmGWwDGc2%2BYaTnjTNosPAm2MJ760L4GOqUB1ixLRtljJzIIAyGzb7MvFk4eABXjOtlwvIV%2BNN%2FtQUg3xpuG3%2B33qV0cVVr%2FrMU1JMtmQLK2l6B4OPPor8qiZ7Z77B4BiyWamJfwhshpF3j1G31OAS6PA6sBRhm7%2Bl%2BCbP92tiYocluW%2B1iXrX6As6Fhj7maDQVnxLmAVZ%2BApDZoLyab1oGFDT3UqPGv4r6FneoTPBi0CO6b4EH6cVJyQBMzhc6L&X-Amz-Signature=ae87fd4cc2cf1d1a47ace311010e7ad3da7b0e37bb412409a37c505ac9fb2822&X-Amz-SignedHeaders=host&x-id=GetObject)

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
