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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYZCPSK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZGxKuzxK8R%2Ff09LzwSQ48KnA56sqBGeo58CDIcV4XLQIhALYEG1%2FWip951N7dQZB8B5sXQkzLLhVrqMJUix7anJ5vKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1pTdVSma%2B6uNEABsq3AMbswNsYcfxOh%2FZA7beW0S4c94TCTAYYZNDu42gcPO5surLjyyOfI7RorYmlJ5chdjMxdvlyitglFWzIDc%2BmydDWRxCBhPs7EI4xNflnW1E09qULNoejX0yqaUOwBvu7vrVxoqU4uikjy3Ai%2B9DUnQwoOI6ZgNAI6B1WR%2B6DTfVaVqh6%2FD57jWUkrkxeNF5OiNIGcuAts%2FdxWkBVEr%2FrsDCUIDwIQRzunkjrU%2F0q%2Fu08lEqIy25kRI37RGhz7RjOwbOyfhVRUCJck1gXRbkf023F36cNNldvaIYzrLvwbPF0O%2B7wFDD0Sc%2Bat%2BAelVKXrg4H2SNBDDwEaTEoP41e43CiPTK9di9KePygy440I3u2C%2FysbUjzNZtWoZ93%2Fap1Rx%2B8sa3LcB7gQ8kfiwYrYmoUwCC7OtmSIymb7q7KfOVetrLpLCRK%2FKlzrBVC0iVEvZL6VJGMPk%2FwYWGMlAxs2WgM2cCey%2BOZOX60NYgZuPNgvUoPcWkqeizR%2FIza%2B3kDADxq3eM0QOqwVUjYvUJuj46jnjOuDASDS0r63hLFxKNEGIlrYK5crhKjEQjIxneCe7KlvDcBBJ9w8%2F4H%2BRjez5kpdgRaa3NzDrW5mGLZ1p9Yw3XInLlhzlb%2FNF31TDb3OXBBjqkAf2szg7stvTPAEQPI8CHdL%2Bs%2BhKbL211il%2FWoD8FTMgMc7LR3RMjuc%2BfDhXl8mIs5BrPT1zXCQ1RxvEWAAT25Tc1zpmsbrv4wec0WykKKyzJ2o6i4glIblWZWeWioaiqGxPIStT5JJpr24IOpoNnpcJkfbFKak3GkjHrexaSMJbYjsl1SGunpLt2LvC%2FxuanCqAhQAAkqDpM%2Fn6YrRQ%2BnlmWXZGk&X-Amz-Signature=c75c4435e8a227e282fa09afb2903d63701e0e120a7bf60bab03a5496b55e4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667PW66ZV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7M2xFPCfKnQdJsj1nD%2Fd0M0OMLVHcSR5%2FWeBzJQ4raAIgYgVgeR5KgyrztZu3ZKNtR7xpNDxgIoSaVMDTr4q2p4AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnh7zCsz476P6SufircAxndMuYhC%2FG3wztY5jLqGGRhuY0Vdv9aEtAXB8Yhk9xLywTOVSMUU5TXUqbEbCuAxjAte8%2Bh9SdCnx46NSBQqosgD3cFIfc2SatgB4e4iSR9E2uaBapKMyjDemTfCQmmxQmVIHEuRiD6j4%2FmwZu%2B3HCPK73TBKBsBU3t78P%2FTQNOvUc1B8aeQxjO9TZWenUtrTO6GKqA7cXKyaDnzWbrVXV3JKyCeHTVdK4cwGGriNKAiYEii5ST%2FTUasfoHL7Asj8%2FJNKMIeogZdm3p5J5q3CmJEzda72BoGT%2B%2BSjOafSmVdkOZVEtJg6tCkOgAQpDRuoRlKs%2BXkAcUUnqWksAtKGEAbsxuwgJ2eBjGLXptvnD8%2BqQHbQrDIX3aazwU0F%2BESkpG%2FTyQGwMDXOdVXI6gVy5CDPNNAXbvCSYnUMMs4ic8FIGfYukBthNuYgK5w2YgC4B6kwRwixfGjPQliiBPezAZ0KLCf14d%2FoxejBnfyAXukKtLWologhpALShPoyqd%2FvyKxto6PZ6H1q3t%2FXqJMnVPA%2BOauk7Yj2J5%2Bfz3w1oHITXK01l%2BihhlD00ChMNC3oaWa%2B%2BOC8DbYJ2r%2FHAUN4VtRCaSbwDm8CKuVRlKJfS25vERdGaDXHC9M5rBMJvc5cEGOqUBNrJdeATN%2BoP%2BNhPPW9OUOMcxqkugvhEEG7wY2EXA11wTLqRFfWFxYl9R7XbJg5741nPcD9KYlJvrnnjdKrzH4shfglu8b62t6lJU%2BzYAZfiJqsQ%2BbDhZ%2FLmpCwLNP55XVj1PHTUB%2BEz4W6NRgpAw2SRWVC9CuhAGdaw3ZrWDjha9YStsO1Aq0W53MhyTyqfTd8dSpj%2FvmUjxwloOINcB75x9cZ34&X-Amz-Signature=0c348f53b88df833ddb628380f0703f47fad4989158a99d69b6ecb57408d5053&X-Amz-SignedHeaders=host&x-id=GetObject)

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
