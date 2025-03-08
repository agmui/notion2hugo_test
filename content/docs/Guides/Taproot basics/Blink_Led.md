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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTZI34U%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T120958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCIcijt%2FDG8SI1uDINCZm5hKHXNME1a7OmV5wmx9rYVhQIgHEx4AiY%2BHbnwW1p3J0LdlXS0FB4PHus%2Fc1yYL1ndOXMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDMi3OKiDDO0%2BFIesSrcA%2F%2Fx2tiM%2FOUBtbTLnlJXlhaEjLtDLIgvEod%2F7V3qMweL6H5Npq2AsbrSVM0ZZA%2BiUg1hhc0OsdCHtyfrpT2RKDVrlqfhU19GB8IHL608%2FLgq6zBDI%2Fi7lQ%2BPOCswRhfCPlwNnnoeyRJ%2BQIBHBcqqeflpUyX3LvkI1LYPMJmdOgzSCy4L65hLUHsusZ0CXhUkZLlvh0tlNqMWJO9bUOp9WbLzGkD%2BIhoEr1YffcTGueQLYD0rDcnQm5ATYC8zQLMe2MbEwxBOxkXFx1hsrRfmyrV5cnxKoZZFknGqG8f30mhCxN0A5U3G1oipNQ0QS1IDaDujhV%2BSKvjENwdMSZQF9NHgYbTdD0ptLa5kEaGK%2BsdEaS5%2BwZCrvHxhYZsyvc8uMaIyZvAC%2FVRe5gP3W3tQJ5Zqa%2Fm3XysfAooZ0KTu9UX9NIk2JSjF2bOtyfkGf0NB1PDmmXL31cwaxSXGNBJC9xuNGGePXDPn9uYpCvYv5Z%2Fu9pRRBNeGnBniQIXwSv51eAidyYX66LrkQDEdyWR%2Bxq9lqipNGYNuDyhLKoSO8DzSHHquOyzHgDbxTZoI3ieNxqrJyfKBmnUJyJ%2FDRRFuEKaluFQPyWtFAAokCjdsb4U%2F%2FBExCYkVkxFwVMIFMIngr74GOqUBmBqORHIcd%2F9F64ctNYgmMBPYkQS3mvIR99H5eyGXDaJna9zmuVjDQQ20nFnq627SLd96rzh2sRhNvxywbXzxKGxKtTPKnHzzkrvNx1k6oyTH9kRWApI%2Frz5yT%2FwzOfgVhn3kXOToTEYjsaxBZfwMzOxWP%2F9fCRlviS%2F4i2EqFmnYEuyJFOUPYWydv307gQvqq1F4O5du4ZIwGilC7VTgncfUir5d&X-Amz-Signature=7200d2f718d33422a0f361069c1c344f322df71b6bb5069dc1149b1f6ed3ed20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNFWLQB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBStQ6GHXaW3S7j8MHDiLxItIKjNxlVotcrD9LHdUk7aAiEAvjMTByHqCEyVP6dsnuksrp0lKP9TR81JO7XSm4lXr%2FMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDES0S8M3%2BUezzKRzTCrcA0JvGe%2BLeL1fjjdeWuVWvHGygTZACqobNDOWNAdkAJpmdMCqNUbaAgrP%2B5ODXytrRgxpJTvkZa2THIrFTcUt6oGvf9VhVkF0qM2O%2B9D5hTuzfHJgHUOk439gDfu5HitAeqptFWsjODCwVoTbFxrdNxFvMuADlRyFWFc%2FwBj8OLkA41qj0eBJSD%2FlDpIYonGynGlG9UAtJ3GT4udiuwdVDI9XWJjALWsNFoskgYwhhWiOSm2yYY1PQydz%2FAa1vSvC1R3ghpTnVRgpiTwxoMNwb%2Bp3yRAKBSzPDd0EXxzuIh2HJZtETz3IyUNWoYkdnsfBbVH%2FAdvH44skSxftertMEWD%2Bltd%2F67aLYbUMiibyNyK5w0c9ct2%2BimbCABTihrpdZ9T2nz%2F43G2mINbKKgALbHWXiAvN7dutCxD8PRT0XMrl%2F0lkHMtYYalqzL9vCztFDB2NmvcoTmnPKcCPxO7XIuUq0Zo1bBwrIQrwJT9JvoTk4EOqMOUWJ43EmUIkxKp5ox6WOg%2Bf%2FoX1Qzp%2FS1ngYEZ0niWHddplWbFV1qJUygu85gN9UVqL7v2yBfjJeUnd1YPEoAcuotanumJhGfho%2BS6%2BunPTWDTbWDKpBbjlVRbRBmVxsPg2o1LVxAzzMIngr74GOqUBqQm5iwxA1%2F1Fkk%2BHuyxe0HLNk3lwhAgdLkqbOegIuCGAt1NIuqTOuyOvshgwlS7NzpUh6aaXToHcBUmx%2Ffdi8ROAFu8D%2FTMaSnag5kHhjG2hmcAGlBIVLhjULLbfV2kk9nfGzwfeBpWf7IXM0Lq9kIbq74OdImhcR78SLsxE3k%2FcnMnG%2B5pj73oG6uE3XNMAcPt8KjoPy7J7eD4xpsEMy3EHMGh5&X-Amz-Signature=fd8306f1df4931c0d0859166a528103b48a8eebedbf9a28531599f59a936ee48&X-Amz-SignedHeaders=host&x-id=GetObject)

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
