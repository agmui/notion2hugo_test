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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MWOULI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEqgcBKIzSsmFFsHilbJ%2F8hUTTz84Q6BQVcqs0d5pgovAiEAx2DSwUb3MsXkCVLQ4sKuD07B6eSp68IQdhFZkiqaSVYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKBGAlLHlTfqs5aEKSrcA2jS9q2B9xzhJ196uePvOblM5yBMaUEBgQnVIy8wwNHNl1IYOLhUwuYOTPLgI82%2F5%2FW%2BCqzcyx3SJ0oPE2gZbcW%2BukQptlqAQJxVhKjzVSsCZ3t77n7tBM8qBMEvEK0EugFyaJk%2BRabXHpnbj%2FGNWE5ruuCeeGHm%2B3zi1Wc079rRRIgCM8HkEzm8a7h3ffMY%2Bn42gIMInrVhzK%2FtKCE1lXJmGypKuj6PFq37LGXBXfspnZSp8fH%2B0iXohqiM%2Bh2GVWzUphnGHYdIDria3apgWjzWvsmUMmMS%2BaHc703t6YLCBuzRiXfahUpr2wV%2BKie%2B6PoYJCLhgnw6rWB64ed5e64BT7lZOR5itNsEyVziOt3cdHQlPTcrxjHIKJ2NItX7qfqFMEwvjXqOIXUQmtA96IdRbr8M8tlsnNEna%2BSupTr9s8weStonQPYFhdl0Ov6eL8oPcJmJ3F7kXeiNiEE1OZ%2Bp1gTTky1EZynjMyaSGD3otPEXsRUpgcLlCtmsJ0CKgXWICgQVoNh3HBeLSNSzEyaU5fCwHuXYKTlXQ3tEmrC6Ag8paqxFDDsS6ePDpcK%2FYK0o5xbG5uPCOCF0AXYlSwwnsMV3w%2Bdf7mhqedhDVQY8G1nETMXMDKY8VgqJMI2PiMQGOqUBHI5V8s7W%2FV8wdhB63ZHSiMcQC85%2FskoV%2FPas8YZ7C2LCKnkFz450HxeqjHvee%2FFl3hNEl%2Bf7eUXY0xVy2gogwTay67sg9CGh%2FiaGdfL6z343gIi72AveffflcfF91jU63vJX3xwZCdYuF%2Be2kxl9KeORWqLolrdBhY%2BvWhIongz2G5mPlG%2F1XDMi3lXz7fvofPMgCmQe1FV9AJ68m7kcPzGUfZLT&X-Amz-Signature=f7d24f361745f8704a87d5fa4148f48ae246f6b5f1a18e88e10f8768eecfdc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGNT3QQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIB%2Br%2Br%2FrU%2FIvzcadr0Zwi4NGFWzUq7Q8uvmiV76JYhQnAiEA%2FCVYelJGzSGSaY456t%2Bj5kNpGYNsbsU1FQ1ADigaDtAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOPJG9VERs9eXRnqrircA0XbrkJIDbODFaH56U4YncejWXWtPqY8QSHd9dsR6f2YR2B7L940CwYusV5AC8npDeIKcLteBplOBtPP1nUTAmTPBNvXtrbO9OHzOQI42xW%2F5ffRZ14rjtE7mw7BKuxrgxg3fu594wD3eSnSnXHC5loZAow1k9n91wy6xpeq%2FGGGoEPOEWtbug9BC4fN46l%2BoIXrHQmgaEDV4hZkMC0aksk%2FszzzPAUjxANExRPbv8fLYFo1JxbhOM68UJwpESO9gJUHx2R79JQiKCcUJ1SeFsDFwAw85qLkp%2BNnVWRy9jLN%2B8pfKK2bUv6n%2F%2FsvJs4ht0CsQ%2FC5D3CEoa3UMf02GCpTa7mfaV2HOkpN5qazBSHM8hJOT0O3sp4amrwLoQ5meLDNXTuoHjF%2FkwomkHpu13Ixmp%2FeBG8vFKes%2BcGDvYeMFwmi%2FvbfRMO2pjn7DN3lvf0RVno1T9AkNkw9W9EfSwvktHssGo0wXFdH4vmnGyZEodOuBp%2Bru5T1yx2qHdX%2Fr9QVYZuKJCovQvctGQrPXGEkR76PCAYRnrKHdvjOWi6VaUXC2K1A2c0Q7EW%2ByTjYpo2yaE6FK3GwR%2FLIs7LtdCAK4Vo%2BFUeU%2B%2BhFBHLjpbEov22MOUUPIQqZwps6MM2PiMQGOqUB3nuhO5xPFiq47giVLAl5LOqDVW6%2FbAZcmGWwwHFus%2FsZacd1SSVxOCYnR8MMJjgNc8q6vMuvaVYdZY00VHHGVIfAIMrEbLGqPzi5kd%2BTt8YCXgKntJ%2F7UbZg%2FBMiJAq1qS4qHXwsulKjI1WvNBsekz34tOmFLZREfMpayJj4BBTFL3ieKDEfZSMo3HrWvTpgOb8cAJj8lnGvspV6hbRI9V18otmF&X-Amz-Signature=664525884ca77e6282351d3f1ba3fd96728997013ca3b18622dcc0de4debf2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
