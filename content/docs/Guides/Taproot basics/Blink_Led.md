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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX7AMJIU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEeX9RfBU0mScyGg0YFZs%2B2wWowfo0Qb8PIo5oZg%2BvAfAiEAjQuzw9WR2pscWUp2nwiS%2FYTOXuau1yLPWNpf1sHHSKEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQBIrmdYsyGu2Ye%2FCrcA6hpCYMbziA9tQbF2OEPoqqo%2FFCLiJv61mqeVdRdxffVyKQP7naP1XAbGCTzsuWTPFG93rr2KQG%2F7FjTLCbt0wmra75yVMsq5wgly8YADIBFhTjXFQZi%2FjEusdhNmdkcNo%2BA6XnAJiJXPeemnrYMZYBR92oKrZ3sd5crMYGZgArYSeTOZ4zP%2Fuv6u5%2FBkW9w8zanwLzoJmSoHRj1aL8K9%2FOA7JFE%2F8HVKMJJ58X73kBahUzFJhoF2nm6hrPu0cQqk7CkfX1yzEs9fcJ%2Ftu%2BmYh9or8NME7QlvtspNVNLmgjdrFOIF%2B9idhce0zDbJl9MlNEpG6VcaV46CdTiSi1ckkeOmIFtyDKAh1PS5RsLNeaN6vRpe4DrFjdyjt51zslfRHPAN0iY6TEuMoPq8H%2FuxARZQm5CCITzwlFkKGdY58atDjghQsu%2FXOYks4mcf8qRXw7cgD6OlrJi2RLrsMNdtNG2HJRaO2nf772L9uxMTKW%2BJm886z%2FiZM8qLwM3Ep8%2BSG%2B2FEjQ8q7zsntPH6RcYqgQkTJiNLkHF0Qtn%2BLIN%2FvOoUxlZiMXndK0vrc33oINxUkLJB6j15dTFeAprqufVoYXmnuA6mg%2BENkFDP0RlUKHNb1ejtfl0VGyQNWoMN%2BLiL4GOqUBcs8p%2FFuQZosOlOzSj6Gap7NPZ6wl9aNawZ%2FyNtV5esRuui%2FC5zIJWsUB4u3yWJQ8MvjaTLesE3TITobQBw9LOtAhegAhCjOq237RX2X5LxsvvqcI6WhByt%2Bif47bEFGMXOyQfjwVhASlykIK4zbZQs4v6GBaZg6dq8OLVfF5q4pLibZu128OerzMxMqcdmVEVzPlpOtmPQPvv8RMWD0paMEdcirB&X-Amz-Signature=d363f4a9954ed4e3185cc7c1f0fffcf917941b574b38467fb47ce566ea61cbc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6HRXLL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIA6YGj3JbJT4bBXQjsdVFY27PPyaXQM8tS2I3KtGW9QZAiA4QlUsL4baqfFheeA39T81QFZYzrXRjGjG0CCYwA0T%2FyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5mrJFNsbEq5ikAtQKtwD2mkjMmlKyq%2BMBHM7l2%2FdGoGZXcs15wQX7L8Zx6BK2gjmKr31bRWG%2FomIrchLzQhYOMGk4ZdN%2Fy%2F9EvhLoG%2BGTSF1Bq8XkuIcSkHmXLGY%2BdFz8Nr5DE6TpG0WmTPsVEPFEc%2BEDMMnGKJl5kXDpKiyN0aQsFMRdMAcWqZJUDfC339quVbKRHiIj9EFhrRtYpQjb1h0THzUpXMf7kUHLHc0VKTV5u8iw0%2B6o3lSiL1c2ySrJvpzGyu7Ud01Zm10TGxAJCalsSi8WdJlv8ENf25TACV2mGT3p3Ihq1DtRAhEDZQUEHsI9Cq14eWiTXqDsNMKnJfOdbTLu8yNn3LyfB25TqlQxROPnpOliGBAB2jeL7Gx6BNwnT%2FxfSy2ygLQwtXcuMAZOgjG%2Bsr9cc%2Ba%2Fc0bFOI962OenwF0P0snAbIRXLCNAkw0gKFvtodVjNKPIXxJHgLqRw0CXclf4CAc7n6UKu2j9SalH76v%2BE0p7T0xQkhe104pdqbUWfFKq1buVHQH7BSChsytllGpqJs0rigEV0oXflgtnWjaTeK7UDeq1dnf3JvCNN7OQDlvTu9C8Bx09kUwoDLsU07OgAA4yH3UWKDWvZvdRvG%2BryI7BtcxfQykXG%2BtznAcBpVOyDkws4uIvgY6pgF2WB8deWUAUrpTeNvgJSZQ0dY6EetOEp5QGgmNnhaoO3asCimHz2zDjCTtQ9RksuEyD9p1OnkA5RJZuJ13jQQsIZYVBndTM0ad56%2BD9FkOZN2%2BdJ4XJBjRdN44FZt9QKqUoADvkxGTG7%2FBULsK0Emm0je6iODKuz2K6VahBJjr0HvuXCvP%2F%2FcA5HAe%2BJAwZUzASI6eWP3OD44YF9UCHrXcqFhhWvBf&X-Amz-Signature=c6877f0793a99dc237f8ff76599661302f0fefcd096ac5d36154c5d86314ead1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
