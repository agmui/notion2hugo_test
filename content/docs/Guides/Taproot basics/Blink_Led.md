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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FHDRKD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmpZmdUx33A4dkH%2FUyXGMInLGIcbJddb0tyuVctZSCYQIhALFJ%2BCQdoqljr7X2m3kE1MYnkDSzVBc%2F7hB%2FQn0zS4HwKv8DCFMQABoMNjM3NDIzMTgzODA1IgwmCCVhR852KSvEbXMq3AOw9MSVPH1mCz6OSwp%2BNjJfthPEiiqw5EQDe98dHGUugvv75otLTBA7zjNPD4PIOOAPmvhrCA%2BhJKBwYxqAqdAfoj%2FrrPyEUMiiasDDt3ymw8cqyod0kzWfPtru92cqoDIW2vVU9jbPGBao4uLaRN3Zg2vfX2yLc8nEwSuvuIsx7F%2BuW5LCDsj3lhTEPUaDLavaXV4cJ4hW7r%2FQyp1Wo%2FdCaG1WW9h7UAQ5xzteBnxHOUKBz7pD52y%2Ftzo%2B9TO505ldAdFnDYzFcgfNUg3SPLvKrJtb8wSCMV9qXevWeh7Qbr1qzzA15PYRtDYQwbI5CJMMC1VGsEBxCT5NC4rHI2gSUIiV1BA2W33Nj6cPs8Ibhn%2BhBjk6rxwcD280tbfC%2BkMsZc6GKE0lwmQfG15Xha8Qp56JClday6mmvHDMON9%2FMkBkxsAORAomjdyCPj7jT3PGxC%2BWTHECzoP9PQCL%2Bi9EVRmxA08%2BqE0yFu2P6Q8CZuUcv%2BBgSGSInm47ndL9xCJBd3CWSBzojgqWw4EZCjFSxPaAeatewUItxAtxaCAaitqYQuD2OOshPvZoEAhY5%2BBnrYIVj95zw3lfr0yrHYO4qvk4eR9T%2BBiNKdT3Mxl6GxWlhisqus4DhdiqyTDJq%2BO%2BBjqkAZJnfAUYRL04INX%2FvJaTaLay2x7QMDmrI5oXdtNrsULpR6QFH8c%2FDhLThWhfAFNypeF%2BTejpebYtrshyww53oj4vfipt5%2FSEQ7FJ28jWa6RhiFpIBKtpzmbTfxvm4rET6gNC0lXHI25O2I50arLMN6LQUEe33k2bGVlv4KTrEZkgSN3altxsiOPSIiHqo7B42hhV4ebgBy8AQeunnlAF2MCiNl%2BJ&X-Amz-Signature=1abe2d32fee844a744504ed1ae1874061316ee2619271dd6423530170dc70a46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652JLFNEP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeFD4MsW%2BZoeuLpgdKB0dlfrSi1%2Bxr3Fac7cM7ra7xrAiEA7mEd5RGQE%2FOwZFpgIzZxdXk2dl%2Fg9K1ZFER0wK2EeRcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBb1Mv10YQomUgWinyrcA%2Fk1BAVaLMB6QWtA%2FJgZ0KPfoyAIDnpCxIWSsbe6DtxER7ofIKleUf%2BPvAP0WN%2FkmzYZjSn5yVkUeyS%2B7QFuXOp0qlO6Zo%2Bc0XwwV933OTe3DcUKG7h%2BdEuY7oJz2irgi5ktJ8FmGp0GT4tHfEGD5ZCoop8RLlmMPpQHrd96jkPGwckAvEn6ks5xt5N%2FqY8Nr4squSMI7T4Tt3J2EhbVe1cJPvROUFYslZSZ%2FqH0itnG3u3KSm4qYenTvWn%2Fn1Zkq%2FsPIGZHVuTA7lffPvpRj3xXzWiJOfSYp45yXqI%2FXXQKpV64Dh%2FTHto00JNrXZEvVlHBqUmGZ1cbMykp8cAiggMPjj4jT3I0wICzejcPE0HFs%2BSYBTJOFD0UGXyw09T7E%2FgiFGcS3l3%2FE2Tj1X4PVwmSQ0CxtBsxh7sDLrmzqgNY39OC0zV1JhCRfzg47XBpFxQSU8%2BaMJywqulMGshSEZSoyZ1YL4r56gMdQG%2BPd8eeuik8STgzRM6k8CSHnV02emmj3YYuyO%2FhdZqUWdKiGzwtmkmnNgOY7%2Bazg8Te%2BbbX1vvxwDmOmbsmqMI3lY%2F4E37qm8hcRWddgcdzVW8J4FEi4P4LH3FX4v73EKG8s8ySBfilAjY%2F0xkz14nzMOir474GOqUBDtKOQ8FSTW4xOXTwg4iP%2B%2Bu0der4y8MUp8jxnqVFV9256%2Fxh48gps9Ti2e%2Fy22I0hmQ6T7lcyFRLi3rsLTRN5Qn3ksihRe01FNlqZYegGDen4blEb6HG0mfWf8NNi6gtpcTkG1P9o%2FvG%2FJuD5aSMWgvSYQ%2Bognx5w2j4P41Rq7O6th35%2B53Hm4yi44e9NV%2Fb8d4mXts683XJScCF98oaroNIeicD&X-Amz-Signature=9aa88224b687ff0183b2d66809d8464d282c4e65dfcc433fbec8257f451bff33&X-Amz-SignedHeaders=host&x-id=GetObject)

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
