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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIA4OPA5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf5nKKZNebcLda6%2FiRalHFpaR7ntCxrVtvqUc5hzAz6AiEA6UEFVIAk0g71pHVRO0pHKp0sBZLyqyrhlkfySb%2Fa6vkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIREZXqQ0f1fAmP5%2BSrcA%2FF7IWBVCNym7EQfpEJcR54ZypFwPJhpx9hlSrCWzj1G9oemAf696%2FRJAA8BbafDwiWz7LaGnPC0WW%2Fx0HqcMtG3i22mTMi87y8J6qxmzZoXLdL0DIAU6NaGJCAfZv0yO9pS9gJ%2B9zgVeHxhcbftCLKA%2FlCjgVB3AgEkYU6uYXxLYadDA9vmgs25BjIukTH3TM5PqVpfsCUJPNEv9H6G0XTSx7Xm6MTkGZiLAJu%2FVKUiwVcgZ6HegDYBuMs6eK81DhnDZrwwrMW60jodsXsIEjoKpYW9zx1iP%2B2IJsqQfnRn944m8tmbxWOdgQzvHmxuBbB3HYOfkuSfCP59gEslcW6jEVnH2R%2BvnlkcWWTQo2Fsm2P9yG%2Bw2fC8oN1BBW4Uz6DhNV%2B9xJdozBtVmBZPwLhtgwa2fcKWuLyvlMLF3JJ6ICJMkEbHvLpDkYi9eTVF%2FdMiodEkG3dEIrzTzkZ5w%2ByRvBAdPKiUf4HIXbLVQs%2FZUL8CMgnA7JZ7oM28JdhvCo2pnnWPeAh2wygI0Qm7EvWwhxYJRe2fAIuzHqmNzfHK%2Bv5s3h3EIg4Z1oHjToTiENN8OKQjYs3YHq6B5l667MbscLU79RG%2FPUWD9WG6bs4KgD%2Bv%2F0y4FWDNehEsMLHByr4GOqUBZt8MaHeyg2nuph%2BKtfc%2FCKt9xa1G5DKpKdXqREPgKjRBC%2BfM4ZziP%2BLiQjGWjCbjo9P%2FRK%2BbXwDRDYhVpFDrFcs4u%2FzrpancYZJRDIBtwGCVQjB8HVOW8s3CXm83NOKnBV%2BuTV8bsJss32xWE56Ep8QcblZJ5kMxnUBNLBKOYihlB2Ul8vJ2Nzd99wCKcTm81ksnCZhv6ShkWmirtLx8gPg3XEqI&X-Amz-Signature=6218c1b9a7fe3adda5f49a9ac2e2f78591f73951cba3e554abdac3e91c2fb1c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WACOIY6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYmO3b6NtLfmrAmpi2qu25qZXqHcAjSg0DGQZtOT%2B%2FMAiEAivDno6MXVbkrQ7Fiy1xWWgzmHMKb0rh%2BEADIOyQpUKYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqCIrgTIDfHITOt7CrcA8t2BHB0EJXkChEb06wUjpEG2jwudF8IZaltP2FBxWWaklgcNPS7JGa%2FSGRLRKHXlWh1EWNb4EI58doqxo%2B0j9xo40UGyjvcZOEwSGzAWdgl5ixLwFmfnqIrrkuL8j77bXMW8qEvcHFz4V0uN6VXUJrayBy%2B2ifHBCSRmbeXLGXkmMRKSyq2Flko55JLySDqwed8mFlHrvlckV%2BhGOWUZ3ibfXu%2BpCld5B87pZKmsBmjmZb7k%2F6%2FeTzj2qpjip1HOYV931LUX5DF7pYgfjdfmwFiwACLkgqKBPfdUiZeu8R1kWSHhry0zg%2FtLPoIF9g%2FtPMNkdQAdxOH4Zxdxo3FIcs2iAzEmEZi%2F2TVc0DFer7QcYgMiLb3W7vMkMepptYUsjItikABrRG%2F3STP9VEisVwHeB379rNwAeTBJcXVyhKvRhTJWp%2BuDI%2Fk5P97X6y4ALVFloBC%2F9o2ySxnqJmC%2Fcz3q94fkghX0nTQO0%2FzP6IutEo9S%2BMrQNCkUU4ZoZkgzzYse3RdXHppwu1SIWup23EBGg1%2F6FxdBUcsyOKpH9gJgByx7oZs1svFRk1y%2BZrurZ9YGMDeD%2B8cGby%2Fw0LM7rRwPdApHWQuaMmjSpOZ6M%2BNUslfTMCP1BA4RUVzMJPByr4GOqUB3%2BCqwcydm4WqfONbwjk8hS%2FOvuGvrIaPqH9FW3L2P8LUbHQfseKe%2F5WYnJzPRckqbu7LS1Y8WK0W%2Fy9PI2LGlDAAtS%2BJoOtacLqgR9sSGkxx4eJBLydtJx9VDtFz39sgmld4d6SvpKynySw%2BoEadgiYqWow7cvkLp7luJgSl9ek8TUXFYEvo1H3i728s%2FYcqLWv8RwY499ApFW1hlw%2BWz2G3b8fc&X-Amz-Signature=95ab5a0dc1764ef5c1bf9296c9b8ffd7264f2b6bbe901632b2a3f9a44455a2a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
