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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q43CNENN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGwG%2BDhCwOQi53ejqPVsprSH4lVMltc%2Bd%2FN0auvpH7NAiEA2HPZX3VITN0NxctW0fSiXreIiMuLjADPfkjt%2BLiSH2Yq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDA3XwM1j9gPZ%2B9AwcyrcA24wVZAln5B7Zx%2BxnBvh2bczVUgv0SOrUb5E9JKhZBm22y0KBgw2XqOE28lNa5VW6c0yh%2FPkxO3pyIiOv2PG1ETRTFR0M%2Fz7W1gkOvo%2BFlgjvNkosMUErrY5zAhP2umgo3t80lW%2F7to3iger5nB%2BtITAqMwfHxx1Lw5yuQIWYiydxCRoOqIwtZeXkupER5%2F6mosgFcrGHiJt9jKjpII0XktgiaBm0NXnJM58rNOyITcDiGj2EV%2B0kjN22tLlpOZpZcPrDdizSDwVHNuAp9jahC2m6Auy3qCLEjnCqHXpu3ovO%2BdDIvChkgcgS%2BXzU81Oz2jh2zZh4XXZoWEJ0pOyFb6%2F4j8u%2B1BW9FUZrftQnyoOovTNnqYsENOt3GH5rPCzFQ4QwPAEuimgCoiRdLCQ2uapPGMS2%2FEoNLYm35F4ainxNLlFbKZwmaC6OmvUDg5IrFyu6uouhwsDvsmcxcUkH6gAC45t5whM7apR1NFSY8keS%2BJwD8BRUZ1u26RuYt70w6tl%2FwIBatFS4y%2FWLnjJ%2FFE1NOCFPpnotE8%2BGwop8sxCPG8Q%2BFKb1AATn5m2xfFjwxEAyISbjakCYgV78KHIZMyHFR3WrImJmSVADVegVbxV%2BdrGH14PzEjUZ%2FWKMJ%2FZ2r4GOqUBKU%2BgtdEZMUvvMPoehpiJlr4ZU6zfIzax3blUGt5PSHtptA9uwOVljw4m2%2Fl6YnaMMUiEkA3ojB0fpKsDk6axEJbpRxP3Sn8xA0oEuy8XNI3MI6nwoR060MQneRgjElh2RYwMRiVo6383v%2BrXRGPY%2F5T2RLFvmajb9TQafkxbxiDu5P7ZefBmEhoatibCajBBkKgoFt8TNfpWOxcXSC1UzctGZkmv&X-Amz-Signature=b97e916870173d6a128f22d5768bf08c21d0beb5c059b1fc508ccd9cf5942b57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQNMHIS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0nAIBwcugZZxpyIG995QijF9w97Nj5IU00Lpuq5jEcgIhAPNXHJ4Ns33hCjKtcNqQ5xG9C7w1IBPxLkmdGQCojbOWKv8DCCwQABoMNjM3NDIzMTgzODA1IgwUbymBsPsh3mWgrAIq3ANmOxfLRJfsJqff9A%2Fs4FRy9QbRzWbZmBdbBfIiSGP7LRiNaHDe9qTbtc9GgU%2BBv3BbmIwWqtBvAIzTVQAPWcUgocTqA%2FxAh0UKLx%2BKRX4SxiWfRr2vqFhE70fcFNPW45A9vGlmONmjYBlCmXiWNQEzbtF4NhWjTxXP8h5iFNB%2B7Uu3vSs4LIHPKMFwu%2BRUEmgDc08pk3WNtpauYb2zSAm3FY57NEmlpwcrsvfr39VhHnoMZXf4wOYHJDEURsgvGcK2UiJB5IExvSjQj12Jq83Qss9JNTQmpXVpi9u4uLLzizqY3mjzlfdCvZyiaLg3wdDy%2FvPcdvUyBTyn%2BWc2jIph4u2Nj%2FzbcxP%2B7pzNoPuTODVJgSIbjoLQPfk9ctajl6JKQ2mgjZlwjtLAPvbgz%2FVi2ijR456Q8mZ9xqhQKTR4Rh3Jc8RffUkEvcDLrewFB1fqlPhxyCcPczk1vPeoQtHOoJ2SX9hAQAyGEZYfmVjUAh%2FP3mK0I%2B%2F6qQcZ0o983P9QFmLafUKDMtgYHZd2ZLHqYqt4X7Ai9unNEf4CNJ9xEFBaduJlKrHGh5TxeVP3gPy7JwaZF0xrolC%2Bg7bGnMedXihNKHenY%2FNt%2F18Mcz0A5ehA2lALAl1R1Ho%2F3zD92Nq%2BBjqkATsgkLZo8iLvV2Kk%2FsO3UZEKesnogEc2U89GyN3iHj16cNr0B4WB%2BNVE0vh03buOdWyWe%2F%2Bn5X%2BXamW83BKR4RaXFcmyBlgtXBgq9GmeCG2xQ41huyg4XPO6X5sa2NDTk027OM8UsyNw30v%2FXJNwTqDcSEtZr6YbHRxgcDgDV9x%2BpqsjalTsPVWimiIRq29QTqtq8yfm8aPbdt%2BdyrF7FFGi%2FAMH&X-Amz-Signature=d5052a67aa2f8381aae34c1c3ca950d3868c39932e42618ee61f3539f44ecb42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
