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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4MVV4HW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICjs5hoFaGKizSvz1eZlGSTd8IUx5zuAvpNDi%2BjxUpr0AiEAh2f0cL1ExQoH3qqjjaSjEQYSUvbdYJsTIep8SwVRiG8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7ye9Q0fcu7%2Bt7XpyrcA3IqSfoGj3kTLi8AhwQ9Fe3iAw6ZUzSxksBjD5XAByBWLuhSNehe4F8d3%2Fj7N14Itd%2FDiTK%2BL5hONi48v%2BnTZtCrHg7%2BZb89XycRO71letZMa7ocgefmDIrEIV%2FEBx6VuY8CMeGVBvbG9gkUbu3outhGQcb2A39Cby3UC%2FhM80hR5wmM%2BLlui%2FK90tNhZQzQWk9VeAUxqEpjPF0PMUZkyNvMsExvZMRrCR5IRFoxcM%2FgeO%2Fa%2BcwE4CGEzi3DN7gvxtTUwGwDOrIdakRzwx4ne9tl5pQDAoYUatWkzlspZO656Nf9ocya%2Fy1HAozxGFWjvnsGpmjmQg2L1xN8w05Xn%2BGOM5lnE26zQoDWgz6Z%2BpAj1Y7QDQyQGowZI04DAwpKb%2FgKkw01cr8ZwqoD4jvtKCUa2oDM3LgbDUvmbeGTZszrymrijdoJV1RJO0kHtqI5qT3DiT5rzbgaEiOvQpI%2BG0Gkn1ZICG6r%2BvW30%2Fd%2BzPI4gy6vDlVEQjc441mbL3qxPVDRFOFss2f6NfSWndWyj%2FyvxMoHmtNjnzsayk8mNgny82fsdZQ9p4bgRJMcmYP8uAYxS51xTz7cMdjYdY2L2z98e%2FsQ61oygmQVRFVsq2NW%2FmDvUTO2ZtAPMbNeMPG518AGOqUBpSvOjDgEQRawfxvhxkbO%2FGe2nIsxFdVyUpT8%2BOZzzRkfJnVeFqh1W1Y5vTHz%2B%2BfyrZH9Sl0B84%2BJq%2F86jsFQmixSgJvlf8BHnBkeaXgRkZk%2Fp%2FoXogSEUNIyHuVHe3GwW1s6SetlVDAAIAhMqQbIuvEILVSgVegpSppIg9BcJbse%2Fhb1xrMFLA4mUTQ5xBDH%2FTC%2FoH0VltNlTJ%2BBNE3AbeUpbHWz&X-Amz-Signature=66b00a39edc403d9d6e05c2e6ac4cbf71bf54c21640602fb2043ca21b30cec66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TUTEHN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQD%2FYpAOuzLxZT5oyV6S5N%2BkaXA%2BMTubqI1Ugfj6MpdF8wIhAPpePPGW8bgMsRRNpw%2FIv7c8Ta%2Fw7h56NKmg2CXcaHuOKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy17xvCtpPMY83e544q3AOYy2PQCNUMyTgT2A9QFEx8aCKeL0XaW2ZkBQzlWTmovAKY%2B%2B8Cc8OnqAL0Rukc%2Bis8uFlAVEmvQWzDhf77dyN%2B005JgiGf%2FP6d2kJk4YFD5xeCZ6u3ZQ4fWlWvzIYCCuIyb7VWIJ7kkJ1kaWCI9I3a4Wx5hP2WouHIpcm9OKyJ3ZrksZsJDt%2FpxB4w31mDujEM%2FSF3jSz1RPbkpKx87S3zY9Zs9Sv52ZRY6ON8o1L7%2Bc%2BA5SegbTUKDzrXfjrx7EmQSwe97neAQXwKrulSsT5Y73lwukU%2BAWI5tDX9YjWQsm0TPRwSXvtBzhxQmnDsNPghPN1dWx76KR9EKKPUFdAQTK6BZ7oNa38irQ8C9GLPNx1ygrg5ljgWx2Hs9KDaa6yYgYYEEOg165m1p5fTtpUa3FCocGZEy0aOl1Rs%2Bjq9pgWCFwct3rgWhSUN597mO3Kfwi1iPS6mgTZ7JcRMSqRFKaqtwzJxeIKlD06lAOzfAfcDAFJAqOWdlQgf7gqhG04cUmMlDfU4PIYnqhDELlczAMjJZsZZSHAx6QZMTmORGjsPid09tgHwGZbWbpoZI1mHfoXFa2EZYCty3WAuPvXApnW4SlQtuAwsvL91Q39fpv90L6xgt86G63IdKjCfutfABjqkAV0Bnh9ywvNt7ELRyNG85ZnYf19z0tZlHVGdScYYqIMRAXbol8rs4wrRCixnXKpkhMJ13IS92uOnOIK2QzVSyg0eJ8PbOaSQWAiVtl1qQ0Wxe7hLVcNEUBfyIlmYPPBrHyVaIqkhuvHpqCK%2BSZofwBXpFANTYCFU%2BgF8E6MzGHOxNX7t0g88Mej7A6teDO60fNjjR2qqUXDEVOQq9z1TaaSX63sY&X-Amz-Signature=e288fa32fb8a79aed94c9cd6123b645566e579ee8545d7af67369300e4b9abfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
