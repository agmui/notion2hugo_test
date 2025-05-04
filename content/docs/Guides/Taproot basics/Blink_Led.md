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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFX44IIP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDWfaE1ZAAXaYegtqMA3AdrPh71WmsC3ZwrUY14XRhR9AiAyWG5U3wYSMquLqlzVFpFZA2CHnyijN8SeE%2B4QLam99CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3%2BuIeNw9X0lmDMSzKtwDAN7MlGCQgsVlZKeVdo8WHq%2BtJPnFeit8fO2NKZF%2BfZfX8JiV6UgjTKo6btPCTn%2FDCjtH%2FcA3gogqZxnvS6QSgi29mSXcbT7P54naXORd18pV7wJM%2BzytpsvSLL3kr76g%2F6fTkF0lTrhPc%2B64yTGcBAAQN%2BDAVjMeCYvNdo%2B0agQhD%2BJV90QTfDeBx2HPzymARDEdEdyWN2FxTE1LMdjPEG%2Fq4ZbIIT%2FO3R5Lj7I%2FETupZlKE3VsqgpW%2BdT9vu7Pva50IIP2Z%2BvDBFakyOYeZjY0NU%2Fn2V3wvo3X7G4Ib6iAFjbVN2da8gCJx4sWjORm2%2FRzanPgzyimZJVxCdvhL%2BDhTQHYEgJnfTzzPH%2FbNZke%2B7kn50A7C5NLKqfquvbyCnGEh1cfZQAvmVt0OK7zrua5BYHUbbE9TlflePEXV%2Bf9vCF9PSqRODyoyj5oq6Z5dJVh3IVBPMPxzUBX6Wvi4Amvn6NpLYuxqZDdJUluBXfGgncqu8uxMyNMGoe4b6PoLHXuYbBsk66ExyUdJ0QWm70RsA7h4BmCPnIgzyEzalhW9HFKJD7%2Fs0Xb9HVpVCCt3kVCj426YsZeY7EUhRE11%2FHDyjQXCiSJVDaCjJEKNRtOqQdsCy0lg%2BTXQtTAwgevbwAY6pgH2s8RCEQvalxpHvqnvo%2BORJohff%2Fv8n9Qqe7XSNluK4zaafkpTCeh7Hr%2FpUYFaY2Y9YOVddaQ%2B1ugOCGcDV%2BzInxVgtHb4BUGR9Keif83MZNLl1cIxCW6joXLNxlKMSHKvD9%2FymUJHXEQMsxCiNUiMf5hOP%2F1NEF91lxdRtakaXyvo35Pp8GYMuDJElZOSCowueaoxGeY%2B7bTIrUL4R1aLtSsdEGFB&X-Amz-Signature=ca91f81c10f52963ff4e8ca837f4ae167c281ac558ce007df16c959d4a859c3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKZ55CE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD0YYdj3PtRqcSwpC5%2FZ9TyzzgjNP56wipV5ntbo8me7AIgSjYGelWch9lQIPbl7Ztjmp%2F%2FoeXCHiQDw3wdMC%2BY9O0qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxmaOdq7Riu9wgYeyrcA99IYIF1K72mHJOmjbJtJci%2Bq44BjpdPhA2ZSdDeb7%2F41cdex7onTUswHPEYAQOWKjSAhwZ1g1PZyqoLi4ZgOztcxG8rT6oE%2BNNZjbrqr0eqFMm9MWajx0HBNsTXU3GT0wxPdP2L%2BxfUA6naG%2BRMR%2BE1Fn7olZst7v2VjZGMLyYycP4PwVjC85DkObnyMqBAMo5FcLq%2B9vfA2vzt%2FrGkO1rCmiTJPpJDqwlQDQbbuUJ%2BEcPx6h7A26a5TJgcoc0H%2FfQb2nqbkSeNuh7JV1TlS7tu%2BtOXUXfmlEtgOrP9srccViQ4Nxw9XryjGLe%2FwoI2abva7SK9YuLFToQ3%2F%2B97OvP8UfamYQYh7Frudmc76p9AuEiboPcIzQJmCiU%2BCYAQSNBCqItXEg1WLTUTYRH5C0X%2FRbqxujjmq1YEjCXP6HXmK8dRoXqPff0D0ZsN6XJAV8Tcidzh9nRoLQSTRmMPVIE8JibTkudX%2BdvJ%2Fg%2FvdnT8U59Gzx7sOWaBZJGMmqBJl3WDQb0frQNE%2BA2fcqPw%2FEPpZecofiNW6Tz6ey7YTgXzQmD6iu%2FVZKEGGI4G622wt9n5bm%2FeaEICRux8Uj246byhkhfk4zQXzJ2nN5o7P3X4yxMA2f3l1caQZQ5fMMXr28AGOqUB2I7lvL5GA0iF3Bu6nMvPAvn8927GAFarbqJBo%2F5%2BmtdojT9D0tEFu%2F4wliPtLOzOe5z5UQzdRiCuH2dEroC%2Boqi9ljZtsMEYPCS7iDC1AfKL3atGnGMNSYznjG8zgBdCSBmwfYRqO51qKLNhIANJ1xY1IFV3Lw6rsbsQRwY5mKr9O04aXCjMVsdGe3pBKHHClVdEa9LbBO5kpNOyvRCESlz2jxAm&X-Amz-Signature=cfc5a7e216472821d55505d4d179a31077acfad6cb55ff41a65c248e2a255da7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
