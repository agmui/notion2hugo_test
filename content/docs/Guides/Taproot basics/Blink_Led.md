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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A5QZ35D%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHGloloHlLM%2FeGJLukX6B%2B6T5jh5ewQkkssAnZ0Ohbj1AiBWlftRTUVoL%2BLUMBUO%2BPo1qHYRCrk9nT5VsBgWOAB0ICqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNIh772tHskeiOpmKtwDDGLkM4w%2FKl%2BBpCQ2%2BYpeF5Zq%2FiBkXKiPuQURRxolSFzOtsasLb3PWnrBsnKj18fiaS7G9hfsSkZSl13GbfKV4bUeF7F0lWeLmFcHPp3DgWlaMaiBw1DsiRZYHQb2lqtrYNoY2MON%2BO%2Fm6MVOUUtbG8RCJc0Lrr%2FO1tA%2BGWC%2BLyDxQPdqXbvkqLExsaRDaaIQ6RJUWKqui77cwb9KFZzGjhDhzBa6dFyuKn%2BdXQiqG5hVYBnj8UpfVEjsArUqY%2Bg2INbRh90rDsfj1Ag5cSR0%2BhkGUNSsK1NLwhSpfbgxBvCmsxfg6w%2BM7HKXQW4OM6zJn8USLuIVMiVUnSnVeL%2FmkCmoK5RrZwrDwRipNfQcCp9nJ0jFk2kFvc7AU3ROIq1dwVhwbO2l8NQYvukislUeYp9wzc%2FCtMikjQTKIGZFzk%2BDwZa9VDa%2Fp6cpO5%2F0hjWvolg663%2FoXYafRxA1Hlkjp8nKo7w1QJMjLq2HoBTB7aD1XCRI9OLuxMkwtXAmv5RHtR2sVJfiozfKcOOCcQcEI9nzyveB0Vz0YUha573CtkUQ7g8Tf8R5ejJe4eUVGlwQBS49B15%2FHXJecNHokksqWVWiGjgZ1G5SFQyWcwFmg5YYrPSj%2BD1LBcXO8Skwl4SywwY6pgG%2F3YVn40wzfL87C6SNbYQW1phav7rRdakCH4EKndfJ0BXI8Rz4mVXa0Za9HQasLrs53Ly%2BebP9%2F5CpdyraQaoARGdd0M6UQIaUCztiWXlPlP8r3qO%2Fapuu7yqKblK0C2%2FezXc9FtbCDKwF%2FiyoK5pOCNIR9LoseEenhxeJrGexvcw3bgKBsh7X%2Bv8IpAL6O7ZJz94S57oVTLU9hCgzPfk7AjdGxEP5&X-Amz-Signature=239b945569423237a9ace862e9ac83af3dd3558451ebd365ed2cc7d73e9bbcea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SMGCEL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDbu%2BileSc%2BNpXOdEPhCBVRctmbOs8nvmj0V4%2FpDSW%2F3AIhAJWTgQAOJbMjgiRw8%2FRcdQygTTnRaVuAvZKLg6HakRKdKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx8absnjGOP782QQYq3ANTz279SsKb1MTcRWZ73EfPON14FxMePcoT%2BgtY7mH%2FkvKlgrkX3GX0n5%2Bxbr5E5xxG3iBwEzV0xT1CFmYrD8B3gwSuru%2BJhZQ611nHhpnk5mUrBrUb1Aang%2BXgLkdNtpxZ75BmwI0rNOZA6FnrQYgh5c%2BeGtJuQNbgdimAYc4DQtyribwgO3aYCOt3fbxTeBIHW8YFDGPrQE9G70YU72K6KqUEKf6%2F3lTy7vCzMLhhRXvtpY0hxJgdQi899yabLo9Ly5nSqFSEO3wj6QMo6JGKwx%2BrnIhd4ezDDCcM5oppRTiIVsNEdEl7Bki27FZRRM8RDALuahUlfUjQ4HjDPvHSmP%2FaEqaHFbnY41MkB%2BRt14bM9hcQ3Q7XP7qEp5nupt%2FS2G24lw4mrlA30aPGsTEX0MAEIdbKrRkcc2bA%2BZ8oQs2qNxsAInnz3%2FyUzucA76SBPNWtlkjYKjWagAreb6toWO8GDfaqmwBQBATtYK95XFzcObGhP%2F7q%2FP6FCjr8ih626afqwpG7iO3ywF1UBUUBeyx2v12Kl5DTBp8zq5bFgLA%2BGvs5qu3bu61tYyBHseas4VZPtq3wk89S%2FIaMAfO%2FhSoFgeCH2cAsdGTRgleqSzDIo5wMvWpV0cy%2BXDCVhLLDBjqkAU3REuwAYU9w52ENtyU50oGOpbwNJGqkUXDycvd5HAGdIb%2BziyGM8qCZPg0%2FF%2FHNUa7LbfqItuzRNCAKtzvn6hQ5I2ofcoFTMEQsuN8ziaUT5JtIFGLXfRJvFKSr8AGrNjtI0%2BD4MijiZSS89woaafv0srupqTl0LyS80lx2XKN6yMnQNUH0r76XPmwWD%2BJC5tlOC06S0yulnHXonoiuTkl31irR&X-Amz-Signature=a538d065847cffa586e6cd2c1015e4f0b3a4ffe7b9bbebc09450a9b451e65135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
