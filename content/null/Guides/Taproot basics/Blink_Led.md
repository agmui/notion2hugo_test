---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Blink_Led.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UG2DM5K%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHOUiWJ1sdeJUh1xrsVs%2FvJWCrIOUc%2F8FzVAWKSjPIpfAiEAi9QIxRQYtPcbpYlHeKtBLQ3Hw0VdvHmKFCp9EH2jtDUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMFXHDezfNaRet3rKircA%2FYvVnlSHANVLjbD%2BAewtcj00rayIJa7QYQV%2BMt%2BRR8zX3lCH9aMrNewKBIYL48KQJHRUfmeMntsR%2FOa%2Fghe5YGQgBdhCBIrg0Mc5Na8KZby%2FHSooW%2BLn6gRu35ybBopDjGfQBM1%2FaXrO5MWdTbGHQ80DKWxAogG1VJ7ItplmA6KsWOy2Q3MNWkXJyiiGB5R1wL%2BtAldIQg1vMBQZ%2BiCLAYqpt0M56fI1rn9ZPiJruUom0q74J4SqA%2B3kGxIxElKEA3C95MPWvaemP5LhT6I5Zkvp%2FQuMb0lPGWoHvSAuiamlnGqOfmwjegkyBSn9nhWxwxg1WxMeewCz74XiOWhK9mIe2v6uHa5TLspd4IvuTJ8oqbyP0MnTRIyQM2Gx6Q%2FmJLZeV9FEulhT5M93o%2BFYPdDRnhjLry7fSq7ed%2F8gxWCCHYPhMRzux5JNI1oGSErfde%2BMqskxcRXOukS3zEEFP0BeSBTNWin8kbAV39CF1xurnMEoYSgjgPuucXI0X%2BWNw1hezpDGl7m4VOFy7t%2FWAHD%2BYkq8iI5qkr0KtVq1433x1idr8VC93UGCGpaH%2FFiL1I1%2FX2JeDw%2BfeuGfE%2B3hUZQoXaZ8tnNeWIrgQIqUnw%2BF7CoIvMTxdxUwvqVMJ%2FPir0GOqUBkZjJ8mw3FjjwgJ4JXACE04416Y%2FC0FGnIJVx5BNAScp5YlYhLqzjzel0%2B1Ev4Ad19B0zagEtsDuhUyTXDMrXa0WF0yDRmU5wN3557m%2FYumHKEGNBYGKRcbHcCGrzTjBoBXRsp3LdDUBDfBqi8Mgn06DDcSw3WD7EQZeweTOOMbDUt6UsvoZZoxU9zIJXYdYhTOuBahCq8tLpHnrdzX931Bb%2B1CdW&X-Amz-Signature=c4f1c88f957401c934e4108ca33c2f826f706268bcaa1f0990f9041fa9e50630&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM5CUMPX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFyfbHtsOWGRDMuBsaFL1se4SWtIz3%2Bc4444Km7If90dAiEA6E424WoUD43qnKArZ7iZA8lMh8xdVwT8pC60o8wQf%2B4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCDFEVrsbZe9hepqvyrcA3khL%2BRf1H50gE1jzmAdI%2FcZDF0i95cDVw%2FwXqH8l0aTMchSYPD6SM9DiHGGP1uvlI2IvOiNsWUtPfl2GrnSbrKCp0fI0hHOWr130pQBl3sFvU2uHDLKf%2BU9CpEetLdkEWV3BmjAXJApbf9eZVhfVk0R3hRTAlJWSg60uZoJH0pzdAMI2xIXpZuHo11MnkjyG%2FMnEe0DCHlUj1jheM9Uu0zfgY%2Bi%2FiBTpcUfAMlQPT1brvF%2F3E7k%2BmF66g0TSumMX6mLWilbGNCP2nql92BOvH4wnJVQ%2FeNFyAuTlbMelNqJEdCYCssuPMdlGGK%2B2ECG6YmC1tpyWAhqkKD1FOhyLHfsY%2FGvc%2BJvozEQ9QkkOk1bk%2FG25zLHS%2FxgRVN27DjH37m6P6t27rT0fHKPtF%2FCTqJlB4pU7TDJr0IVjGjtVvVr7vi4YI%2BmNGbhBiA%2B0ISMIWV%2F3BDjkqAwp0I%2Ft5t0MEAXuZnYi6fS%2BURs02ja9rV65bfOxzweLHR21QXF7G0ZY9ln5D8aD2h1PvtsA5%2FFCCwSPHtt%2BxvVOIbzjgGM6EEsvSPIqMN6%2Fz3zd%2Fr4K9iv2wg8jG60zTem3A%2Bd43BjwflF5d%2FN%2F1guNAvIYMYOnToSi8uRtrTX3s1UXA9eMNTPir0GOqUBz9PM9Thfs%2BYkdY1FVA88pwtWRCR9lKijUN%2F3wxS7Tz%2BgrD3pn%2BQBpt24thUtZ5MnGO30gMzbYjV6Gxx2VE8RjO6aY5gdZj%2FmS%2B4WFFDI0yaK6rNbGgXsTwuX6WmfdSDhs3ydCJ8ztOdxlAoxL8XjFNfwkcxmXasiW%2Boq8Wzx%2Fqx%2BlnUwklhbAQj9sN5Wa1v6zvJR0cUO4wAqtyIiZrCsU2csDV3B&X-Amz-Signature=19e3cd376eafb6d9d2e2de093ad69ab59df092dd290dbe0a7a31a79f3c19259f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
