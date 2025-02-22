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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVOOB72%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtnS3Jraz5UpdB%2B%2B8O875U2SIr%2B%2FQBCR86orWfGViPRAiAXyZ9UApzlzFoIQ7SLM1q8C4R71YoknxAHANPVFmnc%2FCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2FGc%2BR6ujjMRcxYyKtwDtil7ma72tv40SX3GmJ8IBMcUcYkYvMZaxYwQkmyCnyyw5jcTBg6I1h5cQJ2ohtVo0x9eBHj8yRjUW1ZUFmxTkgEulEFc2%2F4NrBYR4UQkqw1uc69WiJIsFAC%2Bm9SNHommao808pH9ALhHqd1R%2FDotLD4uzQvg4LsRHV4%2B5ceIupNkEriGMvdC8qi2qKRZ10c9rBcyT2vNxUlKJcF9EoKF589O1OE31GNdS8isb8QoAT0X7b1zeOM04XdV3wSmMe0TAdl3RdotZOwMmrwSKm4l1Rj%2B%2BNOF5%2BZ22bWfMFVzTac7t8gv0%2FalKjDH%2BL07RcPpi0pvsX07mgersuJ0vy3EisWGEc4i%2B2F6xuezj4tMQyQI36cujEuoCy9nkObaKOnTDfqSOwuxCRLOdPSNWHdWTAxLnmOsGr3%2Fbn49zpZCR4MRdQ60Em3tWlx4%2BWgeWwH9DK%2B3L3Tm2q5ZEkzY1Y7EPzwjS9jOAUTSHN6HRdzXLLlpsQU1zfxE6ypzhrlVjcOVPKHK7QSvvUd%2BJlVJemvmmvzYbczoajMJzq8g%2BycfYCwRjGT9rAqTM2pPiHfgtBonDouy7oE69i5lzskMzJfe7CwlOxDDiZ%2Fl%2FZaOR%2B5rUuayulwO%2FR3ksJu4H1cwt8flvQY6pgGW9B%2FJ8%2BbykenB2FegsYrkVi5YmrKEcCnH6QvwJ0%2F%2FyiRt%2FpYRtkRN5tf35aXFo%2F1S6vopIPfzjabV7FUTcT7L9ayedXAAwRuwaB3smgNdK%2FUWWBC58SsrxUhZecW5DFoJXEMsWtp3cN1b3fFBTGYAXsQccy4g%2Bz4f9M1379DJb1BnwUZKAg24wmnuUif4OMVbVwfBUdt6Zt5qbqqN%2BF2zUjgvoWR6&X-Amz-Signature=ccafd4dd148a81fe54a1a0aa3bb42fb14e6ca76b5551eff914a9f46337eeaf91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV3IMSNG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfNThh47IR23s8%2B%2BW4uQyu9BEy%2F%2FeapZ32HJAWUdAQwQIhAKEChmNq3kKAwAkRy1vsbN2Z267%2F4p%2F4JywfMfSUWE1rKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLI1%2F7aLO0w98dDHQq3AMZo1eAVSx3UzQcOM4hGxQyil8UFuzfba5NsE62K94ockgvIqE%2Bl3QQke0MTLf%2FAPbENYQ4Gd09Z4RgRNfLhAO%2FIJN7QjZsXSCk7%2B3tJNJyVxQdVSA7AgcTbYutroQFT8lw6OS4m%2FQcu84cTTD69O%2B2wtD53aKQmjpYXaq0dqTIJw1UGlrVJpulWIv3EzPXCMtIVkM4yBfs8eEtHxhlsRT%2B%2Fd0WBSKwYFCUkDGr9xig4SOcSNplVxk2YJI4mnntfKOLjOWk9WAN5O6c7WjE3wPYjdYC1BzdC%2FJG0zG7I%2FcXxvSpC%2FfsLPfunw9VomuYDHyd3UVblzCVfqShK44O2iFoc1mgQj%2BWEA%2Fpr8CLL5HxuArMyRrgmdtATeTr952SJZBnw9aG3JBrUrauxL1OAiUF3FQFmiTBMnkPMoweOh0UgB%2BuhiLph7dDm1ctYRk%2BDJ1ziekDrPMyeLq1RpBecnubFYioxpDCmH4tttwDrX9Jp4WPwjp1HP2tHAqR0CqOWJodC6QtbFiS3akpcH4NJ3bRoP1bpDVtij%2FTcliFNsJy6AhcGUVkVRcIJ7TtKRxpwM7Ov2bPaL3Zdbh332sG6jsRpA6BDSH%2FVOC1O6Ot5gGDWoZFZDGt58FvbB%2FY7zCSx%2BW9BjqkAQbJN9c6miTRATpXxAGKw%2BC7%2BQjfMwNH42qMFayZ7pIGHWRirZjEhiakE8OXo%2BItRydUe%2FPvcDjlTBG4bonO1J%2FfyhAAmpgMUrNyMTQTMMcRHyBFTX88u6VTtdAGIy7x9sMY1t4ecOG4jbtLtzU6FmsV03zP8rjakiKFdgnBWD8Ikx4KEwy5qC431ytVa%2FJQU2cdLWHTvGG%2FZ3c6Uxcj25QysSpb&X-Amz-Signature=bdd56e56de49abd089bafcdc6d901e8118cbb719746343f668416392f664da2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
