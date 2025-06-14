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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIACDGQU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC8rcUs6OTZdUEqQB%2Fke3j9wZt22BGyyX%2FpWMu0bfJqhQIhAJdN6XyNPTMVIPrlb40nZyxvoexyW3rVetdHjFALB%2BiIKv8DCC0QABoMNjM3NDIzMTgzODA1IgwkiHHJ40udf%2FeSFeUq3AMzKOiLxwX5WDOkeiS95RqBCHOy7VwMCfExr3d658R40Sd3rT%2FD9D6tY5FeMPbAid3zTYpUtyjvgSCWbUeZ6of0SDtPVPB8LEgqQJuvqj8IrbFAms%2BUIlXPsajwjlcLJeg516TRSyhm5jFRA%2BAeVNvLnY%2BExWbyB6HaF6bXOZWzF6pnbPLJKCygeq%2Fa9loUSBOMjB2LlwO2ESqAV7Q07G8CiPWgfBMMKr0LiskpJ3plN%2BNYVClXHaKWtFsD8EBYEwylBuKqJAT%2F%2F8gjF0663BQFKxkxho3p16oYhqVyB5RX24leS63%2BEnBYk7CxkpQ0g2pKUWNdGbOPyvBiGuJaO4h5sng0zbI%2FyqUwi7Po8KRwotMNEiMAPDZ1Q3Anx6I1K5FWFLlZQ25A8raqsEDmKcts0TkVVFwVK3s3C9r1oA%2BHd52825jXHjPutZPerPiXmyzLWbHR%2BA3Xl%2FKLscavTGW5X4eAZBjot2om2eAnQcFsA%2BgcAD4Po5cXvhgqWDEbUoAuKvO7X0nCeo93xhn5yg%2Fqc2cld%2B%2BkkV2ULl40e6ymogWY%2B2XevGTNC2q29AhJHs5V5e0oo2TvNHCMfADvdx60D6smt%2FEuUJDCmvX9F%2FTXF6qdSMKA9I%2B8se6DbjDrwbXCBjqkAfRZ4eG14x0D2R7OO1PQqIgrcWAjjhtDRrwyT91UeXK2%2BIgWZyggCHnEV1qbo56%2Fj4mGY%2BpGzlEA2BGNS3kYA11zXjQaqoU%2FIhjrQlMj%2FRpdJsRtdF%2B6SGXaOAEj5o3mnss3ockx04VZrYRuusgSAccM0zCwSvQawnVA%2BiAbtDfP38uWX%2Bs7sNYuwatsxlXueR8nmfcykJDBL2%2F18HbKP97RXIvA&X-Amz-Signature=cff6304a4e29471b1670958ff36ab58e18e86b402839a3cae10dc4d9cf391533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPYZCCV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIB4P0ln3meyZ7suBqN0QcyuCMHToJfDIxaAc1%2FpR5w%2FaAiBY8zOAGqmezZcVpmTXnKd1s9O2%2B4IkqSCyLeGM1VAUnSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMPilRq4FKwUuMEM2WKtwDteqHe3X%2FMXq5pc8jLx4WNVZO1bSeYB2Sb3COrf9mFjDVoan6SSZxl5lhhPQ9AFkmqmQC6hBqhWaHMeeGDw%2FyWyq2Yylt3vltcUnnTALa0Ze7pDisdbEZEqsU1bRS6xC1O9M46vjpTJkRJ%2Bede1scVeOxsFOEnD7XXAUzzfA0Uwg5C90cpm1NkaPcLbyC8%2BAF5Zt7pMvQVAGa4GbcGaj%2BVEHmUk45A7CyUgzRAXVh5NmAc%2FKPgzbjFUa%2BIubzbkHK8%2ByEYXM%2BiHskCAhx1ApjNqBTcvTHeVcnbbNpoIe56VgEBYE9r7Do3frilvL1Bp2SX4cQfvJgvTMDglGdEF3ch1n%2B07ckAwAcgdmrda0NBFOX5WMsn0t3gP4zGMkZQDQyQSJeH05b%2FFD9ftQfTLMTdI3ZKe04LQNHL76l1GUXXP5tWrv1QPbVZX48UUGyac%2BP0mM%2FjZMA9VcDmQVL%2BEO5EEGlmn%2Fbbc0UpWinY0ewJr8HuiNssyoyAJvnqGCTjQHQ0pAAMETKLdyvkrZNbmkS5cNdZ5y0CTTz3tX8dQAZ8B7qMEwLunCFoyz4wz1aDm9gQA0%2BpKuI1PLlUzvCJDqaJQUojqaHdYNSk8h14vEaoPxhZDSVnQX2iVtVkbsw0MG1wgY6pgG0%2FAmchNTt505zsONt5Unhby%2F9kTZUJHOpW4XdEkaaq08DUNfOtueF45tbH0NVepk0HTXDj1cSiyhuYRomV7FxxInLGkshqDvOaBMEniidYYA7CD2d%2FRxk5kVvxDqixYV0nXpJzEMldiqHRZm8tEEXxxLFa7s0xmCapTHUiBdSgv40zEExuN3Uo7dURZ2T%2Bf3LmgxYMNnb85TzLueQrou1sCvuYmG7&X-Amz-Signature=969819b019e81fc6745c9d4e81a782eb261e9cec426b2752cc35cfe2b69c0d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
