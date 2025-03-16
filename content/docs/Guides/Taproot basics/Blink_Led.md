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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZIKRJX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNq33XxCwP8NLXN%2F1szW%2FBhgpJiQmUHbm84GdSRNLdrAiAUSpDiANqIMNHPVcg%2B9nwzsip1Gp%2FH7bKkvOMD9LhDRSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIML3mu0hq0655Z60%2FfKtwDtdFPVQfv%2F4Bhzb10W5mlrBc78BouwJ4FnL6StO1wKb3wCioOjPO%2BW8lLoH3Vbpj2u3AXib4G3bUV%2FQEgGXY7EiNAhurPJ9iP2yx8FBEgqfddV0GEfBUbFy30kZATMJCxV0pKLHHzQa9c138DKME5bDnNETX9b9E8Ov4B6qHeqQHXbbIY01fZvr42jWd20%2BKg%2F2k%2BmU76NPfi8CvBCee3DRjJ7UjVnoTvXiH4TONUyldrNDn9ApjV96qwGphT3T1OT1GrMKqpjHJPg1BqO%2FP7uYwqFnfqGcJ7vRt9FxasD%2BbQNy0%2FxKcr6Ihs70sFoILqDXl37o1U80RhsUQvptnZYXRGUBGaHcrJQfsulG1nf0B3GP9stJUvbwR0TK4NO5rj4JQH1UGLmQZ%2BfhM0yqzvY8U2Bq3UsbJ%2FnxUi0Qj6Jf3I%2FVAvmvAjYiqfXjmCvIa4Q16FgZDyhXu%2BjoB3cAeiw8l4w%2FMc4vqXeJNgAh%2BpBBGpMAk162M2mWNNPHV1AtqU9RPrs1Z63fNzGJ2BdMnYSASrAaKIUo7a1bHE5mcD%2FZo9%2FS3pXHkGJVzrFsNXMqICR3dAF%2Bjr9eF67ayi9gcJzMBOhCbNWXUWWAlOwV3fC8ub0VaAgTDcN7%2BuuFAw7cjYvgY6pgEnhivTuTOmQHAKm2YTfCEJrRcyN1eAr6SdR0SgF2BBrhzYXxPUdPQuJWNihZ7119%2BdwuTInRke6Nmc%2Fm5qW12ImZ4vPjBT7jmpIn%2Bcuw2R6ZGpWFvO3IheT49ZQTg8ZLipKWStjhjnrRQsS9Muf%2BjDIRywkSQTda9p84LyjllH8SYyVh3lSRZN8W2SLBtg6i1N9n9HGXjuhHEdY6MmMZ1%2FsP0tnp9z&X-Amz-Signature=f35a384b2224375d05a6585f87fbf2af5a66263d028d0fd25f88d83de36e2242&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VRKWAC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgiTZRIe%2B4EgyANPdrWzYmdiwMLgYa7C%2BpYLU8sF8XTQIhAKO33uvkrrXdskVsCZLsVBSICYPxj2nr9Y5asXTPjUxsKv8DCCQQABoMNjM3NDIzMTgzODA1Igx1uvLKuQWEfn9PwoQq3AOIB0yR%2BmbAsTwvLqETSjodcdcjgpU4NrSGEuXeipMn4y%2BZtDDm4R434ukOrwNyqsp3c1rIlkbeq9u5ZOPRWkm3a5EFcdI9KClmuajBmJfck8W1Iqfu9FFl%2BikyecUetPFnNlOsfYsiaAKvO5IQy6kKRVhY32uVZ5TgqsSvg0JoW7dH3pZnhHEKoGATvPNuOYp4LyZ%2FNK1Z9T0YzOLJ0ms2bqEfl7wqfCB1at4N4tgdrugXHGNcSkndOv7jCbxgPPM%2FVVV5smsz8G07xl%2F2G0pnTNwvsmOqzoSYGU8AP7hofWpOP%2B5ODI6s82fBvXv2xLUBqyhLTnMLH6jcOFHOMbi4wyR8FDyKdZ6SLpuTkE72tF0ceNrsGB7fB9L6dQn013%2FMpiCq90i7fMGABNwo7k6BERy8hpX6OwI7k9uhZax0IG08M0yNSD2UjxCDBY8V4BbP15gi%2BBmgJc5%2BYkXyH72qX4gVC5VWDlG%2FjH0fZVbqcS%2FXSwPu9noE77LsnJpXOEXZ2GJOYsYcHmEmmeSh37%2FaDH9N6g4BeYVU4ulaAl6VnotHeVh0y3%2BBrQ9qn8XE2neZ%2F%2B5em2%2FFm50O7vWBoSSWJoKMfq%2BjaNAkdVpvAvvgKOH2xbaOQIcsbLM7NjCQgdm%2BBjqkAbCTuLNoXCLmu3V6ccQoU350tkuZsgII%2Bq3BbcylWhDjJeemO0btWVWtbxhKkqOQ23K9B%2FPFiJ0F2eYE39Hfz66I6mDYgoU7rmYUkydFT3Y9A8N8Tg3ITeFkmFwpPRMKlbUwj67Fb5Xoz2SS632%2BWP9nvh2WpyLdaqhLKaY1aWdjr77FPpBQdsxN4yWywl7yoVinkw9O0PL3zOkV%2BTM%2FUqaaMiFU&X-Amz-Signature=06cc0c8b1aa5597b0664423bb026202f107e9ecd30c1cb39aa07bf907abdef1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
