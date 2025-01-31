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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQ34W43%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKbaF%2B6QtddbS6QEwBnBKP6OOeGBUUEAcDfGctGFd1vQIhALkR6PmKZR6vRBrqpTNmjsS02L5QTP3KM%2F74FZlOYn19KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdYtRXkC92jhiWyT0q3AOiJ1RfwfRz%2F8WYzuYUjjP6LvrOA7tAa%2BmvOD6Srbx12zW%2F2gTKLFgQWr9pC8dqMa6LWioXEqqogMEEEyk0vjPPmkLM%2B1qvXN5lAaWYMso9gvDUGNYcoMKW9dQ6zwhcQbTNM%2BaqfK30%2BzY7F3iQPq625IY9GPS1J%2FuOcprcEH41vUyaEoNSw%2BmMnjr%2BL%2BXIY7DC0itmeWWeiAy9gu9xFCKWbyxhH1B3ZZ5f0Be14AjpQ9Tgk6EE0Xcctyjdhm6QkmEcoc3nfFPC1Rn1sN7AU2NknslGhYZv%2FfUaD7AJUY%2BDuQ458nw5g%2BlWl7mI3hyUDFNWJj%2Frhj%2FdsaglRccezze8KVpt0qTbnL5s304fLFt3kaS3hdjeBRuyXnHMWJEYTg1w1sy%2BdNBV4RaUBnab61rcoqIho%2BN%2Fp35GceDX4kXTXIbAZ2eBl851frQ5sVmA58W%2F0jShZMPUZ%2BxzgLCLQ8rLXbqnvPF9CaIrhathbWOkpsgbqgk2FT3m7wSpGT73RYoGA3d3x9Azddpy5xiJFjtP%2BExMFu7gok2N7u36qPAAZ%2FZFrOch1KLBCjOuF2oSyJYUGG4gMoXpSsYSGsePLviQJKGeFjqXA9RKTrJsRsgUj2kzfbRuUWZvQkHrezDLrfO8BjqkAdBsHIXPRMEqUlIKTtA7%2BzhyXqVOt8xSAMcWUHEgQ%2BQGakkkEl73GhyjEl7de9ygjB7cg5m4N3QJysnQfMUsUKiy9vG1DWR5EOt6aJqUCGieVHHDj5oRloaKlutZXIK1E1OwHBipEj6fXXvwjlO3K2gol6HIwvwNQqpxy0mJHFu6sG7txLMbvBvwEf6xwfTU5h4zXgosMRyMLTw9Bb2iyRXgNddl&X-Amz-Signature=851da7438945adb7b460b8deaedce6dedb7241f3236deedcc47e0c1a2ef2dacc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCZAL3F%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDNPp56YxkEqK54%2FgPzPjjeUZZa5lvR%2FIN3C4pKpt5XwIgBPFo5eSTgWNLta7%2FTzctaD1Hdruuh8Kf1TjMaXxkPQYqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIttpusVhE5Efo%2BxTCrcA6hJeZCCuXTNSSY6CkkhlKZ37fn2LB%2FecmeqgEnOrZypefBFC3t5T0US85ItN%2Fs%2BH0GoR85pZ7EV58D8KlISFmAmGhIq5KkoUSReP1Na54NskPzeKR0UsvycsrazLfpB5n2IoJ9IgVcViAwqWJZVMBuFt171LlCyTGFqqB%2FPUEi%2F%2FOpumKJkdJGf19z2B6jBVKfxPTEtbef4Hdb5nEw7S1clIgHuACapiR9T6U%2Fy6BYQYM48kZnU%2BbyC1H90JTCcrSuduAHnlqNYqiJD2TGu9IyjXUmY%2FD9StBFaNfvcLNSFeAR%2F3b8unT1vr7u5n6sg8Vug%2BQz8sqvVTOjLAnEixT8nx5X4RG9VgISB3jII6DMJORl%2FSqNMUHpAn5yocg7SwUw9tahJH7M5xIFz5Xr62WK0vVzGXbic5l9%2BvPexNV4e%2BMuikFcLBc82ngTaXOcdQK579nUqiqi%2F1%2FQllX2PKmLdku0zq27VhzLBGkfiiFdzkg2FL%2B6OW9rPEPtolomGhqt4eRRzTURfGlKcV3b1v7c6sBtoKayvLJkKgtGwGlT%2Buwsn5SBVY%2BExpGoHcBX38XoDHDd%2FeDIkfHQrcJqRdVRQtGsI3AUxo8nM4q6KTKKPUZ4%2FBNox19ZWt059MIuu87wGOqUBh%2BNS2JEshahjOxMpmthE4Tb6bJ4ooHqsDnDbFhgN365K08YW1CWxR6NwLzdoFyf0ZyVKEw7tXKm8NBwnqHAmjjc28UiIxuke9FlMQk9cj1R6vy8lLCpZfARn%2BatWfLyIcWAvCG1Y3Ig7s2QO3WlVeqYhGvZhoNCnK1CEBV594RzKeEvFyYbt34SBiwK2J5EHyU2TLHaMWS9vBzf1Ju4KGEkODxi1&X-Amz-Signature=bab2b6b354f3e694889f9edb3789b6eeae1c68a8c415f7972ddc972fa9fac87a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
