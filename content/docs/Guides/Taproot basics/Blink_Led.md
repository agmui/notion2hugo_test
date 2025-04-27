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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJDQYKQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3I8st8BYVucPsjFtjM3RS6wlgiwsjLcITpMGU3aUrygIhAJyjGBJRNs2D18%2FE79YDeDknn3tX9Q%2FsIYulb0yJIGi1Kv8DCFcQABoMNjM3NDIzMTgzODA1IgzRHIxw76ycWocjqf8q3AOqtlqLYXe0vjlvuiS6NyE0ckNy5Kn0P72eJwMl9jvC7xaNOBy7cAQBQ%2BeQcap%2FhYeQKo%2BNBL7z5hBVQp6n%2BuMZ1Xhu5tOliFzAOVs5FkkSpMMSS0HgM%2FpGPMt96zJ6MZ%2F5F5fFccSkSZeOVmSfKFX%2BB1dk5%2BVllaxmwd4C%2B8n9%2FeASTHbRTfzk3lmnkX9QDtcmRygESJqJWO%2B7u6%2BFQc5n%2Bcz3dXPcEVONoMQn65FzvL5rt2HjJZ1n1TMyva16GJxDtHApPS%2FpEmmrgAzF2zNNswtd0Hrnz%2FyZ7hbFEF%2FKp1z0BDLb7Oa2tspoH628783CzEmxfQhKLTG%2BufaRcDoVY9gKKWdDGdExTA3wAp93sEs7lWkIk83n3t3od5%2FOzzEkx7R849SR%2FhoY9xMNXpcBpM5MD7Mp%2B2CUBAZiNQmoRqzJZ7b%2BopfQMggM0TEgT6G0vFUZ5MhwfOwFkZbu06Dh9TbO4A8E25uh0HVrUfg7a0fQDJEBViBrjnNfsXafOJ%2BKvYBvVwu9EQPxic07Kp2CMGlHnM3NHN510HBrzhA7PbTwOAc3EtEq2oTr9DPRVJJVm4SAazw29Xx00d4i1nfeZFTtdaDzmzRK2ok32VD7qVdvc9NB9jPBzJV1XTChhrfABjqkAX1kzQxgsxkxu6M6LkX6CWo62MNO0JHMFlaiobMP5MnjVVg6O0uc%2BD9volIY8fr%2ByQf3Zx5aXRoddGuCxbot1eyng2IYtmziufwuIj7cmtEE9etQ5Mq2xXEv%2BIVzI4ZAk7dO%2F5VCgL1wgUFiurMFsovSuxHwJ0SZxk9d65EkejX8V1EiQQwFo3ZL2cBcFrZCcGGls7%2BH7fir1ZVLQi9DABHluZlj&X-Amz-Signature=971d45832218ebc23410dea0af88c15bce23187f23ed390d37437f080ad2acc9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS2XO7B%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChsqyt5p5ARbBxKUJL83U%2FwUitKtYfqXqCcbpnucdfNQIgSBcA9KA6DnKeDecu5lFBQK5vhmwuxvrTdkUQtjvtIukq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDPvYcPtHzyFEX%2FyxBircA5o9m8ZGGoI6fHMCcROFwlAwQH1ITfPnbrIDqKMujQ1lZpeBjRfE3Z0M%2BRRFEnRwKGJS%2F%2F8cnl3lhuj0NRmLXq7Da2iRXr5MKILB89W%2B4wHKNSNoheV14C9UxBSVil%2BKBYcWCcHkBXyzlrgXXoW6qzULlchE9LrzvQYVWqi4nPsUBXImouq80I48IjJEeN5GNdaLvhPPu5kvT3QXwat%2BOyEOFQeZKLkdDLNHHUz1H5FXG%2F%2B4lnNU%2BHNXIxy1n0yARVy8mCAZQVNbLjjOXVuKplLb5R7steQfOLWWecBgOq0%2Bmc0JuMj4sxdUvuq5Jw8MTSzp4X97VyOWrDHFvm7Z%2B1ME%2BliWzk5xJxL6IaDvsjaOyyIf50N2qVQYEkeFq8EIRhGd8l%2BrWO%2F37ApiWiVge2pXlELRoexHhgeAxf74iaRwo9p1i4p0oaqxWhaeEIAR5Km600j2Opa0TLzm06gXHG4fIMRH3DNgHM8OyMlY6t8eI%2BRmeWKn86VeaWHkFBRi%2BtzJyZevijY4EemJcR4l26YXArQUJ0zo159n1YFYbIMucUgCzsXeIhEp4ztTRt6ZViWWeYGG6RA1n186XPQlitt7QwT%2BipdYOjWgmPUhnLZzmRNvdpeVYsGcmS3cMMXttsAGOqUBHVSmipwGQLuElPFYVWSpErvDw855NloPC58v1DsBE41kVvL2RyBJc6FmK%2FqjXaqodzCdf7C24VC8rGRzcGbqO16%2BOVByRTweH4g1RZpe0syaao7AfD6OuMLeE9TstCJZxzyoBhkTVvaCQX7tgShC%2BwVaMnxJBj4aP2fqhxiZEhurW7Q2XSS%2Bzo1pDi0OlwgGiIMcf6o7Rr2%2BjeWuTOqF737hNfKU&X-Amz-Signature=3e7906daee76824eab6e908f92964a36bf777e6b7d907e13aa6e0e9fb174cee4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
