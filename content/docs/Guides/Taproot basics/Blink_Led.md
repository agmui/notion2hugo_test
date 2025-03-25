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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34SPVMO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeanzmq9WCbij2WE70Bfwc06Fw7OiSwM6cYBVe5G%2B%2BAAiEA4%2Bi1Vd9vKFTQTNIPkSZYcr4Ai%2BkvkHv4zSwPoEVE1Gwq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLRnPQ7POE1DS2WvbSrcAxMOLh%2F%2BuKANTdHSUe%2FsyBt8tpf1PhBuAB17I0ejEU9FRAHm8vPXgibrObSVohSQDMXVEa7u2x2Ybk9RZuSo7SNEhnRtZxMITGJoExLXeTuAlVEYq8CPEMteBEttUhZBCOe%2Bsz9gY7SsZ8EHUYQnxhWonFuLCGGxapqtqZVDOVwUKnSMP0EQr0lAvHjDC%2Fr53LKK3mGNdMW9dOv%2BbQ5iXPG6tSHaot0G8%2BFFiz8vou2W95UV%2FKPzMTCsqJb28nbbzBFoc0PEKBSwDR3%2F%2BYCkZHsBb8tU5CFvpLFjtrKObQaS61Qf0nowOkIs7rjq%2Fu1l5fOeiJT9q4u9QlmNBHMeheFX2NrOEgxgFqVu%2BoQdh21JiclEA%2FyokzcTz3w63vrr%2BGrpi07n07vrud2%2FOEntwrVa1R%2FDhHSF7tZqrDB1QF22i77XGzvHPf1bqiNYeZj%2BoTSdNMp%2F7z3F%2FKWI4d%2F7GyccOWHkn0iTBQyS6rBu1HDN7MHGXeRue9ANaaXXC9lEcAd%2FeNsQqq0sA7R9i23wurVopLU4LU7MHK%2FF8ZXqoeVZ9irfqHgHVt5bxi5cKBhLsKsNxumcMzvG3H4K1xq%2BVSfga%2F1DYm5Uiro%2Fa%2B0Yesw1IUVtta2q65ZIlSu4MImoir8GOqUBlulX4NXIwKISFe2iWFtltFCmS00%2B8Na%2FNF3xZBVhlS303fOdArXmvWk7s6MVd%2B1M1QbaCAen5Jj8bHF34n3lrawlvZdTzLXwB1LElgK2dv%2F6WSejl5c43X%2BjNBTKX4ONyWhViV%2FOwDmfQ0mgg2Ka7O%2BCgdL6GeHJnUTs02ZKsgPjR13tDCThXL2yyEC6Or%2BQjILZeoJ7%2BO63D4nQoLgj%2FkuurFLO&X-Amz-Signature=30e7a08888fe98b528e64a0bbc8f34af9e75f40a30c97edc637491ac62473430&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666RQEVCX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjfsSyeDo8%2FXoUfdg1mI2yf788PYGR48fOhSxqWWLiVQIgasoPtQFkIneaBVCJ%2FkFYGyBXQFjNULROeX6ukFlcqyQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIYpYhgvZCdKQFe7hircA2rJe8Cw%2BnOE0p9gw26SSR5k3L76Gm%2FpK4l8j%2BJxe2IF2P%2FBSIABp%2FfB8qr9IEyguiI%2F4NDssQgjU3QsmLaoFd%2Buv9AHalSpq2vtuXi%2FuoLCXlZ2i3UXkn2AMB6IufSbn7JfmMk4p32%2Ff2MI51k9JA36jl45%2BON%2BCEB5IZvCYMCGcPgrHCWgNNhs2UNLj5Kb%2F84h5NE3x3WdZUvL1tzVEG9Zq80XkyrhoGhWbUBQRQKOZ2A0qJwS4BFi0KTATLfo9nnFF2NChKZVCW6UOvJDujKIGN7kvinDmAaHXqLHiVLIu6461FAuWo%2FMfaE0Ewasw7f5KFX6UMz7KShEtup3sWscmBHMhSvxzkIwvVcVW5zsQ%2BtvvVbQgCnhS7eFfqTgRqRyCLWIyjD4sjzVfsjxa3Vcv1HPpGNJu7P2JwiEoYSAaJNYna%2BFThVs8HlRzB62AorhgxjS4K3xjZtXJc%2BHMn51AVj9izBh2iZZqs8%2BgBlWo1MFn8gWtkNBG9nJ%2B4dee42RZFHDk7n7g1GXVDYIvkvYyUUdvsQXQK0qCmf4E6CpFrz13%2B11t%2FhkqgUgmwWf9vXn6iPB2vBx%2FQuhZg9Ca1IdynNt6sLmkVq0%2FuRSN0LB8R%2FNdctzvKfzwDRTMJqoir8GOqUB0ZuJI4sT1BfGx077yFBxwicwemkxYyMGLhsLSyavQd2oX2xcSXaoGU9f0IJeAz4GFXB9ErMyGxzAjx1l73KgdrdthUd8kKxdfZAeDOcQDwBGC5miK90N2jOfk8OTmaC8DrTIVXL0SVMUACTl2UZJSbwfEyG2oE0YEQe9ApJIwkM1Hq2lmvl71t6L03n9r6V9WdQtFxhB46v1l35S9sv7IxXmezHs&X-Amz-Signature=b7a530843370a0819c572e94603566324a280ee1d4ff3df800918a20f14220f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
