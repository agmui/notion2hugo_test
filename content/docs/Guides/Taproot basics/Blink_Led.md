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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXMVYC5Z%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjAGLiG%2BhwU1OjlyOD%2B4%2FloBDCNejbQ%2FzRq9zU5s9ZRQIhAPhhIqCPd1lVLSnJPFKmgsZs3FvhFaYZBsOF03ZtnR4lKv8DCF0QABoMNjM3NDIzMTgzODA1IgzWTpGCc6LWF5gxcW8q3AOQQEZERubR0bZOeoDVYhdTR6uQVXaK%2B6tZaEY2%2BE62Zf4fsyC6uCVFf7yd5qeeThaAfoJkzd66PVnTymY6ObLeNZyH17xn6i33N%2FdBtbhHvLSl0iA95TjfpyPMmJti4WMpU%2FJfXnhigPboqWmVG2B1XFHR8AXMhNVrBg3BEx5Pg7cPz7sqqgv5gEY6Ixi521JAa%2Fark3nCUsQk5EwboO%2BRYEfZDlz5b8xAZqgGA3V1W8kZdP68nEP7fUfqPWp75vZ7NiL7GIuBUiFwomy9Lc4JQD1FuHe7dsmQ%2BB0OjCx3PfzsdgtUbyBd5je015tZJm96LNjwTdq3YhYhqttGAuAMqI3fiGbDBqK8R6AxWaN2XEM0hI%2Bl5gOrBKK9OYT4euuGZJCg4Id50Tk8RBTulGZRc03FjoUoRHICC4pD%2F1i1gzWLayrhANTVSacrvTDojKsVl25%2Bs029ssvqdyrRAhd2L8ncnzB%2Fh6cU87%2Fb1RnA7lQog9T8Z7XOnwQkZYTo%2BpqjxGGRaNRIZhxgyPYKY328kMtP%2FvcpDk%2F3CdqnvgTOFAKn6LIB7%2BlCxR4F34tbf8ktUMFC85KAatUtFk%2BiEF3lbOQkZh3COMBSHZvCzCwYdTWfygJb8Vv%2FWSTu7DD709bBBjqkAd04LVPgQkJkiI82I3UANDxazdO43lU3HuFin36wV9EPJMraSpgDuKyDaUhFLRcQZ%2Fi6B6uotn0L2AoBAfJb%2Bfr3IeBl8IaJEI2nd%2FajTmUD0mmzm9nJ4kKaoeTFdfKVYi%2BQ6Mq%2B0b9J3WTJzK0ryI%2FyxutKcrLpeexrYmM3eJd3v8ent82zu8HUIo%2Bcf8DovpB2DPTUVH5X4Fb2gtF8n5trKgb9&X-Amz-Signature=92c54adf105f4ff632c7dc24ce800204f6c57c8e93b94f807658b08d8352da7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2I5HGI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQyNOuSa%2Bp81YvmIG0MVbbJ9%2BfnAPVOFf%2BSjcrNXNLCQIhAIFQVwGKWB6lgJS9mzpRIbogv9fMlI7meFxqEr43j3o7Kv8DCF0QABoMNjM3NDIzMTgzODA1Igxyt70U8GMFSXvrlzUq3APH6t%2FVAIR9RWgfowZLISpb7O3CSXIxI%2Be9tBIZBX6YTLPMLgRP8Ve%2F4%2Bb3uNv3l0Pkra4h5qSNCuAzxZmzGheZK0tb6%2BjkIdTymv7cfAptwTWqPFsozvlyRWQqoLaHX3pgu55Ak0I4M%2FKka%2B287JuUyIfSAlaPXNzaGBcQO9mDajyA6CrC5yMQAUQbLhCB97AJCWBgTzYYIR%2F1v9p30PZs6bHGxpQ91asxI4xHXMOeNhXTU6pedHbvmFIWQWNaZ1%2FPwCWuzqbzZ4iSDlgoICj8Fclb3%2FhKdHRr0RFoN2R9nPmuPLENU9lNbFWH8xjHtk51qony%2B5t5UZTozKfZAiBZ24t%2F47JUg0sXHDP%2BgVpSFvr4LI6YQjD2ouDvmFDkFSY1idMllxAAAX%2Fg3cv8tb552E8qqTaKHAoqvnCKdN8klv75yfsOxrQLgibXusBRj3iQmByiW10pjzHUQWEBMjfWrpqOThFJAqWuafPNrg8Oatq5lublWdxdEyIc5mYJUH%2Fqsj3LtTCseFGmHhDCfwjc8gUNTl6o43ldcEePpB8m3AuAwFfD%2BFyNkrGc1b0ZZ85oQ4Qg2HwhJa9ZqmLzuyuoHTYMelorwxqIR%2Bz3mY3Kgu4eNdO8Bo0qtHtdETCg1NbBBjqkAYYwIqPe8pKKYiJreQFIwy7vRPh5yCgyABTfzV1OfdvUmQ0lmb8YkU6pRZa%2FQTpYpdOJZ%2FeK8DWMPPy5bYT%2FstD9haQDbDJIvFhQOmIdVko5Uk8xsKorK8u76l%2FuTGH7TNneTRKmEq7NGDxtfRa1fA0LfaFsl7Oopb%2B7NFvVgxrXbhXZpnIv7a3JC%2BpB2nPIMvG40A4eOvpNo2sp0LEl9BQj63hJ&X-Amz-Signature=6713e4d39ee1abbb21812af5d45319b767c0b85a8129feb1e1c0be6ba7fbed04&X-Amz-SignedHeaders=host&x-id=GetObject)

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
