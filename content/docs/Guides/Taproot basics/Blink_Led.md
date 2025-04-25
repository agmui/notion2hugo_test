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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWJWI22I%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNcYRV8j40TQ9v4y7WWNapIsMEOX%2FpSsAgEwxvEK0IDQIgG7ErCMu9cGIfWEmfXQTkbyKbmYypD2ETBoZy%2F3xlhGsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOeIRG41s6J6F1PhqSrcA2B4R%2BpIcH%2BoBIB%2BLtBGZlLiBBstnRXGaAyLh4XUrK5cexFtGJxCb07lHMxphZIgWT8SOI73ipJvdkajHY5MNEssBxSSL1A3h0O7OMp6s0TD2zewP50jsNKLzmRJ1eLxwNyNxe6Dzsbh4PKQ%2BpBUgimFRxP039Bey0PWKYEWy7GHdFd3pG8JMoy9ar2kuUSeB%2FMeaq7rCoTqZ3LHf0mgG%2FspYNlZ8QpVhD2D58MY48NlBbdlutQCMXffXdi6HYPMlhICxzgahdjKIxLRhuKohdi6rchDCr0AVNR0nYGIqYjLEUdVwpDeE2b143qRPzVG0sxqvUDtZEexFRMJmYXIklqD3iEoaaVmWuDol6FCjjXVprF1gs5H286b6B5K1LBAF7%2B7ExIVzeAxdC2hiE8aVIElA%2BWp7wcSOnjHYYmBdrlAncvArTLbEONaa1n8tVyCOIDtIfiSV%2BUXNvMC2h1P9qWn7dk6w275gnR%2B8ujMXMm%2F0y5XpxrqJxu2HE8L1PnK%2FTl9QYk7DAtPUpxy1Y%2Fw1vOXCQ0bwEYFBDMPPJYaIk%2BLxzbYI6U%2Fse65xPQH6Et2Zwc2gjY1YkSwOgJvhu5rqjaf0IZmaYvyrUCV7aZM1DScgEtAevCI97ilV3kbMJnLrMAGOqUBrIHD1nrY1o479Z3dyQ9lO0HgecJr9oyIZM2nuIvYo%2B7aynDonfSPsHTu%2BRWaD8q00XdkaRcnbFV%2BQYo9fvLkODYpSrbHqaylB%2BGG4nFXwsyfjEYc37dtcXx3%2Bj4LCE4yi5Jl%2BCsSB%2BueJTeEbzOTWeQaRRVbizeuu9bYY3f4uEQG6TeMqfQyZ8mvBOJSpCKolo4SpmGgCgR1dCzrNMnhAP%2FWdsLj&X-Amz-Signature=fc8ec1dbde5cceda4afe3a0127f5f70a1a64a95cda724be78c0962eebbe629a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WVFPN6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwPfMZ%2BO0igIB95EjKGkW%2BVea9zebTUH8hBDoscvnYvAiBFpn6bSsgCcYdoFkrbNVkpzOzLbyaqus1WXGZnIW3aUSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMP87aEbe6dS%2FRdd%2F0KtwDpiA4K4zeAGGEStM%2FUlxn6e0t2bbF3TQ2D1dUKpQi6u1w4s2JWwm8dl19VrNkb%2F5ostuh23RULIPXUVtFwq8l3gGyIUeCBD9pKbKIpk2jVkxu0QV5whLwlDrUqYSYCz9Zy4EdR%2FoJUyfEG1VyQKWn5vQhb%2Fd31AMSenxOoDOSXodDsZCaKEKkxQhErQ5KneSJ9w%2B0xACqIDSAz10SsBm74%2BTfUJfbjkIL5ZrW52iyvnbQycNX14Mtk3RjBwwJYVgapq2igSnA7BEpxrIRSDoxfFGUp4b1yTQ3Wd2pm7D3Ca4LVEqYIJq2i6FFdHTF8p4qx6I2P3WAHwHd8GHnO0%2FP%2FzYlBFVzKaqC5K3EYIQ20fC8t3CAZVHxv45yAyEV153T2McJvA8kRs00Gfyw6gMjrsSXCgNck3AihPHuav9BHdl16%2F1UNEgBFi4mad%2BdimxiyhPbA4qamTOP0ii1PVZjwoMmkJIgJ4PuQfjVf9TbFex5ynguy4Xqwo11rw6SUJZXIFMy%2FKrITYSrqA1EqSi%2FQwefR2gfD3Dlr3YGuYL6kznTO1Zdy0gn3Su9yDHLcx4%2FxaUfJf3NhKydJp4C%2FGhlLhuS3SQ3365MhlMTmLJuFaIgX2PLXyMXel%2BUeu4ws8qswAY6pgEXKHAUt8D4iyFE6AdKg8M%2F7SddrmhaXd7ji0PyB99%2BAGK9fxeJX0A%2Bq4UTTnDgW9B7C967yxXRHjz4RQq3KYmneQSq3WR9LF%2FN3J4CbrCqw60B%2BrRHVob%2Br%2FmgdeXbWux%2FDfxiqkplGnOh64QCQ0u40bdUIVoURNlTdE7O5mcLtD3XibqB37JaDvPoBJAN2RVL1EwBl5U3srUnPWbTQqst8ZA5AnMs&X-Amz-Signature=b0c01538f4d7e6fe74a562d5ef90951dfaf0d35685dd771d87af98b4c4410384&X-Amz-SignedHeaders=host&x-id=GetObject)

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
