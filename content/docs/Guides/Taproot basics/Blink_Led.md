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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QG3CMRK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF9eCN1l4KtZDzvM5Kt8hVS%2BfmaP9ETs7ou2zOiZQbOpAiEAnhwwCG%2BYSmt4VGWl7vLXcFfI9wQC1eJnwPRsgRoTNdUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDP3FvmjqArgaV3nFcSrcA6FskX67yXal8i01P%2FXYT22S8pqaK3p4hqzQJ0XYMnz8K7auv%2BeUai3Q9UkCKJo4x0ivmS7D0SD7cEjYuDOWfoZjDZU7yzjDKnit2JPz0LqIwib7LHXmJkAzntJTyTeCUBBSO1VfwIyAtOd%2FtrUhUREtHz8Oy3gBHizQVTahoZ13oeRxye%2BNu11lISaSerjUmbrZtEdyzwK5JzUPqgwPPyQMTWFn5%2BJgfZlZk6EVT48F9l8429k51xc1wy1%2FZAgMvscv3QSMGYJ2GZH5F7xhBtkWxa4UlGHGId9TMHO7tx1hxI47%2FDGILzGH84DmPTRhEliMFGz9HUVxLgRI%2BnpL5yeKXJqNTehyOotE96nXm8mIHRy7QHMCeLm%2FwQJ0YE89%2F09Ib%2ByhCjgEeVNw34Sfk9Zx3o%2BZl7yeRmsEnuYkDIUWu6plWJeLCfgniWzUERBChphuoBXGOh4qPTW8HEP1pg2D15MxCsPQ0LUgJ6txQHZ%2BYIVmHFlIsggEviJ%2FgHvLl31gJSvXTBUAeoKEFu3hctiQ1urcUsZm5xcaZsLaWUIDLDHBC1DhDjmQFuDNEtfPqot6OJbtM0yFeSR2a0QmEG2OsXc08SAWKO0J999aJUqYq%2B%2FpKHHpDsNr7AvXMO3z5r4GOqUBccHJIvVjA3U0pdTsDEp8mRS3ugy89Fm8QAv1fqQcQJc8wiQf26KZAbWvfRVjGrfAGQRmmuR5UihmWc8LM4XyApe07WQ9ub6gbKNrS0tg7aiG7CjsGP7G4OT84x1tiXmFuf3whw4LNll4a5XRr%2Fe0pArM2gmGID%2Fxe2a%2BKYMPwtoXzlgvMxZSU5W00ZYBZbF8SLCL85RoX8xT0PMoE8t50PmdP7xr&X-Amz-Signature=cedfc3706ec7e1e4131aacf54e9bfbd48312fc1d710cbf4ffa53ebdb434afbb1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW5LJT5Q%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCAnux9Df3j3s%2B0ING5sD7rKZy%2BFIRHtzE1rFL5O2PUFwIhAPQq3rqSoauxKnElfUYQK94gJHz4OLY16W%2FOnzuEtRlPKv8DCGMQABoMNjM3NDIzMTgzODA1Igy%2FDs0bRoYel7PJYqEq3ANZr7QC1JilhEjX3OhZdv7padPbViJ8gZFn99P0P5f%2FTLdoa%2Fhsb1gGTL0h3dn3%2BbUNyKM91Cx0Xxo3kp7y1BXNuZZQ1L4af6jcRSmGN8QJeF7C3dK4rQDfKLAhX1Kus%2BF7wdpZGbxSaYWvlrLooJojQFcRNz%2FXUjtuqXPe07TArF7nQU2OZQWTLxxVMonbRyrpFxI%2BsOHwHoDO0KXpqK7qn%2FwAg37QN5KB5pPYwxXXlizkKSP9hJzYROlRYQDHb88sQk3HZytXj34ZKKF1ONs95r8PjmV2KEWRoUX5%2BPL8Y%2BcgacG8yXeDDD0gVe02%2FS4UTPbbskz3Ts4R9nQGrUMJNgTx8524uZXoWQd04EoF9s%2FDshFik3CmQRLpPqXK3tf5OCsMuu4zzRNKAFI%2FGQ1owUB6uuqOIHbmEpNT18%2B2aEdU905dCMoD%2F3S8oQQOyT7RgSGDBKrkj07AGmp444bKahp%2FwqAUkx513pF1JX0RS7X1bbEVzk8bZmGfQG0U5lQENed4jrDxAT5wKHu30FkHQw29eKwKrwQ76KWLNhxSZaF5yTg7Ow1B6AKmwTRy7fy58PL27cYyNd%2FTOV75m553zAipqiyR07gx8KBvo1zdj7QxFX9uGp7EGyAApjCL8%2Ba%2BBjqkAYhe1ak%2BdicYToe%2BnzRVYe1mtF0H35mme4k%2FKqOFANt5%2BIugYRqurpKFkekHKOiffUWXdIaivVR%2BE2ePe2qWQQdMtgL1i%2FeI%2BNj6LErbXneg5TXB%2FohEdQnEOjtVlLSfGPrmqXjybPl20IRvMZOgl73SmcKlnhMyhb2NEccJ5z79dTBK7FBl0MRN5tEc8KFBbFtUNfioJDCaZfjFYLHnK8IaoxUE&X-Amz-Signature=3221cb21f375c3fd8a3c7ff3c97cdea14d7c1285e5779d3744b41e5162bae413&X-Amz-SignedHeaders=host&x-id=GetObject)

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
