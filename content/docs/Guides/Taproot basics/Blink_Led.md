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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCUVJ3R%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCS4A8a68sFmkkyZF7wSfHd8VW4pC5ffJ1gT5pCOlrV3gIhAOuJmLcvxWz7ZXj2ddGUPxWrnmD5FNjNeobpEg9oyOC6Kv8DCEQQABoMNjM3NDIzMTgzODA1IgwD0FlETddEACEbpbsq3ANWDGtsV%2BHrL5B8oFHE51kodrcwRa0AmIk%2Btzrn%2B8QR8TODqiDiQyPVQ3TKSBkrE8MX4nvHJDSsF%2FRJGbCz5xwa%2BuEk9JlTguN9rQSml7sr2pyya%2F31uVjwX2sGdkRCOejihmXf5SwpuuzgGMcwhcKlgi3HUm1oo6mID2UnGcRiWFOcpgsUah6ATXM1f677yXplUp4cLO1x%2FjaELXixEqxcBnmrJykOg26V89LVzLNj0zWA6agIx48MG4b6DkjghpXpDgjf9UYeJ8E3ZlX5mACkARfH8aJ%2B3L9Rqu0VniAXQhpH4UaKQoMm021ESDtwRn6wI25i4Fs7UM0mGyybXo2xUg9bkFrN%2FV05DzdTRsTcono43c%2BUstuCEkMJwoqxs1vcTGWi8prFU2p34K2IGuFdr%2FsUEt91klMS3kuZXG6koSbikAOXYMVICaq9QyixxCE5wEx3ZZ56qnSXfVwxismsD2DWMisjna5yWVpVPnE9ewB2JAYItmhhOJ2m40yjyyVljZRxEjng7S%2Bsg7nbGIHMVA9SY6RoQtxTLGqYnKSm7tySMX19ql8Fn4Sk8MtvnW%2B2OChhV7oJsLxe%2FW6nT1VYl5ZhZxqRygULyRnTWQYBev3l60XDwX9DtJZivDDFpsLEBjqkAfU8v3IL4XnnqTinu8uFpCzd1gockCLlmzZcIx%2F6CCePuPZDk%2FJI7I5BXMXy1qmC9V0EbZT6rLvRabz6w7jylDte8VcG4KA0FLtQPXSSGGT9c87ub%2BPh5yX%2FueIgVtGe0sWOn9n620balGSRg0KrVAEhXzJfKhVQ%2FfM2CTps0Gh8prqszuW85QaI7PUKUtaDI7eYjXg0aFT0wGnLtTsDYH3hCF2e&X-Amz-Signature=5555d31bf2a31a55bea7a10f5e219750010cedeff311f72d729c45201a01a8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3H6EMRU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCID53ED%2ByWLggHlb7xk7tN%2BKgBU%2Fr7cd6Ii7jjpkn8JG2AiEAxaZXnVM2dtCI%2FXAsD2eUFX3izfeEtcw21GE5EqnfA0Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDE0M6arZmxhiekh7YSrcA6xA56I1M77Z2d8lwo%2BhoK8wdRb8G4f%2B6uCOf%2Fmzqr6JkhIaO84n8ic6BY3W2BOnjlZE1Oin9NBqf7bkvWCiFqRFBTH8x8Uk6ATE2edNzj7WA86exgaJutEk%2BBgypHeDbO7Jq1AoenQu0B7HJyn%2B4xBrawSg0vrVwWoEqaIuMpZtZyAngIeEfTd2jTOo3J3Qbb49B%2FGG7SfH2LexJVjVPM6mOv2O00mi1y%2FHpaYH8KMhDY9oVs9ZpXWA%2FxXX3Ug1bFPkto%2B%2BdE8V0QNOHLdZ15fJAq9cHZZvMDf7LOtUR6w2PqDMDP7e%2FsUDNfRamRbq20%2BNl3f%2B9bh0mWuYckyeVWy7oBkNnJZw5LhgOiHaK2YkTD29NrZZUov%2BCdry7zNhCdTX1iaaBdyUtadvKnRmybMRNvvuOhqMUbOmB%2Fk7IfonncTRhGkC3sYHj5nDS5Xie1Ey88w1XPgY4JNn6mBwmgvj0DdpiTEglFO%2BayAqRc3TtbyRiYficHssOBOu1RKFzT1Zdd1cNGLPgMF5aAoBOWF53xM3WQbT9eMap3ZN0AWeki%2Fw1LN14J3KmXEopiL4AQZkWqdHERALEL3kpmbc1qyh%2FcCDEI7fHIPXz6kzbLkhW49RrlhFdfI820cFMLamwsQGOqUBKb6%2FOhJ6Aty2azJlSFKy3JmCmjVyE%2BPmsWCc9mTDzTgqxsteNwvSwKGS80uYYQRc%2F4iBUrcACQvw6u6xGek3SK3Q6E9BgrIYjJo7dmNQUyegeK%2BhcVpfuRnVANK8k4B0Z4riUxO6sSIoAttx6WHHIQ80z%2BW3Zd7x01DRijOQCHpDlLh%2B3yOJwmHVBSP5RMZVr8LedGBAl%2BaBWrWPmFpCHItSdz4S&X-Amz-Signature=18b27940f6acca2db783696f02d968b512140f6948f410f4374d9b64d09629d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
