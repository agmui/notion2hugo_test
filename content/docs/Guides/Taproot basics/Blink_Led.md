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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QED7CODO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDUd2SFSkeuKz2qVZqq7qnjX3HlVgIPusQX5MUm6v4eywIgRhW4l%2BSfzAmrBFQc3R5729cDJaDhWaR2Yca1pu4kAcYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAFmguAVUk4m%2FAQRPSrcAwo%2BhYf%2Bxr2R904lPP0wOIV%2BGDwrlCYuk9niqkjjC6Gu6u37zr3T21X%2BC9VEjhJ5P0j8HXQE1TX%2BuAcc35O8IMbygNl85TzfZgz3WE7lr7axwTRwkcO23jcbcJqiDFnHmCagbdzdsyoIYd97Bl2R%2BK%2FSFVTnrmflzDys4S8ifg%2F9k2G%2B3VeGG0bAyq6Z1bwkL%2FeMr%2BhQsMfiLRzSUG1WWeWb6o2nl6dO6nOyQvVuO9WSwPxLUowtlIR1zyTAsf3CMfX9oqxieDAqJYPfrU%2B4hx1%2FGf4AcoxjZ1lQKJVsuIGEbDqpjHpdBwiFEck0NqBCtmQSuoAQdAN4%2Fp0iLvU3E%2BgeW6FLvggFjX30%2BQnbwSKTEJbGjkZjO25ECmGB2IlMp2v5pQWS1%2B8NHiisctwJD66w1LGGgTXvA8N%2BRYuBjeF2hhbl4Yo9XzR3nTwsUFhHzfZRw2R5hBYroeC2RXTw3a1jZdGbrhwQz33Te14qEkTYGXGEwS7h2xM5CNWq4Gb%2Ffz2B3hFcWixXrWuCfyp7I7%2BWrk417yWf%2FbRIwxB1GcgE1%2F8KCcVzBPd1iQiqsa6eFv9v0hxRiXHELDubTW%2Ff1qD7g0fpExum%2BRqBY6nj9Yu%2FoDM9YYd0x%2FT31F1sMJHQzMQGOqUBe7dCFBURZ6hkCoyKImkChEdGtM3kBYVLHstPSxF0lzKOJj5jJoP0mb5hDXZdDkUyFi7O1AvQVUiF7CuKRFp3mMUl7HBQLF3%2Ft7ncDDuRQ4xPxRiSOkMlZ7Gwsgt7rQAyOUntn4CM3cQvg5PWPo2rRMflarAL1NPJuPqe5sCRHYpPdLcXQUJEW05aElI%2BS1h7v8PMcKcZBeuw9u5sj6QQpdtRV%2BG4&X-Amz-Signature=a8991acc07a3c835727e4c27b76e4e0859ad5a268e7f63293ecc7884d9fac6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KRX2Q6C%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCnhlB9sWcWvAl6oKafZwve0XRTuxDaAwOwbzzjFIA%2FZAIhAITMCpuaAA2iPtchCRAQk%2Fn00%2Fg1VI1WKyT8FuEWpCdHKv8DCHMQABoMNjM3NDIzMTgzODA1IgzlPyApd%2FXeME2W4gUq3ANJXL44z7RJv3efyI2YtWCg9AjLMX30p%2Byk8tMy85UQECdAjcxc2Q3%2BAL2C4UWJjVXwkv44rD%2FnXtAAyi74Q0TtSIjhV7VuvsKOPCTxcbeGySy%2BbkFFx5KZAKYQ7mdJ9C94jyhOqxLbreRlqQqUkoYszHWG8p7HxhVrDgV0diafzNWNJWQ15N1HD01ZL%2FqyNVyAoi0GHlE01iHwUb690HMhWrar0mEMjbieAQ2%2FnOLZQCfpP13KUKw8T%2BA%2FqdJ%2FFmWGfbAl3IVQjimd1HH74MrxldMRhIlJQZU2uw%2BLialJubLknnvd%2FAYks5xPqby1FIHOs7PVSKHnCVHKHNNCrQPZVzcPmoVwmI7JXxGXeZYWOq8FhZV8JI6eRg32i%2BGSQoJi%2BEUF19BTGn0LlnHTtYr3S42o9thSvjZvUsUROErhDm3Eys%2FmArZxDFHE5k%2Bgopf%2FQ48ovV2cYdQkVmaBpebCxPK%2F3k45oUBvDYZpZ29pqoldIlrd0pyLbgXjaeel5lMf6%2Fm1Gl6D57V415QMbuBDkBHpunLEu2l2F3%2Bi%2FRIh4azouRsEaoUcHJubIFC5ShigAHUEVSuq1liq1vISCEzcvWTdCdwvvscl92HStLRECNkM4VhlAx51aAsOQzCNz8zEBjqkASyfEfxK7%2FxN9YaNzUfqM1hQhWZQAQrnu%2F0Z6WHrKyIbUmJwxhLYGrj0Wts4tkZgyGYSIyuxMpilBP1GyiRvFi4QRP3p7jwQvcXhc6j6A3rLqC7JHWieVND8FRPbcqIFwA3UWJA59ajFhLxBBSt5WepKosUZDPFT9efnTetXIBTxXUvHPrhlj9S1cOXxTgwNmfZ%2BAP41K6xZ2IglQtEuIMPkb5Ml&X-Amz-Signature=9d68fea35a3e67970ceba98b93b7ddecaa4ac58816e39cffc349f8e8b3bbcead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
