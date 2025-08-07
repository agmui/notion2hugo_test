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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N3XRJ3R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCD3%2FjoUcERONpGH7psTLOENXBjnj9N2agmohFktg9rjwIgJyebp8zeKl2zhDrq0pD2JXbnf3AeOh8SaoyvlSSv%2BycqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFS%2FKt3O3%2BWf14PeircAyoJwuj%2Bi9hTXkxV7SX8JGeQg9DqfCi8dZoOO%2Fh9lx1%2F1O78oZ2wybOc75rVFrK4R5Kqep7VXIuoplciJHg2oWH4k6kUpLpTy3c%2F15rlgZpcmSBdHjOu%2Bn%2BgbUXz4dBn9aX%2BT5JriSwX5Gvp0OQSOZ0NJgqtJXwNA73DKpaM3MguBV8VJ65oyIEa3eWs25LAUi7Fi2Bmqx0EGSnwkkHDt74m4S7JQAhfR4fjgJuS%2B3bSng7BLqP%2FnkFLnTpM648YDOaNJdumsDiNELyO%2BVnJaT84msZfTh0l%2FeoYWR4A5QQoP9K3yigY%2FbeYrjX5o7WZjyLI4M5HZTCZTg%2FRJ7E%2BjDB7PpP0DV%2BzGtYpg0VszSRy0CPVUzXmTV1YMQCmvXAXYQBC3g9ZTm27DAFcIyD%2B2eJAL4jtrdEK6a344giEUJL9hwlA%2BGqW5IwNmipFM%2Fa%2FAjbz0dVhe4opSUzrn9swPhNjWv%2FFGpoiAMcfoh2Ju5%2FD6%2BzjRnD0mAMibwSCuuOJ2YmCzSumNjAPlrpZDb1SjVZAxQc51NJIgSdvoLFbZO7TY51UiUaqAv6dZc8oNyz8SfM6IBRsI6FhS0hd6Q72xqZOR5%2BiU%2FMcBbBWvUI71Akj0p2F3ovsar8qvxmXMMCi0MQGOqUBgKp3kqsNpLpZRUalQywhbwIyFQVnKM8mGWGEq8tUARuwqQ9kEvgj%2FXM2IlcE7h0dSm05AxLJ%2BOuSREtZAUhbE7XtqCNKhzb7gfRG09Ly%2F4OyA8DTnSg%2FHkM9sbNTBBvevOaOMxJG4fuQ0JQbiJVbC%2FtnZZTapC8lSrBkyn8Lsby4TFhMEeF84a8PmgQSTfLy53V1LqjL4rU41xwF04TM1Cu8L7ti&X-Amz-Signature=ab09c8bc0bc3e08864d50510730de44d53a1c3fca4acf230cacb4254ae9d32a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3C7VCOE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCjvCAfJqa08NtKC%2FiIVJOMQa9%2BwY4t6uVtD9SC4xdoxQIhAKd65%2FwCLWLrneO3QeEcM72Bbd%2Fs6c1iQm96Tby4lHa%2FKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc%2FyNWE42uVreNZVcq3AN9ubAUaxyvREjFiisW1SYvsPvpmYnVqrQSla0CbfwlfMJ1VtGLg1EMLKujGqbXUq6DwXUMP%2Bs0i2V8VKa0ABg43QfUumzlnyJU3hhcu4kA3ORroPbvsBvd5oNm2WLAlTcwoXZsXUOk1cVCej30IUtMvVceTg%2B8scBukO9pYBG6ryyCuu7sh9q3f6TU3ucMp7N%2Fjs2MTcE8LKO3D%2F1klnNr8jIbkL0erTr7lT4%2FQbpgNy30sJNV3IMlTshG03%2BdEEa4DMI2Gzgrl%2BX3O4Kp8gwZ7%2FM32EZF%2BAmGUL2ZiGSpKR2Ot255rkgjQ%2FW0NTB94r7MFXvIyzFMz4vw5Ry9dZM%2BYQSIJqhEKkkvW1eP%2FZeq6GP0dE2lm07mu3dnDxaM9RqAWw5OLggLvYhu59kRiBbLfp%2FiGighOCBgfVcQmIuOZEMYmSwSATCzeIipxw0SCrvkDK0Nh2p%2FT48wrmZ%2BUbF6NntWAJi3xvdR5y%2FZ%2BObg2RQ%2B6qNrdIyHI0ge4UpFbM08Y2PV9hnzcglUev7sf4KYjlAgJYa5HCJr74WCPayeG6J%2Bf9kc%2BXWdQpUEWIdHMa8YRFz8nTgDS6qQo%2BEcTfxL%2FqLoe3kzVZwAtALKbqqcUAhri%2B3BPaosgBnyMjDiotDEBjqkAXvIcNRtRxBkSVOcKSoF0XznD5JfaUNlfu95XZSgh6BuOhzLfMVyNL6uj2z1Er3SkBB4ON3G%2F4zskMwudSqC%2FrTT0qD89kKTDlYli7qKTBy1Qv1rocT9jXA%2FIADnTyU3s5oqUAGeo1yYZ%2BfUTXiR4FH7Tji5%2BG3fmxswhsc5lb6LmiJRug3zPLpbd1mLDqUgzaTAEmatSUvQ%2F0tWpXQoHbQk3bDM&X-Amz-Signature=2bff6c23cd1869c4444d27e248dd8f47b03a012e0b8248e33ef1e7818c770590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
