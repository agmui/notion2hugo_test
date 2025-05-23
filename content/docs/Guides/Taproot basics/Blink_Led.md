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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEBRSVXT%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEbeMfMzlt9gQ5s4o1Ftuv%2F3kC8HbUJabVA9v42ybbJFAiEAtNxrZyQxEtxOLXoHo61VxUI2GJh0M6Ej7hQ1dB9IJU4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BVlf39OPCe74CouyrcA3f39M4av9%2FJeUJlNc1J5JQ2E5YVUaanUtoJKKbwgrb8Wlx2Xx4Td3vJ2eWzvxr9RDgztOEh6phIUdKbb9cBs5qIMjyXvG4BqB6VZtlyutMPDDY6J6lcNyclVzIVe0slAPq4Nt0zDGJL%2FGTISinKdzPYVPXvAPc%2FeIOCjZSgzbsLNzLHZk23%2ByWgaPR1ND22E9vyIssHs1R88Xz5AGN5fuIuVJ3raXzGQ1BsKdJCZAc1nsL4vJKv5IHoex7Bvqa4j5k9sncEpgAs4Osj3tt2%2Fk6o6FskGR8ubgtkAo4Rf%2BKOtCLwClqW7IPQk4cw2FD2y6hr6qI%2FQ58dINU1HfxC0q9zOg1UTRMLAcDfYm%2BFqXvlX3LbXy5BJPRng1exOmXG2S4kLS2bEm8C0okGJNU1g8M%2FKU%2Fliq%2F9iddzFjFX%2B8RSnMaAbslt492ETUpAV9jkQ%2B5%2Fal%2B2Oa1gEXTMKxEUX18l7t44cqBzbVTvpEyY9EOHHgfu%2FyYiBrbObXJM49MQfpZX3GpTZU0TeYheXQN8DWrjm4uyDbyqQM4xPeKt0vR7uym9jAmRYoQCANHQYN5Uw1sfqBs%2Fn4LoecPClTRGSs%2BWterAUsZOa4fU6wJl5y3qEZKlXimNnVuw8Cn1MO%2B9wsEGOqUBIwT2p3CzS9ct7AkxPGVdbdxD9El1jTWmrp8Aq8%2Ba4KV5IU%2FVQsKrx3hK%2FTSw1h6J5CRPWeRlk%2FcpaTi%2BWN6TeeoMWfkI%2B5nk7ACoSnZ3k7LNNoPjN%2FSs2gumnu3hY%2FJKRcVCt4sHglgxxEPdwDoDumBtVswY1c0pFPPLRrJFhAiQh00PEh7GtbTc8toS9A3IyY0gvV1o3vXp8mLZMnBptxw74Og6&X-Amz-Signature=a44f0bdad6185390b36fbcc13071525db2db6b52b0cf100e68dbd2e4f91b0004&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIDNXLV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDEbx7kCeRbla6Ys7HiVnVpECmabNsFPcFudxZYEzZMJAiAsisYCKNt1PuIxzCNYkBIalPuUBAIV%2F5qHnMEUzb0xNSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM64aNqeMqwiRXl4fTKtwDVReXapDEPnV%2BaR8EOx2wVP3YXTv7vcwwgxbqpAwWPdsY2Tzt2M9zGAdaiIFcfdIs39zuslcU1946%2FpGM69s5%2B1QZMCELlOjT0r9mE8af7aLrNs8dKUiJ2D8Hy5OyW3zd7woiAUoeBTz5%2B1Xn%2FGJHKzuiUVVf782J28tpRZvIrbt08F0Xdn0mz%2BCcykQMcbQKKexlgHYedIak2MjEDjN%2F4ky9jfD1mT%2BWK9%2BZ6v5pjg0OwWBFmRzI5aPNYqvEnIoA85shKhHrz3BbfaXv915ePc%2FD95bH2v%2F8p5qgFImk1jv2sILgJhoF5bcD9U9vntQFB8I1r%2FtNuv0LV%2ByAVbZOk3B1p1nXwmeD4k54ZFZEXPOstgMUs%2FtqiS%2B6OiiZ47rW4tiFIrl6Ag6bP903pGsv6abadXCUacNxBC27f38jkl0h%2BXD51tJW3Laa%2F1Qo8YhH4VKUuO9WK4zNWWHrmBe3wjnLYZDDgqCmOTx4fh40qLgerxDpmtHhgHH4%2BJ%2FIruoEmp8xOksLyF2dByBhON2ePV3bfuOd9a6LiS6O6vFMJ7VL%2FOyjus7pZCoq2%2FBAT8pTeg2VFIO725WR%2BkYPiY1HgjqjTsw%2F%2Bzx4PsS%2Fg7rOEKq%2BXW%2BIEiKavYnytzcwoL7CwQY6pgHyhmOYHw3Rn3eLoDybXaJ%2BCYo28KgtDvGYWYeoiXomFcdUa8SFQKiYbfOAstKqmFWqeUIehR0eiDlikmv9weSg2O%2BazAenGsh%2FvjKuTVdc89xCVdK5gov7Pf7mLmEePAzd1tBZux0oUD91MgFrQ6Ih%2BakY%2Br6MGjt2w490MKqRYtJkk%2FnkCJAdISr0JsFOyAy33JDtuM78uH5014Q4BjuZoZqyyGZU&X-Amz-Signature=3d961dde5c95de05a2a06e9617992c827e52c11f2595a080f283baf291db87c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
