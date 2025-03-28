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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q755X5SJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxmjwNipb0nQ%2BTm%2FXujNPBhRH7U%2BN%2BNbqmeyIb%2BYcupgIgfX3GPbx%2FX6Gnv0Zol6jMEEa3ThNjVwyJXGt081JXWZUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAglQ3bqgHqhwqYxtCrcA%2F1MJP6HNFqe6oEz%2FeiKEJhFl8XNGyVgOr7AI4E41jT4gKXajaXvzCy0ovYGNSf1Yt3aBgNfFGBoyTj19Dx%2BvjdfEzZRXyEhyuYkTbMDg%2B5QtKsN5HaSF9TpCvohiS%2BUk5N576CQVvrGsBjawgGG1MnR748%2FrQjyzOe%2FPWLdEdXRFo1IVI7tAcck0ljjTSbL1dHEl9HH5lHVpAWbLPBEXQnekwXRAkda64GS%2F7mxEoAVqdKycTe%2FdhLp6VS2PR9I1UaU6maqo2JD8wZ4%2BO0ip5OTqD%2BHrmAmNDWQH3vzcr9W1bfu04l4mtXzfmUIHRBmcbHFWLuV6ncTRjeBDywb3NvGVRGMokizDZBQk8O%2B6pm5k9Hi58%2Br4e01SrDeytY0r1VYRjv9njfygPlPguFYHCc1Xrh%2BROzObum9WSFnMOrlEG5FZWM112TRV3s7r5ITYFXePtqAQFRrLZHxb9cFPRA6%2BKqiXQ7Vj6Y2OGH%2FEkNGkaXzwzdjB9equ7BUWn46TkWTq5KdZFQ2X4VuNrxnIQZwk7GGVfFwHlbj3LfuEuPtkf1fYOv3fR5TV0USSM7wMayhXEMhCH1MhgMxkpuBNlD3ipbsHDWNEu5N0Ea%2BiUVKyzC43Wka8M9egkl0MMP4mb8GOqUBcbZ%2Bbpo7Md0c0u8oBmV7r%2FGXC%2FaJPPML10gk6qJ8h9%2B9XeB6NHv%2BXiX9PRfwbuD5QzYzmfS4z6xUD4MsmMzHtU8RA%2FKTfclA2rLFZD%2BmIWugzXkVyWplpqMcjz5mNW9aZiN%2BiXmF%2F9Au801JVYMTZ%2Bgqum14iYa%2FhpQdO73zJoOfFYMmEFp0Wul%2FIrxNmqV8yHOUSMxA%2BWORzbrRtIXwcXA8W91l&X-Amz-Signature=74dc3b33e5a61d546b241f46f0d5afd78e9bc28303154bf52cbc25c333dd0a80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V6OFAGO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZAZ3HXZH9xkM3EZTO7ZP0wXz2TytF2rayodIsVE6QiAIhAO%2FmzzOCoRZGXUminCdJpg8J23uWy46BI2SD2rAqf%2BnhKv8DCFwQABoMNjM3NDIzMTgzODA1Igzr0iEuR0fEEIKM7jYq3APEcOJsZdU66Qn1N9t6xMk%2B7ggZW4P5oKS4bNQyVSqgEI09ykyqebYo7CVnJ2aqqwSK9LdrGg3A7MttyEZr%2B8N27H8E4BBq%2FO9lroKS7CiNHzd%2BjjQuuVjAWY%2Buji%2FfT%2B58weKcVaFHW9tXLTH2cOaZz9Tb9F%2BTRZ0JyKyZl860tBpTJ0IlZP%2BVLiHckVc81cetZSL4U%2BuxZHVEbMV%2BgJ6Q4SQaHi%2FRXLx2GSzH4L2PpNkfq4zaAU7b0jS00vczMW57bpPWf8uTUINe8ST2rF0QxB5zC26zUpLpxk4PKXSrC0dnbI%2BTAT2SlhWeMdF2QsuG6puQZOyEez%2BMTuhEK%2B%2BLtm4Mpb%2BNkm8PY0%2FJ7ZwULHeGAmFtVT2uKvmdrtwp1iIilaOxLJeabWOSpssRnSs2%2FZil5iV0eFE4r1zHDiMRTs4bqR%2BA9ZP4EmrZgIDbHx4nEnOZWJZZv8p5qs%2FSwxed%2Bkz7GoyTtR4LgxxGRWk%2FN54zYurm5QsJ6MkGjhZV2hir2onlvwsAOLmC%2BuEu30k6c1hCZAgJRYS15w4ygXVJzGrX%2F%2FIL6LsAVMvhBglB7WppEeHe2fBp2VfJT6ShK9d9LxWtdn6fuVjAwmJlxOXgTt6w7Zp0nBvSxuvC4TDW%2BJm%2FBjqkAdjhUifHGYfCXJKKqCvqw9vmstA8OIWjwjxoeOx4FOWt6Rf%2BpWPm6XlsgH0UBYyxQOY7Kp8Mz7GIXFPnolYydQXqt%2FMEp%2BhXD4a0ioZAGmMlwRWu0aw3DthCNpNMrKKwvCVlXbEfQ8O43s8a5fVIQAxAPEhEFQ9AexPlaCV90Bwu%2Fhtq1MAWV49VGAS4ycRgaPmGwGvfT0VQJmV2fwCl9lrgvv1P&X-Amz-Signature=915364c2029498ddb6f9ccf80dbe6bc814d3cde422bb481ceed45ac5480ddb4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
