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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPU2K4BZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG58UocQqWXDq1yHuzXENMiOGA43idwPkTEkPAvj7tawAiBMDliSvUEjd079CsgnvawFTrtihCVFNQFfP27f33UllyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2Fsc9TCA8M6%2FTQTpKtwDnYftUpwqTQ8SJS5sBgnvNW5fanPHmmrne4YsXpJhz6TS88Kpgb1I%2BYtILJRVJxAwyi54baxuKXBE2uJiRXiJ7laUQlTwiGWcKmjfPZwSVoHcEIYvIwZwnTQMuwfQviR43iWE511YOaS3nzugcFHREKroCx5jediACQsaDpgPTdJU%2F4BRlf2%2FPVAOHXuv7icdz7gVwgC%2BE%2FBbXNReQ8KY4Srv469cG8ParegDft0e6nbkSZLDy14o9gUBZocHM%2B36oDEis%2BOH34wrbDBsPp88RZlLhUk5UuD7CR3Dp%2FLgJRSkZFUOGA5N%2F4Z%2FZlsGznp5dIwCQVNW7VLtVpfvYLcQpLQpiRAXQQaR8kC5wVg79hVLNPWzznjOYwhx2aZiSSrfNfQI0MK0ElZeka62xZ5hTeNuahGaIfUx5ZDvyLxB%2Bj%2BJok0iaQ9pFyz8MExZXMku957R6HYUT9pLwkzBDc2WUu9%2BsHcHSGQRvLPd43179GGj7lJ6A04uUgsZEH1%2Fo2s4evlofKj2ZejRzUGvQyOj%2BKTzYnnNe7EiPnVZkbmUPZoD4bP7sYR%2FN5%2FpFxftD2TDHMXkhtP%2BTSnc9fMWAIcIxLrczbsoZx9vxaU2P1RNaXxxBPIgqCDpymPHu94wzoWjvQY6pgHfhR2iAaP%2FgZHyKrbl%2B0ABd2Qml4F8gctBeVgxh1aNP1t2cIlLdNC2y13c%2FY540dk6FemNX2teE%2B5S7UJi7Tgu01YAEIKjxvrim4eynIJyTlNpM3d4DLTfPDBHl%2FFHkuUDWNB0nGb4pHQVtQhOdVubieju7iGWsX2DL%2FnNBMhVJEgkXZ92OY3hfarKM0JvYgTkYhkpBDGeoipsYrTZ93i%2BhgdUWuRL&X-Amz-Signature=157063c0c2a8402e76f2c63b398f804973ae6a96db7d5f59ff40af7ef9b6b76f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMMJLFS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGYCDIeWEtsIYT6ZH8Ete34l4b4yLlwYkSDMx9JHQoZAiANqOk%2B4u3z8I%2BtRCiK0xdRbeubBxwbnFLoKTKx8OjJcyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcwdDebYnyN9D03zKtwD4X%2B8v3RKOjP8hYCwg4RIyDKmnhSC4sSEYNSF6Wq4%2BPP3hO%2BDTQgXq2tB%2FI9NiwtG8AyF6F9wlKvc8qBHAiEOjruNYLqRrAoKQflOjBsaAHM3B9iTCa%2FJ5uvrLPJ%2FAO3v%2FjgaT2K1ogKGyMNVCMrdDktyrgSFxMv%2BuqKQdMJ0DLdrcuiROVAY06CsGDOWerf1Cqy%2BNBSkQdAf2q36GmlzhOnAdKoC2Z%2BzS4a9og5gy25LPfNWA48QVoa5I%2B4JpN%2FH4sO6hEjjEM1N8ZklhLE8co8MGn0%2B3XXW%2BRTvjVfI%2FFsOvOUmbT1VvL%2BZmHixBcah8PkGP1v4hcp5gq6HCzBzwiVXYqUPx5CT3ukaYgKtXTITBFqubsibZ6CFhMXUH1AVP%2Bq384cCf81f1bf7aM%2FKE2hOHeuv%2FXe1x8fgJTeuvOkKA9wnLoULNII7A4Iq4SJn1qPSeiUhXAZwWgtMRwAWPXaDCzBNq2MXbxm9%2FFJCJgOp88DIsY7bGp537piDk53Amuk2dZ0lMTCkllx7pTHY3LcG3IqLFszHQPuGRyGVjT8s4l7SFncHWQ5x%2FELGET%2FncuRe3k93YfJxfTN3xPq3%2FlDFidzahUKmxQBbQdn%2BrWX5DesJChVIyRmAVc0wnIqjvQY6pgHMBJDR5Wz2ABXejK2VkkFiO2SLZfP%2Bl4DhKhZunHPPq63mXPwbEoXdqJjSl3exOIuXCz6HTGgY68PEEPWS9Y3Ax1ifbJviHDUSIi%2F8gV0hnHETCY9RYEi%2BYJyUxn39kWqj8LUo5JV1aa08BhUP8izc3ofq%2BiIzudH7DgjPRr0Wca2Nuz1tLwOGfvgpL79xKIBWGNmLvQIQ1x07up5MFR3qKHHhfQIE&X-Amz-Signature=0d956acd7b26adac746472e347644a4dbd61f5f6d21d1480ecb450089c780ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
