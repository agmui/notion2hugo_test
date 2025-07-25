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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5QHM7U%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIAudPfyEVxRpv3NHFIxfbaV8YAwrcZLY3mLWeUEUuarEAiBjqUslGQKdJ4ZNHnHwnnb4iAz9qaVaUBeDLrJFhJ%2Fq5ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMzTiYNoCpzqn%2F%2BpuCKtwD%2FWc90Zl1j96PajBh8XCv%2FXnMb89swh6XJh1rkN1DPVe9l20g8DLYIakQFs8%2FWgjJZLqfbR2tRhs7%2F7yywY0228UzCdd2z1TaXT%2FcnmpAdyqbFI3A%2BZqdMRRK5QrwjZxqkSDjDPYou3Us%2ByfPbsGW8TEnhWFIBaq3OvNbvKkylVEGbKcljL%2FAkAv%2Frg1O5jLmAYQeQqVRN6AZn7LIjjIVjgZ7Da%2BqvCK1zVCflFfWNq%2BptxHowR%2BMzu0fHNRDKfTYvSodzeyPvAI73rpsxynDrUIA%2B4aIakvfBBM45sInPBurndMZu1JKui9zrHgZIgb22D8QIXhCWUqIXeoK1j2tQe%2B%2FuuXs2T4BPkeKTAkJ9zVVqw2c5yhtsEw8igV6QIVZgiD3QYH7PCHCsNW0VhW25iIttyNd7N4KQHYGO41A0KC8MU9WQAQzixIu72KuhMQZrEvMcd1fDawNn%2BIMqFCwpDpiwrQPJ0GTMj5zTAcUzoVCXzukG6v7cwzvzTN6VE%2BCH4sTQ0DbQTjZVBGIi3%2BpHrjLgCvN2x1xwRNV0rdNh42vFJ82a4o%2Fxh17JVfHzP5qBDjxGUiADmzbZvzlbM82PQvFEmYnq3vjhqxEF3ggwVWJMAxLPuDkU52gQTYw%2B%2BeMxAY6pgH%2B76evfBrWkbLmccj%2Bx%2BDcpsWH9AzwkdKWb0UTcpWYVcWwCVHdIHksC42RvXax731B0Mqbv3tPaN6NchfbEULDHQ8eYuB9DI0TAfWEg9FUafC%2Bw%2B9ts9bDqBT0oYkSTsaDu6twFdFdMYHd%2BxoPRN7ZGxDtcMbTQKuMraTJ91snClL2w8tCYXfa4ULrNmJrO2TKu6FeOaLNP%2FWYQyFrFuNospg5vBvU&X-Amz-Signature=a96503c7967dcfa1965e918f6f8f90e1bcfac52acdf913ea366401e06ceb0e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRRGFA2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDh%2Bcmb2HyMnYIVwZISkHQQVoE4%2BeTFlK7PSznoYLdsCAIgc3Dp1CnxmOU0%2FSxywGkoLlUUnu8rvqXz91Matk3em1sq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIL%2BJBZ3qOA%2FU4ZNDircAy6fEx4xrsvRlzcqnYubqAk3RJox4o44lc2jkmnXc%2BEX0q7h2pDHX%2BvPXvDpUN6cYUg5zNlliaFtipRjdgtRVCEpL%2F1i0PwMF4MU3aZMFSXnmzmUNmS5EnR87p%2FW0PyTRTKLM%2FggHyNGErvW6QpI%2FbG%2BSz7kBsCu%2FG4%2BRjmlcBRVsAsRlLsAn3jRESRvPISBj4NEZmglExj1E1a2lkyn2Ly4K6Q4%2BTdO9AKHm%2Fwy5fF473W6jaxR6XDX8LOD4mVibnYTb5R4TbWpp4srks9%2BmNc6k1PLBn%2BI34pnuYJ%2FJpyYfGp6ztc3%2FQhRd5e5ifrBKSuJB5abwr4hwkIr2TtquVFYss72WBkVWYvWlpRll4bSkqagZSJS3j20XgsCZhIxi0XzBNAB9hsNS9hTPf2GmKK%2BoL59YTCHeC2Ug70I0mCKPnJimIEPVEjLwdDmoDL7D7D8CbE4svCUmN72xbFCp5s0isZTd8mBFA13PCdotLyOBI4C%2B%2BRicVZZJNYv6r7D6AIwh38QV1FuxXnQLr1yc7havOEyy%2BhVv8NH8VYb5op5HIiTPN93KcF1BEbTdzQ2CU0UUun%2FmGUwTxUwNA%2Fuz9JDnBo6WgFhTAtSG2KlMx1WfIVqbSHfDd%2B9s3PYMMvojMQGOqUBwqvx7luAi684AwKFmxaELYZTSVr3Xbdnps1PPmSLkc3NS%2F8qKMfOQSnxC3DSTC7lm5FKmv5SnWSCKCR7QN14sbvT0QjaRg3eZeZZLnTh3%2FSueO7W%2BiRMuT2518rFUjoQCxAigkSB%2Bkg0%2Bguhck%2BLhdrcSteaJ6I4v3uFVTGK1AzLje%2BpvF4cmyRuTzIdzbhnwPmefipEcju8Gt9ZHrCp1HUqs7eT&X-Amz-Signature=9969e21fd11cf6f40129ca5d904e63319d48c7f565707a5c82b998f6279017ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
