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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVCQ3Q3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDj2xxMEomiN1bpWH%2BrLi8PB02WWftpDkwjZqgPnB1FlgIhAN7IiQrqHxkrjC%2BVFb%2B3NDrZ3C%2F326kHDy6cNZ3gJKrqKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZcqnkLVAJ8h%2BZ3Xwq3AOhy3tde8V%2B%2F98gXgEeRFrH7Wk9J94MYbaM20cdJHS%2BlrbR13vMrjWehMtHzbe9sZaBTAnBJv9zR0TPMNf4u8Kiv0XFXVhVE2TiekuWY0GGz9RldW7Wwmd%2FD7twD5dovF6UqUmOw0Pjm3qQZXqRtyhqdU2lf1ahCEvqGz8dRrtfVGKuHzffyk4Wy8gzZgi1VgL6paI5oI9YEPKDoVW8mBM0JPANtLuszxpW8KF9NIW0O%2BKy0cPySo35%2B68bqLBC2WJ7icnbBm%2BoI6%2BR7OAmL9u0FCwKfkRKz90lOP31GD8cYKD6Opw7moetOxuWcsmPS%2FpZ6tEkOm8Nsi3gBxbkaQjDp6Ie37EKXUbJ0NJngB%2FLTFVaJxY%2F3rn4JcNnX0XMVfk1m5FDX7v4tSvWcZXNmU%2BdQQnWpMrw8Mx5iR5gyYS4j%2BOFa45AWGrrW7%2B49Uz%2FBVJLZdfa5B0tdH3Db8%2F3J0TQCzSbgtBLSO1HKo%2BOM3iCq595EiQfNot7f4SsEk4NymeBsCBJHRp2v94hkGwHw9GpJ4sY09y4rzfRiSkMWTGEqcju6qKVB4vRl9xc3hVxjOv%2FaI8OpMVGf9BjFo4mxdq0yCFrb%2FfOYw7y7vuHDlwpZ9SvYMRgdKP8F7NNKjCf1Zu9BjqkAWMiBkQOMZcg%2BO7y3To69n2YIa8T2P72w6FjVQto1HkXvdDEQiHmdXYajqTbWABd9MqYiyhstNnGhM%2BHQ3v0jS%2BdmCLQP8Ztq3LS7V%2FPIB2dkPZzS9OZUUUGwN8AlTS5oeSqIrdBP386pAlgWb5CsFBELnR4FeX1C4JGqsivHvCR%2FDZl5Uwae2HSFoOyy1CKm7gYPJiteycbMeFRacRRnvzMe7h6&X-Amz-Signature=25e3d109d295a15950eed3464c195ab017e978c9d3be4eaddc2c9a196acae7b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R6OJI3X%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDAJ1JXyYA16NVwhTZ66NZATLGwN9bN3XMj6tf1RmpfkwIhAMTwSKfFE10yJ1iiHclzAI8fQplTKzXwM%2BkgRS4HZuVEKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPOdq8GyqsyFbdT4Yq3AOaELzXcmG%2Fsm7FWG41SbpfEUfD3Xt2sVhMzZrhxoZ9LVxJUPddpG%2FK7RFO0%2Brsg5yuoFkhSdS8ldJANSO%2FRYFj6Gvvr0j0A0Ho75iZomh8mz%2FHsEAdp1ADJ35E0R0JPj9%2BBHKvvu6i1wiGw6Xf%2B7ObDxhdR%2BBMjqoLi%2FD9NjCq2Nsm9pV1I2iB9M2M47xab4aBhYE7EO%2BVeTsRcrCPe7ZPENK3tOKiQ%2FJg%2B%2B2PErfvkYZ0byHwtxDRltN0ZuAGOqaZ9qO60dMGyuW67WsEPuiZTOWCqXK4RaveBrmrz4xIxwqq86oX491LeEuuQJKdejQNnOElP3gGSpl1He9L7qlLhJ6HxNiNSGvZloxKxVDoLcTnEeGSxqdEESuZRquJ35Of0RkPOkjDbqGOzi3RZ6pVdMYqIOeYIeoRDjWqlIopbRySZ%2B%2BvMOZHvQ0lDgMEd01l7bo0cWqKqFyhPu1zV2cVM9O57xVWnEaTStSOW0QDPPl4oFg0Ib9HMlCYKNpEAAfrMY3QOo47vvwHe7whWjVGNZDhFs%2F9NCgkYu50B3s1na99QFPPu%2FjbyvMOOV20NOwLdDECX7Gna%2B5vrU5%2FmrwK2oqUhXyxGYH4JQX6cFZd%2Bs3GsMGLv3hVr%2FcN5DDJ1Zu9BjqkAfSWc2wHlvgmQ3kW8mjAJLMvavyQlY9PVbYtBuqcpK5rRSNNK6yfxk08cLRthstdmTh4zb0OhoL%2FMVnOmgx8OuuZseU9y1UcvovXzrhN4bTDBLupTupfHSyeRb5CmRQQLYuDicJJPvUG44hGslm8KARZnixQDuFHeZSvu9eaOttrLwt6E1zU1IiBbuyTUFDz7xENKROY2xmGl5k5ozgim8YNdEdP&X-Amz-Signature=211902ec72b9fece1079f5475d9177d59f7f2ad2bde7e44c43125f4e4b9177ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
