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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VTDU6X3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqFU%2BpNHpF76PZn8Frds13QZv9YTk%2BjM2fjXx5yCDE1wIhAPTcY%2F4ZUK9RvyjU7HyvgvavqZaRGxmSDB8xRVY3GFZtKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwx0KOqRHGSBC8FwTAq3AP1rpX23e84BNq7UBNlru86zz0CwzIEWXpMcEm2v3CSGye8O9i4soLH67O3coyS44T7e1ZKjICmqHQeuaQZwLK6kUDLqwlGMbNVsZo4hGoh63KJ1jk5CydPvrkwb0EtJ7PrZerzD6%2BHsg2FLDrEVGt8Fsz8rQtCM%2Fr4zy1CYjzMyyraFL51jURb%2Fhf%2BkD5E7SnafA8Nwujgec%2FLegG%2BEQGakD%2Bz4YyhG7ElDwjCM%2F2aQaHtJR9NLj9JBNAvWC0lMNH%2BBRm16w6xlxj0LF4sMJRQFSX1msaCTcVmqLyCEHM9StRmFgV1wA5sxZps0uocAt6n3WK5VrCTYVsmtQNhyUkAg4eBfUzoAjZIOZP5CV28TWKpbCH9bruWX%2Fr8bsvaWotqf50SQbsRNlMifTBZg9m%2BLqDZ9mg95YoxXfCI4nKb%2FCuEnYPJF5laO4TFlgkcP5cZVOhTI3zNb1f6kxuKlKeCxiH%2FWEez06MRsYMjAZ4OWmsbGqbv6YLq7JfnXqn%2BbQyr6%2BDG%2Fr2x%2BDVp2qWOoiSaOq8bsHxUgpPjRGs85QNe%2FGkD2l%2Bw8aY6TZSjfeTOuVJGK8oX%2Ftz4KXdz5kTEM8oNCXgQbh%2FNwnsT%2BqOPV%2BK2JsgzmA%2BSt%2BFQ0WkqoTCmmOLEBjqkARV6PEbHeL%2Bh2yDUh8%2FXeArzQvqJw1V1NjBXiJleUGIN2V73lOCevj0dhY8u9m%2F%2FCAeGlJuU9BnRuSlBgGAOy99WsiUamibU8Q0uBhMT1IMUtX1rtyB4ntWom8iJjmT5h139voxLCeKgx815xNK6Dlw6EXjggwW2dvoch6VCoVSOe%2FZKf76HJydOFCv4iJ7AUgBagj1WnZBFXPCXdTEC47Ot0LWz&X-Amz-Signature=ddbe0f8f15595f34b41630d7cd7f0263ba3eab87cd7155687f4382bb094a666d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FWFX2F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn0qO02a2nb1aJ6WAWOzKUid1vnlaEb7yR49%2FFNGlMxgIhAKK8rjl5zd42Y%2BE92yVQaHI3PHSIhwjh2rxz1Wd61EjXKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPQf73fV4g0XYdQNAq3AMnU%2B7zWtoFIqQCy%2B%2BvefRLxDuAHWVbGZtSTsdwS2NZIid8Qish0L6WS5CgLI89HhA8kySoLRuG2Km%2Ft%2F8oF91Yz4T%2Bu5KzoWzzzZHs2xNoBr70kEIPlj1m3gcj%2FvgRZZA9KKYTIO4%2BGR4IgpJTLZSjoLUsa4LiH%2B5IEh4Ub9UM2ks0J39j2B6ieysYUn8NJ3z4gcUnI26E%2FcNtXSg7f%2B691WGEjz8qs5iMRXAqEEeV6ZDpdRYYsndIawg0ikCocXonjFbMn7W9g3hoWDLpNqoXsxKrZ6tAe3bIxHx6EFHObDLBN%2BnKa9StTaB0aPnX669mCNF%2Bh%2FSjFEa6RxLoBFE7Ye3H581fX9AZJVEH%2BzBGHgNtfYmvDc1k13qpM6o1K8GFSm1drZgmeQOoz%2BWaEOZfI0BZa2acYYdHqpB%2B3O5ohkeJlMujfFyunKhUEB7H2ay0xg05s04jU0NiZg3AYv7TRWp7RzMBsPUX1E0T6tM8SGokI63zHlwSq4QCqbQ%2F9Vt%2F4dTkjDRLOxr4tDZvE4zuyKX71Fnm1Nt%2BHOXBKqT8IHyo%2F0hqUcWOLw8J7zN11xQYApnpcL%2FPKKSxt%2Bkg9hGAczgjHlNXKY0V2NeASwN7Mu17b5Y8s7rTPZXDADDFmOLEBjqkAZSqdpIMTQv4Rd0Ihcl4HNIGo7N70w8EJtdFZDFUweKzO6WWU%2FZ3gJq%2B4pBLjP3m8fRoN7hNDe6mzVWZN9slFlUzNrw8WbQLzJ7dYzMMKuhJ6bXbD1je54e3Qni0pk%2Fyb%2BiFTJXaPmvSGN6aHClzTDaW3d1bQGm%2FG2BoURqj%2BxwhamFTsS8s5Wr%2FgEIjKksOWurvyrbK561dcdiNeqhHel0cLx6u&X-Amz-Signature=2b724f280700b8fb42f1d750fe1c443bed1870ba6a609b2de89be96731e99fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
