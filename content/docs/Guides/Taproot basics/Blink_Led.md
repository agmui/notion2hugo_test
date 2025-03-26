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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANTRPG6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDe1LKXcpG8IcOVuZYM2Ti7F5eyPlQzqLuoHsgVKwapQIhALmMWcSijCvvCyeP8iMSt1LLeYNWsQj9UdaqqvEkzkXGKv8DCCcQABoMNjM3NDIzMTgzODA1IgxhTFTC%2B6DuquNEOasq3AO%2BIW9pE6xAYZkfqOzkKsDHDX068j3ch5r1eYHT7tUOnR%2F56uAB8AKyJ6LfCtvlTjzWyaGmUgKROHG4zlZycZfY9JQjPtMX7l7CCwl4PqOZzg5v1peBOJLz%2FQqrtvzmEjutNvBnZf97PEnuPXXHUAeGNZKwwncYhcrmluaYfTomyIsx4CLO8vhr66oA4r%2Fgcp6rkJ6p5BGnr%2FtffIz05HhSodLMx8c4OhOcn2bZeWMWfWODBWYgBAaIc7%2BTSG6ci0YRtpls9Kyeo8NqBEM2Js%2BJEh7Z9K8nNHyHM75QA%2B3zDHmgQAPVjON0zCwHDvduyBtq1d1EtHjfVREUoD0X9b6uWxFcaLpZyyXZleEgzcFF%2BnZF6IuOSwiyzWPY8qogDbyE%2BehzWNmg%2Fr8mBzjRj5JuH7GXBab9ZB4dSNzSv%2BxkNRGjHEIDtu5deHM6gQvZ2%2F4VcX80OdtUOX9%2F%2FCKxcrGdajCqr0%2BIMFxSCfh0Wxn4tpdthn7xNZVyD16YYEuuM4gnFPECew3gvirSes3my3ZakM19tDFsmlvvjDNeNBQ2H2DVrFzbbnuLxX0Fa3PQmN2djKJj9rD1o6sYyv7UPosoSs%2FR0Gx%2BS20T3bzY4J8CgCjIJjUIli2mLk6z4zCLrI6%2FBjqkATBSJ3luiBCIjlu%2FVjYOr%2FslqrD2f6AaojghvS%2B1yvjZ2b0beaZMDX4CA9Bgl0tdYUqkb0dTCjtmiV7MqlIggqE%2BLIH%2BEk%2BAn08vYfpV8A%2BPZGEFuSOH8b4tpt0gG%2F2wJ68mDvzI8TVYi6wCTf6zo8VH32H9F3ukiGrz8EQKZomeeWQ5Z%2B6qYRoKYQEsqXuN5Nho%2FWbszb%2BgMpfZof0phupQgdEi&X-Amz-Signature=e08db05933c5589e531407cc94833311f006cb247808ead7c3b13d9072e449a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672TS5CQD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDQNon%2FeIO70B%2B%2F4ye2k9Ju3o9FzbPJEHbeGnGGQzb0AiEAig%2FYv3wJDrkyD0cE39ENVtY33vJttGUqs7tcL2qgfX0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJel06sX6dek1zL7ZyrcAzQxHSSzF8kwtWmnDg1RAvFJW%2BXDZlCSbKvbpHzJJTO6ILiMBa6Ad4yq6rIbvqS1oLIT1dO5KaS0Ob%2BRbinq%2B62E65a6wVgitNhrQxIis9UY7T4z8b0OAcvfVp1o8yj%2BxwTIR%2Fk9D3wyDQMv63RCEit8vJUGJHWCe%2FVEwz4RvuJMK%2BIXl5ImCTqHNzDgBanzq7xWStdOkDnshF8mpSh%2FPhfsqaPvrc%2BqQP2czFAAwwkZ2j48hnOeW6918tN6p%2FItB%2B0Dx4ttQ1%2Fcr%2Bf9%2FWpOh8Xp4DcdJJFi79H8n6CyXFgjb0bsXG0hX4yp61UaSUHtoyG6kIUIgzB1vQ3xZVSuvsTcLUt3NZ672nmgddlFMr9JKwFKhHEY14mlySexYptpAraMh77IKqDdh7F3cIKxWF%2B%2BqSmuplx%2BOXwv%2FnMVnKP1AQWNaogFWz8CkoV7anMOEH8CRj5CAFYkXZjh7RghFAtrSOELs%2F%2FJz5i987tL8fzbOSs%2BT9Phh%2FUPiyIioz7g4tZACxaz8XODRPg6eJY9iBqd02VNASZZiCbadVkplgL7QIpBUrjTdBIbPCb%2BgYslTSJOPAGGizGPGtaua6SceG5tZE30RDkfRP91TmT4XgUn0RG%2BBGDCz7MuE8usMNiujr8GOqUBp2fIhJrMLzTu4xdYxA%2BrFuUhgLCLRQCnOK4hXgUAepep4zYfqlanwkaqPTTt4wi7%2BAptNa69PLcEvSQdHMNSYwRpHBqDMt2jqJjFQEwdB%2FUBn%2BM7vgk0nL%2Fr1deQJrBxDE4zBOJ5wJ158Q3UR8O%2BScijBZsZZWQpuxlrJ7P2KkvA8lcv7B3gRBazipEdaLFGC6g7xHmPR9J0yGzVj0KJE4ApBuS6&X-Amz-Signature=68ef7385dfdbec238017da02e6d98189f05bda35a593a5c0e514a8d658be90b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
