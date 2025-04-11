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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCEJZEG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDVxAZsJ%2BBSmBs4gWke7NUZ0w9%2B%2FT3CVv6aFVz9dB7Z7QIgQ0EOq9de2fdL1FdGVybYS9HXskwU1vSccN33ObS6fVQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH7Q0i7Wa9vjyCdWCrcAwxWow0uOVdhmEj%2FT1s5OZDQBhplXSjnsoh4Hgojmcl76NfcB7Y4bmsNtIG8iG%2BVWmp9bGWmzXCeb4ppvxkQwN9MHQLiHjyl3adgAUIuWY3JEFn83s7VVJUWVqA393dMcqTj9SmTbDLES4eMyUXlwxa9miXpCKP%2B09GTNu4ibpBGR0efUhJQi9UfRLonvutHKaZYRZpgA0iIdqjG7e4V0l13tgDERkoGNG2JXx2ZaMNTiFBY1R%2Bwx72v2%2B55w3emth2Hrf%2FY5ItN3pfktRGEOJsPK1kDEjCG2eqARa704SnA%2F0GD58X44nxWeCYW%2BsHiXBgLMPFI7TLbg1ir%2FCELdDNb2E54yu6HbfLUXfZjdCO7Pz886A%2FfnPCvmqx2fwJfTFTe5QETBwEh9QpGuWfQIDPUhHJMHZfFQ1ecI3QPH3l5MoOJqrb7W5AGLYbSZ0oRlJooucFWdw5bF54txe3dhyL3EIAa0KVxpWOQ4uTFh5CmdtYIbX2Lbnj0NTI4oCW9LOBvhIiUFfLDmOCkwMfXPXF5AQx%2By8QkATHTLCPuMyRrTTF%2FjbwnaJgGAhTU3PcQjJA3ZGqNC%2F%2B7VPTL%2F9WzLpfvxrvuBK1dhbBCXJLFBFD5F0ODscl1TOcd4Q%2FlMNLK478GOqUBfWdOZLMboJZ1N%2FVNZKkc0QxItvuyuohmD3ZMbnzCSNBjcL%2B1GyOJCbyZZejKQAY2sGB57FSz4QFV3B%2BUkgYtyPMFs%2FSiNiz2u9Us100hWGNkqQDMvN0TnsXjcz7XRgHlUokSXC9UcHbE4jcKhxWTgQ43I3379qcTjM3jax%2B5XvLtlOqQtqt6Y9IOqNRjbZht81%2FvuPq8DG%2B1OF7TYtCyrb9jBlB2&X-Amz-Signature=ebad45e2aef4e54fa0367933a782416e54522693c9dada2af5e79aca32348d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AR6XWO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDRH0%2Br7NKORFcXPvvZFLnKgAbSTpMhB%2FkJSGv7%2BgivLQIgHw5awLY14663p66TnmylvRciyo5ylbF2fs8eaaRGK1sqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8SFxKncqhKPbDnRCrcA6JyTBts8APPajL%2FbzfIyDBKwqecq%2FWcTKX4deCXm8Sqy4gIei9KTa9uLHW%2F9UFMshUGCX72Gl%2BhXWxKUmMmG9WQC5MAWm4%2BxQPBw1O1dyt%2FZoKQYm0puQCqC7rUIEnysiIBYJVFDFIutzCoZZ2lt7bxijaIKoZQsWOcbtqdJFSQXQZOWjWzpSkK2sLh9Hl4JQkvQNdiIb4I1GGwDjFVZ4nETalGQb%2Fz16A2X4czhFYWoHltn1g7eqDp8S95XjBX1I6VIRKfJY6Po18%2BEz7EcWO1yj9izlx53B3CUsvzvGNXSi1wREE5CAiSDyxDiE%2FadPeb40RJxGgDgdd40ec63W8l11leIcYiwmlQ7K38G7xORq9C5cimz3oWz5f68%2B7U7W18Yta1jHpfXALCgiikfNC9cMv8EJEZMFeoqi%2FYIKnDAVooi5oZrZ%2B1voL2tEogVJlsJ6XXscJ7FmEHI3KlJgbTCiFk3%2FsPlx8lyiwWSsT5055Zpmk2PoLmGL%2BxsIKNnIFWCbQhttg%2FS8Ezny5XTNKZi3wLTafbDE1NnzqjoqBDZZ8dgtqsTUy086GVG9EdqMjQzxPQML%2B9a%2B1mCh%2F8C%2FjqilqftRS85YyxZULS5CdvvmhMmaeqYMjVT%2BgEMMfK478GOqUBiP0vk0tT8xpbThMfKPuO%2B0pWAIWvC306a30SjiOMAc7APnG6yTn%2BY%2FYbIUPTqDcLDGKLwBZnmV8WHcc0sfND%2FIUSA4eTmWW2lCDIu7oZIw2EiA0zm1q%2FwMDIerF7ECypq7fGUOg2goDx%2F4nloMEDbh%2FvorDnRwA5mioLCFHqwATFv4dusZ3UA%2F6K41QX6iUL%2B2Oz1sF7lYw7ZYPE8nVORRxrtdiT&X-Amz-Signature=f1e515e6c36a87aeb7a7bdb36927c55307bb6111f46be94544fe5f60c89f6362&X-Amz-SignedHeaders=host&x-id=GetObject)

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
