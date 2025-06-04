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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2KS35YH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDZOZev3dxGLqaAiwFui3pq96CwJOI7tDjF6NPtqFUENgIhAOiAxSh66N9z9D6Zi4BGGnepW3JS1poNL71MYmNy3ArQKv8DCC4QABoMNjM3NDIzMTgzODA1Igxtg7HdiaQ4PFL%2BGIkq3AMb%2F4gd0KJWrZP%2FO6UbhdSMvZ58zG8qIxIusjfacRmDonemudaFJe8kUwTzDt9OmBHe1uePVjAns%2BgT9CcmuIWZqcYu48w2NiTMXA%2BwvLyjtMO%2BEdit0b8PmTH9%2FlP1omctzTVq6blYVKJYtXG2oXViqYq3fr1K0VhN1kgsoZUYp%2Fe8yZny4%2FsW6xSHhkwZ7jEpJGRcwM6kmatiuMSw9aT8lXoUaBY2Yv6DGdd07tiO7whGHWT6FCXKVQm7FGCX27zQHk29Ow28Y860u6qe2ghWV5bI41kwKlHuwnmSgKuAzNhVgyonJAqhhDDEi0WyRPDiFWq7dfvdQqACGcXXiYpFQsl3zPKMakqmmKH6SyxZoN2VDrETiwFmL2JMAc3o%2BkOrB0B9YUdjTbyp1K6zeZWc0j8mfuubWaTpzXgAFUgRjs10ZOGPWcxlWB3QwFu1%2FBoRIQaPOqK%2FGYQmpflF3gdTXVClAbmjc87rjnBa4FbIDrTZHPa0H8N9cd2oEvd4v%2BZM38m2QQ%2BlCic6APSe%2ByPyLCRGcVQPyhuq3OlYJ4ygUOcb5K2x7ziW0DMeyKvVVI1zXbmAhCRVFXVWEygxfck4nmyK2nxU4cilVfBzVWGRr9igLIq1fl%2BGZQBhADCygIHCBjqkAXfPaQqNW2f5SBxrDe2UxsvBwSNszOWzSdFqJVNSmJBiD6xFhIVxbGsfg%2F62VsuOEnV%2FAB4P6QSz8rMi6c4fgMWkt1%2BG4lsQIewTPUwlIX9EqIFCR%2FkU%2FtsZZW9TMR2DFNvxPKXuypjvNnqlsbx%2FuO9xDQIkaBuEAhfTBmXqjtUf%2Bz8MMsbucKCyfeZ9VQ4UtGNr1GLdqOGe6tTfsg3PLXHDfPTN&X-Amz-Signature=45667512058bc6543f560fb59576a5c1c681332992e4527dcc88625bd94d985a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VADCJEOG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCdxjgt8Z1e0RmVGyiaW7y%2FkoAX8f8jJJY3PYcIh3pQlwIhAICeWm6Au0H%2F5sfBtvED%2FfvaNVeumcJzRzQz4kZvpTI7Kv8DCC4QABoMNjM3NDIzMTgzODA1Igxx%2FGxoESpHrswlorcq3APxP8IMZEGEry3DCl2vD%2BWVM4JTAVzEI%2BP58Dz%2FP9PEb04EKkTIhky75GDQLjJHhe5ug0UT%2BKkzZCbi8q4unvxbox6EQ9L1vuDKpvAhPfr0HZ3xVKAR6TA8hphAxl%2FqTE2Cwia9rdfWqHxoTjHnv7Pl5NOXJ2Dl0KDboV07%2FynCm0mRk7DzQcCUahIv0N1PA83CKrDdjv7DmQ1q6nB9RjCksmS%2F800xq5FM9YietgjIoH%2BZAjnOx422mn28hcj6DakV%2FSPiYe5rkYHFEI36HqPQJN4pMxy9oZ1IKtierVnKa1eJqWLUUjFg4s8VykFS%2BQx7yYJQzRN7dMo83uj%2BF7y9T0RUQ%2FcLb62Bt7uMcqC5%2FqAJCIi9WteqaY%2BQPHasDJCTfc4vl807968CPTB3z8fRilgqmiUlZOZwTVlOW5vnrMXTkU3YpeysWifc7hm92ua0TQlocfce%2B7%2FQRbqZ1LqDf%2FCEtWkq7i%2BXEYQIjmAtAB6x3KcmwnTpPJtsMTQWfgETXE2SYjsNTOoHU6lM%2FdRwWhPJNtBUuFqT5MCc5iUCEoDYqbawGGDG%2FB%2FTiCsqlunHM6HhVcXb%2BTikpr62AvXvNGdoPDgd1%2FAstp8y25%2B3xSSP1mrq2a1GFKpMQDC%2BgIHCBjqkAZwkGUo9UvIec2dEsEnRzglvw5q4sy%2FRSGM73jPYzA4obAPoJPR078nr7k4RjjycpOXcQdS%2B2gkGbSK6L%2B%2FdGNfYftcgEfKTVoKuw2uprvHs8AN%2FeLQGNxbBrbdaJoEURM21i0a1Rb3R7ARr42bnjE15d9lZzUIVNS75UckWbb2OkRxTX43kcqQsVbTpnxjzGzDjx14tPWeOmrljBU7dLtPbJ9J1&X-Amz-Signature=8c18cf166deb278ad46614976c73e9ceea3abd1cef7c436055db550c51a86b08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
