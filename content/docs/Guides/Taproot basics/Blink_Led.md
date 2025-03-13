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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7EK2ZG2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFhUc3kWj%2Bw3wHDEhjSNH5Z8WSe2YkgTzkHBcYSnrwqwIhAMTkXt5Y4DLtpb8DHMzk5%2BmCVBR%2FajsLeGxXEQVLHSIjKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV9D3PSNPiYCQUalgq3AN7LEPlaynt6dS4zLskjJDfdZq5NXYmTWh68n0okWkolq6SfOrKga933JY%2FcwZYK0%2BIgi0bJAyTXNs4RdL8AZ7M7xbw%2BlvAWa%2BlhJ8ASLchI3QwQXNS7ogiKmNiEU2vMMsP7Wtj791JKVaWG87%2BUuSQRuEkeZqVVVZ2A3coixVbiinakWoitzJKfUSDivRw%2BaJAx9Ayqj9msmG5ahiF%2B3dRnVysiN2h3LS515H%2FiFbf4bl6KRllpUx0ff8QkMnZ2q2qRpT4YceCOJwWHmerPT5%2BvluCttPoxp1lpPyqFHIJMyiVvrpk%2BAaSRMFZEJFhsqhYFNK8%2F8JabqD%2B8p2nDmmRl57vFlD35v5cWnbWz8UbH4iyu9WDoa4uVonuVB3SolAkPUMxyFyZlML7aSUZT31SdWNJ8fAyPme2rFZoq1CnTVEZumr%2F%2Fy7SIxEeK%2FigkeAvGsezM9YXvp5AZBo9iLS%2F6byUVwYo4Sbi2rb5uCWY9hAwGwb4PaMozlasiNE6YZNIhwdNTGX7Dpz1mvqLsItFDB2odg2a0%2Fvs6Csj8pFlhMuzjFxy6hSgD%2BJS%2B1PaVhOV5coW7M%2BumvlZ5dA8J0RgpsHd5keIdzKdU9FHR9ndPAwda3L19gRKlv9OdTD8k82%2BBjqkAe5wDGjtZ9FELdQSDaxPSts003OnMDmICZ8zFPojCsgU2rzrnYbLuv94%2Fgigyq0wI8Fo%2FA49cglOP9TfMi52gkOaMGAzL8y0YewmAifaECCh9nal78MYCpsB4WsjBOk9xY%2FImrjPPu9H8AYmkTMz0LQbj1imeJO0bn6XAQAnSFta2FSDT8hxsHtBGbntT5ratzC36Q723ZkY%2Bjb8MBeSx4lZ%2BmYO&X-Amz-Signature=6629ae4632317f8f592e72829e435feab89316c4849d3ec5cc6b5632d38c7072&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AD7TGVR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDurIX7WgKFY6YME2FftuQ%2B8Ltmlox3QSyEoVYtVJiFsQIhAP5bDSdWwe77eA54g3ROBXqjrJmHDixpFAsP%2Bw8cm85QKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8vZZvzxRmESlExyIq3AMwtaVa6A9rKv5Vtcx7FcWDhVsVWcOqL5IaG3CVpfoLkiNrppks6sCAc31a7wBLEs2T4e5kVMboSTSrtUYDLiS5JcD2SrHk%2FRNlAvtJejlhc6qnmV37VsrZxXFfLrE4BFgiJG%2BpSycyLaikBIGobc5zp8jM%2BumHUTKKCHuEScgWHVTCPjUsVMZ2frZ%2BM23nMj9bHxaHhXmUVfniRm3pVShaftq%2BIpvInRZ8J6tKB3i1oBV1ZMbEibeIVg1bd2lnm%2F9cidgHQLc%2Bep2sCAR5xPIB1FgPPgxK3F92yinCbGGAHt2N7Xs9r90qJ%2FrrPQW6BaOZKcBz%2FnQj38Q6%2BSNSxbIMe5HyzMy0Nx5X8TyD%2FUjJ3dGN0tBpAqxOwr9VPT3yNbr9fYPLX%2BpiXZzcl9usVTDs3rBAJjfpReGFZVufKHVNgp6ynPb6GHnE1pn%2FGY5TUXDz8Fnj8CBu2NUXjCMu2SQsdYXmuVH3cNDRAS5G1svsdFVDSxqjCA2BsCGfQG6I6dzN6WBG7vUNqUmKTaFFXzpQc9KtdVnrVxu9%2FZP3kxLQHuxLRyQRMqPFt6q1CqwBkTjb87ItNLkwPEJLY8u4CUBU3YvVhOOOioZdgUm2gFumcXYkVLlo9uJHG%2BzO2jD%2Fk82%2BBjqkATKxJksYhZ2LjOUQlefTdBTG37R7DT%2FS3QsQGkXRioKxJxhK5RaTPqpQu01Ch5XLp4UFWhYqs694qIrxL8a1s23UkTXX1fwIi%2FxXzhc9NutBrtxYl%2BS5h7dJJPr%2FmrAE50xY3lzJeXb4HWwLu5xkdDNPv9WvcEUdVMkNne%2FE9FqYR9Qd3bFuZOgPSTZigYXKS45IYG%2F%2Fc8pwd6rhFiXNTgyWZiAL&X-Amz-Signature=431dbe19c7e793aaf3a9ba53d7fa7d8d03037a8d71632328effa1e7ae7c5347e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
