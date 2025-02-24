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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643S2IHHN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaXOqvScjkpcxujfPu61jmM4yB9gk0%2BdUoSM6plaFXAiBZ5iPjQB8SOuioUjSzqpTzDn9ETcibBh2hcKdyktufISr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMkrm9KhGnrdj94IlgKtwDYccU8CE4PpN1ZrNN4bB1ZT%2FZUMDpeCoNroa%2FcvyMUYG%2Bm59wMannHQUcV%2BLY8s2uAP4lRimNqLXp6VVV2Zd3d1H2ZF1LhG20ht%2FQtL2HC0%2B%2B%2F16AoPipqD3ginzskbt%2BcPQ39s1ZLKRx4wv%2FJRj0ukL%2FpVFb7RtgiW8j2CgoJH7SqXW8WGySN%2FMzERW5YH70gCqafupkG1%2BVfKmQCWu60SJhr4M53jgR7uTRofb12WGGq96j%2BioAao7YWmzRfJeAvLQkJ7bdyEYxYm4gC1Zra5JEMDr%2BM%2B4othlmpJh0ircV%2FznOEhgdEEHQiPm1bj5IAP4q6tI3jo3Efg6%2BGhLNlfnIhd097iB7iEFxd5XM6GIkA%2BUva9JVwLAPtCi1EHsM6V0eAPEfaGoHNP%2BvRkd9V9vY%2BCFnuB8XbGQNfv1H2Fxm4uJiBPB60jPjd8MDVLgsst46BvpDmIN5oQ4QfvxtygltAiXPHQlDWOwcI9f%2FRhZEj1w0gpkrzbwpLDqG01DfFAu7DCqfWMmuDttoID9xdm7LYPT%2Bu%2BBmsnJV2Re%2Fpf%2FyL1edHLL9iToiuJeKKAD%2BJvq6EAI5o4ouHjAnNg79I6oWDxCyNPkvVH6%2FaPX9jUCOOsO5v1tB%2FDWpDS8ws5TwvQY6pgFsCEqtVe%2FNj3szQepxAfkuzNTp%2FQdamlGrNlvaQ%2FNGf6rwzZRgBt1d8oVTPkTm43gSdtE4RohQ%2Bv631aLz6TlOSQiGE1kmuYwHHDewwWpwM4w8WCYnO3pV%2F0iVOVvanB0RFQf530bG6Z6zVjYiXyuIWL2ougZ30j1w84EFlaAvu1QtkBpElX7c7s2r8evbBAiIlxhPxzfE7J3UPsEAlYBvDf6yLNKY&X-Amz-Signature=900f85c885e61f454b7af7662f0db5d83f65618ab15ed889ff51f9f7fdd58a05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTTMYYK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFd04kaSAQmbjpURVOBSyJ7HtUQfEpuziOFIPcelJ%2FVFAiEA0xVgfGT4Y432scfQcWVXBCFkC1hejgQJ4LU7O0blmD8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJIIpN4H5yJLtTjysCrcAyDH7wMCtjrRpYR86jBsjLJxI9Q%2BXa4m9lKNQa03MVoIPuJLr2nTDMSxRGJ1a%2BAzWfFT3GOmanISTsZhHYRnd6Nupr1nijRoFvX85Puer8hBF7mp0rasE2b%2BclcG1SuJfvS4990%2FwmncWhlpTXF2ymsbfsRyBlfApew1xvLdiMwh7rFUh8OnXuUvA3q9sximvrSGH9V548C6LFP%2FC7KNCx%2FX4vkvUBFi7RZBR0TyKT8HuWZfxHUOxf3AQv96w8eBrDp%2BqFQNVnPzWrE61xzmYZ3o0Vyo1W8%2BTvTPo%2FO1vRLzxccRfsrQy%2BprXVWlepDmPJyvgSUl1ottCcY9Wuc0z%2BNWZpP%2BooonGAZW5PuJAcCPL2XhDIQxP%2B3P68cZtXypW%2FZe1hqoxzskiBYWNuffb6vQR5UBIKnON0UsuCmjW4tubMm6DdsHlr6VxXQB3a1wInyXdVjhmlYj4xP6TDrl30Vy916BJwNzmbHAMYT1LbkyoYJvqnKU2y8st4nWxGAxJkfJHB3uWuK9kgk8JQP1M5T77mz3akOf%2BxteB904CXk7TEno6HCp0uE2Su5V08z8CUVJC3uJnA%2Fn8bVoDp5jaNoAGh8vL7uS2%2Ff6ydjZbiajcvzvd7pAMnG%2B9IM9MKOU8L0GOqUBrfPle%2Fby%2B5NNb0eAdkH5FHMl6ZO0dBJpeCS7Qm%2F7tZYykPWn%2BuwxxJweBDaJtCZtBwbk3BaBgNAhTotZWW8RuRQrsRD82EeGPWbfavFHoRJzHM%2BFmkq9U2r90bs26OGkn2OfyhmdIW0CHioZE6%2BuI4WjGd3M1LdmGB7hW%2FwiE8stYFSQuu8Te4zYuODeRWaFDqn8KCpWTPLvz6JaoUep70KYH987&X-Amz-Signature=31c69a42182ff1a3ad299d4d943596474eee9b526ded7bd1eacd4664d5ba7d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
