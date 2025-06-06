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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFS2OMQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEXHVovTCFG7n5WQ9CU%2Bm%2F0NWkcjfF1ptWO0GrgAZXmsAiEA9CnaZb7eD%2Fvzr4Kh5I0tUs9FHxHwem3GdxGhr5dS3NMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD0AaaUAAKz9v84fQCrcAyHiT%2B9IK7Wblg3yd8MRRYRnKYwgUzORroaI1Kfh7KByerMSDSjqE2FBZiC3R6qlUXP032Hhu2TiB22I3aGhK07ywj5QHYZD4sN3csQ1HoKNOphuTTJM4p61sCJKEdbbZEQi0L883wqXTpP7ZyYzNO9b1NPCcfrChZorK3rClr8ki%2FRcZ0uxHi89sWuf%2Fif8jnAyVkz3UEexDzJ%2FoA22kqvYb29lBpX5CsREa7bJDeLPNsPe36A5XnBC860A1Z4UWRDf3R8hJqj0lYihIcvyEVZNW%2F1OdvnqMh06n%2BIjR4ZUAKiHiRNxojAtdum%2BKd0XMER3LeQEQl%2Fr0TipVTMSvPPGwAcxSgDcZI5ehw1ntLDVq56JaRyocVffhiuWGjZJclJjCOLdRxo6DVbbozuBVXWn9QcCSm3vpTWNPBIdxgYED7RM9kQVE7yuQDHH5P7p%2FEETTAyvWNZK573v3AXM2%2Bhk7y0P%2BEnbTZhOAICDeRzu4TGhOKKqRQ0lFW8ZK8X6rkWxW%2FU5NiJ3bj59nyuTDNX1jiTl3Io8MIKb5RVt4dHB%2BwWOukXFawHkCjd4K4YXMUiw27SwRIownaldzl5Nb1rpS4BdIKSyqeONbIax3eabrdrusNNaqmhFy4QmMPD9iMIGOqUBgXp2%2BCO0pCU61EIcKE0QzCaXLB1pwakqxCZg9AscMJl17IyjqmGLwfAmbbq0HsIkVmgFhlsaDtHQNwfyZhWs%2BnFuk8vF1YfigYoAIGOVdlerxgB81Cb9HB6XSpIrxAjTqC6r02sC8kLHwca8NRMkYbDmjhucJEIXispe279qtvTM6A%2FW9icJSWDw1Ul3dtbcFLO4F3GGiRSJJFO8h4U2k7nqrT0l&X-Amz-Signature=0f449c1228ebac48324c35bab8c87ace5d4b0da7561c7e30e8d3c4f79176126e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVH3TR4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHUeKDdo%2BxqmvFdAUc3WFE5Cz8A7yuERmr9LR6uvdePIAiEA988IKJfyYG2cCrh7vbjwy5ASeMDoAo2mVLeAcEPIt2Mq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKkJi%2B9y6H1nB8o1oircAxMdPzuxa3E0o1iBAEPZIDpj5aAFF1ODgT1ES4pS3NuvfNfc82C1NGNDhg%2FsnXXBZZMxE3Lp9IYZYDo7P3EBI1%2FLk3sp9BXtuy4dcNBlOeqqbrnBIBrPJBf5XZOVGEZBO%2FesiMexmCa8zWThw6SqkFnAzePNGwL7j6D4036UbAss40X4Zpsen%2FbNXWiC5AxSaagLJ6rtuKUq%2Bx6YjivkeAT%2BoE0fX6e4iU4QvmZUMYTu%2BSaDpn5cm8tA0FEMfUuP1YwhVqpfjTWjC90HP1x1H2ep%2BI38je5Ql%2BGpITzX6Jl3YgpiuG4ZkNBl%2F5BaLGhsNJai6LRTqc8g48K8d8hbHiwdZC9hqw7%2BQB%2BGzYBAKZ3IeAY9BBAWqeyLsN%2Fx%2FQ5f0bIgGI1uOQhOCtE4iTmTS0AvSwdotG7mG86pFU583TvKI%2FbI4pXKWMCnxotY%2BORZneWnSrTF0c5UAYD00Quj6wLY5F13ai84rkpYKim9C0sG3IEv1Ze3%2FSm2RIvIFfE1BO59lGxxZTvJTLF%2BkFqn0vOPs7sK1Uxccors6zmCmpapiqEemNj8sBpPmGuXFoKaeTAKJD%2Fn62C7r4Qeb7Hi0y1i91wu0qOIhpScQfFwIW0vz65v67q9oy9sVGz9MIL0iMIGOqUBX6U5zbVFB6lv6dccpnPT20Aexi8rul%2FqzfEsckOoOdsFSPYS048sAQ6%2FQtYCPb11K6vHHjsYrR969cfXRb8wvahW%2FCecBf5qoiGVdGphwxCf4ryKY1NFpPbLewBMzwyS64FNiNOgbLDW6kjmnLo83o5Y%2BOzfKV5rwFQ7KATwUi0ysCYfxVp%2FOAEjqXgBq%2FYF4ZnAMaTgFOHDstodZLiK1jXDDDzg&X-Amz-Signature=4a6022b7b708c6af77f89a11b73b8c9b98a08fef207cc4c8aa737dea5e3161d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
