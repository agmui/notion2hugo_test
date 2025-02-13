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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRV3PIJV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BH09KPdvU3PwDMO5zksNglVVgml7O26AbK5PuZewMJQIgSr7XrxPQP%2B5iGVeEgaoD%2FUFlmlXSMYEc8ppjObs0G2EqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzDu3PSN0RW5d0SryrcA3LHE2%2BhIlsU8LVSTT40F7a8ImrpgzBTsk9suogN%2BAMzJzbv7FE16bC34kQBaAz38CDdi5VyV3I3gSmSCTEkBg%2FOxtot8dwrR6jp6l8CwRuIh64F%2FT3p1W%2BvL1fPnbvSehlU7doi9qGP5msLC6yWpesjXoM9uCDb4ehtVxeD1RnB961KbRDJqmyznye49zIVrHK%2BslYM2L%2BJzAzxbXycrJLCUozZ6xexqWR0l5UnhRAat6FqubSzbRC9zWiDPGKS8McLzb1F5TsSnB4zEW90Tm%2BJBQ9rRee9BiSFlC4%2BfpzMc7FBoxCni6OmIhB10YwDAgLIkWMjcFvkNl0i9oHrVvJdjkndyca8q1pgMgHcIsXd8Cc9zz6b9dpFYaKFYp3Oi41hh%2FWSYm5VJLC%2FSjKdK9PX0SrsdNnsvOingW7e%2BoujXWYFgf46f84F0d0LLviyHgtDda2APuAeCtjNc0lPM6UPKtk9pxyPHKgPcWEk2mkZWvQ6PvidTFte3mIdiSiewcyoZzQP%2FJSG4ZhCrDwYXFGqbbZi9itwsPXKEI1%2Fvi90gjYCHqzbvJwpk4aKmFUCswIJgGnK%2Bm9BzcFo3mDDULqRg8kmPWp7htTEFNWRblcExdep872Z%2FlU2TKuTMIiZtb0GOqUBrHe%2BxvhXJedgqf6xoJWi9OJlQHmK%2FFH09T3XAiIyTBUZQ%2BzsauWyfiGxICNKeXo7exYXhURkYWv8QHLNAiYjMp65142dxdcdXGKuaqVdYpQ7l2FNBPaacrfRG1r7R06fvrTjUcJx7kjFH5wTmjV3KnXjzr20oUdEMGQGviG70GwnNrnATS6DMprtSgEWScNu3wxixICfPMBAXQpQqj2ao613EcWU&X-Amz-Signature=363806a29017184f3d1c42321a3a5c04e990a928e76f562a5e34d878d0b7200c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERS5BDA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqLtw7pQh7NpvAHviElkvH04nuUKyyihzzaW8%2FhGA8igIgSYzruwJ6HDX9vdGAE1%2BSaQpkWfofSt6lhn3rEwZx2fkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmFivAgGNbCwPYWoyrcAw8742VilG62cgc5otoUv%2BcewRFfcsJec2WFukHMDyX%2FNuwSxV9d4c4boNZ6dnXMNz8sZhe9z02HJB2V07PgnZLxf08i6h%2F%2F7a4UGkKFS6gA1HY6djXTvnem%2BHfDjYPVJVqDHVPPglfshhNIlkNsItl6As6b3ezQU7tPeql5nuWhB3JNTgEbb7qTMDktCDcxbR36Yc2ASdOpyQ4sHkV2xcvYpDAVXR9zp6eLTm9WY2Y1kan1Qe8U%2Fk6ATRIHYIPPHaG1NaVa5gnMNXtmjxtmzs4yra42sjI9OH6Y1tfI886tDHXM9z%2BlJEauuij8sAAf3W9sd48pfuF25VZwe0eFlmOq0tg1uk4qDsprpj92D%2F4dVW2OMnh2Z7Em25uYWmseFkyau%2FVo7dm2nqH5ye10sx9akHFzeGCm%2B3qQIIyOf5YV7Y6X82d%2BL4%2BuYlGUfHw3yzW0InFxxxGzti9A7lC6l%2BWMyS6dm9d71OHAcC4Mcu61Pg1ziX8Zr5E34ip9FKFkrdc4hiqW6RdCxqGEwpv%2FwUMns5AyV1GBjlKJT0uaY%2FXNf0N70Ipx1%2FT4Srs1GTvlQS9kxqoqSbK2hDvoCuktAIWHe0TPPXQRDBnQlhAxhSmZcwJknLEcg0hO364NMOiYtb0GOqUB4WeidJ6F1Q0GOfAd2o5q8FrjgDZK9IM5utAafOroy996rCrTEXKB4WFBvk28efs9dfKZOTiSDvwR%2BCz3UPnqDorB0slt2hlVDI19jtvLdg8EQpoc0HJFG7se47HBeZfGazOPZ6P7NjGJddBVrkRJM4Sap8McgwwwmdHNkQMxnDVkB1aMLJkIR8tThXz2uyI3etEsxdg7ijmoEg3gPai53NFJsI12&X-Amz-Signature=e2be1c4b95d3b923aad82405cdb86537f2fe800da14b5f0260fa84c9582b5062&X-Amz-SignedHeaders=host&x-id=GetObject)

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
