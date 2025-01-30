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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4LU2NR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8RepCKJhQIYXyeObsuP4ndfOrFnmD2eP6LCmrWoQMtgIgNFOQ099H7uO4wyjEex%2Fqpl8ovmiDo%2FxBiFibux70qroqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEdSEzTqXGGinI3GCrcA3dDrt1ImKCPtsUyK%2F6pwTbXusPvSp4ALnWlnXH07yHnK0R2X9x%2FuxselcTN1vr85AI6BM4b%2FPUU0xmBqN%2BErqq7CrtihTnCM3UMXrFV6LbaAdimCwBpL8phBxNU0QUwVaozaAftw%2FsJ8sJwRsi4qbUVkrHVjWw1jKlqkGNDaOtP7xf32nU%2BFCn1a0G1FfSVzQKkXtmBgdVztgJSYqVXhfncErRVlgGSlQMohiQk0CSoDkEtoCZo023V%2FMgKqt%2BEyNxRrDSIfq2%2FimkTzsaMvlqTAg3kKcliOB%2BqkO%2BaHXmLlevTE2zfH%2FwyQ2phL1Mn6WgYGTaQoHTP0vf9osHkp4OgSdJnPWwaqwEPz852CYiZNg4rNyw6sHZiFX9WFd4JOd7EGzvzZhPd4dH7SXbVyPs1Bh53qdHHcpC3MzvPCRPQ%2Bo1RAcH8M%2BjAntge9DCzLzu2bZeWMD2LK4MQLRZ4xna62sBNufD7xZFyK52vSRGFwwnWGptj5rEYBnTG8ylbgu0GwVvFBvXlBdifkq%2FOA2XQYx5V2sv%2F2CmRxKa6iPLWmKpGpUdA%2BebZAjq4RA7fxw5IoxjGE9HKqBTlozTg%2BfooRhPSm8EROu%2Bprh%2BPF0QyYE3PKgEnyciWpopiMOXZ7rwGOqUBhWRD2JyoM8Pp28bqv%2FRXiG9o7hPzf%2F1J3DWBkQbaH3C89JzkrftVTHeiD5TN%2BokwOQCiWrVa7xDY1s5du95zlH%2BcOO19ng5dl3Z8R5ejB9p5ItoDrNDVf6DojqfhizGMdNu3SN4gIwKyu7lEeaTgMx1WRRI53TZQAgLj0Weu4JDzYMnHuXhYR8Hsy8d2VJCP%2B7I%2F0D2zojnZCBMideqk1fcnrJHq&X-Amz-Signature=df4e14fc1cfbb230ba144aeeacac6778b200b24a2a34775a1edb5448f1feeabe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKUPQWC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3W28U%2F8mh2Lwy9EAdblZhyDiTRIcrhx6smy1YOX3I%2FAiEAuSscLy2Uv6pMsiVIbkDl8m%2BZh2Ay5gHzACJ0EPjHmgEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrFKM0tUcxOEoLhxSrcA7WX%2BALE%2FQAAqAWfj6TFajvF5%2BrSHwib74y0VXtIXo4zMZcscNAS1URRaCiu70QBLwM8WB0s7aStyC3OeikwS5%2FqeZApEZMl8tT9atiQSXvD%2FplwKCFh1buslx64yaoRbWmh8P66hrC97%2F6y7Z6gCoiWnndxQWJ6Lckr%2BNfI4P3nH%2F%2FB5U9PXTHDd%2FIIJOLlx%2BQV8UzQ6hoOpEzv07iGwMsaiL811RoipgN6UyLBZ86CXNNZbXjOk%2F6bzz%2FdBCCXzrB8SU3Cii4n7f3QNFnshNzHH1ZVAu4nMyyRI3zrhAZsbFhcPKE6OA%2BlyvBaYIePwYv%2FFMA0qMV%2BzESR6QuHrU3FVgt5jTu7yKdKU9EiBGS8l%2F7WZFwWdQL5YeLFY4NFnbCxbwyopVM7OYAthd1va3U%2BbBBbTbvBepVyM0zlpXdPLCD9UlfA4Co%2F22Zi7EOv2edBqam3HJp3Wj1Pv2tJdmZ0ULECOKhq%2BED%2BeBV0EFMy6UpfMF3gJPMJU5FXcC5hQ3vJZAMprFmTRTV%2BWLIM1F4zz0zVTADZyoSVif9g8QNp9DW8RwCOqa9XkCClJiYmSS2tUqu2KCt5Zle6cXUgG%2FlnDXPh%2B3ZXuYaD71BkGW2GxpF58kIkYEcXpwLRMIzZ7rwGOqUBuvI0DSnvGlBsYv8%2B0pEToTyy96wUJiyO06QiK17Cj1Sz%2FzP5QQNViA81OIYVpJvMezeEKA9EyWV7SKoHxx5%2FzgeZGbzmQ1zC9mFEG9qpepmnht6sLC%2Fy5PezSctv9ukyVH1Wl0AFqGVM6WIdAQUDdI66iyQyw2KAU%2FF5rcbTG7DqnLy%2BDL86PBdl3tnqtqraaD4HObRbZZlDVBa8%2BQSPjRkQTXZ3&X-Amz-Signature=0a735adea3ea96f7a137d264d923fbf4a9ab3fc2fdf7a5be8bf07fe7ed5d1df0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
