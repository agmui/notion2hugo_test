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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KH6VTX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3tGqJlnVP%2BxrDJmmflgtnMW7Vcdl4hT08fqvYQqD%2BFAiEA1ee21I%2FbQ2QsfrKqvWze1kGPYSxm%2FSQyIR8qE3Zbu%2FAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJQADSoHlOV2NtfDircAyBF%2BC9yD1BCg0GQjOUro4ug7DhXoivXPXhS0z82BrwgXvZjtLLwda6UGAlnlqTfUrInWSomskXU1N9%2BJJCj9hHTe3C92oG2FaxOLIpLmhta3Z9f3pT5aVjAASW%2Fq%2B0b2xalXjJW2iwoaaBduvm%2BeBWNWKh0J0fLLqB6bsdYJxm8C6ftk0Fd3E9UWy3tQSSMtEF9zRx7Mg9yCdVsIVk5oXcN9T7K9ZACYHg4sO1mxX7IK8WxIOZmi5gxngWuG5s08iRzvXv4EwpxtYy3CjSvaRvkwz%2B9CffqqJghGqnwm4BoWVvn9E8eJWX01KX7JIcfIhAmY42VI2E8Y4tkatbRkAVjrgiE6LasVravnF9U8uRj%2B6gUX6L6SpSUbMjOzUAtlTVhXj%2BcW4HuOBtBbU0ALA6BoYEJ34lyJjZv5jx2J3H12BIAkhVXmebFRjquDj%2BfMp7Zk96Ea1nwBC81oLIJMJbYXKvA3%2Be4BD67XD1giM5PzWzA0falzsd7nnicS4mkqOqP1Nng7n2V%2BW7PMYQbtcf8eNrrVHpOmxGXOMPrrt5O7ZImpk2dKh3MzQLenexV6FF9x%2FUN%2Fw1vzGRVsgPVkiXu625Y9F0f6SCedOYECOtdSI8BhQXup1XlEhDcMILkq70GOqUBJ8VLZOiS88ACpodKcP7CjNpEa5hvwHx13FCn30do2nMLqg%2B6eRzVdR9CwP4F7vUw1bgduS0MX0incEy547pPYZokivSzm%2B2dJNzSNwQ3PKCkOrwrfj7%2FcwAPUUdJC0%2FODQk6Rel3hyqv5WpYX68CvOj4LWny2Td9ZKg%2BCClUhVhg2RQ4l12TFy9dk7tjmlfyVN8EEI86dZOpcpOwT6TU6%2B57Afu3&X-Amz-Signature=94218182592d994a2850c54d9163c8f6a007e5fe62f00c44779143176391c52f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKHHDRBZ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9T1f41CyzqoHNEkN3dXcmNTGcRBWIFjf1LmionbFJEwIhAIHHyTO0hMrRpBWXZyjKa6bMbO76dbS8UVMGAAKj9cDPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYDrP0TacJCEGai14q3ANy6yD1lwkvBipnHMl3%2BS3POb0Jl1YDudeiaI4RAkCSp6Ty2B31hG8PjgaWbNjq7UOZ6pxlnuZ%2FpnCir0kPrU1YT%2FCAK2c07YU9c7JbsO3bol2uHhPIxljPZg0AiO4z95XxB8dzxDwdwWC5DF9twOdEX%2BMiyJD%2F6wM8bABfx0mbaYpuOuLyhBzBSydi%2BOwRj%2FyafFaXJfOTr9UlsejieMe9F6cqSFnaPt8BvtHuRwnXyFkx8np%2FA%2F9S7pYe0BOLXExMY9HIqrUVzPluAX8ra%2BG0DPL86tNpuMyasGh9TF6ZRWyAoi%2FVK9xCSrNK7AIykHIXe9yNb4e0OIFR6UOJAO37fVZ3Kdiz4lHS%2FU%2BTPq8YjIl9%2BypUvzea2W0glp%2F9fduFVIKc%2F3HxdwtFMPGHxeYrQ7G2Why574A%2FSo8C7D4UuhCKdFA6Vsf8W%2By%2Bm4R6mY%2FAgzxKSnRzn0D5mc%2Fxs8j4fM4ULXFv2WAGA2YqEXOQDfO9bNyo%2BiGFi2aHv6WFQur3hqPecVTv74nkzHsxzSCjmu6xAkf1udHlDXK2pHxhlB6Mt5XlKzwaqs8RCF3iKSSz6Gd0lnAAvi5MtVCIHEuVFBXqYdhVpYaswLn5MbNg6h6ltam8SMOn2IG%2FtDCD5Ku9BjqkAZdaOZ9fqN0hO4fBSWiu3zTg%2BqGT61JC31WK%2B0ZwbBqLfG2h2Q9FiBShkH6gr9fX9fsCLND4q3CPuXpomCevuw2eoReLZ07P9xupFTvw90CeDYxFPC0uJlCntqomXdAdebr2OvrrfkHWGVoOx5meyvqd6LPc2JIQ6k%2FJFi0WQMZdlmPx%2F0Ywy1EyqZc%2B42706mi39PBozpTSvEQP%2FDyplKwWE0L%2F&X-Amz-Signature=b881ae3343d57d0efe9aa4a6d0fa1b5eaf0d8ff5f5bb328c411d50d68aeab916&X-Amz-SignedHeaders=host&x-id=GetObject)

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
