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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQAR2HW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCSOeKtvnyLS1v35OPKzWUkTPno749nKNCZSr7Y4MAE3gIhALhc5iZeLc1enbIPk762bpW3sR%2BW4NhBKVJPtw2JxyF4Kv8DCBQQABoMNjM3NDIzMTgzODA1IgxihYWSxOJoZj0q884q3ANxgXzaGapNr7%2FzsgcquFeKEPuWQoR4JZ0BWL5nGXPqkgKc7OaDVG3CDxeHImrDUH61Q%2FZhB071%2FHImwFhqA2t9%2FRw2dQX0Js1Kq4pQv%2BDxLU2vs5c5yr6eSMj18U74mDQhmv7MMc6i9VydPxh5EgZ6w%2BrO5AMCxFxs2%2BBEpNRG6Ztbqxp%2BWBTyws6eMuALkC8V5eajWw%2F%2FPA9pOSgyE0z0Be1f747MQw1i5S3yleCrBTvErMWNUQZAz0EdXn5kj36O8xuuRWXoOKa2S2ifwocY1Otqn7tA6ruawvqvSckvXo97%2FXCpYXnRJF9FPsZcjHbGP9L5Pysl9apOA8rYibzCf%2BB4uTQT06p1Ry219%2B00oY%2Bprly2Ix6SFkMdUeU12OdtHXKce3Hhrn2CRTuFr2ynom9BVZrfAyUOW9LNXdl%2Bsvs1QNnB%2FUByE9majjOO71BV2ViG8a00UFMdv210khUbDwfLh%2BaaxQUl8rbTX2NnTQzi3YDjXyYVOBgwLu9%2BqpGZTw%2BEOXY8rdI5zfVFnreLbexVLjsA7fOBj5B%2FyS1YOIKnCkW6oQl%2BCcmXpoNdANagtjQiP4KlZhZqfLmKyMs%2BJnDObG%2F7gVO55AlxY9hXllWw1O3KfBoa7stXfDCRt5nDBjqkAWrmVoNTa9ZbNtNZTcQgfVImwdzpEuot182t59VPLf4urtf4P3a%2Brm%2BjdIgo8P5vR%2BlYuNuwNlJ5M344HIA5Uczq3N4FKFF0F27NTpGpFc3YV9Wlz35FLBLHRCuSY3H1Y0qq4PjQpWc0TkqQdGycE8FPaQXUwor7eMYAAoeGH76UTIG0ia8y5WR4LDJSVZMFdRCsFmhR3I%2BLsUxwr9yUeoRUuffY&X-Amz-Signature=430f8bc5354be784bf1fac014fe45f1862d825ec649840ad91e732ceba373e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75UQ25D%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDXRNJGnG5bl%2BaPKLQuTWwVwyEqpR4cNQZzqQHQjmpFRwIhAM8QoQN9q1w4o7YKNqmIO1eIibXpN%2Bez%2FMVLZwf%2BUiANKv8DCBQQABoMNjM3NDIzMTgzODA1IgzhY2HcRAxpek7mUhAq3AOYz8VmF7HWPj9nnW1Y9EmVnoZLr5ARe0QqzCOuzSHRWtNsX3fZrvfCrl522%2FDedyykMW5MrieFKMtE03iWxsy4PGLaDP7CSglM4rHcQN0MvbQKJdhJEAylVOWi4ODlCyQvMWQmAIWB1JxpPLfsJgNiJzGLM31%2B0PMUNuV5MlZnHBDBfsip8jxfrgij8ED3Ez1ctAMT9MpWnX%2B6FetIn9pK6DaA6CpLcHl%2FSyqueQ6x45ZK592z2tSBhzKQHYr14HOYTPhsEnyaJwT9oj4BeBQXfYIYfgZ4wToMC7QIZBzF5NtduXrVOh61To7OVHB3Whr7%2FlkfI1RNG2S0DnZwM6WDnbanOJR4iVcLSPVvTmP8hs3TdnTHTE6RboWZ3sutehsqCd3f46rFhRzynSQXOStIcFljlyFs11NeEkKypWBu9kbE48XrQIc3OO6VoNrtGRK5v%2Bz%2BxOz1UbU5ZHX4z5SWnSOY7E24i9C6PrmJCXC9xfvM5Ao3VMetdtiGdqsyYJC1%2BQFJvoer5hWis0u3tHoJrm%2BsW7XRMVH1EgYiNvllz%2BlBlghqgLxdmZe8ttcHEgsy5gDYmOx09Mhp7%2B%2FOh7xXRjzYu57PnMRL5J4tiJ8u%2BtiLDEgZDZ1vLB1VpzCkt5nDBjqkAU0D61ORj88dlTqJEbYlBbSVz1lhGTFQqPQOoPNTEmW1rC5oYCBVDvc2e6cJ2Q0XFpWjXLfTJwP3VlC6jFFg%2FKfjhzConKJTXU2FLUZdLZiivLOwJp1QHiYXVpoGBBYnC%2BGP%2B%2BAjS8J4aqWUjT7b4pC8rrauMVqYNT52J%2FIHHmnx9w6GeCiVGC3FxFORismKPAGBvK4luL2M4O1cEJVIxkcRRIe0&X-Amz-Signature=89113ac78f1f09d5df736c0c4232f8cd0eb1c7d2281f4b050e637132ac6ebb97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
