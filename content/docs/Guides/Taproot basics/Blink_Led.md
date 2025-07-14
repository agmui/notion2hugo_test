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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPDBHWU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDmGW1GM5RmU05KNxcEJevVZ212L4izNgmZ5Y5FzZuPrAiEAyWeu4ECRF9KjsQZwqvoKOh%2B9BRlR5JrFOzX2uFRixhEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDLhaDdRUC1MD0tCbircA%2F%2FKPe7wYjq48Mxm6%2Bt1Nv9H8%2FOBTmqDaezxp5pqro6KRw5%2FQgAOERk0JeTsOTuezUExObyjDIuED3%2FJcdUJpunMzinbX5ARxgmaaYaPqmQ9lmmiluqXXzEUL19zv%2F7foSKbdtnm9Kvns%2BnheeoBP3sRNeQUFlQZh9g6p2wvyATZ6fDo0isRxoro7GmtX6cpv8zdDQwX3FoIrpkK6aWzGKm9eIcLVqxAQ4R1pI6VvJU3639jHQOvBveQH1H3nkhTLEW8hX5p0qs%2FHuq%2FyHDpWoiCrl0UIeINnr%2BuPurlnfSVEHAhtRo5yOYGWoVokrYuZdLz6FYs4s1k%2FT0qUjDI5rwEuiJKCCell36vNRMXniZgWBHu6y4KF7VipmPdzMcPw1nS62d%2BWlA1Hgl0jgYtCCQqBZpGOzO4bch9keJX7K70Ba1d2gJL8ZsbjmJl8Qe0u3DNhNh6ZIRU07aVOTK%2FXMBYvq2nuyJ%2Flw%2BEG%2BrM4vGdAj7LrUsJgvXzCCejAxxBFUpb%2BLwy3WwOWAtYVTmhHfeNSsVzksF5Upvm2BAEvoXEDJ8mVLncGES8fqhCixsBN0WwuYDgvP0aJ%2FXuKkLbt9xrynGte9W%2BfBI59MDZkUEB8rp1v%2BKqBdkldNqaMJ2F1MMGOqUBrS2DabpK%2BcQ4M5%2Ba6LW4HyR3%2BoXqtWUR6ztn7e1rCfofgyQAUdwXIp%2BKh4Qe%2FeIiy0DwYtj%2Boag2d6B%2F6Vt0YKIZn4mMQ0WB5dDaLT838o95ez6UHIYMs7hg%2B%2BO2stqW8AOd1DBnOyUIh5w1tzm7chna%2FZF6tjNqSh%2BVfftdGGRd3M49Cd60djTZ76X9%2FNS3YFwhGvahcySljXRRagnyMCv%2BTZ%2BF&X-Amz-Signature=19ae8d6f8354ebf4997c08fdd2bc4363c283e302378b714844afa8ffaf13f859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRKOPJD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH9skfy45uzJnyL8D4npC2utjMrYPzr%2FRUar%2BHiIHWDGAiEAi2NXhe6Z2jYo3AMYmMMedy37mLdCtV4CTT2lJ0tUItMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLGxisKsJ%2F4wweF3YSrcA7Uur5pLtGjd9IGsewNAwyqpeQEF8Ul6hdo0IAn9WTXIq9nYYr4QhWT4PZMyPZFswjXS%2FI3NCJHNGMf5OMH65zy4gqYQf5teTh34yr4jPOx9xzeGj11nT6LfJts%2FWeIBXWGvuRRwwX5Cp%2FDn84FRzmOaBBMEN44bv8atmGdQeUuJD6J25lYXcNAj%2Bwq%2Bve9Vm%2F8I%2BfkVPPo40Fk1Zp0V3LTPdqyfAznORTicJNM5AF3M3yffEDF2lSdcyMrcPaQtyNFa73gsM26ZUutkKZCFQpfgbp8tPwQzX2ydHHymTuK1jgexpMTEGqNOPZRjzaa%2Fe0SoplRFCCmGLtnKtO02S0K1UmznS2%2BPQ4XFQ%2BHe8CIu97ZDgE1QNfc%2F8o6bBYYMaWMABP23EHQPBCWLzQ0qd6sRHDz%2FpOBtf4PuYM%2BKMIXao%2BNDvirIhDXrWdPOlmZasYH5pt1u2ww7AGQEMQu9MXiyJObxtmN6kEYyaSe%2F%2FInSD7ivNIJOw8u7myTb%2F2eoeKvOXJvY3daB46G8jKighHqBcfSDCbxCQAXBoPBMwFw0I42vRAHrce5ysdftmIXqWmU14hq%2BnT3aXIWGINAMmvntMFOzBG3UUgf6yXJzDpQP0TXZTk%2Bo81PPj4jCMK6E1MMGOqUBi%2Fr7qHYN2WMhMDUNfVjZuiZ86%2BuHNHGfgjrJareaGK9KM%2BcpLQzbxg%2BGF6md5dsoFdOHAtETGXYb%2BK4vk9ZahO2%2FkAWSgEriTloRPVtD8CbLb1kfJQprI5%2Fi3Y7A%2BxevwpXmpD7EGwG763kuVIJttewKdLzYXcDvHC4S6%2F3SSbXWd%2FAH4xjemx3enlyRgR8PzPlItZcP9vEw1ed5ZPjz6NE4jWx0&X-Amz-Signature=a444667dcf896b1b1e32508702f04b1a7117dc70a4140c6704a7bd51e8d6c4ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
