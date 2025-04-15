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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDE4TZNQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJZK9yDGocKLnXVFkgWlm062xS5A08Sp9EEDOFM9eu7AiEA8BOcvP%2FN7Zl1ZY3YZd4OCTRPun45maA9FCVnldMEAxsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD9kK773RyDwovbzISrcA8aTTXg2tkBKlHYKaIIVbSvmd5q6%2FBiJmHqywznCXiNaqu5JbQJqCdWGaa4esxsbAMxUYZrrEK8n8S1hL9tJ3KiszXtjpNh7%2FIjZea7Vnmh2rBIwyE6PHVtzXpFhl9o8CUJ6DToRTLetSoJPO%2BHI6Cnyg7Xq3FQmuIVoGMZywlw8Q9ipoAkNTaCb%2BElrJcZ%2FPy8A4BvZSQXFC9m4PyFBBwpdXHEkh01BftzzAhAtkP2YQHvbGu6CX0fFkycNeOmqamgw330DjcyWS0Spi7nVa31Z%2BYHAT9sOOzyVJAS3RgDpW771iHXpTIShNIOygb1%2FnI%2Bhwg9aEisPu%2B4KhmjqeaWT3Jpsm77RcrUPBahcNfo%2FnNkkqbHuVLHQz2OEKTsuAXgYhZs7%2F88WGJqzjziOkI4zACb2TP3fSRBtQ9qQVLm4BvbXLbfk9C2RUfvutl3Q7Ye%2B1i1UG2rLA8EjRvTs%2FJWyNV%2Bl6aAv4ehYDuaeoCqSU1eNHWK7FIBBDUmZLl%2F1VmOMOdXwIBGyDkxi2LjarYwyhZoijLllDslYIafZmmGUVMg57kq0ekYUUH5X1vgOPSJrgTP9%2BdpMXv0Pf4CCraXcX1wxyJDX9UXhVyvQo2DwSJ9O7QQTcHDA9TpEMJPr9r8GOqUB%2BaBzrK6SkRWs6vbwXjB75aPowjw%2Fz1aLedPYmVANG6SfjKokEhdtxmuWGeJIlaf7UBfGbN8B7WmBciC6NkeNf4d63Gl5c662SDlQ6pIW3vh%2FZ7m3UaBnqe2Am6tUJ0nAIhFUb98CXPLrowLdWB475AtfWACNjPnr5oKqcnCP4MZxsbX8ktAEnDBdwY19A81vRFCOZ%2FALiBO5p9i%2Buekx7Rp5z%2BZC&X-Amz-Signature=e26d210d7543236b4b3e0eb2bdb764221dcaeeaa57be56d3ec2102e3106e7d58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSCBSENP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTLX2zcqIwMlHWfdEKvRkGHcI6lG68yUGhFKcTHHP07gIgHt%2FgW6qhBCMgeEF35su8416G7zwTiTfgfEyk0W5e0dAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLRyg9eTr8vdZxJZVyrcAwkIoBHSdNq75FbP82yD3OAMPUG3Tso7Eq7DopCcGQmDtmi5oDCc0L0Tbc5hKTKayr6ozU2dovRqbxaorGL58w1CqQznlYrw71jwLrkQKn6L%2F1IhWckQhDCEV7hflL3Xk0x8GpZNhTHVvfKKbcO2qmL64LA%2FLFpZtsTnnQu2BooGwl%2FNOVGeVCWxBqFN0PAe83ctvLV2KHmtJRE6edwZcKbi%2BXeVRkGbt4MT2n70ZXBaNCD%2Bpq%2BpfHURX93QXNbkmQu5FmZTcSvvWKzYSEeinLQqGeD0hcexOxXgX49NsxTc7vQBqt90gswdWr4CecGoF5BLMZSnhG5oeYlrodYjFaJ9vj48L71YalFh6AieHf9BwEiFyp1lL0m8aahycL9jxGPbf%2Fo6L3dln5gU%2B43F5eFU9rny6yx%2FT1N%2B%2BShVNy0gPKKzSbZiGJIaUUG4zt32A6bsl%2BtOoowh67S4JIcI9IAchEm1nVt5f%2FsFeL2CX18M3zfI6JzL6WPOodM79l64bASqVk4CAi4BqpGa3bIqzINZoOoWbtUGCMvsqVWEjwc%2BMWKduUo%2BmahggwmIxwBxRTgeaFreoQy0uBYnXiOu1Dyuup%2FX6HVu%2BvgY6VuWGwbpdsC4mgj1dUWFtJC5MPjr9r8GOqUB81Xdt2nsY2KQs%2FaOgyKsHQ5F2BW18ONpKW7XpcQS7dRd2nvdc7v91SfWSEHykAVQJKrqg5DKB7hf9ezuXRhtNx7PIR%2B0jksybInFutMSI0VEd%2FBX22xGdjtKHQbnXvEF%2BWzgNJwrIpV4B09TfsOCMXWCYa5RjXvl5MV25Ff1LwklKWpDbBMyXe7HF4iUiPceehZEl6iaQlingi%2B16ZiK%2FU5I7PZB&X-Amz-Signature=cc0e1f34a530a31e25aedc292d3bb2e1e7d6ae92d6cbd855b27b04b295f590e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
