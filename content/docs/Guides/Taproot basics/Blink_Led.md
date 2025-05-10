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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULOCXJX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVM8gDpRFv7WSNwqnSLCnp2%2Fwsl79xtd2PxgA%2BBsJYgAiEA4z3ic0PaBYXFgOBLAh7ESmyThyhXsyoSWsPdjx9vNeQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHuFsjM9cOmrYgw9yrcAwnAIyUi6%2BQtmZrGhSM2%2FL8hSyaLhbqzhkWrPqBr2LCPPMjfeg3hXkaSdJ1tl3H0q8Kg5XUbUk2tbSpJV%2FGTK6jj1ILyBQYsMgoR%2Fj4ilxRg9C9nke2mj%2BBDod%2BaqoRlCcdnHd336z%2FYl9VbnvK%2BW%2BcIyOJMNJ%2Fd3Ol3ip%2BQzfWo7JGPc%2BL5kWFQRpnZiMTQnjQUGgQam3jxBVtUiQbnbS7NCTKk92iUwCkhJh64klBCycWEUacir4XHyox5rP3gEx417%2FwDjLrMloc%2BCnEEuhtQgZgZH1JLXOOos3KygR%2F0rlkzDtylt6zzC7nIJn1t701jL1xB14SnvROyqVWKYfw3jmifOThS0vSnSpwHXNr8NPxklD04ReN3AhftBU6dUtQ3DdSdxcakoIgi0ujoBU%2F3mUfS%2FdzWOGQgNxRPVPjK61%2FCqSPTENiaDYETSf4lTTcXstYloFhscrs0p8vChruINAKo60Jgow7S9XsmIrpcR%2Br2gc7nYofvSM9VsAHCFwyh4PO7l2%2BneOQW2wROs6zODDqWp6CHaUejNta61h2DAnhBv%2FawuJyIjsf%2FMfXI3X0YAVd1rEo97b%2BuJu8gXzzvhJo6jT3xSElHDjNCURVSLz8abAu2ZscbY42vMNq6%2B8AGOqUBiZjqA4WQOV0HuP32Mz3pKGrMSzicnR0R6FoKY7u859jf3CPTA19rsDSAG%2FgCBV7lSSamZ3%2BDjf9VGBtmOT%2B07K2kNwguyxd78QPa3hAh%2F6CfdI8IhbynrB2tH7g5zAPuAoXSKS9w0r1brwauY2GB0nQrQPXswqxf8xsIPpQ8l5HCYsZFPMq%2F31y8yriMEplILJP%2BuuP%2BjVViI7Bl%2BLINYgN%2Flih2&X-Amz-Signature=5bcf6c0ecd8f76d4a25ed1d8a5705563a0ceb207ceeaf76895a28c25ad4f2ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVND7OEM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKypt4OxKtWtb3RAjTQeNJWfaLgLxulFlo0L9MLZ6mHAiEA8ydOz97uAyEMa4cKscSMD%2B4s0rqH7WRRXHMn%2FJldNfIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRB67u2VlylYgkxzyrcA5Cd%2FendIJJX9Wv%2BINzHKd8hK0EF8GoIxrfIFvvxvCOg5bTl4nAR1T5Qf9lRB%2Fcqo9TYULfnHg6ob41pTYxLxQS84Ib9Zi49dINjOpZJR9MtDN6lxtDc0ai3pxIc%2F2uHYSy7%2FJ9AqQeJgFEImqowNhXiVBnGTHM7RdzfIeu%2F9tEtJ7QODnPtB1FTAuWTxkjqvGyKPVdOuU8AbfbNcIvJQQxwhxYebGjqTo9cx2hFSstgxxbaZp%2FgBy3Oh6Dp3OKiCNcKKOSomjC7qh3uLClhCxLGtjpqwUjxTEttfSJEuIHZXoT%2F5q4fvOoHGULdKFn7gbdVO53GIXhTD1uKGwAu%2FrEdB8Y2Hru%2BnD1EwpGcg1%2FpfHCyCN5fwORvMy5yJNJL1tQ43LQJxEbwe8THCaPZ6idmgPcca5ZVM8ubLeOnXHhXz2%2Frtmx2m1u4%2FqUNa5qRKn1ThkEyBJH3mvEZs4J8IWiEO5ZeYGFzYbyT2Yq3XarKkR4qGI%2BoipQjHKJd4JyRmrWpQ%2Bwvt0stw6uyg0ZXxGsYk3rYElXuo9i%2BN36pvktUfi8JvlZldmw46KzKSipy%2Fx2eKlt2GPmG9ikigN2%2BK%2BhL3%2F2zBFFWlbD%2Fw8GNp7Fc8sT3yw5yBtt%2BSINAMPe6%2B8AGOqUB7QM%2BNmZoW3iebi4%2FDxLFztUgCXsNgF3VPGpjCsBgCrOT69FcCjZFkmpvGTAY2kDmNEI87A6G4BS2OstAQt7sdAeL%2BFTXaGRNYc%2BHuHHe7i2eGghBUsOJaSeMlkK2k%2Bne2HLCBb53dMXdHb6NPxiCwQlawn5jd9dR4zxy28sc1sR0%2FvaOgGfJEZAiTFjiiLgTITWj7dQgAHoqvgV9JER0YzYvdZU%2F&X-Amz-Signature=0be7043f4ab3c5814c0a6a8f0a0b91ad50f87481147add91b72e9e55d507e768&X-Amz-SignedHeaders=host&x-id=GetObject)

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
