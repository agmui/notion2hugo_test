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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRL6TSV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXjCIB8vm05%2Fj6Ccgt%2BNy%2FFfmbmz%2BO5wthHIJntK%2F4AIgE9rfU9Mfyc8C1VTOrLzGF2Gqgbbr3m%2BsglcZ1zctGQ0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLdd2Qt7s6CFBLRkBSrcA5CRAafyMIh5OTHMSOaETJMGTK1Q92hTs8%2B23uWbMD4zlyOiqg1venbO875BEx%2BKqxEeAoSWievGnwOvr1dcHnQv2bb7zwG45n0o24HSzT5R5TKbZcl2iSJkDaPAT9rv2xZTdHrCoFHzgBVBBR4lIyyVbP4Aq%2FSW3jna8S%2B9OQB5Ta6b6c%2BqHq90H%2F9qHXEzPW%2FdhDCJL7JrvDl%2BO8dPDxdTmHU%2ByCPkhNszfvC%2BQ0QnruPoUNIrXDsT9fA9cbEvVG%2FkLIfTcYsVPcxbvLbyE1z4Ft%2Fq91T3NtEmELnlR4d9p4VbSnCNBoeVVU9oSRvLJI7W%2FZtIs0MPxodrdRI5fDTGPjWYAcdbhIRdFWLiHhHxw6KtjPIF0hD%2FQa6cG%2FkEDn%2FyBn9AYWCb4HnG%2F7EptzyTZ4oLxumWTvMACCX6RYPwWUEj9p5lhKwJqaaJz0DKZl6Kktv%2FvB0Y8e%2FE9DrGeWOH7hKrioS%2BcPwY7Vx4f7vXrnYQ0CXQu%2BVdozRwuA0q0WEXHMBbp%2FNyS%2FclzD5H8RK0zRPQzURAGMd8cxvmhz9sMOWqCx1WwxjF4oKI9jttbBve%2BI1MmMku9j5ixnqruyFnDdGBtArg4wkNPKAFEuBtjxogOLBkx5gjy2QkMK%2FwmsEGOqUBq5G8fa40iG%2By9xSsrgqb4c76V1XviM57qHS8b2Bu4BlvkkLtJL7w%2BE4cZDHlk80yKgnoe2z2HQuxUewljzs9enxDI%2Bwo%2Fwqf3c9loA6Zhst5YPlfDWvkwmf1vqWF4HooJEnO4XSLW6tvJKwiLYthCPGrvXL7Id9QzLkrpX0C1jghfPQVS%2FKJbb8ofElKK%2BTQEJG5k7xROmE3BlsQW1kH9%2FkJ7rpm&X-Amz-Signature=9a505ae7b9702fe331b4dfd5b5f68d7d05f8331df099091eebe9742081caeda9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7AZYJ7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLmfJ8S7ORXWkrXoeh%2FXYK%2FxxElaSLEEstyFBheo1mLAiEA%2B2PVeE5lwDeZprRdjifVddf4ZpHjqYHE0wjKhmMwA18q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLsGkGeVI4pHCBtjhSrcAwxUyZoyprvLYNDdmCG7twMFAhGyJWjNfmRt2x%2F%2BqN2a0Yvql3SH2CXKj0uSUwnOKaLLsf3jiFsmcJN3aylNRsbH81tvm2IAj1lka3gA6UFOyOuwGkUayGrZudpaTNaMM5bS9oYVIZZmoDj%2BQzpAQq0YYoL0psSu09HIn3kRULIBDQXMuHW7BDqO7Lk%2B7lll%2BejmQUSIMnOkkZgR987pxBn9OaRJQvzfeMAQ7NDT5BVNQ0xbn5rGKvbimRPIstDbabt%2Fb8RTL3nTEBiFptlJp12Go%2Fl1D%2BVRmAIUE9%2FoMFMEp1q%2FwpcoWWGI%2BzXULo50vMmO360R1oeSL0R4gDWm85WN3cFFUgV%2B40DVMfyfXRr0bXzxZecKnmZF4W%2Ff2sohFGQJkbLD8O35EPT2vEHSoLCPDnkqUKaKkgFuJ7FN59ITgPw4gotjJ%2BR9%2FOFIcj5U2xmIZzHOMQp31jlF4EUX4I517brRVywZRfNwPSDOtybIehOd4Z3mqoOIQ25cgO3M9HTvCvFcdHPmAKZWsTjkokLq3j4pl1hbqJzeOZID59hrvbuuvtitSqUtsjoD1qSFRtpV41lNl%2BmfoMD8SnaHFgQXCoUfc%2FGx4aJeCO85P7g%2FsK7VSOd3whfvfKyiMITwmsEGOqUBR30A%2FxE0bmSa7Y2EwQ%2BrFqAEpu2aR7dZitK%2FC2w1MW50j0s9gwZ985tzTun3shUUTIB0NWxKjTnmYQi5%2BPh29pVUlhhRU9kQ2FlGg3sMuDODttBF6k%2BESZ9l8VWboqaCn8vbBfWqbukwDQmyAhNz45U8GWcZNWMCw%2BU4N9viKHzzHXPUdSU%2BMP00MsW0ZKulTvWpjvBkZSMrRWby4dLALVs4c%2FgR&X-Amz-Signature=b886c9327818d791c70d12fb87903169ec4bb6eb66d633c7f6a3f3b1b642bbfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
