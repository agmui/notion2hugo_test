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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWSOEXO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkGf%2FZbv33nmjJQaNoGNnV%2F12RDLFigERoplgI97fZEAiEA2hm948GxolVO%2BHl7cHlcx3F%2FCtKAi%2BMq66kMhQWkmDoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKuXgtbjPUiPYTwlHCrcA0DeqgtgfLI0Z%2FhYBXN4GPTss3Axup42lMUIzWZ2Fyw%2BAt%2Fdj%2B1UsyRaoLoM%2BJRIbnHkYKbmStoLhtjqGRbpaIIGEQU4IpkmEvnhWzMZoXlWdslRIUNnrwvMan%2Fjl9RZkp4Qh5ntP9JVjITeyjKV0ObG8ZzqBde13zzvaUqqyJdG5%2BuzacajjpWQz0Bnbx25W%2BWm%2BMLeHb3kNfiXNYXoD4LU5R78GxnuVXAGtzjBTUot0%2Fb%2BMgCo2iZVBIfHSeNRMcv67Q1QdrVGZDcnSOlyjFUyrBW0MMqchXvMQuPI%2FD6ixtevXY%2Fpi2SeijIAHq6ZB42H5ef3PKzTtlXEt95x2f%2Bz5DntExXxvXWmB08VXkQAxZnVRrA1XDQcJGrvnps%2Fyr270PlHjVz%2FH0QAH0pI%2Bzw5NPrNjkiX6%2FMAxTWthbvebDCRVcaJ0fiigTmn5SL4%2FYmN4MuU7mr%2Fn2m77XenVZkiFDF8l5EMcV5hsomn3VGUKLXJ30mLyy6Q0EaliyoM7e%2FoiflI4DD0WD0%2FUESbImgFvWvSGP%2FLsw0vLFY5rJyE1Tb5K4zKZ%2Bwcp8NV93hdHk9biupmG3kwFtVyXiXnrPSZcLxef4PmRfWgZxgGo2h%2FOP1UiQilY8oqUsFXMI%2BPh8AGOqUBwUPugiFo%2F3NXObEdW2Ag1IAiMMuyBNDVdBkCxkRoktbpyS3aZ%2BMQ13yFHTID5GBBuRMHPLs75ckF5YbOQcM%2BJaWKXNTGxAYkxEFEluI15Oc4eG0FP7pQAl6lvKtLcGlwxV8qi92%2F0PoahxqsaQPLvZ6%2F2dKJljLoQKpSO2JakDQ62hmyZARimRzDMrfOf1l7AYRtxakQZGkXy%2FOW2z0Z%2BhdocKQG&X-Amz-Signature=2d34fcd581490f286b98f5037e99b5fed6c2a672b206b4e59291a063cc02946a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEY2BAKW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKOhGiWxQl5A%2FTQ9HiGOSsx%2BHKQ59huvSJFpdX35kjxAiEAmNzxFpHXl%2BP23NKFR3qniyeRV9pareS0gdUIGm%2FVPvEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEEyAhZ6XZej7nIwuircA8XICpIfMiqPGIv3elooQlf5fLD3g1J%2Ft98tPhdOjjyQZ7UYR5ipM5zFrYE%2FBuYwKmh5SNWqc%2BaUPD6gHK7fDF0fUf%2BqGWs%2B%2FGWuWexhrbnkKKMZGtAlsOxhMpESlE%2Fx1bWJNmZqgTDU4Ayt9QkPExhqjlggjBjhKsTKjiwuoaQLygXpsW55I52Nq6%2BZVGIkoWxn5ZCsaW%2BneMN0JrNTJ1MG2MlPfwkvL9hif%2Blx1tXhLmqgAB%2BackRi%2F84B6uwtzx5w3PV%2BioVBBIBU4DVRkYcefqaBz%2F9gUGYynJMOCQt1D%2FZz%2FKwL9TJJBFua6M1cCnwBJfNBZYiVxn9KjP5q0bzCzUgrzKo7%2F9gji8vD%2B6nYQc2tTPodhx3UOaRtUkr5uWrKxgFFFEJt5p95P%2Fy7W5%2FqridECuzFqcavIRF6RW2YXzY3o6%2BqGb84MZhHPj%2FmbrpaKudACgjLZ7p4DARaggoC2viR1mE5AB6Ls8wvYBxEdFWJ6%2BsC9HW4Uxq4lTpCQN7s%2BY1zOVe24dfWjK9ApYT9nNBSIbuDERh5jOVwMcwQ0ltUezxCzLmNCy15hlIqb6q7goWS%2Bg1Hxi2cA0JizrsnrEK6YJxyBAYOse05E9XSQNwZg4XgY5t4kqq9MPmOh8AGOqUBeE58Z75IwWfVq7tp33vq8W88OpMNCqB%2Bz6nD7mMzbEL20WQS%2Bs96ipcAKATXs%2FzEHhtjyG9SdX91MfjOJxOdG%2FRlkH%2B8%2B72E0Ly5ycX%2Bg6Z7XkDO8RcWxu1G4XTLHYPnfBz2OHkGWh90KAF7oEKtIRIYym%2FiA7POBcgdRW6aAezqxNLV7EGhD1KlamYN%2F%2FILSro7BMha0Y384s%2FHWiOQmuFgb%2FT1&X-Amz-Signature=9725858a78f389b2607d307cbcbbf1d0a4d5f0d41f081c979188cf3479f93029&X-Amz-SignedHeaders=host&x-id=GetObject)

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
