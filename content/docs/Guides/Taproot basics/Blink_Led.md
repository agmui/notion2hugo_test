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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6AERR2F%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC8e%2FSzq2NnaA5Esbgg05wjt6af0MiHcmu2O5jKvAVbCwIhAI%2BoXwMmDx%2Fk%2BOfE6UNAQsip4OLLaerNmAPCVHQoJ%2FJmKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoQ2d%2B%2FohGMev6C%2Bsq3AM8jU0ERn1eYvJozY22s1Gade2C%2FUZJ%2FhdRTsx9He98uTLypXMBWMcV%2FkYk7BSIx65Z%2B23OaAKtXMni6p0Sti%2FrNg0E2OgAh9O6BUQweOyEl9TtwnBDt6Sa%2FNH2z6foZxsHZt7NMrg%2FjB7zQ9XJaIkyVr24XGlLCbQkM6oRBNgWrhf5AByhdfTW1JCU33KqzvMEbixi1kwpKngbf7FLZhVEUFNq9GI3k9V%2BKHGDWZ%2BWvQKVHULhruM1BGMtf76YlnfK%2BF9i1o103oOBPinI2IIWrt5HANciDb0PRK6aOAdgGTqLrfQhJw%2B6aLeDznYrrF27WU%2BQWHb%2BOhNJiv%2FoMkVGnvgBt5ywfHkENy12wKqSlq0W5zQoh98GCW5pWL7mc78IWoJjSSKosITPKuIx9mi0ikP11cNJVUoVZyIOeGtytSpI4F60TSKPNgH5UCXVRwf2ZXmnrpscWjOhQyfFtxaQE5BBV4bQYnRDZKhjtXdtvdCI%2F30opeLFnJLJRosONIu3GxrFAEXYnRJmPCp5TQr4VDlrCq%2F7Q464Ud%2BYxUY%2Fc4Rc0DDmtPdU6VwYa3%2BjKuhPdXiFgIeKbSNx76f7fEBoJ2%2BnaSa9Ee2MKo8aXUA5XrndG4kNWZoNOc9W%2BDDBkIq%2BBjqkAdT%2FXFcqq3NTeMBUdDmeBfPDLVQJSXS%2FxcQlV7bGT0dX3J2jOYSvASaYPfuOu9V6aeZ%2BMH023%2F79v%2FqQAm0m0g0jUnGVvHNQK8tlRgfJeQk0EgmzET%2BQEZoVtETP4bs4pXaj6%2BK208nMfX5KQcqxJkAf0Ri%2FWSBztHcnk39ycaRHxq42cO1mZddToNXdiHJR8SOH8uwW8vLdESp2g%2BSUK4hSMJgy&X-Amz-Signature=59773f91b64f3b23bde56d8c5f1f32604eedc8b1aaa73ecf583ae5e2001c9010&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PPB3TZD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHmDqgbVrjF8IEtcnFDpOXoKTsC7DkJhiPrXg%2FPXKk8kAiBgdI8pJbPal3CSTzNobyqdu2dqbOGDamNTThrWIPSmISqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2qbWzJsWtcDEGPyKtwD2VTqPPt9WZrtmgmY77jJHfpm%2FAHaaYz1ayzLNsUR3PCujWNbqmGZvZgLvkYZy2RpzJNhEwndhZbn6IJEW1o%2B1ifDInVdDijLs0yFiZzU3wVcsyax3VX7cmru6j%2FapQwTamYinW2fNzuUYrYVKaOxFeYB5mYi5%2FyRkAwtrzLMI3zlHijp52rMNLLVw1yZC%2Bx27eGRC5c3F7Uh3DAXjZ2GRRp0GC5KbKro%2BemSZp21tGZ7C07VrhnHNrdEKj5t2m6zMl9oASP7SBknhGIbt4YHm%2BIUXu5dusN1lr9QsCfzJ4t0%2BlNhYDbjENt7qoOehJ1s8Lm8AnWxsslXAAgBpqh7y0bh8Yw4YLMpS07m24rslwG4wtVvNnapH8bW4t7e8AdXG8%2F3u18piBM1%2FSHTsT68DYEmV4H%2B%2BIs6QohrS2muZFq%2FAaBPeJhRCvwuPSxSwiXh08Sgw%2BKpNsl2RsuNwqXMap3cvxl%2Fl5VwxzfbrPBr0U2mJRU34RmNuPYHa76TTtQ%2F68Ib%2Ffbu00kUcFUB6fjIlYFctKKN8Y2aUi3%2Bi%2BS1fKj8hoa7tWGd%2BAioH%2FF5S7842e1rFD2EfkUFk5kQONXXVysjc8tVj1TRRWe%2BJJdytSelVdemiPnSsagI%2BfEw1JCKvgY6pgFSKGq3i6hAHVeXwAGDH7spMXdYRovdI9NjtS%2Frjwfp%2FqHGGTJBBtRUCovEurQLWB5bZNEKCvyBnQf7wIPS8%2FnM0XMjA%2FQscOm4%2FepIsOE82CJCPdLdAM9JU31j8v5fPkoj7GrCwjwZlwjGca1sBfM%2BPIu8rEb%2BBJMm6Tb9rHT6z7jdZb8UgtNx7%2F4YfsYd6mJxYqSMKi2ms3JnBIhr1hq7idJJVJtS&X-Amz-Signature=b4b682e7a245d1ca6ab9d5e5985d23982c19480436d622772a80d7d511d8c12a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
