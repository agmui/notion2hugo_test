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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFF7EWZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFtvOujkJIQEnNmIZFXiZlGLxrYw3N4laGLDLm1O96%2BrAiEA%2BajKgLIRz4Y9zUUqJyvCVDJV445qp2qxVy96gu%2FrhYcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDD2nVYL56wxk5ixEcSrcAxHb7aTdCJR%2BHR2wXm5k3%2B34ctHvK%2BKAZy1IX2c1sEi4npmoNeb%2B%2BwtC7rxg%2BN4t0L3%2F2Hr%2FWkRjnumm7suaqP2UbZD7SkswbiCaELlA69SVp9eeH1%2BFL9qwk3u5i3CIfaveBoLzDfvSe8ShO6wt9%2Fjy0p%2BZmodt3wMomJ4YATCy4PNQ7OYJKz3B6eflFFA8ussuXrxZAY9%2F6EY3Asp7NjdcAR%2F%2BA1nMdHkYecSkrWMw%2BbdVq%2FMpzcTxKrm%2FRxvEKgFKRFgGgMbQup9UL3bvgNP1H7PEePoJVwRYJcIiHFRoPtsg%2Fl%2BHGmhp7tHdiq6X%2FCly2FhlgGczm86V3SAkOyjrfmzgBJOtkYqal0wCJ8DZfbTLNwexImYvrCQc6H9DM9CiIKnFBr9Bc%2BUF3SJeuZ6rLa%2BTbspeB4cjKxrnOB1rTts8F11M7Vp1%2B8IAwfbnxQgfJjHB9K3xY%2B7%2BmBv4C0ORShENkkXnnXyXHCUvGA9Lc1tV5We%2FtPnODViDeK%2Ftr44mSfHwP2Lgd%2F6cs%2Bgn%2BdMl2%2F52FwkmCF1oGlhJ9rCYHwvU2zSWQXeBBzOjrSx7Mf9DK8u6f9%2B4pe7E%2FX9Gv9MnHKtPMB1SoiWqY1qvD6P1M6Wo60c26iZBd5yIMKGq0cEGOqUBKIvyKNKc6LlAdw4fY6EpklttWIUYcj9CVsfU1SrRwjn0wP5vNBnzLiDFYR8Cusr%2BlANp1hSqPN7FJ7bSI2KiDn%2BMMp6tAY3S%2Bb3eolqDKNTEe12IbO8slp51bIY4N89jErrwce%2FCxygPnTRbnNusLfPLL1Eg1ukNSoRQK7MKN0PciDNVYo334Xa56A2Yn7AKk3f4Z5U0FZpTmWfw%2FyLoX3fDAAHm&X-Amz-Signature=fb1f0d9c5c71b505133a9ad4576604f5b684cb4181fddbe1f0f904b5b08410cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZZFRGR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAykCaO68%2FgvaE%2Bl3zrvbFme00wmhUuf6gC5TkkWMcvIAiAaJp3Dc%2B2YyT%2FtJ%2FhjgerIjF5l94x%2BzxcrUPcwCadLVir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMix11%2BXjWIJK4CelOKtwDUQlHNwZShNExdhZpAFRrVgBJqFZ0q2QDJuJM%2BKZwsJqtbdn%2Fa3UG6nKui3rjeqh%2BQwzCxGyhEO6iQMAjjnM8uZRT8puVZCLTRooEfjIyJz5ZBBAl9MyFHflzw0eEXJTAczStBp%2BOf%2FzEGPFi4WSFGAFjt7dJSyn82SPTT%2Fnu%2F6OwTatMVeEN65iirzVOAIymLGULjySh2jHtosUniGG32GNgpMj2Q7PuVCDDa%2F4qJXSuiKIaS3joqePlJ0DZEzUb7NBO%2BdC%2BLdJCuwdtq4zkUes0ug2uOXRvEBffzbIPRA4OKqnY%2F1qc%2BGppv47ChcmO8aVi%2FiEUjktAh5BvbI2t2Q4Sw3GKwq%2B1%2FCSDrilzLsZlWThh2ErJt%2FCLf1sRzK8vCx0GZhvwyAYGeNdq7SK69mODYqlhjIW9NyYUi7NAwVYnRy9lMJ3WNEByz9cB9W8%2BEcYvriFyTHYrDL%2FCOXNIWx3FX0VCz241jUuf9%2BpXLr%2BaKYPf%2FW%2BgKgmgwYWI6RpY%2BsY74IFs5Jc%2BJtAXNCo51tpvJbpLDVOpgzWFZmAk%2BurW86eTRwwXooikiD6jHIYulLaDEYV7WyiB6CkUsnk14aPSgQF18kZ8sxs4clEHQoaEHG1WnhJnaIeorc0w66rRwQY6pgEgvMgQ%2BV138GQ3edX4Q8xEQXh5CxCl%2F%2F%2F%2FRm9%2Fcbjhe%2FYsUY3L4tpvUM1DA7ffI3Xhhw7GTgZVXdEw1TK492yXG2t3mbTXO%2BTub0VuQRQqxdAxb1lj2ptGR4Kcr5dzl0W0FZs9J24d3Plg9WG7whjkerbqsBwwE%2FnmUsWZuthPqQZRXMGx7LWLDI%2B6BrC%2Fob0joQsW7CTi%2FwWZ8EKTJdMXKb09xBA%2B&X-Amz-Signature=88bb25217807660bd57f82474fef1ab8306a399f7d5b672a327fa1588062a690&X-Amz-SignedHeaders=host&x-id=GetObject)

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
