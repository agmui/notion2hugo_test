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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BL2WDZC%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjRgqoDpz5OyJkL7ojqio6GY0vJm8AkfJ5FwYfb2VQvAiEAvP8vuojuc09B6XTz%2F1rinFLNOTocVRVZ1X%2B3DdagFPQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BMbJVB61tIIDCFKSrcA%2BAzX5TXllOBfq5k8jSBVTs%2FbJk88sfSNXxt5rfGZOzX3RvTeyZeRhF4jNbHqhZiWQbBVpVCx4AiHXqWEPdqUYeauPankjIYpBx4DMFbtK%2F5lHflTS%2FZyom7IbDA%2BVXTNUgl%2B3yRNKphTR2zC1rFOOhiXGbyf1kYOdn4RdFS1YRSJfZT5S9jVCuvhAeiwQef4OFe6SZOszv09CfZxwF3eDIyVG5ZtbmR5IuJbOiGDazDCCKmoe1xVPLu5xK%2FKgzmUUUeEcZz1aQtmk0T%2B2dKKL%2F47GIhZfj5XhREr9GpdMSx5YP%2BXs6DA6w0DMwPFLh1kl8n5boF%2FZzrbS%2FHpfd%2BWzdKwZn%2BY7MRo36WveWsclOcDmilMKd9ivBPP4ko2B4TzTnVaOePMAsb89Iqi3JBARmpDh4ixW8WfnDSeO2zj6j0AWJ4itIVTX4CcyTfiDiTukZELhcZXB36GinSmMHfbTClLIrQlEQRk%2FiLH2uT5lDDdyAWrEVSJVVuAVU6O4SNmvZYvTj9lFrs7V38A5JSsy7DzK1kD66C6pwhEJA0Jigq7vOrnAkz1woHuq2n5yWmLTgVM6rhXp2BHEDbjtgxGaAHtAWEbH5ZIa%2BEFhbatu9epcsJQNpOEYB15uw4MLiy0r4GOqUBC2pB6x3zT8Q1bFYUPOAq%2FVz11oT2%2FAEGgKR8gKNoEN%2BY5ujYdxSQQR0T%2FN5Aij5gW0fTDcwZE08ogcnkaiEhhtYQUw1kIP0m5EVjmzebDray%2FCdrspNJ4F%2FMKkwMMvLXRVGAXhaDdeImfhz5ZkVWEfTzspshVyrCDenXsp9FgBd6Z%2BRvPEO8Ax1go5hhVO53JzR3fRqPXV4Dra8TmwWhKVzZ1Ikc&X-Amz-Signature=29fc6dfcb8e8e4e1c5fa7def3396b828b85d7910c1a84f9db877a0dfa8818b32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXKKZ52%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7dYWllI6hU2d0NulU9ZMQcO1Wtl9qSNVLs9WgvVDxLAiEAlK5WravO7f1u%2Bl0ZNxMtrwh0n8UDzmccP7O8VP0QO78qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ml5YaaW5eFvB83ircA5DMYwDMDcMNV1bY8W4CshxQ%2ByV%2F8SzAj2fzsr%2BXzb%2FN4wpkn0LaJEdMyGXg7cMMHoIppXx%2FweR71AO%2B22yP9PJ%2Bu9Hvl66WuT213hNE%2FpMeZOQI2epaFF5tfVUHSUDHmbDtfnoAxz0jXyBkUcHAl%2FfIdWtRYIX3PW8jxMY85cJoEJxM72wd0ge21C9yefIBbIFD%2FsXvDKyuWzsLYhTN%2B7p0KPLP18CuWaWuKoYqxapGDkKr2ayiVJWyjGGv1uf4tP4w9xWP1t1roFVtBjqDxoPECpOfBwiDQKHPy2tamiiMiRIVOv%2FWN%2FjAE3KBOAF4YNCAkhXSfn%2FT8h4ia5StZ1NWWh0bckx3U0bUXqNvpcI2hXxCz2g%2B4Le91ha1GKk%2FqrLYwO1uRbnyLvN1snX43R2L95PhzgXPS2%2FRnifXAuQ1%2FKS%2BO9STy%2FikkwSi2sE50n1IBq%2Be3%2BfSa2gjno1xXGSAoD14gcFGEoqOUGxx7s%2BRFggzQ49KGSdrj%2F3ov75dt4myIc4SDOKxatXAtUqZyVsyZoGx%2FehoinjFhniFfmYp2L9LLV12BTdvkWKVyE8rtc1NMhZyzIVRI0U2gYj54PSPyvrARYF3%2F4SzvIO9bri%2B%2BkugvILqY26%2Fs6OGMK6y0r4GOqUBxf7hBowyBQqBjfhBg5Yh8HkwH3DAGeAL1d69CrP2klT%2Fgk1KG7u3Uyb0uGeFUhEkMye7MTa45UW06%2ByAjHYOBWhIwtXfa3tppGUkWgboQ1aitEv8nQ93HPLv9dzulZZ0pNy0g18NsWaRc46ydADPyiTldlaJT6x%2Fm50FuUFhPcwOweeJtFNK7OMcSM5x3%2B59oW0mFsZ39HFzFVSCrbvpUl3tXPXK&X-Amz-Signature=586b4bff90dca2a00a3f9ebeec8650323bfe7e6b08d5f8ed4a0c2da1e088cc82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
