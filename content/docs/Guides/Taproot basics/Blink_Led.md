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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONIFVVN%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcJRmrjgoepHrCxu%2F5gtNPTx20rByv4b7rXPr5Fg2DtAiEAosi4TMT707ZK0%2FApn799ZpkblaQQHiIUxpGwxe5CPwEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRu%2BAF1XsH8OG6p6SrcAx5kuJL%2FL%2FnYirBbfXPOcjJuBOx9HbNY%2BpyxxqKfiVUQ8izYvkNa7SgIQnFBnwRO8Lsuoj8z0VS0KjAEXZKFCaDMdYdPJEDYS%2BAv%2FYb6Fj%2BgsvuBxuZHLHu8P8XtD3w6ifnaCaU09w%2BozgFt0L%2FkjV3w6Giicr%2FKbrG3cXzBt5Up7mYZHBmVHZFdjTpLYwivJ0ijfL1r0xJ40%2BzFOLccAQV1jBbZtu0AvaU4MP%2BUEs7Ed6Qtfhal9KxtPJwm%2FjWPZvqXWujmKLGoSTdor7QvTNjuPUwAvFiaPp6jgdnbqMJhC15KNb3YfGB83rx3gDwlIwP%2F1ybiW8NSoHiUwiCxaYKpPjYqIzecChbbcFL%2FLWpkbHhW78e7aKBlKiLVVw5B8WskYiND7Zt9rgT1C%2FTsNy2dgXSrk%2BZ3Lc1mJnx9nT0a1wVSi5LWDFARXHRPz%2BiGVQNSqrcP%2FIF72AFb%2F9q9holeiPSbhHH9W9CI8uuwyg%2BbZySkg1nzrutOrcCMlhUO09qxb6YOeM85XDBUaVrMQHAC8uRV7vG08jucD1FwE3EhuSyKNOv%2Fsa3f00PWHdr4YXmdjqRPXF1fjju%2BCc7ENbDtt8iFwS8oMsT%2B16Hn4%2BzCa9dwQfJop8k%2FUCedMPPM2cIGOqUB778Xb3ZQ%2FZ%2Ba4nTwXYWH9R9bsJ6xeQ72YkOzBmX3BD7vyhz5RPbkdfMegoYta1BeOT9oHpWgRNGIHS8%2FZS%2FvElHCVvwLNePvXa6SPu8D4HinSWZO7%2BObfXUCpEcmyYYu8gRXFedyGQA1kNLJmDeoyDmWPHG1EgFd%2BaxKjWcFt7Xp1N4NbytnuPri9DzWt2VY7tWc0wmleGIMbXng%2B5dfrC4SyOl2&X-Amz-Signature=65927d4ef6c4c18f21fde3e03344e2a9676fed08b78a82494bd5285012b6c2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYT5E4F2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEYuw86iat5FpoOvFOAeq6N%2B2O8cb7ySdFxUhq3BBzsAiB8h9AyP1U7rBNylxJZ62QC9zfZg1OMPb%2BiOuQLltBm3CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtpXMN4HPWq3ecv0aKtwDqTdXOtOLJsZBwuW%2FTMASYHenY0YzOoISg0j7PV3LhHyxWHks%2FUVm42uHhZJr2SgRbD6lTG2XLtbw0XSKVUQ18jmReXPiDgn3LNtwI2kJC056jLeCO2BOF%2BLsvPsJwyeAyDwmnnQCwGpOgBT%2BAfsOkQqFOiVEag81BsZtWLaOuiqtfelnDdKWNoV9XUmozJIDZSu%2FMzAUEo4QKJCLRp%2F6HYx24g3EAtNMq7EhZ7IqUX903m%2Fo%2F0sLfT2whwsOwH6qTuhDu8IbEG7XSEbSEd3A7C%2BHA9MGQj%2FALGXPlPZ9IPF%2F%2Bmk5GqYVxeoTAI8sZryuQdczBgCMIWmkRm%2BLKIzVnrKjasdUBQnXFaAKEAG69DKSGlIBe1AZW%2Fr66p1Tb3xJeL%2FEVsqup%2Bn%2BPokIoDWtso0q02bbdyDSUaXcctb2oF4R6LIKz%2FANC6wKRYr6aFHhNpSjN5Yg2BcgwC65%2FbnGMUFXmXSv%2F7k0lo%2BaWkkbZH%2Fd%2BYBpcpxXUU26friyw8I3mruNlnsmumjQvCW9ICng%2F1MIRFAxqT%2BeTWI0NUJzgsKv%2Bwad5YKJksxrkf9nOCmvIUACecrXkSAQseQqdQf%2B5D4fQTaPh6NIeyIn29xpoQfL8vd1LlXArgVn%2F8gwoM%2FZwgY6pgEs7scEsqgl6NqcvlQ64ZUiIKsTv5y3gd91X6QZy70eR3dT%2BIixU9tsA8Ae8BLaaPQEPi1sKoSvB5E5xkp8piCz8VHDKJueDUMpODvjRqLBwa%2FV%2FVi5YMRkp9XnxCZ4SQNL%2FYVwh%2BL9gzbXcSQ3iESr%2BD2jzZHk5UYItpkh2P7Tod%2BjFJCALyJdnCwAy73h2b9kQhAyRctoyAqCCZy%2FTLF%2BGJfjHODF&X-Amz-Signature=f7dc246dcccfb3e0df9b203ea96bf0b72e9d87cc86b285782f16ba8f2735b357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
