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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL66XXW5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDvp2hlD%2BZEsmHfptVCkr53Co691OejNd6G9Iu4h0%2FX1wIgPcPLB%2FRVwro3FrQbQYnQH%2BueWnFWGY8P1cJIYNbTa2Yq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDC%2BfbbEGy%2FxlMalY9ircA1aJNeCjSYWPr5ol8HgFBQ%2Fp4n2%2FNSjhuSQM99El9jOTtCATyUDGzBrocj%2FaeIJ3lCIskFzXMT3tQ5ZSzPxZPY161QB5arqTH0%2F0nQVNPUGWCpzUjTx4k%2B9%2FMpLEgiUkfI7t6XzYLmjaiIpR6jIo1JaFjBEqsYWLdN1Fszd3RMAI2%2BM17lWD1ZLwZRIRpcEDZ9COOpwPNzsekQyTl%2BDW8b1nDnh%2Bu0lT7iiMCz67anp%2FzmRBlc1KsvH%2FTeSBqcxf870fWCtJi8UwJu%2Fox8ITQWKEwE1OKzJvvkVy%2Bop2jmDC2tJnaNraIMfeKas3AliMC4Hwgqdasbjc4JMHLe4Ix6%2F8BeTFWqkL6Nun3kl3K7HLfL8br%2BczwTrFVehiEHYFn8Zxaxb%2B35KnvKT3SdQiCe%2BE5GCO8r6HhYoFTExoLh35QG7WydNCwnU1gGnPYKDleX1ywK1XOI066aQXMO0xZtlvm%2BD4sScVkmxorzGigbBZ0zRTM54NqzYzGkJ4I61yCzJVCdvyVT0AfQQNZY7wviJJVk3F6MvdEcMAI3XRX3XnSBfgKVPy%2B3w0Kfl3DqCENVSVsUUPL3zob57z2mzknAcNylScfxB3gi%2FQFe46a2qknhZ0S1ukxd7Jio4uMMvsycEGOqUBTzqsedGXsUQJHiIYwKUiAqpZ3XprwOJ6FByLjsKOzp0wiTacZjw5Lm19N8EGJYS4YqQXPHg9GAgMh47lv1Oaj2PblHTtG79H9AMZoD%2FCR3BuFyy3QdtPGrNMl0wFLVUCXW2qagmKZFOq%2BckhHLEM5fDGlYLUMoQ2iqqmIgWx99W3oRXuJomJnntYayTRg5vV%2FjC1pj%2BYb0NVjXww2gghNzD2pOVo&X-Amz-Signature=065b2f839b1123867e7442d13c29797f9fb400d0b5094c7d97f360fde0363e86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEC6HPDQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCPDLNRN04Lnl%2BpCM4nchlnteH26sUEVqoWaMLvHnz8fwIgZIPDHS%2FuvPcu5kZqCaMI8uRskTeWYf3XzyW40m7%2BLb0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGHv7MWpuWizHq%2BeIyrcAypY1I6PsBh8MAwOuktENqe%2BJ4fTAqk33UUJtVYQEx%2FvDzKEofAiSpJFBDdBrzlNozlovCE4HJkvAMU0X4H54oP0EOx6bCM%2BcgB1JZelcOwo6paM1LsjDh3MGvgeQ31c8%2BxzbxHeBkWWIw%2FiFmTAYRtqy1pe82T%2B%2FUtONiHnqSavRjrQbnUNAjqSB2Hqzu%2FjgdjA%2BOsC9qcMpeaHWFGqAfDdpfk9Y1HztngyXGTclVZCyZnYPpGvvQIlOLsQ1%2Bb9mjXCNThcvkm%2FJ70pdrW1FOlgpahbc3jm58YBR9cJUuIn2eWxw6%2BwQXz2k9VZdmJ4Ei9dSmxwUCsht9QrMgc2Q5r2Rx5jzyTARYfN%2BKII%2ByzP3aJEMm47YXcPGBGcrIWs0xLfg8ATrVsS6odWULBdaGuaoQWdbYG65bJABM0ij6%2FCoWGYblG%2B022JNB18dhPz749Txvh2sikKL7G3SxEd%2BYmjX6fgiikyez2Vmglv2ytJ%2Fe6G0puCJjuVyAixpEyG3%2FqlXfCwCx4Mo94r6q8OLVnLjNw956W%2FkY9kQtZvrBxMezqsU%2FAkOByUE1oaUT%2BxS5vvIUQmzr5iYN%2F9MbaW4yGgPp9JvYjK8vgZ5hketu3LYNZvf5qZpMLKW29qMMLsycEGOqUBvwAmA6JOUFlGI6EbhWriAqG4ZYjWBjNZAytNUFGW5sqNRZOxfLHtD1mAaEEtF0%2Fax8RLyQluMQifgNqZL%2FK84U3uqYMigoHKRbiTa10YOc%2BTgXpKmYm7ZaLLzsjtQ8QjEkXDTIpxcJEu0EG2%2FNr6Y69wDRsKIkZKqORO%2BWh%2Bz1E0IHWksN%2BqnY%2FlJ%2BwH%2FOLS%2FV18btMFJ%2BSF6Fz36FN%2BFGC2w0su&X-Amz-Signature=41a18c845a7a8cb3bc50c903f2ad07ded61ded442371038ce8405f613bad72df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
