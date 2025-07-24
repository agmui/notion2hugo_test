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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIB56U4O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCoqCYQTPHB%2F%2BKMK84hbIPetllzNoFeP8X3g3UhmVx0GgIhAKdtK5Hq82MseqDtcOKz4741oNAHaQLOq%2FQ3Na17JXBHKv8DCDIQABoMNjM3NDIzMTgzODA1IgywJO3izfEfVXMWyhIq3ANTIec2jNEI%2FgCpVZD3YHO2PBJN%2F5B5TiI5aPqRJDMlk%2BU1q1wReMSPzQBBiwYGES%2FLO6EQnbN5b%2BeHhKWg5YIo4SpeeAwhdUKpS6BcBKhFZZY1WbdTrPizpzfw2TLx%2F%2B4a64tCRjh93iIa9uH1LII3y2C62Q9ipKLrJMk8QbMrsCqtRLxda6HGq1PL9GTfFpSUKkTb65AZLY32Oqg%2B5X40hbC%2FCfMWLfXJJpG8ySlHLlNCT%2FwdwHGWE39q5jEv4iRhu2EliotmgpND5rGyCscelEHgBnsukXcqeXdw%2Bm6sE2O6dchV2Z7pDvcFEkjLLXmeftUPv9d2X3A%2FGWra%2BFYmKOqgEHov39WfDS12UAQIeaH6msdsPK4qIAvIHFNJxl5BeeUDdiDOVkxc%2BeC6qFMkNMIm3gL8xN3whLn15iC0isa0YZYoPvD5gmZoGbml9Qw70R1yprKwCH51tsmdzfhQis7T2gbEjlNo5bep0v%2FSw9HrzYOk1uhghYQG%2F61dtzr3yBjHzIv9eiaMzr1zGWaqfzhAXrPCO6psfMlFWEN7jW%2FXJwmJdZg%2B5r2nTiaZy2OiqtkxCyuYmoQjPdR08IDOjo%2F6Sjy07GZKdWLxSC4C%2FvBszdt%2BV2XvlBuAnDCn1InEBjqkATZevEGdYhOvT%2B%2FVXXWDGv8kr%2FF6B4X8gvddZyLV0RStAT0Ck2rvUuMb71tv2e0NIGrsXiLUTtjBxzYARiJByYNHA0Nnb09pApMEwHIAs6tjSIxHBRoTHetbkl%2Bv0fxwvdEiZQRYR5m44G66qQVqxXX8owCkRkNZx7C5%2B1ZcMxSwd0c4m%2Fb%2FAgeQWcWWUogSb9Tvp5lOJa7dyiOVL7b8aDoIKzUt&X-Amz-Signature=3651c9318e981a92fcd55b8893498c4b5f1ce91218e8e4ccccac96c6ce6e133c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5LBYA5H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEJDSrH%2FYcqgMuYpII8QZnbztWus9qUhOgCdmZKGzTujAiB9dqRu7%2Bqn6h%2FcWjyElOKaIKw%2FWslGqQxoTX9y8cfSjSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMFsEpkNxYUml50xZfKtwDKp0SvEPLS6JQ9%2BcMpyu9fOiCfmn%2BmFhRelDlw30i0SK1pLV2A91Oo61ncu97qlg4EKZlgLAFNys%2By5IM4aTq66Q7o6kTWuEbJDwn%2B%2FFhHeldNp7mnf4rDGva3QflLHUcta0DSNLGYsrsw4%2B45AZ4MlEZViYfAFWeAvjkYoKsElPLuRhoWSg69bO%2F2IO6uVcLZFQ4aLi%2FV6K3wffcVC2yBmiF2wGc452SRjJGW0Jjuo7CsW0We2oAm6trd6imxA6SxaZV7eZK4bDH7IHyjcpBauvJeTQ7KivwJDbk1MWwaHLfnBNeKxVttp8Omhc2plG3sDDgbhdqMVmdD2EyIbMogtngtkkK75nPL9gp2WaBq6T8fuxLmojNobMhpBgNPHC7bkSsgS5SDuj7g8uCnXSSBhhbY1TILZspgm2fTSd1iowkkeMZvH04xQnT5firK687V134OVQsRLGuINwb0v0cc4qUUQOhhPb%2Bsx4Q7hiW0XD%2FLrczGsb3PvkzHP%2BqgvGmlRDftrL9GWLaGP0aGn2SDFzRTWFaDbONQd06GFjfiawiO622EofQRvZdzedbdCoWyBYNgEGVsYLg4bjvY2KweqKcoyPt1JEYkEkOMJhv40944T0vQLVvzHnTW14w5tOJxAY6pgEREp4Q2YPXXvh6V7tmD%2BAY9k5fYJsML8hqXestZfs2pxZQBXdL%2BrvZmShPzy2hSkXHOgPoULkR6jars0XUNCTf123T9n6SUkIlwplth%2BDEKkFBxzvCdmokFC3TgpXt5j1T57wO2Cd%2BvOKR5gJWSHQpXWc4MHH50bNswqlHB2PMuubck%2Fu%2BQHder6EhQ6IdfPSo0%2FptDoAWU0AkBhVLtA93bF0WFVfd&X-Amz-Signature=d947bf4281dc5eda840e3cb5688363c18fc5fa7914c4fcade7a64efaa837bec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
