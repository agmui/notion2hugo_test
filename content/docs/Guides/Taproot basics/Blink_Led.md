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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH532OED%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIBTG5tlExhoxUbYi1If7JmXq%2BYAjOum953Puff%2BvbIrqAiBQa0bXUv8dgHup%2FOWHjppMCzwMIN7BWFkP31%2BCW%2Bh5ZSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMfablr1Nl0aXBFxaNKtwDXu9NxrkNTLnUJV6lFjDWio0pHFM%2FxCKanEutEVNE2IJTV5EEGgSw0LpB9E2RBXOh7hxYbWwjVzsSJBDArXipW7HET6zJ%2BNGH0Wsa%2FFc3qu3YaJUcHRqnkYnr9%2F4hlidMMw23DhyYxZEBe2mm9Neto%2BixVo5Agtdam0xyV9Gc2V6LqsHSsuXj9RnJYqPFyZNqfG%2FXaXHlF5WGLAWxEgl1vNX9giRI7%2F%2FdGQEYIzB7jgZjRkUwmn7%2FA74EmkZTRSevcGgwL5mA9AGa%2BldDHtKSQM3qGqrvtZd8d1ThdO%2Frf6d0sibDwZVjs9xm9PI3iwNiWLDEwd%2FWQjPXR9CvPtyIO%2FCHjOwyVIDHYNLiZnEkz8yUD0v%2FXgaO%2Fpi2OJpDzdowk9%2BcFyVc21qKrRO%2BVkminrV3QKko8vaMQRZDN0gVv5yHuy1sXa71QLZnrBqhEWOvT7WvsuPyTvorC5CbE2Epc0ZXXP4Rl4ntcDeUIjRPwahLhOZRY6jMACcSb5aZgVTzAL%2FzKvBdOtHMuaRSBGoajUQJpF7sItU7ERvpy8CC8UVThjj5rejY6vZqwnT5RDv0nAsQJTk2z0Zv5f69sRV%2FYIOFZH9ngST0URU1DnDCZHwNjF%2FkvSUJxzjH%2FS8w1ufdwwY6pgEO41M40nj1mvcEWG%2FJ0ju0bbXZVxZhHlqjo1r1OftH%2BtURa2xEGQ3NXPCmChRmVCQcJfg5S%2FFLxTYxjMx3UfyKjyZABVKeEGyNgrZgYyvfRD1VPOn8zjVs71VA92xEDetB%2FT34QPu%2B9DBRyLkwwiLyp137KWYe51q3TuGFRn0hL8nyijQ7zvqPEUQe%2FaSCl3mo0NNqmm5zW0Y3MbC1zWK9Vpn6MTUn&X-Amz-Signature=a5a69d6d1a7e093512907741b77d74b8bad3e5d97f01568cf2e0c276353202e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PFZUR7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIGppDqHGxLH%2FA7N7TaUIC8u%2BIQ993eIpdsdBHxC9R6BEAiEA5MonouCQrKXoff5nMbu8z2ASyKhqeeItWu1MN2g9rEcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPK%2BEgPOSe1nArV%2FvircAycGrRKECi3FDosmItIuCXYhzcRRySu9t0b%2FkWkytALqLaO4IfavdIDOr34EyrybaIoz9VOV2eNTSz39uQRAyXyNKoZlN264XLQtkrUlIDq8pTRBEaqbynRhWEvOxqufQ1TztsEWFgmdOIbN%2Fqkwgoni74J1r2ozglLTk5uAMw6YRaehUmkSzRkxtvwf%2BjePnqrmczS9fygTnA4XYHv%2BV%2BYKrU30z5dIIris%2Fhol1u43ObotDrh208rocEJ3EqQRFK6yMUAL%2FecISi1FU2rsPk2PKdQnZ4PZ7AlRGqueI1Mbkr8idj4uVWK6Jw5iOGk6ZM8LtnDFuP2P7PK%2FK%2FfbFXb2ZOzSWT4qmAgaBSlBG6lNum8VDPNRZl9GCeuHasYN61wqFYmVp1jgMctMToHdFvxvUeINvaNOiZ2LZgSFl2ggKTVWriq9CzelZ3lbiGQTA7mudcBbOGpeRU1PLVJbeM8L87ohzO5UIXT7re%2Fd2HvBahVkssIySOX0F7Cl2avV0UmAvSni3tX1WPExcDwTJJi1v%2BW8ZDepneZRvP%2F0mEJNnOMOFrMT8oxV89dvQoecTt8ekjy75cyUBNlft%2FfQS3UHkALTst3yeHfTH11MQXsNBzoY9w5MF5ESdmxOMIbo3cMGOqUBdBbCm%2Bx%2B0RAjeeEJfh2k9brC90mnhVwu3sVfzGDoPtRsoB3L2RlV1v8RepsIY%2F7W3rRz37GwM0vQIt0xsssxT4ZVQkKE1R%2BuWG5GwaXOJpmG9Zxs9uxqSODH2F226Ua4w3jyxaq40RD0qP0DXc7pw4tUvo8LN0i8xrHhc%2FVbMvzgNuOLl7qtnV%2Bi3YQLO9hAWZGWy0RBicFo2rlWH3qelYNjutal&X-Amz-Signature=90d4f216c392fe5fa7ad81281ff3f23b214eaded27c4445fbc6c0a3b02663a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
