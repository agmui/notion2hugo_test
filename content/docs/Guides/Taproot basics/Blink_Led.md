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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIHIUZJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiD5d0sMNpRRXa%2Fech20x8seuIT21lX2uOhnQkRyPwnQIgW6VsTFuzUS1DZRHgOUDVW%2FJiyglLJAr4XH7Quzn0dQ4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8WmjbipDVfhlBsWyrcA9uq1NJ9ZvspK%2BjMHMBvhHpug9msr%2F7yQ8DqWkaCjO%2BOqn4JFaxMJ5oG%2FsmNFPZTSJu3YbT2aDwfp23YYZatHs4yH1JYeH%2FP3NcpfFzrv2nScF1nNmBK4LGY3Fed%2FJWshGXZ8WYF%2BWRwTrHDfc6Vq5yCnL1x9eQIAyvhZRUQ1ixz42MdeQnLKOgjfZHYcIPh7IdDgmLVKJT8%2BHI6utUF7x5tQUbwuz9xospGZGstVQuECBj1lT914lTyTKQFXcv4vbQqaMHq8gYObpPoyMjCUflgY1H%2BixETZqW8UrwxWtBY0A64Bf2rkQB3a%2BbhQNJwbYfGqWlMjekY0pB7CLtOrPOF%2F4YXqinaJH0eiDY4Tmx%2BoHMr21i9NYbyKwiJTA4ebJP%2FbRErEY%2BBZN%2FmjDlLHKrKsy01QPb92dR8cHXsq3gzVoGJB8X7SLNG1Uxsl2oDFc7L7TnAhIh2rXeNO12JPgfzoeHraYA30T2RPfZEjf4uaY7u2sqXqY%2FH1lcVTn%2BJBt3cvibhO0PPDB%2FcjcBcI7jO7TJiNwb2yRXk37W7OnlMeQ63OVlXqRxA9YMRbxqz%2FQhd9%2Bghqk2BA8btaI9dI%2FxMTVHSRYIBYeUYoVBUL6iKNb7mvAISU2f874%2BeMN3x6MEGOqUB3amenj0kdVvzmbel9CNVIliW0S0A1UbXHvSMi4u82Qzrrz1qDSCEnlmGfj6DuyG20vRJnJ%2F74nDmrcYdF7IsJKB1oiMloRAcK0zlydjvJeY0Mmsr1QHDiZQAaJHo9pwlOusT46fSDdDpy78Uxr6JDiF2Zwi%2FCkd7pHnJCCjWvbujj2OiMT%2BswfoHJ0avU45gO2rDjuKNU%2BnmlH%2Bd9i%2BE7MvCD5Nm&X-Amz-Signature=61469dcb68f01c28dcecf0cb671fde2572a2e3feb05ba4ec863fa4bb92c8d7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWY2G5P%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCw20b6AF6h386KWgpO1Z7ZWprFgBr8V0GYs2BaD8r5wIgOqNdYk29tAmEIrI7S25V3arpCNw3jMMM4zdMAUfptTsqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsCyzgrJUh%2FDNA4MSrcAwiDZPyxZ7zrvEaSfIbFLa5iBupFEBkM7NhVX3YkntOdxAE8k3GXpJDgD9bOXbZQfd%2BT1HFD0q0RxBrnMoi%2BbpHj4rkfLvNzN3lAI2aAI8HvohH0jgG10c6zd%2BdOBgzz841C9Nhwf1x9ko9cq%2FPTiawtN0Tq3A88%2FYxDcmKtZtc5h%2Fqc7VwQAWsDEtFPdXtc7u46jVeR%2FCBKDQYW3V%2B%2Fe2woRs%2BrgbTFadHRUDF8tFs6JDJEZYWJgkc0qWVrAZgbaT8%2BHLFJkt%2Fnr8CA7ps9LwihZVqx55EL07X3syGUB9ZPxGd%2FUAXGNezdc67sJGR8IhCvGVfFzVg6Hk4bh50%2BfIqS0rEB2NC9WZa5c2kayXtqxpYElt3kjPnSWjZ6FaHZW82kirmnIAEzsN73ow0gW0K1gGnY7P5RD%2FOI1mcERXvADjqW3w2Wqhdjp9MVALlsSVxVpXJb58ejSXlfVts3sxVN%2BCNrA3tMz5T2%2Bkcm8yC7GKfnMPed2amREgCa3oDEUmcZZLFGGTwGOz9hD%2BqOj7LvmKF2ky4wy1LKxcyylqBsJ%2Bluv5Gc46Gu%2FPEkG9mL339%2Bb1jkn37x0kMJA0Zv7ilc%2BhLTJNYVXlXEyDZGAE90aaTVNnR8y5BadyEkMLPx6MEGOqUB9VRPkp%2FAWe6EELm8LyrH%2BqPhXlTEubKqAD7lPnCkQ%2Fvc%2F26v8w0aCDlEXFErjeLeKrqlRuPxAO%2FfFil7fwPvT3L51xn6pj3jJo9qvbq62HIxLwAf3yY2CsflYzG%2BubVdKjvduPjX1c76Buehj1Lml9y4dbfRBi3esqh7OfOFDPJglgvySt6MOBxAtg%2BJ9njAQoYTKTB2i6JH2SZylh%2F61bE7VHHX&X-Amz-Signature=52ea1a2bc87bfa6914983545b70eacbad4d33797796c012762711462c56038ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
