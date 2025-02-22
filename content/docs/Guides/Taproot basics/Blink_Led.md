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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSEDZN7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjABQ9Qh4gVxY%2FE3pBuDmbKhF%2FINXo%2BetG%2Bkim6M%2FiqAiEA70kyuTgN8Jum2MU31oQwW9XxR5ptKTovTIfBxSX7tkEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGOoSj9lEQUyVOb%2FCrcAwPMNCX%2B08Hflg9zBqpABSkWVzFd9wzapRvKvb44SIV5f%2FL7%2BbIiEaE9mrbkni3yuy8rrz%2BATX6A2zM%2FKinA4soyKyfkIoeuLE2Mr%2FjHLzVLYCQmDgByojoMyVcD66tQ%2BfsT3WOzqt9OwyDxJM1TqP%2FI4uF2CmZFoxSbHWc6cXDleM0ReEW6omBIAsWLT7NXfODl5bswd%2FsdOtVgScj7B5oYdyNaFevLo8Vzu7zd8bYKpAGT0ycDnzqjmN30DusxRqPvMZfeJpt3Glc0IbTTPlp9xp6JGLU3pAzMWrs4LROGCksG8V3PGZcpdlMCJaZd8Uru0gLoIIbCBGfG9C6oFXgpnW4qpK%2Fztu0IKJHeduUi6%2FDIU0sBCyZkDZhaiqe%2BjuPNWQ3uwZgPoJ022L0kafh0EVu9yohbGRtJMbpRqwyuYKIVyOKwZYXtMmtThBc9sT9CyAsMdG%2BrGdsN33D5G8NWIIKeAR2ELj6SbY7BnmtQ2Uhq8hvdh4J6opVI20y8rimr5Ffy9vfmZx6AO4WqSPwtMA%2B1jVx6Ej6AMSyea4HgKd8XQk6ke%2F9HWPf6NzVHdCPKc%2BprKtGvzqNB1Jnz6V%2BU6BG0kCEnPUQfMSDiWq%2BtjqGNMoYFI2c3lGcmMJDI5b0GOqUBn4qKscgplDfGHyFBk0sA48X74Op%2BBphEzt8dComvNSOhtLMdVP3a1xpjbpSEPBQj6m0MwhntPSOglQ0DzEO6x0zchrXV5aDXiC6BqC9rUHEtOKxU5HNcJLE%2F2k%2Fze5Zu5S4sL6ITtf0HSuRTc4wOfMV9CyGgEp00mSfWytO7dAHZf2HMWS16bjoDHIUv0HAq2yeGP9UZSNY3kHpYng6nrXv%2Bz5Pq&X-Amz-Signature=1093773612566a1206a9c2016decfe28d56e0216c7eb1dc4ddaee744aeeb62d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2FML26%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F9QbLP28Cm48mB6QtiAEx51A2CCbFXw76771EPu9ojAIgK%2ByNyKKlMOuqWssUZ%2FdQw%2Ftyl9y8Y5dgJudrwwpP31gqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXdJPQiBztBLMl2UyrcA0NtUFg8oyx%2BdWIxbuaqpF8QHnOPXBskpJoYZYXTxBs1uEwQb%2BmnbJVxXpljCosq1sKG2ilVWPWMT4X1jSux%2FFd3x%2B9JO2hZ4cWQ5aYGMQg54qNbVJ3j8CwsaSNRVLNpT32zFW1x2gHehsG2%2FZ9ZwXHRLzIm7Fx1dxl8TRDd%2F8yD2dl%2B5M4NQzUs0SU%2BmD5qcGvjRZkoimwR8PIUvA1hlM0Q5VD4YOyyllga3jpc5ruqJFUjWd%2Fe9DaLD6Hb58ZTE0FA0qE%2FsQrGO1WP8Czcg7Wjkw3Vq77sqIgJsGhZaUakPP5A8bFYw3w5akWnD%2F9N1WVcH3bKiD5UMaZWR6UzaTuduD4HqVbspOZJiPYAjAelW%2FleQpI%2BOCrXpqe%2FBpZE9aNyvYHVQXWRXI605IBP49N8Yj%2B7wzXGYYC%2BO4J%2BAYt0gYjlFv85rZbH1iOYehiAhTpScmXVoLyaqz9UcZnfqZ0D2K4ypaw8n7MYBJhXpYrOUVxwjSeGTT53%2FUTYjN0TfEf4cEILdSoElXFFrjopGiKGveVUJrWTmx%2BCoVyJ%2Bn4srreenhbPv8QSsHU7K6G9pQZ%2Bh%2FrnBsDu7fnLeodwwimOHu4cA5ywO9e9z4xm%2FMg3qAzNSZ33pBV0zIDkMKvI5b0GOqUBlMzE0gP%2B53AIxgcyytytPFSEQZG9s5nQifC1s8Rhw5%2B%2Bra2dYC%2Fak3WZWbW9TsdhTj5eUExbAeJ1FiqouAg6YyiSQ%2FHr3%2BdG9hUb7ljDyyyj2MvRrnl78dHPa8XcxIhw2yWI0cJ%2FhO%2Fxn1lCNK0hOGYRfNjWaNQBaYBXnzVn1S%2Bbief9JQOdbGINJxkmpEzRVrX1iDH7VkkwXEuifUmWw6PY5vZX&X-Amz-Signature=9f0f9e39033189f3febd3b6aff01c6823c233ca1f67cededaf1e4b7703faad51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
