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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFKDDFBK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUaP2coASDMyzZLHVk6O8n5xefS6HravuMBSyRoE70OQIgS3b4p%2FCayhCBp%2BJwGJEnvaBRl%2FjeTWLfzO5MFNlZ8z8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLiUKSQ%2BgllB8Z0g6ircA509M3kF0IsjT8bG32APIetubkYzefL4M%2FzV3D6r8nxxItS4bYGA9lrQg%2Bg0zR5CsagX%2B4MtTt77TMTTEXUhm3%2BNsXxWaBLqFCO8LBVImZDaDz7PU%2Fik6irY3ge%2FGGwU%2BpSgXza5oqNh9HW4gvcJbIgegbnj8Ov2Z9GPqzkljRis4aP6%2Bfu2Md89xIU1WXQ9uvZXnV1UyBhEHEGMltHFtOK8Ql4NJTMn%2BLszB2Gpq2Rn%2FAq6tLRMhcQyG%2BBFI4%2FTJTyibMzdbxRmIsCtCEOLvSgzaVt4d4dKq44dAnSUKFQHj%2BDCDwMI6ruV4dbHFZAr3zKgbu%2BHAVJQHOk8HkIfbEl1K3vJToDiZ1x1Q386zk7%2BeUJRdezARJLfNodBlcIcwQWXBCddkfzGVnld9qO9VRXniqvR2XTYScRxvinD0NnILQj99IyHxwzEkEtJG7qytR4a5AiwxOlfTzlo9%2FrW%2BY93eoXJBGHYwOGhgo0RmgMh3Bt94FhQBNwCq9G%2F4pOPEQG4tlK5zeZljXBiC%2BiloLVQaxPmKyMw5llTvFGhuMsm56IxIDvLMgope7rSGN12jDPDexCrqcTiyVcq2heBtQh2w0YH7uQJEcKh2dsUe7VcY5%2BN8BzZoifaCHowMITblL8GOqUBtSVBnS9zMIEavM7SsKzt5csqTrIB4C66NvnekdYe9ehe957%2Fm4sWWEhUicoT%2BuSpHs%2B7HIZGo9jmf%2FMYyVzUndpToXxGM2q6YZk1xJSNBHw7BHNHPwLv%2Fb1MyaXUG%2BESjRF3mXmq04D5L2LeIYdm8CsiGIV3EGDKoZB9rk2i%2BA%2BD4xgNV42WoSgXZAgaAMeGanMXyKzJa%2FGbHVX6i02GF2LmjmDE&X-Amz-Signature=debc04e203691b2f9df17f46a3a2c067c0491fce77ad26d14ead14acc6f54980&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GC23TKD%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA22hwbMGRBF6CdTezmStyDqt1sttqeqebFCmjCdp6%2BEAiA9gdoJfNnZUaxDwnjlNCsHtpiQ%2FWBvamsBXo1%2BnB3pDyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMoNLvTTSypGy7z1n8KtwDQj1c7te5YQbW9dAJVQqGNRYMhbDAgF56NFBQhu1bgQQEwRtaZzUCVmRdFMXTLhMh6PPaxrM4zCf8mp7FtGcwEauPo3gcpuLzkXK0xP9lmKI%2B5fGP0lV585SvrMfuou%2B8Ra6CatdiU2PEwDE0dro7Asx2RPz%2F9LII55x%2Bvz4eYO%2Fs2rga0NcAisSnCnMpYK%2FY6IOpFKdK%2BUk3MqP9wkHVZ64iB9XNIWZmcNh%2BJa%2F4Ako%2FLm285ZBB1VFp2DI6z9uFZWiKIeg1sVl7ILFVzO5CYD0Upiw8jQ%2BX%2FyrVQx6Z8Oc01PpTG0pvhnhYNI9RYyPMDqZplD%2BDAQfrMOA6ArEMT0gFlaA%2BHBuO5sQzdsYRBs5RlJUXsDm49xGrNudOqGaCViXJwEvS%2BpTnlMVwBQGj2kWxLAhFw%2BtfKTgpJspruKb%2Bxvkfp8ZeAJuF0xzcFsPaK3eY66Pp5ZBQa8tRQIkaX9fhwd42EO8j3%2BnJ7Kf4i6ouf%2FaDN19xPw%2F4WNCuk2JX2Ktc%2FkIfVVMelyVHX9wVIkoTaaUha46llk2P8935Z5sdvjv70wCtMSTUftoKwi%2FVwLZtG83LYVMJ4aVwg89KBkzkVugjZF1MBKxxe5iFkyaAihPbyiaAUz%2BmlMow7dqUvwY6pgGEnQ8Jn1VaNCzXnMxyrV3ZB4L5ZivQP8z0bBOQYY2PNjpMTdlkQsFZlSJuuoauVgYynhqoLnBc6sdzYWcLokqnIf4RkCfLfNyRjxGRESjHm8MlbjyTvsDMPnpkR3ofPtK2RbEyRh%2BBbNzQoA0t7AUwLgv9ZaOpdjBlX6chmfn1%2BmNux9XSF5%2FOdceLFW%2BKSbFqzKG46vYPfjEWBMsZxRgwXmYpj58f&X-Amz-Signature=6c53b5355f6c351065bcca26086cd37404061e8b03aedc45f057074e373771c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
