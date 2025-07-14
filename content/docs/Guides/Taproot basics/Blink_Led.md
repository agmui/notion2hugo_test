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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQMGNY5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEoOV2bFqDAPsQKe3crpcdyGKYBIJ%2BafNeHPuLP0kYseAiEAkVb8ulvbZgqDdYioMOrvK9t%2Bk1Y%2FHxjEJtnPldloYI4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPk5UvJumywwKBkiMCrcA20wc5JxLxyheTjW2FCM%2F%2F3TgPW3CKCblqDMR%2BTjx8t0eOZHTb%2F5gkurKm0NNnfMyKmMt6yn9LYWKLD1jEczyYrDAa5vzFsAT5fSuTVNR9kEcHAhpgwB9xyqz%2BtkQr2Sy5nynNH5D9iRcYXVoBhHUvF3bRYfzsndVCEEXrkXDxny4Q6Sibp9jGwCfKARkkgRiaX6BqTWxhsxrccUiKBTKpIw7fL4n3fTyyAEPcnK231V1E99mq5sM6F3070H3byylKqZRVXadXYjnukntDUrUa62Qt6PkIX9W5uY6kdEwQ%2F1x1XWt9UmVwheajjPkmrZJRewwj8tdesEtPSMQdwjexi%2BAFF0qRazR6W9qssRzYQ6hc%2B66oa39mM0VcNM9j%2F1bNiJExuxwJ8F8wbpd4agecR9zOfDM9iUl2KvqycV7%2BXB4U%2Bwji5%2FPnvvi%2FN2R8tR0wPn8tJXRxLXK0y3xht3D2%2F8O0263y28C8PX9VvDO9%2BklXqYiY7CSN53sx0xWkSIxuciYKfQolg6UZ36lc7oBQoytrTRTtevi4YFKTjrb%2FNjI9wxePHhDULBfXnhKRtfUdlfp%2B6fGjeTz26rkebDhne6G6bWbN5zElWZvAM%2BKQCXO9MRHndgzb8ll35yMPH31cMGOqUBnqPRSVbTvPBai8%2BMgfIK%2FFi6S5n2ZALV%2F20HDlLni%2Fc7taspCMOQNQfxz2C7%2BLPuYpHqPDIEZmKnucEz8D2yIAcYu9Dckjgf7fe32%2FmYnbYAZhi0aX6z9D5YWCz3m%2Bpzt%2FJofvKKGtlTHTxIm7KP5cr5vc2sYaZ7MtVby6wL%2FAV%2FFNcLTM%2BLma9%2FJ69y945yHVtJR6GK7ZQHUlm%2FSGZPczmzSZdy&X-Amz-Signature=66e26f363bfb3ebbc766bb78fef655b3dad98de9ed344b48775a3fc4ca57ee6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKO5BHA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBcIj42jYeIeJGH1ExllDxfgzaJ%2Bph2m5QgKotpPwMUgAiEA7JG9H0D5Dew3KLEknFNCrIVZrcka8w5C8N%2F6UPDi4EIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEJ4cXlIkAmCNeKmZyrcA%2BIdIGLUHDV0EMj5%2B4Y%2FVrR%2BqhH3y42P15DB%2FON9uDUvoLOUGeFnzjghluch1yuCKtjLfgDVNhRYBCZ079qWzzY6B6GOaPC83%2BSCLxA5f0G1YZPnQy6IscjEB%2Bc2uPEjvHGGzM1EvX%2BvLxQpw9XJ38j8j5SXo4gCZgFESc56CUDTYtH9N1OLFJ3IibeVT1UPhwLMm1J3PWT1mlo4f%2FjV7bYyNDpK2CUXt2OipD8de1cYOpj9dfGtFOS7VkICWcEltFz885T4SVZq5x3UT%2BXozJ2JbgTvxuVwSIEkMnKw0Ar%2B1tmElG1aDK%2B1%2BSK%2Bg9qoLfOi9zsJyYCcnSjYFYGo7ykVFYHJ5BJ5KTCyqfLn%2BGFDtgxor6BqwqoLtKpnC%2FCmm8VkkcJv72qnjB4ZCvLNUtt8t%2By6W%2BOhghxEuGMiCsupLR1hCV8gx%2Fr%2BUyQWRQaHg%2FqkD5hIZ7xH%2BF5dROzMDXwah%2FsEj0XejB1q3bqhbW2uRnBpzvxElOUZ%2FgjX6moq%2BTYR%2FEoNBLb2uUjnBxpWF4TVRXbDQwCX4asaP5bXSvvc2d1vT%2Bd2zMpbjkqAGGIOzjOfwUEf7h02n6lv13zS%2BIjSc4efF7%2BVLk6LSaQHmDYuKrK4L21uyMsrXIZFMI741cMGOqUB0YdCAwITIghqQmSZ8hxu1%2FyyadYnqdLltpQEhJSOcWA0bkBpoqTOGVnbQ3JOPI54y0kgXnXLVLHzD348ozY00NxTxzPy%2FmBD2iKzp5jVW0ueGuCVo0f645JzYM4Imy1IPKcB0GyhzQG2jveJ62Wu5vd7I%2FjDgt9sG%2Fo6xq%2Fvp7G%2B9q6SFjIrlu5L7V0m4Lz%2F%2F5eBwDmmRmHn0Eyuz4J8YJmdLN2Q&X-Amz-Signature=da08ea7915bb4ada52e4bad3aaab66baf7f4c4bf69417e3df0b2f1419a84a795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
