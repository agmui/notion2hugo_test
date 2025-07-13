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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCK474UP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4pz6Ot38RIR%2Fl1QWeq0Y9WM8FSv%2BdczIdKTU5i270wAIgMOPweetJjSoIXMB8gD7EBUrIX4y6QRYXQASsihan2XIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKhoAMXAtRyEyekboCrcA1aV3krsvaJI%2Fw%2Bjru99TMcHAYRJiEvhgCCGmJ%2FHGCczUi1h4tpK8F%2BsP2pu%2F%2FGbMSUJSGpEvgAk1Vq%2Fv2XqBwrHXFDq%2BQF12u2IPYcNPCIDO7aAByXcYjshSpCDiHw73075dOgugpSGyV9JSNeryOISTQ%2BeLbCEmpia5fZ4oFwRADHe6tseJLKTnyRj50rDqsNGwxx9u5NJ4Kh0x1vOVDO6ks0yVPSzqMaxmUMLiw38YUjWggniR2aB%2Fx3YYARzRz6%2BlPkfReFJA5gz0BgAfP%2BQDwgWqNmJWsYMbwGLMRHSitr12cMPqe8p6hnniy5C%2F4R%2Fp7oEaqW6X6kjpuoy0%2FHxzN1oXi4IFq0Yq7IWOdxhbJmbS2DQm1%2BtN5T3mlsHmDFo9YZOEVJgoJLlgQr0oxh3jTpQ8xnUI6kb4PQFKzH8Z8KmALFpQ5GjgVRUsDNYwnCc465ZZdbcuoIMAFRLUTAfSM6cIloM7F%2FwrQ0DWhYmRqG2DMp%2FrLwjAAoG1Uc9%2BEyMIg8Qx4zu4rCi%2B1TcpYqOHRyA8bFhHvL%2Fu%2FZee7o8yXpViE58Uh6yhQq%2BG9gkF31rhkWe%2BhIL7rTuk%2FeWF4BJbR%2FrvNvwVmDYaew49h8buaWmjk%2F8TEh8iWNjMM%2BkzcMGOqUBVtBVQoCDxulPBChmPjn0gWXcIPwAOJwQCnGaV6dJE%2B4s2GrjCBvC41lhXGFX%2FAioqSXphoDPFGv9qxv6KMBin8g6wmRXffH8bpmZ4bzbCC1WqzlaWfH37hwrqk9ljYePgR1QIFX6WZ4vocs1R1w0drLRZhiVEH%2FNE11vzAUebrPl9ezPtmwo8ZFpChBKH0fLn9iNH184B6ufS%2FDjZtjaWmC0TJBi&X-Amz-Signature=a0aca32bf7f8cc0dfd81fad274da55d446134ecdd3b049df339fd076d0e54baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CIDKBFN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5aKxF7GPZ4Q8j5m2PAauTsrBfsRkeKZZo6Mrouqsi6AiAoG8hcPZowIHqub73sCJMS8PO2TgtBrHm3Rt%2B%2BCpwPvSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMtVdasx4TMMIAPBAWKtwDOKGlcnDNUFqBxdAg9khJLobFSmBvagE70OLEsU%2BUniVHzvDKE7LhOBmhCnHAzL7TkRwBMVWz%2FT4WOkUhqCqWMVGMKrvOHpMxCEdOqT48gg7ldJ2eW2yiZqIeShib5GD2CXNIeXg25CnfpOKqfmcAMziTvOrU6mT6N7Dx%2B6DBewTWSIhlYi4X7spp0%2F3R5G4eNvsgurGfy1NMP4KguKQ5KI4FMo%2Bv4z6FU9%2BYXguV9XVhBhx71Pr1YpXqmWJzH%2FnSWbBQPEWOBvn10aUY1Q4LdqFP7BdGK8ghgsbuUbo9Rfwl94pAR7RcvBIuuLj8x3QyDjMuIMCnwtd1PgwDq4V6fApUR1bxC%2BI1MjDGlRhej2EOy5YBVW9WTZA6BKVT%2Fuv%2FZ154JTwBvlofKvqw9f91OL5SSR%2F4STydY54bOhhkLQBweVw45I7R9LXFkhzoE%2BemvCFhB%2Bxgn5%2F2pC64UPVCaSGP9B%2FVXcmc6Z6%2BxHAR3bo0rzhlFlEBE0wO1guQK8AfvQcsSic1zP7EwVA9Za3ICvP76qo59V7jHG5YXiVgTWmRRvqmlEBSgCB991BfoKT8K%2BTFQ5xpjxskBcRAC4R50%2FCDTGmw2LFSYKT5Eq0bCmyw1%2BHreaLnHBniTrEwsqTNwwY6pgG41rsIsz1VKyOeMG664DGNstEQBxyAZO0LB4Chm9lLzPUAHcfVfp8Y3gmyLmWk9yE2f%2FLkRacLW%2F8%2FxwizNj9GklKGNKr%2FRkOtS%2B9mWvQejrGR0YW6KPU4ZEduGOG63oYciKgT9JJVn7zd3Wy2SuQZZKNOJtcqG8cgrTTdgrAj%2BmINqCkstauPVu4kTkVljYM1QCIxRHtwTElzK2AX4FkSNyZXtKsW&X-Amz-Signature=68c48bc8524774f3166d731a39ca9153e6ee77946e29c25e0c0ad2c3fc6cf475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
