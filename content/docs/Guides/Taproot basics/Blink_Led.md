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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663N755HW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ63WNcGuBLiXM011QzaLTWUntHYtJB7nIBr71Pj4a4AiA44UKt812f9QGNyrBMmAdzDZ3E8p4D0jEeltKPqnUraCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMaChloyJDZZMZ7tOFKtwDGGztyYIr1DXcUYIXNO3Fg7FbcsHcOmRzLTfuWN2QqjeiPYsISpfOt62xodWNXP9%2BQ38uWvdpN67F8x0bZZiEA0TXUG0%2F3k74ap9zBrsUXCZhLkgqUPAbKbFjLdz2JdlH9tHkFyNPD8ZZvvA8rG%2FiisrtfEwuh3hsWgRZq4xjQpkvW0J6RJS3mTDZlkFSupx1C1FXHQIJj47812cUPZ0LzTfedBR47CGqV7swsUhyh%2F6BqXaPoWQ3%2B2j4AQOpEeu0Y%2FBdajFBD7j49GEzufJrQtIaZdeESbPsMk9T%2BDGY45JWZ0dsF8Ppv0xtzgRboYU%2FwHsZraHkk68GhwoFGpuo4n6SAKTEJ%2Flzch2OPIAu%2BP4iRWk%2FQE7SaFj2PzSJ7wrMzbUT3NRBceEApEg3HbH9EOGdNZTX4ftL6T5NE6gBz9vkWlkHkWLhtt6IEJ5IcAOd5FdflwdPAPBMVmnw4bi51i000Ibet9nkHGdK7zUSwdaYQzth4meIv%2BClaqb4QIdryUWhIt9q1gRLP3K9KxGtymh64xha9PK0wCwBdqW1vqVEphLwUpxtyZCjJ%2B94Adetgcts7%2Bn5cyryDQX5%2Fhb0RiOTKHem2uwHEGzWUO1RD88EO3RMI3sx%2FpYUQxsw8fqBwAY6pgEgXdalC%2BEnua4Nk8JVfs6HmP9W%2FD98RpJ4oyhVbl%2FM92PxEVr6ojhJB8Q8jTjj5OoBhyAKceAYaZfB3DgSMdTm9yyD24sQJyJUQhoJSCHYA%2F8icCdiD0v6kmN47MF4d1D34qQnBMZ9LOW3KpW%2FN7Ori1F2wW8ePM0nPwVIsy7NCbTMw3Fd0Qh1gXXJCvPwBpUvK0c0Tm%2BZrVRqCYXxuDQ%2BxvOoDgL%2F&X-Amz-Signature=124f59fe72f54444fd624a33342f1e2a8982bea38ac47d933b33fcf313915be5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSS7DZDK%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuTvt7%2ButSqXd968PHZdkwZ950GezdBJ5a9RUVfCqJSAiEAnfhKEKK7h6B2TSMDwAS5ivKIX07tGxPUploNEOklPSoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGh1tzO2sbKQVD4tZSrcAwUFENYVmTpyAniI92CbJCaMEZuQ0Oyj8PH34vYMM2jgC1TjAbMv0C%2Fr7WPzap1c3z%2FPr27E8lJkNEQoaNrwA8i27jsxIqh3HISxPzClr9qdjjdfXsj0tcxsAVGE1DTLIcx4IymEwD3LC8G63ejfLovVVc27Kjio%2BZiO%2BfEg6qBZd6Ez%2BfQqXFTqheN3%2F1CEuDu0hIgfMr2RMWNJZ9vYI9701CukbP1A6xzsonfVEuXJ8bSvQF%2FMbe9z5JuzcMW0MfjgR%2F5EbkcvMxQ2It0ndDOMvMpA85G%2BHinZFjg9BIL61EV1FfGLeEkO%2B6ueDF6qMo74WIjimT1wzb9HZc8pllE%2FSXUBGZc6v1%2Fa9KlVe7%2B2wmTCogi%2Feb%2FtarqnIJKrvVZPPeqwT9Evef%2BW7mZ9JaGtYcMhvoCRFOd0YQPZM4JEp%2B2hOUU3IqF9Y3f6TM3lHv4a6%2B6BYzjNfrCTqCsBVFh%2FNrD5IzBDJWAhV%2Ba2BkVnR3cl1sSK3Qsp8jLuJ4%2Bq%2FxZ4nRe2JdWeZi4H8CO%2Fhm0X9ipEUqdldg9961%2BZyZ1PTXdfZCc4BcFbQxbREZNKSjzjWM9lebMzJ00LD%2FSMuehwwkR9%2BpLgZyLuooKPixWHyanxNWbx8%2BOmouRbMNr6gcAGOqUB6JBac%2BzxPWb9UxGZSHztMgcHjWOYxmbfuPHNBOq0w%2FoSCsXi4t%2B%2Bab7hwQNvOPc%2FLBD1KUDjmBijvPSWCw3k83TfwejlvbLQ2FAz3euUztiiGh%2Bz1fUw5%2BQq4NA%2BJ%2Bf2n0DL0JH%2F2wl74EZ%2FXQaojLhbJ6BNi98FpJVUoIcIm5DxwiL2zkZ6eITYIxlkYkg6Jlsni3AllUKgtRVoY1kxSTRNSsng&X-Amz-Signature=f8422fd33518646892af456598a6c71bb955abfcd1d4802238ebc8eec2be5802&X-Amz-SignedHeaders=host&x-id=GetObject)

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
