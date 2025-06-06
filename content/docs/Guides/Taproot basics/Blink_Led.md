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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WXWDFZY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCv4SFcvD%2FuJWnC4LnRRHzfv77%2B0NgRt6XnbCdUHZFRfgIgTLp2t5yKpXl2mCGGRSs%2FCIiDoiwfFKFdpDaYGY3PB5Iq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEr%2Bd1aFgmi0fKXJuCrcA48gDMVFd%2F1wd5v87D%2F%2BH3OTJNU%2FaScRkebxxv6NBobj5FF4RIgujMoiKvaRn509NLRCxey4E%2FGz8haYZmnkRWXRzptwXYEuyrJUCXjQIFPNbWpPzDuTZLUzyOP1iE5SksPn5shcg%2BJTFaBDigFxpGFeUdmJvAvQzjC4MouR6WaQfkerGjRanQ47aVHvU%2B7ch4DA5TeY3KueyNHzdCfee5psWCKUQtYm5erfs%2FRnUn4G8CA%2B5GUhDnL911b1%2BhDQ0f7TIbxWCQwHqYaVk9K3CMBwj%2FmWuKuPK%2BeEyCdeWsiuDgUSkmqpLVnxvU0aAXJZ7QCuXNmuWUsF7lFfZZqc0gkD%2FzAs65hHs7m5OvCAPrlgJfZ5cWP8TeWphc8q8%2FpxIX1xjIvAyCRs5u2GlrV%2BeKxlzLXwjf2BMq189yU1dSVJfHzGoJb3FeRMOBWfJBvScduppQ4BbSRR4JeiP%2BK%2FGGagYnp%2Fo8bL8SsU%2BzuikihF9ccZCD1D%2B%2Bio2jjSK8%2Fax9JkRiinWvuB%2FW1EvOnDe%2B0s0q4mrqtSvxaNR1FfPNnEbwWWTibN6Yw3gKBacM0xx4vR6UwrACkd%2F30hkuO9EMVYrEmVloo9mPJj6oYan4hK0264KncubfmY4yJaMLDZicIGOqUBlL5IYiPpRINd7DX4tbU%2FI3CkNcMjhKVJ9fQVzuOSuVt6%2BU%2BzcMmRE0uhQN32R5gTXgb7HgmAuf1xrF8wHjWQpqBw6hk%2F%2Bh8khhSj3ocJDL1Cfw58%2Fzi6Mk%2FJynS91jlgYC7hhLbbxHULAUCbwhmKPRC%2FHFh3iGH58Ylz6kcbl3LYLNvTGA69VYTDt0undXi%2BlDNnOSDiXzgo5tMh8xpnvUvCczdo&X-Amz-Signature=a4cb6ef42da1378d0261c9c8e87552bc944e866814985c3d0c6d1796a2bf8ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55G33JE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCHV2qWo02upWNyz%2BxIkcrLcsDhmDrlu6HVvQFLj4KqNwIgCYhmEq96hsALQbGI6XO%2BHsgwd%2BqukzByJ%2FxR%2FhePeEEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJquYM6KGeyRD%2BrshircA8AjOAMjzG3A2YvVeKtbvC1%2BntXi9L1nbzH3ysPARKDu9jVriGTEtxBWRJfowTQXcIyH%2FCCU4%2Bd88rAK5s%2FaC9xgVCQCy13aHmG09YqfpTmX2OwuorWbukRQ4cL8WmnC7dUpQhGZ8vanKm6sf2mkZN875r8t1EYCYKEjw12cgiig%2FiYZ6y10hG2yMZkM%2FXFHwANQ5EAXZT1gZVHCun6gXRmmvFWbCQnAz4fqFy%2F58AdGvxDWovVG%2Bzgt76wP9Ajgn8TFLqnp59ByNI4747yyVdXoUEySh7rgrXa7%2BoDpIJ2kmS4SXqcC7yHb5YswK9If1UthGn19m93%2BEZymKoOjPfKh0D3rwSs7iUgL6QylVXv1fgbZ5K62dOoCXYrcf1FyOgUHnkRHmy60fj4SzSp2EFX2AfRw0zXDMdenHyjLgP5%2BSEXoJqUZh71LULDhY0YZFg5qFNIxsQQuKABwBG3jw3vEf0psXj6f4hnOb3%2B8uZfv4gSxBTp9XHHh0Ljt7WHMKH9fReuxGPSB7IE%2BGycJoUasbX5wgeE5BoXOkDOs6HPc1TTJKifwnWBSDQonL3YqhO55r%2Bi5uPHhHrrqi2lnhG%2Fi1p1aUhj9YGWvbTV%2BZD35XHPc7kLGLCkKGl5rMJSPisIGOqUB5LKZMzvPkuqaXnMaQIDWimNcgWRDZohSx356xYnrF8mU016olT%2FfT6%2BZI9pI7ZBuvmlTmk%2B%2FfDBJO6le9C3%2FTzboIbESDa2yGcFWh%2BSVieRmPWwgcivIfmV7mGLAwDbTUEZOP1a9rFXrJAutPwVz%2FJilsu1dbulIffFxQH%2BxE%2B4MGD1OrMZ39FuwHsahEXmq1S61U71Av%2FuZYrFEr5YCeMckF9LN&X-Amz-Signature=9a26802aee545014564f1a1bf0d115f757d1f611001d39d6fde2d4f09a163527&X-Amz-SignedHeaders=host&x-id=GetObject)

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
