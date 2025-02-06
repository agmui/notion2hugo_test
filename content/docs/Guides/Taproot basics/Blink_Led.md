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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYXUX6AZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDgCTOtfje7Tu54s5aPUPNjd8kCuT191aSwS7vfLIWyWAIgTfYzCWSoxm7zde4v1xWYfRyTuoulC%2FyfQKrrCScRgyMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDH568rQEtFn30Rg6wyrcA5fe%2BBnN0vxC3LIM%2FlLj%2BZW4ASFVh5zAQEil6ezrApdcQovVNYYDZ%2BXenK%2BBGmL2zuVBreLPrNELp9c9PJoicnmtCmS0H6h3kDeoTgQulLf4LL2oOeczSZolBDCC1ffKaFHzhwf8tS9jbL5odNKNC4b0g9lYb06jCuoS2mrzaPuY6ohVjzS02KDsPNGpik6MxAhM0IkG8tBmSjnotXbueROS29kEhOZu0fRLT8yOqhw0QvwyBXoltQCeT3ZMnLt3FOKbEBHX0eh5wcy7dvcAQj2j4xIFsNFK0ql4Th589roR1TrhylyEiF3ybYvG6dOUbUjdMBgLoQ6beaB%2F9LW4Pz4fL3k6HasvoIulzcYWoakLAVoauCCOvHroG0MuINcJnSP8TIod%2F8TfWV2lkOc6k6mwTkgf7BM6vlicN3Hd33aq9KA3hpNTY9FybjE2b88dIOmBM3SFxAa1mbVTqOi%2BzXJLUhP3BdjpH0tzcx9kYGDeu%2BHFyx3JsUze0VX1j1Erz2EJE222AuogdYeMVZZJQcNpDVgHNYD8oFLpZ%2Beez8Xb3hKJ9eOf0qB6k2d7snRKvPHS29wMxB%2BE6M9QZU0OWSabipYko%2BMnoFtzhIwmiT2HXSINH2THbnOQ%2B21JMND9k70GOqUBVkrngd69dfx1fpVXOfs1DOphKL3rMRtJoWysrBlz4zg4DgSW%2FsEetYEyqP1q7jAB7d8a2UW51EVfSC%2Fjd0D3gET%2BB3s8zeez9GRUWteru2nMMAcsHSAMT96FfChS9VJaz5dDI0OsgF7kea9VebSeBERz8ag7FOsDREWm1I1Cf6TH8RtG2OmvE6g01ecut5Rjp1ctdKRp6T451cIFweonptyaxEEk&X-Amz-Signature=d6c0ecaf934dd42590ff7f2ea0d7949cf2aa12b36dfa14c86dbe7e84d5ed5075&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXQO4IT%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFNo9yR9iqdctXTIMQXv%2Bewz3aiPWFXBevh1KbpZu%2BRhAiEAoW6Q4YjhCfVBQLxdb1Xm7ruoCH2pJPMOVz3QpZK%2F3OQq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMTwfHPsBHws6JWQZCrcAxbcICmEMLRuAFCMSSJ%2FPCgClK0iPoe86YhlVtAmpd2p5OEsFi2S3TLIfqZeAxSPkZ1egy3gBnKtfXQ9RYwpAKf9Hz4GgpR4AVIIoYrtdM4rnY%2FTqEmv7Oz9FdW8UixixrDNvqLOi57Dpo%2Bn52sb4vRkppuLdg4VPumljPKaMZkmC22dW7s6dJJ84ih1LF5vONY%2Fk%2BDubav4cB67dU%2FyQkKed9dWjp7Iu4oYYC8l%2FI%2Fb%2F6bCCSXU82Whp3mSr3nKEbytUpNabs9oVQ61dpV7LBf6z950wb1dgZXMKquIaaH8gS%2Fw0sIZlVjcCLWNUekrxqpU0eVrObdP%2FPZeYOKEzDjFILAPOUY1X7gfR6f37Be696VSjx1E%2FLpBxxNHMaMgy8ooAY81KrCrPvyvKObyanCHwS3O9fVfCbTMQo66M1RCxt%2FtOZdVKTx7bzJxFwOiYx13yjtLLwyhXDr5nuKG3%2FtO%2B454I1WbfqqVMUjQguryIuFC%2Fk%2FO2uKCIJbqDuIWLkgsnQB%2B5wW2GvtX%2Bl08tKjP6uto94qDOsCJFSf3HFcq11kjNzo93TohJ6%2BTSEMs2Oj2%2Bjt4o8v4FOt7l6vZlSMAlw6QvEU5Qy%2BfojzEpHMBBnnAcCydKjMQlEHgMJD9k70GOqUB8VTSVOUKksJFEBgYzBFDta1Uk8A43PGBbN8IBSlBBu3a9UDu0xgGDZEBkrruIbewa5J3q8briamCrbROSQCixlxtd6RvA2%2BaFjlJyf9dfVOgDrTqMwlmWkinm1tzgcvQXuEx6jjSrLIrsJNv76wPAJG59i4hoBeNT1AE4WOgXwnwCCRdcL8hHNad8p0%2BA11T0leXTJQwSYZx0415mQHHB1EnfjxN&X-Amz-Signature=63a53b450ce03c74b27d0cb6849dee3b174914f5f35a9e2460882d35ca5a0e08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
