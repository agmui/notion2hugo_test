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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDD54SN%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIEQil1mNB1GzmM9vmPj61ZSM%2BJn2s%2BB%2BxXCmJ9nNj%2FNSAiBbkPQ4FGkALZX7TPwAGysEiOJ%2FMOozKAVY3PEbGySgYSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZtVZzXUtFwXepw6FKtwDeAh2cGCEBmSUOEDBe%2B3c92%2BEMYfARop724TrOWm1yfaJc3tmYudrRo2HgbcmV54BoyF7Dh656PoA8O3kE2Zlfqji9rlWqCgCmI1Znb4TSGPPY3HB%2Fn9dQ%2FY70c%2B3aREPsSA9ALx5Nl8xcyf5XMxlqKUup8ayii8wqWcWw0NTxUQrmerGwhyenJbMf5msyhrmE5GLRKAdmsDugDaxOE0FKDmiTm4p9xG4sTH5bZ9ZsdbVB%2FVh6K4WCusoqYtSk0bNDmnKtxRqPOD9YyMF%2FqD1bVVmXnzqViPwfgprCB4DScqUuWl3w0Yca4niVZ3dD0ECtEpmt9Wc%2FweB4fvreUpZ8v6irLJ0iAF%2FMLXrk5iUgM91hEcnVULG2lj7MdfR6A0n5GqJw7vI%2FPw5ni2pi64MMC1w7iS3IyDxLyWdDSYMi8z5Na06wImrI4kgGFi1T%2FQgVf93oalNZTUzQXJl1KtZGZpxp5V44dSN1cO%2Bgk8%2FqchkWt82CXZBASiCQ1wIFzJbyi5zdjigANte%2F6KX2mvxPLb0HUOGAn2FAc4RZ75LyLEpfAa2ds3RHQ1aSlXoTCXBxpf3hJiVE9IRkgj94xiC3jYL0LtC15D7ntpVy9asIhUE4Lub7jLJobFV88Ewv7HgvwY6pgE8kcIpI2VgiLn77y7bngikZp4Ma%2FQou6gNAIdjjm0CeQTeEYhOY%2Big2Pio%2B1ho4tqpaX%2FhVHGPFuBTGf5ipJ3BrJXmVSmRibJ4A4GFqI%2F9z32HJoU%2BM7%2F6tll6QML%2B%2FtZT%2BV71GOqKzxbryXAy56TCze6pBFStO9NTnqkIMieWB553kpE1NF2OFnGEPG2v3TKF6t8OrKSzyv%2FLjS9LkSgXv%2BJqI%2FTv&X-Amz-Signature=8efad69df21c3074d512e5817723af01a90fcddd143573150b5ea51d07e4e675&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY4MYO5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCjAcp4xQUoK9%2Br4uqjwrxGvJk0Fp9xuKhCXFsz%2F9H%2BAgIgPDNHDj1BXl6DR8ZdBjNcq%2F4y4rMlKWCRPgzR5mKF1zQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4uFdDqGOkh%2BlluKSrcAyvC9BiN%2FQYTU48dOpcU1tN954cYSRVSzAOu%2Bx%2FScKbglapxpmtxv1ocMyJKt8e4Kmb%2FN4gpQlD89Pcstk2cW4WWrtYF%2Fmybi7%2FGc935kiqE%2F%2Bls0TX%2FPDkkeXGqVUK6Ohn06jqUQinHvICz8StDhtyovrnRc8W07JG4R28jn0jSLYYbAeQ4ggslBP8XJMPlDmUjJqjOY7aeB%2BtLAr02SiFtCuYtVfdz8VW5mGDn45M%2BFzGYsbpBOZildviXAMq7aHLqZ84Q03pC1u255tGVh7UcEbBNhyCgXbWmz%2BkpMOiRracyjslxzBkOFjB95%2BKSZT9BjTm%2BX6temdJqRmK9ubCobKooBNnrqUb7svlYrO4%2BknMslXd0RXWCUalGod681gYzmlVPQIg7JWGOdonxYmXFBvmH0m5fnmDV6ldlqsZoehDgu%2FRtYDgz9kVZv%2BI0k56FhhigibUMI1Z2us9HM6SeLNneBigI3dixhqgn7wqGCGuEW06iZ%2BSpfv2JNeXSiYNidrxcJBqICmh8BvDpThO1VpgT8Pp9nOKcIF5erbjwSGhZmTzEzprJlobLO9AEMtrwM3JmIRMu3fgAXINVxzAHYlPkEVViYNQjgWeTrbBAzfiLVzQP2g0eH9HeMKCx4L8GOqUBU7Lq1cZEpW2Tu%2F1GrxxqEFtdrkbnaH4Q6lzROSmuMkcsClutxEwtcTZfHvn%2FF0usaxF6ylo9FjW1vpVPJOV6b3D1B23AKVL3wbadb9JYEtOW0ADD0q75lL4sP8WyXgdjf0Qzu30FBm3YqE9QqUIdsgmS%2FHQxbf6bOs5Mq0VNQhGouOOJ5n16uHfpE5CWBnNWeQcibsEtVHh5ZR8Zi8qZzJrCVg4o&X-Amz-Signature=c1b3c2ea63bc58c7b3c8cc96edb303940defb1f3951947b3dddac10adc95f1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
