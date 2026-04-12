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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IVUQZF%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrQVyx5qIZsYsRc%2FMfoezbmdiXn8lVBOnpeMvyKKkjBwIgcVg5nKgF4GMZkI7bmhx2jXdRgspsQZqI9jEMCk9D%2BjQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDILEAAGzcoI%2FEhVVMSrcA7M4K0NqfTrB5xxaY9u3G6Ko%2FNTvvjuXAX420TsF32mxdi8IObyioAyTMxQ26k%2BqRYUU2%2FcdmEaMwHG1uc6M4d9zPEUjEN8zol7EYn5f0ecccYjsOI3hO5JHKwbVfyrKN4lv8Ipd4QtB%2B9Ux3XAPHcHZgCseWFE00K9q0mHEs7X%2BXh6BOui9aIZhx8whJIBRaJ9SyDg0udIZLDn6zZtcLHVmHkWsuG%2B%2FMISnDKQNdw63JEc1sE%2FGspY4tK2HHRaM8vLU4%2FkNCghwLGQAzfP6x80y3MHMZgp3L4LsY4mdkiZ%2B%2FTx8irKZ2ifOsK2UJt7FpLuMgYCX5DputvkgK%2F77969m3hV6BSlK9FJa5KGnbL%2FBA28neT0qInrMk0gs8yeRRIaFyzsWnanplqZJBm5qIHnze259qZ%2BAKBg0cwOTWHECwq%2BZlk%2FGHLxX0o9YwZcRYUjF0JUmS3cMZprJ0Lj4Cp4TA2jTUMIPzSrDwB5iFj5mypWxZURORoYVrIMokvGpXMeEyMrD6uYHw1mC0QRaONiukXijm2aqzUqKz2CI%2FKGdYNtvIylL%2Bc6Mj6WCq%2FiQkq31ALD39Hive4w4w35%2F02GA8GK0vfg2zLKHhz6r52l3VKKM%2F5jVsOpmobXmMP%2BH7M4GOqUBE6Niz7lPAu6HFPDmG0SJq30X5O52LjYy4E09vxU7CVXR4slrLwqKwUHAkjXSx1jFKOI3syFmhqzbqQgiQobNwf4i0V0bjj2fgCe94Bdl4%2F6kgRU%2B5k9JpRW%2BI7EMD18jzuPKFx%2B4zdPhjJYrWMPejSawXNZ%2BKESOMsV7zHZEVc30PmP2c5iFkiZMbZbTy%2BJD0QDlHrYas6xw5tfHwbliL%2B8SfJSj&X-Amz-Signature=f0534938d54f65f44809f89bb04d7f4b095db1f810f2fb65c712daa8d613a56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4JP5V6%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFOGAmg94mLWWzNVPChY%2BxzPKUCQa%2Fl5gDwsMO4Ajl9gIhAOd8ZrV%2FiBskHUrmva00IRnDNEXUYkzB%2F75s8rBB2TM6Kv8DCFQQABoMNjM3NDIzMTgzODA1IgyntF5y%2Fk09KJ5%2FAFQq3AMPIcl%2FwGxPv%2FIaSzCuBDMyTnIbWXCOFrw9TYc1cu4n529uWH5%2FZMuoIs0afuzRtU6wcQbOnmF4ERru7LtGuQ7Dm0vFAy8d4CDhX80OOSFF2C36ctrafwYAcx76vmqqcLKYg%2FyDT5%2BUK2zkdrnWicL46uRuXp3Js728kklU1Q0KwmdT8Rf5MvBRtO%2FUoJQIWLuD7iRvzC6tzFX%2F7g2sDhEciY8vXCstzwTAzSWqrw%2FYn%2BetQ9W5ev4WPYSgvtRG90v0Kg9q67hjmw6z%2Bqo3OvgFoPg1GA6W3n92HfQLtN0daDjyz9QMHZ9TZTkoIxjDcQlSz2heJtlTkmJjMVdkA1V4wp5%2BAqt0ACAVrFYU9wEJKjB0t%2BTwEJ%2BmwqMLBxyAkNVELZvfRaULYo29emF0VqsGb4MVWA4QkOw3AUDOIUzacWkdHSRkgdiDO3pGrWAgfU5givEhPJ14pgqYX0Jm03NO9FHN2q6S1uYe%2B8JDH%2BPcO9wOo9FFeppZVi5bVWJTV4rk5OefkoiGWbT4W4wivUk0WuTM2TLPmEomlDEE0XM0LIbMg43YLYdQbmrf0EpvNeBtQGOfp%2BR9g3pSjRvgD81kek84Y74vsLB0m6sG8TsOYccl%2BaR9vmVoxeLs3DDTh%2BzOBjqkAStFjTXNfDwKD8OV%2BvOaz%2BkUdWawX6n03qYEtS5UaPHgOCzKsq27rwaRxnKh4JlN9W0OpZtJxHA6AUN23D%2FnSI5AXHWdJaYRBikUKnOiZ524Hs%2BBRQB6em0OH%2BLfFBfOHXgNw4uCmUciX5NOcIb7Xsh0gYIDhyZ2Ls0KakE3ROgD6Ib8OykSwBQnxpCdFuPAtNAuknS7on6wrecqVNlRJjELWuB2&X-Amz-Signature=16d275372b6815828e539655015c87fe6d0c0c2c7391a0650869fcf621e9851b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
