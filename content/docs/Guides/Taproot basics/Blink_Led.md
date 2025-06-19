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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG46LXB7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESpFXOBPJSmZ5jxMCYuTrZPrjRh7TqdeFCvuVqPnnpeAiEAr0RTGZUMMpeQKfIwzTrMOSbU%2F53rqTp1%2F5358pVMb64qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4LYb2X7wbsMsU7wSrcA5zs5Uvcje6grwL%2BusTkwaqKaLpJsWNcl0lfcnSYdodzkCeRFjswoddbUyGw19akNJQ62lDXTrW3VMbx36jS8sCTCLzSegpdcSPWiLVpctNXcEyT99L6Yjn%2Bq2TzNmCL5LpTuzpaYeGoFtImo3y%2Ba7swKlQ4Cxi1lzJaAVFk1Yw7Bo7SzAasmBkzD3xbzRc%2F6UpL2zytHAsDLxq9X47zF2iBUpDSZRCNDIWyu1yr3IGDz743YBgqBkcFEiXDx0Ksr0VFLI5vDcs%2B3HGUGRoVQFnduirgGplvBRSDawxSYbqscnOdmDSTg%2BxFittSLS57XLQUtS5ohgWtti75swGDaWqlV6f4ja1heMYIffsnlFqMvzvtPypKTkDWgpcluuyWsfMqx5RC5H8ls%2FraaL%2F9t105dRNGi0x%2FJ%2BAxZF9GSznrlXWz0mh%2Bq8uclaKTNGIVy%2B9dFSezUynIrivms9xtCkH3uJqWpwitpmyV1gJ3ovjVA54BlZ0LN9O94QtDXJAiy7q6xrKKUDsBrJxjjaRTt1lrrHVJrsHHccwFaa5hyNPU8mvq%2BYYaBHKi80O4b0HB2L7PuhXxvGatubl9Rr2Aj8Bd%2Fjr4ArjGN3cHgx4rtRacrs60TqAJB8wg2HJ6MK60zsIGOqUB%2FdI6%2BJKAyTH2BYiOaK4IX7JTcD7Mmhdi6hjIC0ZdgRbGqMsX0pNuKOdH%2F48XnOIWdmHNmYrGjOIEzMNZS1BIGZi97BDWZL%2FFzKxKxs0FkhalNjp0qGyBqaNLLmXT1S8CDQdJUiVKi64uexz8yVCHzc%2B9A3kOEhMmgRW4DyhBCsNqiXEk%2BYG8lVEUz%2BuiWzc3VZVikgMzOP0EGANvMVejoGuIMSJE&X-Amz-Signature=02c0b394824629b1ff8003ca44d50cf7db1e70f0f71dba325643f0848c66da51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657IGBVD3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt9w1pd7FYPlT83Hs6Xtcyu1HDf9qEke%2Fi6X6xH7LCYwIgNLdwd%2BFNgD%2BXVe%2F7DD9mjrhI6ZzzwkXpGosy%2FccSJ98qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQWFq8YTWTKDb672SrcA5f55eVCgINb0vtqARv9SEiW7E%2FAVqnvXLawx0I6PrtwZqREQbcTMhIUnAT6Yamj%2BHhtIT9e51h9XsudJ4xy%2F3xGwmU%2Bn4461ONah4r9J8JQyeI%2FotU9jP6fGRk%2F%2FGjB%2FTKDG7JpJvd7A5BdDGthEkNRps0w2LpzkoOg1ZkZ2PZS9uX9bYi6KbAR6D9IoTQaSq0kyMQememnNgoT692lP3cmVOl2Sv2g06BAO8x%2FzDFdzoROOEfN%2BCVjKcnWOZNBbEuoo0s%2BT9jJDIpqs3jMiOuUYpop8OYwVXHIt6zIRevwGnIrl6U7ZSyIERhD2MDjog9HxVJ7yfcD85RluyzcJaHfwiPr37e2tg1yEO2yLyrX0A2Nx69PitbFlo8c2DQ9nA9WWIYhRFOLCSDmxUsAd1DyTfL3T51Grp9bhzNSesku7bVJTKAl35BgaTJHWNCW2s3tQnPrQrKZSwFNMmoEttbQZU6FM3LZ61KTBCSeKM17gMUCPhujCLN4%2Ft1BORYJfzWihLM7ymSHt0OyYP6L2y9j2PE5Aph20vuOtVnXeGcB1zfd9pwATGqq7FS46HfqGUain%2FdnnzSM9iUcmpNmwh8W1xQQ9bhN70BcNQB%2F3J6VsABF6JujZtM8vhXcMMWzzsIGOqUBlpAP5YYYZ%2Fwf08PxAT25hctZRngIf%2Fx0hucKhUQ8tnWmVQ2CfgEG%2BN1vuDP%2Blf7BKK5AtDaef%2F4vBcNZl8ZTXuw6E17qVTe7%2FTacNeFR3hlohB%2BBLNH2oVVen%2FHvq2BMWLM2kvPY%2FATkG1wnUPoZ%2BPvii94MgbBlQTOOrDZcddDynJyOhoyUyFhDy8CK2efuE5jcA2GSujnMMWaEP%2BiH52vyptGH&X-Amz-Signature=9ef88122da24bff4846c7cd6b2b01f84a7919ec383dfeda2c13447dd4839816a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
