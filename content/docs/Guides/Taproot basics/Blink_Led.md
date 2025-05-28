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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HHJZPMP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtuu4v1OA5O0uLnDkiN%2BfV0uWg5nPDB9tn3VsHxgJloAiEAriTs%2FWJw2Pegq4%2F20vbn7EEO3xtb%2F2pxyfjxsIk3QiIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKMDJ9cb%2BHCvx6d5SyrcA0BiR9HCghnq6VX8DGYcvDYThKZ8yXNxIOsxRF0j8TdN84cNyw6zHjrqZypV9T%2FuH8y8DU5048zEb984P%2Bp7g6fssEfK5Txs8LRQLDOsofHCFL8dX8zQ%2BcRHY5X9EReIeneXijeLv%2BLJ%2Bn64SwACWKXJrzx1ciRYGsc4GQbEca%2FccgZbirx%2B1IxDXZyP41oqCoyl5u5MM0AnsiSb61R%2FilCAZYqnCS0CecXVwL%2Bcg1Xzk%2Bi0Jx65W02TiaV7F%2FVWzvjy%2Bm2RXUYTGY65y5%2Bmx7%2BVnKwe9V2dhUP2TPhx2nRL03MPv0n3sRig6%2FiA2UEvJf8GgD5jyDK6twImPUfBFwizLKc1y%2BdFx%2FDtV72wcHgL7%2BuxvxlL4WcsgtGRLhTaYKwnEAgyKmhEeik280qSRsZc2qCnozbKf%2BrxlUEcsc9qzSGVu9MLE7RkFxWEEofeEzd6MEGICmOL1CzIWoRg%2BTQt%2FVreq2jNCBbV6q0HVWnsVsztSgqy%2BOVLOOIar0ggTdS2KLEh9jfoCmTyF8%2Fu1Rt7hE%2F4I8FZmw6S%2BGh8%2B10yckJUgRRdDwT4ho%2FAx%2F%2BVDS3jSK%2B4jhRj1VHLEnxsfAMhWlrhnubC6psfPUQdmPsYMXMn83BJ0%2F6xv%2FqcML3G3MEGOqUBKX9R%2F6KodM8iA7JHpTEw%2F4G5GvQ3mR7ar1lMUbwJ22kogTaKmN7Cbk1BBma7JmWmLn%2FccZuUM8VqMxMjZymrk2X95H3OqxkSKZK7%2FvS76QGEEFAvs9%2FHeRHyji9JrU0fqt2ksnoJHdnMjP2rpy9VbLGt%2BL435dABIwMknRne%2BBFnRkgpbIf2rm42yMApgK9fSzJmKCQ1gziPt4DPHlhWm8FlrU2%2B&X-Amz-Signature=9e428bb95e84624f66ef40c750659e88a2a4fb711ec9fc7b5efce11234d826aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZEK7OG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJD6Pzs9tjaYRZvzbtK%2FAs0a83IC%2FV%2B%2FTWOudIpOAUcAiEA6g2%2B8uM6aEJVrO0wS4wKTJVvsxHO8J4PcSVeE8bLf8oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEmISR6S2Ohwy0E2BircA90UxPquPZ8F4rYaqPruKSCkxBE2968hcj%2BD8gM%2FJz32F0HA%2BT9OG0x0UGvI%2FCfBft9mHepKV%2FMz923gZHrFtw7ZR9Qx2becCW5tYSjjGrBYuM0rKsYXFjS3M4TztTMxrSED9mX4gI9zEoFpEstj8y85Y4nGuegt0tvyOyVqZz7u86CHEOk3RnqT790Ye7H0FRbDET5iIZSSxDFA%2BrMQn6fLe2E2dTL2mGmCCE4XorCM2klsdvzl5gRKJKU7QiScb22i9z02%2FjhEFqVzrCi6%2B9sQb7j1CFHlPBK%2B8SVI2eqwpn7%2FvzW%2F7Cy000%2F%2BfPZ%2B5dDNZfEJ%2BGDcnb%2BHHyoQ1Paq3C1fk2iS2ktZ%2Bpzk25prEVKIBai88Rkbs5FRgsYUsgY%2BXWX1QO0OFbVBxWa3q%2BbRyr5EqDRl2%2BPN5gsPt1RXrc3UBW7luO1Hj89vJK5bXBw5NVbyeWmZpHnDhDJtdHEvTBl5a9tS3V2YK1sf5Y6HSQIoEJ3326AygZ27jzmBpds1pJtR2PE0dpX7EafXx5UywCAz6DzfjXy2e4Bzbo6i2I3U2ujCXmAG1wbVJiwgeZX0DFJ%2F0jEy%2Bi0mOyb8zqzkuTtIY%2FtSfnh%2Fwp27r7GXv69OR5lNy4omTPzdMOPF3MEGOqUB2uOVc5cCmkBqfMY%2BsZZEriA9xSbZYaDZ1Vmia3D3QQxuFU1B4%2F15VhgvWiEu6AppJi%2BCS6XL8WasEGYCxNkTdV6J40vGL0smDwrS7DCl4xkZBzaslH0RWkmBdpLxDHYUHM1%2B3ZoQWtCHFKswtmTATcEKQrLLoL%2Fd4a3Bp%2FJVlTgmlDXXCtFGJesOUCWfApFWbbvXcWpU4VxdwTnzluh6GCCrRD%2FB&X-Amz-Signature=1c3bce22819c90204e8e9ba9d044140b699c0620d4974be1a858052bdad3fff0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
