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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657UB6DSW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCVee9PviQ1Gp44J%2Fy%2BMjUPQCTk7%2BEkCCMOjbqtrxWeAIgPcEEvLxmap6d9Ww%2B80uOpGpSQfH%2BdtIb%2BzlV6toRvVAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbZFlrNQqJz8pw9HCrcA6yAM4%2B%2FjVg3gW2rQpb5tET%2FdLHGtHcpQ7b%2FpHh9zGqHNuRXANI4BaVf4W%2Bp4hb8ovyZwVq5GygWDFtFfEgLZnciYGXQzXYqbIqSWWcZMezq%2BPiLgZA0aZy%2BhZak%2BYoxFSj%2FhQQY2fsjnF0CEUEbyXHYVAa0%2FB9LYsaOxjfhtXp%2B99yDvrjW9z%2Fj0gpHdMa5tePR174WNqlOIfMfzWY4BDv1yWULzsa949HpRVJLYT4iX3Qcy%2FLX%2BIQaVNfTE7mrZISMRikGLqXEGzd%2F4VS4paYhKJowEwSk6JaJviGxbwVdRxRR3k94%2FdmXC4Ojn7x3bzORiGwViKxmQjmrwvh12dOncIewb7YzXgm46FJxTpU6stZG5KujfHnP92qLBVlsvTnPkhESJ%2BSAwvnRFcbYefyfekFf%2BxtTE3zHNFntXjNMhJPs7vYgmHSOH4xZWERkDySE4wXK0yQNVBebllaswZFPS5SJRlyq7RbvWmF5pk1TtJJptboR6j2zgQzOIzScqtOSFmZe%2BUjuPFTSl5fnrk4MpJWEx6V32HplchYb4iAGSZ%2FfRWg61hNVHOlrA9T7Rr4BpBzaXN8AfcJ455tctqEn5YWEBkU7%2F6djd6pTF1jcbTF%2FlhKTHkE1e2s%2FMKSlqsQGOqUBKUgpHKkaE9%2FqdryZVkZrNvHnZbE3Ki0A9iv8hfiwOscPpzqYlcMsrnLz%2BH%2B6m%2BzYiZFHSwQdmD5LgyRFP%2Blo%2FE7dDdSnys07a4vCnWd7WfSa7BrCb%2BgBF7kCoGhULKO%2FtZ4ukdptGFcfpeH%2F66QvKmlMLGQ%2FBhVwY8HCQENfIZbdd6ejLLT4rhJIbzXF2mGVTs3rOO9WDz3XP97%2BNRdYmmxaoPUi&X-Amz-Signature=db726cce97f2e95fae64d7ffb5378960bb2cd4d49e42b74aeee7b7e66f96d560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3WKGN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE5ZEPfZskBicUSzg7vd8EFV8WYK%2FuWbhZiO5BPmrTyAiA8ct3rfpcnlGAU7eJsSjM7G74LFaZKG9wvoEMjV3SH8iqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdFLVb2uiXuobTfprKtwD4pfpyr%2FEHNU5u909I%2Bw%2BUuE15TobSIo8m93xbkwbsDeJgasX4Vm5q6b9HYsm0JkyA9ph986ryeyIkPEeZQLGvC43y4fDDjeJvLrb%2FTUa8zfIgqMHMAiMBWvgrYbnupq3Nl3t2G6iPVlXuW6XlDWcj82KaHGHhpljf0AELsxV6KOQ%2BlbtIINGZgsPK6t%2FebU%2FKG78YlskMNnJqzPh39VZ%2FtRfHahdgbPHzMAnao%2BmZmg84%2F%2BDI3qzBbR4cPUKfR5TB8kvQG3EGXYTz1ZnHCGNreYiEhqBI7bCQ8pTqlzw9akMsGq6lgAMyzn2QUK4XigsEtVj3a4WuuYh9CztmoYMnnjDmuvh2qV0Th8PKnARJz76xp%2FipPoIewYMmycvnmTz5S%2FVrrGXspHSNp%2FGfV%2BwsB2V8i%2FpJH6PM0v1GI12Fvp%2F%2B3z%2BNg9u9pX2WNlclWFyyekU7J0cBRlmiGaegkpC6jHx3cGiLwwCkK8imRNFT77x19POiIOV3GD3L7Dys6eE8b8iMVOfbYgYqMHyk7iahs%2Fj%2F5uO4cT8xFN%2FkE4o%2FB7fCZSRivymySQqfXXHk0Iya1FA7xarBFK3WLV7Htc5nQMfjsMzWyS4IZD4trwxxUaEskOPet8U9YM4RuwwnaWqxAY6pgHxR8mkmvIMHOqcJ6kR9KyfTA03ebeAv5zeFDG3B9Ozzv2Pvc8NJHg%2BmJJKJA5ismrueVnz5gbSH9QHKxMHZt8fTrBSEQjvuWn5mB4e6oPyXuLOqghXq6%2BW%2FxXv3CybYfjpbdUYDq3UeLrmyvYb8eMhuhOQXGL1tp2AOVb2f4%2FkosnpGj8%2Bq%2BurBFPbArlGZ7RLrZ%2FZgEZNDr1MFzqczKFK6H%2BD3%2BfA&X-Amz-Signature=80e11348073b3aa3654f5a53a1b702dc6decd100a51bef96c054be9c7a1c8d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
