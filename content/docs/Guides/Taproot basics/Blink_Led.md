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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4KQE7S%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAySNrqyzjdqFHiJJIokD4FaG4JggABjUX68MAed6n1AIhAIxWWovB5Kgkqu4d8vMliHZJ8WtYP8l57EhY09qRcNOjKv8DCHwQABoMNjM3NDIzMTgzODA1Igz9cSBXdQRPoELGad4q3ANjGIuyr2gSXx7%2B%2BM9fih4yGJGPjAWYDbG4pBAZvX%2B3xWREpczS5cRfFCc1wlefMby%2B5rnMKcqf2RksDekZ9e9MM54LbY4pznGdC8Cg6VK6XyvSWEY0U2gEH6zSFiIBubWgF9z3qb23dLsx5J71lea%2BZRH73vggydpHun7VaZEWoM7dYB6dz9%2F%2FrY0mkxwgpeP4WID4BndqSlu7bTRejmPav6risR1bHv7%2FMQh9qsXFH7SHnpMs3te3kQUVeB9e2Oeb4EGoWtEvJf2kzOLPJeZ%2BkvMM1NGJNC5ivdKJvzD7Poyg7me7A%2FgBgtcGH21Go%2FwsSqHsXtk3ini226S6t9ky23y9Sj%2BhcRfFSnnnmz9UvyXAZ3%2FqWioIkLzbJxEUIAtkDKYTOH1cMvV0W%2FM5R6Lh9uN4o8em6R4rdc7AgFlrDsBN%2FHOAFmOhG1VzJ%2FQ%2B5FoC4t%2BVfCnqVxUjrt%2FCNXSBRBhdwUxDOs7P3aMeI2uC%2BzEjqb49kaNSyZanSqQoUqVrS4a%2F%2BAvsJyLpBqY%2FcqI08K1XYdOPfS6j%2B1zEVw748hYW8sALMDzErbVB2O789rzrhwcUvf76oJf5gKH7ZF6nVo3cmZD1MYVDgsnz3CJPd53U6WuOBXzewSu05DD8lZLCBjqkAdjfvznM68aM7RE6y38MT8nojDqhT3%2BWL0POp8M%2FJZw63jbOJxgasvGP7KJ7b%2BHpSmvMepmSlsF7APyukq8iUxg7eVFOag3ocOJU3GuO4skL7GU%2FVHemeF6e7ci%2FZ9yQ7ufu90vpfUYaALGmoIgXeE0ZTw3%2B1WBULAp1ieK01YVbvFQ9Wh53%2FtCOJ5wsfjf8CCMD2iQwaeVCbflagI%2FnH2ZI4YFz&X-Amz-Signature=faf268855595b7c62f075db26e924cd4123851d0710265461238944fd4920c09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSDSUGZM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiMo7%2BR%2Fyc0Or6qFTjHu6V1ekwLgKFAyWuWEtFI1X5OAiEA768vlp6f%2Bn0PccLypDru0JBTYDa1j4lMYxWlKWcxr0cq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDM1YesYgFre2s%2FRW0ircA5p9l6cRPvz%2FTY1Z%2FsBNdpd00vuwyl%2BIafrOrC887co17pjxsROmsclCBgj%2F%2F8G5Ds7NRPcnG8ByXs97htd32f63xdCR5wDyeFOVPRaTV3Ozp68dY4ISEOVT1uqypZ%2B2SENnGxAFx2xQ%2FNRCNqjscp1FGUef%2BHBDUVbmuZQ%2Fu1ly8CH7gXqupRrs14rFoAEcRi52adtCyj9mwmCABoG%2F1RpUNXZV8bYfkN%2FbdNNDXQIem93qpzBV%2B%2BAOllys4qW4%2FuvkVAgf74yUkyiOMRE29sZXrAZaqKvMsx3SJ8mE36koJAYodcyV0MGeUtireq%2F6ecPyRHHk7RbHiEGpsf1JHIAQ7rwc%2FaqikoYfMA0%2BeI%2B96df2aVMaAl%2BnNYwWS7eXDpsz1AsIFAyxmZKItUlRaSsSXwVxuaXMtV9u6yjeYofdIlMFoXtzCTd0LDoDZw8ly9ckWXkIp7wjl6yrTcuAMZRgc6dMvdr52I1W2eK9A2hGclsiMb2Lj7OHndQ%2FR8C%2FhdggVkN9tzGJwmNTzP1XYEv3R40pFzkBHlVoE61TyyCbZEWazTUvsC4zF6wW8Sq%2Fb9z0fhf95MO8MuG79IR7CHIccrGIkdv97ypf4P9yu9tp4U6ZVdgHWrBGJYPQMLyVksIGOqUBKg2aPwBa2WtK208%2B71h4QCwiyK%2Fupt3kBZtQ4PcBP%2Bh0j1RxsZ82YwMO5LGhWgF9EDzmdBjuat%2FPA5ZJ3QatdxOHWA9f2Oi0zr1FBkiUrJvKbcyVZI2gNk0bDRsSliHYBF66RlB4yldazm1cgMXG0jdufDRT10Ta45G3Lh7%2BoeF7dgQ%2FzkS7x9uX54DttKtqU7SnnB1qbIkxbMEe7kUhCp8ERiYn&X-Amz-Signature=3ba95cf6dd34372cff8fde02a0640e39f4a33865e907d667dceb658d795eba88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
