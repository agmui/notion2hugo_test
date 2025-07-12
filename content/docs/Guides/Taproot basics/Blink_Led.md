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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BD4XS7N%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeTf0erDFGT%2FYzBDSWYsprU6XLS5Xcb8X4nYLXEzB2cAiB6WClneTX%2BSpQi9zPgADc7ENwX3pVX94fOpfJOw%2BWcBSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3IoGscPDvbQg0i1KtwDQZtQ7p2FRL4adB87QYWeBCjES73XBw2RFoa%2BS0sJiYrTMNS3c9iZ9I2phhqo%2BVhABUgbS3rEJEdwxArCxdHIBRoVySI4ih8AQ3yU9NnGwwI6GOhGoPcGksPfwmDGVgpt99lgFjMtYOd3%2BFVFseo1rM5moJXNas3BQhGI4xggnG5qSgnFrtNt%2Bc6Z2DI8wxQ27kZ8QmwZvgSH3LPbq%2FmhbJTeKary0RFOhnubixyhqgqII1TrM1Y0I5A7CpX57FrORHMk4Yr4qXn%2B8hp9DFv56%2BrBkvuSCBpkmbw1s%2BlXCGkMld0odv6GmRHUmDDDOg5%2BzZ80T4%2FUAmci820F9wqLENWYc9PPlauhWO8%2BbEUdGaPD5wpKLvCi%2BIj7E%2FIYXOqlOQbErUOqphmeATC63qRABXpAEsyqVHXwF3fKhQGQtVMlXX5%2BVL8%2B0LF3GWrd5xRdfsNjSZAhogkAcYE2YmHpnfs1EoVd4EIMgRwcoDsU0l20Bdu%2FQn8q0In2mlZ%2BuJv6qAtXEJSnSTf5jshAN0EKlfBQ8j7kkqBqeBb%2B9q6GfJQ8zXFr8%2BIopqgbUi6Pb1qXKiaRd1pZjBxjVdiiEYcAbO1woAJEAVyX%2B5qM%2FPx5fPMK3twPNx3vTpbXAoIwk%2FnHwwY6pgEyzgTStfb3j2aZzTAAU%2Bp04GavPq9MjkkcE%2Fqag7nuhPxC7%2F8k8bjF3FnFudlBNgy%2BXa3YacPKVICAQWtICe0QrsDGhnDuRH8IS1ZS9Yqi6dlqpI6hr3kVneuclpdOpTjDezn%2Bl2hlAEcdmYDt6i8hBiq4b%2Bb%2BaLlOP2qLwkDopSqSTfjPBXG3WBwKU5BqtUf3EN3Wz9bcPQK7Y8pAtKs09zW3tucj&X-Amz-Signature=d337dd5b5b907bd5a6a617ecc078346a42588d1df4281c8ca02801f94aa247b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHMXHHW6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6TmPSWFMKKCnFd8ATp1HFLhrN%2FMPP%2FVO51IO%2B2PqXHQIgHRogvlPfPpIB1rU%2B9G1hrIWQegXBHVmeGgzjgQq%2BQaEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGc2z5O4W8o0i9f%2BsircA0ArRXNWTHX9u%2FS3yI1h8jZGMJy3MRejhPukrqnYEaqbdyFxbG2sYjogzs4ageP5coFdCYRRTJhAkWSE%2BbzQ7j%2F3%2FqT4FTVG4O2cs3o3EPaSAMYzyXdPjGswxPgUonoH9cvFgjJ9ew6lCwNcxEP8qwqG9tm9DWCfBsjXDsXV%2BYU0uj1R%2F53wIiYizy5o%2FhtfSwzcKoxsOBk%2FISUCiibaebCCMJKxL0Qddg3FNp7IEzueo2ongaaqu4eZE0KJ4nBMOlLXIVsY4%2Bk7FTJI1C%2FZSOBbrOXXaayvX1jSBtHsOiR39aaXKVeVLa6zOSldLEmWrzy6ddfpLGOscnFABt7T19hxL3y076k%2BqX3cfCZYs48mJ1UbNyyn3dCR7n0fau%2BPLnjAyCXQYGXpS0f2W2i%2BBwFLLlHGHSdXO1cNqkyYI%2BGSKEEU0oJ4VTju0DS8ZNpmWoTw05m3D%2B6V1C6vDvKyY3e6Tp7IOCAJ4UipSEFviErArStr4NEtUVbkUx7goquIUHke9pLfjauZwANahx02aQqhohZf%2Fli06X0or4Zt4Syipsoz0sJ31Zn56tAVgleQ9sXdng29yiwNMbEcXh6VLZzsFK4VmpRw5yPVhvhe6EIPX5kl2XPSNqMUq7ScMJf5x8MGOqUBWdkSEKQQDKLWOiM3ECptTt53gqEeZPGihu9nWx%2BjEk9eWCZiAwOWo0SR7p6JhAZdUEeh7XmZYmus%2B1ek6v1RBBqmIJUCtPozcav3dH6r%2Bcq3W7yPW88usAtHxmOcBv3elEgYoY6OdJK6Pm4%2FGN4A%2ByWxH5yPOks5%2FnAzkA5KFl9BIQ7ewj04ctq1KaLK2vv5OU8biYWqjBGpPZsAAEEeg3%2F8VnUw&X-Amz-Signature=447c769f5c739b16931a3c5b5f3953a3f7b8220beb66abb7600d44ab8deed7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
