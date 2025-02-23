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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NS3QIO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDffqOnwvq5ZDgs1vdIllCzg9PUgRd7Au6IQTsRHW3lxgIgK3b2RnHXsnRwLtOMTzMCdRWu99htv4OfIVxaSAkrSPMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDQb2Vd7YRabOzWTQCrcA6gEzJ1fuwE2vcvZ%2BH2ndOTdVh9v0961anipWd%2FkozX3zBUl6Lnn%2BYAv%2Bv9ALON%2BKAuanMczrnicPX4fXDI8xAlcjiZ%2BipbSXghzt%2FBqFsz22r%2FEh308d74am0%2BOg0%2BJQrsQd8%2Bi93utVtPVoUnqc1Zdd5FKluXeS4I6crYpXmhKJZ%2BUlxU8y3Z2Msz2SyU2I6zIF6EdlB19JjwZUZljQxhRMKJc5PIqHJj8oLVyJe9dppIatKFq1dIi%2BVrjbzTmQXT0nB0TcBgT9tCBxOAvSHRGSHxxF6fgxgaQnmI90HeYkM2YrUBASKPmjUdahOtiZqzK7fpC5RQS%2F6tjqsZW5JXCzKb5H6yu0Bxz45KOd9dNFvsMA1%2FBuptad3OB49PxpkBD28jVxoJuGbUVvCKo71JqweESyoJ5EuucT9%2Fae8r3WJFr9pL0ww6i9%2FzMjmmGTqzVz0ewjKxyZWqPR2qdJ2jo2lsuBLm7JldqmegXNti7q9KpkPTwFRM2nGoTYTLf4LoKDnPJruEd4FWeHJbqIDtS60Xdd%2BCZ1bIbauNsGp9%2FvU0ae6dVGfEusKXThq9wIIJS4IhZW4AIJiAYy7INSEiGn0DecpWKq79MJEb%2Fliav%2FAdPztm0WOzQqr1GMIuQ7L0GOqUBRk6fgCM%2F2xf2hs%2BDkUR74SHBk9Rb%2BK8zi57BFczrEEP39y3UYfV%2FPDOcQYiAAhsy3xv9uMFUmXr5sXJuQPkLgl7Rt17WnNBAGPq2DwPE7oF04Z7Q%2FIa7K10M1Bds7B3%2FVZ85HrVIuJHBvxziomaOQrdXsBb5o5wsxt9LbZPsfxlWlstugVzz4Rq%2BYujPYg%2FqqYCFmluhpi%2BAJqh7pEOWIrErh6Zp&X-Amz-Signature=c3a094d0f871df14e42bbf943be76ff58ce062be3cc9b866e4eda932c63bccc6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PTS6FZA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjYjuHzw%2BEBtAcPZElvKAdWeXNXUIv%2FGZEiMtjui3NtAiAuhUIKiVQAmzKVNgqO8o6aLhPheDdNklqFb3zs%2F1SPXir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMbqDPiKqtODz3leEjKtwD7rIjaNPuNfpZ1jLvLH4cA4mbH%2B2lmYWaswdujU%2FwAD95Quwney%2BQ7fVEAVUHylO0ZRj6z2I0DikCFH1GlNNiEbFaHnwsiAxLvrouMfspc6Knm5uoe%2Fmu0hgPGxH0PAG6QbGMHi%2B4k19HzEPwiAnzKdVKnInIS6v%2FAsPD5Q4k%2FRGKGxULDtpbz0h5UlNW%2B1H6OCk%2FXJgmiXIbkE05WDGySkCodttQ48OSY5Gl21yK3eib119jF2%2Fy91gOUZ9gdVeXraLz0Y0z6U3qB3pwmMvBIY5czRrVizoCtnDR%2BzWjS9jck57MgMm0MAl4pshuNRnUWeaj%2BkBtSh3dAZS75%2B0uOH14JFcnAxmTL5E2cuwtcic2FVzoW49J%2BD4fZ3prgS%2FtHE3%2B%2BqaPHLnbUQC%2BwsS9UgpChgBSZ3kr0Mc%2BxzSHZo63DFyMxSEpbi%2BllTQlKi%2B5MrnVyWPcFZoJiY1C07h7ISKaYzCbeTYeG8V%2FBLS33o0PFK9X2E4eoxYJzf6dAJzE5hIvQV3qRxlRdBFvLMKlygYM8vs1cusyAiUEiEThPJkiyWyD3qfuKWp4uH2BKhVwnvm42sPmI%2FgfNgtEQNKZ6lzRT2wA3a1lOeTVHkQKwCqnPDcaUE4DpQwJABsw8urrvQY6pgHKx8tVg8tgJTz5EAWfnxSAJE53jTRniOdpMLz3oYZX1JBfmoxiwJTwVmO%2FbcQYD%2FpZLCx2jVIO7v4svbeCyOKcSb3uUdkK6GAolhFe0YNotm0w7eBgEBUxT0Tpi8Q5%2F0ur2lcaDO4dbUNk5Ku1KxJbowz757baBb9tUzr2LvTELgLFNbGNJr92Z5ZdghFcxenwjNmqXeE4vy4wUxzzBio8xFJMvWz4&X-Amz-Signature=98072ab9f859693bebef06b26e31ddcbaf90a7e157ec0e04bf05fdfa43e9a67b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
