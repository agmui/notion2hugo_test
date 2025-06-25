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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGCOC77%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDwiDtsvROiUSFbTm6%2FK4SqwWVCDQ8Zi6951jRJPTzzZAiEA8DUJwA0uHwAVPMmgTdF5bmTfd762K6oZJ%2FTiN%2FidO%2Fgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJuJSKsCYQ%2FreeMPCyrcAwLz1ZlHs3cod%2FGgBhY7lj5xDxu63kz1mmwh4H2rEB2q7XxF4h1I1%2BgRG5l7MopVgyRvGOmT%2BmodSBVMI6PmzhQwl2ljIin%2Bdg1m%2F9xTLZUuxvzcjDekl2%2FNTClRe%2BY40H9fBy%2F1ZWINuSeGALD3nkLVc5cIi51WVwf9x3vVeESCG9wvqrewVMBX4IdTjPYplGLfmLd%2FEppTANOClhh9hqgdqeLwAUjoVL55ZBn7Wg3%2BLpvLktLDnibBLDuOAXpEUIxsNFVimaNXliViQg44SXlMA6V7RzxOzIAd35yzU0J9HUl2O2glA5NiL03HIHb6aXWZYelL%2FUxvPVBjPLzIdax7E8QN413DBcApSFyW0aqw5D3JkBjNDa%2FIXN9L6%2BGX1PqzUNOM%2Be2f8hX0LZiiSlLnWR8o2Wb0GIkxeqNAdXt5UKZ9G69Xm7Dr%2FAZEK3QNvGb1TDmLkocppPbZSAjGtX9qP%2BNXYnOrJa7Vw%2FMC%2F4FLaiDi7gJ4hJ5B0BeXp4TMAoNJwo4pCEW3GE5%2FtCzf%2FTaoWEv0YIUg8bpfZiLq7CLsAwysfeCIMeeFr%2FfmQ5qsjZe3Xw%2FfxYM7x4VgtFw4bnv8YvSLf%2B5DdxLSjK60pUBlrkBA0Jzoc6dxyFfwMPvd7sIGOqUBGEWSYsXWKEdJ34iviPqzwtfyIniHPkcontKWVoQ9M6RjsVhBfw7wD0X8M45eZJKZ0V3qPFTm1ZZvgkw7ga7Xrc14J1DiPt3Xm7%2BFk%2Blx3geiWjluYv6R83%2FRrK83NQKoJi0USGPyLjlrhAU123QwNq8nRf%2F1xh7%2FusKOddSZuOSd0YfK13C1Z9u4tRq3ajpOHnWcptKp9gUc8Gla1HujpivOiZL%2F&X-Amz-Signature=c966b059393c3de887e61cf74429b93c1b96ac9bbd59483cb71f2e7df9127420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRELITN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDj8LbPfo%2Bl2IvlXfayGWIm27ajuMuGz1zxTuDhpaZQxwIhAON3EeJMCwBe0dn3tYPmm0eO1I2dBExVsWXMyHfp8EyEKv8DCEEQABoMNjM3NDIzMTgzODA1Igz%2FVwRtnrRGbr9Z5qgq3ANrqD66AVpdtoBhIFlX1Cy7E5tbfdpB3qikCtToyH%2BtdhyygKm7ZsuNwlAUU0Dki%2BkJ%2BqjIHXUxEEU%2F5054cEH2sEwOOkVh%2Bo542AeX%2BdCJceCX7lwPtzx77PnCxtnmKkFY7uGtykdblK3I6fDZVQ5OVGIsMsBSdipiIqJG%2B78qHzhgI6Q45FgAWJrxoSmTdZz3vg2%2BrecP4HLQ8QfCAMwONN6DVw7BSb%2B9kkP5lD9v5oVmeAnoafbvfrfh6OnCnf9Fa%2FkKpt0ZUQa1IWZWDB2cbjmV5FD29sxDqgPAVb26s7SvsnA1vNDDHolRX2Snlyk%2FoTMnC3Vh9MX4FhJhXXnIJTv3WjlgzBdv0izay2FLo4JKlIr39KYBxOQniW%2BbIa4IVNYatvbR7AwKQu%2FXPkNAVIhscml9CUgiNXhmoUlUTGEGIUHwLGttwxH5lpuY56rGYUNSLnVBUPSG5uJOBq5T8eWQ%2BGVBHLW0XvI8IWqcjbNUtAEXzT2DsFRI%2FN%2B9gpvMeSTIvErQemFbF%2BOXNuxiu%2BSTw6x%2FZ9%2FLC2O9ASWtbPuT5gOBuicc%2BbBdYqPAmN%2BBqvrG2vGrIQyhrf4fzg%2FPCg1HLM6l3d4tV3%2FEprtObBknsuk%2ByHi3fQByODDM3u7CBjqkAfk14%2F4oY22kCBObLZSjVq%2BlJkHNd0xhd7MxpQvEPpC2oCdOyII3Q3J5WOOZP1m83zDaICqYqx308xpTn75%2FbBZZneRD8Jd90cbiEZ5XIx0FUsGRe4Ntp%2BhR0UgmE7Abg6UjV8zN41atqbE8gGk6NEipkqfR1lefcTBrUNxDrPGg4pMlLChMvBEnE7wD7SJT%2FxMb2wEvyoCr43nU2xDPQaVq9u1T&X-Amz-Signature=ccf516923bc5b296f86331b2202452b1a933816dc3379a6eaff968d4158bb3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
