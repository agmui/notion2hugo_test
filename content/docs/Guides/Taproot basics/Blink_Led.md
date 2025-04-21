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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUJJ377%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCYlf6bx1%2F8HOvG6wY7P3lV5y86tbBK5vnLzT%2Bi6UjiMQIgJL%2Bz9ZWcd%2FrpW3m72CjSv%2FGkZ%2B4GwWOU1t%2Bje4JD%2FSkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL3YIb0ySt8iKG7gircA%2F77efhIpflt1i%2F2%2Fn66vM%2F%2BljWsYmrfBZTDauflEQecy0Pp6%2FBoaue6bd%2FW9ecqZvgRQNUnC9M8y%2FAOsxnhbda5bFaJMh%2BGgR6wcxbwh%2BCEjatuFhM13lpUEyyQQNSeRPPeJU%2BFuXSdIX9LkJVIdRgGXxWTC7FxyiHyA3%2Bl77t5TOt9pURquAUAku9EEafcH0yd88OA5lkNWmK0%2BpSnUdPdF5Lwx5mUVyBLZaKnsET5oPfDjyUIQmBmJD3YFcvzVEyKOgGqBwuHrDjhC9FcSlK8l1fAMOaIHs4tBBOZNW8MsNDdwBt%2BuuvlHAFr0yfNfNig13XPnJbsJP4lJZWJIRowjQW%2FxUaIDHhiVpA85b0vseGadic%2B2IjmoZj1Gh%2FFRv5C2D8jthP80wRulMIKmMmI2H7YgrQR5OEwlZ7FJZwlag9K5Y41njwL2m6ymgXYJtFziOqhyTQcGJlRjPOxotiphBBC%2B4r5394g9Fa%2F4%2BMBK%2BCWrHQ9F%2BgJ6DYAEK5Z2zcimA39tozYtYr60BC%2BBtO8gGTovfLGqIdPsw45DHLsMahzIccyyeVR5suNQhoAAbOewSbbDj6l9MFk7QGKSFdJRwJQzBFN%2B1xC5XreicpVPp2pJWGEwgzzB2v2MOn6lsAGOqUBGvoEIeyWirB37FWyIA1kmiLcGUrP85eEMynDuO9pDNSNOItnhGLX0mLKM3yKp3PCdQRPffb01bsa4aU%2BDf6AEPr8t1awkPZQGAuKP2LitQglWr0mnYiQYYK4WksW6khoUzDLQBAelJYH1ItC%2BodqLUV5b3gNyWY3C0EkjAmCC4roPn3Xz8CsK4prc%2BzHrPT9%2B3AkyRrgNYppDElG48%2F2nn%2FA4QLq&X-Amz-Signature=cd8353b65b3aae8e9cfa6e4a8eb90ca3d785d9f87ba47ba6bebfd1cccec8a97e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJENYJ4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDwbIbCDtLM%2BYI5HYwakc7KRvD0teu6RmwiPmi1BpwvvQIhAMgadxaqWNgbytRc4%2BHJN%2BuKvOWiCe03Y21%2Fze0kZo0iKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynzQ1UmrtgLOxwvsEq3AO%2Fi8nan9qczqktZrd39SfTgsMp1TEvnE4ICSENedq%2FdD1TiQQU00WqfPcPC9PeH4b1xpg1aQ%2FBn5OBDamK1TZX6GwSBV6N8dd9L76vHA25gJjK29Oi30qSDLb2F0mcUf07bFoFcLogwsKszzijqiSMMzKEEQ%2BCfI7NcDEPfSzZ7VkreSnXjKrMdFeVmVZi96vjUQDVIMm0D2vqUPcbBfzWo%2BE7sqhBb1fxvaT1q2hsV9UG0ui3xTETDFpwuhecEEp5t%2BDH03F%2F0CL7hIaqdtJhheHxdwbvkze2HMQUQv0jSfHn6cLh3fyQOZMyYdDJRUlho09TkXHqw9optp8YqJXRGlthNs7Nonul1cC71Dt1UZ0amW2T7UD%2BW7KbHdmUCk%2FRVTGbTlbHA8f3hUqB530URqwd2sVJOmUMjVsj5mg%2F6ZFc3lKJpZBXtY%2FmvTwqgnn1qZro0za2JvBBGuutam2tn1BXDYPa8zN1ZMKxlkzyLrLluj8lAmYanw0ZCcxZt6lERrRQlDtKO6NkjV9eGopLD5dAdDXKQbs4dlvrOVWthhilVz5iJKy%2B06epnASazo7WZnDCWSsz2CcDmjrxEi6y%2BSeceStGrd2mt2lvvqlwWYrr8gv%2BkhBfqNw0%2BjDp%2BJbABjqkAWmcP7WI3Q1iV7X%2BFYiwzwhxWJk7vEfdF0qVPJRJ8C%2FkrtcC5TVLHVuAOcXrW%2FVf%2BTRF2usjFU83B6MYOhtkqcdCtqSs2x9EH9i0FPu%2FMI5dnfDCAVcKOyJhWu1jpdgG61JREZtDBOHx6Bx1LuQYX5Fun0XPK1vI4L%2BnwpI8qNaZ2geuLhIXF6mudGPdyYBP6jcPTDDEjwawdRhX3LNeXnYGdgoI&X-Amz-Signature=bef80ef72a1f32e3f25a26d4654b22c61e488ec237f199ce6768a32d43e6c997&X-Amz-SignedHeaders=host&x-id=GetObject)

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
