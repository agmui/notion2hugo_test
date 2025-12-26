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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHER5S4C%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD18pQ%2BkCArDo3Rwu0nBrVY67EM8cgiXT2x0Ts2GJEqswIhAK4GmYmHjXVTebrHrZn2Q%2F1Bmp%2FOzr6LQ%2FOVi2zwp5rCKv8DCEUQABoMNjM3NDIzMTgzODA1IgyIUQccgEBnkzIqA1Aq3AMWjKU%2F2%2FYuU78dR5Ar2TNxzpgFgbZEPB7Qh511mWSQKerTwAi2UXk1FzXm2IAVgoc9W2aZnnMiXAYsNCYwn5RO6QocmcCflPuerHPOV2m8l2VLWhT80mAHDAkyCjCMNq0nTjIeBYTmZbH20lfq8GddRk%2BYas%2BvzMYSkmgV4YKtCUF489hHngiFXh3ma02LD%2FZ%2Buv8lcaR%2Fg%2B64qsSh7pq5Kve1d4TdccMElPKCsbJ9kRLg0X2y19SSUEjD2F0WDVjG7N0rkgQd9agpupo2mpPmlf1GttkVDtEUbHPUFnRuedk3IdS%2BUwnTHk9Ke74m52QlPP8uZGNYRAIKauImJDf5UTKn%2Bf8qk6PTIgzsxEoNcIUoH7HfPOxpYPjfF2lAHVu5PJpmr7tgd6R1lVhTXBf5WGUc%2BVxC6RWSeWTxA3NuxgOjkgTybCwC4SDX3drR4eSZ%2Fp2X45JOn7oPxTdhEFHOfbHWXKaBn4zaJoZZ9OoZGU9%2BxdPCtyCzZnl4TAKweqMz2NBWxF8UUu1NLqzRQsi1iy2P61jbVF4dcjFGn2vlhEFRE5gGLz4Z3Vpez%2FgxGdBJFVGiq3SjjS9V1btbkXGMVUbRwIfl8TgG%2FuiQJwI04XcJOgebaTrwqb7HGjD8rrbKBjqkATBeTC%2BAqOKA9yBy7n2tn3n0FKzJO9jceLqGi7fS%2B%2BMInAALzyWPyq1I2WSOn%2FMoUGS9B4FungzENdIzFsfLNALz1UyJtwCOOIBwIkKIBXjdmNjQSPJ1Jstc7%2BZ0UQ6zkbp8jgMkXAhrS9DWuoK68wN%2BC%2BCX52xfQ%2B45b2aRQpJUMAAz230yltiNQRWGWZP0ztY%2BSU19by5UHgnqkDDSUD8oZst4&X-Amz-Signature=86e4d3e43e89083279dd4d9f660e656b901450bd2fcf4813a723c73e11426657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG7XPWKT%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9F3kn0mcgwVt6PztQZVRE7Jw5p7KwJ4l9nMF7PwOu9AiADM8rxXG%2Bw6wcRE%2FlZ4JbkyqN9Eo8kwxyAkPsplRV%2FKSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMTn0NKtt1jlSHLykXKtwDzRVHN%2BIrbLsYrFPlNvDLiCcuPKXog0J2DAXstSq%2FM8YniDk6BCVRGMFOonxI1h2NMJHrxlYJSYwY4ZfZz9Fi%2BpPpAbRK7%2FhpdbsRGoJ9TcF%2BwuMVNuYLdsob9ACtfCyCJUKDtDPBf81PKIIhLZ3GME%2FdeixsWk7EEOparbJvq83OpuHUJW6%2BOJVNenWWfE8dWr6ElcI33rkHvwfPVy3aoJRvGyTp%2BrEV2fRvwdf32clVpVxm8f%2FeOHnZ6D1CqokO2zoFAjJYbdGm6RO1WPpEbi2C51wHwMEF81%2FcyIGYWss7yJXkB%2Bm1w8SYBbRlAdhzO0DrhbtK5DeZFRdE8flZV8Gd0uVk%2B2qbmNeL6PRFPlwMq5XCx8xOXv17vackNaLufTP7A8Jt340PCLf74rCoA836M%2B2HqEgtVxdPePoTwsVsgtqE918DduEPCDIR1mslEWg5gh1V%2FQSiiUaYCQDTci%2B1mu4bzitX6p5P5jmnbzoLIDjCJjRE0x9NNKibTFYn7MS4BrTDwMLddOSM3HE64WKYBaD9gmkvnPo8DD%2BYdbt4K6APW%2FhxkmMhIQ5Da5o6OI%2B9AU%2BHEkbva5y6zjpP6V%2FLpnkqgfQwv9RM4RC6ivWwUIXd3m%2FmASX1rzQw8ZO3ygY6pgEubw4DosqlQNjYNZgfgUHCWluDh0IuDxEp6Hqhraxe5QDf86Es%2F6T8%2BP5pggNSEBoWIV1p9FHcgFYCzGZcghNtPHy6jFjr%2FulGO%2BBPIrS6v8z9RHE3nsDVW9Hez74jO7kvqy%2BkAIB5vjML6tZ8%2FQli%2FzDSNzvDoapaFkBgUyJepL%2BMErgnCRhiU9ddO2iY%2FAqpB1dju9kUI%2FZZvVp%2BE7%2FYnc6Mkl4u&X-Amz-Signature=f02149c815731751585f17ff1f39b1415562758fe8d59f0a1310e7ec9cb77d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
