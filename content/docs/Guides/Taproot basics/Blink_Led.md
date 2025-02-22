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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FIPWDN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8VzlQy8Cw09Hv4TipwlrUvItoYKZ%2FrnJCZLwUriyK3AiAK9VI%2BAv4E7n7GKCwY8%2F4rovxjOvn2g6YSzMb2QvUqsSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKfwgj5tDvYTJ14vuKtwDj1wPtbA%2FBTDLpG45Jd8YFPlvecxwAtY43JiriSSRuKwpy14K%2Bm%2F1nfoGp9tsFTb9SPtqWTM4hpgIM2om4r0TYAZRU9EtB1FG7dxeajAwn7IGAO1CRSJY5Ad1uqMIkWxpnHifCywE84%2BM3bVKGQkQroMJ%2FwRujayWhoTeawXfmvbnLybMMD%2Bl2WS2ALaDh5qp85yCFIcx6WOFVnyZggQMcSTeyOLA6tJz5zMhzRYGogIA%2FiUOSmXOvR%2FUoCCcpCeuvuTUcrT3Z4yeOnFHTZjHe9inArG7m0Xpur%2FD7CqCiceuG0FUqrjM9zFfUMUoPT0lVEqxFFtyVLRAoY1PZMH2D0UPTaq6ip0DGtKQvO62o0kpWwQJlEupFcZHN%2FvEiJRg6tfchPrzuQJZMOS%2BdZ%2BLTAk%2FgW5RM0q0mV971yCtDtOZIVASCiNuvQGUqs1crqkyw5%2By49zftecyAafJ%2FOe26BBPHmygIoPAOHhyjXKU5jlMfnRBQmEndpoWC6RC2d5pgej%2FgDGnqGVAPyFiiSAlYXApaj%2BkhxAmqUtBWDqKSyhUmPXkGRCn7ym4KLRspiE29tcw0TWpg0Go%2FUG8GMkKpIY%2BdKt9cK5O2bxLl%2FLqkRC0h6wtPxFHMsBERkEwu%2FbnvQY6pgF2IH7Dp3ZSQ%2FPer5j8HVBera2%2FD%2FrDj%2BSn3Aaod46me7eXY6KMKUX%2Bft3vsqoNwDrKmBdB7h23PS3MBhH2l%2BdQSFpxaUjdQwuXD%2FaydOxwIP0tDzAgiTEzMGGb%2FZw3m0B39m%2FZYxBcVccksMTU2iDbJ%2B0bXNuZ6btGlwj9AHt43o1GWbbu%2B%2FNJWqJ1v63%2Fmjj7rTwqJo6xmoTuH4%2FHcNp%2BNeE5CsTw&X-Amz-Signature=237add4b9ba5293874373415462d77478dfa609f780f8ae1266f728437394274&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPDGG3YG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVLBrFQXtvYB4wNb0GlJm58nxvr3%2BGvpEjvzPXwAYcmQIhAOErD3aqnpFMCbCj5Ms%2B7VhXAp%2B%2B%2FuKhUnnqFG4hNpXhKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx34FS7uNzI9IladVUq3AN3%2FJaKB47uAtcnaprX4HZRmhfQGViZuT96BLN0qssw7BQTPkVPIUkM4aFO2HRlu%2FzGrwblKgEe0fGu8lHGc641DgPA7vv4ASNlEexqDkCTRmeyBOwdT1l6buHVR%2Fp%2Bnx8xmeX%2BjotrtjDf5d82bCw8imYt0GOA8F8x9HXf84i47U%2B7sDszpIuyQ2foPQycU6WuOtppacXUkd67lz8bTqky9zjWAb4Mwe6qANLA%2BrIvo8tf9RponrbvFEVQWQnvSUp6uB43c1G7Xfo1%2BHdL%2BRi4fUeSUfpX09DqCLXiXCkVGWRKZ4L925miWjhQv6QemARotw0vjlmD4RzmK50qso4pXcoYYlPljnbuNW%2F9ps2x4rIG3OaYhBbLZhYNpmcEoGbOhP%2BtlAvz5NXGLwanT2ZxVUHgmeWR6ZlpZixwB4C40bsJBFMKmAXyqhFuk4vtt61ZBk110sg0KvnnCmKNrQEGwET7VXaJ6M7LEUZRcYqh4%2FaQBfQZHW2NM1CTg83y0cYhslWf1Vstzf2AQrxEVVqv0SWjHiFJ8VUjdE6gqBOhbOeVZini0xNaQTRYTGXSI4exMLFLiwMH5XoAtDz2RKdLcQkvXoyysYWCy%2FHynMEreLlfgZJKWeV3AT%2FaoDD8hui9BjqkAXXfddAFIVTJzylqDgUi9VeHcJSuVb4v91eZJjmOZsGjBGzMcsBEyKp53frPA40tr5gr84ItfY9l4hlyKezHTrgGjhyjx3WJEJzTyWeYVN2nRKjVZWNVF2rlAksEEgkYqO0tRoTiyMHHGKByXdtCBL%2BBNN3pll1X6S%2FEUzmDllf6OIwE1CpD7AG9VATvso9dXZlcdQy9e0SO3h0rZJhAx2fvY1gf&X-Amz-Signature=6884e8920de2ec5db99fb7f1b14f3978185c5654040b8a464bb6a96570215b91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
