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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBBTENO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFjvSceGQtzFml7TJYeNjuFBJ0UttrGXmdWPqQKogEJfAiAJjrBz%2FDt23ctzKMZvLNBoUe18e%2BoHib9bW1BQwY2ulSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5%2Fd52Xc%2BIERsgaQKtwDFzQ5HumXYqcVk35Q%2BAIjsfVgt2xxvl2DIcZlhGkVJjT9SHURTRRblXK4rLm6RBMmpTQMkvYaxXm8Ef0cgQ2pyc9xIuseN80Tev%2BV9L1%2FqdK9lJsQ93jd%2Fnqx6HPoZSUKy1zrmYmyYS4SJKJhgYWrpYnDitoNOWXHrrVmNrKYO%2BievcACniOIcBc%2BUT8qfoRlm4I8S6XgSqgDWmKTcLgumlVdkT7sbx%2FV59yhCtX79VZ0BQ2Xvor%2FY6tMFhbXwrFuEC0zF1%2BATgs62UfRIvjhRyd%2FgkV0%2FlIbvTlRRbi3GqG2wGF4ImGjWGyHKA7bYfHsQEr8c41%2FQ2ENAgibl8lrgvC6V11%2FTWbGk5auhhDoDIm3e4V6HcGIppGB4Wwp%2BE6TfqaZNqN9AMrQP6Qo57vrbq%2BgUkBiEx0%2BF%2BVJrqyZzUdV6soIjRjBZ1vgVRcPQFv9U76snNoRYWu9ZYivdy5Opa9tf40%2BEPKtEfZOVhyP60TS2Gc3cawUOh%2F%2B4lT8mHIKVJDWjeXlG5U6YrckJMgukNhayDa8zZDKI9p%2B6zIEsOXZSIvkAgvS2q%2Bb0WdSA43Wyi%2F8%2BvIPkXFk5CpA5NXc4qPlaK%2BjGW3Canj3J4EwA8wbz%2FkYyCOc5PNxa7kwlNOawAY6pgFv%2BHyUAJmc9fJV7JwIxIjDwV20Ax2iPGIj%2BLnheBb9wi0FfB5HBC9q7uSGpiIMoFuZnceq2YzDLgWEAy2t%2Fcyl30Ev2BcN8BdjlCmVzEs6c%2FZQOHcbzcja4GFDxfPuz%2BWPk4Cfar2lpfIlz5%2FrD24u4LTStdFo%2B%2FSqcowcx4e26Nb88LuE4XtzSn1BvsCD40Gfo4wXP6DcWxqw0W9UPme7qmmRSlHl&X-Amz-Signature=1f6ce9cdb8bf6d9ac9426ea646543ec4efc702dca5c534f3efd8089c29127569&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIOL3X3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCnRi40Lu0Xp87vu9fwRJs6EH0ElDkFV9sLnnpBAdY49wIhAJSVj4RDP0CY4xYI52wxO2iHTXFkFHcWmg%2BF966cmitCKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9rM05lkmr6qhdPdYq3APMbaGdH7tVsAe2WzP%2FV%2FCS3WeaBVh2km51RZMc67JVryWu3LjbYMvj94bs%2BJjrrWL3okjtLAfovXbRLpGhH7%2BqVY9QcdWXd8kJ2SpTlgvKRK03MzLfSg3hIEhxqQEqngQlGZXSBGgmLVxvdnU7ZUbmRMMDl1k9M%2Bj8%2FEXwgQW%2Bx%2BGhrtclqiR9F0xvETG%2FJGS6gbIhqg9LeVWGsKw3H8vF4J2rCHNVf%2BewW3zWv0LttUhVIYJ1Yg6GbG95Lw3QxecLaPi%2FmnU5O0na14NII58AZBgTBDsIO%2F4Z3O%2BKf%2FgP5q5LxqRKuqvkwH4PaZbnNHR9XA%2BvSPPfOVqsqCX%2FgeH6qV9heTBEoEaztIXQlcmQVeQq7EngM2nFzlWyI5gVdy3IoxDi%2FBdf61Kr%2FT5O1kcKxHPAuIpleGsut9%2B%2BCq04P%2B5FTAuv0zVsTqPcbwmma2kEAeu8iWmXsjsodE1resYKGz%2B4bpVRrq71NWfFRyA3EjuVUzK082uT2h1XjlTyaSUmCCOm3pg%2B5HoZUyG3PDwBHp7AWHs09tCWYFUsgK57BZGFFGy%2FGS6a4wi4NuV3MskLBi6Ca3swERjKOQ7646QNZlgZvZuo3IOgNJ8gLDc5CglkqThk05t1pFAu8jCV05rABjqkAQa%2BXENYo9fh0b546hKQzNLcG7GdBHORSaBcx3xovn%2Bn7RTo2bo1Cuxc39LT%2BCzBAuHmf6oF2BOCcpEbt1cUh7QPO7JbpTeEGxpi%2Bb10a4535RNxWIRhi45AucK1sZMOmwygxVtXZHr7Oe32UbKaBXq%2FvzAAhtdsjPF6vMmhdKaAI%2F5IrIV%2Bof0SQmyAq6LFeYkgv3i8r55VIowZQeT5lKKEWULR&X-Amz-Signature=4470d347507a7efb9e101c12598f6ca664eeee9ec85d4abd157670d60af75cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
