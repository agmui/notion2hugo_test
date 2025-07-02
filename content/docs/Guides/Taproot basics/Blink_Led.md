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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VB52AYG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANNT5jlsyoXOVempXdvwmZAiC4BYU%2Beb79oEO2wk71wAiEA9MoaAzE%2FcEMgm4vTgi3PH3piDwGJb35fuvfb%2ByquMHMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMolUhWc7rmPShACcCrcA9i2oJgKKSRD1WU0%2Fpl%2B6lc9Iq47HEjBee9BFxnJ%2BBgeybf1SBhd36rzwIvAGSQESCmyGyo9jtGJFCz77poSWB8hkMaYre%2FNnR2i7K%2BIWmXMi%2FzB02%2BX%2BYdnhCzgt%2B%2FBqS4QfuHUIowfkiBju%2Bvedf6AzKNm4fmXtGlVvIeexqhfFAqulldgAUT3CHgXQ%2BuQFeMGZtpQTrD%2F25u21ETDZSJeQShhDj4384TwnFzjtiHB1ptvKVxEVZB5HtgqwVMetVS5j%2FX5yA6SGu6lP3ou0ZtoFaS%2FFJxJTzesk3aH1Kw2sX5kLH1jcdghRE9aGTu2jYoc577pRXf%2Bv%2FY%2BNRCP0J7uVvgGiocMgX8rTus1rm3Gc7vMtU9T8QP0wqXsJNnfc9wI334mQkvT94E7Ax6u%2F6VmW%2BPquGX2gwq4S13JUbmOp6%2Foiy6a7VANF93HHiOhI5jVjcmFWQsnn5KmSOhi4BdSoNy0kHLbFTpvlelelp0cvKj140B4yHfzlrhPLu7x2lkzfnHvNdP1g%2BvRVX1BVxhwBcI6puRjdb4lrtQn3a4nn76mK743kz8cLoTBccE7772W6ydhy3Pd6JL5ofX7VByO3BOuasBxDi42iPYGBPLLspuTdW6sdEc1asZlMLmUlMMGOqUB20e4L1fsARhE0pfaahArwSP4jokAWPxq8oCjhjpqYHVRKF523RMdtTdZIH3LK9GZumfjCgAtfo0Bxy%2BnIUz%2FtlbMh049AUYnfVKMsjEhLrZPruaAkFjrJKzBCiOoPbe%2Fci158zM5iL0g2nGcALsuO2DLtvUjNSUL2v%2BanN1rLW7h1ZH6OTxUXtMbsfj0pByemK8m%2FEDwTjXE3GjUMvpIHyPaYQYr&X-Amz-Signature=915b699447a0bbbf3ef98637692cbc1fbbf0da6cbc1de711bac39d66b1ac14d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4JHAT6V%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8frh2sv9YYB2pZuACjmFJMH4Yi%2Fe0ckEUrfnEE1TwIAiEApqJB%2FY1X8J9we0%2Fdlw5Hk%2FIekMbnJVx4yfgcLPepB9EqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B%2FGajse2LNEd7OOircA2febqzCLy6P7oDzQ9BntlGUDeUbXXXQr%2FKESyvo0NAtW9IBVYVVPiPgMoujEytSQzPC0F0jmFuZ4hxe0Wx1gEi%2FrCDwsk2vtYiBTbnvAss%2FDzMLlb%2FUehhbT6MyZlhLnDiEWNAu12NXIKLXQSbLyJTBo063BKHIVWF%2FIxATmkm8IF7XxqXiPKrVT1UMVwf65U40Dx5%2B8a2gbxpbaCddNbE6lkL2qsj5SVB8qdtAMqTjSAFYocz%2BIRABpTwB2v%2BCjf4e2PHwhwRI7woeFLSNCBI7C4pdk%2BMngTTXEWmcWjp2Z7iI%2BmHCpWhBoDkFQbQLT7QJ2cfvhtVavJlnBx6D6DCH1ZwqbW0%2F1j0LO78%2BiT%2BSCZg2hqC3k5HRjDCwT4R8DW1pvP84%2F%2F2rZWPMSAtBOjCJh8eWTnloFJEiy2rfCeqMfpNqaKAyJHOL3FKyRkmT34KhhCWAZa3JZ8SGVVxSrgwSmnyYCgRI4lcS49k%2BeUMTpWthGUj5%2BT36OtUSmxtUVf8ZLYV8Jh3OfykLORhT2ydWeokpxrxjos6B816Hp2gIN8XGDb9ndG1Xjy0Ffz66BTq2ZY9mhjsKU6%2B97efJZ4wNb5EuzakLTJmvsOqDKzgLFjzHVG4PQcjzM0OlMKWTlMMGOqUBAPZx6RBIq6Kg6aVbzjIrvn%2B6EpxSKSWQwRoPEifvcoVsMn%2FHMG2uqLtE2lxGbHqwOlpgVBRgF3p10ZbWmoG08uJLc4KBNyc4l4FYq3bgQIgbriQsCU968GZKTC9sIITmm2NnBKO2oHbJM3uQ9U2nI1pcYl7P30QA8DLkuPzYfibUflrFaKteTGKZ42kL6Zr%2BkljdPiFZvJn289AmBWRHKhDMVRLe&X-Amz-Signature=ac8be8647dbbe743f5e7f9eb2818dfccd0b59694f688a0c95da07651d49a3d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
