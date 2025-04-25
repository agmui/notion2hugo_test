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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FJLGEY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmiYCOZtU7nxT3fSorsKhqpOTWRH0%2B7Uulfv55NwoO9gIgGHCPFrfpR2aeeb%2FldZyJLFqUjUAUyLAkPORX4J7yh2Eq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDDcyqPzhbvap%2Ft880ircA%2FJlqvWWBJX9BFZtUqdfn%2F1twOLnhh6leO8ch9N5g%2Fnwz7lwARvnPkKEhd0EkQYzXbSswvoA3gFSSP4pYa2Hfu4gyvA0U%2F96EAhnKN4kMpDXuZfqNYEHUIY7op00ZoFeDgSxhB3eE67wyaSotLsNVEwPjMmnTOxLdTfdAZ%2FCCAQeKN3XOm4C77xrxNI2b1AxgCDjCp080YG6uf0ctC4K3oW13JzUg5oOGdSVzUQSxBXHQJs%2BDnES0j5Al8YTg2lm2wz0CIEtR9VJulTICg5DW%2BTOqs8tODfYMoD1B%2FZbvYRhUA56DGH1WVHmxu6HpTH1LE6gUHGV7%2FCJ4pfSRZXijumncotopNRp8oFzjCvXqxuPsGe%2FhvashjJDjvEqxgdYGVAI09H441i6McAgBXr3ZNptoNU6j4DliaGdBNyPloNYiJq%2B9SxjWzGBM610c%2BG9QjP2%2BIjdMo7VY5IEjg5eAlHfH9ZUa2jqJkrb83%2Fn25z3xxERXylwY8F330jJrhMpqt9XnTGCfa6u9koMVPgNWB53hlXKV1dYTr9hjjdtmA8DYNcZF8lEHQYKxXYb%2FikNeW4sXGxgus07yG8B1UaIgPL%2BdnVWe0R8ZlTUfd%2BCXb153ZQRDOfQd6CFjYiHMOrrr8AGOqUBtDiJn1M%2FJXdrkLRPi%2FE%2F7FPL5i%2FuUphMVNNwNnXY7jZokhOAU6%2BGb9bzqSybW9UXWs9RYWdcYDhNiwL2Wb%2F%2BQ%2BDtqqm4qy0HNT%2FWPlnEu5csyN7ALhOhrrBYLiV%2FQrQcJP9Fm3HC7GF8fNPCJLrcnX9ZKdH%2BZmaGCdod9aMpds4799EZmPQLTxbLTHoWpbWl7JfNUDDTRn8iJzhn7Id30%2B7wOvfu&X-Amz-Signature=d33a36aa536d453089677335c32e68039e337a3337c82f28d956434e77f9d690&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7ZQWFC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXYX2ckai3Nx%2Bx%2FQnGfGWyoFtPAtAEX0j8qRQddLa7fQIgMtfHiR%2FT%2BT5tSQoaRcJZc4h7CQQ00lNcnOT3UieZ1q4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJF19X%2FW2mjZhpwp9ircAyZv7zg4sDndrAaGNJm7rw6S1qNE09aIHj1TJfZWQ6JnDN9QO7d4STKn5jP5UM8U8VFiA7VbKjw%2B8vOmiKjAU6HAbHut5%2Bv1%2Bh%2BYcy4w8kkmw7MxgP0qe8IaoohLNh%2B5O6jeXpVVtZpJhEwVfr1Bg18mvC4ZzuIZInNUcdjZB0ACC45ruTk2iIqtIQagEsi8meiOoOiXJZL%2B1vCYnuSiBc7vKgkAvusMvcIz%2B2Xor%2BYxmxP%2FogrAIkSdy4o3pJqinNcZjwxgIXXXWA0Lzy%2Bok6yJrZ%2FzKE%2F3lhtoxEZRdbQHGz4wkIoY1r4Kmb4J1D6N10WLpWOQUAvljDfo7%2BKwihfIya0fH9DAlYGd4xHBkLwnecKiPQnUhBIPzv9xAGlksXWjhQGo8bfqOuZ9uH9FQyaU3uSAgen8Xmem3cwQh8UMI%2BVbjCCPZVlgqoD79g%2F7Pzhw3dsM1MZJpIm%2FDdbR9ANCopgS0mNM8fDfkJPbPRyBP2CDFoxmeLOhP3Otme4wSjq2Vas1E6JgRXNq4XDjED9JBXPLGGjOzDYyyXLyz4xpIxw3foGM6%2BoqFTAIzIl4cfC%2Bu%2FocQUx%2B46Lv7BHgsXthZuhr94nYqi%2Fria%2BfJ7CkEHOTdhRxDT8pWS1QMN%2Frr8AGOqUBGLRXzAA4vz9tghG5mWBqDjnEVdPaAz4bV8iYDaxCsBalKRkwYabFYewY6QACle%2F5yaXdMSgz%2FA7JdoPmS7ZVRrJZ6cGU%2BR1GxAYQjnacNQ86hP5fuUKq%2FANw6vqto34csaRzmGbehH6fdSUzpZIh49%2FMXbVC7u3ZfChqZZJ94xmQzSpA0ktxJXIOFBW2pUQQGwQsUgnalSXCyYDKIJqQ%2BC6GgpLm&X-Amz-Signature=d57767752ee20b913069b01b996c30555e3595e55f7b5df7bd57265c6dcbeeb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
