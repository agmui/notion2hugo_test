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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZKSFAT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD8PWICVW8kxUR9%2B4A0fTQwpg4Nt5K1mbsPcDKEl9V0xgIhAJajIU8BeTKEKH1azBAh9aEmDFUnXZqbzjhQKSkAn7zwKv8DCFwQABoMNjM3NDIzMTgzODA1Igy%2FhkJgmDJ5Hbzll%2F8q3APL8i0cfQmbLMGUreiEq7Yl0rWtH6Yhnv4nVvevcWa1NRVMNdEKFIOdgraifK9c%2FcWLKZnlD%2B2LqZyPd1xgHOJNcqw5R%2Bbl4F4q8DN276TzHllFBmIpVQx1%2F%2FP5XkBTiiyC%2FrTQ%2Bwi8l4GRHfwfjAi3nZ0hjUHp6A%2B66nw8G0M56rVAoHORhcfwiog0ALKTWmMLQlWsr7Ghtx9D%2B7yOr8Kd0IE4IGLlgZ4QrsBKQTBXoWWq1p5BOiExXNSacRlYgsI%2BHNCzbm3V7z0T5b9Wl8nzSPwBrWIi8AnzrSUSpThmkwLT9PBHe8%2B2G8lwUmgIBkZ%2F2tptzHQW0eGJjATR8vye3AGxqzenWhXWx9kwpPStJTxuvWm3QmUD4BT6cwsJR5zSwbTcotR6xIqm%2BJLqTikiqO%2BrmCACJcVCZrAm7LvjBcjpTzHe0VWuCFPV%2FSMl%2BSjF8IT%2F0EP0AyETK2xcX05T%2FTscIC272Fe1%2B1DmNTOuDSO1ZiZ6fapw7svPrJiIijt4vAqMmSEnQ%2FVYS7tAqwZVIjclo2aaRUY4%2FRmcsfIKQOu7kEhdhMZbZeZsbucbOjHGp%2FNgxwuFqY6Untzb2gbYbmL1uRf4P%2F0uJouXGU6NiAF6MjBLDg%2BbfBAFXDC%2B47%2FCBjqkAWFgJNMIRmp7LyLz%2FJQFzKYOkqK%2FNFOGg8OSftjFFZZSOtOXGh3PC3JBthcXB0p3XVpz1FMvnQvK7ucySkRWEhqzKP7yBXLlKZ3%2BB17KkfU7Sx5BH1ywycmk7KAaR6Ka8xOsV7%2Fm%2BVOs5d7afcG2PRjHMTEGUCm3OpDyH%2FYO9AEZ6cEjTi5fnYqBROvicE7Wd8oqxxedQJgfzNssdcZkDMx8G1aS&X-Amz-Signature=941f61524905e5508777324c3c5cdc777cc728947ff687d7746f07629d12ecef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELVGQD4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3OiiqtpdQZfSkY%2BiP8TCThMF2MzbVm%2F4Tf74tpzEwwAIhAP3g4lh7%2BhdiPCVapUOsO%2BtFDhOPhaviTEyVxDkjsMUrKv8DCFwQABoMNjM3NDIzMTgzODA1IgzmgP%2Byn8Qwzgh7kMwq3AMoVQ3fmL9kAMDEZznNjWydq4BVTNQtehvacEU6E29%2BNVlMaBsSnTgk1keMR3ciGZ8Jqmal8TnkLZpus%2Fz5btvE0fjiWmwvS7RvkhUGtaLvBJ5MQtCMGsLBypbeaIH63OqIYL3xXhKE3WNLBrubgOPLD4dPK9o%2FKUTLDx5vqEe21fn6pvGZSTp72s5PJvf9gEmzjvBUR7tibwK4LKTcdu0wiYP5ruG9Eh3URwRMAi0RHFUDPDvwjQxkWMICpUsgv%2BUbGGmB%2F4Hf99sWTmjo%2FUhTfx2BiqTRK67UzaDw1Brzzefa2kUax0Oxi7UIqn0%2BI2JUbE7oRWDepU%2BHivtz8ko4%2F907h7sXKQPGjuu65%2FG5q0%2Fj4fWS%2FzhukzlNETvTC0QnO1jZwlnEuhNuV%2FgZfGFkF6giTHqoRq0G8u%2BSzBuTEfqyGBgGRPqypZEpvcRFewdL5M%2FVkVANSijlXNrYLpY7RPU8pwV5ALVtJQbjjhv5QuAoAtEOxlYPf2PB1kK7yMuON6Xv13EeAIKUzTc5%2BRUStsnDYN%2FZBkTaYTwBakLnaxGjDo70sQqbn3531qEui6NIgVd5fBhs0n%2Fs14evYkIyBaskgEnDpElijsRZdmN%2FNSJUsXweto3b8kUB8jCy5L%2FCBjqkAQLZw1Wyz8v9lfr6QTm%2BsyQRKg5ufEDsrpN9RNAtyLQGzg7yl2PrjQz2Z3bSn9H6ZxbzpIBrzz%2FZt9FROHbTcBjokBedRAmMrR%2B63xrZZF40lMYMCMoSrVZI0SKkULO1ktRBNYKS6zIaqhGLjfz7jotrfPF2lQ6AkF70gNQQ%2F5ayWS4sEGeJK%2FO7ibqKSFUxK3G87%2FvyWeVXF1bFPbxCOSGROXkF&X-Amz-Signature=68aa17e2144149729c10ea44f0b782b9047fda8c912ce220776872d70f39cbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
