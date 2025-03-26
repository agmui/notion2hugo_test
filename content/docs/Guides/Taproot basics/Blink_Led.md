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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZQWXR7C%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FTnxAbLLg5%2F924Bdz%2FaHzuMx4ZHVjzPOWCT5y9Wq9sAIhAL7G2YR8p%2F3YtrnnhNlSpQiOGlwcDP1v7Lc%2BwLIfKDqTKv8DCDIQABoMNjM3NDIzMTgzODA1IgwexFcCRCgUPaTImqQq3AN5pa%2FrrV%2Bzo5OahzP%2BU7p6cAF2l%2BAJHQF5qAd%2BwBFL9SyaSh58ehdrwQOpVthkvZARwKchlEc%2BFu38LZTRMbZGsR74RwSis%2FyS%2BbqYdE2QVoQn6ReXCQIDG204G8fM%2B%2BCdLb%2FqgCjMifrX9XgzEbp0Sf2CQSw%2BCKSFC%2Fg2U2DZD%2F%2FPliA9BnPsFp6IKGghxe0mTNyhuT9D3mtUmrqLl4IenOGl0KcQvwahev7xXDo5ZLP%2BqKfOcgwWYhMZmgfLF5EfVb%2Fw4N%2FIvQ4jI7x13jtV8YR8giqx7NjwNHncIg20CIKsNOeVgNiEAQeHB%2BQTC%2B1vNAWf8mepHRWm22oXy22GWm00ukcUfaq5%2BvgcjbfV6aw%2FJ9jRA%2BPf1dwQxuzrKMBFZULe4YBk6NUvcypcHaEILmTV4%2FDOZTrfiJuVTb6odGl5q9siUqIWQHRfvx1KPLn1iSS2wfxIoj4HEGmb8CaMB448DFGNsoV2Js6vwyrnGTAViduKfx44NWMB6M6sXTiWCzKJ0pkQKIqPtK6a5K8Iw2MLgzVBFCQAaiTMVHh8Bf3LSuMOI0mPDsGWWieHKo7lo8HqdlfQIHc5ON9LM7n3%2B92upx5J%2F22ovhlQOuwFJTd0d6Ar7ks9BBe9xDCg15C%2FBjqkAVjWUxEkBdT7wyu7wDlThlODEut5B%2BrtvNFEplXxIxVp2t3zV%2BW9ga08NpvsqD9r6Vpc9lcn73WX2yeRS%2Bk53VuuoP8G50w2szmzYlrb8CuWUX6ei0OaamgWZ6O9JU2JzRV5ioKeywuDguIz1SRiQWw2AoiufGuY9izbEo0ko%2Bed8ZVzv%2BRBmmvZMPu1HJJ5T1%2BH4RQdfJ9UpVxYIGFcvvkrP7xn&X-Amz-Signature=1057a04b684f3a616e5b6501f37c436a0391d1a5f8f7f9f432a57583da6c4da8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXWRZAG%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5XYnG84PXRwp%2FhE8ihi%2BlMALUL6KVMJBsiXuxmpIOIAiEAkD%2BkXEA9bOwur8DWo%2BVSE7%2Bz%2F%2Fk8nUEpBvc8UPlFDvQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKQL6WIhUd0khvQmgyrcA1ZjAG7yfTnnRRjhaHXq%2Bz8yaHKLV14ZQ7GSd0iWVgZIE8X%2BiFVzMGpqTBtmegG7oA5J5%2F6tvUlDoRZnRthO6gSC8uQAAX38ZNr5QJOZ7dM4VQoj%2FvxS2pHdkRMbh93psZulq%2BD2igcuAqe41sUbJMCO5HGB6YMXIYQeG8DFgwB9XxvESCPFl05hG9szQvJpM7RyRbr02hi%2Byeh2cJbX4%2F6%2Fsp3xnf42Z0vv9%2FeKodZJVeHTAwOXW2XJ%2BN9Q1nRZFlEMANlJuNljrensURoWpRH1%2FNfSAyQ3i%2FoH%2B2oM%2FQhoLveLfe2rhBchq3kPQW3Zn2oMe22pgZVyuF%2BxJ9MlZVLoNaxkfAwKO2Mms5xO8KiNzj954QHUrZvTeRt7fDIx8kUioyLs2pdoAg0U0LMlka6UOpoBk2TimS%2F4MLsjhIZIsBEWr43kxw45KUGbMt8uewzROT92plKEg%2BlzBTNr7lYAx0zmyHYn76bMcSsV1Wj%2FN5H%2FXDOXUNveLyU2rho1xaYj3d%2FLxb%2BifIGwbpHBp5uXbGbbWjibn2lODlunWOon4A2KjOaDtrFQbz3y4jGnKqf2W1H3vpghUMmTjFYu0ixGnO7SBspFGrrRJ1947k0mszcYwRJuyrY%2Fj1vpMM%2FXkL8GOqUB5kIygnYuj9Iof7Q1R2cwdVtUdsKZlqWH8DNB99aWZC0ZPYr2MeJTLOAy4BhTYWMgimveJYWwDoOgxHbFHyv1fOmbTCxNklbOD3nRskPdAeaTrbvjAh0xLLizJjjxbAAY92US6hVQtzp3cQ2gMv1mGR5ihb7b0So1Qle0Cg%2BqiLa7ZItfhqo5%2FPi5SUPs6ZDYbqcLtXiG%2FqLifexUNSOCwBQiIH5S&X-Amz-Signature=63d50b16e2e57dad6a1d1d9fbb3b6145f0814fce76303c7a28cb1e9aa5836f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
