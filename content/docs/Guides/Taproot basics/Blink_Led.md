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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KFKPCQE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg30%2F6YgyEF2WlhWWsY0YV1B1grD%2BDUR09Fkkp%2F7YEeQIga9GZRlbWSAFIK3r4WissmnJyaWASuDMfyxUQ3m2Silwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIJfMcc4ASmHVFIWxircAx%2FkbhAS84Y8juqOt6PWdiyRTUQG8Z5B%2BbPvwlBukWOqnkhnJvFX4zkgDV4iVvySom4SYW%2BMOb0Ac7yAf0DuRbmGQQGgC5NayR%2F2KYyX3szjPt4hnk6ePul46I%2FyUI7KShIYd%2BAuUWeUP%2BxP0Z1pbJonO1fRBC%2FprSyzIu3nJMz4Pg680GYbOgtj0AWqDNCcdbWgVD%2B0mqK3Y50Oyawn6vWlbXR13r7gqxQIjUVIaAh4XyNHw1q4Wrh%2BJdlm6%2FQcZWBowu3KXO%2FZ5VF9BTsqlX%2Fbh8QrmGgA3aLA6nMr6ov5FISOHLVuhKipx9R1kSSfac3vlWW4SesLK3aASn8hT6EGPoD4wxrYQgp157TN1j2LyOhy%2B%2BG%2FtVZEoPwnRhiyFoHqh5m0K9cXpGnSKBjCu%2B02dulA2DRGNKS%2BXwrbvdI6wkjqWoAhm4taXkuC1bc6kKjVuwe55oLWbjNELq8q%2Frep3%2BYz6ovy5nI%2FFQHx9gjBWFe8A7xz7oiKG%2Bvj82FZIgaor02PE63BYOQ46ih%2BASX077KpiGlvqXy6bPSMZGGNdEpsiAuKKUH9GPR1lCggUdY55hDbBJTOCSFXhSBkXz%2BzGyrCejkpRVfJCclty4Hop3e%2FpCtvkJWXc2aDMKeisMAGOqUBVtd39dCkwfjJAGst1WYdOzEFcCCM7capNUJOHAQiQCzDISwGDrZvPP7%2B%2FeXMLPP7PvREJPgcWnENdbZzY871LVthHrOtZmlMz%2FiHRuEa1mtoHmjErOWF4itQyU2xyqa15hbK9eYJDcMM4tire8%2Bju5LXi7YbBgBt9hBlvtNgfb8JAZO6FDvEBjNa45cl%2BvbV5U1344b%2FvvcecbNN7oV4F2%2BJP5%2FW&X-Amz-Signature=d8f6402f52f72d4777e2a6a0d5c70ebdb2ba92c575f75ae67e7b993f016acdfe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEYYRHP%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwtsps6aSXiymhSu1rsV8JOKqSZDL1JfjlHy5TGrsSIAiEAh77yVBxBVZEqcuT4vUJqDA2xmlnU5uREv3LilfegsPcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIM5s1l7RMgwjPtcNSrcAzMkFkFm5aphd5hWi6L38DQ2HITWUkRvOZ3ahjw0%2BJc1OJL%2F3g1LDiD6RvU3e2FgC9X34n25ysbWkVxgFnvrJELMwOg2ZbQVdCsILnn0A3NAFVEVGlCYw27kQ0JTolUnDJLVmQyg4sO8wp6%2Bftk2EbQEysm2LQWK7DT1t5I%2Bm9KSUToY%2BUuEk1w%2FlS794U2dyNTeUO1863ZyJzFdJ%2Br%2BBDNIVsFIbjqbIJQB3iJugsbqxBXTnwr6mVOxDm2gL%2BDPw%2FdPH%2FIvI%2FGSqO1%2B%2BBn01nLGb4tD5P3Hg0CIgN41OVrHRKLuPDRObYGx%2BAcA905c%2BDBXKZPLNz4mXSk5TOL24QPH%2Bg8yc7xSRmFiVvYsilr5fTpef7t%2BjbBhvKzAk%2Ba3sN6E2Jo%2BxzzxbtLZl8mnEkTZ%2F2qW%2BK6pbvwrFaoEY7ng2Z3qKLyz3%2FgXYM0OLnjXCHtjRJx3Ru3N2ArBsJmzAm1jMdgvwIeIneB8Qzw2OBFKj7jcYuTHFvlLyIwfjcWVZ3t69SfM%2BMnQbAFW0EjWagsGr9AT4AG%2FzbgpK5%2BUuunnhSWVPE3hFAtJy0gvwKQhG%2FyVMC1M5aixQuHh9SR8A1xb%2FpKINmw8EvNW2XVxgpjBOjqXvzo1UsdXZoKWMNmisMAGOqUBJ1beIAwCUS8xrdVWBEMpWKm%2BuWAoQMgQNhVRKMPRqlimWGNN22f5i6r68VFzardjvyV%2BjnXOp61RuXqWADIJfNV118yJNICq0vFGq7xlAohWwYD%2BL4OBiUbfVTWPsFdo3%2F51kuqyNbSVAqep0UK70nYxkZURSqJLhZnde%2F957T2vYIc898R9n53Y8XUeeilFmztJGTOU4bJJhtfDX26DVEdtl1mE&X-Amz-Signature=339a44e99844369adcea83b3808eb2fe7cad6396dbb01fceabd6a2dd6ed779ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
