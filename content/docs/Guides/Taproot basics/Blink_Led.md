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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQF5CQDF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtSGC1%2BOBxYnnpHKIrjLagCYSP6jQWPtqzt8hFVFj2rAiAM3ixnzqpvpB14aTCqi6DJFOPDM%2Fey7ij8nWVomyjENCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNsp2nxCzIGggFiMBKtwDkfxk%2Fc6vlcMfR9urc7ywlXtDfD6ySGSK1%2FQ%2FGb%2FwY%2BhiuGAkTS4uLl%2FMVOFNryes%2BX8PzFu3%2FHGY%2B%2FjiFO4nZMAQlMC0a26hgIJ8DaDodnQ5sE2ISBMBdZ7RVHci3P6vMlfckPiQFPbLn5m1PQhscrE4OqqmP3t%2FL2VVME6gTUvF6GznrHbkYMMJkk3GRmKaf1m5s9yMoYAvAKtpGmYL6JxA6H30fGsWtBkWShRpaNGHuphblW5nN2KLghMy0lh3jL%2BpRCf4uBOENq8pmZoYaj2cFOecVMmx4UQauanvo4sKWJtxisb1gwOcJFsnjVj6%2BRarDbETj1ld8JuQq6kUjnigK%2FLo9dQDtLu9CC554PRDb6MEfHULP%2FVsu0sWODPcIXdYKpbHnq6Sg9xNOwLgNsA4s04%2BPuq%2BYHk3cyKCe5Hf9VVY8AgfYIv752ulvQDEhc7SvTgU26XhDUB2RjSYxbat1Gp3pTJ48FBkiT6q23m7elN87sD0uTCLqCF1D6l8xkofdj9COaErTZ4J6ovfVYByF%2BvG4UjQaINDudNLuAMj6hnNff6m1yV59%2FfpajlrOYYSH9MV0hDfQQj5wiZNfMBIPmUqooPmL4gT0R8UnPWsluHnyqt8H1q5K6IwvfbjvQY6pgEYwLy3U7N2a7z2hbO%2Fbj4L%2BOSWsZDLGPqzysxRAHcG8I1akmm0ybHmGQkob3JT83vMPYIfhTENO7fbt4z2p9WCQ08UfQBat3SK%2FYKc0IZJl2AsJ0IhmfL4yr80rFltkRKaBchvTwJp3G7W5cSRBqFJzBl1laZS0MLz7%2FNR3NWxysXu%2FI21vJjiqApXc6%2Fr9uqApvSN1PjpP0V2hbLRZ3FpUe5qdGTs&X-Amz-Signature=7faaf2a98d7abec05ec3d0824a30a6856ec887b959688cd23c0bb689224cf710&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJC6SMWX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB01e3QopQFeuRoTKS1%2BhUvW0Tc4fv0c%2BdbM7rT%2ByUXQIgQ91p8Lbh8sTL0MC15ZjOahN7JfMd1k7rdTHdiZfzMNAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJb%2Fky8kBKQ2FbmmLSrcA7U%2BUrgYISUrgo4fbX5EHvq6F%2FnFodVFMV%2FtHY%2FtmmTNPTZFAAx6ujmg%2BYdiTetwdbBWG9LdH3eKUFiBm9hYiQi9CsoMavfG9YDQjM0lKT9%2BsmnJTwhfvI2fg%2FCePJL6xDURmvCmMQDEUqhbEoH8NofbtMNgj2kcs6A%2B69Tril1LILzwRqHH6RdXX%2BI%2BLbTJhgECvdvCaOcBCrl4tYeibe3hQ5IQBz3jx7eklBw193WFtEfU1EFc2N8msQSFYfNV21j6oKfvJXzUsNlMVagtedljkbEa1NEURdSjwXvKrU5PdSeYLb%2BLBMZYNfwEair2vnowRjnnaHiQ%2BPWzLmGghDDSmhE123Lu4KpuLrCIO1l8ZKjSKgA%2BYvExgZBEPV9qVl1e2w1%2BPF9a%2FpjHFP45sJTfdeZx3YBV7kyXXBOpIeuawbMsGtgy5D7XLwSHpX6klEL8Ay1DUfszN%2B5DAfvivx2aTp7OVVyFDrfARMZFEM31CBM0arj4b%2F%2BjdznwbUhQB9rZhAd%2FAPyMnUDE%2FNwu9bblgxBLwLjCn5ITjQ%2BJxT%2Bn0dB8z0VMF%2BQHwoJGbIkwUW7O%2BvYh02z0gFP86x4CkDhS7ivzIswsYXRxylU%2FsaXDlO3bvbm2VfbmrvUsMNv1470GOqUBVbcw0bINAL2jkX88wLu%2FkABTjlTtO7yAlRCiO1B9AR%2B6Zqy2L%2FXM7yAex0bZUoVSwAIV6HOHW%2BWIGAIdprd8ALQwjncPvZ1fiq4UBCvR3ib3U0B%2FVZ%2FN23H8dohANHGrvxdth73WZG1gSlkP1jZ9JGZZlKJjII6yfe9RJuDwg960rCks%2Bq%2BFv5jCjhz%2FJm%2B2X%2BNLm%2FDowRakaXWgfsV4ATLFN1po&X-Amz-Signature=ee527a5ca853d5b5a9fbdd38dc853b0d34aff9f1a673c04e73adf060deb57a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
