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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGJNLBKG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExkoDBNFNR1l0U4kO%2FVZSs1uxvzGXpOaQqPeuJpyEZuAiEAiK1qeofMjs33d9%2Fdlbm6vsz%2FG71iUEjjFcCRzJhDXpQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMEKNRQ84dQi2M%2FaNircA8n075E%2Bn9hjiJUmDMALqD3t2Kzx1Ls5wa9PyISqTEVZ5VUpf9BjGQCAmu%2FC8EQJRuEzs0JltvhSQzmH%2B3j45sPKvJX2pnfPxHI%2BhFG0UhOrlQaJQ%2FNa1gWzzWFH%2FB2gpk3P3nMAKLCrCplHv%2BvsPcekr3onPDfzsnB%2BIBU29LgilBc8G4breRXnPkAIbGXDOEIeQUg%2Bln1AGmWItEF6g8iGJmpiB52lwfziSqGUs3vzBzHLxNue2iFRAzqTX3pAzIAQWB3ypmSK7fHbCdyPencfG9gNHcZSbOmG%2BGWom0iFaHXoqIPX4Ps3dvN95bmbiKwIhKAh4pXA91WeJk92BKdJDCyCqfnrKpOVp%2BaNcH1EP1Yn1xxZaTTjBjfhT1pCNrNrDkpMwgT2eoUiSuts9uuJ157axvP1if6eOjU%2BUtzNuYveU50uVctsdShHa4xWFwp4eRxQ8SmuKhRr8kYhbIbw8o8JoFJ0zM%2FooreOaCct7fWnMfeVGzIzfWk7tPXL0s33eRzC0fv1N7xsSgCUlyLm3DvUfg2q0RmLLDT5RfIytirb3UMBDlek%2B98qvcs3EH86wmQUqHP5iuvS8UrHmlgjCNhbw4lIGvhiq4CxQjbrZVGKNvGYgwXRZKB1MMCy9MAGOqUBV1eD9sAgWrK%2Bo8l8SAk0w6Gtq0Vuupga6t%2BuuPZnHscysr9yZ6F0sz%2BHPJZ%2BkD8z4MG%2BKb4zHfNgEyWgMTTuQj32WgEMFN6jMbtCHqJJ2acOYr%2BMZSV9p8MOhXdchFiyxZ%2B5CO%2F%2B7FHFOrEdvRqukNe7BMNLrH77p6i%2F9BSQfdFI1r%2FiSQhHFJGt4gYu3Z8L9%2BTAFmXuT2fE5fBH2uv6j2kg%2FrcA&X-Amz-Signature=58ca04fb83ae4debfdd3bd1d248067d457e3cdc694c4698b77acad3806bb08d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7J2PGZE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyofNC0tKSreGEeb8dRdt3kEEMWp9TEXgtk%2FapGib%2BEAiEAxTLj6QcVHo0ZSWAixsb5acpesXcbMcgF1ZaZ9y6NqRcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFFC8SR%2FvBS60C4SDircA6jnfSFbnFZ1zQB5RVfrQjOdGONX9xCpZ2yI1Xx1qPZ5CSt3h6CSY7yO59rWpCyXz3zG2Uk3vOXQCLX1OoDJkORXPzP6M1VCLLuEXMoaTZQ8Df5H44cqaNZY%2FPa3XcQ%2BG%2BkFSTxqwXD7fZxR2AU%2B8iOY9fG8uk3tzE2Je9sdgc0kX14A8Ye0JkCbn6ozsRfq71f3S08PP0WM%2B%2BXPf2Quv3wuzE9MjgXseuo4vdN6BsfS3UTOsZkZbf91%2FXu%2B7E6e7wfVNfhFS%2FKmCzhT29%2BZeS99Ic47R9tdedj7MVw5z3TF4GbpvXl7t%2BVKCijNGpQRWiLeVTpI6inPjHX81T%2Fld3O6b9jdzvWGSug%2BaiTNsiSqWVkta%2BhKa50YS%2FLGryuTavo38XRYSVWI3Lydg8snzJNPLA3c2Kb1udEUfdbpgjNTEtpY%2FC9RW6b0NzLUUSzF2BbLwMsbhiNswnV1rUSaHRAzNdmCqO1Ni2zTRfV1cvn9cZ4t21BFYQznESYpho6%2FqkDCS6462beNlNFYC%2FkSPjWxX0jsggDS0ly5zx0%2BH9cNw7qqNN%2BSrXhpRKVaMTywJ66Y%2BefFXDYEYvK5JqTZHZtxaWn6WxduwJwuu6LfJQ%2BUSkCUCeQu3mFUrZccMPKx9MAGOqUBSYhgBfU%2FzuZ7dULXgf0%2FhM4M24DgUI8txDdmv06f85Nr2dthEWvjvw%2FUvJisuHXpaV5Qkix7BHtgBcWArmm97MreoSRz4FY02GZkDwNkKMAnq3EZXUNSCiVkF1tIQ27%2Bu6R2iWpq8H3598vDR9flAMcsGgACHmDE6XoQpRqLSVWWGXgpHe%2FwpZr2DhADJkhCOnBUH4Faf5CUm4PqtHNNApxgz%2Fi%2F&X-Amz-Signature=d69993c4e2ab2378a1d25dfb9b3f9058897de67a8a89e022226d28f17a4bf772&X-Amz-SignedHeaders=host&x-id=GetObject)

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
