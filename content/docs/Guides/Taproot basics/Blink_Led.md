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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MQ3ECBJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDUgwofatk1BsCM7911fkJ6esdKKCYAaIT8EOjWrLpKSQIhAL8CBE0kzWDRraA2CvS4PzL%2BvnTy7VbVZBUQ2IK3tN2ZKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRyjvXWh99My5oIAoq3AP0Zlk6Izpi78L%2F4obdMFQrc1XLf1NiyxI8hyraP2gLMk8JeRwegdyUI5chbJIXrkuP05%2BfPVsrw8jQNV3clau%2BOf939Ee0d7SGcSnZm2znzTg50AbdJisdoLad%2BGfvOYKq5o8Wwf77tivBksEzsAUHPJG%2BEQ3M36tQN4K1NPi1buGKn%2BCJPTTH7v2IcwHI2t6mHqvics922QOg4TE0DRtkRx%2FnYEg0zUfCDrAFE01gcl8BYzR4INpRGdLKaQ%2BE3Lw6w36nkzK6W9QxGoVzN5Gl8SM7MfZHUc4eNfHRT%2BXSMRQPkZjZLIKvue5ARiVZdsQpp2pQu3GFoynTvjZ%2BXsJ5vEBcSwvtU7jJhGcVa5NRifGz5JXDwqbF%2F0Gz%2FXeEiPMz4K%2F45KPIF8ZuOk7eMsBCkSWd%2Bo9OGydDbAi8wDuNljEJEdATyMFLBE5bx1%2BAtOcjnFJg%2BEs00bj%2FIIY54%2B%2BfkeWjGVtmVK7ROEJlle1rXcIrR1kmRbGAknje%2BdAbeWsDmqm8IOHai1kCFayasj3yfMHekIZfCegLJYb%2FdB1wa%2BeO4pY5H8p5LZixxSW6UzbmY03SiaD0Dw%2BtYMpyuVG03NiqkPODg6Tb3ergdLW22TAqilAPLCkU3GR%2FljDAqbq%2BBjqkAVhomEfpMT2ErbqO7VA1m9uTykHBmhqPs8Nv%2B3Dsq05S1eHmTsiqdY2nQfXE8BqF8FL79MhWvGTq%2FOKiyU%2Bl1Tykgi6y4gVh2EYeJii8ODETLOPhW4N%2B5RlMFXNLQrqH4gHHsOmPQPGeH1r0EYZ9OeRg3LWF0gWBVR2gECMsUOFy1ebrbfX9RtGhVQ2T0%2BCZ4ussOnYvznhUxr3rXbW2dlVTA7xn&X-Amz-Signature=4f81e8b28a488dbb93a909036e45e62d96d9440b1435e031dfc34ba67e41b4f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RYTHMA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCYbnoLMD%2Fut0DvmB%2BdFgiySgGesFzuObFpdKkOLk19xgIgJV6uRsN1dGksAOb6C0DqauUsLF3LtUVUQ%2B4AfJcoHIIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FRKymmQ8%2BjP0CbpSrcA5TTUAxY1fwbIVhm%2FUlyeloH%2BbLtlHx3%2BbVct%2FHAJhRx1vLwO%2BWAPNUBrNUzyzN15368z4%2FKs7wwcTzHXijW2fOTnDLn0XXr0LghuRAINsL13tw%2BlRg2iwvYqLS3KqEqMbQILu%2B4Onbx2tce3GKZv4JcBauE4pKmNuC4HAhP8OfsA8F%2FNHIl%2F%2BeioogFf%2Fk2POt5YuNIfVL7i%2ByO5ylD6Qex56Exd6u7V1RbGbVe7ju90DjJKlU4TyANe2FNdRnJc60R%2BsNPZcTz3ylhOVyDoc4UQRANnPiCmV3%2BkxMSRHVszGhQt3AL0MYjRKts28M9448VNcUOg20C9rDlb7%2BRKul8F5xkks9d38FDvYe4reKyUIQVafeBwlyta50mu8zelEGNOsxujW3NlWnJOzE10IOaIuaWvn2i4VmqnN6SOxYK1dOYsECHNSu7eRVK%2FLLAVF%2B%2BtVkrPk%2F1Q533RRQwt0LwIvLIaPVU2rgVGWbMrFT6c8TeFjy1%2FMQzffeyF%2FDfpHq1hwF3zpDfOMUmaEKWkowoTRm1yso9N5%2F44tL1rElSHKlVV%2BPx2%2BfBsC%2BGo6O6fONhR0KQzTiHHLxRy8bAaEulL2XaEHKbSqeDhWL8gCn9juUoMcY2VXYxTwV%2BMMOpur4GOqUBP0pFloGnca6I2fBnyIHNXCHGMUzxsh1lI%2B2pt15wCrGNeAPaIjRdn2Mrvx9x1CB8tfyXt7FU2DU6ksztm0aJjsSXjzkVtbbw304Ullb0O6RlCtvjEoZwrH5WHmxxDQqPH89gtWyVC9vW0p5mAE%2BVoSvphLHIN%2FGTLTJkOG%2FdizscyN5csRhqbgnTsVC750BveJLhSW4t4BzphYJ4lJxvs7p41Or0&X-Amz-Signature=b047c7f474ee522640eebc2a5d463a344f002a5c4a3ff8164148fb17ecfe41e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
