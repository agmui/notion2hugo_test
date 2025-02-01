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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJTKHLA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtoMKeCc7r9bvABFjCv5WLm%2FaQNe7FAvbqOxI%2FwYSr8AiEAtHTx6X5IbyCXTBaCp2xQdXb3q4Z%2FyHsYAdOc%2BC4gvUQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5Yf3hfHivC%2FAXGHSrcA42hXEttj1A9Ik6KbRvGlm%2BDPtVgoEr0sIk3F%2F5CzCJ1wnf%2F2IxyxlASE90QTfgw1u%2BkUKoNrxSv0wG0mR0IczZh7djo391QEuc%2F7%2BGliKyngE323uR8MlF0Q8u%2Bb3c%2FukgXXk6o8GKtFv06REaor35JecvjWpZPljX7w%2FEqg%2FpJXOflU%2FiFjaTHAewGm6Shsn8wWJZGzOMWrI08PT%2FGMMDqi9uRTFNvT%2FSCNXpGI2jJGcxl4mOHflxgP7kKjGV2CODeL5aVpAit25YqwuRBHlUYWyE73biQ1zsvi%2Bv2b1B9UOF8N2NTm03zCTQH1NWaLGVht07f7UKSPVL836W65TaG7B%2BeiNS2wkbY67MPH6NDvN1ub0rXmB7rB3PtKOnRnOXIaWrNB28EnHsgRZSEX444iVMvQRgFCgdgdk8ftqfNYTZV2mz8zmXCCUAbZgF%2B%2FWUdsivt1aGdcxjKfPVWfXGW%2FKhqRKetyBcnQ41LlGLxDAxtbjJ9hT9QqQ4GE96DPiuVO6lNFJGIqdT5teqomY9CNFCWb6N9M2SkDj2qaOAIhhcgmFcMMlzgBPxOsI5N%2BYHmm2%2B5JFOMIVslV7CdXXp6UzRxIBm7kUZwsg%2FBsuYRqMFQQK%2Fj7EopcUbcMOal97wGOqUBVd7dsGIy%2BQa%2FBnjhq7RdR8XpDE%2BrqiL9FEgnM5ali1n3m0fQvIlhZC24la19HvI%2FTKoOAN%2F4BVbVwgpPmlFCLSPrb1tZTpHCrjuhUZzQ2Cs9O5icVrBhprqFqwdKDB0Lul7i8aIq8P%2BVWjSSUFZYFpth67JIV3DFpAhn0%2BXh3rw08SfkUbkXbnZbLn3woy3RAaw38kdoO7fFRUwVkq5VASe8L%2B6v&X-Amz-Signature=f85d32728eab5780933fae7f48aad5111802d9c27d37af91240d745bdb9baa15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345ZJP4O%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAVmPH5LKOT7UJbTtCrZUfrRREKeZhA9RjMhZpLkkUrwIgfXSkhO9PDilnq6g874FU787aQtxoeQ9MIX5oPaLCO4kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2B8vVbJ7LvaQrt5tCrcA%2FFXToxkPSlsL0XbRHMzvPdE9OueknM8mCT8qwgEgQYCnYMKjV%2FFCldSY4aOCoOs%2BVYSjGC1z4BmugfRTzs6r8Sb7D6mv0BwLOiJVhjWJnpl6w5cH9Yuu9K2uvhexaia11F9mSosyN6Sxp4R1PyzP4mTAGCJjLBa%2Bu6oEqe9fjgisGN5NaYb4yr7PUNHpmbbwKpwCHQfsgIn%2FkXOYbNG9BbQWdTqIyKqxHe%2BMuLUnTPdu%2B4MMwUpl%2FFC3aWDearUHzzf78sF5I8cNPtorq34Jy%2BSZ5TOPA4WZMkHst4SW3nSSSyVe7uigUxanB7FykQkhaG8zap9rCZAQhOhFwQJnNO%2Fg0zpH%2F4tvQ4LZx6fbJe7ff3vZRxWdZLSnatMO%2FJQp4GxSdzABQslQDHGFAicBYpQng6%2F7mk9oU1ZobLvZyQrUH0TC0KgfoE23xfxtCLNd79sCfEHdi3iJIECZunAW9WztAAqnr266z%2BGEqoK0as8exYMEB1vBFzq%2FhXH2ceGkYYetfv%2Bs5NJHMMuUWKIdIw17AAAqlA3yGpFB%2FGwskrPBNhCZoEqg7Zb620N7irnrWOpHz%2FJ5mdjjm3iXA3274b38NQFLWqj70MAo3FnqvBLqIqsRQKhasrE410YMOWl97wGOqUBe1UbUigPr%2FIkv5wSzMl23xb30OKkvUsNmARb4SHEOF33QzlbyasW%2BhJVHxv4rabFWcW0W63EBdLPuFA74N8piarjhqOJPPjQKCrfcew%2B6aZ3owNlUk30e9CpjdkG08dHt%2BgiDMHJy6szrE%2B9EAOf0Y249a%2BqcRw5soQ3k7mwNjommrRoiY3UxwDuJ%2B6aW53R%2BjkQ1f5IljbgyFEuzHXHpHeba2Xb&X-Amz-Signature=2d3ae3d082a2aeff1938fa19b0ca5366057af20807ccfa92064e855d1d57404a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
