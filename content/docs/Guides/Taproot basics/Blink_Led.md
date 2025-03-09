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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6GYE5O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD5bXS42pwAnU91H9UsIIywWznUjD%2FOcS2IOwsVsSqlaQIgVhLdyBMmXiHJHX3hwPJNYx1rWJ8wYV7lmATCnCoY14gq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDC5ly%2FZBZi4zxc%2FJQircAyQKFcTGplu5KEn0bDty2rlghv5UPgQDI3Qu8nBBtAcpn8YGC%2BieTs0RMEyXv7YWWV%2BuIIOwETFZ9L28C5ZCdK2ABMVH88zTIx99UlWwm6oV9B5MLv5yccP4D3XxhpkSD%2F5ZNmAW326j3kQbBFvfynlhroIN975iYxI6W8nnBKacZhZJB6NFWao4VGw6YEQ8iNl8tQX%2B%2B3HtHnDBarqoK%2FRcgUpXX5z2tn72s2x0j60i8DZsUG0n6ent5nvjKUaW6%2B2wfia8rAnF2qzv%2F6aTOi%2FZZ7YwCVV6%2FD5diNvrpoo2qa9I5Zhytt1waJDZRMPjRK%2Fv1p3JELYLOzOZdGUrzJgtYg1qfG5QiK3tpp7rJkDRajMIBfBG%2FbPYWrwCcnRZ2AHdftvHCcYlGc8zuqdFfnLX8PiUh7zSuRCoyKJGSrZABWFDAP5Vm5oh1r9miFHiGwDaLyzecxye9uB1f1fnbrBHPnZR3GOsygkWv8n%2Fs4dgvQhr9lgfzyR9iz6gYlB9QXYBWkIYuYijimezv5TVvGSSnuwMcs8zAacEN7xF%2BmrLHYL1qkkevPKJGyczQtMnPGcstjdpzattxyl%2Bb8sfu7nXbWS%2F2OuJUMZtQDcre1Y4nE5PBH%2B5ugwrdpPBMPrHtL4GOqUB1v44%2Bet5HPiOy2nx2qUML352Uaaj%2BWf8qTE77JMmR%2B5WK692a9564G5Nyf0rDxUW9hvPbms%2FwUJD9edT7MyjhfjDfKExxbn72vnXL85oTGOMpFgpxQ%2FGfdE2dJ9Y5vXa680r%2Fej9zPsldJFqzL2nIIdaXgWZGMmMXsezwXRzXvcRKABa18PHCBsJxE3BXN9nowzaHE6MVkgzF4%2FX17Jv8BzORsQi&X-Amz-Signature=05009dd3a9deb92210bf3d91992319e341b046c72961b86890cd9218864893bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WY42EWJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIC1JP%2BtgkstkGB4kPu5ojapmdqjGkDCmHmHqaHrirwokAiEA%2BPgoqGlTzmkd4Pu%2F4Ny9yn9zHnLEBsVSTsn%2FI3hd6gEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHicKB0Erq6lezzfJSrcA9JTv3JEwmxAp%2BPl5aGIXOg5kOJS6mepYz0z7xp%2FU1CZNGHMWmjj21IQWQmaWiuhSM%2F1NvS8wA68KxwpWMl8XcJeEh0eqvkokeCCd5fuJgG9bb1aac29c24Va1KdUv5hIMLUQegDqN%2B4HozMQCQaLhn1YGdbpM5pMeM%2By%2BDRksaXDpw0a83KtSPYZ17fDAEPlYF4GiAPr2nITJz7BeJC6HgUWRjk8wzdyDVT1pucH993HxJtaKm9myTplt%2B9dsaRncDwNOsvFhsOHPO0Av94sqyoR61xLEPfkilwNy1yGEw4Hnf8te0E8xkIL0JiwjKwUCJ51RU6LbChM1mChS%2BJewSfIPd3N6QdNzT8A01qmeaTPU0U3YdImr%2B05347%2BBckEBaDZi8Xgw3bDOE3b%2BRXL5nxpFSg%2FMOFfCqQNGTXzualM0PbuLnrRPtqQqUouaKSYnZzOW1PTGUY%2BwG3W3XsXeGCdjOgiw%2BIRvrCi%2F4wUmrtKjo1OJcCwlirZVGSVxNYHdrib2u4zCvX6DSmcA%2Fpo3w1A3Ct2hxeBmpGJNUE0Dk7fjhFwdZ089USQxs%2BKtQxGvnZx8Diq48xSfyAADRDICyXrfNjM7J6mmT1I0BcgC4sxdA%2BlRgjYk5mCmUoMKjItL4GOqUB6tDvrDU%2FfvhTPAsgi7YS4FdF5TdWNKS09Y8Q6RGAcgXcEJMY5NYKRsW59ZbyqZvXR%2BfXGEtR3aA6LgRjdLSB7QhbZrRp%2B%2BTpJnyPLcCL3sqIkrQkdCIan2lmhL25WUgAJgsmeDvXttgzND43uC4DxWuYJVcDwnpfWd1bsNX8zcTgR%2Fj7y3KVKnZPqhFypkI%2Bf5gEj1wtxUQLijPDSEYOfTt%2B8K9B&X-Amz-Signature=b717f4cba48bf210d55946e09fa01722aeb1134075af95d19c7ff69b5e947b57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
