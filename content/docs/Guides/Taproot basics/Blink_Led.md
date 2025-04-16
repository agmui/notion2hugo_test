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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LXETHMC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRuhn%2FNfhj2n3fZwP%2BQvLtQRZ4tpzQwYa32zoACRRH7QIgF9PRkGfn%2BIKmsnIM0aABdPp4t1OyF3Fzu3CgFpaCLeAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDF5ruQWXnUJzxtKqbCrcAy%2B8bsvr6NQKNSf3SMpmUtYWxU%2FVxHyYYIKJ49%2FM%2FKpEO0GZr1gMnRyb1AhEi%2BUpX33PXHokmFdMY2rk%2Bmjbna7wue%2FD8rb2wBgzcP41Ns1bq9BhVlvbEGDSLcZlCLjN2GJjuE0alIvr52yKxKVVDU16UrmJjEHojIE6YJZFthuIlJG9T8Lr7gldE%2FjZi8hwqJsfMaOXQOd8%2F9YVyE3iLOt62uWP32l71DfsMNofQDZTMEiINsbAPuwxJqZ2h%2Fqacj2IEori%2F0xN31qkiU3whyoW3pytrv6QCn5Yy5SDoVF1xBrynCEXW8UZGnekeJE0W%2FMM3d2jWQWtCavyLAw4KK6OxreTjyYfIYjs0iR6pkj9m%2Fevuazvfg%2Fz6hoT0Tt5rLeGOd1IO7%2BqKKYkjHSgs0kDi3IlFWe6ktdmLh9KgiyR4JvV8H4fLcI%2BDhE9VqftLDXM5WW3M5yBbkHUr2eThpw%2BhdL%2Bp2rQgMmb8cBkOHYFGTnAapSCLBfSLLAbXBuZQ%2Fr6KZs8lTc8%2BfI%2BixtGZq97lO2REd3JhmEaE2Vp9lGzXtOVA00wO45OhVqeeMjVvCEATdzRCBLVxQjzqTXnlhZ2kDlc5ZhDH1kGZ7S0bxletgySF5Ogfz7ScP85MK6r%2Fr8GOqUBd2ArYXjW%2B%2FTtBSqYtRiUitbTASRylZ4wdLjWs6sQUOEKv4ih5Yj3Ov9KvOF0pEXVfW9EWORNEBDQ6yDr3i9wXhMKqdCE6wy0YrxbrW8KWELfsBIZVM2bX3kT%2FYnmvK4P5JVllo3lWALoAfzV9WU5akgeTeMRbzYeCVCxhGtGcof2zonKS9iUq3hnWC4YySF%2B2khD92iSpdfuvLH%2BSS2j6ZMcLhhA&X-Amz-Signature=73dac52974e35173021db938a87a18252b2025a1e1df0ff00f314c9b9c371f05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILM3VD7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWrLLO1iNEgi6FYGkEbU1DrvizlE1%2Bi%2FaNIHAvndq4AAIhAIJgbldP07R3GgJnOAs3BsaGrN3jhpa7L1S21Te9GibUKv8DCEUQABoMNjM3NDIzMTgzODA1IgwkN45%2F0UBg6%2B0G8isq3APtTV43HkDRuDUzMzWcNicjIfAAaP6%2B0Yt2h5gJgEeMYh50i1ZSgIw6818j%2BgrPh19inXEjQPGRr5DHnrwu72vaifU4Ijc%2BkLlQQe9sBwxD3h8MCzvvJSjE2TaUAxg40SgVSq1uCtM0qZQf7c73zE1hh4IFKTO9gsmR%2BZ1GhAU94cs2ZcHoNxvYqFVYCA5Z32uK%2BAvVUiDj1A7xloT6fdvJkk8WDB%2BaOI8nn9fw6pJE7sOom%2BZT66At3vkg%2BWnmvEGDsy%2BEQ5YkmOA8Mis9zm5GhKYMLYTkUPJwrOMt4VvBPz1hxWNfGSgvNJ4KaR0F3ROkys3wWOnR90ll0Ac6jlzfJpYOONuLrGLvX%2Br4jGzXHIUTgxIcEAEzB2uXpga3HkvspsyqCY2%2BngjdyMZQO%2BRwBTc5jLis8oacyn%2BOSFvxkmAbn3Kglfd0zXqZ0O0ufYgHczFh8QBi%2BuqgnfFIn8aZwNAB1qiCWALh3OdOwuT%2FmQgHhZS%2BTHWin%2BA1gEH0DRX0FhYk608r8Q6rQsxTJcm9IcHIpmfU229sb8mvnFGjUp6eTiSalC5T5zRqF42KbCezvPQgLmOYd5E8T3JUECytOWuohsxwr6HnpB%2FMeM40ZJznpmlfeKBpXRGDnzCsq%2F6%2FBjqkAbc35q1w6Y5NK0fWi9rd8ojWnQbKYPIu2jIbTPB3%2FPyah0ucDpTMS1qX%2FGFxdHoBaHQ0Zbdud3rOk841B4073GEfoqAQ9IJoxq1Ek97r2tuzAm2bRhbUAXp8xOzj2FYzCrNH9INohlBVGSMneeR81y91aVhonMh%2Bm%2FzgwufF%2Bf5ME8Cl4PTmrKqC%2BWB9owvWgyh7GD%2Bgjk2UYDeTKN5dIzLSe0uW&X-Amz-Signature=1a307861194cef15012eb3b445ce1054926669c47fcf718656d8a285ddb2e700&X-Amz-SignedHeaders=host&x-id=GetObject)

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
