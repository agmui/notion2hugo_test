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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMKAUSHI%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhO%2Fs0OX1iy1MTv3rnahLC4EKFC5ZZWaXsPj%2BdGj255AIgHsy2OvW%2FP8MuutixDZ8zLxrUOIZd5TVLRXRWlm%2FbxRwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwz%2FiABD%2FnfUMuGeCrcAx8A7OEslxceKdmZ1wvkKRTsY2dNcGtbcVHVDKgs%2BDSjgeM%2B05C84sLjnvG4cGisFrfYKhz8g%2FZTLtphaGcGjT86a2%2FPSZxDV9sRRzdfxtxpY5vBUjP3rfzThXdQyjsj3KobQCVKOhKZAJJjinTxMjcdMEvymqRw%2B9FGCkKiM7qXZZfRGTz0mvcdKXOly4rf4dM10vKgBz2Ud1buJTXC0otYgZvX0mzXiWKd7ZzDDud9TGFRx51rLepGPlYMMlZtR3HAacyHxJWrMKb9MvHiPrFN7w78PvfEy0yoPaJYgWXnRjD%2FHMxUf2DcTrYuxp%2FmRCI%2BV6nD%2B06XyOOKBtdk3LWze%2FQut9yA38J%2BaL803XSvskgA4m2RrQnRtvoGffTEKkN5fuxOTiU6IMO4g4kwSAYzrJccCNU3Qi%2BdOU1NxJz5I5TN9DBwR8H%2BPE%2BY36YKz7BzJsB9Rg%2BCerTB%2F%2FXbW0mlhThYY5tOw7PLAk1OgT6%2BmRaHMNCmHYdDWd%2BWE3Ajva7iEdRw2RAr1nEf5y6%2FXSg1MeIjYS5kx5X2YPNnOHLGCVeyKWLiSrRLjpdLBj1zGHqEhlGa5mK4LPgCPDqUQysRaxrhOiFAQtpafdhY9MYI0SFZCgnFcyuQfeL7MMSwsr0GOqUB5gyx7RaK%2F31k%2FCVrFHkl4gRpD25Fs7TT21YfouFWZWH4vloxbTV8DY5294Pwl3DJi7MTu6FwBOR%2BvULkdH959%2F1OEm8Rxx%2BUMUAwedO9MudbTk7AkEhfYQU94%2B9V6zqL4nwPFW27w2KYZ0KiNxKgM3HpTAXP3luR1ASMnXN2ifVGlQoqJZt0xpGY4cHl2nYT%2BANDsjRLmQX%2BqrpAz9TtB3ixiuTD&X-Amz-Signature=08a3f915b1512497d5ad3034fcd19c9293c032fbaca7b7a5b4568dc14606af0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZKS6JC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFITehs7NxVkMmErbM%2BvfAryatrXmyuwp%2F3LSxIAkgUAIhAJZYRofTw9PDbTC7T2WIvEWIDj9lWy0BUfkUk%2Fwj1KctKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6bneoQsinK89%2FCvgq3AMfP4cBMXW4dwXln50RRuwdIN48V67%2F%2FUGidXpRuBCb6vT%2FggFzcZb99zLz4zMM8EmlcJCnOd5UuRDq0scklO%2FIktTNd8hy5hq5U3SmBFMA6cZrFLffwgb6Olbb7Qd7Lpy%2FnJAPHU4Y9dV2tNfYc2ybCL1cu9pgOD6DNU4NAg%2FpARVhrxVk54dmckNbsbYc1BiPIEojIMvDmEDcqcbWgVDVd%2B%2F215iqdoO8RPtzSkfREfWtmx26lITW%2F3YXtyrl95H2D5%2FQiOTDGx5bFAjY2Ro5z6vyee9dAbllUDMxYBGISS17%2FegfadsS7M26Kpu%2B7me3qFMum%2FjYC%2FobKGiM7%2FZfHE04BwHwfBdgYLZflGQdK26sQkpAL8bBE%2BjjCriEqxEykpYWEH9ObbkCfyw8Alqj0TnQ5FrfmXIntnlKrz%2BjcSbWwHAlxJQ3u%2B6Y7Xn9z20ZvdFc2k2rmGY2N7JC1jGBbC6FlOt9eaZ7tlBWwmn9TD6zfRqp%2Bgxo1bfSQ3GwNiXHskB0TSEQonnkkkgdp9HURarSJCVTQAYzw3ubQxVInbZ84sAqjnjYpwM3iDOOB9k%2Fpe0gE1pJIdPhK%2B9RGC53MjCESY8VQxsr0fMZ%2BwTOCeAgma0pafA4R5NEUzCKqrK9BjqkAaAbiUpt%2B9tSoPFoYNjO8cWLrG7SyBRzv9iy8YSuP%2F6dD6MYVhgiIn%2BWJI%2B%2Fy%2F8mzU0ngP3LXk1E6sxgwT7hjEFVNbYNMHq%2B4Z5Yh2ns%2BG3ruToHwPG9upRluMtFrV7j48109z0HSx%2BcG4RIe9l71gEVtE0agw9dPFf0B3%2FkbNVpumV3Le49Ookaak%2FCaOKXv91V5Iy%2F8TZv5d0aavbW6rOO0Rqn&X-Amz-Signature=a97ff7bd25e3b374bcdff6021102ef8acc4cc033e2e49e552e8d0554f2eb3032&X-Amz-SignedHeaders=host&x-id=GetObject)

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
