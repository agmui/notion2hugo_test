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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVGUUJLU%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG7fD3DAeMQUv05He4d3FePsG%2BvHpOY7To%2B%2F%2FPcRfNZAiAqYevMcajEahUx3reW9lf4KGm1eFnZPIyZnCiHf6NU3ir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMrscnfODa%2Bi2rbATEKtwD3KwjTl475zh6IUkewq8uvuMS5tEogKTgXpunI%2B3BgS3Gxl4u3mwEXbzy9dhez28XVmF9pXbIwk0vQaCUByvHZkqSKwg0jQWjXoCE960NCWaOGCrMCXWiOE4%2Blm%2Fuid9DvbchwyLj9l4sWxhZ0Bu40kzp3NkdzGhfOPhLL1j%2BMwC97q0KcxTolMs6koymiI3vMixbNTFWrMHLGKoKPKpp9POFdkapm1WxiapLnCz5RlbLo3H5u3Ip1Yc3rUJWaoNPuvrqqWzVhZCwMNXQzY3V57Jv3cGNXQASUh0ONyzbdEM6xgG0l0NBciXPGab0Tl0roXnmdyj2uNe%2BXrhECXG0%2F7%2B8nKXkXG8qDOoaSLiEpp3S02s7yXm%2F35uk5d91UwciTcAaQGh0ejqN8eb%2FlWzLHmJW9NBFqYdVuSe6B0YJMLtwXzU3z8xFRbdVc%2F740EP0%2FEiYJD5gAcwtkpzLqnnTWhjxO8LYEn6NUtINbxuynHGw6wPm9BLeNF4eqs1EB8TquPWns%2B42%2FsR4k4FUtQHcjnI%2FF0nBaaP8RLQbaXpC2U50O2jpMYOv1GL6Tj01XmPaGszkuqQ%2BFlaiY5dg2e%2B7LBIj7CfnoF1V5LSYWJEZKJaXBbyrUAEpKD0ZIDAwzPyDwAY6pgFeeW%2BDN2l%2F2PsxEF98%2FFiOlAI3yrkzQxDAdaL1oN18DFBVR%2Bsk9Mf9X9iWv5kEbhUMr3xVi6%2F0ixhi0qKl0HzOmmmYDnkXCLXAEl5z%2Fijo4Na17n4yoUdYAd0SjxJLnpeAoTUeCIiocVZditxojoKuCiNOU5%2BRU5UvMV%2FULDAWfxsJ87dVce0rLuc1ARjceGpIv2aeJ3%2BW4Dc6hw3zc7p%2BJQ3%2BAbOc&X-Amz-Signature=2381d4cad98969b5d333683ffbf9470ec6822502cae1ff4aefce670d8ee3c87a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T4OH3AW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2FmlZo999ShOKinOi4PaLtUJiLIzR%2FiNoLJBWE%2FdoYwIgNn3y8Z5JhH0juZmCaKPE2OcBj9FYo7nuX%2FpHV7G%2F%2Bowq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNeElCnvnSR72AscEyrcA%2BLR%2FDS9Skbq1hJHKwg5j83FxkEpina7ovFE%2FQNtNG1mxn965leBYvHLf%2BWu901gSQjFUi7DlSZNQYQVVF8NOCv5lnXOvKl0%2FmeWy400L9z2ZeUaV8uI%2BgBkm9j4bevApqHt7W2t3fGmOYE%2BG6Vy4%2BBJI30Fo4AJCxVBCUiccGEqkvbzlfEcjVM%2By2GVyDNOjKyQVZdLViyvI%2FUas1WTT2%2FAjK9MOApQS0gkQBwAYlQJ1czI1GSm2q7HlaSTu7VGVoi%2F0V2z3QV%2BxpbX1ZwVNWdE%2BuHU4RApVXYv6r7Zwzc2wJo4haN90ZiZ4235rxU4umRMr%2FsQqJflYLBeemi1xkYzd3UnX5U70mrdghWlmjWqYxmywZVUNoAyKYFWl%2BZXAv9P89BrbXPU%2BiYT2BhHoyltriNY4v0iy2Hq%2Bbj%2Flo3TXU%2BygXiQp0Wu20p%2FYyKVAfiAxeIPGhAIDk6f65Qmiw5IDUMq%2BdAnpb4%2FB1KqLc%2FssfzlIb5XVSosp2DWe%2FnHhvzIQWP7YrAMadvI46dragbUaxaO1zxX4nPruYHwnEmIAY3wJ%2FXcaP6nPKXAjL4uDvfkWqEhjygBUkEGDYptQEZ6DR0b%2F6vsr2xaolzUkbQQ9HRGKdKqUdlmkOR0MOb8g8AGOqUBZpQuOELWVvrNSLaCQuGx6AiZ2odcuvJkgijmYpVnP3pmy5sFdOT6CYGZPG1TzdyediFYLckGUpJkItVoLjQ3zNkG%2FnuxRgosrZ77yIoLsXW0rH2LvxNpnSC3SV3dkyWOrBdDC8iXrpmkeiAsjyI8nBhVCUi6RU6N1%2BGM7Ci6R3X0kv%2Bpr9P60Jn25wCYEEUfA9lOdJf2ifbJvTHZS4SqxFV4A0aP&X-Amz-Signature=f6ad96f44bbdd7bd5d9b2907404be818cf7552a548adc6456c9b1b2cabe5bc54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
