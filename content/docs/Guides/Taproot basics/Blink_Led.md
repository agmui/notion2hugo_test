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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6MI7XV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIG2sL9Nkb%2FVXXa5N9OslbYlNRZ8KnxMh%2BCkKh8HkvT8tAiA4Eqd2zG5rHAHwHR9SsgD4z6KwhpdX4PJfatrHwMaJ5ir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM9%2FVZtYsXLPbfxfKVKtwDDGXLJMBB3jd26I3vTmv%2BTjkZ218IUga1TEI8RPETPgUyUo%2BCQOMEROQ3xaTQpqNsg1wV1rqCJIXjqDg%2FRP0yP4vNreB1r6dw9Of74uy9%2F9PH1yRk0OckQ72XAzZBxRhIfELwgap3UxdVHZMhEwGZ4bBQu%2Fv%2FcYTMrUp%2FC79aa1luW2fU%2FhkMf5nOIMOpopxOD6toIb%2F%2B6wzXjkkug2WQ%2FqSL1JleoBEISZ%2BJKpTPrmHrw%2FImZshVmnxFRiMN4DFmulvtgoHcHgHSz%2BV4b6neaIupmwo%2Fp2%2BCYlfpKYOsQsY6tO0x89uaq41XESeIw2PPSQO%2FN%2FYnr%2Fmx1VkS9fRSR0dADC6qilnOHUXgHQuyyqOCteX%2Fh4kh61%2BljckbMYh4C2bNwwG2YtpOFTch%2F39ILzJoVg1JH%2ByQAWnb26NDLPyWvqb34AXNrs4yakQTqv2qyCkpwniIKNM3N9jSrRTo3Z2j0hvEvaLreE0lsuKclkVlvPmgOi9zSYqDGtgBEQeev3lg0Ml9vyBIMPX7xspGu6lA34gmtpV8VjH%2BpcDQS%2FPpFdYQK77rur%2BvUvByNzVy64urCc7PwBgh8HEf5SB%2BkeezLqijkeZ6ISpBmcXjIrGrSc7RlKFJ5e5A4Gkw3%2FuuvgY6pgF%2FUjongKm1LsFqf89blGbFJv0R6y6B1yNDyhQbRUQNoncw6hofpAdSYJS9VoQefKqDVWm9MoePcoovsM9rCEAHv2ikSOlwkYjen80QevrXl4oLea2tIgVmLEPZdDsx1ZTKnNoHgVqZcutfuXgUCMrbibhPdVhiV7DqXElMKZv95UmwnPF2FYabe89FZlGOO15p8XZUj7HqlpdAyiGVJK5%2FLOQBlO2v&X-Amz-Signature=97cff1d6221d57b2e84926305b45b9a9d1cccf33525c9a1b3d70a5c330825f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G6PN4AA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIExAAtg7aGHyn7KKFw9%2FbEG1yxgv3pkSYMjxogJDX11CAiEA33wG5xk1nNJQu8RhFTzfzXXLeKJOCwIjODOySrfJopUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCAcQIAQ9vL%2B5%2FEzRCrcAwQwRDWNf92X%2BICRDrEe55i1yLadJu7aVphl9Avu7LoOBvAPNKyBZUwz5enyplPC8QlFsb%2FVt000KWXjJ7Jcgyz20aRJwrz7fizfZEIm4X97ufFgkmTTRWsa9mfBbaEqfHqf0qswd0uvzRYLzkoWdvPAA4RIanvk7KMlDc%2B%2BZ1LLSAQ6TtBVjMElwyVj7eHb2vTOt3V%2FGZUgA2EWjSFcIX6qRlVBLiXEoslrtgixoW3uqRk6RP1T5w%2FLAUJKPeI3ClqO6aXok%2BrEN7YsN7qh1PFd3w1sIUqvF5h3LnYanqfWUU0MxQORzaW2Cb0L2%2F7KvN%2BwScRnBqpvijDqbhu4HF%2B%2FAtRCsfEC%2Fl0JvwKKejF0NgmCV89qBtF7lzhbTHEQCcV7QOsoAAqXx784emmU3trYFtjNZ6PzzsaR%2BwZYAVZWEWZe33kziL2Ec9vTv6N02ohbxEL7VSYHWUIjno%2Bxa7Q7TrxbaD%2B45zErTOWQw4zTkgpuZhgF6Evx%2Bpoe4BLc3B5JMZlllDsCiDjB%2Bc9nTIayaOQ6RYP%2BYKD1tL%2BH0u0SUvrHNx%2Bh4nwFRvMQHdIrO4NhwOPmtwHuFqq5JWn3BFo7Xxt5XtQqLEZ3jzfjTTABS%2BNWn9xpe%2F2PFNEEMN6dr74GOqUBxs5PM%2Fv%2F%2B1LWZa7elYfMymWdJu5VjmmR0DvZAzOjHtKeE%2FnRH9WaREtWPZIkfLHfhnH7Yms3xVKK2jRMUNEzr2MYARhWUWj9Ik2tn7UKUZhAVS8o2pig1UJPBEoBm0854fsfcLG9Dt0QzomAaFG1KykdLvT5WceaV0iqRhPyQyL9SlU8OR5X4aYrfR8SxEMw2v8j4oxXPZLpdEZBt%2BcwdLCL5ap3&X-Amz-Signature=fa743af6906e0119e80a716fdb04904af6cd14b5d2708b26c4cb81bac39e582b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
