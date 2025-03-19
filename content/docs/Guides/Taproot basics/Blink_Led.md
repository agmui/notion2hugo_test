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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVY6QC3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFYSyGNO0r0Vmk4Ja5%2BbPQX0nCksy0DxjB6uF4zpIZI8AiB7V71tMIiLtDuexS34XvG%2FoiXV%2BqYUxqNdgcftTkNSUSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMqLIX5Gc%2B9kWsjzHUKtwDfEurzRvefXBLXRPtcjN6zjdHmvbfOKtV7NCjDE2h6b3%2FfTORcSpKWTJ2MBtnmWUd9%2BdB3KgL6NaE%2F1D4hesEBVmGLYp6MK0Ci1l2WU3YfJThL0NlxhCSmYD6oDKAYXSy4q%2FHxOWxtZvt9j%2FLqG5kU4Ei5uygsDeA2b7f%2Fb%2FHRSv4flSsfmit9HPofbJLHm6LpdPLWWh1%2BQFT42A2vUvh9d0DuRsB7CLlXJPAolhxJ0AZOHcL3rIvqQa5kkA8151tuwE8YbPTw5L7eRqFUXQWGs84ve0AVyI%2FuYpoFly1SO%2BenPpZbXsZA1Azjy480owJhoqGvKUvofwj6LnM78dhH%2BY9Q2J0m2IBfWwnv6W4IjbM5%2F77YkIgHbZq7vKf0e%2Bcj7MK2NgHV2KEYvApJckN7tF0YkAzlAUDI7TAqAKLb2FyEInHv6XplAkHS4teWbmKr0Zh%2FgLgEKx1%2BXykIVyD0ROm83o9rbd9xIt3KbJJf%2FZSh2brSNVlEf31vbXQ%2Bvp9%2BrnPKMC1tm6e3Sc58azNN5nNBe4osTHOYC%2FytEKnkIOu3qRlRgwfdwY8urEmclyQe9WkDtwIsx9J2YzBWaod15pMuEjPSzEhEynijqZZBOagzapEeVr1GASq7rIw3rDnvgY6pgFZiQy7JzEwa%2BSgEWYsEcY2ftvRsu2nYd7JN4VoSFAJ3lN7dI0x4uitSAXloDeRGo7uQf%2F1Wt66koIQB5tyhLdxmyrS4R9Bd0RDcVmy7Pjb%2BuJZidCEQUl2zuzzJd0pt3rm1mHYXPVpLzbUgZrT26h6%2FU52BtzApd%2FgukHuhiZ9y1EF1rLSVaf4lwZ1iQePm5CK2ZTOc1aPz%2F3%2FF6zpQsvu%2FRKKPPVf&X-Amz-Signature=4f61b742a41d2559d94ff373d768adde00992672cd82de6628d8d70be34fd94d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDASCDP%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEJK%2FJb%2Bik8HtBoknD3VYsio2w6MdUbOUmOAGfUOopZlAiAoB4rMo2lR9OBt%2Fe4Zc1XBj8RGSIu6tdbTF8pqVN%2B0Kyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMRa7hybU5z8edur4zKtwDnXuyWzbrMn2JXkde8rzyqznBuM0lNinJKqTC2HDQ97t1hMs6HGb8v8DJmeayVdVQl%2F5w3w4HUkNwSE%2F9j9T07Dfm0nsBkwS7sGne8ByPBfCqNG7dvCSqRAQD4ZZWl3YcYNwI3UI7%2Bn7FFZJtrCyHTXa92wIHbUt7qEEyvYytp86HEHwiaM%2FYY%2FfjpNifbmBQgRe7ZYqubn3i6HuxHRohifEC8a2XuiokwNT8vJdQk3h0fpfB3csSSq9n4hXL6W1PJ5x3kwTgOZzRdHvom4I8YIXL%2BkYmGfSvPF%2BfslFZQlv4HbVXArZsaLcsKey01PXOusz1opJ7ar5YfP1pAujWYQxr1DXrY%2FLiK%2Bg5qRXASEHaaSK%2FjktwdWtS1PA1cEyId39X3Ulqe0%2FlNHqgwE%2F4hwVcq5zoCT0hJgoVfbHLHyJkhh3R8YB1C18dMXENVc4RdbRi6sTZTJTT6ysUgQLnqeBi0DgoBrKAxaJ%2BW6u%2Fp24jM30ZC6fOc%2BbzlCTGxkicGtLIcN%2Bn5v%2F0Z8JekUfHVaR%2BTq2O6zSwIAflNF6pc31DXF%2BIIeTiYXAy7rTyFsMZv%2B%2B6qBiBHNQzkjFnKWg2ouFmrvkT31XjRKLndQI9y8eS1jx3bLNWOjWcfoAw17HnvgY6pgH3piyyll9WYB1sXNV0%2FBtgME%2FyyHnXgF4ngvs1Oq4gX%2FUMWjgEPSCmXOabcTevF9bTQZtgFqOSMjHER3BTIqA6NZB%2FZd0mkBZPS5%2BjGfup6U3k9ZrLqyVt1nLBOW40pvQmP6GsvIcHPj0c1aGlQiVUL%2Bl6CqwS1FRf%2FLpcIQXQAE0PmQcirFkpm3ZXsgtNvuRo7XNK1X5d6AGEoXYjzfVr7w1mDbRQ&X-Amz-Signature=daf1043186a5d9e7e25350af76b17cf7fbe376b275f2f032056fa8f07d33fa6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
