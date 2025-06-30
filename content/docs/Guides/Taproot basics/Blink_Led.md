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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEWYSUIP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwK%2Fz49u5X%2B6fYmnRrMK6ULHmEJa6bsQShsKH2ZQZ1NgIgTgqV4rmHRg%2FHrdsW4iSB2%2BDDKJ2GhyVsQnvnLxyN9%2FkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzTQn19c%2BQBArz56SrcA2OJP6n1GKcpwYpJikREcKVFRwgTuNIkdqssk%2FzO0lWDvm6brd3mP%2FAOi50s3EaAJ%2BRJGXykBcYdJe9f1mghkkFkkvJjO4VX7qQJN3z6o6HHWmqCxvNrz4iNDlJ%2FK6%2B9%2FfO34vQSddv5LVUXFi0LHZR%2Fhdj1qjoVSbN3losxfLkwCiZ2hUpOxzyJjFnBfNVA9vKT2H7l%2FDsvSAtk2UqsEEjmfHDHgx%2FXz1skR7GdFOy2MMWeaG5wWfrmALOWD4h5RoMYLlfaRkVYQl2a50Txom%2F%2BOPS1dorqnK08HQQz1XTVQZSbzlCzxuegMoW76BNv%2BK3zSu%2FHL8%2FQbCpmrkrW8eKr2QhMHqdmoJ6YRbR3zFVr7rcxfy1rQ8Pi%2BwisJ1S24CYlWfoPeb3tEDD1COFD7y51cnad4ZXy44bRjD%2FX31HVZAR0Bs0m9HmD%2FrnOqkidMwXYy4u7ZKgfs5IkDWUgnSTy3snliPSFOpyC1fuVm%2F1UQBdyCpWdmymrCZ3QuTwu2%2BAfZoxmNCkgU%2FhWzS%2BLcesi4fYuRHOVPxDjNp%2Fv3IU0iGjHBoKGOw7d%2BFRFTYtYdnkOc4hKklb8bfpQRqubh2lUaiiRBjdHHwFTqNd1Gx8U8nciNfNCL5ppY2ZJMJSji8MGOqUBXmzJi4VHRnmlpKVf9TkvJIdFrpCF%2B4XHJdohUF4IGxn7zEzlEcbdGO25aBMPXPIwsn8GHTDYXnx5GrbXXzMf6e1Q1awXD2qmm1P4aU2lMJ%2BY4l3jMeVPfbr%2B4rKZDV%2FOZ49mUQ5VZjkhUDivO9YzvnJu9l%2BMy%2FUMi%2BAv%2FC%2Bfzewc%2B%2BB2MD7qz2kxbCGyApiXmXE2axDfmxFMFlV9tGIM1Zq6%2BGaG&X-Amz-Signature=89159b80da8339a1eaded81dfc9a453c34d14eb5959d44e990efa94234bf30bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KDWVII%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELhStqg6r9bUGarXoAE2acdjIYAXPcC4tardaRHkDXFAiA1RNsBO0vuMO9kTVUeafXcdXDJpe4WSyA71kF48kLtviqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2B583D3AAi%2BI47fFKtwDbBLCXtWLHsTK%2F3iNF0zxw0A3nlucyyEkEqmPdljOhgWpD0rDQ931O4fePxaB5J%2BqeTLOVKCZX%2FXgXEdGG7AW%2FyaTGlKkTiRRFkNY2iQ%2Bf3HypO2KBE8OZbcYIa2F3M%2FHIWv%2F%2BrFT05D0DRnBl0%2FFpEd25DM7g0e0KYEog9Eq9fBPfvBPZhEgQW1xrt4ItO8OP7nZ%2FGTRSGtOIxlQID65lZFtBeSjK92SOieesYb6MrAMjqcvuwEH3UJZiGJOAlZC4HluRonIWnOxvPzxElpif3iXLmXahxOHCpxwIJwnG1yRnnC0%2BWTBgY4AM7SMPaYnBdNAxCl4utFP347II1HbZPOQAbho3386xayzYu4CLGPHTGo3NYK6r5orOfyRA1Fr8wlGkPDc8oc%2FCPHJNy%2B8ATXWKKIw%2B3sGCjpH5D03tC6stMNeQzLFf9Au1T71tDcuQ3Kestlp9YD3AAIzdUzHB%2BsVsChU6mYf4MHrggT737mCNoqBcRYni7OXWRt%2BxRFj%2FyLxDcxlmoHvUtQpmFFRshO4LlIA%2Fmz5Pg4n1jETZVjjoQBiDeMoi21fP8l31dcTNTlklBTswAvyDmvV3eX9sE%2BytINI4n1YseKeiTppOeomzX5m%2FdkjlEgJNKUwiKOLwwY6pgEn%2FW2D17sf%2BAbiK2GbYH1CuJGIE2QI%2F5sQLle2plgOEeDG7LVxFHtjQHnWMx7SZDAQ%2BqhxpEqhlout4wkii%2FyTxvRYUn1oZmHYnUaM0opb2R1hWCtSS8O0Nx8WgFBIDZ9GIiGqkbyrD9NkZ8BUCaSuYcpqOrlEiCxQFA3zNZK7N6aaLodsxUwhPVvoDARGD76FAfZDPKISj%2BW%2BTNzsXK9kIvYihgYR&X-Amz-Signature=693bac6d3117adb457a5e8f14113148b48eaa265ec9c5c6066e52ee8bea25289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
