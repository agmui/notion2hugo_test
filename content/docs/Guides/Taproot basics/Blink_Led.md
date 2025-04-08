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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJKRN6N%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQ%2BjYnDjvl5BnE6%2B079Y9TA1DstQXZb%2Fwu%2FbnaIQrueAiAijfCb9TIgfFHAQVkQrEepicsxBYiJCVKl9Tw4I%2Bk2UCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMrVIfpuSjufZO10fbKtwD71OrVbUR%2Bf6CHub8HC%2BnjkVyI0mcjNeJfnZwGCx0Q2BzGkbswlhNJJvtzMwIHv69S52I4hLyB6g%2FEQjRIbRw04vpXs7E%2FZm%2BbOM9debAz3eslkymTt1qZF7pzaHZvXp3AOGMDW%2FztO6L%2FQmrRit7ADYaB4uEYAl8Fn4rPlifODWRdJKuvqJGF9iwCL92JC8fZSvo0jOXrYsNwoA1W69H%2BqLnR7bqQ6sPsms4Ezzkd6nUQSaOyBjlvKYEj8wYcw%2Fef2PQ62kCGC%2Fp1mQ8KlZD9JDUFEGsTlR6CClIpNL6WuPMlZkKC4ECPpqBE74HPdq0ToFyHnjoBp4j83A4AmbU8Y1POXy1zL2KiJdWn9A0hyoJNvCqMfzNrTbecdc7%2BidIEBYffTroF3n6seAH2fOmP3DGg%2BA2go972APlnheRedGKukIecy1tOXJHkesS%2FBVWzZTnId4KSlmC0LJJHQwapPtyM8dzOihNJXapvjkqczzKKdTLtppyuMkQJJ10GWMbjJW5LwBqkST7XdpisoWydqKShsWLKAZEoJiq1hiQSqHcuRlQkM3hgZ6NjrHi0kj%2FgVpGYSCMjXKDPB7oQnJbNr0ujm0ZSG5TpQVuZlRyAboYQBlhdUPTw62Rdg8w7KTUvwY6pgHnjsGPUkEgG6%2BrZzM2MTb9nNzbgg1U6K%2BXG5WZ8VJO8%2Fsm3FzbsSOHaV1X4eFoNglVmhd9lnjuZfDRpbpbLjE05S9hKISZ4SBL24Sy7aK1tbRJlQNJVSSmz70AGtyKbjIRJcEg9PqTXOwn0CwA5BFzSiJL5nCfGLCwoYIE85jENJL3uBgBsK2xusVOiRGqybQeagpa6vxUHc9VfUFd6J2b50eIWm1t&X-Amz-Signature=d262468704ec51c4e3726b92730bb580321afa703a1654101ae4de811df906fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TTSOE6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADhwWrbwF%2FwFFlwFNR66Q8Xy4Es5vRTHTifF5GKPxZVAiEA0Gplw74JxCEAe7aYnuITgUXJQLjr1Z7nF8iduW8%2FwM8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNQWDemLI7Ku8IYVGSrcA9EA6xR3p7N5rxLa4xbBdvF8mtP0dK0v%2Fic%2FdbhXNXiXy96PElyNMpd8b3suAxCMZMN1P%2FlL46uknZ2OWRirxUMXGpK0fKXh7wCkvxk9i3FKIPnUuMBA9xYzplvKR5XphQTGjwT6uGYzDK%2FgQqmB2Id2WnnrUbrUFtQbwXtlgkHR9nv0kQts0ugHE3t2DX6e0IqoRcJjd7Iw%2BU1C6C1HHkQLGcCFAHiTwYJnZWMjqc434TW03nz5LhW3eOmaIWfN1ad3rGQ6vGGOpi5p8MiGq2y6h0ToG4qjgBUZaDd33X%2Fr%2BC1Rg5AebabRFX7vCOp9PS1EVnqH45HKWUx1TsTaKwGp%2BmNkjww%2BJCsDjatvngadtBBaLBCQwQQujpfNgyAPKPU8zGVx0vLUhU0Mkw87ROIDymnv%2FklpRpI0uhVQ1Q69bt1ZkCWFZdJRoCBEtZ64xFU79F0ymBJYsTZNq7ixUHbKIjC493aox8XJxpMudvAQeIwUr32TnqWnRI4xncAcIu2aVbaCgIXLKNibMU9jogSbyv9igwA3exhUrT%2FcnB8CDZ%2FZWZJJ%2FiVkfMldCxCDaSOejH74I8prGKH%2FIl5fSo2RjPnKUPr%2FXOXaWg1mHwLHVqeTBpl%2F63uB%2BTMJMM6J1L8GOqUBX4YMtihk26dnff8zQpSTMLXCwFfaKHYlNOlNYLZdyHYDOxn61ZnmW75VHp4aCwP1lBk2J7piiD10CKJ9KmaCajIC6PksgIBLg7QOfnov2gHMKE4C5qAzLVDIW%2BzmwvcWPhNB%2BUKB%2BY4iFimeqxZPAg6slNCXs5bHsdDhLkfZ2Fb2pLxo9Jf2HZ6msEhGeHnf2b%2BDfL21ny8e%2BbuS%2BTi9Kxq%2BC46E&X-Amz-Signature=580344ca59a1f225af309f28419862ed055b949e54fe06a9b7130cb9fb2398ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
