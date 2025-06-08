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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZ7LKTB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuTaHmtyqmG1EiXiHbBGdWZ29fA0yrmwyLYJJd6XHr%2FgIhAMqxzDCEia%2BfRVXLMc8tX1xvh5oG1EO43bpRV48tXO1MKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZRtGxmqneK6jtw6kq3ANurWZ1ysOBQ3BJ%2FcIRq6FwYESylCmFG7JFe3bI0c8CPNq8mLiTpCse58lf7L4tU6lWITsXa4H6DoT2zYUaSqnPX8GdEG%2Befn7D9Hf9vnAfEPX%2FTiynalFnT2Yrx3u7uK5xrs7ITQafe4uXZ1glBdtjgb5R7Pos3SmU62EwbtQ%2FrhtiHMom4MHwK1Rg%2Bv1Yr9zyVmqiI7NIjgKX3a%2B2Dz5EEj1cjVTgSjHKSuEc%2FNdwd8WIVB%2FlhaNqjyTLpSJR8mveNJqq3rASSHTSUVym5IN%2FR4FuGoQtxGBWWcu749OP0Du15hRVpIud6fqlvb%2BMMsmkuzyQ%2BQWkSVBuOjhEXvhzfDO0mQ4IOZwFqRUP2ftI87d6fltMxXWjWH3fVz9QFV6ctPNR19IgY17mxwzVj7FUEv2n5McJMealNVAyNkryjN43grzGC6Df8gpQIs9R47GRvEvEs2zH7EqIOivL1H8yGuHWBw34%2F3feXRY5nuI0ae1tXnPMA6jNxuqNI8JhI67FGHf1rPOolffYhwiw31i%2BljGOjhdNOJaKrwZuo%2F9NwJ6lq2FuDycgest4EArDKkTf6WVzPgb%2FMxgmI0%2F11jRLV2L2zCKjPclW4217ZR8VT1ecvYLFa4qejkiFJjD%2B8pTCBjqkASfCEJF%2B%2FDHji4yaaWJhWUpU3hkFa4As2T1t6fgJohWfb6sjN3TEr1vydwZFG6AWX%2F4%2FXnPv%2B8%2Fpan8J00mlxuzcKIJUUiR%2BWbhJDlEQI8YpFyJi0Hcn4xcO3s8tqNemeCck7rabIqhyYjE6YwBPhONsnqaijRLHMm13Qf64inzJMWLYZF3zIZ%2Bm5bRajjw%2FCAHvLFUd8YfTJp0gLtnrohMK9rVB&X-Amz-Signature=459d530fdeeb298f11c4dca676599d7c81db7a0ecbfcc9b7d314796666779b78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LXSLOJW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5UcJXquEnhI8VAhR6%2FbZ6nFw7EClrlbYqAQ%2FY3xH7%2FAiAaggD0NbxXsA%2BwYxEkE79ieBwS3Aez%2FEuijAImayjf2iqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1EnG2viM70zGXCoKtwDPozLPjN%2FroTMHpAAGAkR4p%2F3NI33sUwuwKCNREhSDV1Y1zgiyTf1zy8tCvwl9mNwYmyk31gKJYf7GsZokmHCbLqFVn1sA71BtL4M92x5OZxofyTf6QVcmF1CR9tsiYXC1VJEXnZCmN9Xc52awNpMNgbrShA5AaDwo4Yr1jtpyEJPyDn4nDwLzSXbJpWWPHY4bkltJ7Tv5E0rNRCGz8n1dSvkQk7A5QIGvfNpOCZSpxc8ci7IKshxoK05yT69ZQzoXcDtmIIFzuzpYPyxtyAzTdWGBEx9fL9haBjIxIM8uUdHPjoGcJYGLia%2FGynDnb4lVZqHNnp%2FwAUkWT%2FFU7B0vdO3ngUh38RtSIwDJ%2FDO%2Bzhd8IMlXqOZoisU4W%2B%2Bjr%2BacxYWB2U2B%2BuYk7bH3E39OL2gFhaILLUQGmPEE9do4bDypJ6IumelRAgemE%2FTuyLBz6%2FtUGuSobAT4C29DeaaSIcQFljP7t9qW9Rfrx10LDjjr6M9DjumS%2Bu9RkpR7guekHlSXNgaZZSUoPIaf0DIK7UcFacp1VLQUt5pgL1L0EHJUIu0jMPTopTTBUnRmCTFCKUmU45yhm5jXAGkVZiJdeIaJ1mL4TQUIPxIvkMSYYiaH3LKuo6X1MaDH9YwvPKUwgY6pgFd2rIGxpCLgNiL6CaHEl0Wn33DmaaN%2FonGHF01o8JyuF7wsis2oPU9PY98FYc%2B3VO2y%2BA%2FAj4tODxJnQYt2uUrCTwRtq2DH9XiMsQTPP1InZPtDNq84Up7k5Xxc3K3n57ppjQL3HCJemswUOIAcWzlAJC3eI8Evnv%2BmGIA5nmsrm6xulk9FnVMSWK0uoH3aV8Bhw8A8NG%2FFDnPgugPHinhCIZQTQ45&X-Amz-Signature=4c86ff51318f1d30edcc9a71bc6845770b880b8dc827069d2cbb56fb1d249741&X-Amz-SignedHeaders=host&x-id=GetObject)

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
