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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLH34DU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDkdv3VsE3AzCzYX7Rrsk6jOTSDGZBgxzy4O7Yi7BbHFgIhAIbVs7ikiJoQw%2FHjK0dt%2FRr0zFaTIOmMoEetDH1nYC%2FIKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVUitPIedTIVWZi8oq3AMtugwgwywmvrmqeQ2fFkXXxEVML3kupsMQ38U4O2eKqh2QXJoHk3SP6yWKitlpGlQHZgArv0XCkN6qccSvyY94gm%2FzLQu%2Fk6oy1tjszXQvJKB4iCYgTW01iJoClcdeGGlfMMOhnslztfzTx5HHQRnPQ8VwaFEsKOfyZmzxBpzqT1iEoFkgOY6oEcMriEyjJJ1Ka2EGrO1WVafUIr7C0PLnlsrJ1IiCiSnRv36ydwMvReflyHfoqYMC2k64PyP8fRDs%2BpEosw0skRih1iG1lOvbV73yb2J%2B6IFSXlBMMUxjmNJHdSJcY7HzOFwZu5HokJWSfhzM8%2B3yy5zTB69B%2BkWowUDmh5GcFvMue89SONKqnqz3afncDWcdohTIahe2F%2BVFSXjMTFjlYSZKFP7mHAEAkeamQ7OpYcxFnLh1x8OrqPMw%2Bt7xACXHAV3rXKYy0KlFyCX82P0vVhCa5o2hDGhiRqftgvdGVcJSt8vTuOe9eoU4gp1dO8ynNSpCrvgnCZtsGZGg%2FQQntZi%2Fbxs%2F8z%2Bt7IvBwqhF8nuCBXp8baCFTLL0t%2BJt5yjedyP1YJ1%2BK5LcAH8dGFMhrp2KBTsBw0dV5o%2F%2FOuD7ScvufS2N4dVj76upy%2FXXOUz4Qyl%2FFzCBlLrBBjqkAdhcu499rzbXk7S122Sv%2FX21nWYg8Cu7KaM6NcIZp5%2BGgpRikHFYA6Np3PoX8QWfb6ErIcSSVUxKjxfutgV1WnfhZQMpCc6zMlQ2QycgUAwQ56eMYOhuNAvxQe9UyoNL0EWRKfw8lOhKmJCChTZsXwSNQGnzFLJVl5NSWT5NLYL2Uz0AF%2FdWU3iu4RlDRcF%2BrkTDhVWllhTVbpWlgT9l0mqh%2FBfn&X-Amz-Signature=c23e6ae4bdf86e8665f807c3d7c0d497ebd27447d94808a1c1f021dc262770e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AMT7GI4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDe5RywgWi%2BnUydMg3X4QGf62duJaKU505RW%2FX1kZpdIQIgG2cv1N88pkutUP%2FEmgnbfkx69OZ8NokUp7S44Nd8qukqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnjZI1sWC6pzTbzzCrcA15e1TPjRP7QoeD8iOZpsuV0UNvDmP699qBIjzGKiExh8o0GXneki33%2FCkAzCdCEet6FhCsSf0qi6LTXcWIHn2x5CXydOcQ%2BJjECeNF3pUDokmMkjEQ0wOjhGuSbSZP0t%2Fij0Xka81PFUGUcdjFJKGLQ1zEjEb1dTkKR0eT9%2FYS%2B3sUslh8%2FoZzwmt3GpZWvELgS6P6wobKbcJwOBTMIRyIiIJf8%2BmMcFo2JnZwLS4vOvbxhNMnQtrrcQK6nOs%2Frp8hS8jC%2B%2FZUJThwLknuKalEfqWHTodkaZn4LcikIjjSTNTLCWUndKjZBwFqB6Peu8Xtghfr6Wx2mFybptWyF%2BihbyGwUXwwnZ9z5Ehb096wnT8W03pPJQvtjX0n79qpzHORhcKp1B90hnJcYyA6VZ%2FmwUnAlwX2NdchvF4s4T0K%2BtnDUf35248S5qoblkpiZ23mWYTPTXpFi1zX7hIRuDNBleTcbXGUZBYs5I8EyRoau79%2F6hpq6IRqLK67rwfbMw%2BdbE%2BNHpudiPmaHTN8JZJKNetBsDXpmBJPw7IVbHI7p4ZD%2FmlXbVnjBbRF0tIXL5fkxiNR4cej1QqfParoxWqTYoQpSPFP0CXjTgy2zEDPEyVjRKJCGlPwEwJTYMIGUusEGOqUBkY6cv4QX8WDdfljjRfQgsvWtJIqkoNEG0wVu6Ai%2Bh%2B7ojMZBiaxJjahKd7Ji6tp03bRoy3ZBc2Fi6bwstVKf%2FbUbN2rjXyjbgUHPTjuPyAy3EzQ7wtHonNY1Q4Sre8ew08YvR1JxOz4d2gMucgPwW4SdLH6%2BaYnadE3%2Fx1eB0fu7Wd7Pqxs1Wz1f8d0UnIxNL3yPi2PuecEt5UwwUdYltZspcciW&X-Amz-Signature=dc78d019dbede3357fa8828f0289e433a03d4435a3c53d1d9f1fd51568301f59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
