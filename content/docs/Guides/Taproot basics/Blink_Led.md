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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITJ56GV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDc1MOzMFHQyVJe7ZRISFpvpUNHVRcFk2HA8bLFuh6JqAiEA37I4Th1VlAIxxjniN9cFWDBh31UOAdYfp9qaVp0QDrIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOGoa2vcUx0dyw0J3SrcAwpXqq3RX7BUZ6z2fu19n74ygV4qjCPkkJDs4LxSqhEdESvBzmFgfnqssTl27jgTuFk4iJ%2BeaW5suc8NrNgb1x7WNjziFUEzbHrkDjXIT85EEAGvFw1jCYUurnz0uI6v%2BJN0KIkpaV7GoXXvY2fEZzY5iNIEmZ6qHDx0%2FOk7zLCcZCdQyHAGuOVgqHBTf9p5cwebO%2BPG9tyKwyPx7pe78uJkM3RxTbIRLsvrn0eD1S3fEJwWmtIffxoMMjA47M2YdckrR2bvYc%2FVxVAKo0ZaBJhxYDqV3U8%2F4%2BXgMW%2FIn8WUsT9UCKmlYeJftUYXKzc1xQ1pIBTyT7GsUAAmZGs5%2FtLm%2Fn0QY2Rc5yh1Qnej8%2BHsA0U8IJBbP4qu54c4BpKmB4exlACWa8ekmI84rNRZai5scy6I%2Fcs5LUtLBrTGg4ZPOD4JjDKtb3CWIYbm%2B2bMEM%2FZl4c%2FchHdjHBl1%2BSSzQD%2FHfYUbde0TtBhT%2B2BZIts7G9JP74Q1yDh3j3C9s0Bf2APH2Kp%2BwW7fJjU2N0%2FOsdZxTqRieWlmE0SKljSwO10ymh4AHls1G0c7DXXvwr24tc8yfi5pvASKLhC1HuT9gXo4MYt2JaG8JP34FSl13I%2BYEo12VuzJANxfoXpMMeSxr8GOqUBXUhJS7LEDFkIEQefcC3pq2hxi7th0NEm%2BD3e4bdwK7EMA9m%2BJtTVNUtZ9bN33blqhQ4U7eLzNy3aJqwLjIXxs5sGVpgUIyqInPpVoSpIXNA741JoWdPep%2FPnfcAorE4bR6eVs5SbxidxILBdT3%2Bm2Qe2Y3XiLKQZZ9Nj661Yho227k%2Bj1O7aakK%2BmlnWXNkuVlPdUkfqEadaPLFwMOyG38AHd9Er&X-Amz-Signature=d469b506a2ffb10693a9bfc981e59be44dc16c2cb353c7dc0adb742203be4382&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TZ2B2R%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcv4gMi7sG2G%2F8uomUMY92chApHv2N2xAB40YAhoDxEAiAGwCOsvr5GPGCTnEjNj3LLsQ3KJM5Nn75NBW0cdeYaair%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMTEOENp9HT4lAyCDQKtwDEojj9mF5jTfbrxN%2B0zmwrND%2F%2BnzcJA6pEvFt%2B3y09M8gkkx4yCc%2FX9NzMKXR8GF5YTG8oVICSxoSHKKa69MVPZKwXBJozR1ZCUmBY%2FZGmDG3nd6hrVzItmfeVscQ0P1FtQqrFqVaIriJ19E8%2BYu45URQXfwzawvKGsbJDpKETJY%2B23cWj%2BfrFdLa8Dbu6zxsde9SV%2BNPq%2BfRnBSIyCoNF5tm0uEpy3g4ljJbR869XCxzmW%2BXzwyJ0hxcueeuUkRhSl6U3JixEPEMoauZJ3rX7XqMEqqLvDUizF3L8ox4qUCDMqvh%2BHWWwKecqQ66QvuyJeYmHihxphIThvmQbg5He8F4yyjqxS7qyAa44Z3Yr6fW2Pa3PackBxv8qSpZIi8I9nI446gykHiP7qme6q0WL8i6Ya2KKY0vh%2F23%2F3t2vRMQEMC9wvvSDdSFvsvVnyhuLg%2FtBIDG%2BITC2vY38M8fx%2FAes5s7tyUJ2MxQg08ud%2FxUvY6ofc0scsd2l9N0Nk4bkcMARzGgZnYEeeH3Lf0QsPzNl%2Bk1%2BN0N2QN7O0Wrms44iXLCDQjMSYgEyAcjspswsQIa6%2BAIef5hNGGfF5snWVnnvXFCn%2FQvLtfJvQ%2F0Fqx1nNIZmQRuI%2FUrVA0w6pLGvwY6pgHgWmb0apL3wkNoBgkJXOxNhlZrA2BW81tq2ZtfkVNqQZvJ8wc9F4H1m4%2FtKt7WleohXiSab3vCcNKEBxlMKqksg6vDWzU4h%2Fb3wZtzuCGmf3U0gGYp9Tc65KTm5tgImT3bxEzLaPKqvu3I1TOvzohy53svLYqa4V4Y418SfeEuhtgn4a5%2FixzoLWK4dCtvZkqJjPjY%2Bw7dCz1mkgRvTMiEHHdconX7&X-Amz-Signature=5b7a44cdc9fbb7c16593809eaf7db5227c1e5acb539acc3998bf725e50604fef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
