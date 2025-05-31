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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBAJAHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxnbxT3QGDRhsVUheD0jYCV8E%2FpA2mwOwdTd4HaQ0dggIhAKP%2BjbFoZhwDAgizvlhVCqQJiH%2FdVcurRcXOX%2F%2BcuMM9KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF3tLegX5rH%2FMZ7RQq3AOfiVa3U0NQM%2FdcejWSckH4sRC2LgHp3N3kKmKLxo7CRF%2FUQRCKVPFP%2F0lTcN7rbrc8%2Bn6vOeRSMio95%2BnutBb8zvOmsU1%2Bxmj4bFVG3D%2BF6pJZYZNlDvoC%2FZBweguSa0RAyuhYDQowpvp98UXs9cEpmdEkaO5%2FCVGN%2B%2BHSp7KtHlQqVuwpJxijURUR1Uq33Ob3lIQOohGQYf71qMXj%2FYVWACv5JGVDrKwscDS8fxmbjknLAOgSxAMz0gIBsm%2BHrGRrgjF5gpEqi7xCO8wyfWilQwYYlWSQXXhhSJgjFCAHxEB8%2FN7u93eCV65HyRV7eKMyegIK4WiuB12kMawwx1NI83n9On0OwiGjHFd7yUFpSGWQG6EbpRXfeWWo%2BjrHVNMJJHvciqHRpvnj2nldmEn%2FShz35QHmz7hHTU19%2F9t8zbw0sOSFQZ%2BrMyskLhpWzIHfg%2B6Az4cuhNtXV94H3eV9b2FXXZO1kbd2WQyGagOmnq%2FdIGk6%2BaIft3r5nyi6n%2BIqThGoh5JsEA9J0B76Sp5KLhRRMHF1f18smxhbaCGCQ%2FTR%2Bleka%2B5YZitpG2KCg6E3%2BUFhtJDzSpFvyfXc21wbzIbPIN3Xl4XgmX6SM8iZCcvOd0OZL0ZLpLThaDCS4evBBjqkAf84Qel3YThd6tgr2%2FYoVZLJuaStVNFJnKeBcc0XdjOoOf1JaZz2tWbxswG8sm9y8mAU%2F4e051o6%2FH9C%2FdHsrlRT1fRa%2BGQNhiz%2B84T5pZgKHZTQQWZLzW%2FMDTtEmKz9y9zsikXncfbEPxIgZl3jJc0RcsY%2BC6Q57BCZmEjusyk0QWxi3ltBoyhEWfAbM2sl%2BUVaQciqfl0CZ9VI7pG3zUR%2BV6Jl&X-Amz-Signature=8a8d75d6c301d34f30f63a5e72aa0da7a70e69c44cf8f47322ec65e8af1b048c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y72LX6U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKYi5IYQEjv8qALQ%2FdSYvDSXLr%2Fa3Wz9vqOy%2BYp1ZUOAiEAoIHtgFIy9IFp7sjBovfQXaqRj1115biLJoq7%2BfIoYSgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYcGMybNlfGxQapwCrcAzAk0mQjoJwvYFQobUtkBMKijg11Y0RirYg9zKW7Zc5ZyJB4QD8kr7Q30FEBerX7U3tPAMf4jvhF9b3G0Bji0%2F2098d%2FQCzD2p3NyVNr1%2FIyC%2F0b0aGHUyE5CZeyMGDO2hFTWXEedd4XIWOZ56Lw%2FrqQ%2Bkvk9hnUCJTQyGDnzORmwrryZDYabw%2FRFpEiUGIal1XYJfiy%2BsBqymENWJvpbcwi%2B2C1007IuKz9yUpI2%2B1RLMUtEOBZ%2BmiO2T39WfBDnFNWWY0jWjPvK%2Fc4oZwWW%2FT489frQRm3cOm5lJJW0FkHowg4eZfOHfODWeQ8byOFI9Dkcuf0sMBFc5h%2Bhv6zdUXo8ijwPBNY7AO94glhi7LqhAPdvj1GVK6xmvV0CGoxkxt%2Fcl7zle7Dqc2B6rCHiVaZWyohVAUNwxM8OUJdJ3pZRAAmMY91qbpQwjbXE0aKS%2FmzDxnnIlOyucXBGDy7w%2Fd%2BeMxRjfvb7aO9vQUupt6Sn6%2B4l%2FIwJP1g%2FnQAjXkGFhEzaeq8eoPI7JZPufXIG4W%2FbdszNTB4wYqoPLNNL85sr2j9ccY%2BzosQLue2saL6M1BnNVwUEIT2YEoh5BZCpJOF2mlBlMX3Uk2mxMWUAqnCZ8SRmMt9cq%2FitUjYMJHS68EGOqUBQVL6o8EUcwGZEAVoycW9%2FB3DAAzPL3lQqADGZ8RxfgNhBT%2FSnKRSVt0jSSANuNL8aJAOG43Jq3rKDiRrB4moxd%2FfOX%2F6Ys1oEOqoyDfgFCHB%2ByzWBHE%2FIqjhpOtlwO8I2WnsZeXV3xTfqmEVIW2l0FhxI2JpGY8A%2BP3I8yqBDjjNh%2BbtHuIxqJKG8%2FB4CxiQN%2FdtqJ%2FzqUT1%2Fuj3PE%2BYg9hq48Sc&X-Amz-Signature=628b11daca95aced2df1487057486ebbec26cc7adfa2f8cfa21e23290a17d7dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
