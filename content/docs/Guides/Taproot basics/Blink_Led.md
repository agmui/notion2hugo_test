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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6N3KGJ6%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCSQJifEFvi5VrFurtr1haWFKH9YmuI71pvsU0D9xxpoQIhAK3%2BqEKujws%2FKCpAFFW8IgpWo%2F6KII3k%2FNgQdjEWnAicKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LsiQJVHqg5a0Y2Mq3APyWpDLLW1IRqW%2B5v11U6IxBQexge0aa7vtWgCAugbPYNaUQeXHQSxYWctuMqHUJxdoVSV2oNofHS0rYUz%2FU5AK%2Bt2HjA747KPdKLJ9FnGOAG4GwKF%2BBdCXScy3%2BiRi5tycgVFEZH%2BfCPgDPxjGHH5lvKJcm1FmAwN8Q3G8M3mgKaIiWtQQmbb59mPSnoMKh9zQNBnRoFP34XEYYH5bTK%2BxwBFEXLzKKgesnXaSnR7B2l8Z9TxAVNM%2FYWeCABlK7Oci%2BZrq0s4Ju7Knml7thFSRCYckCrfO1wXUWnJ%2BEVyDekbn0JooRqTPX34MP4XECyYqKpxbTeZ8oOApI1i%2FTGgDwE7IZyok5V46gUsXiL5Rekk237zy3XuN10R1rsKhkLBCL%2FGCnA7GrzLePIGXcLFogbi89DFx3Sd5hgeYWh0SaWYdebVSRod5Yw4kc2kvhWkjldZY2ucMtcD5M%2Bx9rx9SXuwacoNAT4F79XtmrtL3WDDjxGbrEnjdlSBKhVIGN%2BNE6ovqBIBukDY%2BrlsQHYheUUwD9WhndfD3oQLS%2Br7iAIg2qKUfWu%2B%2Bt8WSCwxCN7nfXfxkiT1u%2Fp8Wf%2BLnRurcofJ8SNDEuwOFkzmonA5%2FDd02bAZ0CiZ8CKYRHTCS16TABjqkAYnxxuVlLE4f0bn%2BGPVSbNka04xqUuo9C7FPthIBdPdqJCaLZYUDLlvYzV%2B0QV%2BbtKn%2BQ712SYqZNT4qWOuFzvkDuJVdDmQPDf62r64jU2CyEM4fOTscNc5y9Z3TTb8X7qHyv7ayf6Rzzu4rbzg%2B0eXJC%2B0zyCdHT9sEh2vBilANGcJck4JcwkEJUN0ulQnpyZRQ0Rrb13T3vBm1EvThr3Ewcpca&X-Amz-Signature=b875bca2275d975f825a8d9167243796668deec8f80dfdae5b8c483810b4093e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKTBYRCZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDUxW7xjEzD9fw4xsahT9O10QZ8baAVxtk9%2FHKSso1W%2BwIgRhXZZ5VV%2F%2BVkMXvVmvhnFMTXO6ezqKzD05zGOAasucEqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE75DpDF4GRMODbAvircA351FTT4Pkgie7Z47BgpHm5B%2FI9My%2FHFEUlvWsLy1QGg5cmOzmic%2B%2F4f%2BoYEVqvpwWDEhgou2Xt%2B4iMD%2FuOx%2BcKvBUmfItFZms%2B%2Bb9vwJXs3%2Bu6JCwMEHOANe8GA06pme2xaXlDmU4yxjoZE3qOArt9%2BTcBjsIDvEXNrJxtOvS47d20b%2Bi%2B1hrRkXMwygHBraqa6m1efmCzI2M%2FGLLoTaMVeEmsGh4%2BD1JLG9n6XpI%2FmEfFByQl1Zj7FQa%2FxCk8HWGHQs0SWDcs0QU2yf1qjw8kClOCMk0d86MhmPGUE1NeZAYzyuV2QO3SuZFTSed9nxdaVzhQWfNM%2FASp0mdhGdNHZg1UdEjSj7zAu9cQW5Sy1VpH8nj5BoBEL8mjFap6HKOOrC36CjJIGFhPZsLG0NOGxBIOoqtIB7FkrUrm88VTatyBdFrDCCv2eLaTcYdN%2FyEEfDqc%2BLAURdKMAt3RRl9LPbEt0M9PlGBH5MTeTIRQlaPLebeI%2Bu212hCgKWA5EQEwUPqT%2Fu22xQms1qedae4Ymqlpgcj0q1jowEbWmRSIx6%2BHOtj5AwtIuEX54bS%2FNAzYFknU3jjTnDLGSSvXsnEWqyl7U81CX%2FtcXPYV41mIRd7Dg5x8J2rFmLXJOMJ7XpMAGOqUBUVn3ZL2hpXG5xJG18kOmpO8K9TVPdNblXEK65nF8lHr%2Fd5mXS8z3NrATdV8RUzGTMl6dXj8IljbcvpelmUCa5YA%2FnCWaCpf17eGo4xFwwihO6cgtQnen5yMMmAP3fCe73Z7ybCRW3aY%2Fj7c6rRSJRg%2F5E%2B9g8hBc%2FI2iAi7AYJR%2B69UrWS3K2vG2BEYR%2BOqdDNoZbzVcVx4czzn%2Bu7SwlsFCbUS%2F&X-Amz-Signature=7f15335c898fbebaacc81b6fa32c26eae1cd93718f0f3d0fab874a6deb1346d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
