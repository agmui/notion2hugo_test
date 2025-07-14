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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WMXCBB%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFdAi6UdicuvSR6s1Il%2BkjPiMxoRSNCDA2ikqWd58UXbAiEAtueixZw0QYukPoIeKef91AnezyU2xets23kA6hMJjocq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIcJrCTy1B6WRuxU8yrcAxk3Yvg0FP8zvFEZSa9xgbEV4M%2BDgGEdrSrkK7vLtjPNhfQ2DQwkUN%2BY%2FDCzKrVZzwoVtB%2F2c%2BkBM61p7KUXhR%2FtQjg3CaCO4YOn5B06M723VJNJ16NqwQLndcLkz8QXfCrqA1m%2BF9eD9ApGk1Rbs2DyTBn5Ifoeq54KcTxbMm%2FhWVxIoQaMl1er6C%2B2dQF2RvyDVv1Kzinl4RkpWbQQoHgktacVXPi%2FpwhaNciEJ1afMzi7WhZoK45ZHR7yIXqICa0IS1fFGKIln46TjE12Dn3UozTKvPSo1o1Id%2BIGh5jJC12fY4Gc42p%2Fm%2F7%2BEr4A4Had%2FT%2BHwspG2D5XDbo4Afb6GwzQ8cgMtUrHTHaBj%2FKINKMs62HZKnzgyrVU79NETs8EcZvfqKTMHbdx9aVNDkpTsL8hMYHTZrBYqTEoiqkMdDY3jaribFZv77HE4AJG5p9bkMhgv6ownGqJetMFJEiyNrR2512LL%2B9cyFWbONrCl6teHtUgacfchQkLarBbg1Qd6ylgja5SncFwALKqUTgcrbFv1%2FFvAJskcthEdcewICE7siFkD%2FihNCmroHqdP4a5%2BWiF8g3hZPgDZCz8Vn8b%2BpO%2FIF5rBO3OUa%2BZczTl7jSnkgU6s2hcTLneMMik1cMGOqUBEcZeTXfEr5rMLtAYvV04Ls0Un5O8e730gXcxPpjyPCLElbnpqnqoU9iZnEc8%2F8AVosjmKKdYtCUrLpq%2FP16siMYRtAwb8sDrL%2B1O7uM52DWiXH%2Ff%2BFW565GnFltLuV4TX4HMvfPAKNASJfWiZiubvYrduBTXW47UP31ns%2Fda2wxzgAgfnc4RBWa26pa%2B2uePextTs1gDyWTWLE1KFfEB6W9NB7tj&X-Amz-Signature=b4f520fb30f783a949df57a4cbf7e69ccd8568649dc4ed7deb057fbe4e408a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOBFGOI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDOfJawQI60kkZyQgLpnlDu7nU%2B23Zz2fkh%2F0%2FXwYE%2BEAIhAPzgpz%2Ft4LDz2deerQgBefHEjVGueOzlzMCmpc7p8%2BLRKv8DCDQQABoMNjM3NDIzMTgzODA1IgwLc28LKcHG%2B4MB4hcq3APCrYeLD6ZbbNWWp63jLFj6GKRnxU2WgPxv4djb%2BdJ7tSvdwwEQKqX9UC3PBOK7rv1ZYjsOyT95wA1zRyZ%2BBqFm4wpU1p9MoepBR1Q%2Bk8zRbFNTho407Q1OQklWl3EjGHcavqlnTj%2FcSx4vhPPSuEhoAhU67k4u%2BJa%2Bk%2Fwl7gJVktuqTmbzCpUwth6WidaAEpmcB2YGjruf%2BMKzBw4OW3mAPbqE9pVUczny1qbcGuvVEHuxpNnz3B9MHdid6mvgX5Bsnh1mnlIGEAfgmoMn0HymLWjsPuXoMw3NcDr1ssKgFtyLb2KmRK9%2B1KBcmKa5NvsR9msifVr%2FEf4HNLPr9995zfqoQVnXWBTlEl4b8%2Bg1%2BmKi7RBwRRzs1XTwcXO6EdhA4NzgFUpfYwVpdmwTvwdlQYINI2nC89KwLwfF46Fjs96OuIF%2FAJKjmRFq0YQHYceo%2Fwar97liHVa%2B7Naalcja5cMYEQ7%2FuQUkWijYdg2QBWaHS8guJaI9dpnsels6W2tqo6e3kcVcBh2grz%2B%2BR97nzLSDnFNhYAJ6k10K9mT%2B5rmmQeaZmdqLBO02T7%2BgnHD9TFx8kJMu8vFsnBNMH%2Bxv2ZBZEKq%2BPsqm4xelpdffYQrS7csAOm0WakLMzTDMpNXDBjqkAZgWm0iTyZLeCAYnHxxPdgE%2FravTvVnFArELSL5%2B9sasTLGHVoZaBkppFfF8eP1oTML3i804ll7c71kn7D4L7CEMcAUjP%2BEv%2FUxkgNSIpCT4%2B6Ncvf166Y0eR9wAaQuawh2KkGOnUHRap%2Fc2pkqyAxeH%2F1bYWblpRRysnGhwZWZVLq1XcP3gS6lGko4i7EBpLoKYW4JnRamCEuZM9GjmDhnhTjon&X-Amz-Signature=838e39c056a41ae9137c670c88c251edb870830c2f1724697615e28e6649deb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
