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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMTXZWUB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQC2fsEPsHIrBQgpXAiPwVKNBwvBG%2BTAtND5nGutc2TS%2BAIgeXDWwkfvUArNh5%2BSICptSq0rl3oD7pH%2BTlwDOYgZjqcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXfY2q8kciwtyrFACrcA9RWza8YjxHHU96IVc0%2F8er%2FMz5ED%2BCRhS0mNCmapYBGGKDi6g4q2k4tw6jkruztVjOnrPos6PZmfdQXBWYAEA8uCanq9IH%2FOfqBVO5Xf7YLsUMQSkcjzGrewgggEddWl0nBMX2KsOJioRzwZEhNCAnWEPIeODYzR3Q54%2FLvuOXH9s1AZSY2lyb0y092ZjdoZ7514LeRIpYGRLmyrTuYqoZGY8yZWGSMddLOcP2eq64E3gu6Fv7mfvhiUsMtU%2FgltsQhB0INKNAuWA8wPZNJ%2FUXKuQFFJ36wLJyebUZu5IsoHAEmejXAsE%2BvN%2FaGn%2F16Q9UHF9pWAlbi9%2B4BI1W5OFX21OLm4B7cviFxHwfzD6L6Tvil7eNHnu7sPPTSshymKQqSwh3lFB7%2BmeNvje%2FZN8hFo3LOtKy5ZUVL0O3wDjE4rqRngsRpPpovfm4D3y9RFtvLBscgAlfh%2BHMPxAXEXq8JMEKmuqIdxnRQNFF7HKnC%2FNtrq3D%2Ft1L0clo74T4%2FR2gQUn9AnxIuJpdpZRDZoLCzawKjLlYPLca%2FbWmvyvEIp%2BMZKSPc%2F013wkGLNPP0iYTIKs2gfiW7MfmY5ohgQT1SZ%2B6zimjbjHX5i%2B9z6hfmZAV%2BxiL52Rn%2B9m9fMPnvo78GOqUBW39kkDQH6hef5V5zB3Km7VBrESRI37eMLngUpg0IoLDE4FjLx2CV8clI41gz7GQPiNYRUTyecb20EMPmSJyGYO6TBYZVC8fg5UiBUV3k%2Be6T6D7tytyG13861FBRK2eo6SaHvRHXSjaaCUMLFxDTYkhg5EhcgXVfzJF67NT8xLIrk2FWX3weQ8Lnj7IVsaboQcWnD%2BSvwuaGYQAT4OyCzKIQM8WV&X-Amz-Signature=348cb047ee4c90006666f91d62d98d5415c58d23722ccd238b0c0f64c2c1b508&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJKHWLC7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIA8tU2oNzNt7pNG6bGyo3V63R8rVUcAGfQuFrXrLq5gkAiEAmkL7Gcb8vvs9Ob2xOmNSyhb4cKyMZ9X7C7BMfFQxyRgqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2Bl6V%2F5yNTT72xTaircA6gMRrdVGAAbZLl%2Fyog9u8pNvk3ckLU2Dv9gJcG5fY3xOsgBKcWnQEpC8YYTue7yEKA2KrtRMr1f6Aum2nmKTRW%2BBvV9goOOalB9hh90TzOyIkzQS3DYogtrT9TopQsz6iHDufpiGx7zLyNMVeca4SRJrZpmKtdHn%2BsUo%2BKa25eDcu8ITp7ztHwFm47qQR9KNbbt8r0Ad1g6C9G0XQYbDX2GFMsBqNs%2BYLDSBWLRZ%2BC6Iz0ycGULOuT0oxlJap%2BpKhO00SOtgMHciQS%2B9eLUGLJH7jDjNoSau%2FCkD0Z7EOvKL7VJuU1GC5hUIwLAiu%2FS4cD2BpQ1WgjVL1NeW2cLsevp1hic91cXbKsDXE8YmSHRk1EnVLP5Y5DtcFRUtwtRIAmV6ieLF5sKpEXtY64PB2eGZq3Ny8pWvm58faliNeTmENFCE%2B8iohDAvYBJTPuusY6QVN%2F1ByldYH6%2FclSUABmGWkVICSKCDgsG%2BgxlAHlhhZxDm3OF8AoyJWQUYSq5V3P47VKqzIsL7H1r3fuIg9ucRQ%2BDp1ZchV64H30R%2B1ut4824mInjeAc%2FIm%2B7qILtYmGDhMsbZQcwwRayYPWm2d39Z9NeBHeiV729gtVc98dLNygld3dnRmJCXUYJMMbwo78GOqUBwEidEEaJDGzOnPjgK3Zs1Ru0zFt62INwSmp8YnzcgKfybtfnbL6AdhbakAFtnwEK9LR0jX9nKfEP8gudiFfJZR4pXj7zcpzsviebPuWOkGw3xpkt%2B1Vqz26pCZS3UrahEz2rFhFhG%2BVGENzwV4i7DMNMVol%2FwNi0t3pBSkikyJucV%2B160wDVU6Fr3bd9V1WhlcvkyBE9xgoEJGzVa730JdYYVeLc&X-Amz-Signature=83dc33a7b11ac5c789b6d74250e51fadc8caa50a408c5d990abbb35be7c3f8bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
