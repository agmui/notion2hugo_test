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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7622ULA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCZEJoCgxJ%2F3%2FnUi%2BryE%2BSDFK62UGU5aIsDewwLBLGQ5wIgMr7alsOh%2BPhSLWgw7kfOKraWyq3lH2w39YRJsbDL6mkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxyOKE%2FjYaRpxpFyircAwotrSAyX9glyW3E%2BixGbEXu7EwqWitwNVE4jIKrXfNOoqB4sahntX7fIxBLMK4pQPvoxml%2F4xvYm5iceUzeEjM8U0AKwabGm6FrQgDLE0q0LSSMO5ZTMKXE9lUkIQs5M6%2Fida0mr4599QFrCcoUoEkjPCUBHK%2Fa2Do4tTMC%2FFlo5BwB3dFTBFx6paC2RsxwRzXcrY%2F4VP2jT6OF0wC6aZSWuPdFqb2%2BhAirLJUA92PANpOrmuauwKSArMmzHPFpICyQQWmKuZuYycq3nnp%2BKi9TkvoPvpUDSqKAS%2BxW8FHrRvmUrs0MKZGnyHb5%2BXzO3Sl4RoTYrqWgDTSLnZLCijfhubrtUnmnjYyEm1uQ%2BK663mTQGxhSGqBjjnw6Kmt1%2Bp8ByO3geYs7%2Fd0PbkKAymAjRTkO4cnco3Bv2x7201zRDCnIzsYtR%2F58ns9U0a1CgJSo7O6ugAJUA0OgySXOgWLC2WjlWKZXP%2FgD6vbWi586b0%2BhGhnjxJq1q5Xpv9SZKwMCWdDZcMnKWrBW8n%2FK50WSq%2FvR2spURkoSW1mk2gCO4rp0WDX%2FeB95kczk82f1iTgFVlO8dckIUQUlQrImf4NcDALVNiZEtjprsz19hV5FxRfazKxKbgRTsEgcMNazm70GOqUB8G9RD0EdqKQSY%2BVu4LaNSY57YzssrMDrx8UI8MURskBTBpXy%2Fgki8ZbURwXJBGl70YKOmbXywmSydcb6ubyfei%2FlPPvtVdKTp7RjFkD78sRpNqm2i%2FIVoltGpvdbWglGBTJGWe6nTE3xbkwEgCEpMM1UKyuUtf9aBCfp6akgGgaWEG5arl6hjMlLhvwIKFQFwZeK%2Bn5gXb7roq61EgyDIgRYB05K&X-Amz-Signature=134dbae0a4d82e8b1afb68a41a1fe1c56244edc0f2e6d46af95858115fe9d318&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ACN3H3J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGcMZ3lxcGzMCezlQmHFmbR8YFHSXq3ynIqK%2BHg26ieRAiEAqarzUf8scJgdOw80D41fMUsehAfHTDlpERB2Ap6Ag8MqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7tn7dUo%2FsAWCmmIircA6EH%2BvbfpA%2Byk2yPlN2ENs%2Bpt0zQ3QQ%2FiS1Z6B%2Fs5KO%2BFJA%2B8ZnCfsYCpi5uxBZMn6LvcYnIRERJXzca76Qw5bb1JUZrauZsJA8VZX0Z80idg4zW0qy1pqAU3ska4c862yDVeBhbThcG8LjDKyMx%2Fbo7P9UYH3KCG1GDSOZjRDWMRQx7YWnfOdu0eCEVRyTWlwG6oWSLO%2FopsSz0ZazxgMypDnQI6q%2BAitxHU6u709fWr3gBubFeYBaQWE9Eu4fs1Bq9lXRLrvDEWMpbXKbWPbn7DHnE566HAFi%2Fg53Bg9WiKT3jeuZ1Ujvcz1e4ROC3k3OfzMi1y9S8MLLbIQ7J3UxHt1cwh%2FBZCc69x4qxXgLbNCGP77BeVPYBkN7MfsM5Ds8QWCpXAOQ%2BrissnB1NjVZCbPkps89M%2FTOz1zE407CiJQt7jNPHnVq7NEL7BkoGIlbZwlDksibUF67muRsfbvAZyBxgVLhWoyFQj%2FixpZYXKTGbrTgWm3Cok84PxD%2BG%2BLb%2BWrtP2LtuUDnoRGt8k8a97aH3Cu15ouHJCi8wNA79xB7WcoO1NaqVb8aAYBfahZXAH4g57EXddjm0W0PPmhLckszECSGndpEAYa2yzfNXNuu0sLQt3LR1z%2FePMK2zm70GOqUBmg0XmCJaXlzG2VmhFV3qj0VCCa5M9DDVpm1vALGOACfolKOCyvmMDnatYP9X8s39rT1ejLTYh9erFLbAUOwNMGOSr%2BAiB2rzzxcuSZ36JWGKpPVOu%2Bk5iZO%2BHwAgwq3vJeMZIjXNplievcsObb2zpqhvwDamY5RkbEihksGGNjT%2BUn2ad0bx5MTLMRSqDO8SDdTX7V5NwOQ7%2BkOSkQu5PwxBLK%2BR&X-Amz-Signature=ac2883dda5b2cb01008d38bba87b2f1c39736b319c6903e8494b8e61d374c379&X-Amz-SignedHeaders=host&x-id=GetObject)

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
