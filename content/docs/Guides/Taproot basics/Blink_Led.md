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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPOI34XH%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQC3bKgVoHbkfVN0%2FgSyPCd9GXz00GXT1ByUzRenbUAVcwIhAOey0p%2F57m4Mx2SabgbaahoMfQaNja02tWcJreC9PEzcKv8DCEYQABoMNjM3NDIzMTgzODA1Igxs05k6ir%2FbUWu1NIoq3AOXBQfrfVS5aral8rA4lQbp%2B4qsGb0NZgLCO0HBA4TWgRfMxVl7p39meUb3Zpyn%2BBI4WWQlMCPAtQpEzn0YGeJpARemsJb04aq5NQBhMgTrV1a%2FA%2B9pUNGjf%2FCN7v62Ktj53s%2BRbwo88jD7yACxhzvrcFOyUI15KG%2F8u6CoC5TrJGwsLSPZOXL9CZbhezvYMYzWGXIHoEZGTQca9ewwRaf2STUsWQ%2FSbe6E7zGrrkBkGagpvkk%2FbC9Z%2BjkdHgWSFCOKJaBJk8rKGl30c9qWO22evyKWn4K5QS69riWlC6tsYy3wZMNLnkELN6oPbXFn6gSna6qDE3%2BB6aYxvUlJ0WvVGFn%2F6fjoo89U%2FWrWiVqLfr8kzXtXW%2FAQnCzRKhVITuW%2B1ZJPjz0uTKwIgen1P%2BKMikRCIXRHTgnEb3qeavAB2Wd2NAQf22rM10SYEAPJWytKxTd0%2Fo55Cc9Kd9K4rwcZiGC1ejATonZsmYYxwDicCvn2vkMS2wh2zH%2BDcfiMH6gBlVkV32bzucFeORqVZfFHOHHIGLWPJQK9biPHQ6NA53RkAD%2Fr95WdMjco3ckYQLeL7%2BgkaIAQtz0VOFCDzP%2BgO1jkukuUUYvdV0rSUwci0j0HXkZi4iEg0mNghDC57u%2FCBjqkAQq%2BqhF14nwbxTujoDSL8WbQKst8zNSVNgnjnUGGY%2Bsp5jvMezAje5scG2U8f1B%2BZnC%2Bk%2B6AQ68byKiIwlSKwCGFBFN%2FYAxnY10d1O5f4E0cubYVIKaK43D0%2FyDGE1BqsYlRw%2F6AaHIjRALb32TrxSpnuHF6suBoQ6GiZKyKg1vW5dahaykW6Enrx4S4GzbJ%2FQHYdvOucw%2B2gLOtQQx1LJm7fXLN&X-Amz-Signature=a0216b359726bf7eac6bf9e47e4108931e1ff686e67021b231736b663c42dce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCOPZ7SC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCy6Oq9KfsCEaEXcRNvWZxzhfEMUtFNK6Sl4PcBejWcPwIgQEm9FDLMOhKdGd4Bs%2BThrRd66uInYD%2B%2BwyYMtgxY7KIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJCuNsSIHKxVO1SekSrcA6X6G97VXTRd4feSY9FE2LI8CXo59%2Bj23TkuVYwmueBRqBMEWaXm8IaJ3ogkcy54RE%2FL5fmjvzLgG4XCgsyeKCMBhMrV5ec4qU%2FCVzuF57st3fmZ1qRSa%2FoTePYXW%2Bf4TuuwZ8jZolyQzJlECCq89G4IERAbLyyHYV5yulQdoTHan%2F73Epj2KZKeiSJBMPPJqufeB4b0kzi3NuleYkGzsH6c7hsyWqWW5SYajlbnrPZEa%2FokqvXeE7rFX9EODeHRfU1yBpCI%2FD5pEBsi4XTEU1rUd0FL081WM0tZj%2BJS7lEVlXaLdjXNNtQdrtcPMztXTQ8tepp0ATaBVmYZquhINxZeRFho6UNDbHBFKwK3D3kCeBQWHxGpoV2r8czYEihYUnRJRPnOz7m%2BuXoWarP2BgRcOo7r94geEm0H1iK%2F7F%2BaS4ZLpBT3I%2Bvn7qF0GLcCHisaOqncsPIZISSIAfLOBHkGBsMiKi8Qow3MnP8Kvty9h5wroQCV8dCcaUOx9FZD8JUXfLAiLNa9jlgvN2eM%2Bnvqe%2F4PC6DosbXANvoVIci2vM6MYswnr9Bdw%2Bo506t6vqEW7mfJy8HpLUj8z5Gw2LtFXJE4EA72DYF1dQk3gdpnbXIlkYl5uHNBEA4ZMK7v78IGOqUBH1pK6K6GzXr%2BxqEzdhlxoVU3anyPqCMysDLM6wPOqJp4VSkkb9JGMAMVFf8mwSoVaOl5%2BPIQf1uCg6SjTvEqINbFT7ho5ysp5kncUbUMHCmXiUVj5bKpvDiMjk4VXMIfMa4FOE5NAvVM9yK5SeLd%2Bn8dT4V%2BslnU1SEwJZkNbUNv%2BCtD0ItugzIOceVu9UqowN2Vwv61DDuQqmPOBXcWQHNTy7QU&X-Amz-Signature=6292f041bd8c78b0e4ba42d2beacb0a25d30bed12b2546dd6b6ff07cb9f9ecb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
