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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCAECB7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFTa32sNxZ%2BNMpqbuod8dbzjPC4feoyk0%2FBU%2F2%2BZMeJSAiEAmbj2YbWjhMfKJQNSRdGjRhJ%2FvypgyJjQzS%2FudUXFhD8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDAD8Tupq%2FP6bJvtLWSrcA%2BMVqUvi0QWW1lSG%2FHYFO1lqgnxZ8g6Y79mEirl96DimvJ0DMzcSOTEijKbLAttGwzB4P%2ButmoeSpBxp%2Bq9fnnaQmfpAcvbWJ9tBKIZuf7gikoiojz7EfRDdR5N9AhQ7kyojnRITyZuNjpwVBRK1jZGX%2F8D1bboug1wIIAp5hQEsCJn2eVW054oR8G0lB3fwaV2Qo7eJQez6dpbBLbDSHk1DamHd6emEqN7Q%2BrtZhl0%2BxiP1KGeX8LVpQO3eL1tCaruRw1ZvxSqwf9DecjQvg%2FsCouZFKilJKbTNs7kExMdIj%2F2lHuPPJVLb5PYy%2BAEM6X%2Bh7RsPsoncKolT9gPzg2aUIx1w53DSm4mXRONRt6TcSJ%2BjAwkuvImtW7Lra3L4%2Fx5y%2B%2BOBDKPbTEdTh3fPIJe9rCYzhbcemWi9h5eoBaZw3CNfTm4BIMVjy1Y70i83icK2CO8ytXU2e2niQBt8Yfz7bGc3oyYlOCuCBcl5dTDW2v4NBTH2%2BO8ej5VT4lJCU0FwmymyI1Iv9oBQ4wLrjYhnzrsFCK6zHdttEe0h4BoTsINmIQF2qjvgFRSWY%2BOS3s9dD6KfQFAdLE4sPVeMvdV%2BxNEgL4cxZmCYEItZj%2BVWS%2BPByvPnEadxMhPZMIyVv70GOqUB5Xyx%2BCre%2BCqll%2B7O9pr8OfuyCzlbNwr%2Bn3hrxy50I%2BHB5TCWnNF12N3fTaB3UtWDKeHevbCdNG8TLWGeHCrRfhqwQXDHrfdogymYcVhP8ArbNrTztolV%2F5tEXZBW77Wpvheg0bl8%2B2OnjgLNA7Ggglyo9bNtm7r8nMkbFygiVIKl8LQg7WMZv%2Flw%2FGwyPy%2BLiRfbyix3U7kn8UCS7P9%2BLpJqdr8n&X-Amz-Signature=9df3441f31bf94a21258bb3a28de3f9850656bcb5049c84d19ac2934e2ccbe54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PMXZ6Z3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIBeXa2ol5ldxlHAmoWmNMndB1dEfwMet%2BfAJL%2FxxdDAPAiEA3M%2B9X8BkHjzEJxebiB4bZJy55Vi9aqJgZIccsNbWVOEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBBOyMjpryrsCa1E2ircA5xSCc6xv%2FVwbyX3PBl2ZlfeH4lEFwS0z%2F7cvsUcqE9nLcx%2BGDyFCuUwYN87HiVSLYgsyoB4nOdezD5ngE2B%2Bxw7l0OdQkbEdc1INzqtOzs%2BlN9bak8V%2FCyNgRYXxilECzHpYnOY3LW%2BaENOkJ1EiC0T6oQayvoFGIFHwjlxlEXs4mgCWoJG6elcbijO%2FC%2FXsUd1kNMB8FVL5Fgs4ridvYbUfMogjAnplp2QIH4a2Sa%2FmNx7qWsNBaolXpJHtAEwGFSYp2B%2Ffmj7in%2FI7DoEFeKrvNmIcqPG2mRz1NS4GhUHfhaT6aAblkF0Rfu4MUku38EAMksbNrVL%2FFk6PPSX2p9OByw2%2Bba%2FcTJVQYH%2FYjshOI%2BbmBkbigtEH4iaL5C7s3uW5biYodReUf5CsAvC4tHcOsVQA0%2FDQcRfPSI9dF9OC3E9ajtUa8V%2FNVYdQ%2FFZngd%2FknImblFFKaqjJR%2BI3wVq0Q1Br%2F4OEnLNLJRkgoLUc3%2FqnLPscWl68K2OEYCkrFi7whxIb8wlv55aeKsGAbAOy2BTg1rDLiepBU4OthtnH64mFr7qqBtflp%2Bo7Vc81XPZAMKXl6dEpfzWU3n6HEPIvvoKthF1EXtZFXy0nulAfkOphS9Rs%2FvzRGPYMI2Vv70GOqUBLduKD23wkJ6YYltDv8WM%2FRSDfJLnyhthGBVES1POuzvMQIvhJ6Xlq0iHeCErVV95yx59zxssLXZcw2oYJfn5FUNRT5qECoO68Q9QxuGnep1NvwaHTgTBAmdV%2F3NpbIO%2BrTpjVkEsECArav7VoEs9hfbtRdOKX7OTqimxtd3dkJcFJ0%2FTE%2BzoFNtWenBjq83Z3Eo8aRw4CkO0Wo4%2FsnFIc18gCXV2&X-Amz-Signature=c006d23cdac7dec8fa0da9a008995d85109a346dcd2abca044cf0a4f49afd912&X-Amz-SignedHeaders=host&x-id=GetObject)

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
