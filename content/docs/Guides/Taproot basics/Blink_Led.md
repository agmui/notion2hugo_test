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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HUE74T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCNxE8xnRM0NZ%2Ba7Uov4x9gbn6mFor3zbiFcgqOc0w6XwIgIzRNBocncv1IxMxO1VwBlXOSXUhwcBiFlF0f3lqHXUgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiB08a%2F4%2BU6XhkpOircA3H8ZCy1tu67w31gy7oq%2BrftKK9enPnjwIgQk2dQCPwcrt3R6raO0ElCoPWw5MPIV%2BQK%2FE%2Bq2nHTE%2F0wqaBS7hwT7QnZBHkcVRYrLvQsgwfaYdUI9HINVPsRYXNRUCFYddXlGTzuOHj0I%2F45wY3oZhmsBOooJluCWLPIjt08eeYJec6AiGz5zTcLGA8O4KP3txCCzV7eLXh47nPhHfWwCYyec7xUFgat3dct6ZdNuso1TE2Gc9LgvnyDKQmzK1C9IjuxYX1PXIdKQwXyjrs%2FcqxLK4Tcrtw6lmh9gpSkGpq%2BVALIxXUTFP1zqSq5anfp4N5TR7Su9ggYWtFCtOsP%2BJyY%2FJoPIM8QxsV7abRh83xfIWMPOkIBs9AhBXUtaS%2Fnhe41xewR1Q17WnggwGaYlcYf%2Bzp1ZTbSX6qywNITu3g3muFyNCUkpa9hxDsUNVndpc7uXaIlvks%2Fx0ajlPmq0EcbHf3LBUU6P0D%2BNnihSQO1gi9q2G8m6GpbU6koguCP6oEy%2BOVca9Nu9c%2F%2BFJLuHEI1HTMz0Goudb5OpKab5A301Hv%2FC9l8%2BnO%2FsrNxuSW%2Fuzb2GVZJnUx8HbAkl6DKi14kyqYhNL%2BDq501tP3mLEWPp4Re8QMph2C5irqEMI2qu74GOqUB95QklyVHr0w7BVYlm2d%2BgFkAW8Wa%2BHGyxO4zekn5jake%2BAKUhChu5YuVfFBVUBErx%2F3elAeD%2B3WAqKCUxja6z86IdMOw92eF%2B8JQepp8A5QfYbW5je63W22M9ivqJ0JyMgq5sHoEfWWP0qAdYxBQRSJOgTkp9gaP6s8dVFLli7t31Vf%2FPKrLs4ZPwZ0pYZ9F%2FliXmbElbVWvto%2Bjo9EbCehsOjvw&X-Amz-Signature=d643c56ab008b342ff41d6f65c66f3455072c7de9fad7da498e738502464526d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEFPPJU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEdggj02XT%2BpeK7ySMDhzy81DVvauB%2BL1H1lzASnoz5nAiBRSJVHI9DuksFDshnnUJk5fgSRNPWVJ1GOw%2B2hLqbXpCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfnEthg8KgHfdCTgvKtwD3ObJSSF21k2hT8Ud90o8vWZQfFv2J0UtlHP%2BJX2O6akU%2FCKYUD9JEt1C9%2BkgVCbZb7s51RLg5n7tPzUD8spjBaBfTzmMz4hZjVVWr2ivoMoaMmNZcZysaV9gAgYDpp4koSzz37VgvX4%2FKEtcFjlPMFlOJnGouRndUfQXzBxux2MWo90T3UR7tv5o2%2F1ebgLKBNYM%2F7mUVwGkQ8n%2FjVZyZuZTZ8pLF9IVZRAKXyKiW%2Flh1xdwsr77pkccoB6hsK6HWV1gux2BHKwmJguBUHQJI9dUg%2FTBUzrr49DzUYSm0YXddKcS9dbJJk%2BGZS093Rj3yAv4qG5Y7oYotXuxmZ8J22x6swQJ%2B5hR%2ByWXVKBfTR%2FCBj4EJoqFYtFOnz1KlnZEsf3zDPAFZk%2B1bYLdB5BIPy4L%2FJ4P4fnlztm21tSaDVw2cdJ1mN0Feb09A4XdpAwD7IL3Z4r0GngTncuwHj%2BU1I2lKbtMGd%2By4Y8q8D45inZJPGMtj3st8OlHkIHkIOlIrNW%2FC0oTYP5B687NzW7KWaYqoJAiuqVtVuBaJT%2BJ9BOQn4LB0X0Ed2bJeir%2B5VurJ%2BRjYYJE%2BN2qj2Wpvx%2BKKvvS4e7tP1RQ%2Fyrjf2ET2tFwAarP%2Fh1piEPVgH0wi6q7vgY6pgEgdrGZwwpQsoIV4Av9dZkuBA5WMxGLIlmY3t%2B30c3q6zrsbWC0wcdX1kSveogGo83GPiCnBB9R0BI3RZfsTd%2BhJ5INUNnkxIPfaAPToNXKt7hREdzdEtH9WLgzyQr8FOkSd1pnBqmLnn3SJKmvE5lJ7cpdlMqypwKYEUbpaIlcAmAjeM7DpYtcOyLtf0xRKFpyN3G7UdIiUF0M4yHqx1JZdjaGaMRR&X-Amz-Signature=d9ab687591b09e8b8d642bc88a2c040ec4141c22ee2f741bbf4a21067c0f3a15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
