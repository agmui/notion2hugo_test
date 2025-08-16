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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZHCEDXI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIGMKNsw%2BrMig0BXCf9BwjVSJOVX5Aq3X4PxEWiguQcKGAiAipH5DuteBKnKLC0LABLby9JISDdwJIZ1kwTR%2B43%2BR3Cr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMrwkV3%2FaP72jZU0EuKtwDk42IfAlCYfloS9%2FStSvuMQig%2FH5so30mK8zV5cbl0Rsk7yP9f05BQwxzOyXq95FGiWNv79HQYFogB9WO6VAGrWPlYl0FjvJLQA1a57DD9XGuWj4GYNkXf3rpZXEW96Ud%2BaFL%2BN5OsJwp7YGF1jU8W%2FbvlGCh8%2B2J6JedPeNayQsRhhnIFnC5oLA%2BZVuWpcyNmDJ04oe8ZN0TNM4M2gW25tUjIFMQP%2FOoVi7TZg3S7gNRtvrwXpTHcmKAhLKVY%2F2%2B5hASNqjym4TKh3g8jLTj%2FSENtI7eya9e68wypvnrIQtOS4SHTnCuT0L83DmZueESHVVodUL9BHQUUscwVeZrLqpJvh5G44DOe3XE3BR3yNcicG9TeBdLITq%2FM4ybnJ1qdXBW7kcahUy5xM%2BcJbnA0gc%2B8geGoMScCiNtH0ReZW1C8qpjrays6pEYPSNni1i%2Fr55LaimbacDPV5QHvlSYnT%2BPneIXOKiw5zEaoQBeeTldi8zRXZsaZNUF44uQMZjO74kpGl12tVz9erfJvpjo5znwesVOtrujint8V8HCVCT%2BKDLUslL2hbtf8kZo%2F6cJzvBNM8c8a0XNfnnIonBBr3QXlEelxokeaf%2BBhIZ3JJHGp0RD77gRK%2BXqHOwwxKD%2FxAY6pgGLVvadXAed6N%2BsLywnUuMo9XYZOnpOCMZCAFnT8t6rehHg2hGiWh00aZskwjszAUBLfWag%2FdDs%2Fwt19hPORBNWMkpU%2B21x6274AuH3ni0NxF6yAzzOPTaZcLtGeg7bH4XzmyjSAxZeXF3fWeIv7vsqnctCSZr8pHx7WP%2FVsDN369EqUzPYuEE1N%2FGQ%2FKmge0Pslo8G5TMi834k%2BtVEE%2FHMdITyVSE3&X-Amz-Signature=0581866229057df7de402deba73492b5780d04c1f3e438361c49fd712bdae9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3DMD5OK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC%2FxISrl8XFXuTy%2BS1OTHjX5dNyGcyeWqZwKaxY58ekqwIgYDPHE1U45jV4YkZp0JAIZC3YONZu2XiSGPkmqBOUY8gq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDPJg6TwfkjLXzX2unSrcA9VHouGjtGFA4GZFJDoCl%2F93sDy0J0NGCGyNcoEggkkuxb8az8%2F1%2F0Jaw1ex1RtEGmtDAZhaJ6rQHN1s8sFyM%2FeKCOKcKdnCSwCLtPdyDlHSIrlqLi5IiVN06LAGpS6LMbUza7bvlru%2Boy%2B3Nrvue0jE2Kz9Wbl9EMVLQMoqQCe2T2VQcw6OPYn9%2B5HXjiRS%2FUViAbPvlDXposJruDsnKEG5bZJFfYGwlJNg9rJHnAmgzOQV%2Flpeo9yneRNBHxke1MUdh4IZD1iaSE9mUhhZCet2%2BLbThK%2F6UXN8pI1ZEHPhya0BRnN4Mlec9pp6d4kpqg3Orse6WNQo0r1%2F%2FV8p40V%2BkmUjqAf1UV7nVjCXhpfHsxh1vmgOo3sEnE8rKEKFP9iSKXGtUTv8yFeIw5Y%2FTZph6jMjahmFr8lvOKH6kDYYnMg2XSLjt284N%2BgGKWNPls8o5nyAX29jpbBtA%2FOAiqkvlDzKZM5F%2BlQtZRDA1gN%2BbZuoA%2BN23tiQ7zBNyYaW5cPx5asVvKKC7RJtaoZQaQT%2FPUTwOSBs20I55gV%2FOCPfEAB3zwlz4fk7wZLxmjGQP6fXCwJzWtZFbMwP03amC9vkNX%2FiEY29zqybYBWtg0DueuG%2F7LHcb%2FiZuqVmMJjY%2FsQGOqUBsSAozHdqLm81mtvf2lfSFKXr%2Bjli8Q7UPWXRHTczk9um66B9wQuENvszwjzZpT5%2F10tykEHft%2FdTvwtlCtOY8AgYG21QqGKSYRyh%2F%2BsEiWNA2hh9ZdW3KhVp5ucXgInSSvbibKfb2xSFv%2B60fzSl8YaTCR2hgou5LP6qdQ6ms1xyMpO6SErTpDTJVg3zI2naSaFZ0wY%2BSW5Q4fIMcEy0dOXRB8Rk&X-Amz-Signature=e24a385b47ea22d9c0584b98df7e695f13e97a355df2a5f8f9b6f8d069988442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
