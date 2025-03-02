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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7E7FUUW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENgZAwGNKqXH9ExasuEhBGxABKwU3JHyg9Kx1c%2BgxHyAiEArLq74%2FZIezlTV3wEQi4sW7xaxhlmGdDy%2Bbr8eVRooD0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAYKJOIgHOYSlNOASrcAxkkO8wuK9sxcFLYuyPlJvKmwIOu%2FBrAs%2BTqc99e079UowZ2vzi1MsfeCu7bDuyJAG%2BNl%2FrQrkaliZJVLRojrdDGIqQPbfTiUdZQRhQhi0qA612k6aRYx4lvnvFM0wgRemvQafR7jU%2BBeDJ%2BiFGVLje3PzGxkeLP72VIlUXbcCdKCLRfbt94UOyIe3HZObAXXL2g5RNmcTaUAVun%2BEmxjNW2Ph1OkbQRtDzEMwSeKxturkkjsm3SXH6sXyeVFLhhS%2FZlG3jYbfiB73pil4Aq4y%2FiLyvQHwTTTJMdbbdAZY5L3tCJP9ig%2B5FhYdKmH3QxT2QxsHEDjwLu0s9ztEEwBnGWZqVAFtQaIdWOr78fNwIsgE7aAvOZooWn0shq7HIpviQBAHSv%2BAcVhXOVwkEomW7HSeQgH7r3txirNcbFMXff51mjOxnUL0Z3kOTgSS4%2B0TRF5iPdjSv8bUqvdnGmWsxcjP6QM%2B623x9Eh9zeyVQQZBifFU4Oe2pTOktdF9nA0L5oYRYTlIDkquqBscA%2FLHtvqQkYIe9dyNjwaxZ4aNhNWiTWBV%2BTdoc75zTNHP4q9cY6m87iEnbFggnhZ0tPDCs3kxjF0braPqNuT7Pq6ruzZKP0k6G6ZwUfT3PwMO%2F6kL4GOqUBfnrvuiE5tC5fIUkltBFtZXJEv2kDfP8OSePxLx%2FUcu%2FAl0g1AzbxwvSUdYqeuRjLpet9SwE5aB0nZlzfKsvPYgmWjY2CXQLbqcv0BQkPVzPo%2Ff3W3pY58umoYWqmsTHS3YwDyY%2B3OgJnhhtnQwqpjU27RTYUKudnZUDgqCn1EAIJTt0qX9363EhfAmrfwTBYuW9r9mUCgPBc7uJqvKjRXLLHZXEb&X-Amz-Signature=4c28dbd0f3be014630ff7ac19087764126dc772e840d80ebe74d8915d7ad8b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776SM3NF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtHlbfb69jsYnKRfzRKNf2xUFz1tHjasfNcMH%2BFSaPJwIhANGla%2FSzi4ji3M7piM4yIalzyBra3nPliqgtSwZtHSVyKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgyj3zhqNGJHCPRasq3AMMQZA9%2FCgDcMKpIzqdtpDjcBQBZK%2FP%2FEHykW7qPCT6cg0Izqc%2BB2OzRWIWMA6ubj0QmafPwRG25xnMFi%2FXMGulvgPsJ8dUdNyg8Uh4EUb9nk8AfpWpKlqz9lTnoEow0Os9jwuMO%2FrEnW2FAnSCn3htzXl%2B%2BR%2BWuXEx1ZU3idBvVHHMY5K7nK9cXOTMFnEleFJEmIQaqg629YwIe0V%2FPH0XSaHInGewt7jN%2FXVGx03jOzJbKzV%2FoKpwgPtXV%2B7H%2FAeNuSuWoMj%2BePOED5DQlEz3Y7UDXy0UXqWOtPoC9bfGu6LzDBTURmfOn8Eu3rk%2Bty42G1Q9Tj15JaOLdS77wFkc0Q418xkc5mddpfLlZN9w5XoGzOwhjighEkpP1Q2VmFjRHWfquDpE3TNP14neS29vW2hHK%2BUbrVRXoaIKyR6uD7q5oEziqGikqOtE%2BBndN3ReK1RpniyCbeawsHo3WwyqRLi%2FUwgnEK6BfuttPM7Pzwn76R8wSTKqM03BIpxqhB9E%2FTejaU470gDgIGcE0SVZBk4ggMqk9AWDB7Tz3kGe0d%2FMA7eas2zkDUv13PgcStMbaD0Zatiingg%2BQpe6tB9LY5rO5hKyaQAunjj3rhs5Vc12lajDy8CJQ7YaUjC%2B%2FJC%2BBjqkAenH0a7m6DM4E0lvB7WbJ5y1JSv6aqQyVyjpDzUhPXUWlvlht2WyQ7%2BN7NDex8iiygiTS4Eu8lkK1fSGy%2Btih05sUT%2FVtXGnbGQI7RO1Le8d5TxxL6KpRUnoIzTKd5%2FgQ3MtE00gBFxt5cQ4ailftuWLfUSXG%2FAz2gRUwxEuXBkz%2B6iY5mJiCbQb2kO9g5unjaQoXiPr1bHJy319QJ6umn8jfmIj&X-Amz-Signature=a39162f19e5ff3ddccaa3ebcd3983b5ffdc498a9f42a2ab3fd39615c26c8806f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
