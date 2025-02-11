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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKMHUI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZEwg1JeFCpeF4S6tQkHTOsRdHR92%2B0v8LijHJK4JkQIgVZBkzp5lKWaC8xjvPMsttKTDjtykMp97scjg3%2BgtXi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEd%2FypIDGTJPSUPSrcAz9SYfx4YUCExIN3d641cG22zhF61hIoia%2FSvt4pYRBnyDTnVd0dVr%2F6pqVOByJ3iCih9sD823I4vlwmGVOCs9eapsvgdvz7YMFWixjEfBwJURw3vWyghKdPIQOKYVJfmjp%2BoZoQ2d2D5aA1wkRzTnBBF%2F%2FaSnto2gge39xg%2FAtZzO6oPOWN8ycWlN3sZ%2FWKh0n0Q%2FhCzZ%2B2vag9c9ojDtRl8T6Fe6XVhl1bEQrUbwsS9gm2Kx6S%2Buz7SX4yFf8F6NDr4p5iw70WT0Hn7DAPq17SuvrPnToJVOz3lABioEhvMw%2FjfK8q%2FVlYELFkcZJo0jcTHOa38zLklhKggq9rUJgxBNueksm7%2FFwinTPnSNcHLeeMuFTbK8G2vvPmMQ4uWmqEm3bzbC7pJNXgzS08cfwS0KW60I%2BC%2FvIGkFx%2FnvaisLuqp0mWuHkNy8mmV9IPdDODHiXeiigg6jIFr86vCKIhgMMLseB6VIQ8QSx5HljAolOF8nqor0hGqPXNTX6whgLlXmLIcc10vXcSuMVf5qEtkYUGrFOBWboRiGG5JgLaq54tpwl4Odi0BKnklg1u3PV1Ar%2B3TlM4dt34Mn0oPxqZu3m2AnE6CHhRt5Fu8TNW1kR%2FCNUm1wTDCU9AMOy3rL0GOqUBelhhAKqcWSUOxQtFY2xq7dkeyjXrPaaOlOGqwkfVdrexTzL6kgSWxGuJIqs1tgH%2BjcLXblQ88acLPHcSJ2C4qeBHCs0KynwYI3Br7ZOKg98VDP3WsmCivwaXYTCCQ8bWBBxkGAz%2BHkqK%2Fts1958f2jM8GIlsSN3SuSgEBLrhFqLBeWJFFziuYrJEM1iullWm48kj9B4dvHL6Z1riOpAiH4bnh90E&X-Amz-Signature=71b57eb645b2dbed841817bf4d92dc2bafe32e2e84d0a5ab6dc6893d376cfa7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JOWJ7GR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBX4BF2ZSXTZIjWFtva%2FoGiLXdxcI4m3H2Xx2mG9%2BhuAiEA0pJCGRWgpcvNc4lCIxpSKwqgF3SjwIBIWSPx4HtveQ0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5vaANKLNPwXR4mzyrcA1lzrZLeLf%2BwoZPy%2BaCseuNawkL8K0PyhLum2kpS5UEe%2BnrVkRbjX5uHOPYj%2B49DX5a2Wmnml0TgafQhSANsGWDGW37Sh%2BQIoDUuUDZBNtDQ2KRIFjZ7DqV0rFgP4HA7LLAeWLcJLzkkEoLIkz1Uc5DmDfQMunpZxZ9ZVohN0sBdbVDlMkYgceA5B8V9zesdm2VPn25IYNaLLCmy0X5H%2BP7GtSyx9WKqdCgV7atPJEz08NQkCHA%2FPBMlgupED8Ik%2FUJsXyXYKv5Hem7rsYs60F4L7EG6aCdLzYZTRG%2FGDcvPC9q1qElp5yQ2ohs7QUeuX%2BFvHMby4T3wf52VIe%2Fd1cN6VlpxEqZkgZsAezT37Za5ZR0qCUWgtyALqiF%2B21iMyRN4YlkZ%2Br3micmLgo8lVJwBFjHNgn5ymmSNsOi0fkCCMgVxtkoPIyhLGOyK7nng51PPQPGDXmXsLvfBBiPLMy6gjzdp56q0tOtkQsgqH1dEroZFdMXJMLDfRZpS5IximBhwLOxGJkL53UpwfKIa2%2FcTW4pP02V2J8dxmyHnRN8O8UuLHKPiWdC9Er1G%2FkQrFw9L4e3Ra4c6ItHjBYE1JEjTJm3TGtw8stSPu5%2FkR7OhQYqKMkqrllwBK8LTMNC4rL0GOqUBhlsG%2BnYs%2F%2FGoxPvsieCYBJACMg7HJEhwWq4n5572EnS3paem1M0XxgF4CD7F7NfnelP1V1mJ%2FYb7rhKHT9m7WbgUYuNmzdldxqeOayxeiRB7uXr9Ztat99CaatrYFdk2VmE7n3g7K8fMvr5MlIgPpHUOigxbXhM8CNzPEdSPfAQz1homzTPMWkCaH4UXJ3mF9kx4iE%2FT0ibqhy4oucqrMFX8zfkK&X-Amz-Signature=a4ae3be131e0b383863508811c09d96ac8f3cb0259d7f61ba652b53b7af93a01&X-Amz-SignedHeaders=host&x-id=GetObject)

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
