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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIPVZIF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUnCl12ZsZLFChrkzIaJIFGuQ3dhK8ArjWfV0ss0%2Fj%2BwIhALWC39jUp7XPn17eVUJylTXJl7FH3GLtWA5jFH0EAO3uKv8DCBwQABoMNjM3NDIzMTgzODA1IgymW4hC6Lc%2BmKW%2BASAq3APrBXZLmNs8ghlTDlQbfjH68EhPgM9PcuJMkox8ff%2BksdQapZxMLWgBknIL9GePx9L3QJ7IhtUVkGHAzzPW7JOg6AyMMIMZSQFj%2B0AgkSaoF1j9mnhA6nBhbBz1eV1QAbNVZShIz60ms%2FS%2FvgvrgfN0JoQtoMhn9wGBG9wALJ09%2By5E3x%2FqzdxhwTmWw2jj6xihBADsv1qSLNsjEh5ZNH2gsS%2BpDcK5PPTszhiJF7atvVvsZTpLX%2BPI91%2F0Im7RBctnbhcyYM7ZkjVUWeXVg8eWUq81gAB%2FQ4PU%2BnM%2BY93%2BlWnJOGEu3sk07JLyMsDy%2BeVVeVYdpgrkGU5ZqYZjqB97yOLkbBH%2F09fry5TFtUzD%2FwtWGQG5iX60Wd2tL8qCZRySRfDB59sD2Eka8NJgcP5iMeq2ctjhit4no%2BHSYGHxPwhtW5VRO1BOpgHSuxDmvwhYKsWsy6%2FvZIH%2Ftp7bGThVcbqaACzcDSt8CAESjB%2BOv%2FimaHkzwMTTP9MMzJTyFd3zL7iYSpJ0YbngL5Y7ELM0y2dXq0dtq7enQYVkeoGyyCVdLjN2wGsOH%2BmYUoXRAklUC%2FRixNZfW1llTDV4%2BgyZsXFrVEJ1QWtrrFFmYD%2Fs63IQBv%2BsoTnftTEc7DCexLnEBjqkAVIkZcYC%2BOPnmIYPOVEy8o9UckcW6Lblv7YEgCuhNvvUd1cBay3qmixpLnqxxEYFNy4xautJNnnxxiMGbO6YDuvUzigLHbe9xcHLdRb381Xjea1Rk8QKp5ew%2BvdwTVASLf%2F5tkUxrGskZ%2BcsO1tOvEbS0ffoOSr102sLUTeevcX3zVdC%2BJs4PypqobekZn1WhVKRYBtNfSuz%2FJ6Vuqlb9QZWTfXA&X-Amz-Signature=ba7264764ca6ec4de81a19d9b200c4c7ac15cfb3eed868a22e53fdaa542276aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5HQTUS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg9cGQAHjd9DuU%2BEkhjOTjSFb7yWBX8ypyAFWAIpp9vAIgehZ3aeZ1By6r3USdrpmom1NJgQW8UcPF6ncU7lDijkgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDP3w6bsbdax3Xbnu3yrcA%2Bqd%2B9I4jqLlX5Y2LMv4c78c83Wz8yEOdrALDT3ot5by1FdfCji3tqAW11sskmAgy8xbBwrJSXHJCC9EtekR2PRPuccYaLrn8av4GAELzHHD0elaRQCKEUH1cPk6MUGsgbM0ee6pGAVqKNSkfxw4DF%2B5vkRvb5en3fU1gs%2FBGzEWEO8dmfizAMLzVWVclqqQfsOOhHeywv6jWGOvnoHeVWqQ%2BBRUZ%2BMLVAnZsi422Gcb06bqGJ4lk4BJgXXfztDtqJnY9OQwKP%2Bq%2BRRs2vwHmUTqjtekFWimem6DlXefKB9g8BzTvd70IxPr7A1qx7vgEZgfUmPA3lSirLBUxISEQJdpZv4aWE5P9tz8XppdoXwwYObMNGbBMR61%2B5gat0Q%2FiEMusOfT3Bgmg9gPWQXLqTWh4nLPy2FkQNTG%2FBgHaFim%2BArb3XCzdGLZpAfAMPKbmbAvEyyCsBMkdGR97e8M%2BhXaNm0MK1nf4JyOTw8NeGCezmpvShuiXhDrJRyZqjU3RyRHEh167tdhyfpDwGXE3xDEy0mbfUpAibHPx8Ago%2FkDWRJnU54T2GcMmL8Nuo21dgpmVnEmH4%2FQQUCwE5CFBqDjjDRRmg%2BTMEe7r39vu2U%2FtkqwJkwkCra%2B4gASMObDucQGOqUBhOcjhLEryOxRzONPhmbc7vK%2FPU4bidBAW2Cdl5dj%2FnwAwCJDRP9wwgVw3NrfyTDCbdHQWR%2BJynSqZc4pJ1aruDLWrNwkmMc0tpVMQLSJMvV7A8QXZDOZFVYlQTkgILAEvLL3%2F%2FcVbq%2BzCgV7kHZjHX2PYryWhWjjvj0pdjU%2BYArOGrIB%2BquTs06eqDXvdRBcDf%2BilCst5cu6hPAgrESIbKUhkjvz&X-Amz-Signature=ac447ece7ee1b4bc56b83e46d1bb24cb309cbf5f29ba877306b8d0f9283e605f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
