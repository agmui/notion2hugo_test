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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DORSAMV%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCOAb47S%2FCq%2BMx2TpaE2HLs5pCEbUNDq2VAr7wZCdlItwIgTUZly%2F1uW4Vx8mxEqEGPACj1VvDP38st9PrAsLeStioqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL94LyujoHILrk8qVCrcAxogs4FquKiSgYoBUA%2FYpSQzmeaMSTG1wTPb5UOgJO2YdGJ0jrrdcDghSLtILoyUg9dNJNA1Va1hnCSC1crWAF8h8NO2sfJl5sJYimM7TKOjWw0HVbpQEHOYKUz8PkdKhBSjbOCNmYQHH%2BMzeyLJiyOWoHBB%2BRdtZNSiBakXOoEBFc8LMExebJteWSL6jYQLMc%2B7xkQgHMWxArYt15ZMBJK1dCKeMoCk3%2FNRJVR3mB4TJP2V7so7W%2F8hkpRxLu3l41OuecpINwOtOx2E2%2Ba9oOyC5pmAIV8YOLRHN40mtFmDURymU0Qx3nNh3dVwFk3IyfpAvR3Irmt49oWa4m0G8hoyr6JNvADEc%2B%2Bq0TLypY6sb%2F1ueiYdZ1TZzVQ4UsaG13A8UMn0UAeZQFOG5gutMYoS53TCs5VYRvF69wxWR7OxJM31HEF3n9tDxOwHudIaxg6Yea9JFuswNLVW2sfBTE%2BIfJa4inHZ%2FHl3wKhmVk7%2FFJ5OiSTPVR5QTTzeStcw%2FfLPzpjiAYAeMu7lplqfVwaa4pEhBxfqG5OF%2F3MlZC9c7uyZ2paIaiAihCJGdviTSFVOKEWfRhbm8shEmtJVu6sjPNVG3fK68hstKK3XxAtQOEMWKS8EBJeC51MHMJbCncAGOqUBkqZqcpXJ0cqdZsoAwJIKQzdP%2ByqjEwf6gNecSnns4az%2B5CNEjJ2hGnjSOU4VbYkOApE%2BYATCH2uCUZF6rbSW7Rg92uPQk%2BNYRHpZDMo0YJ9aO%2BGC1X6iGhLqmXGeexmwOklOrrB0GmjaJAyZDqoLRid7FApAK8vebujZrNZnCe6NG5w72zYCJ5iAK3N%2FMJiGo%2FCy0yZipXK%2Fgf23lTMEUOV7Yqbh&X-Amz-Signature=576a53ead30abaf34c1430c63d2951b8d97658d4989660e9d59b2a47351bef5a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466373GLVBD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIE0fYgcD608Fxgs6WKq3FqZ0XbuhEOHtAqaSTle1VfhsAiEAgguwNb5lXl%2BlP2b%2FDo17JoDA5xiSvcGcsvoDNq2n4noqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFldd1hpKUC3vxmAgyrcA4VET%2FA%2Ba0AQrkfx6q4Al8ggKD4oDxwbBujdNuOUwfS6za3xXBxsQSPSDp0xbcix2IdTlk5zS%2B%2B29gkuRtUQIg%2F%2BgjYs2hUiUHd%2B8kF6KhyoEEr70m11hEwF47H3hLOEM2mrKTCw5V70837zd1a%2BAGhj%2F5kBMqP4CKia%2BYUAKFm1TaXo8sFnqtik6XlJn88MwC0xd45iXDBt1BnA7uQtpJNSjhmfZLbhvPoLnoo7zeUrOvWc9B30e2JW9MutOvzsTPpQ2eGwsA4%2FP5JOEKRB4dFhCpLILyPeDG%2FIGKsz3A6pw28qQPAf8X3lQMZvWvmDn8qnMDUyOlVzwANwEnKCwYlan5tAoOAcaa22ZnEl4bmK%2FZwx6%2Bgrm1faCPwRGzXdVvwDn00BpAQ7XEF9UfMXgZr0xa96k8er3Y3xdWKDgFad9TW1wUPeqQh0MdFfJesnVX039%2B0SaptIidiVFZyvG9Um%2Fq1BBD%2BiwKoC4CVVwZOjy2ecb4BOq95oyuW79zhNjc%2F8wcb874RMzhOZsvtbwMmKfohhwiANTPUfRny1EFKU%2FN3F3mC5aZZ79wzO6sknBs1M6cR4uZwV%2FPtP3jStk%2BXQ3MMmQmO4fJRopSnlrEyfpIkbRf19DjhtebY6MNnCncAGOqUB9WLLbfzUZqfwlXzBcl1x9vhkq4lkxg11SEvFiyAZanb1nS3b7e1evGZXPOd759cisj8HQs6HGj4NEjTO%2B7KHfsp1Tc7U00iMWTq16Fm8bGdV5HDXZTauBRcmf6OcUuihZ45%2B3A%2FZaLznE8%2Byy9qjQOA1oBtR642Livgu5CHzeQ9UVIdQwldu4MsF%2F2QR4GosoWbV8aPbG0MTKvJySATM6xD0YnFs&X-Amz-Signature=b991d32879be9ab69b42e68c62fefd93f2d3c211fc7a08d6aa0952e0ed3a2d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
