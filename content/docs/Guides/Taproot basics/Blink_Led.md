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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLO2REO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCa0VheJK1HLNphalq00EOE%2Ba2len4nvkVyHBAuWixOdgIgc1M9gbIftXHVvcH8tPuUJItNw6hHSK74DYLLRBaVAN0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwi1pYe%2FwlHSkQvByrcAx8DCLXv94MWkrk9r8jBtP5xphz5KCf%2B7HDgFz8UUBLGORJcV6AmcEfIsOxZiISB7Ix1IusbVYkI17f3U6tFAsN9rc0Q%2BejrKpiq33H31i2lc8UenYQxLopSPUAk9otkBPAILAj81KHh1Rri7t2t5ml%2FOT%2BuhAxN2b1wNIdyfxcxm3yiWMfu77g%2BGXUA5PrjJ%2FA2phvHhlypnKUVd1Sn1qO9RHUEv%2B9KUbarnsvhBnoZg8inHFqHmUI5TI1C9YzBfeVjnAwsKqhCoHmENgc3jDCTI1nL8bDemLkXdz%2BxCrj3%2FwzQLgTnH%2BRbl8t34vetgG5siE6s3docpae%2BBlbMMPILWp6Zl2XuwCzI2qK%2B0wMDzY7Rozr2PCKJx9oszyBdOa7LVYW4x%2Frl3wIixng9hehtiwPL6WC%2BcViIFmktPmI3YwKC4WBUtYa5DyBSxDQs3w5tM9exgxWmngvbRTP1nCpy9iaKSJ1QrcdLofFkuX1EEw3xLpK6e%2BcuUJ%2FT9vIW5x79gwShW2VUICapBwwO%2FMQi%2FuHcGLG2JSTHeRV6qpyYb3DLt0R9e6s2r%2FjhlTz504R0wnu0Qc8gNAMddLUTMdxaNTPC6OVkNVRVftAnvrUzt2OnehwE6zyRjzlhMOPq6cMGOqUBB69KBtsN24Qubw6gFZDgGhccvOOpJCKv1jeIwx3dAA4YNOV%2F60Bq3oyOJ1N63HQgXgdcd7jOghv%2Bhq%2BscKgJFXxpDwh5211qMzKOdW0pelg6HoYpyWA11%2FVggVdbAe5MTJx1cm%2FcU7MAeK136TX6yTDHOiw1D4IMyanjW94tuOHmpL9xAndEu6nE3Z%2Bh3CA%2Fw1nSXWmG%2Bx0qwIc5KC1Exwvobn4%2B&X-Amz-Signature=450f036fd46207215cf66d811ee50d9a05b28c5b7948f4179abb2392bd17a790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI4O76HS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2BWwffUuMoujtSWAD91GLuer73W14%2BvzQDEew8tjaTiwIgNqx2nfaPAIPl6ZTD81bqlfzen2O3uwb4%2FVxEB4%2B2VHEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5mjSq%2FcGp%2FFeMkGyrcA0MD%2BpN1cWl77VPuwnfhInqlJ0QffRinzLocaJ3z5HvYrkOQAPFNXgfWeldTviAoBsYzPdLDgVCi6Ij7%2F64XuylrF46qzvWVNK%2B5ngBJ5sjICbp%2B7Az5s7H4joZE4XlMDs6Md6DWoOGVkcLVOb09wtvjpAeWiomry4JBqiy5fRDmy7Nx0R%2BtL0Bpi2G66kzLCE4NcbjsVJXKtzno0ciyRfiPQxXBYSfjmmiyALG%2BuX17%2FT9PMlAhsrnc3emAIZ6qM8dQa7JwNowLGTg7lARZdNa61QI6nRLYqlJxq%2FCDmhFte2UtIZlkSrQebXd1PF%2BnNs7cVgBKNdysYExVCIvWZggF%2Fp2FU5pPrCA%2FCf7wCWbRuGu2z38fBxPOANCdhsp6W%2FeJggUKCvhM%2BKg8D6SrBusixRqQyYaIBpHJ16tqlizT72azxktZ%2Fuvz%2FW8HeReoqdX%2BH16PXrYvJt0dDR%2FrPPazKDjGQSe1DhW3%2FZEm1%2F3NZUscg2CXbw8e2js08nEDNrVOCRuHK%2FPn9Pd40qV7Usf44HTonfsxRgcuBMsOgx%2BqEDIYb2KzzqZjw3Ufh2pRcPhGiPkg8ADXSJoBJtRONa1aWaYHjEJvPq9jPLf9I8wG5a3MfvgPoPUL6vYGMOTq6cMGOqUBqJV0ICC2IdevOU5RqF7HvAgY4EBeLtdnv9XFNP8STN10T5HuKTYibFtWSNJvcEvIvFKebISVlhvqwbz5X900aYwXHA8vUSQegPlavdj%2BX4KfKmrGkBwj1m3hsphu1wcRPIJKFUrFCgaEdnzxkM0JrU2gwntosyjzevVMPqueFI25YDbk42R8zLwmA7dREXhIDdWdua65lxNGBhFykma46VVWk8Au&X-Amz-Signature=79df97f211835e1363b39fe7c09596494c94f1e903f8add1ee41b1ca1ca74f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
