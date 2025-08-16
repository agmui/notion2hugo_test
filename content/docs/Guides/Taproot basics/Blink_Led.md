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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6EX4XGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDUn2iu2krjzk12s%2FGaP%2BsGJvrz6PnWmvTR25iuOMgmaQIgfpUOYzAunaZRRbbbHsjJB5vDso5eBn8Lb7hdzWiFwVIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAXvZpz6bkSgPZYAjCrcA0Am3Vyv%2FWqD4owIeLOynkJagrh7fHyJxYCFRPiL5eambV%2B26IMvGkNGGpJgLa5gx2CtbiwWS2kdWZQ%2FcPJTCqJha0n1Oxvd4wiksHYYaqubdMPI2OJp1GFBGEtNib6G3lnCJ9D0ID5AY7UK5Fk6FADbVMkXpHCNwQnYGwesnXmor4d5KS08lgDZXyOwTGpTqB3USWE8PH2NGz7mlC%2Fy%2FbE07B%2FfkoYBnGxpKGnz8gq98iz7lyykU0oRTx0TX22PZvd4Xo5gwJJmgmQHmXOKKCvcdM%2FVh7bnAgf7Bg%2Fa8CzDQPGuGwZJqLr%2FTuCkI0rErBXk%2Fvt6tpybpYR857UgNYRRUqnGcwGLtcYqu8mMxUtcpSe5W30fPeCJHDUBdZqw6J0FE50UYqjtbra%2F0M8YhZQIQYwswOAH2YG2cwz3N3EYgrfGnmtPNbpNguqsMfGFFzc2vYdEZJvbjGugisDfg2QxFYh44MW89VTr6QOay%2Bno%2FUCel9hwFZVmKj4pjBSGOKAnBM5knvKTpmi8yd%2BvFvgoKDAmumH6TtQr3srceRS6KlZ0gGHXcmJ4f%2FEAs8oUkox%2B63qmINn%2FFv1VrKziSdc6wAEgPimF3N1Cfiitf%2FcH3IUgpnEineugjEp%2BMMiagsUGOqUBSowDQ68zLtuw3HC707v542VNdAZ3tT7Y781BhG4fXdgiw8A7D4aQHlUPFxBzn9iyeADuDEXffHBEy8DWDy0g%2FbYCrEdXhTkPb9Osu9NrJBSfvEXe%2Fy09DGLg63lyF4qai8bkauRIzzpoKlR%2B7pSU0ZvL1Nf29UgzuOcm8By%2FrA8p6nLAGfOdXJjbX6bo3ksPIuyaXTiDWP6a8SRwycCGQKkTKRoY&X-Amz-Signature=089699a6a1a976cd3a4385a105d3b179f1a6774aeaec59e5255b5591b1bddf1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65KL3U3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDDBPoZpbxLVhDrNim9UFtEXYNTxaHc8hz4RKTE78s%2FhwIgeglykT0kEXeKPejzCdtlnrz7jUhpvBrC9uVx8m1qFTMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPozQC%2B1SIvIXyV23CrcA0vJK5QtkbYpG9af7zJpnJFO96Np5G7dSLb%2BNzNI%2BDzYkGjbI1%2F9ZTQBudF5yNHEzYfinFibanC7%2Bud9nLALmjJVZfCaQ1pRBjQzX5OPdJsleDmYKEwnfvKvNne8W7Kk1Y8PFYPe9ChP%2FhGj38cUFcxg7fcobdyqQY%2FfGprWpce0D%2FKADW%2BnPxzXm%2BTZpGLKtAqfkXfXIzxxx%2FGLUqYkyAjvuAoYg0WluzAs3FLTggaGikNprtWaf3N71Eg0kPAmgSVSKF9mdJf6UHkFHH7KUxYM3%2BZqHPoMCP4mP8Rim1NGSxz3VTfsPjB%2B4WmJCDk9jQPfBYpDBF5jPl97WCV%2BEFgJGFTzlUjtxDJ3eKrnLRfgQlVJyR4dP5JiH7PIYYzjpEt697mD9DnmA0Ypmfmb%2F6O9Nt5b%2FrJx0YG4Jn3QZGZfSk%2FFZBpgM7ePF6yi15qkScvrEDARf4YtxyIbERX%2B%2BlZNMSSlHBnZlVCX7hmjnritjMV31QBhjMeJqyPy2Ycz92QnJSg%2BrIhhTatE1t7GNSBc%2FXuTi%2FbZtLbbknhtmRh0ZHjB4XLFipHn17MxqQ3cc%2B2wSKEAlEBKg%2BaN6rWcAmKAzVJp2JJd%2FJCOdaKeiaHb4%2BdEYAxUJrlhQzUhMOyagsUGOqUB8lnEZ7dQ%2BSgapfcWu8I%2FEhQ1tNpFApC7Pu0w0p8yjjaO5UVgTRkzOuXf0Ck1ibbVtzp9X5E4k3AZMG6dHDZy3HUUaiHz7D4%2Bc06fMmLZy6BMfs564%2FTTPYRbBOFM7EG4jXXZaU1DIOrlMZvrhPQfQwAZAH9Y1axIY%2BLURYQCNXAS9dgRnNsYST%2BGdV1ezJ%2FLFcStxnQH9cJ6o%2BazC5O3oeYh8Lo2&X-Amz-Signature=966819bf9609eb87028f1a22b11641eec1951361a1eeba0bf4fb87eee2051019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
